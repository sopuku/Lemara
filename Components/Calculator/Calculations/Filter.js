function Filter(data) {
  const temp1 = data.replaceAll(',', '.').split(' ');
  const temp2 = temp1.map(item => {
    item.trim();
    while (item[item.length - 1] === '.' || item[0] === '.') {
      item[item.length - 1] === '.' && (item = item.slice(0, -1));
      item[0] === '.' && (item = item.slice(1));
    }
    return item;
  });
  const final = temp2.filter(
    item => item.length > 0 && !isNaN(Number(item)) && item !== '0'
  );
  return final;
}

export default Filter;
