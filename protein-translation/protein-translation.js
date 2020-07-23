//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const codeon = {
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
  if (!rna) {
    return [];
  }

  const fragmentAmt = rna.length / 3;
  var protein = [];
  
  for (var i = 0; i < fragmentAmt; i++){
    const fragment = rna.slice(i*3, (i+1)*3);
    if (codeon[fragment]) {
      if (codeon[fragment] === 'STOP'){
        break;
      }
      protein.push(codeon[fragment]);
    } else {
      throw new Error('Invalid codon');
    }

  }
  return protein;
};