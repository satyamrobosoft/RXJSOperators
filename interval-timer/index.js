import Rx from 'rxjs';

const stopWatch = Rx.Observable.timer(2000,1000);

stopWatch.subscribe(a=>console.log("A", a));

//const ticker = Rx.Observable.interval(1000);
//ticker.subscribe(a => console.log(a));