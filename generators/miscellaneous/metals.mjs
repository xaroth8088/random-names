import sample from 'lodash/sample';

export default function metals() {
  let names;
  const nm1 = ['', '', '', '', '', 'b', 'c', 'd', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  const nm2 = ['a', 'e', 'o', 'u'];
  const nm3 = ['br', 'cr', 'dr', 'fr', 'gr', 'pr', 'str', 'tr', 'bl', 'cl', 'fl', 'gl', 'pl', 'sl', 'sc', 'sk', 'sm', 'sn', 'sp', 'st', 'sw', 'ch', 'sh', 'th', 'wh', 'kr'];
  const nm4 = ['ae', 'ai', 'ao', 'au', 'a', 'ay', 'ea', 'ei', 'eo', 'eu', 'e', 'ey', 'ua', 'ue', 'ui', 'uo', 'u', 'uy', 'ia', 'ie', 'iu', 'io', 'iy', 'oa', 'oe', 'ou', 'oi', 'o', 'oy'];
  const nm5 = ['sium', 'cium', 'lium', 'rium', 'trium', 'tium', 'nese', 'nium', 'sten', 'nor', 'tine', 'ntine', 'rhil', 'thil', 'nyx', 'dian'];
  const nm6 = ['ium', 'ese', 'alt', 'um', 'ian', 'il', 'ine', 'yx', 'ite'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 4) {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm4) + sample(nm5);
    } else if (i < 7) {
      names = sample(nm3) + sample(nm4) + sample(nm5);
    } else {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm6);
    }
    return names;
  }
}
