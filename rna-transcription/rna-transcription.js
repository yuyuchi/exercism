const NUCLEOTIDES = {
  'A': 'U',
  'T': 'A',
  'C': 'G',
  'G': 'C',
}

export const toRna = (dna='', rna='') => {
  return dna
  ? toRna(dna.substring(1), `${rna}${NUCLEOTIDES[dna.substring(0,1)]}`)
  : rna
}
