import { sample } from 'lodash-es';

export default function silurians() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', 'd', 'h', 'k', 'l', 'm', 'r', 't'];
  const nm2 = ['o', 'e', 'a', 'i'];
  const nm3 = ['d', 'dr', 'cth', 'ct', 'cl', 'cr', 'hr', 'hk', 'hl', 'kd', 'kl', 'kr', 'l', 'lr', 'ln', 'n', 'lm', 'ml', 'nl', 'nr', 'nl', 'ld', 'r', 'rk', 'rl'];
  const nm4 = ['h', 'k', 'l', 'n', 'm', 'r'];
  const nm5 = ['e', 'a', '', '', '', ''];
  const nm6 = ['d', 'h', 'k', 'l', 'm', 'n', 'r', 's', 'v'];
  const nm7 = ['o', 'e', 'a'];
  const nm8 = ['d', 'dr', 'hr', 'hl', 'hn', 'lr', 'ln', 'n', 'lm', 'ln', 'ml', 'mn', 'l', 'r', 'rl', 'rk', 'sk', 'sl', 'sn', 'sm', 'st', 'str', 'y'];
  const nm9 = ['', '', '', '', '', '', '', 'h', 'c', 'l', 'n', 'm', 's'];
  {
    if (type === 1) {
      names = sample(nm6) + sample(nm7) + sample(nm8) + sample(nm7) + sample(nm9);
    } else {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4) + sample(nm5);
    }
    return names;
  }
}
