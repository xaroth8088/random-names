export default function houseElfs() {
  let names;
  let rnd;
  let rnd2;
  let rnd3;
  let rnd4;
  let rnd5;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R',
    'S', 'T', 'V', 'W', 'Z'];
  const nm2 = ['oo', 'a', 'o'];
  const nm3 = ['', 'd', 'n', 'r', 'l', 'b', 'k'];
  const nm4 = ['b', 'd', 'k', 'p', 'r'];
  const nm5 = ['y', 'ey'];
  const nm6 = ['ee', 'i', 'o'];
  const nm7 = ['', 'n', 's', 'l', 'b', 'm', 'p'];
  const nm8 = ['k', 'n', 's', 'l', 'm', 'p'];
  {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm6.length);
      rnd3 = Math.floor(Math.random() * nm7.length);
      if (rnd2 === 0) {
        rnd3 = 0;
      } else {
        while (rnd3 === 0) {
          rnd3 = Math.floor(Math.random() * nm7.length);
        }
      }
      rnd4 = Math.floor(Math.random() * nm8.length);
      rnd5 = Math.floor(Math.random() * nm5.length);
      names = nm1[rnd] + nm6[rnd2] + nm7[rnd3] + nm8[rnd4] + nm5[rnd5];
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      if (rnd2 === 0) {
        rnd3 = 0;
      } else {
        while (rnd3 === 0) {
          rnd3 = Math.floor(Math.random() * nm3.length);
        }
      }
      rnd4 = Math.floor(Math.random() * nm4.length);
      rnd5 = Math.floor(Math.random() * nm5.length);
      names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd5];
    }
    return names;
  }
}
