exports.validLocation = (lat, lng) => {
  return Math.abs(parseFloat(lat)) <= 90 && Math.abs(parseFloat(lng)) <= 180;
};

exports.validTime = (timeStart, timeEnd) => {
  return (
    Date.parse(timeStart) > Date.parse(new Date()) &&
    Date.parse(timeStart) < Date.parse(timeEnd)
  );
};
