import sample from 'lodash/sample';

export default function giants() {
  let names;
  const nm1 = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'r', 's', 't', 'v', 'w', 'x', 'z', 'a', 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'r', 's', 't', 'v', 'w', 'x', 'z', 'ar', 'br', 'cr', 'dr', 'fr', 'gr', 'kr', 'sr', 'tr', 'vr', 'wr', 'al', 'bl', 'cl', 'dl', 'fl', 'gl', 'kl', 'sl', 'vl', 'zl', '', '', '', '', ''];
  const nm2 = ['e', 'i', 'u', 'o', 'a'];
  const nm3 = ['b', 'c', 'd', 'f', 'g', 'k', 'l', 'm', 'n', 'r', 's', 't', 'w', 'x', 'z', '', '', '', '', '', '', '', '', ''];
  const nm4 = ['ag', 'am', 'as', 'bar', 'barg', 'bog', 'bor', 'bos', 'brog', 'der', 'dhor', 'dius', 'dor', 'dus', 'fius', 'fum', 'fur', 'gan', 'gant', 'gar', 'gi', 'gir', 'grog', 'kaos', 'karos', 'kos', 'krus', 'las', 'lith', 'log', 'lor', 'los', 'malog', 'mir', 'mohr', 'nar', 'nas', 'nir', 'nus', 'og', 'om', 'os', 'rion', 'roch', 'rog', 'rus', 'rym', 'sag', 'sal', 'sar', 'sius', 'sog', 'sor', 'tag', 'tius', 'theus', 'thor', 'thos', 'to', 'tor', 'vag', 'ver', 'var', 'vir', 'vog', 'war', 'wor', 'zar', 'ziar', 'zus'];
  {
    names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm4);
    return names;
  }
}
