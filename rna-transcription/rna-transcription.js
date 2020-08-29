const NUCLEOTIDES = {
  'A': 'U',
  'T': 'A',
  'C': 'G',
  'G': 'C',
}

export const toRna = (d) => {
  const r = [...d].map((n) => NUCLEOTIDES[n]).join('')
  return r
}
