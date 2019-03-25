import sample from 'lodash/sample';

export default function daleks() {
  let names;
  const nm1 = ['C', 'Ch', 'D', 'Dh', 'G', 'Gh', 'K', 'Kh', 'R', 'S', 'Th', 'V'];
  const nm2 = ['a', 'aa', 'e', 'a', 'e', 'a', 'e', 'i', 'o'];
  const nm3 = ['c', 'd', 'k', 'm', 'n', 'r', 's', 'ss', 'st', 't', 'th', 'y'];
  const ext = Math.floor(Math.random() * 150);
  const i = Math.floor(Math.random() * 10);
  {
    if (ext === 1) {
      names = 'Exterminate! Exterminate! Exterminate!';
      if (i === 9) {
        names = 'Just kidding. :) Enjoy this Easter egg.';
      }
    } else {
      names = sample(nm1) + sample(nm2) + sample(nm3);
    }
    return names;
  }
}
