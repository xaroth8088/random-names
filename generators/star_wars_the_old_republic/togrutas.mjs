export default function togrutas() {
  let names;
  let rnd;
  let rnd2;
  let rnd3;
  let lName;
  let rnd;
  let rnd1;
  let rnd2;
  let rnd3;
  let rnd4;
  let rnd5;
  let
    rnd6;
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm0 = ['', '', '', '', '', '', '', '', '', 'a', 'o', 'u'];
  const nm1 = ['b', 'c', 'd', 'h', 'k', 'm', 'r', 's', 't', 'v', 'z'];
  const nm2 = ['a', 'o', 'u'];
  const nm3 = ['b', 'br', 'd', 'k', 'kr', 'ky', 'l', 'n', 'nz', 'r', 'rh', 's', 'sht', 't', 'vr', 'z'];
  const nm4 = ['a', 'aa', 'ee', 'i', 'o', 'y'];
  const nm5 = ['', '', '', '', '', '', '', 'hd', 'k', 'n', 'm', 'r', 's', 'sh'];
  const nm6 = ['', '', '', '', 'a', 'a', 'o', 'a'];
  const nm7 = ['b', 'c', 'd', 'h', 'k', 'l', 'm', 'n', 'r', 's', 'sh', 'z'];
  const nm8 = ['a', 'aa', 'e', 'o'];
  const nm9 = ['d', 'hn', 'hl', 'hs', 'k', 'l', 'm', 'mn', 'n', 'r', 'rl', 'rsh', 'rn', 's', 'ss', 'sh', 'shl', 't', 'th', 'tt'];
  const nm10 = ['a', 'aa', 'a', 'a', 'o'];
  const nm11 = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', 'n', 'm', 'h', 's', 'sh'];
  const nm12 = ['b', 'd', 'h', 'k', 'l', 'm', 'n', 'ph', 'r', 's', 't', 'v', 'z'];
  const nm13 = ['a', 'y', 'aa', 'i', 'e'];
  const nm14 = ['br', 'd', 'k', 'kr', 'l', 'm', 'n', 'r', 'rn', 'rl', 's', 'ss', 'sh', 'shr', 'vr', 'w', 'z'];
  const nm15 = ['a', 'aa', 'e', 'u', 'y', 'a', 'e', 'u', 'i', 'o', 'o', 'ii', 'ua', 'ee'];
  const nm16 = ['', '', '', '', 'ks', 'l', 'n', 'm', 'r', 's', 'sh'];
  const i = Math.floor(Math.random() * 10); {
    if (i < 5) {
      rnd = Math.floor(Math.random() * nm12.length);
      rnd2 = Math.floor(Math.random() * nm13.length);
      rnd3 = Math.floor(Math.random() * nm14.length);
      rnd4 = Math.floor(Math.random() * nm15.length);
      rnd5 = Math.floor(Math.random() * nm16.length);
      lName = nm12[rnd] + nm13[rnd2] + nm14[rnd3] + nm15[rnd4] + nm16[rnd5];
    } else {
      rnd = Math.floor(Math.random() * nm12.length);
      rnd2 = Math.floor(Math.random() * nm13.length);
      rnd5 = Math.floor(Math.random() * nm16.length);
      lName = nm12[rnd] + nm13[rnd2] + nm16[rnd5];
    }
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm6.length);
      rnd2 = Math.floor(Math.random() * nm7.length);
      rnd3 = Math.floor(Math.random() * nm8.length);
      rnd4 = Math.floor(Math.random() * nm9.length);
      rnd5 = Math.floor(Math.random() * nm10.length);
      rnd6 = Math.floor(Math.random() * nm11.length);
      names = `${nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm9[rnd4] + nm10[rnd5] + nm11[rnd6]} ${lName}`;
    } else {
      rnd = Math.floor(Math.random() * nm0.length);
      rnd1 = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd4 = Math.floor(Math.random() * nm4.length);
      rnd5 = Math.floor(Math.random() * nm5.length);
      names = `${nm0[rnd] + nm1[rnd1] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd5]} ${lName}`;
    }
    return names;
  }
}
