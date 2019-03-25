export default function miralukas() {
  let names;
  let rnd2b;
  let rnd1;
  let rnd2;
  let rnd3;
  let rnd4;
  let rnd5;
  let rnd6;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['A', 'B', 'Ch', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '', '', ''];
  const nm2 = ['i', 'a', 'o', 'e', 'u'];
  const nm3 = ['b', 'c', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'y', 'z'];
  const nm4 = ['b', 'c', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'y', 'z', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm5 = ['i', 'a', 'o', 'e', 'u', '', '', '', '', '', '', '', '', '', ''];
  const nm6 = ['c', 'd', 'f', 'h', 'hr', 'hk', 'hl', 'k', 'l', 'm', 'n', 'p', 'r', 'rr', 'rth', 's', 't', 'th', 'y'];
  const nm7 = ['A', 'B', 'Ch', 'D', 'E', 'F', 'Fl', 'G', 'Gl', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'Sh', 'Sl', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const nm8 = ['i', 'a', 'o', 'e', 'u', '', '', ''];
  {
    rnd2 = Math.floor(Math.random() * nm2.length);
    rnd2b = Math.floor(Math.random() * nm2.length);
    rnd3 = Math.floor(Math.random() * nm3.length);
    rnd4 = Math.floor(Math.random() * nm4.length);
    rnd6 = Math.floor(Math.random() * nm6.length);
    if (type === 1) {
      rnd1 = Math.floor(Math.random() * nm7.length);
      rnd5 = Math.floor(Math.random() * nm8.length);
      names = nm7[rnd1] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm2[rnd2b] + nm8[rnd5] + nm6[rnd6];
    } else {
      rnd1 = Math.floor(Math.random() * nm1.length);
      rnd5 = Math.floor(Math.random() * nm5.length);
      names = nm1[rnd1] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm2[rnd2b] + nm5[rnd5] + nm6[rnd6];
    }
    return names;
  }
}
