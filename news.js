const _mergeArrays = (a, b) => {
  const c = []

  while (a.length && b.length) {
    c.push(a[0] > b[0] ? b.shift() : a.shift())
  }

  //if we still have values, let's add them at the end of `c`
  while (a.length) {
    c.push(a.shift())
  }
  while (b.length) {
    c.push(b.shift())
  }

  return c
}

const mergeSort = (a) => {
  if (a.length < 2) return a;
  const middle = Math.floor(a.length / 2)
  const a_l = a.slice(0, middle)
  const a_r = a.slice(middle, a.length)
  const sorted_l = mergeSort(a_l)
  const sorted_r = mergeSort(a_r)
  return _mergeArrays(sorted_l, sorted_r)
}

a = [9, 5, 2, 4, 7, 35, 8, 34, 56, 8];
console.log(mergeSort(a));

//check if length is half
// then do the half the
// perform merge sort on both half
// then merge those halfs