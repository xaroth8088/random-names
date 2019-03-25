export default function awokens() {
  let names;
  let nmLast;
  let rnd;
  let rnd2;
  let rnd3;
  let rnd4;
  let rnd5;
  let rndA;
  let rndB;
  let rndC;
  let rndD;
  let rndE;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', '', '', 'c', 'g', 'j', 'k', 'q', 'r', 'v', 'x', 'z'];
  const nm2 = ['a', 'a', 'u', 'u', 'e', 'i', 'a', 'a', 'u', 'u', 'e', 'i', 'a', 'a', 'u', 'u', 'e', 'i', 'oo', 'ou', 'uu', 'aa'];
  const nm3 = ['d', 'dr', 'g', 'gd', 'gr', 'h', 'j', 'ldr', 'lgr', 'ndr', 'ngr', 'q', 'r', 'rg', 'rj', 'sg', 'v', 'vg', 'x', 'z', 'zg'];
  const nm4 = ['c', 'ch', 'g', 'l', 'n', 'x', 'z'];
  const nm5 = ['f', 'l', 'm', 'n', 'p', 'ph', 's', 't', 'th', 'v', 'z'];
  const nm6 = ['e', 'e', 'a', 'a', 'i', 'o', 'e', 'e', 'a', 'a', 'i', 'o', 'e', 'e', 'a', 'a', 'i', 'o', 'ia', 'ua', 'ea', 'aa'];
  const nm7 = ['l', 'lm', 'ln', 'lr', 'm', 'mm', 'mn', 'n', 'nn', 'r', 'rh', 'rl', 'rm', 'rn', 'rr', 'rt', 'sr', 'ss', 'tr', 'x', 'y', 'z'];
  const nm8 = ['f', 'n', 'nn', 'ph', 's', 'ss', 'sh', 'x'];
  const nm9 = ['c', 'g', 'j', 'm', 'q', 's', 'th', 'v', 'x', 'z'];
  const nm10 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'aa'];
  const nm11 = ['d', 'f', 'h', 'j', 'k', 'l', 'm', 'n', 'q', 'r', 'sh', 'v', 'z'];
  const nm12 = ['hl', 'hn', 'j', 'l', 'm', 'n', 'nj', 's', 'sh', 'v'];
  const i = Math.floor(Math.random() * 10);
  {
    rndA = Math.floor(Math.random() * nm9.length);
    rndB = Math.floor(Math.random() * nm10.length);
    rndE = Math.floor(Math.random() * nm12.length);
    if (i % 2 === 0) {
      nmLast = nm9[rndA] + nm10[rndB] + nm12[rndE];
    } else {
      rndC = Math.floor(Math.random() * nm11.length);
      rndD = Math.floor(Math.random() * nm10.length);
      nmLast = nm9[rndA] + nm10[rndB] + nm11[rndC] + nm10[rndD] + nm12[rndE];
    }
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm5.length);
      rnd2 = Math.floor(Math.random() * nm6.length);
      if (i < 5) {
        rnd3 = Math.floor(Math.random() * nm8.length);
        names = `${nm5[rnd] + nm6[rnd2] + nm8[rnd3]} ${nmLast}`;
      } else {
        rnd3 = Math.floor(Math.random() * nm7.length);
        rnd4 = Math.floor(Math.random() * nm6.length);
        names = `${nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4]} ${nmLast}`;
      }
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd4 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm4.length);
      names = `${nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5]} ${nmLast}`;
    }
    return names;
  }
}
