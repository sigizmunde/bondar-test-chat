const sortObjectsByDatetime = (objects, direction = 1) => {
  console.log("sorting messages");
  const compareFunc = (a, b) => {
    const valueA = new Date(a.datetime);
    const valueB = new Date(b.datetime);
    // console.log(valueA - valueB);
    return (valueA - valueB) * direction;
  };

  const sortedObjects = objects.sort(compareFunc);
  return sortedObjects;
};

export default sortObjectsByDatetime;
