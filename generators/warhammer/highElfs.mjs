import { sample } from 'lodash-es';

export default function highElfs() {
  let names;
  let nameL;
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
    nameL = sample(nm8);
    if (type === 1) {
      if (i < 5) {
        names = `${sample(nm5) + sample(nm6) + sample(nm7) + sample(nm6) + sample(nm7) + sample(nm6)} the ${nameL}`;
      } else {
        names = `${sample(nm5) + sample(nm6) + sample(nm7) + sample(nm6) + sample(nm7) + sample(nm6) + sample(nm7) + sample(nm6)} the ${nameL}`;
      }
    } else if (i < 5) {
      names = `${sample(nm) + sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4)} the ${nameL}`;
    } else {
      names = `${sample(nm) + sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4)} the ${nameL}`;
    }
    return names;
  }
}
