import { sample } from 'lodash-es';

export default function afterlifes() {
  let name;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['a', 'e', 'i', 'o', 'u', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm2 = ['b', 'c', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'y', 'z', 'ch', 'sh', 'ph'];
  const nm3 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ea', 'io', 'ae', 'eo'];
  const nm4 = ['g', 'h', 'l', 'm', 'n', 'r', 's', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm5 = ['bea', 'bis', 'bo', 'dah', 'del', 'den', 'dia', 'dore', 'dows', 'fey', 'gan', 'gish', 'gren', 'hala', 'hana', 'hel', 'hina', 'kala', 'kira', 'la', 'lara', 'laris', 'las', 'lear', 'less', 'lia', 'lis', 'lore', 'mani', 'mer', 'mia', 'mora', 'mu', 'muria', 'mus', 'naha', 'nahar', 'nara', 'nas', 'nase', 'nee', 'neer', 'nemo', 'nera', 'nero', 'ney', 'neya', 'nis', 'nor', 'nora', 'now', 'noya', 'nya', 'nyss', 'phae', 'phis', 'pyre', 'ra', 'raya', 'sira', 'sium', 'soah', 'sone', 'sora', 'tia', 'tira', 'tory', 'tu', 'vana', 'ven', 'vyre', 'wan', 'wen', 'wyn', 'zo'];
  const nm6 = ['Aerial', 'Ageless', 'Angelic', 'Argent', 'Astral', 'Azure', 'Beatific', 'Blessed', 'Blissful', 'Bright', 'Celestial', 'Cerulean', 'Champion', 'Chosen', 'Cloud', 'Cosmic', 'Divine', 'Dream', 'Elysian', 'Emerald', 'Empyreal', 'Empyrean', 'Eternal', 'Ethereal', 'Euphoric', 'Exalted', 'Glorious', 'Grand', 'Green', 'Hallowed', 'Happy', 'Harmonic', 'Heavenly', 'Hero', 'Holy', 'Hunting', 'Immortal', 'Infinite', 'Ivory', 'Jade', 'Light', 'Miracle', 'Olympian', 'Paradise', 'Pearly', 'Perpetual', 'Prime', 'Promised', 'Proven', 'Rainbow', 'Sapphire', 'Seraphic', 'Silver', 'Sky', 'Spirit', 'Spring', 'Sublime', 'Summer', 'Timeless', 'Utopia', 'Warrior', 'Wonder'];
  const nm7 = ['Domain', 'Empire', 'Field', 'Fields', 'Forest', 'Forests', 'Garden', 'Gardens', 'Ground', 'Grounds', 'Haven', 'Heaven', 'Heavens', 'Home', 'Kingdom', 'Land', 'Lands', 'Meadow', 'Meadows', 'Oasis', 'Pasture', 'Pastures', 'Plane', 'Planes', 'Realm', 'Sanctuary', 'Sanctum', 'World'];
  const nm8 = ['a', 'e', 'i', 'o', 'u', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm9 = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'y', 'z', 'ch', 'sh', 'br', 'cr', 'dr', 'gr', 'kr', 'pr', 'str', 'tr', 'vr'];
  const nm10 = ['a', 'e', 'i', 'o', 'u', 'ea', 'ou', 'ua', 'iu'];
  const nm11 = ['n', 'r', 's', 'g', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm12 = ['\'dem', '\'qar', '\'qira', '\'xin', '\'ziha', 'bax', 'byss', 'dahn', 'dell', 'dess', 'dis', 'doze', 'dues', 'gara', 'garn', 'gash', 'gor', 'grinn', 'hara', 'hull', 'huza', 'jura', 'kax', 'kaz', 'khan', 'kiru', 'kura', 'mas', 'mez', 'mixar', 'morta', 'muria', 'mus', 'muy', 'nahar', 'naq', 'naza', 'naze', 'nery', 'nex', 'nin', 'nixa', 'niza', 'no', 'nur', 'nura', 'ny', 'paqar', 'pax', 'pyre', 'qa', 'qore', 'qu', 'qur', 'ra', 'rax', 'siux', 'six', 'sour', 'sura', 'thor', 'tix', 'turan', 'vara', 'vax', 'vye', 'wax', 'wren', 'wyn', 'xan', 'zar', 'zo', 'zora', 'zya', 'zyss'];
  const nm13 = ['Abominable', 'Agony', 'Anguish', 'Ashen', 'Battle', 'Blasted', 'Bleak', 'Blind', 'Burning', 'Carnage', 'Conflict', 'Crimson', 'Dark', 'Dead', 'Delirium', 'Demon', 'Demonic', 'Devil', 'Diabolic', 'Dire', 'Dread', 'Ebon', 'Fever', 'Flaming', 'Foul', 'Frenzy', 'Gallow', 'Gloom', 'Grave', 'Gray', 'Grim', 'Horror', 'Infernal', 'Killing', 'Mad', 'Manic', 'Misery', 'Misty', 'Nether', 'Obsidian', 'Onyx', 'Penance', 'Plague', 'Punishment', 'Retribution', 'Rotten', 'Sanguine', 'Scarlet', 'Scourge', 'Shadow', 'Silent', 'Sinister', 'Skeletal', 'Slave', 'Somber', 'Sorrow', 'Struggle', 'Terror', 'Torment', 'Torture', 'Vicious', 'Vile', 'Wayward', 'Wicked'];
  const nm14 = ['Domain', 'Empire', 'Field', 'Fields', 'Ground', 'Grounds', 'Kingdom', 'Land', 'Lands', 'Pasture', 'Pastures', 'Plane', 'Planes', 'Realm', 'World'];
  const i = Math.floor(Math.random() * 10);
  {
    if (type !== 1) {
      if (i < 5) {
        name = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm4) + sample(nm5);
      } else {
        name = `The ${sample(nm6)} ${sample(nm7)}`;
      }
    } else if (type === 1) {
      if (i < 5) {
        name = sample(nm8) + sample(nm9) + sample(nm10) + sample(nm11) + sample(nm12);
      } else {
        name = `The ${sample(nm13)} ${sample(nm14)}`;
      }
    }
    return name;
  }
}
