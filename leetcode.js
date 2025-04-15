let promise = new Promise(function (resolve, reject) {
  // This block is executor which contains producing code which produces result either resolve(value) / reject(value)
  // You can give any name in the place of resolve/reject with your name also its fine like sagar/bram
  setTimeout(() => resolve("Problem resolved"), 2000);
});

console.log(promise);
promise.then(
  function (resolve) {
    console.log("Succesfull");
  },
  function (reject) {
    console.log("Rejected");
  }
);
