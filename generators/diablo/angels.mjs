import { sample } from 'lodash-es';

export default function angels() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', '', '', 'b', 'c', 'dr', 'g', 'h', 'l', 'm', 'n', 'p', 'r', 's', 't', 'th', 'v', 'y', 'z'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ae', 'ai'];
  const nm3 = ['br', 'd', 'dr', 'f', 'g', 'l', 'lt', 'll', 'lg', 'lth', 'lz', 'm', 'mp', 'mph', 'mphr', 'mr', 'n', 'nd', 'nn', 'nny', 'nr', 'nl', 'ph', 'r', 's', 'sr', 'st', 'th', 'z', 'zr'];
  const nm4 = ['al', 'ael', 'eon', 'iel', 'ial', 'il', 'el', 'ius', 'ion', 'on', 'os', 'ual', 'us'];
  const nm5 = ['c', 'dr', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 'ph', 's', 'th', 'v'];
  const nm6 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ae', 'ai', 'au'];
  const nm7 = ['br', 'c', 'dr', 'dy', 'f', 'g', 'gh', 'gl', 'hn', 'hr', 'l', 'll', 'lth', 'ls', 'lz', 'ln', 'lm', 'lf', 'm', 'mr', 'ml', 'mn', 'mph', 'nl', 'ny', 'nph', 'nd', 'r', 'rd', 's', 'sh', 'sr', 'th', 'z'];
  const nm8 = ['el', 'ael', 'il', 'on', 'uen', 'uel', 'eil', 'iel', 'is', 'ith', 'oelle', 'oenne', 'aelle'];
  const i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      if (i < 5) {
        names = sample(nm5) + sample(nm6) + sample(nm7) + sample(nm8);
      } else {
        names = sample(nm5) + sample(nm6) + sample(nm7) + sample(nm6) + sample(nm7) + sample(nm8);
      }
    } else if (i < 5) {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm4);
    } else {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm3) + sample(nm4);
    }
    return names;
  }
}
