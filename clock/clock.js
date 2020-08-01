export class Clock {
  constructor(hours = 0, minutes = 0) {
    this._hours = hours
    this._minutes = minutes
  }

  toString() {
    this._hours += Math.floor(this._minutes / 60)
    
    this._hours = this._roundClock(this._hours, 24)
    this._minutes = this._roundClock(this._minutes, 60)

    return `${this._padZero(this._hours)}:${this._padZero(this._minutes)}`
  }

  plus(minutes) {
    this._minutes += minutes
    return this
  }

  minus(minutes) {
    this._minutes -= minutes
    return this
  }

  equals(clock) {
    return this.toString() === clock.toString()
  }

  _padZero(num) {
    return num.toString().padStart(2, '0')
  }

  _roundClock(num, unit) {
    const correction = num % unit
    return correction >= 0 ? correction : correction + unit
  }
}
