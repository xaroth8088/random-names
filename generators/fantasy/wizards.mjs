import { sample } from 'lodash-es';

export default function wizards() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['a', 'e', 'i', 'o', 'u', '', '', '', '', '', '', '', ''];
  const nm2 = ['b', 'br', 'c', 'cr', 'd', 'dr', 'g', 'gr', 'j', 'k', 'kr', 'kn', 'p', 'pr', 'q', 'qr', 'r', 'st', 'str', 't', 'tr', 'v', 'vr', 'w', 'x', 'z', '', '', '', '', '', '', '', '', '', '', ''];
  const nm3 = ['a', 'e', 'i', 'o', 'u', 'y', 'a', 'e', 'i', 'o', 'u'];
  const nm4 = ['b', 'c', 'd', 'g', 'j', 'k', 'l', 'm', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];
  const nm5 = ['bahn', 'barin', 'beus', 'bin', 'bus', 'dalf', 'del', 'dium', 'dore', 'dus', 'farihm', 'faris', 'feus', 'flyn', 'forn', 'gast', 'geor', 'gorim', 'groln', 'grur', 'hagan', 'harad', 'haris', 'hith', 'hone', 'jahr', 'jamar', 'jeik', 'jest', 'jor', 'kalis', 'key', 'kius', 'kore', 'kron', 'lenor', 'leus', 'lin', 'lius', 'lore', 'maex', 'marim', 'mazz', 'monar', 'morn', 'naxx', 'neus', 'nior', 'nitor', 'norim', 'pan', 'phior', 'pius', 'pniar', 'prix', 'qiohr', 'qium', 'qor', 'qrax', 'quam', 'ras', 'rhan', 'rius', 'ronin', 'rune', 'shan', 'sim', 'sior', 'sorin', 'strum', 'tarum', 'taz', 'thar', 'tior', 'trix', 'veus', 'viar', 'vior', 'vius', 'vras', 'wahl', 'wix', 'wras', 'wrick', 'wyn', 'xarif', 'xeor', 'xium', 'xius', 'xon', 'ydor', 'ynas', 'yorn', 'yrin', 'yus', 'zahr', 'zax', 'zif', 'zohr', 'zor'];
  const nm6 = ['b', 'bl', 'c', 'cl', 'd', 'f', 'fr', 'fl', 'g', 'gl', 'gn', 'h', 'kl', 'kn', 'm', 'n', 'p', 'pl', 'ph', 'q', 's', 'st', 'sl', 't', 'v', 'vl', 'w', 'z'];
  const nm7 = ['b', 'c', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 'w'];
  const nm8 = ['belle', 'baris', 'beus', 'bine', 'beus', 'dali', 'delis', 'disum', 'dores', 'deis', 'faeh', 'faris', 'fea', 'fyne', 'fora', 'gaell', 'georis', 'gis', 'garis', 'grith', 'haen', 'harith', 'harise', 'hith', 'hione', 'jelle', 'jes', 'jyll', 'jiane', 'jior', 'kealis', 'key', 'kely', 'kora', 'kon', 'lyn', 'leas', 'lune', 'laes', 'lore', 'maev', 'mari', 'meazz', 'monora', 'morith', 'naxix', 'neas', 'nilor', 'nirn', 'nora', 'paen', 'phi', 'pianne', 'pyx', 'prixys', 'qiohn', 'qille', 'qora', 'qix', 'qian', 'ras', 'rihan', 'ris', 'ro', 'rune', 'shan', 'saem', 'sinor', 'soph', 'strea', 'taris', 'taz', 'thal', 'tosh', 'trix', 'veus', 'via', 'vira', 'vys', 'vae', 'weahl', 'wix', 'wrys', 'waelle', 'wyn', 'xaryl', 'xea', 'xis', 'xyll', 'xone', 'ydae', 'yna', 'yora', 'yrin', 'yeas', 'zahn', 'zyxi', 'zif', 'zohra', 'zora'];
  const nm9 = ['b', 'bl', 'c', 'cl', 'd', 'f', 'fr', 'fl', 'g', 'gl', 'gn', 'h', 'kl', 'kn', 'm', 'n', 'p', 'pl', 'ph', 'q', 's', 'st', 'sl', 't', 'v', 'vl', 'w', 'z'];
  const i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      if (i < 2) {
        names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm4) + sample(nm3) + sample(nm8);
      } else if (i < 4) {
        names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm8);
      } else if (i < 6) {
        names = sample(nm1) + sample(nm9) + sample(nm3) + sample(nm7) + sample(nm3) + sample(nm8);
      } else if (i < 8) {
        names = sample(nm1) + sample(nm9) + sample(nm3) + sample(nm8);
      } else {
        names = sample(nm3) + sample(nm4) + sample(nm8);
      }
    } else if (i < 2) {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm4) + sample(nm3) + sample(nm5);
    } else if (i < 4) {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm5);
    } else if (i < 6) {
      names = sample(nm1) + sample(nm6) + sample(nm3) + sample(nm7) + sample(nm3) + sample(nm5);
    } else if (i < 8) {
      names = sample(nm1) + sample(nm6) + sample(nm3) + sample(nm5);
    } else {
      names = sample(nm3) + sample(nm4) + sample(nm5);
    }
    return names;
  }
}
