export default function shotguns() {
  const nm1 = ['single barreled', 'double barreled', 'triple barreled', 'quadruple barreled', 'single barreled', 'double barreled'];
  const nm2 = ['a beauty', 'a classic', 'a new design', 'a new model', 'a popular one', 'a prototype', 'a unique piece', 'amazing', 'fairly simple', 'powerful', 'pretty standard', 'quite intimidating', 'stunning', 'very popular', 'very powerful'];
  const nm3 = ['around the world', 'in many countries', 'legally in a few countries', 'illegally in many countries', 'globally', 'in only a few countries', 'across 2 continents', 'across 3 continents', 'in almost every country', 'legally in many countries'];
  const nm4 = ['a high-power, high-efficiency weapon', 'a high-power, high-value weapon', 'a low-cost, high-efficiency weapon', 'a low-cost, high-power weapon', 'a low-cost, high-value weapon', 'a reliable, high-efficiency weapon', 'a reliable, high-value weapon', 'a reliable, low-cost weapon', 'a versatile, high-power weapon', 'a weapon with a low manufacturing cost', 'accurate, reliable and easy to maintain', 'an accurate and highly efficient weapon', 'an efficient and easy to maintain weapon', 'consistent in aim and accuracy', 'deadly accurate', 'known for its easy maintenance and reliability', 'known to be very reliable', 'reliable and precise', 'reliable even for its low-cost', 'versatile and adaptable'];
  const nm5 = ['overall length', 'standard length', 'length', 'typical length'];
  const nm6 = Math.floor((Math.random() * 500) + 600);
  const nm7 = nm6 - Math.floor((Math.random() * 200) + 100);
  const nm8 = Math.floor((Math.random() * 27) + 21) / 10;
  const nm9 = ['.360 gauge', '.410 gauge', '10 gauge', '12 gauge', '14 gauge', '16 gauge', '18 gauge', '20 gauge', '28 gauge', '32 gauge', '36 gauge', '4 gauge', '40 gauge', '8 gauge'];
  const nm10 = ['bolt-action', 'break-action', 'lever-action', 'pump-action', 'semi-automatic'];
  const nm11 = ['baton rounds', 'bird bombs', 'breaching rounds', 'brenneke', 'buckshot', 'dragon\'s breath', 'flares', 'flechette', 'frag-12', 'gas', 'grenade', 'rock salt', 'rubber slugs', 'sabots', 'screechers', 'shotshells', 'slugs', 'stingers'];
  const nm12 = ['an English fishtail stock', 'a Monte Carlo stock', 'an adjustable stock', 'a cheek piece stock', 'a folding stock', 'a pistol grip', 'a round knob stock', 'a standard stock', 'a straight English stock', 'a trap stock', 'an extendable stock'];
  const nm13 = ['a cheaper type of wood', 'an expensive wood', 'exotic wood', 'metal', 'plastic', 'premium wood'];
  const nm14 = ['custom carvings', 'expensive decorations', 'horn decorations', 'ivory decorations', 'leather decorations', 'marble decorations', 'metal decorations', 'no decorations at all', 'pearl decorations'];
  const nm15 = ['Japanese man named H. Yoshimitsu', 'German man named G. Klauss', 'British man named E. Fawkes', 'American man named G. Jones', 'Canadian man names L. Coats', 'South-African man named A. Botha', 'Chinese man named B. Chan', 'Israeli man named D. Mizrahi', 'Russian man named T. Yakovich', 'Korean man named Sung S. W', 'Indian man named C. Mahal', 'Iranian man named B. Javan', 'Turkish man named T. Almaz', 'Italian man named W. Brocato', 'French man named C. Bouvard', 'Spanish man named D. Cruz'];
  const nm16 = ['civil protection', 'civil warfare', 'crime prevention', 'fighting terrorism', 'guerilla warfare', 'hunting', 'recreational sports', 'riot control', 'the fight on drugs', 'warfare'];
  const nm17 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const nm18 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm19 = ['Armageddon', 'Boomer', 'Boomstick', 'Brass Rain', 'Bulldog', 'Cataclysm', 'Chaos', 'Dominion', 'Doom', 'Echo', 'Jaeger', 'Nightbane', 'Orbit', 'Patience', 'Rage', 'Requiem', 'Snapper', 'Storm', 'Tremor', 'Trinity'];
  const rnd1 = Math.floor(Math.random() * nm1.length);
  const rnd2 = Math.floor(Math.random() * nm2.length);
  const rnd3 = Math.floor(Math.random() * nm3.length);
  const rnd4 = Math.floor(Math.random() * nm4.length);
  const rnd5 = Math.floor(Math.random() * nm5.length);
  const rnd9 = Math.floor(Math.random() * nm9.length);
  const rnd10 = Math.floor(Math.random() * nm10.length);
  const rnd11a = Math.floor(Math.random() * nm11.length);
  let rnd11b = Math.floor(Math.random() * nm11.length);
  while (rnd11a === rnd11b) {
    rnd11b = Math.floor(Math.random() * nm11.length);
  }
  let rnd11c = Math.floor(Math.random() * nm11.length);
  while (rnd11a === rnd11c || rnd11b === rnd11c) {
    rnd11c = Math.floor(Math.random() * nm11.length);
  }
  let rnd11d = Math.floor(Math.random() * nm11.length);
  while (rnd11a === rnd11d || rnd11b === rnd11d || rnd11c === rnd11d) {
    rnd11d = Math.floor(Math.random() * nm11.length);
  }
  const rnd12a = Math.floor(Math.random() * nm12.length);
  let rnd12b = Math.floor(Math.random() * nm12.length);
  while (rnd12a === rnd12b) {
    rnd12b = Math.floor(Math.random() * nm12.length);
  }
  let rnd12c = Math.floor(Math.random() * nm12.length);
  while (rnd12a === rnd12c || rnd12b === rnd12c) {
    rnd12c = Math.floor(Math.random() * nm12.length);
  }
  const rnd13a = Math.floor(Math.random() * nm13.length);
  let rnd13b = Math.floor(Math.random() * nm13.length);
  while (rnd13a === rnd13b) {
    rnd13b = Math.floor(Math.random() * nm13.length);
  }
  let rnd13c = Math.floor(Math.random() * nm13.length);
  while (rnd13a === rnd13c || rnd13b === rnd13c) {
    rnd13c = Math.floor(Math.random() * nm13.length);
  }
  const rnd14a = Math.floor(Math.random() * nm14.length);
  let rnd14b = Math.floor(Math.random() * nm14.length);
  while (rnd14a === rnd14b) {
    rnd14b = Math.floor(Math.random() * nm14.length);
  }
  let rnd14c = Math.floor(Math.random() * nm14.length);
  while (rnd14a === rnd14c || rnd14b === rnd14c) {
    rnd14c = Math.floor(Math.random() * nm14.length);
  }
  const rnd15 = Math.floor(Math.random() * nm15.length);
  const rnd16 = Math.floor(Math.random() * nm16.length);
  const rnd16a = Math.floor(Math.random() * nm16.length);
  let rnd16b = Math.floor(Math.random() * nm16.length);
  while (rnd16a === rnd16b) {
    rnd16b = Math.floor(Math.random() * nm16.length);
  }
  let rnd16c = Math.floor(Math.random() * nm16.length);
  while (rnd16a === rnd16c || rnd16b === rnd16c) {
    rnd16c = Math.floor(Math.random() * nm16.length);
  }
  const rnd17a = Math.floor(Math.random() * nm17.length);
  const rnd17b = Math.floor(Math.random() * nm17.length);
  const rnd18a = Math.floor(Math.random() * nm18.length);
  const rnd18b = Math.floor(Math.random() * nm18.length);
  const rnd18c = Math.floor(Math.random() * nm18.length);
  const rnd18d = Math.floor(Math.random() * nm18.length);
  const rnd19 = Math.floor(Math.random() * nm19.length);
  const name = `This ${nm1[rnd1]} shotgun is ${nm2[rnd2]}, it's used ${nm3[rnd3]} as it's ${nm4[rnd4]}.`;
  const name2 = `The ${nm5[rnd5]} of the weapon is ${nm6}mm and has a barrel length of ${nm7}mm. The weapon weighs ${nm8}kg.`;
  const name3 = `The caliber used in this weapon is a ${nm9[rnd9]} and uses a ${nm10[rnd10]} firing mechanism. The ammo used most commonly are ${nm11[rnd11a]}, but it also takes ${nm11[rnd11b]}, ${nm11[rnd11c]} and ${nm11[rnd11d]}.`;
  const name4 = `This shotgun comes with ${nm12[rnd12a]}, but ${nm12[rnd12b]} and ${nm12[rnd12c]} are also available.`;
  const name5 = `The stock is made out of ${nm13[rnd13a]}, but it can also be made out of ${nm13[rnd13b]} and ${nm13[rnd13c]} if you so desire.`;
  const name6 = `There are ${nm14[rnd14a]} on the stock, but ${nm14[rnd14b]} or ${nm14[rnd14c]} are available as well.`;
  const name7 = `This weapon was designed by a ${nm15[rnd15]} who initially disgned it for use in ${nm16[rnd16]}, today it's used for ${nm16[rnd16a]}, ${nm16[rnd16b]} and ${nm16[rnd16c]}.`;
  const name8 = `The name of this weapon is the ${nm17[rnd17a]}${nm17[rnd17b]}-${nm18[rnd18a]}${nm18[rnd18b]}${nm18[rnd18c]}${nm18[rnd18d]}, but it usually goes by its nickname, ${nm19[rnd19]}.`;
  let result = '';
  result += name;
  result += '\n';
  result += name2;
  result += '\n';
  result += name3;
  result += '\n';
  result += '\n';
  result += name4;
  result += '\n';
  result += name5;
  result += '\n';
  result += name6;
  result += '\n';
  result += '\n';
  result += name7;
  result += '\n';
  result += name8;
  return result;
}
