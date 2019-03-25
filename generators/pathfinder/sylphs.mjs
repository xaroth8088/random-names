export default function sylphs() {
  let rnd2; let rnd3; let rnd4; let rnd5; let rnd6; let
    rnd7;


  let names;

  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', '', '', '', 'c', 'd', 'f', 'g', 'h', 'j', 'l', 'm', 'n', 's', 'v', 'w', 'z'];
  const nm2 = ['a', 'e', 'i', 'u', 'a', 'e', 'i', 'u', 'a', 'e', 'i', 'u', 'a', 'e', 'i', 'u', 'a', 'e', 'i', 'u', 'aa', 'uu', 'ii'];
  const nm3 = ['d', 'f', 'g', 'j', 'k', 'l', 'm', 'n', 's', 'v', 'w', 'z'];
  const nm4 = ['d', 'l', 'm', 'n', 'sh'];
  const nm5 = ['', '', '', '', '', 'd', 'f', 'h', 'k', 'l', 'm', 'n', 'r', 's', 't', 'v', 'w', 'z'];
  const nm6 = ['a', 'e', 'i', 'a', 'e', 'i', 'a', 'e', 'i', 'a', 'e', 'i', 'a', 'e', 'i', 'a', 'a', 'a', 'ee', 'aa'];
  const nm7 = ['d', 'f', 'ff', 'h', 'l', 'll', 'm', 'mm', 'n', 'nn', 's', 'ss', 'v', 'y', 'w'];
  const nm8 = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'h', 'm', 'n', 'sh'];


  const i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm5.length);
      rnd2 = Math.floor(Math.random() * nm6.length);
      rnd3 = Math.floor(Math.random() * nm7.length);
      rnd4 = Math.floor(Math.random() * nm6.length);
      if (i < 5) {
        rnd5 = Math.floor(Math.random() * nm8.length);
        names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm8[rnd5];
      } else {
        rnd6 = Math.floor(Math.random() * nm7.length);
        rnd7 = Math.floor(Math.random() * nm6.length);
        names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm7[rnd6] + nm6[rnd7];
      }
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm4.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd4 = Math.floor(Math.random() * nm2.length);
      names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
    }
    return names;
  }
}
