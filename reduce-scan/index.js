import Rx from 'rxjs';

Rx.Observable
    .interval(200)
    .take(5)
    //.reduce((acc,value)=>acc+value,0)
    .scan((acc,value)=>acc+value,0)
    .subscribe(a=>console.log(a));