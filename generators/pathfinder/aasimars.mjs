import sample from 'lodash/sample';

export default function aasimars() {
  let nameLast;
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', '', '', '', 'b', 'c', 'cr', 'd', 'gr', 'k', 'kr', 'l', 'm', 'n', 'p', 's', 't', 'w', 'z'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'y', 'ai', 'au', 'ie', 'ia', 'ea'];
  const nm3 = ['b', 'b', 'd', 'd', 'dr', 'g', 'g', 'gr', 'gn', 'k', 'k', 'kw', 'kr', 'l', 'l', 'lw', 'lr', 'lm', 'ln', 'lg', 'lt', 'm', 'm', 'mr', 'ml', 'mw', 'n', 'n', 'nr', 'nl', 'ng', 'nv', 'nw', 'r', 'r', 'rl', 'rw', 'rg', 'rn', 't', 't'];
  const nm4 = ['l', 'm', 'n', 'n', 'n', 'nt', 'r'];
  const nm5 = ['', '', '', '', 'b', 'br', 'd', 'dr', 'h', 'l', 'm', 'n', 'p', 'ph', 'r', 'rh', 'v', 'vh', 'w'];
  const nm6 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'oe', 'ou', 'ua', 'ea', 'ia'];
  const nm7 = ['d', 'd', 'dr', 'dy', 'gr', 'j', 'j', 'l', 'l', 'll', 'lt', 'ld', 'lm', 'ln', 'ldr', 'ls', 'm', 'm', 'mr', 'mk', 'ml', 'n', 'n', 'ndr', 'nd', 'nk', 'ng', 'nd', 'ny', 'nm', 'p', 'p', 'pr', 'r', 'r', 'rk', 'rl', 's', 's', 'v', 'v', 'y', 'y', 'z', 'z'];
  const nm8 = ['', '', '', '', '', '', '', '', '', 'h', 'l', 'n', 'r'];
  const nm9 = ['', '', '', '', 'b', 'br', 'd', 'dr', 'h', 'k', 'kr', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'z'];
  const nm10 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'y'];
  const nm11 = ['b', 'd', 'g', 'gr', 'h', 'k', 'kr', 'km', 'l', 'll', 'lr', 'ls', 'lg', 'ldr', 'lm', 'lw', 'm', 'mr', 'ml', 'n', 'nm', 'ng', 'nv', 'nk', 'p', 'pr', 'r', 'rl', 'rg', 'rv', 'rw', 's', 'v', 'z'];
  const nm12 = ['', '', '', 'l', 'm', 'n', 'r'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i % 2 === 0) {
      nameLast = sample(nm9) + sample(nm10) + sample(nm11) + sample(nm10) + sample(nm11) + sample(nm10) + sample(nm12);
    } else {
      nameLast = sample(nm9) + sample(nm10) + sample(nm11) + sample(nm10) + sample(nm12);
    }
    if (type === 1) {
      if (i < 6) {
        names = `${sample(nm5) + sample(nm6) + sample(nm7) + sample(nm6) + sample(nm8)} ${nameLast}`;
      } else {
        names = `${sample(nm5) + sample(nm6) + sample(nm7) + sample(nm6) + sample(nm7) + sample(nm6) + sample(nm8)} ${nameLast}`;
      }
    } else if (i < 7) {
      names = `${sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4)} ${nameLast}`;
    } else {
      names = `${sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4)} ${nameLast}`;
    }
    return names;
  }
}
