export default function maiars() {
  let rnd2; let rnd3; let rnd4; let rnd5; let
    rnd6;


  let names;

  const type = Math.random() < 0.5 ? 0 : 1;

  const nm1 = ['f', 'l', 'm', 'n', 'ph', 's', 'sh', 'w', 'y', 'z', '', ''];
  const nm2 = ['a', 'e', 'o', 'i', 'u', 'ó', 'é', 'ie', 'ui', 'ia', 'ea', 'ae', 'ua'];
  const nm3 = ['l', 'lm', 'ln', 'ls', 'n', 'nn', 'ph', 'r', 's', 'sh', 'ss', 'th'];
  const nm4 = ['r', 'n', 's', 'th', 'l', 'm'];
  const nm5 = ['a', 'e', 'ë', 'é', 'ó', '', '', '', '', ''];

  const nm6 = ['c', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'th', '', ''];
  const nm7 = ['a', 'e', 'o', 'i', 'u', 'ó', 'é', 'ai', 'eo', 'io', 'eö', 'uo', 'ua'];
  const nm8 = ['l', 'll', 'lm', 'ln', 'ls', 'm', 'md', 'n', 'nd', 'nm', 'nw', 'r', 's', 'ss', 't', 'w'];
  const nm9 = ['l', 'm', 'n', 'nd', 'r', 's', 't', 'th'];
  const nm10 = ['o', 'e', 'ë', 'ó', '', '', '', ''];


  {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd4 = Math.floor(Math.random() * nm2.length);
      if (rnd2 > 6) {
        while (rnd4 > 6) {
          rnd4 = Math.floor(Math.random() * nm2.length);
        }
      }
      rnd5 = Math.floor(Math.random() * nm4.length);
      rnd6 = Math.floor(Math.random() * nm5.length);
      names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5] + nm5[rnd6];
    } else {
      rnd = Math.floor(Math.random() * nm6.length);
      rnd2 = Math.floor(Math.random() * nm7.length);
      rnd3 = Math.floor(Math.random() * nm8.length);
      rnd4 = Math.floor(Math.random() * nm7.length);
      if (rnd2 > 6) {
        while (rnd4 > 6) {
          rnd4 = Math.floor(Math.random() * nm7.length);
        }
      }
      rnd5 = Math.floor(Math.random() * nm9.length);
      rnd6 = Math.floor(Math.random() * nm10.length);
      names = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm7[rnd4] + nm9[rnd5] + nm10[rnd6];
    }
    return names;
  }
}
