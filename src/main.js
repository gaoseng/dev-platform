console.log('hello wor1');
// import '@babel/polyfill'
let arr = [1,3,4];
let  bool = arr.includes(1);
console.log(bool);
// class Test {
//     ss() {
//         console.log(123);
//     }
// }

// // console.log(Test);
// let c = new Test();
// console.log(c);
class Test {
    constructor(name) {
      this.name = name;
    }
  
    logger () {
      console.log("Hello", this.name);
    }
  }
  console.log(new Test);