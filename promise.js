const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Ashika');
    }, 1000);
  });
  
  myPromise
  .then(value => { return value + ' and sagarika'; })
  .then(value => { return value + ' and sagarika again'; })
  .then(value => { return value + ' and again'; })
  .then(value => { return value + ' and again'; })
  .then(value => { console.log(value) })
  .catch(err => { console.log(err) });