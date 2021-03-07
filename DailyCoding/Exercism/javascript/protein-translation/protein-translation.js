//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const findCodons = (codon) => {
  let protein;
  switch (codon) {
    case "AUG":
      protein = "Methionine";
      break;
    case "UUU":
    case "UUC":
      protein = "Phenylalanine";
      break;
    case "UUA":
    case "UUG":
      protein = "Leucine";
      break;
    case "UCU":
    case "UCC":
    case "UCA":
    case "UCG":
      protein = "Serine";
      break;
    case "UAU":
    case "UAC":
      protein = "Tyrosine";
      break;
    case "UGU":
    case "UGC":
      protein = "Cysteine";
      break;
    case "UGG":
      protein = "Tryptophan";
      break;
    case "UAA":
    case "UGA":
    case "UAG":
      protein = "STOP";
      break;
    default:
      throw new Error("Invalid codon");
  }
  return protein;
};

export const translate = (rna) => {
  let foundCodons = [];
  if (!rna) return foundCodons;
  const splitRNA = rna.split("");
  for (let index = 0; index < splitRNA.length; index += 3) {
    const codon = findCodons(splitRNA.slice(index, index + 3).join(""));
    if (codon === "STOP") {
      return foundCodons;
    }
    foundCodons.push(codon);
  }
  return foundCodons;
};
