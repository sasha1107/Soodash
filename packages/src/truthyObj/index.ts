const truthyObj = <T extends Record<string, unknown>>(obj: Partial<T>) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => {
      if (value === 0) {
        return true;
      }
      if (typeof value === "boolean") {
        return true;
      }
      if (typeof value === "string") {
        return value.trim();
      }
      if (Array.isArray(value) && value.length === 0) {
        return false;
      }
      if (
        value &&
        typeof value === "object" &&
        Object.keys(value).length === 0
      ) {
        return false;
      }
      if (value === Infinity || value === -Infinity) {
        return false;
      }
      return value;
    })
  );
};

export default truthyObj;
