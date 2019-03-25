import sample from 'lodash/sample';

export default function ifrits() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', '', '', 'b', 'd', 'g', 'j', 'k', 'm', 'n', 'r', 't', 'v', 'z'];
  const nm2 = ['a', 'e', 'i', 'u'];
  const nm3 = ['c', 'f', 'g', 'j', 'k', 'l', 'm', 'n', 'q', 'r', 'v'];
  const nm4 = ['', '', '', 'd', 'g', 'h', 'j', 'l', 'm', 'n', 'q', 't'];
  const nm5 = ['', '', '', 'c', 'f', 'g', 'h', 'l', 'm', 'n', 'q', 's', 'w', 'z'];
  const nm7 = ['d', 'dw', 'dr', 'h', 'l', 'lr', 'ly', 'm', 'ml', 'mr', 'n', 'nr', 'nl', 'q', 'qh', 'qr', 'r', 'rh', 'ry', 'rl', 't', 'ty', 'th', 'tw', 'tr', 'w', 'y'];
  const nm8 = ['', '', '', '', '', '', '', '', 'h', 'n', 's'];
  const i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      if (i < 8) {
        names = sample(nm5) + sample(nm2) + sample(nm7) + sample(nm2) + sample(nm8);
      } else {
        names = sample(nm5) + sample(nm2) + sample(nm7) + sample(nm2) + sample(nm7) + sample(nm2) + sample(nm8);
      }
    } else {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4);
    }
    return names;
  }
}
