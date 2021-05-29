import { sample } from 'lodash-es';

export default function countrys() {
  let names;
  const nm1 = ['b', 'c', 'd', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', '', '', '', '', ''];
  const nm2 = ['a', 'e', 'o', 'u'];
  const nm3 = ['br', 'cr', 'dr', 'fr', 'gr', 'pr', 'str', 'tr', 'bl', 'cl', 'fl', 'gl', 'pl', 'sl', 'sc', 'sk', 'sm', 'sn', 'sp', 'st', 'sw', 'ch', 'sh', 'th', 'wh'];
  const nm4 = ['ae', 'ai', 'ao', 'au', 'a', 'ay', 'ea', 'ei', 'eo', 'eu', 'e', 'ey', 'ua', 'ue', 'ui', 'uo', 'u', 'uy', 'ia', 'ie', 'iu', 'io', 'iy', 'oa', 'oe', 'ou', 'oi', 'o', 'oy'];
  const nm5 = ['stan', 'dor', 'vania', 'nia', 'lor', 'cor', 'dal', 'bar', 'sal', 'ra', 'la', 'lia', 'jan', 'rus', 'ze', 'tan', 'wana', 'sil', 'so', 'na', 'le', 'bia', 'ca', 'ji', 'ce', 'ton', 'ssau', 'sau', 'sia', 'ca', 'ya', 'ye', 'yae', 'tho', 'stein', 'ria', 'nia', 'burg', 'nia', 'gro', 'que', 'gua', 'qua', 'rhiel', 'cia', 'les', 'dan', 'nga', 'land'];
  const nm6 = ['ia', 'a', 'en', 'ar', 'istan', 'aria', 'ington', 'ua', 'ijan', 'ain', 'ium', 'us', 'esh', 'os', 'ana', 'il', 'ad', 'or', 'ea', 'eau', 'ax', 'on', 'ana', 'ary', 'ya', 'ye', 'yae', 'ait', 'ein', 'urg', 'al', 'ines', 'ela'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 2) {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm4) + sample(nm5);
    } else if (i < 4) {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm6);
    } else if (i < 6) {
      names = sample(nm3) + sample(nm4) + sample(nm5);
    } else if (i < 8) {
      names = sample(nm2) + sample(nm3) + sample(nm6);
    } else {
      names = `${sample(nm3) + sample(nm4) + sample(nm1)}  ${sample(nm3)}${sample(nm6)}`;
    }
    return names;
  }
}
