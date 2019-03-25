export default function silurians() {
  let rnd;
  let rnd2;
  let rnd3;
  let rnd4;
  let rnd5;
  let
    rnd6;
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', 'd', 'h', 'k', 'l', 'm', 'r', 't'];
  const nm2 = ['o', 'e', 'a', 'i'];
  const nm3 = ['d', 'dr', 'cth', 'ct', 'cl', 'cr', 'hr', 'hk', 'hl', 'kd', 'kl', 'kr', 'l', 'lr', 'ln', 'n', 'lm', 'ml', 'nl', 'nr', 'nl', 'ld', 'r', 'rk', 'rl'];
  const nm4 = ['h', 'k', 'l', 'n', 'm', 'r'];
  const nm5 = ['e', 'a', '', '', '', ''];
  const nm6 = ['d', 'h', 'k', 'l', 'm', 'n', 'r', 's', 'v'];
  const nm7 = ['o', 'e', 'a'];
  const nm8 = ['d', 'dr', 'hr', 'hl', 'hn', 'lr', 'ln', 'n', 'lm', 'ln', 'ml', 'mn', 'l', 'r', 'rl', 'rk', 'sk', 'sl', 'sn', 'sm', 'st', 'str', 'y'];
  const nm9 = ['', '', '', '', '', '', '', 'h', 'c', 'l', 'n', 'm', 's'];
  {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm6.length);
      rnd2 = Math.floor(Math.random() * nm7.length);
      rnd3 = Math.floor(Math.random() * nm8.length);
      rnd4 = Math.floor(Math.random() * nm7.length);
      rnd5 = Math.floor(Math.random() * nm9.length);
      names = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm7[rnd4] + nm9[rnd5];
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd4 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm4.length);
      rnd6 = Math.floor(Math.random() * nm5.length);
      names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5] + nm5[rnd6];
    }
    return names;
  }
}
