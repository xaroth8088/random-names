export default function daleks() {
  let names;
  let rnd;
  let rnd2;
  let rnd3;
  const nm1 = ['C', 'Ch', 'D', 'Dh', 'G', 'Gh', 'K', 'Kh', 'R', 'S', 'Th', 'V'];
  const nm2 = ['a', 'aa', 'e', 'a', 'e', 'a', 'e', 'i', 'o'];
  const nm3 = ['c', 'd', 'k', 'm', 'n', 'r', 's', 'ss', 'st', 't', 'th', 'y'];
  const ext = Math.floor(Math.random() * 150);
  const i = Math.floor(Math.random() * 10); {
    if (ext === 1) {
      names = 'Exterminate! Exterminate! Exterminate!';
      if (i === 9) {
        names = 'Just kidding. :) Enjoy this Easter egg.';
      }
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      names = nm1[rnd] + nm2[rnd2] + nm3[rnd3];
    }
    return names;
  }
}
