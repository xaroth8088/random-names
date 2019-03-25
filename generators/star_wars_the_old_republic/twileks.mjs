import sample from 'lodash/sample';

export default function twileks() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['i', 'a', 'o', 'e', 'u', 'y', 'aa', 'ai', 'ao', 'ae', 'au', 'ia', 'io', 'ie', 'iu', 'oi', 'oa', 'oo', 'oe', 'ou', 'ui', 'ua', 'uu', 'uo', 'ue', 'i', 'a', 'o', 'e', 'u', 'i', 'a', 'o', 'e', 'u', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm2 = ['b', 'c', 'cr', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 'sr', 't', 'v', 'w', 'z'];
  const nm3 = ['i', 'a', 'o', 'e', 'u'];
  const nm4 = ['b', 'c', 'd', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'w', 'z'];
  const nm5 = ['\'', '', ''];
  const nm6 = ['b', 'c', 'cr', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'z'];
  const nm7 = ['c', 'd', 'f', 'g', 'k', 'l', 'm', 'n', 'q', 'r', 's', 't', 'w', 'y', 'z', '', '', '', '', '', '', '', '', '', '', ''];
  const nm8 = ['i', 'a', 'o', 'e', 'u', 'aa', 'ai', 'ao', 'ae', 'au', 'ia', 'io', 'ie', 'iu', 'oi', 'oa', 'oo', 'oe', 'ou', 'ui', 'ua', 'uu', 'uo', 'ue', 'i', 'a', 'o', 'e', 'u', 'i', 'a', 'o', 'e', 'u', '', '', '', '', '', '', ''];
  const nm9 = ['b', 'c', 'ch', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 'sh', 't', 'v', 'w', 'y', 'y', 'y', 'z'];
  const nm10 = ['c', 'f', 'g', 'h', 'l', 'm', 'n', 'p', 'r', 's', 't', 'w', 'y', 'z', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  {
    if (type === 1) {
      names = sample(nm8) + sample(nm9) + sample(nm3) + sample(nm4) + sample(nm5) + sample(nm6) + sample(nm3) + sample(nm6) + sample(nm3) + sample(nm10);
    } else {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm4) + sample(nm5) + sample(nm6) + sample(nm3) + sample(nm6) + sample(nm3) + sample(nm7);
    }
    return names;
  }
}
