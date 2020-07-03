class Time {
    constructor(start, end) {
        this._start = start;
        this._end = end;
        this._duration = end - start
    }
    setStart(newStart) {
        this._start = newStart;
        this._duration = this._end - this._start;
    }
    getStart() {
        return this._start;
    }
}
const time = new Time(0, 20);
time.setStart(5);
console.log(time.getStart());