export const getNumberValue = (arr) => {
  const sum = arr.reduce((acc, obj) => acc + obj.number, 0);
  const average = sum / arr.length;

  if (average > 79 && average < 100) {
    return "মুমতাজ";
  } else if (average > 60 && average < 80) {
    return "জা: জিদ্যান";
  } else if (average >= 45 && average <= 60) {
    return "জায়্যিদ";
  } else if (average <= 44 && average >= 35) {
    return "মকবুল";
  } else {
    return "রাসিব";
  }
};
