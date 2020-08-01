export class Clock {
  constructor(hours = 0, minutes = 0) {
    this._hours = hours
    this._minutes = minutes
  }
  
  padZero(num) {
    return num.toString().padStart(2, '0')
  }

  toString() {
    this._hours += Math.floor(this._minutes / 60)
    
    this._hours %= 24    
    this._minutes %= 60

    if (this._hours < 0) this._hours += 24
    if (this._minutes < 0) this._minutes += 60

    return `${this.padZero(this._hours)}:${this.padZero(this._minutes)}`
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
}
