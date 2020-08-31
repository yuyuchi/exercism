const NUCLEOTIDES = {
  'A': 'U',
  'T': 'A',
  'C': 'G',
  'G': 'C',
}

export const toRna = (dna) => {
  return [...dna].map((n) => NUCLEOTIDES[n]).join('')
}
