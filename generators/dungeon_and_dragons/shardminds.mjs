export default function shardminds() {
  let names;
  let rnd;
  let rnd2;
  const names1 = ['Adu', 'Ama', 'Ani', 'Ar', 'Arsha', 'Ashi', 'Ashtu', 'Bala', 'Bara', 'Basha', 'Beles', 'Delu', 'Di', 'Dura', 'Duru', 'Enu', 'Eri', 'Eshu', 'Hua', 'Hun', 'Il', 'Ilu', 'Ira', 'Ish', 'Ku', 'Kua', 'Kuba', 'Lu', 'Mani', 'Mara', 'Mashi', 'Na', 'Nara', 'Nashi', 'Nu', 'Rua', 'Run', 'Sana', 'Sari', 'Selu', 'Shir', 'Suma', 'Tab', 'Tin', 'Tiru', 'Uba', 'Uku', 'Ura', 'Ut', 'Zaki'];
  const names2 = ['ba', 'bam', 'bani', 'bu', 'ha', 'hara', 'hu', 'ka', 'ku', 'lazu', 'lua', 'mea', 'nar', 'nara', 'naram', 'naru', 'nashtu', 'ni', 'niri', 'nu', 'nua', 'pana', 'ram', 'ranu', 'rashi', 'raya', 'ri', 'rin', 'runu', 'shara', 'shari', 'shi', 'shti', 'shtu', 'shu', 'sunu', 'ta', 'tana', 'tani', 'tari', 'ti', 'tira', 'tiru', 'tua', 'tum', 'wia', 'ya', 'yara', 'yua', 'zu'];
  {
    rnd = Math.floor(Math.random() * names1.length);
    rnd2 = Math.floor(Math.random() * names2.length);
    names = names1[rnd] + names2[rnd2];
    return names;
  }
}
