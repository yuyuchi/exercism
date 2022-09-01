const ALLERGENS_SCORE_MAP = {
  eggs: 1,
  peanuts: 2,
  shellfish: 4,
  strawberries: 8,
  tomatoes: 16,
  chocolate: 32,
  pollen: 64,
  cats: 128,
};

const ALLERGENS = Object.keys(ALLERGENS_SCORE_MAP);

export class Allergies {
  constructor(score) {
    this._score = score;
  }

  list() {
    return ALLERGENS.filter((a) => this.allergicTo(a));
  }

  allergicTo(item) {
    return Boolean(this._score & ALLERGENS_SCORE_MAP[item]);
  }
}
