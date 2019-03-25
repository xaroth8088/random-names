export default function ifrits() {
  let names;
  let rnd;
  let rnd2;
  let rnd3;
  let rnd;
  let rnd2;
  let rnd3;
  let rnd4;
  let rnd5;
  let rnd6;
  let
    rnd7;
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', '', '', 'b', 'd', 'g', 'j', 'k', 'm', 'n', 'r', 't', 'v', 'z'];
  const nm2 = ['a', 'e', 'i', 'u'];
  const nm3 = ['c', 'f', 'g', 'j', 'k', 'l', 'm', 'n', 'q', 'r', 'v'];
  const nm4 = ['', '', '', 'd', 'g', 'h', 'j', 'l', 'm', 'n', 'q', 't'];
  const nm5 = ['', '', '', 'c', 'f', 'g', 'h', 'l', 'm', 'n', 'q', 's', 'w', 'z'];
  const nm7 = ['d', 'dw', 'dr', 'h', 'l', 'lr', 'ly', 'm', 'ml', 'mr', 'n', 'nr', 'nl', 'q', 'qh', 'qr', 'r', 'rh', 'ry', 'rl', 't', 'ty', 'th', 'tw', 'tr', 'w', 'y'];
  const nm8 = ['', '', '', '', '', '', '', '', 'h', 'n', 's'];
  const i = Math.floor(Math.random() * 10); {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm5.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm7.length);
      rnd4 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm8.length);
      if (i < 8) {
        names = nm5[rnd] + nm2[rnd2] + nm7[rnd3] + nm2[rnd4] + nm8[rnd5];
      } else {
        rnd6 = Math.floor(Math.random() * nm7.length);
        rnd7 = Math.floor(Math.random() * nm2.length);
        names = nm5[rnd] + nm2[rnd2] + nm7[rnd3] + nm2[rnd4] + nm7[rnd6] + nm2[rnd7] + nm8[rnd5];
      }
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd4 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm4.length);
      names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
    }
    return names;
  }
}
