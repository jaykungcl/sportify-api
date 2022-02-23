exports.validLocation = (lat, lng) => {
  return Math.abs(lat) <= 90 && Math.abs(lng) <= 180;
};

exports.validTime = (timeStart, timeEnd) => {
  return timeStart > Date.parse(new Date()) && timeStart < timeEnd;
};

// exports.validCategory = (categoryId) => {
//   return (await)
// }

exports.validLevel = (cat) => {
  return cat === "BEGINNER" || cat === "INTERMEDIATE" || cat === "ADVANCE";
};

exports.validNumPeople = (num) => {
  const n = Number(num);
  return Math.abs(n) === n && Number.isInteger(n);
};
