export default function bloodElf() {
  let names;
  let rnd;
  let rnd2;
  let rnd3;
  let rnd4;
  let rnd5;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Aer', 'Aeri', 'Al', 'Ala', 'Ba', 'Bac', 'Bae', 'Baem', 'Baema',
    'Be', 'Bem', 'Bema', 'Bi', 'Bit', 'Ca', 'Cae', 'Caem', 'Cam', 'Dra',
    'Drae', 'Du', 'Duy', 'Er', 'Eri', 'Ha', 'Hat', 'He', 'Her', 'In', 'Ine',
    'Inet', 'It', 'Je', 'Jen', 'Kee', 'Keel', 'Kre', 'Lo', 'Lor', 'Ma', 'Mat',
    'Matha', 'Me', 'Mel', 'No', 'Nor', 'Norae', 'Oni', 'Pa', 'Par', 'Pe',
    'Per', 'Qu', 'Qui', 'Ra', 'Rah', 'Sa', 'Sae', 'Saet', 'Sat', 'So', 'Ta',
    'Tan', 'Vy', 'Vya', 'We', 'Wel', 'Wele', 'Wi', 'Win', 'Ya', 'Yat', 'Za',
    'Zae', 'Zan', 'Ze', 'Zel'];
  const nm2 = ['h', 'ha', 'hae', 'hea', 'l', 'la', 'lae', 'le', 'm', 'ma',
    'mae', 'me', 'n', 'na', 'nae', 'ne', 'r', 'ra', 'rae', 're', 't', 'th',
    '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm3 = ['\'thema', '\'themar', '\'theas', '\'danas', '\'daras', '\'thul',
    '\'thas', '\'thaes', 'aen', 'aesh', 'aeth', 'ald', 'an', 'anis', 'aris',
    'arrin', 'as', 'ash', 'ath', 'beron', 'den', 'dis', 'dron', 'en', 'ean',
    'eath', 'eon', 'eron', 'esh', 'haen', 'hean', 'hein', 'hen', 'hin', 'iel',
    'il', 'ilan', 'illan', 'in', 'ir', 'is', 'ith', 'laen', 'lath', 'laeth',
    'len', 'leron', 'ma', 'mae', 'na', 'nis', 'ren', 'rim', 'rin', 'ris',
    'ron', 'rus', 'saen', 'sen', 'thaen', 'than', 'us', 'ven', 'veth', 'vaen',
    'ten', 'nae', 'neas', 'theas', 'lae', 'laen', 'azen', 'azhen', 'zaen',
    'zen', 'uzen'];
  const nm4 = ['Ael', 'Aela', 'Aele', 'Al', 'Ala', 'Ale', 'Am', 'Amo', 'Amor',
    'An', 'Az', 'Aza', 'Azae', 'Bel', 'Bele', 'Ca', 'Cae', 'Cai', 'Cay', 'Ce',
    'Cea', 'Cee', 'Cel', 'Da', 'Dae', 'Daen', 'Dan', 'Dar', 'Day', 'De',
    'Der', 'Dey', 'El', 'Ela', 'Ele', 'Em', 'Fae', 'Fe', 'Fey', 'Il', 'Ile',
    'Jo', 'Jovi', 'Ka', 'Kal', 'Ke', 'Keal', 'Kee', 'Kel', 'Ky', 'Lae', 'Lea',
    'Li', 'Lia', 'Ly', 'Lyn', 'Na', 'Nar', 'Nat', 'No', 'Novi', 'Ol', 'Oli',
    'Se', 'Sed', 'Sha', 'Sy', 'Sye', 'Syl', 'Ta', 'Tal', 'Tali', 'Tan', 'Te',
    'Tel', 'Teli', 'Ty', 'Tye', 'Tyn', 'Ve', 'Vel', 'Vela', 'Za', 'Zae',
    'Zan', 'Zar', 'Zat', 'Ze', 'Zea', 'Zy', 'Zya'];
  const nm5 = ['h', 'ha', 'hae', 'hea', 'l', 'la', 'lae', 'le', 'm', 'ma',
    'mae', 'me', 'n', 'na', 'nae', 'ne', 'r', 'ra', 'rae', 're', 't', 'th',
    '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm6 = ['aena', 'alda', 'alle', 'ana', 'anae', 'andra', 'anea', 'ann',
    'anna', 'anne', 'anni', 'ara', 'da', 'dine', 'dori', 'dra', 'drae',
    'drea', 'drel', 'drin', 'drine', 'eda', 'elda', 'eli', 'elly', 'enna',
    'era', 'erae', 'erea', 'estra', 'iah', 'ice', 'inda', 'ine', 'inne',
    'inth', 'ise', 'le', 'lean', 'leane', 'len', 'lenn', 'lenne', 'li', 'lia',
    'ly', 'na', 'nia', 'nice', 'onia', 'ori', 'ra', 'rae', 'rea', 'rel',
    'riah', 'rin', 'rine', 'rise', 'vea', 'via', 'vie', 'wae', 'we', 'wea',
    'yn', 'yna', 'ynna'];
  const nm7 = ['Autumn', 'Black', 'Blood', 'Bright', 'Cold', 'Dark', 'Dawn',
    'Day', 'Dew', 'Down', 'Ember', 'Fire', 'Flame', 'Heart', 'High', 'Leaf',
    'Light', 'Mirth', 'Moon', 'Morning', 'Night', 'Phoenix', 'Red', 'Rose',
    'Silver', 'Star', 'Sun'];
  const nm8 = ['bane', 'binder', 'blade', 'blossom', 'bringer', 'brook', 'down',
    'fall', 'feather', 'flame', 'flare', 'forge', 'fury', 'gaze', 'gazer',
    'heart', 'light', 'mourn', 'reaver', 'seeker', 'shade', 'shadow', 'shard',
    'shield', 'singer', 'sky', 'sorrow', 'spark', 'spear', 'spell',
    'sprinter', 'stalker', 'star', 'strider', 'sun', 'sworn', 'vale',
    'walker', 'whisper', 'wing', 'wood'];
  const i = Math.floor(Math.random() * 10); {
    rnd4 = Math.floor(Math.random() * nm7.length);
    rnd5 = Math.floor(Math.random() * nm8.length);
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm4.length);
      rnd2 = Math.floor(Math.random() * nm5.length);
      rnd3 = Math.floor(Math.random() * nm6.length);
      if (i < 6) {
        names = `${nm4[rnd] + nm5[rnd2] + nm6[rnd3]} ${nm7[rnd4]}${nm8[rnd5]}`;
      } else {
        names = `${nm4[rnd] + nm6[rnd3]} ${nm7[rnd4]}${nm8[rnd5]}`;
      }
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      if (i < 6) {
        names = `${nm1[rnd] + nm2[rnd2] + nm3[rnd3]} ${nm7[rnd4]}${nm8[rnd5]}`;
      } else {
        names = `${nm1[rnd] + nm3[rnd3]} ${nm7[rnd4]}${nm8[rnd5]}`;
      }
    }
    return names;
  }
}
