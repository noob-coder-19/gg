const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dateFormatter = (date) => {
  const dateObj = new Date(date);
  const month = dateObj.getMonth();
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  const output = day + " " + months[month] + " " + year;
  return output;
};

export default dateFormatter;
