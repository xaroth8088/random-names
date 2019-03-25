export default function chiss() {
  let rnd2;
  let rnd3;
  let rnd4;
  let rnd5;
  let rnd6;
  let rnd7;
  let rnd8;
  let
    rnd9;
  let rnd10;
  let rnd11;
  let rnd12;
  let rnd13;
  let
    rnd14;


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
    rnd = Math.floor(Math.random() * nm1.length);
    rnd2 = Math.floor(Math.random() * nm2.length);
    rnd3 = Math.floor(Math.random() * nm3.length);
    rnd4 = Math.floor(Math.random() * nm4.length);
    rnd5 = Math.floor(Math.random() * nm5.length);
    rnd6 = Math.floor(Math.random() * nm6.length);
    rnd7 = Math.floor(Math.random() * nm7.length);
    rnd8 = Math.floor(Math.random() * nm8.length);
    rnd9 = Math.floor(Math.random() * nm9.length);
    rnd10 = Math.floor(Math.random() * nm10.length);
    rnd11 = Math.floor(Math.random() * nm11.length);
    rnd12 = Math.floor(Math.random() * nm12.length);
    rnd13 = Math.floor(Math.random() * nm13.length);
    rnd14 = Math.floor(Math.random() * nm14.length);
    names = `${nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4]}'${nm5[rnd5]}${nm6[rnd6]}${nm7[rnd7]}${nm8[rnd8]}'${nm9[rnd9]}${nm10[rnd10]}${nm11[rnd11]}${nm12[rnd12]}${nm13[rnd13]}${nm14[rnd14]}`;
    return names;
  }
}
