import { sample } from 'lodash-es';

export default function wingedHorses() {
  let names;
  const nm1 = ['a', 'ae', 'ea', 'i', 'o', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm2 = ['ba', 'bli', 'blo', 'bra', 'bri', 'cae', 'ci', 'cra', 'cro', 'da', 'do', 'dra', 'dro', 'fae', 'fo', 'fra', 'fre', 'glo', 'gra', 'gre', 'gri', 'la', 'lea', 'lia', 'lo', 'ma', 'mae', 'me', 'mea', 'nae', 'nea', 'nei', 'ni', 'phae', 'phri', 'pio', 'po', 'pri', 'ra', 'rae', 'rea', 'ro', 'she', 'sho', 'sli', 'sna', 'tae', 'the', 'tho', 'tri'];
  const nm3 = ['ban', 'bian', 'bral', 'can', 'cian', 'ddan', 'dial', 'dian', 'din', 'hal', 'han', 'hian', 'lan', 'lian', 'lin', 'llan', 'man', 'mian', 'min', 'mman', 'nan', 'nial', 'nian', 'nnal', 'nnan', 'phal', 'phian', 'phion', 'ppan', 'ral', 'ran', 'rian', 'rin', 'rran', 'sal', 'san', 'sin', 'ssin', 'stral', 'tan', 'thian', 'tian', 'tin', 'tral', 'xal', 'xan', 'xian', 'xxin'];
  {
    names = sample(nm1) + sample(nm2) + sample(nm3);
    return names;
  }
}
