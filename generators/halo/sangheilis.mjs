import { sample } from 'lodash-es';

export default function sangheilis() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['b', 'c', 'd', 'f', 'gr', 'j', 'k', 'kh', 'l', 'mr', 'n\'th', 'r', 'rt', 's', 't', 'th', 'v', 'x', 'z', '', ''];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'y'];
  const nm3 = ['da', 'do', 'g', 'ga', 'ha', 'ka', 'kan', 'ko', 'l', 'la', 'pa', 'po', 'r', 'ra', 're', 'ro', 's', 'sa', 'san', 'so', 'sze', 't', 'ta', 'tan', 'to', 'va', 'vo', 'vu', 'za', 'ze', 'zo'];
  const nm4 = ['Cha', 'Da', 'Dra', 'Ga', 'Go', 'Ha', 'Ka', 'Ko', 'Kra', 'Ku', 'La', 'Lo', 'Lu', 'Ma', 'Mda', 'Mo', 'Mu', 'Na', 'Nra', 'Nu', 'Ra', 'Re', 'Ro', 'Sa', 'Sra', 'Su', 'Ta', 'Te', 'Tra', 'Tu', 'Va', 'Vo', 'Vra', 'Vu', 'Wa', 'Za', 'Zo', 'Zu'];
  const nm5 = ['cam', 'dam', 'dom', 'dum', 'fam', 'fum', 'gam', 'gram', 'gum', 'ham', 'hom', 'kam', 'lcam', 'lkam', 'ma', 'man', 'nam', 'ngam', 'nom', 'ntak', 'ralum', 'ram', 'rom', 'rum', 'sam', 'sov', 'sum', 'tam', 'tan', 'ttin', 'tum', 'vam', 'vum', 'zam', 'zum'];
  const nm6 = ['b', 'c', 'd', 'f', 'h', 'g', 'k', 'kh', 'l', 'm', 'n', 'r', 'sh', 's', 't', 'th', 'v', 'x', 'z'];
  const nm7 = ['a', 'e', 'o', 'u'];
  const nm8 = ['ea', 'ha', 'he', 'ia', 'ie', 'io', 'la', 'le', 'lo', 'ma', 'me', 'mi', 'mo', 'n', 'na', 'ne', 'pa', 'sa', 'se', 'sha', 'she', 'so', 'wa', 'we', 'xa', 'xe', 'xi', 'ya', 'ye', 'yo'];
  const nm9 = ['', '', 'ee', '', 'ai'];
  {
    if (type === 1) {
      names = `${sample(nm6) + sample(nm7) + sample(nm8)} '${sample(nm4)}${sample(nm5)}${sample(nm9)}`;
    } else {
      names = `${sample(nm1) + sample(nm2) + sample(nm3)} '${sample(nm4)}${sample(nm5)}${sample(nm9)}`;
    }
    return names;
  }
}
