export default function humans() {
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', '', '', '', '', 'a', 'e', 'i', 'o', 'u', 'i', 'a', 'e'];
  const nm2 = ['b', 'c', 'd', 'j', 'k', 'l', 'm', 'n', 'r', 't', 'z'];
  const nm3 = ['a', 'i', 'o', 'u', 'a', 'o'];
  const nm4 = ['b', 'g', 'k', 'l', 'm', 'ng', 'r', 'rr', 'ss', 't', 'z'];
  const nm5 = ['', '', '', '', '', '', 'h', 'k', 'l', 'll', 'lph', 'm', 'n', 'nk', 's'];

  const nm6 = ['a', 'e', 'i', 'o'];
  const nm7 = ['c', 'f', 'h', 'm', 'n', 'ph', 'r', 's', 'sh', 'th', 't'];
  const nm8 = ['f', 'l', 'm', 'mb', 'n', 'p', 'ph', 'tr', 'ld', 'r', 's', 'sh', 'v'];
  const nm9 = ['a', 'e', 'i', 'o', 'ia', 'ei', 'ie', 'ea', 'a', 'e', 'i'];
  const nm10 = ['', '', '', '', '', '', 'l', 'm', 'n', 's', 'sh', 'th'];


  i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm6.length);
      rnd2 = Math.floor(Math.random() * nm7.length);
      rnd5 = Math.floor(Math.random() * nm9.length);
      rnd6 = Math.floor(Math.random() * nm10.length);
      if (i < 5) {
        rnd4 = Math.floor(Math.random() * nm8.length);
        names = nm7[rnd2] + nm6[rnd] + nm8[rnd4] + nm9[rnd5] + nm10[rnd6];
      } else {
        names = nm6[rnd] + nm7[rnd2] + nm9[rnd5] + nm10[rnd6];
      }
    } else {
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd5 = Math.floor(Math.random() * nm5.length);
      if (i < 5) {
        rnd4 = Math.floor(Math.random() * nm4.length);
        rnd6 = Math.floor(Math.random() * nm3.length);
        names = nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm3[rnd6] + nm5[rnd5];
      } else {
        rnd = Math.floor(Math.random() * nm1.length);
        names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm5[rnd5];
      }
    }
    return names;
  }
}
