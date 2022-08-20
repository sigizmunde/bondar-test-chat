export const USFormatDateTime = (datetimeString) => {
  try {
    const date = new Date(datetimeString);

    const formattedString =
      date.toLocaleDateString("en-US") + " " + date.toLocaleTimeString("en-US");
    return formattedString;
  } catch (err) {
    console.error(err);
    return "no time specified";
  }
};

export const USFormatDate = (datetimeString) => {
  try {
    const date = new Date(datetimeString);

    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();

    const formattedString = month + "/" + day + "/" + year;
    return formattedString;
  } catch (err) {
    console.error(err);
    return "no time specified";
  }
};
