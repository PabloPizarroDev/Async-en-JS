//Promesas pueden darse ahora en el futuro o nunca

const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey lo hicimos!");
    } else {
      reject("Whooops!!");
    }
  });
};

somethingWillHappen()
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("true");
      }, 2000);
    } else {
      const error = new Error("Whoops!!");
      reject(error);
    }
  });
};
somethingWillHappen2()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then((response) => {
    console.log("Array of result", response);
  })
  .catch((err) => {
    console.error(err);
  });
