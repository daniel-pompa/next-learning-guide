// Convert height from decimeters to feet and inches
export const convertHeight = (height: number): string => {
  const inches = height * 4; // 1 dm = 10 cm, 1 inch = 2.54 cm, so 10 cm = 3.937 inches
  const feet = Math.floor(inches / 12);
  const remainingInches = Math.round(inches % 12);
  return `${feet}' ${remainingInches}"`;
};

// Convert weight from hectograms to lbs
export const convertWeight = (weight: number): string => {
  const lbs = (weight * 0.22).toFixed(1); // 1 hg = 0.22 lbs
  return `${lbs} lbs`;
};
