import sample from 'lodash/sample';

export default function dragons() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', '', '', 'b', 'c', 'd', 'f', 'g', 'gl', 'gr', 'k', 'l', 'n', 'r', 's', 'sr', 'shr', 't', 'th', 'v'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ae', 'io', 'ui', 'ua', 'au'];
  const nm3 = ['b', 'd', 'g', 'k', 'ln', 'l', 'lg', 'lm', 'm', 'md', 'n', 'nd', 'r', 'rm', 'rn'];
  const nm4 = ['c', 'd', 'dr', 'gr', 'k', 'kr', 'lfr', 'ldr', 'm', 'n', 'ngr', 'r', 'rn', 'th'];
  const nm5 = ['', '', '', '', 'c', 'd', 'f', 'gl', 'h', 'j', 'l', 'm', 'n', 'ph', 'r', 'sh', 's', 'th', 'v'];
  const nm6 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ae', 'io', 'ei', 'ea', 'au'];
  const nm7 = ['d', 'g', 'l', 'lm', 'ln', 'm', 'mn', 'n', 'nv', 'ph', 'r', 'rn', 'rv', 'th', 'v'];
  const nm8 = ['', '', '', '', '', '', '', '', '', '', '', 'h', 'l', 'n', 's', 'sh', 'th'];
  const i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      if (i < 6) {
        names = sample(nm5) + sample(nm6) + sample(nm7) + sample(nm6) + sample(nm8);
      } else {
        names = sample(nm5) + sample(nm6) + sample(nm7) + sample(nm6) + sample(nm7) + sample(nm6) + sample(nm8);
      }
    } else if (i < 3) {
      names = sample(nm1) + sample(nm2) + sample(nm4);
    } else if (i < 7) {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4);
    } else {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4);
    }
    return names;
  }
}
