import { sample } from 'lodash-es';

export default function andorians() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['a', 'e', 'o', 'i', '', '', '', '', '', '', ''];
  const nm2 = ['k', 'r', 'sh', 'shr', 't', 'th', 's', 'b'];
  const nm3 = ['a', 'e', 'o', 'i', 'y'];
  const nm4 = ['r', 'b', 'l', 'v', 'n', 's', 'ss', 'th', 'hr', 'hl'];
  const nm5 = ['a', 'e', 'o', 'i', 'ia', 'ao', 'aa'];
  const nm6 = ['Th\'', 'Ch\''];
  const nm7 = ['Sh\'', 'Zh\''];
  const nm8 = ['zh', 'sh', 'th', 'z', 'v', 'rh', 'shr', 'vh', 'k', 't', 'r', 'ch', 'q'];
  const nm9 = ['a', 'e', 'o', 'i', 'y', 'ao', 'ia', 'aa'];
  const nm10 = ['r', 'l', 'v', 'n', 'th', 'hr', 'hl', 'nn', 'rh', 'lr', 'sr', 'kr', 'tr', 'ln', 'thr', 'q', 'll', 'rr'];
  const nm11 = ['a', 'e', 'o', 'i'];
  const nm12 = ['th', 's', 'ss', 'n', 't', 'r', 'hr', 'rh', 'l', 'k', 'q'];
  const nm13 = ['vr', 'thr', 'v', 'jh', 'p', 't', 'th', 's', 'shr', 's', 'z'];
  const nm14 = ['th', 'r', 'm', 'ss', 'v', 'l', 'll', 'r', 'z', 't', 'tt', 'sh'];
  const nm15 = ['h', 's', 'l', 'ss', 'n', 't', 'th', 'sh', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      names = `${sample(nm1) + sample(nm13) + sample(nm3) + sample(nm14) + sample(nm5) + sample(nm15)} ${sample(nm7)}${sample(nm1)}${sample(nm8)}${sample(nm9)}${sample(nm10)}${sample(nm11)}${sample(nm12)}`;
    } else if (i < 5) {
      names = `${sample(nm1) + sample(nm2) + sample(nm3) + sample(nm4)} ${sample(nm6)}${sample(nm1)}${sample(nm8)}${sample(nm9)}${sample(nm10)}${sample(nm11)}${sample(nm12)}`;
    } else {
      names = `${sample(nm1) + sample(nm2) + sample(nm3) + sample(nm4) + sample(nm5) + sample(nm4)} ${sample(nm6)}${sample(nm1)}${sample(nm8)}${sample(nm9)}${sample(nm10)}${sample(nm11)}${sample(nm12)}`;
    }
    return names;
  }
}
