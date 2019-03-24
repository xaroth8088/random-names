export default function anzatis() {
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', '', 'b', 'd', 'g', 'h', 'k', 'm', 'n', 'r', 's', 'v', 'z'];
  const nm2 = ['a', 'e', 'i', 'o', 'u'];
  const nm3 = ['ct', 'cn', 'cm', 'gr', 'kk', 'kr', 'kt', 'll', 'lf', 'lg', 'lr', 'ld', 'nn', 'nt', 'nr', 'mr', 'mm', 'md', 'rr', 'rk', 'rt', 'st', 'sn', 'sm', 'th', 'sh', 'tt', 'tr', 'zz'];
  const nm4 = ['', '', '', 'c', 'h', 'k', 'l', 'n', 'nt', 'r', 's', 'th'];
  const nm5 = ['b', 'c', 'd', 'f', 'h', 'k', 'l', 'm', 'n', 'r', 's'];
  const nm6 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ea', 'ia'];
  const nm7 = ['d', 'f', 'g', 'j', 'k', 'l', 'm', 'n', 'r', 'sh', 'th', 'mm', 'nn', 'll', 'dh', 'mh', 'nh', 'kr', 'dr', 'gr', 'ml', 'kl'];
  const nm8 = ['b', 'd', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'r', 's', 't', 'v', 'y', 'z'];
  const nm9 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ou', 'ei', 'ea', 'ia'];
  const nm10 = ['ct', 'cn', 'cm', 'gr', 'kk', 'kr', 'kt', 'll', 'lg', 'lf', 'ld', 'lr', 'lkk', 'k', 'mm', 'mr', 'md', 'nn', 'nr', 'nd', 'nt', 'nn', 'r', 'rr', 'rt', 'rkk', 'sh', 'st', 'sn', 'sm', 'th', 'sh', 'tt', 'tr', 'zz'];


  const i = Math.floor(Math.random() * 10);
  {
    rnd6 = Math.floor(Math.random() * nm8.length);
    rnd7 = Math.floor(Math.random() * nm9.length);
    rnd8 = Math.floor(Math.random() * nm10.length);
    rnd9 = Math.floor(Math.random() * nm9.length);
    rnd10 = Math.floor(Math.random() * nm4.length);
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm5.length);
      rnd2 = Math.floor(Math.random() * nm6.length);
      rnd3 = Math.floor(Math.random() * nm7.length);
      rnd4 = Math.floor(Math.random() * nm6.length);
      names = `${nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4]}  ${nm8[rnd6]}${nm9[rnd7]}${nm10[rnd8]}${nm9[rnd9]}${nm4[rnd10]}`;
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd4 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm4.length);
      names = `${nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5]}  ${nm8[rnd6]}${nm9[rnd7]}${nm10[rnd8]}${nm9[rnd9]}${nm4[rnd10]}`;
    }
    return names;
  }
}
