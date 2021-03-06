const CODON = new Map()
CODON
  .set('AUG', 'Methionine')
  .set('UUU', 'Phenylalanine')
  .set('UUC', 'Phenylalanine')
  .set('UUA', 'Leucine')
  .set('UUG', 'Leucine')
  .set('UCU', 'Serine')
  .set('UCC', 'Serine')
  .set('UCA', 'Serine')
  .set('UCG', 'Serine')
  .set('UAU', 'Tyrosine')
  .set('UAC', 'Tyrosine')
  .set('UGU', 'Cysteine')
  .set('UGC', 'Cysteine')
  .set('UGG', 'Tryptophan')
  .set('UAA', 'STOP')
  .set('UAG', 'STOP')
  .set('UGA', 'STOP')

export const translate = (rna = '', protein = []) => {
  if (rna.length > 0) {
    const aminoAcid = CODON.get(rna.substring(0, 3))
    if (aminoAcid) {
      return aminoAcid !== 'STOP' 
        ? translate(rna.substring(3), [...protein, aminoAcid])
        : protein
    }
    throw new Error('Invalid codon')
  } 
  return protein
}