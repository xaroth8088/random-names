export default function twileks() {
  let rnd;
  let rnd2;
  let rnd3;
  let rnd4;
  let rnd5;
  let rnd6;
  let rnd7;
  let rnd8;
  let
    rnd9;
  let rnd10;
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['i', 'a', 'o', 'e', 'u', 'y', 'aa', 'ai', 'ao', 'ae', 'au', 'ia', 'io', 'ie', 'iu', 'oi', 'oa', 'oo', 'oe', 'ou', 'ui', 'ua', 'uu', 'uo', 'ue', 'i', 'a', 'o', 'e', 'u', 'i', 'a', 'o', 'e', 'u', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm2 = ['b', 'c', 'cr', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 'sr', 't', 'v', 'w', 'z'];
  const nm3 = ['i', 'a', 'o', 'e', 'u'];
  const nm4 = ['b', 'c', 'd', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'w', 'z'];
  const nm5 = ['\'', '', ''];
  const nm6 = ['b', 'c', 'cr', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'z'];
  const nm7 = ['c', 'd', 'f', 'g', 'k', 'l', 'm', 'n', 'q', 'r', 's', 't', 'w', 'y', 'z', '', '', '', '', '', '', '', '', '', '', ''];
  const nm8 = ['i', 'a', 'o', 'e', 'u', 'aa', 'ai', 'ao', 'ae', 'au', 'ia', 'io', 'ie', 'iu', 'oi', 'oa', 'oo', 'oe', 'ou', 'ui', 'ua', 'uu', 'uo', 'ue', 'i', 'a', 'o', 'e', 'u', 'i', 'a', 'o', 'e', 'u', '', '', '', '', '', '', ''];
  const nm9 = ['b', 'c', 'ch', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 'sh', 't', 'v', 'w', 'y', 'y', 'y', 'z'];
  const nm10 = ['c', 'f', 'g', 'h', 'l', 'm', 'n', 'p', 'r', 's', 't', 'w', 'y', 'z', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  {
    rnd3 = Math.floor(Math.random() * nm3.length);
    rnd4 = Math.floor(Math.random() * nm4.length);
    rnd5 = Math.floor(Math.random() * nm5.length);
    rnd6 = Math.floor(Math.random() * nm6.length);
    rnd7 = Math.floor(Math.random() * nm3.length);
    rnd8 = Math.floor(Math.random() * nm6.length);
    rnd9 = Math.floor(Math.random() * nm3.length);
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm8.length);
      rnd2 = Math.floor(Math.random() * nm9.length);
      rnd10 = Math.floor(Math.random() * nm10.length);
      names = nm8[rnd] + nm9[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd5] + nm6[rnd6] + nm3[rnd7] + nm6[rnd8] + nm3[rnd9] + nm10[rnd10];
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd10 = Math.floor(Math.random() * nm7.length);
      names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd5] + nm6[rnd6] + nm3[rnd7] + nm6[rnd8] + nm3[rnd9] + nm7[rnd10];
    }
    return names;
  }
}
