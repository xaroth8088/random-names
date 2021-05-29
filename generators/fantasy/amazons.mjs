import { sample } from 'lodash-es';

export default function amazons() {
  let names;
  const nm1 = ['b', 'bl', 'br', 'c', 'chr', 'cl', 'cr', 'd', 'dr', 'f', 'g', 'gl', 'gr', 'h', 'j', 'k', 'kl', 'kr', 'm', 'n', 'p', 'ph', 'ps', 'pr', 'r', 'rh', 's', 'sm', 'sc', 't', 'th', 'v', 'x', '', '', '', '', '', '', ''];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'y', 'ou', 'ei', 'oe', 'ao', 'io', 'eo', 'a', 'e', 'i', 'o', 'u'];
  const nm3 = ['c', 'd', 'k', 'l', 'm', 'r', 's', 't', 'x', '', '', '', '', '', '', '', '', '', '', ''];
  const nm4 = ['c', 'd', 'k', 'l', 'm', 'r', 's', 't', 'x', 'nd', 'nt', 'lk', 'lc', 'll', 'ndr', 'br', 'st', 'ch', 'br', 'cl', 'ph', 'rm', 'pp', 'pt', 'rp', 'nth', 'th', 'rg', 'thr', 'dm', 'lth', 'lc', 'chr', 'phn', 'dr', 'mn', 'rr', 'rrh'];
  const nm5 = ['a', 'e', 'i', 'o', 'u', 'y', '', '', '', '', '', '', '', '', ''];
  const nm6 = ['adia', 'ameia', 'anta', 'asca', 'cabe', 'ce', 'cleia', 'cyone', 'cyra', 'da', 'dae', 'dia', 'dice', 'dora', 'enice', 'esia', 'estra', 'estris', 'gea', 'gone', 'haedra', 'hyia', 'ippe', 'isbe', 'ises', 'leia', 'lene', 'lete', 'liope', 'lipe', 'lyte', 'mache', 'meia', 'nache', 'nara', 'neira', 'nestra', 'nia', 'nippe', 'noe', 'nousa', 'ope', 'padia', 'pedo', 'peia', 'pesia', 'phale', 'pyle', 'pyte', 'rera', 'reto', 'roe', 'scyra', 'ses', 'sippe', 'sose', 'tane', 'thippe', 'thoe', 'thya', 'thye', 'thyia', 'ybe', 'yche', 'yle', 'yme', 'yne', 'yope', 'yrbe', 'ytie'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 5) {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm5) + sample(nm6);
    } else {
      names = sample(nm1) + sample(nm2) + sample(nm4) + sample(nm2) + sample(nm6);
    }
    return names;
  }
}
