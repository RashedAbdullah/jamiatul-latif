const getNumberValue = (arr) => {
  const sum = arr.reduce((acc, obj) => acc + obj.mark, 0);
  const average = sum / arr.length;

  if (average >= 80 && average < 100) {
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

const getTotalMarks = (marks) => {
  const totalMarks = marks.reduce((acc, mark) => acc + mark.mark, 0);
  return totalMarks;
};

export { getNumberValue, getTotalMarks };
