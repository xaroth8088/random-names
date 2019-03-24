export default function geths() {
  const names1 = ['Unit', 'Platform', 'Mod', 'System', 'SysMod', 'GU', 'G-Unit', 'Geth-Unit', 'Module'];
  const names3 = ['a', 'b', 'c', 'e', 's', 'x'];
  const names4 = ['Armada', 'Batallion', 'Alpha', 'Omega', 'Myriad', 'Sundry', 'Horde', 'Brigade', 'Phalanx', 'Host', 'Enigma', 'Terminus', 'Prophet', 'Genesis', 'Dawn', 'Oracle', 'Anomaly', 'Centurion', 'Obelisk', 'Pinnacle', 'Goliath', 'Apex', 'Vortex', 'Vertex', 'Armageddon', 'Oblivion', 'Eternity', 'Daemon', 'Demise', 'Destiny'];


  const i = Math.floor(Math.random() * 10);
  {
    if (i < 6) {
      rnd = Math.floor(Math.random() * names1.length);
      const names2 = Math.floor((Math.random() * 250) + 1);
      rnd1 = Math.floor(Math.random() * names3.length);
      names = `${names1[rnd]}-${names2}${names3[rnd1]}`;
    } else {
      rnd0 = Math.floor(Math.random() * names4.length);
      names = names4[rnd0];
    }
    return names;
  }
}
