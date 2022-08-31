export class Triangle {
  constructor(s1, s2, s3) {
    this._sides = [s1, s2, s3].sort((a, b) => a - b)
  }

  isValid() {
    return (this._sides.filter(x => x > 0).length === 3) && (this._sides[0] + this._sides[1] >= this._sides[2])
  }

  isEquilateral() {
    return this.isValid() && (this._sides[0] === this._sides[2])
  }

  isIsosceles() {
    return this.isValid() && (this._sides[1] === this._sides[0] || this._sides[1] === this._sides[2])
  }

  isScalene() {
    return this.isValid() && !this.isEquilateral() && !this.isIsosceles()
  }
}
