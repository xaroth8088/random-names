export default function andorians() {
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
  let rnd11;
  let rnd12;
  let
    rnd13;


  let names;

  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['a', 'e', 'o', 'i', '', '', '', '', '', '', ''];
  const nm2 = ['k', 'r', 'sh', 'shr', 't', 'th', 's', 'b'];
  const nm3 = ['a', 'e', 'o', 'i', 'y'];
  const nm4 = ['r', 'b', 'l', 'v', 'n', 's', 'ss', 'th', 'hr', 'hl'];
  const nm5 = ['a', 'e', 'o', 'i', 'ia', 'ao', 'aa'];

  const nm6 = ['Th\'', 'Ch\''];
  const nm7 = ['Sh\'', 'Zh\''];

  const nm8 = ['zh', 'sh', 'th', 'z', 'v', 'rh', 'shr', 'vh', 'k', 't', 'r', 'ch', 'q'];
  const nm9 = ['a', 'e', 'o', 'i', 'y', 'ao', 'ia', 'aa'];
  const nm10 = ['r', 'l', 'v', 'n', 'th', 'hr', 'hl', 'nn', 'rh', 'lr', 'sr', 'kr', 'tr', 'ln', 'thr', 'q', 'll', 'rr'];
  const nm11 = ['a', 'e', 'o', 'i'];
  const nm12 = ['th', 's', 'ss', 'n', 't', 'r', 'hr', 'rh', 'l', 'k', 'q'];

  const nm13 = ['vr', 'thr', 'v', 'jh', 'p', 't', 'th', 's', 'shr', 's', 'z'];
  const nm14 = ['th', 'r', 'm', 'ss', 'v', 'l', 'll', 'r', 'z', 't', 'tt', 'sh'];
  const nm15 = ['h', 's', 'l', 'ss', 'n', 't', 'th', 'sh', '', '', '', '', '', '', '', '', '', '', '', '', ''];


  const i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm13.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd4 = Math.floor(Math.random() * nm14.length);
      rnd5 = Math.floor(Math.random() * nm5.length);
      rnd6 = Math.floor(Math.random() * nm15.length);

      rnd7 = Math.floor(Math.random() * nm7.length);
      rnd8 = Math.floor(Math.random() * nm1.length);
      rnd9 = Math.floor(Math.random() * nm8.length);
      rnd10 = Math.floor(Math.random() * nm9.length);
      rnd11 = Math.floor(Math.random() * nm10.length);
      rnd12 = Math.floor(Math.random() * nm11.length);
      rnd13 = Math.floor(Math.random() * nm12.length);
      names = `${nm1[rnd] + nm13[rnd2] + nm3[rnd3] + nm14[rnd4] + nm5[rnd5] + nm15[rnd6]} ${nm7[rnd7]}${nm1[rnd8]}${nm8[rnd9]}${nm9[rnd10]}${nm10[rnd11]}${nm11[rnd12]}${nm12[rnd13]}`;
    } else if (i < 5) {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd4 = Math.floor(Math.random() * nm4.length);
      rnd5 = Math.floor(Math.random() * nm6.length);
      rnd6 = Math.floor(Math.random() * nm1.length);
      rnd7 = Math.floor(Math.random() * nm8.length);
      rnd8 = Math.floor(Math.random() * nm9.length);
      rnd9 = Math.floor(Math.random() * nm10.length);
      rnd10 = Math.floor(Math.random() * nm11.length);
      rnd11 = Math.floor(Math.random() * nm12.length);
      names = `${nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4]} ${nm6[rnd5]}${nm1[rnd6]}${nm8[rnd7]}${nm9[rnd8]}${nm10[rnd9]}${nm11[rnd10]}${nm12[rnd11]}`;
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd4 = Math.floor(Math.random() * nm4.length);
      rnd5 = Math.floor(Math.random() * nm5.length);
      rnd6 = Math.floor(Math.random() * nm4.length);
      rnd7 = Math.floor(Math.random() * nm6.length);
      rnd8 = Math.floor(Math.random() * nm1.length);
      rnd9 = Math.floor(Math.random() * nm8.length);
      rnd10 = Math.floor(Math.random() * nm9.length);
      rnd11 = Math.floor(Math.random() * nm10.length);
      rnd12 = Math.floor(Math.random() * nm11.length);
      rnd13 = Math.floor(Math.random() * nm12.length);
      names = `${nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd5] + nm4[rnd6]} ${nm6[rnd7]}${nm1[rnd8]}${nm8[rnd9]}${nm9[rnd10]}${nm10[rnd11]}${nm11[rnd12]}${nm12[rnd13]}`;
    }
    return names;
  }
}