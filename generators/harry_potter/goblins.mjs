export default function goblins() {
  let rnd;
  let rnd2;
  let names;
  const nm1 = ['Ad', 'Ag', 'Al', 'Ar', 'Ban', 'Bar', 'Bog', 'Brag', 'Brod', 'Brun', 'Bug', 'Ear', 'Eg', 'Er', 'Far', 'Fil', 'Frad', 'Fur', 'Gar', 'Gor', 'Grag', 'Gran', 'Grin', 'Gruk', 'Gug', 'Gur', 'Kar', 'Kog', 'Krag', 'Krug', 'Kur', 'Lag', 'Lar', 'Lug', 'Lur', 'Nad', 'Nag', 'Nur', 'Rag', 'Ran', 'Rod', 'Rog', 'Ug', 'Ul', 'Ur'];
  const nm2 = ['git', 'gok', 'gor', 'gott', 'gras', 'grat', 'grot', 'guff', 'gus', 'guss', 'kar', 'kit', 'knas', 'knus', 'koff', 'kor', 'kras', 'krat', 'krus', 'kus', 'laff', 'last', 'lig', 'lirg', 'lok', 'lor', 'luff', 'luk', 'lus', 'naff', 'nar', 'nast', 'nok', 'not', 'nott', 'nuff', 'nuk', 'nus', 'raff', 'ragg', 'rak', 'rast', 'rat', 'rig', 'rod'];
  {
    rnd = Math.floor(Math.random() * nm1.length);
    rnd2 = Math.floor(Math.random() * nm2.length);
    names = nm1[rnd] + nm2[rnd2];
    return names;
  }
}
