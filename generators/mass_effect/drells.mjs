import sample from 'lodash/sample';

export default function drells() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  let nm1 = [''];
  const nm2 = ['ka', 'ki', 'ku', 'ke', 'ko', 'sa', 'si', 'su', 'se', 'so', 'sha', 'shi', 'shu', 'she', 'sho', 'ta', 'ti', 'tu', 'te', 'to', 'tha', 'thi', 'thu', 'the', 'tho', 'dra', 'dri', 'dru', 'dre', 'dro', 'ma', 'mi', 'mu', 'me', 'mo', 'na', 'ni', 'nu', 'ne', 'no', 'ha', 'hi', 'hu', 'he', 'ho', 'fa', 'fi', 'fu', 'fe', 'fo', 'ra', 'ri', 'ru', 're', 'ro', 'la', 'li', 'lu', 'le', 'lo', 'ya', 'yi', 'yu', 'ye', 'yo'];
  const nm3 = ['n', 'l', 't', 'k', 's', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm4 = ['ka', 'ki', 'ku', 'ke', 'ko', 'sa', 'si', 'su', 'se', 'so', 'ta', 'ti', 'tu', 'te', 'to', 'ma', 'mi', 'mu', 'me', 'mo', 'na', 'ni', 'nu', 'ne', 'no', 'ha', 'hi', 'hu', 'he', 'ho', 'fa', 'fi', 'fu', 'fe', 'fo', 'ra', 'ri', 'ru', 're', 'ro', 'la', 'li', 'lu', 'le', 'lo', 'ya', 'yi', 'yu', 'ye', 'yo'];
  const nm5 = ['n', 'l', 't', 'k', 's', 'h', 'm', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm6 = ['a', 'e', 'i', 'o', 'u'];
  const nm7 = ['n', 'l', 't', 'k', 's'];
  if (type === 1) {
    nm1 = ['a', 'e', 'i', 'o', 'u'];
  } else {
    nm1 = [''];
  }
  {
    names = `${sample(nm1) + sample(nm2) + sample(nm3) + sample(nm4) + sample(nm5)} ${sample(nm2)}${sample(nm6)}${sample(nm7)}`;
    return names;
  }
}
