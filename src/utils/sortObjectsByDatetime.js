const sortObjectsByDatetime = (objects, direction = 1) => {
  const compareFunc = (a, b) => {
    const valueA = a.datetime ? new Date(a.datetime) : 0;
    const valueB = b.datetime ? new Date(b.datetime) : 0;
    // console.log(valueA - valueB);
    return (valueA - valueB) * direction;
  };

  const objArr = [...objects];

  if (objArr.length > 1) {
    objArr.sort(compareFunc);
  }

  return objArr;
};

export default sortObjectsByDatetime;
