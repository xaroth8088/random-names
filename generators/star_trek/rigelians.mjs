import { sample } from 'lodash-es';

export default function rigelians() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['B', 'C', 'Ch', 'D', 'G', 'Gr', 'K', 'Kr', 'M', 'Pr', 'R', 'Sr', 'Sch', 'T', 'V', 'Vr', 'W', 'Z'];
  const nm2 = ['a', 'ae', 'ei', 'i', 'o', 'ou', 'u', 'a', 'u', 'a', 'u', 'o', 'ii', 'ea', 'oo', 'aa', 'a', 'u'];
  const nm3 = ['b', 'b', 'ch', 'd', 'g', 'd', 'g', 'gr', 'k', 'l', 'm', 'n', 't', 'v', 'w', 'k', 'l', 'm', 'n', 't', 'v', 'w', 'xt', 'y', 'z', 'y', 'z', 'zy'];
  const nm4 = ['d', 'k', 'l', 'lr', 'n', 'p', 'r', 't', 'v', '', ''];
  const nm5 = ['B', 'C', 'H', 'J', 'K', 'Kh', 'R', 'S', 'Sh', 'X', 'Y', 'Z', 'Zh'];
  const nm6 = ['a', 'ae', 'ei', 'i', 'o', 'ou', 'u', 'a', 'u', 'a', 'u', 'o', 'ii', 'ea', 'oo', 'aa', 'oi', 'ee'];
  const nm7 = ['c', 'ch', 'gg', 'gr', 'l', 'll', 'ln', 'ngy', 'ng', 'n', 'm', 's', 'st', 'sh', 'shw', 'v', 'ys', 'w', 'wr', 'c', 'g', 'l', 's', 'v', 'w', 'c', 'g', 'l', 's', 'v', 'w', 'n', 'n', 'm', 'm'];
  const nm8 = ['d', 'l', 'n', 'm', 's', 'x', '', '', '', '', '', ''];
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
