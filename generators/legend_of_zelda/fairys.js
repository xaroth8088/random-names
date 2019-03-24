export default function fairys() {
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['B', 'C', 'D', 'F', 'G', 'H', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'V', 'W', 'Z'];
  const nm2 = ['ea', 'ae', 'ai', 'ao', 'aa', 'au', 'ei', 'ee', 'ia', 'ie', 'io', 'oo', 'oa'];
  const nm3 = ['f', 'k', 'l', 'm', 'n', 'r', 's'];
  const nm4 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ie', 'ia', 'ea', 'ae', 'io', 'eo', 'ai'];
  const nm5 = ['w', 'r', 't', 'l', 'k', 'h', 'g', 'f', 'd', 's', 'm', 'n', 'v', 'c'];
  const nm6 = ['a', 'e', 'i', 'o', 'u'];
  const nm7 = ['', '', '', '', '', '', 't', 'h', 's', 'l', 'n', 'm'];



  {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm4.length);
      rnd3 = Math.floor(Math.random() * nm5.length);
      rnd4 = Math.floor(Math.random() * nm6.length);
      rnd5 = Math.floor(Math.random() * nm7.length);
      names = nm1[rnd] + nm4[rnd2] + nm5[rnd3] + nm6[rnd4] + nm7[rnd5];
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      names = nm1[rnd] + nm2[rnd2] + nm3[rnd3];
    }
    return names;
  }
}
