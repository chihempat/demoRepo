const frequencyOfNumericCharacter = (a)=> {
  let d = []
  let c = 0;
  let n=["0","1","2","3","4","5","6","7","8","9"]
  for (let i = 0; i < 9;i++) {
    d[i] = 0;
  }

  for (h in a) {
    let m = a[h];
    if (n.includes(m)) {
      d[m] = d[m]+1;
    } else{
      c++;
    }
  }
  for (i in d) {
    let digit = d[i];
    if (digit !== 0) {
      console.log(i,digit)
    }
  }
  console.log(`others: ${c}`);
}
const s = "abdbue1234123412";
frequencyOfNumericCharacter(s)