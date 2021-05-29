import { sample } from 'lodash-es';

export default function tieflings() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Aet', 'Ak', 'Am', 'Aran', 'And', 'Ar', 'Ark', 'Bar', 'Car', 'Cas', 'Dam', 'Dhar', 'Eb', 'Ek', 'Er', 'Gar', 'Gu', 'Gue', 'Hor', 'Ia', 'Ka', 'Kai', 'Kar', 'Kil', 'Kos', 'Ky', 'Loke', 'Mal', 'Male', 'Mav', 'Me', 'Mor', 'Neph', 'Oz', 'Ral', 'Re', 'Rol', 'Sal', 'Sha', 'Sir', 'Ska', 'The', 'Thy', 'Thyne', 'Ur', 'Uri', 'Val', 'Xar', 'Zar', 'Zer', 'Zher', 'Zor'];
  const nm2 = ['adius', 'akas', 'akos', 'char', 'cis', 'cius', 'dos', 'emon', 'ichar', 'il', 'ilius', 'ira', 'lech', 'lius', 'lyre', 'marir', 'menos', 'meros', 'mir', 'mong', 'mos', 'mus', 'non', 'rai', 'rakas', 'rakir', 'reus', 'rias', 'ris', 'rius', 'ron', 'ros', 'rus', 'rut', 'shoon', 'thor', 'thos', 'thus', 'us', 'venom', 'vir', 'vius', 'xes', 'xik', 'xikas', 'xire', 'xius', 'xus', 'zer', 'zire'];
  const nm3 = ['Achievement', 'Adventure', 'Aid', 'Anguish', 'Art', 'Ashes', 'Atonement', 'Awe', 'Bliss', 'Bright', 'Carrion', 'Chant', 'Cheer', 'Cherish', 'Closed', 'Comfort', 'Compassion', 'Confidence', 'Content', 'Courage', 'Cunning', 'Darkness', 'Deceit', 'Delight', 'Desire', 'Despair', 'Devotion', 'Dexterity', 'Different', 'Dread', 'Ecstasy', 'End', 'Enduring', 'Essential', 'Esteem', 'Eternal', 'Euphoria', 'Exceptional', 'Exciting', 'Expert', 'Expertise', 'Expressive', 'Extreme', 'Faith', 'Fear', 'Flawed', 'Free', 'Freedom', 'Fresh', 'Gentle', 'Gladness', 'Glee', 'Gloom', 'Happiness', 'Happy', 'Harmony', 'Hatred', 'Hero', 'Hope', 'Hunt', 'Hymn', 'Ideal', 'Immortal', 'Innovation', 'Interesting', 'Journey', 'Joy', 'Laughter', 'Life', 'Light', 'Love', 'Loyal', 'Mantra', 'Master', 'Mastery', 'Misery', 'Music', 'Normal', 'Nowhere', 'Odd', 'Open', 'Optimal', 'Panic', 'Perfect', 'Piety', 'Pleasure', 'Poetry', 'Possession', 'Promise', 'Psalm', 'Pure', 'Quest', 'Random', 'Rare', 'Recovery', 'Redemption', 'Regular', 'Relentless', 'Respect', 'Reverence', 'Sadness', 'Sanctity', 'Silence', 'Skilled', 'Sly', 'Song', 'Sorrow', 'Suffering', 'Terror', 'Timeless', 'Torment', 'Trickery', 'Trouble', 'Trust', 'Truth', 'Uncommon', 'Unlocked', 'Void', 'Voyage', 'Weary', 'Winning', 'Woe'];
  const nm4 = ['Af', 'Agne', 'Ani', 'Ara', 'Ari', 'Aria', 'Bel', 'Bri', 'Cre', 'Da', 'Di', 'Dim', 'Dor', 'Ea', 'Fri', 'Gri', 'His', 'In', 'Ini', 'Kal', 'Le', 'Lev', 'Lil', 'Ma', 'Mar', 'Mis', 'Mith', 'Na', 'Nat', 'Ne', 'Neth', 'Nith', 'Ori', 'Pes', 'Phe', 'Qu', 'Ri', 'Ro', 'Sa', 'Sar', 'Seiri', 'Sha', 'Val', 'Vel', 'Ya', 'Yora', 'Yu', 'Za', 'Zai', 'Ze'];
  const nm5 = ['bis', 'borys', 'cria', 'cyra', 'dani', 'doris', 'faris', 'firith', 'goria', 'grea', 'hala', 'hiri', 'karia', 'ki', 'laia', 'lia', 'lies', 'lista', 'lith', 'loth', 'lypsis', 'lyvia', 'maia', 'meia', 'mine', 'narei', 'nirith', 'nise', 'phi', 'pione', 'punith', 'qine', 'rali', 'rissa', 'seis', 'solis', 'spira', 'tari', 'tish', 'uphis', 'vari', 'vine', 'wala', 'wure', 'xibis', 'xori', 'yis', 'yola', 'za', 'zis'];
  const i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      if (i < 7) {
        names = sample(nm4) + sample(nm5);
      } else {
        names = sample(nm3);
      }
    } else if (i < 7) {
      names = sample(nm1) + sample(nm2);
    } else {
      names = sample(nm3);
    }
    return names;
  }
}
