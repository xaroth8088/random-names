import sample from 'lodash/sample';

export default function chiss() {
  let names;
  const nm1 = ['B', 'C', 'D', 'G', 'H', 'J', 'K', 'M', 'N', 'P', 'R', 'S', 'T', 'V', 'W', 'Z'];
  const nm2 = ['a', 'e', 'u', 'i', 'o', 'a', 'e', 'u', 'i', 'o', 'ra', 're', 'ru', 'ri', 'ro', 'la', 'le', 'lu', 'li', 'lo'];
  const nm3 = ['th', 'tth', 'tt', 's', 'ss', 'sh', 'st', 'sd', 'g', 'gh', 'w', 'q', 'qh', 'r', 'rr', 'rs', 'rt', 'rd', 'rg', 'rk', 'rm', 'rn', 'c', 'rc', 'sk', 'z', 'zz', 'm', 'mm', 'n', 'ng'];
  const nm4 = ['i', 'a', 'o', 'e', 'u', '', '', '', '', '', '', '', ''];
  const nm5 = ['b', 'c', 'd', 'g', 'h', 'm', 'n', 'l', 'p', 'r', 's', 't', 'v', 'w', 'z', 'b', 'c', 'd', 'g', 'h', 'm', 'n', 'l', 'p', 'r', 's', 't', 'v', 'w', 'z', 'ab', 'ac', 'ad', 'ag', 'ah', 'am', 'an', 'al', 'ap', 'ar', 'as', 'at', 'av', 'aw', 'az', 'ob', 'oc', 'od', 'og', 'oh', 'om', 'on', 'ol', 'op', 'or', 'os', 'ot', 'ov', 'ow', 'oz', 'ib', 'ic', 'id', 'ig', 'ih', 'im', 'in', 'il', 'ip', 'ir', 'is', 'it', 'iv', 'iw', 'iz', 'eb', 'ec', 'ed', 'eg', 'eh', 'em', 'en', 'el', 'ep', 'er', 'es', 'et', 'ev', 'ew', 'ez'];
  const nm6 = ['a', 'e', 'u', 'i', 'o', 'a', 'e', 'u', 'i', 'o', 'a', 'e', 'u', 'i', 'o', 'ae', 'ea', 'au', 'ua', 'ao', 'oa', 'ou', 'uo', 'ia', 'ai'];
  const nm7 = ['n', 't', 'th', 'w', 'l', 'm', 'sh', 's', 'k', 'w', 'z', 'r'];
  const nm8 = ['i', 'a', 'o', 'e', 'u', '', '', '', '', '', '', '', ''];
  const nm9 = ['b', 'c', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'z', '', '', '', '', '', '', '', '', '', ''];
  const nm10 = ['a', 'e', 'u', 'i', 'o', 'a', 'e', 'u', 'i', 'o', 'ra', 're', 'ru', 'ri', 'ro', 'la', 'le', 'lu', 'li', 'lo', 'ae', 'ea', 'au', 'ua', 'ao', 'oa', 'ou', 'uo', 'ia', 'ai'];
  const nm11 = ['th', 'tth', 'tt', 's', 's', 's', 'g', 'g', 'r', 'r', 'c', 'c', 'm', 'm', 'n', 'n', 'z', 'z', 'ss', 'sh', 'st', 'sd', 'g', 'gh', 'w', 'q', 'qh', 'r', 'rr', 'rs', 'rt', 'rd', 'rg', 'rk', 'rm', 'rn', 'c', 'rc', 'sk', 'z', 'zz', 'm', 'mm', 'n', 'ng'];
  const nm12 = ['i', 'a', 'o', 'e', 'u'];
  const nm13 = ['th', 'tth', 'tt', 's', 's', 's', 'g', 'g', 'r', 'r', 'c', 'c', 'm', 'm', 'n', 'n', 'z', 'z', 'ss', 'sh', 'st', 'sd', 'g', 'gh', 'w', 'q', 'qh', 'r', 'rr', 'rs', 'rt', 'rd', 'rg', 'rk', 'rm', 'rn', 'c', 'rc', 'sk', 'z', 'zz', 'm', 'mm', 'n', 'ng', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm14 = ['i', 'a', 'o', 'e', 'u', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  {
    names = `${sample(nm1) + sample(nm2) + sample(nm3) + sample(nm4)}'${sample(nm5)}${sample(nm6)}${sample(nm7)}${sample(nm8)}'${sample(nm9)}${sample(nm10)}${sample(nm11)}${sample(nm12)}${sample(nm13)}${sample(nm14)}`;
    return names;
  }
}
