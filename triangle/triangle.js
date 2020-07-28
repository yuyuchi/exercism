export class Triangle {
  constructor(s1, s2, s3) {
    this._s1 = s1
    this._s2 = s2
    this._s3 = s3
  }

  isValid() {
    if (this._s1 > 0 || this._s2 > 0 || this._s3 > 0) {
      return (this._s1 + this._s2 >= this._s3) && (this._s1 + this._s3 >= this._s2) && (this._s2 + this._s3 >= this._s1)
    }
    return false
  }

  isEquilateral() {
    return this.isValid() && (this._s1 === this._s2 && this._s1 === this._s3)
  }

  isIsosceles() {
    return this.isValid() && (this._s1 === this._s2 || this._s1 === this._s3 || this._s2 === this._s3)
  }

  isScalene() {
    return this.isValid() && (this._s1 !== this._s2 && this._s1 !== this._s3 && this._s2 !== this._s3)
  }
}
