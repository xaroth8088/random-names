import { sample } from 'lodash-es';

export default function zabraks() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['A', 'O', 'E', 'U', 'B', 'Br', 'Bl', 'D', 'Dr', 'G', 'Gr', 'H', 'K', 'Kr', 'Kl', 'M', 'N', 'P', 'Q', 'R', 'S', 'St', 'T', 'V', 'Vr', 'X'];
  const nm2 = ['a', 'o', 'u', 'e'];
  const nm3 = ['ra', 'ro', 'ru', 'rga', 'rgo', 'rgu', 'rge', 'ba', 'bo', 'bu', 'bra', 'bru', 'bro', 'da', 'do', 'du', 'dra', 'dru', 'dro', 'ga', 'go', 'gu', 'gro', 'gra', 'gru', 'ka', 'ko', 'ku', 'ke', 'kra', 'kro', 'kru', 'ma', 'mo', 'mu', 'na', 'no', 'nu', 'pa', 'po', 'pu', 'pra', 'pro', 'pru', 'qa', 'qo', 'qu', 'sa', 'so', 'su', 'sra', 'sro', 'sru', 'sta', 'sto', 'stu', 'ta', 'to', 'tu', 'tra', 'tro', 'tru', 'va', 'vo', 'vu', 'vra', 'vro', 'vru', 'xa', 'xo', 'xu'];
  const nm4 = ['d', 'g', 'k', 'm', 'n', 'p', 'r', 's', 't', 'x', '', '', '', '', '', '', '', '', ''];
  const nm5 = ['a', 'o', 'u', 'e', '', '', '', '', '', '', ''];
  const nm6 = ['A', 'O', 'E', 'B', 'Bl', 'D', 'G', 'H', 'K', 'Kl', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'St', 'T', 'V', 'Vr', 'X', 'W'];
  const nm7 = ['ba', 'be', 'bi', 'bo', 'bra', 'bre', 'bri', 'bro', 'da', 'de', 'di', 'do', 'dra', 'dre', 'dri', 'dro', 'ga', 'ge', 'gi', 'go', 'gra', 'gre', 'gri', 'gro', 'ka', 'ke', 'ki', 'ko', 'kra', 'kre', 'kri', 'kro', 'ma', 'me', 'mi', 'mo', 'na', 'ne', 'ni', 'no', 'pa', 'pe', 'pi', 'po', 'pra', 'pre', 'pri', 'pro', 'qa', 'qe', 'qi', 'qo', 'ra', 're', 'rga', 'rge', 'rgi', 'rgo', 'ri', 'ro', 'sa', 'se', 'si', 'so', 'sra', 'sre', 'sri', 'sro', 'sta', 'ste', 'sti', 'sto', 'ta', 'te', 'ti', 'to', 'tra', 'tre', 'tri', 'tro', 'va', 've', 'vi', 'vo', 'vra', 'vre', 'vri', 'vro', 'xa', 'xe', 'xi', 'xo'];
  const nm8 = ['a', 'o', 'u', 'e', 'i', '', '', '', ''];
  {
    if (type === 1) {
      names = sample(nm6) + sample(nm2) + sample(nm7) + sample(nm4) + sample(nm8);
    } else {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm4) + sample(nm5);
    }
    return names;
  }
}
