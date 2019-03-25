import sample from 'lodash/sample';

export default function nephalems() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', '', '', 'b', 'c', 'd', 'g', 'j', 'k', 'l', 'm', 'n', 'ph', 'r', 't', 'v', 'w', 'z'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ia', 'oe', 'io', 'y'];
  const nm3 = ['c', 'dr', 'gr', 'l', 'ld', 'lm', 'ln', 'm', 'md', 'mn', 'n', 'nd', 'r', 'rl', 'rd', 's', 'ss', 'th', 'thm', 'z'];
  const nm4 = ['', '', '', '', '', 'b', 'c', 'd', 'k', 'l', 'ln', 'lm', 'n', 'r', 's'];
  const nm5 = ['', '', '', '', '', 'ch', 'h', 'j', 'l', 'm', 'n', 'ph', 'r', 'rh', 's', 'sh', 'w', 'z'];
  const nm6 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'y'];
  const nm7 = ['dr', 'l', 'll', 'lm', 'ln', 'ld', 'm', 'mn', 'n', 'nm', 'nn', 'nr', 'mr', 'lgr', 'n', 'r', 'rl', 'rn', 'rm', 'rsh', 's', 'sh', 'ss', 'th'];
  const nm8 = ['', '', '', '', '', 'l', 'n', 'r', 's', 'sh'];
  const i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      if (i < 5) {
        names = sample(nm5) + sample(nm6) + sample(nm7) + sample(nm6) + sample(nm8);
      } else {
        names = sample(nm5) + sample(nm6) + sample(nm7) + sample(nm6) + sample(nm7) + sample(nm6) + sample(nm8);
      }
    } else if (i < 5) {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4);
    } else {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4);
    }
    return names;
  }
}
