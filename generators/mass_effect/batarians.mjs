import { sample } from 'lodash-es';

export default function batarians() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm2 = ['a', 'e', 'u', 'i', 'o', '', '', '', '', '', '', '', '', '', ''];
  const nm3 = ['b', 'br', 'c', 'cr', 'd', 'dh', 'dr', 'f', 'g', 'gr', 'gh', 'k', 'kh', 'kr', 'p', 'pr', 'r', 's'];
  const nm4 = ['a', 'e', 'a', 'o'];
  const nm5 = ['chi', 'chia', 'cress', 'fin', 'fine', 'kia', 'kira', 'kis', 'lea', 'leya', 'lile', 'lla', 'lle', 'lya', 'men', 'mis', 'misa', 'mye', 'neya', 'nim', 'nin', 'nine', 'nis', 'nith', 'nna', 'nne', 'nya', 'phe', 'phi', 'pril', 'pris', 'rish', 'rith', 'sin', 'sina', 'the', 'tia', 'tin', 'vile', 'zis'];
  const nm6 = ['b', 'c', 'd', 'f', 'g', 'k', 'm', 'n', 'p', 'r', 's'];
  const nm7 = ['\'', ''];
  const nm8 = ['ba', 'b', 'bar', 'can', 'char', 'dah', 'drak', 'dor', 'gan', 'goh', 'gar', 'han', 'hal', 'h', 'kan', 'kk', 'lak', 'lok', 'lor', 'mak', 'mon', 'nak', 'nrek', 'prak', 'pos', 'rah', 'ral', 'rk', 'roh', 'rok', 'ros', 'rr', 'ss', 'star', 'th', 'tor', 'van', 'vran', 'war', 'wen'];
  const nm9 = ['cor', 'gan', 'gar', 'grom', 'ko', 'kon', 'lem', 'lo', 'm', 'mak', 'mo', 'n', 'nk', 'no', 'po', 'por', 'prak', 'rag', 'rak', 'rek', 'rem', 'rk', 'rlak', 'rn', 'rok', 'ros', 'rvan', 'sk', 'srak', 'svan', 'svin', 'th', 'than', 'thar', 'thor', 'tin', 'to', 'tok', 'tor', 'y'];
  {
    if (type === 1) {
      names = `${sample(nm2) + sample(nm3) + sample(nm4) + sample(nm9)} ${sample(nm3)}${sample(nm4)}${sample(nm6)}${sample(nm7)}${sample(nm6)}${sample(nm4)}${sample(nm8)}`;
    } else {
      names = `${sample(nm2) + sample(nm3) + sample(nm4) + sample(nm5)} ${sample(nm3)}${sample(nm4)}${sample(nm6)}${sample(nm7)}${sample(nm6)}${sample(nm4)}${sample(nm8)}`;
    }
    return names;
  }
}
