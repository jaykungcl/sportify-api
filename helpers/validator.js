exports.validLocation = (lat, lng) => {
  return Math.abs(lat) <= 90 && Math.abs(lng) <= 180;
};

exports.validTime = (timeStart, timeEnd) => {
  return timeStart > Date.parse(new Date()) && timeStart < timeEnd;
};

// exports.validCategory = (categoryId) => {
//   return (await)
// }
