const AMINO_ACID = {
  AUG: 'Methionine',
  UUU: 'Phenylalanine',
  UUC: 'Phenylalanine',
  UUA: 'Leucine',
  UUG: 'Leucine',
  UCU: 'Serine',
  UCC: 'Serine',
  UCA: 'Serine',
  UCG: 'Serine',
  UAU: 'Tyrosine',
  UAC: 'Tyrosine',
  UGU: 'Cysteine',
  UGC: 'Cysteine',
  UGG: 'Tryptophan',
  UAA: 'STOP',
  UAG: 'STOP',
  UGA: 'STOP'
}

export const translate = (rna='') => {
  let protein = []
  
  for (let i = 0; i < (rna.length / 3); i++){
    const codon = rna.slice(i*3, (i+1)*3)

    if (AMINO_ACID[codon]) {
      if (AMINO_ACID[codon] === 'STOP'){
        break;
      }
      protein = [...protein, AMINO_ACID[codon]]
    } else {
      throw new Error('Invalid codon')
    }
  }
  return protein
}
