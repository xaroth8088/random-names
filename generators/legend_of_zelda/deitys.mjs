export default function deitys() {
  let names;
  let rnd;
  let rnd2;
  let rnd3;
  let rnd4;
  let rnd5;
  let rnd6;
  let rnd7;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', 'b', 'c', 'd', 'j', 'k', 'l', 'm', 'n', 'r', 't', 'v', 'z'];
  const nm2 = ['y', 'a', 'e', 'i', 'o', 'u'];
  const nm3 = ['b', 'br', 'cl', 'd', 'g', 'gr', 'gn', 'h', 'k', 'kr', 'l', 'ld', 'll', 'ln', 'lm', 'm', 'mn', 'n', 'ph', 'r', 'v', 'vr', 'z', 'zr', 'b', 'd', 'h', 'k', 'l', 'm', 'n', 'r', 'v', 'z', 'b', 'd', 'h', 'k', 'l', 'm', 'n', 'r', 'v', 'z'];
  const nm4 = ['u', 'oo', 'ia', 'a', 'e', 'ai', 'i', 'o'];
  const nm5 = ['', '', '', '', 'n', 'm', 'r', 's'];
  const nm6 = ['b', 'c', 'd', 'f', 'h', 'l', 'n', 'm', 'ph', 's', 'sh', 't', 'v'];
  const nm7 = ['a', 'e', 'o', 'i', 'y', 'ay', 'ie', 'ia', 'ea'];
  const nm8 = ['h', 'l', 'm', 'n', 'ph', 'r', 'rd', 's', 'th', 'v', 'r'];
  const nm9 = ['', '', '', '', 'n', 'h'];
  const i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm6.length);
      rnd2 = Math.floor(Math.random() * nm7.length);
      rnd3 = Math.floor(Math.random() * nm8.length);
      rnd4 = Math.floor(Math.random() * nm7.length);
      if (rnd2 > 4) {
        while (rnd4 > 4) {
          rnd4 = Math.floor(Math.random() * nm7.length);
        }
      }
      rnd5 = Math.floor(Math.random() * nm9.length);
      if (i < 5) {
        names = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm7[rnd4] + nm9[rnd5];
      } else {
        rnd6 = Math.floor(Math.random() * nm7.length);
        if (rnd2 > 4 || rnd4 > 4) {
          while (rnd6 > 4) {
            rnd6 = Math.floor(Math.random() * nm7.length);
          }
        }
        rnd7 = Math.floor(Math.random() * nm8.length);
        names = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm7[rnd6] + nm8[rnd7] + nm7[rnd4] + nm9[rnd5];
      }
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd4 = Math.floor(Math.random() * nm4.length);
      rnd5 = Math.floor(Math.random() * nm5.length);
      if (i < 5) {
        names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd5];
      } else {
        rnd6 = Math.floor(Math.random() * nm2.length);
        rnd7 = Math.floor(Math.random() * nm3.length);
        names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd6] + nm3[rnd7] + nm4[rnd4] + nm5[rnd5];
      }
    }
    return names;
  }
}
