import sample from 'lodash/sample';

export default function wines() {
  let names;
  const nm1 = ['', '', '', '', '', 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', 'bl', 'br', 'ch', 'cl', 'dh', 'fr', 'fl', 'gh', 'gr', 'sh', 'tr'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ueu', 'ou', 'au', 'ai', 'ue', 'eau', 'au', 'ei', 'ee', 'ia', 'ie', 'io', 'uei', 'oui', 'ieu', 'eo'];
  const nm3 = ['bb', 'bl', 'br', 'c', 'cc', 'cch', 'ch', 'd', 'f', 'g', 'gd', 'gn', 'gr', 'j', 'k', 'l', 'lb', 'lbl', 'ldt', 'll', 'lr', 'ls', 'm', 'mb', 'mbl', 'mbr', 'mch', 'mm', 'mp', 'n', 'nc', 'nch', 'nd', 'ndr', 'ng', 'nh', 'nj', 'nk', 'nn', 'nt', 'nth', 'ntr', 'nv', 'pf', 'pl', 'q', 'r', 'rb', 'rc', 'rch', 'rd', 'rf', 'rg', 'rgr', 'rh', 'rl', 'rm', 'rn', 'rr', 'rs', 'rt', 'rth', 'rtz', 's', 'sb', 'sc', 'sl', 'ss', 'ssl', 'st', 'th', 'tt', 'v', 'vr', 'x', 'z'];
  const nm4 = ['beit', 'bera', 'beutel', 'blage', 'bles', 'blis', 'bourg', 'bria', 'cano', 'cati', 'cchio', 'cchus', 'ce', 'cella', 'chage', 'che', 'chen', 'chot', 'dange', 'deaux', 'der', 'dol', 'drieu', 'fe', 'ge', 'geac', 'geot', 'gey', 'giens', 'gna', 'gnan', 'gne', 'gnon', 'gros', 'grube', 'gueil', 'heim', 'kastel', 'lage', 'lais', 'las', 'lbot', 'lese', 'let', 'lien', 'lino', 'lion', 'lla', 'lle', 'llina', 'llo', 'llon', 'lly', 'lo', 'lon', 'lou', 'lung', 'ly', 'ma', 'mante', 'mat', 'may', 'mbes', 'me', 'mens', 'ment', 'mes', 'meur', 'ms', 'mune', 'mur', 'na', 'nac', 'nais', 'nas', 'nay', 'nce', 'nche', 'ne', 'nee', 'nel', 'ner', 'nett', 'nia', 'nier', 'nieux', 'nis', 'nne', 'node', 'non', 'note', 'nots', 'nti', 'ntre', 'nues', 'nuhr', 'phe', 'que', 'quem', 'raud', 'reic', 'reich', 'resco', 'rie', 'rnes', 'rnet', 'rno', 'rol', 'rons', 'rre', 'rten', 'rtin', 'rton', 'san', 'sco', 'sir', 'sis', 'sne', 'sone', 'sse', 'ssec', 'sson', 'sus', 'tage', 'tan', 'tium', 'tour', 'tre', 'tte', 'val', 've', 'vel', 'vens', 'ves', 'ville', 'vrey', 'vry', 'wen', 'wer', 'xin', 'zeaux', 'zin'];
  const nm5 = ['', '', '', '', '', '', '', 'Abboccato', 'Acescence', 'Adamado', 'Adega', 'Amabile', 'Annata', 'Bianco', 'Blanc', 'Blanco', 'Branco', 'Cépage', 'Cap Classique', 'Cava', 'Chiaretto', 'Clairet', 'Classic', 'Demi-Sec', 'Doce', 'Dolce', 'Doux', 'Dulce', 'Edes', 'Frizzante', 'Fume', 'Garrafeira', 'Granvas', 'Halbtrocken', 'Invecchiato', 'Liquoroso', 'Mousseux', 'Noir', 'Pétillant', 'Piquant', 'Rich', 'Rosado', 'Rosato', 'Rosso', 'Rouge', 'Süss', 'Sec', 'Secco', 'Száraz', 'Vendemmia', 'Vendimia', 'Viejo', 'd\'Or'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 5) {
      names = `${sample(nm1) + sample(nm2) + sample(nm4)} ${sample(nm5)}`;
    } else {
      names = `${sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4)} ${sample(nm5)}`;
    }
    return names;
  }
}
