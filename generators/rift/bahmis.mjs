export default function bahmis() {
  let names1;
  let names2;
  const type = Math.random() < 0.5 ? 0 : 1;
  if (type === 1) {
    names1 = ['Altan', 'Bat', 'Bayar', 'Bolor', 'Ene', 'Enkh', 'Erdene', 'Gan', 'Gerel', 'Hon', 'Khün', 'Khen', 'Khon', 'Mönkh', 'Medekh', 'Munkh', 'Muuno', 'Naran', 'Ner', 'Od', 'Ogt', 'Oyun', 'Oyuun', 'Saran', 'Sertuun', 'Solon', 'Ter', 'Uran'];
    names2 = ['bileg', 'bish', 'chimeg', 'güi', 'gerel', 'go', 'gorzol', 'gorzul', 'jargal', 'khoi', 'maa', 'tsatsral', 'tsetseg', 'tungalag', 'tuyaa', 'val', 'zorig'];
  } else {
    names1 = ['Bat', 'Batu', 'Chin', 'Chuluun', 'Ene', 'Enkh', 'Gan', 'Khün', 'Khen', 'Mönkh', 'Medekh', 'Munoo', 'Naran', 'Ner', 'Ogt', 'Otgon', 'Sühk', 'Tömör', 'Ter', 'Yul'];
    names2 = ['baatar', 'bat', 'bataar', 'bayar', 'bish', 'bold', 'güi', 'gis', 'jargal', 'khan', 'khoi', 'saikhan', 'sukh', 'tulga', 'zorig'];
  }
  const rnd = Math.floor(Math.random() * names1.length);
  const rnd2 = Math.floor(Math.random() * names2.length);
  return names1[rnd] + names2[rnd2];
}
