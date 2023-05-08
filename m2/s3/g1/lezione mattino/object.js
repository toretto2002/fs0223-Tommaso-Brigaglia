console.log("ciao");

let obj = {
  name: "roccia",
  module: "U2",
  "type-of-teache": "frontend",
  explains: function () {
    return "ciao bella cannella";
  },
};

console.log(obj.name);
console.log(obj["module"]);
console.log(obj["type-of-teache"]);
console.log(obj.explains());
