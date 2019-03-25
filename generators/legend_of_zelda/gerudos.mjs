import sample from 'lodash/sample';

export default function gerudos() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['B', 'C', 'D', 'G', 'H', 'K', 'M', 'R', 'T'];
  const nm2 = ['a', 'e', 'i', 'o', 'u'];
  const nm3 = ['b', 'd', 'f', 'g', 'l', 'm', 'n', 'r', 't', 'v', 'z', 'b', 'd', 'f', 'g', 'l', 'm', 'n', 'r', 't', 'v', 'z', 'b', 'd', 'f', 'g', 'l', 'm', 'n', 'r', 't', 'v', 'z', 'b', 'd', 'f', 'g', 'l', 'm', 'n', 'r', 't', 'v', 'z', 'b', 'd', 'f', 'g', 'l', 'm', 'n', 'r', 't', 'v', 'z', 'br', 'bl', 'dr', 'dl', 'fl', 'fn', 'fm', 'fr', 'gr', 'gn', 'gm', 'lb', 'ld', 'lg', 'lm', 'ln', 'lr', 'lt', 'lz', 'mb', 'md', 'ml', 'mn', 'mr', 'nb', 'nd', 'ng', 'nl', 'nm', 'nr', 'nz', 'rb', 'rd', 'rg', 'rl', 'rm', 'rn', 'rt', 'rs', 'tl', 'tm', 'tn', 'tr', 'vl', 'vm', 'zl'];
  const nm4 = ['g', 'l', 'lm', 'ln', 'm', 'n', 'r', 'rf', 'rg', 'rn', 'rm', 'rt', 'ng'];
  const nm5 = ['', '', '', '', 'k', 'n', 'm', 'l', 't', 's', 'f', 'g', 'h', 'r'];
  const nm6 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ei', 'ea', 'eo', 'oa', 'ou', 'oo', 'ae', 'ai', 'au'];
  const nm7 = ['v', 'm', 'k', 'b', 'r', 'f', 'g', 'l', 'n', 's', 't'];
  const nm8 = ['m', 'k', 'r', 'f', 'g', 'l', 'n', 's', 't'];
  const nm9 = ['a', 'e', 'i', 'o', 'u', '', '', '', ''];
  {
    if (type === 1) {
      names = sample(nm5) + sample(nm6) + sample(nm7) + sample(nm6) + sample(nm8) + sample(nm9);
    } else {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4);
    }
    return names;
  }
}
