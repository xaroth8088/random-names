import sample from 'lodash/sample';

export default function sontarans() {
  let names;
  const nm1 = ['B', 'Br', 'D', 'Dr', 'Gr', 'J', 'K', 'Kr', 'L', 'N', 'M', 'S', 'Sk', 'Sn', 'St', 'T', 'Tr', 'V', 'Vr'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'y', 'aa', 'ee'];
  const nm3 = ['g', 'gg', 'gt', 'gh', 'k', 'kt', 'kk', 'l', 'll', 'nt', 'nx', 'r', 'rl', 'rr', 'rk', 'rn', 'rg', 'sk'];
  const nm4 = ['a', 'e', 'i', 'o', 'u'];
  const nm5 = ['d', 'g', 'gr', 'j', 'k', 'kr', 'l', 'mt', 'ng', 'nt', 'r', 'rt', 'rn', 'st', 'ts', 'th', 'v'];
  const nm6 = ['', '', 'g', 'k', 'l', 'm', 'n', 'r', 'x'];
  const nm7 = ['Adept', 'Admired', 'Aggressive', 'Aggressor', 'Agile', 'Ambitious', 'Assassin', 'Avenger', 'Beast', 'Behemoth', 'Bloodbringer', 'Bloodhunter', 'Bloodied', 'Bold', 'Brave', 'Brilliant', 'Brutal', 'Butcher', 'Champion', 'Clever', 'Corruptor', 'Crafty', 'Crooked', 'Cunning', 'Danger', 'Dapper', 'Defiant', 'Diligent', 'Doombringer', 'Eliminator', 'Enforcer', 'Enormous', 'Exalted', 'Executioner', 'Expert', 'Fearless', 'Glorious', 'Grand', 'Great', 'Hunter', 'Illustrious', 'Immortal', 'Incredible', 'Infamous', 'Inventor', 'Killer', 'Knowing', 'Loyal', 'Magnificent', 'Marvelous', 'Master', 'Masterful', 'Menace', 'Merciless', 'Mighty', 'Paragon', 'Powerful', 'Prestigious', 'Proud', 'Razor', 'Reckless', 'Reliable', 'Ruthless', 'Slayer', 'Sneaky', 'Stark', 'Stout', 'Strong', 'Terrific', 'Terror', 'Turbulent', 'Undefeated', 'Valiant', 'Vengeful', 'Victorious', 'Vigilant', 'Warlord', 'Warmonger', 'Warrior', 'Wild', 'Wonderful', 'Wrathful', 'Wretched', 'Zealous'];
  const nm8 = ['B', 'D', 'G', 'J', 'K', 'L', 'N', 'M', 'S', 'T', 'V'];
  const nm9 = ['d', 'g', 'gg', 'gr', 'k', 'kr', 'kk', 'l', 'll', 'ng', 'n', 'nn', 'r', 'rl', 'rr', 'rk', 'rn', 'rg', 'st', 'sk', 'th', 'v'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 5) {
      names = `${sample(nm8) + sample(nm4) + sample(nm9) + sample(nm4) + sample(nm6)}  ${sample(nm1)}${sample(nm2)}${sample(nm3)} the ${sample(nm7)}`;
    } else if (i < 8) {
      names = `${sample(nm8) + sample(nm4) + sample(nm9) + sample(nm4) + sample(nm6)}  ${sample(nm1)}${sample(nm4)}${sample(nm5)}${sample(nm4)}${sample(nm6)} the ${sample(nm7)}`;
    } else {
      names = `${sample(nm8) + sample(nm4) + sample(nm9) + sample(nm4) + sample(nm6)}  ${sample(nm1)}${sample(nm4)}${sample(nm5)}${sample(nm4)}${sample(nm3)} the ${sample(nm7)}`;
    }
    return names;
  }
}
