var rxjs = require('rxjs')
var Observable = rxjs.Observable

const observable = new Observable(observer => {
    setTimeout(() => {
      observer.next('Hello from a Observable!');
    }, 2000);
  });

observable.subscribe((val) => console.log(val));