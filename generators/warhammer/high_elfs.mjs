export default function high_elfs() {
  let rnd;

  let rnd0;
  let rnd2;
  let rnd3;
  let rnd4;
  let rnd5;
  let rnd6;
  let rnd7;
  let
    rnd8;


  let names;

  const type = Math.random() > 0.5 ? 0 : 1;
  const nm = ['Bel-', '', '', '', ''];
  const nm1 = ['', '', '', '', '', 'c', 'd', 'f', 'g', 'gh', 'h', 'k', 'm', 's', 'sh', 't', 'th', 'v', 'z'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'a', 'e', 'e', 'o', 'o', 'ye', 'ae', 'io', 'ya', 'aa'];
  const nm3 = ['b', 'd', 'l', 'n', 'r', 'z', 'b', 'd', 'l', 'n', 'r', 'z', 'b', 'br', 'cl', 'cr', 'd', 'dr', 'dh', 'gr', 'l', 'lv', 'lr', 'ln', 'ld', 'n', 'nd', 'nn', 'nt', 'nth', 'ntr', 'r', 'rh', 'rv', 'rt', 'rth', 'rd', 'rh', 'th', 'thl', 'z', 'zr'];
  const nm4 = ['c', 'l', 'n', 'r', 's'];
  const nm5 = ['', '', '', '', 'd', 'f', 'h', 'kh', 'l', 'm', 'n', 'r', 's', 'sh', 't', 'th', 'z'];
  const nm6 = ['a', 'e', 'i', 'a', 'e', 'i', 'a', 'e', 'i', 'a', 'e', 'i', 'a', 'e', 'i', 'a', 'e', 'i', 'o', 'o', 'o', 'ie', 'ia', 'ae', 'ye', 'ei'];
  const nm7 = ['c', 'd', 'f', 'h', 'k', 'l', 'm', 'n', 'r', 's', 't', 'v', 'z', 'c', 'd', 'dh', 'dd', 'f', 'ff', 'fn', 'gh', 'h', 'hh', 'k', 'kh', 'l', 'll', 'lr', 'lv', 'lm', 'ln', 'lf', 'lg', 'm', 'mm', 'mn', 'n', 'nn', 'nr', 'nv', 'r', 'rr', 'rh', 'rn', 'rl', 's', 'sh', 'ss', 't', 'tt', 'th', 'v', 'z', 'zz'];
  const nm8 = ['Academic', 'Acclaimed', 'Admired', 'Agile', 'Ancient', 'Angel', 'Angelic', 'Artist', 'Austere', 'Beast', 'Beautiful', 'Blessed', 'Bold', 'Brave', 'Brilliant', 'Celebrated', 'Clever', 'Composed', 'Conqueror', 'Defender', 'Defiant', 'Devoted', 'Diligent', 'Discrete', 'Earnest', 'Educated', 'Elegant', 'Enchanted', 'Enchanting', 'Enforcer', 'Enlightened', 'Exalted', 'Executioner', 'Expert', 'Explorer', 'Fearless', 'Flamboyant', 'Flawless', 'Generous', 'Gentle', 'Gifted', 'Giving', 'Glorious', 'Graceful', 'Grand', 'Great', 'Grim', 'Guardian', 'Honest', 'Honorable', 'Honored', 'Humble', 'Illustrious', 'Immortal', 'Impetuous', 'Incredible', 'Just', 'Learned', 'Light', 'Loremaster', 'Loyal', 'Magnificent', 'Majestic', 'Marvelous', 'Merciful', 'Mighty', 'Oracle', 'Paragon', 'Patient', 'Peacemaker', 'Pious', 'Pleasant', 'Poet', 'Powerful', 'Prime', 'Proud', 'Radiant', 'Sage', 'Seafarer', 'Serene', 'Silent', 'Slayer', 'Specialist', 'Stark', 'Stout', 'Strict', 'Swift', 'Valiant', 'Vengeful', 'Warrior', 'Wild', 'Wise'];


  const i = Math.floor(Math.random() * 10);
  {
    rnd = Math.floor(Math.random() * nm8.length);
    nameL = nm8[rnd];
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm5.length);
      rnd2 = Math.floor(Math.random() * nm6.length);
      rnd3 = Math.floor(Math.random() * nm7.length);
      rnd4 = Math.floor(Math.random() * nm6.length);
      rnd5 = Math.floor(Math.random() * nm7.length);
      rnd6 = Math.floor(Math.random() * nm6.length);
      if (i < 5) {
        names = `${nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm7[rnd5] + nm6[rnd6]} the ${nameL}`;
      } else {
        rnd7 = Math.floor(Math.random() * nm7.length);
        rnd8 = Math.floor(Math.random() * nm6.length);
        names = `${nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm7[rnd5] + nm6[rnd6] + nm7[rnd7] + nm6[rnd8]} the ${nameL}`;
      }
    } else {
      rnd0 = Math.floor(Math.random() * nm.length);
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd4 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm4.length);
      if (i < 5) {
        names = `${nm[rnd0] + nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5]} the ${nameL}`;
      } else {
        rnd6 = Math.floor(Math.random() * nm3.length);
        rnd7 = Math.floor(Math.random() * nm2.length);
        names = `${nm[rnd0] + nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd6] + nm2[rnd5] + nm4[rnd5]} the ${nameL}`;
      }
    }
    return names;
  }
}