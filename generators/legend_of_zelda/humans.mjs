import sample from 'lodash/sample';

export default function humans() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', '', '', '', '', 'a', 'e', 'i', 'o', 'u', 'i', 'a', 'e'];
  const nm2 = ['b', 'c', 'd', 'j', 'k', 'l', 'm', 'n', 'r', 't', 'z'];
  const nm3 = ['a', 'i', 'o', 'u', 'a', 'o'];
  const nm4 = ['b', 'g', 'k', 'l', 'm', 'ng', 'r', 'rr', 'ss', 't', 'z'];
  const nm5 = ['', '', '', '', '', '', 'h', 'k', 'l', 'll', 'lph', 'm', 'n', 'nk', 's'];
  const nm6 = ['a', 'e', 'i', 'o'];
  const nm7 = ['c', 'f', 'h', 'm', 'n', 'ph', 'r', 's', 'sh', 'th', 't'];
  const nm8 = ['f', 'l', 'm', 'mb', 'n', 'p', 'ph', 'tr', 'ld', 'r', 's', 'sh', 'v'];
  const nm9 = ['a', 'e', 'i', 'o', 'ia', 'ei', 'ie', 'ea', 'a', 'e', 'i'];
  const nm10 = ['', '', '', '', '', '', 'l', 'm', 'n', 's', 'sh', 'th'];
  const i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      if (i < 5) {
        names = sample(nm7) + sample(nm6) + sample(nm8) + sample(nm9) + sample(nm10);
      } else {
        names = sample(nm6) + sample(nm7) + sample(nm9) + sample(nm10);
      }
    } else if (i < 5) {
      names = sample(nm2) + sample(nm3) + sample(nm4) + sample(nm3) + sample(nm5);
    } else {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm5);
    }
    return names;
  }
}
