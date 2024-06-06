# truthyObj

Object with truthy values

```js
const obj = {
  a: 1,
  b: 0,
  c: null,
  d: undefined,
  e: "",
  f: " ",
  g: "0",
  h: "1",
  i: "true",
  j: "false",
  k: "null",
  l: "undefined",
  m: [],
  n: [1],
  o: {},
  p: { a: 1 },
  q: NaN,
  r: Infinity,
  s: -Infinity,
  t: true,
  u: false,
};
console.log(truthyObj(obj));

//{
//  "a": 1,
//  "b": 0,
//  "g": "0",
//  "h": "1",
//  "i": "true",
//  "j": "false",
//  "k": "null",
//  "l": "undefined",
//  "n": [
//    1
//  ],
//  "p": {
//    "a": 1
//  },
//  "t": true,
//  "u": false
//}
```
