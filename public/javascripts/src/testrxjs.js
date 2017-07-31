var Rx = require('@reactivex/rxjs');

var observable = Rx.Observable.create(function(observer) {
observer.onNext('Simon');
observer.onNext('Jen');
observer.onNext('Sergi');
observer.onCompleted(); // 成功完成
});

var observer = Rx.Observer.create(
function onNext(x) { console.log('Next: ' + x); },
function onError(err) { console.log('Error: ' + err); },
function onCompleted() { console.log('Completed'); }
);

observable.subscribe(observer);
