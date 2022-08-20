const sortMessages = (messages) => {
  console.log("sorting messages");
  const compareFunc = (a, b) => {
    const valueA = new Date(a.datetime);
    const valueB = new Date(b.datetime);
    console.log(valueA - valueB);
    return valueA - valueB;
  };

  const sortedMessages = messages.sort(compareFunc);
  return sortedMessages;
};

export default sortMessages;
