import { sample } from 'lodash-es';

export default function raxacoricofallapatorians() {
  let names;
  const nm1 = ['B', 'Bl', 'Br', 'D', 'Dr', 'Gr', 'G', 'Gl', 'J', 'K', 'Kr', 'L', 'S', 'Sr', 'Sl', 'Tr', 'Tl'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'ee', 'oo', 'aa'];
  const nm3 = ['cra', 'ckt', 'ckto', 'f', 'ft', 'll', 'lm', 'ln', 'm', 'n', 'ne', 'p', 'rm', 'rn', 'rs', 'rst', 'st', 's', 'ss', 'sp', 'x', 'xa'];
  const nm4 = ['B', 'D', 'F', 'G', 'K', 'L', 'M', 'N', 'R', 'T', 'V'];
  const nm5 = ['a', 'e', 'i', 'o', 'u', 'y'];
  const nm6 = ['d', 'f', 'g', 'gg', 'l', 'll', 'm', 'mm', 'ng', 'nn', 'r', 'rr', 'rm', 'rn', 's', 'ss', 'x', 'ze', 'z'];
  const nm7 = ['B', 'Bl', 'D', 'Dr', 'F', 'Fl', 'G', 'Gr', 'Gl', 'Kl', 'L', 'M', 'N', 'T'];
  const nm8 = ['bs', 'dd', 'gg', 'gs', 'ln', 'lm', 'ls', 'n', 'ng', 'rn', 'rm', 'rt', 'tch', 'sh', 'ze'];
  const nm9 = ['B', 'D', 'G', 'H', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'Sh'];
  const nm10 = ['a', 'e', 'i', 'o', 'u'];
  const nm11 = ['bb', 'bl', 'gl', 'gr', 'gg', 'kr', 'kl', 'kk', 'lm', 'ln', 'lr', 'll', 'pp', 'pr', 'pl', 'rr', 'rl', 'ss', 't', 'tl'];
  const nm12 = ['d', 'l', 'm', 'n', 's', 'v'];
  const nm13 = ['eer', 'en', 'een'];
  const nm14 = ['B', 'Bl', 'D', 'G', 'Gl', 'Gr', 'Pl', 'P', 'Pr', 'R', 'S', 'Sl', 'T', 'Tr'];
  const nm15 = ['f', 'l', 'm', 'n', 'r', 's', 'y'];
  const nm16 = ['B', 'Bl', 'C', 'Ch', 'F', 'Fl', 'Gl', 'G', 'H', 'K', 'L', 'M', 'N', 'P', 'R', 'Sl', 'S'];
  const nm17 = ['ck', 'dr', 'ff', 'g', 'gr', 'kk', 'l', 'll', 'm', 'n', 'pp', 'rl', 'st', 'str', 'tt', 'th', 'v', 'z'];
  const nm18 = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'ar', 'er', 'et', 'ez', 'at', 'az', 'oz', 'el', 'al', 'es', 'as'];
  const nm19 = ['een', 'ene'];
  {
    names = `${sample(nm1) + sample(nm2) + sample(nm3)} ${sample(nm4)}${sample(nm5)}${sample(nm6)} ${sample(nm7)}${sample(nm10)}${sample(nm8)} ${sample(nm9)}${sample(nm10)}${sample(nm11)}${sample(nm10)}${sample(nm12)}${sample(nm13)}-${sample(nm14)}${sample(nm10)}${sample(nm15)} ${sample(nm16)}${sample(nm10)}${sample(nm17)}${sample(nm18)}${sample(nm19)}`;
    return names;
  }
}
