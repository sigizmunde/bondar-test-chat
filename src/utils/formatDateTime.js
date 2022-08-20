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
