import { sample } from 'lodash-es';

export default function bows() {
  const nm1 = ['admirable', 'beautiful', 'charming', 'common', 'decent', 'elegant', 'excellent', 'exceptional', 'fine', 'first-rate', 'intricate', 'magnificent', 'marvelous', 'masterfully crafted', 'nifty', 'ornate', 'pleasant', 'popular', 'rare', 'skillfully created', 'solid', 'superior', 'uncommon', 'well designed', 'well-made'];
  const nm2 = ['recurve bow', 'reflex bow', 'self bow', 'longbow', 'flatbow', 'composite bow', 'compound bow', 'shortbow', 'recurve crossbow', 'compound crossbow', 'repeating crossbow', 'pistol crossbow', 'rifle crossbow', 'recurve crossbow', 'compound crossbow'];
  const nm3 = ['adeptly', 'admirably', 'appropriately', 'carefully', 'cleverly', 'delicately', 'efficiently', 'expertly', 'extremely well', 'flawlessly', 'masterfully', 'properly', 'reliably', 'remarkably', 'rigorously', 'skillfully', 'solidly', 'superbly', 'well', 'wonderfully'];
  const nm4 = ['a fine sample of', 'a rare sample of', 'amazingly strong', 'common', 'decent', 'durable', 'excellent', 'exceptional', 'exquisite', 'extraordinary', 'great', 'heavy-duty', 'long-lasting', 'magnificent', 'only the finest', 'powerful', 'reinforced', 'sturdy', 'uncommon', 'valuable'];
  const nm5 = ['adamantium', 'aluminum', 'ash wood', 'bamboo', 'blackwood', 'carbon fiber', 'cedar wood', 'dragon bone', 'dwarven steel', 'fiberglass', 'firewood', 'hickory', 'ipe wood', 'iron', 'ironoak', 'ironwood', 'juniper wood', 'maple', 'mithril', 'obsidian', 'onyx', 'osage', 'poplar wood', 'red elm', 'red oak wood', 'rosewood', 'steel', 'walnut wood', 'willow', 'yew wood'];
  const nm6 = ['decent quality', 'deluxe', 'excellent quality', 'exceptional', 'favorable', 'fine', 'first-class', 'first-rate', 'good quality', 'great quality', 'prime', 'pristine', 'splendid', 'superior', 'valuable'];
  const nm6b = ['bear gut', 'bear hide', 'bear sinew', 'boar gut', 'boar hide', 'boar sinew', 'cotton', 'dacron', 'deer hide', 'deer sinew', 'dragon sinew', 'grass fiber', 'hemp', 'hide', 'horsehair', 'linen', 'polyester', 'silk', 'wolf hide', 'wolf sinew'];
  const nm7 = ['a fairly uncommon', 'an uncommon', 'a rare', 'a very rare', 'a common', 'a fairly rare', 'an extremely rare', 'a very uncommon', 'a fairly common', 'a very common'];
  const nm8 = ['a razorsharp edge', 'a seemingly glowing thread', 'a thin layer of leather', 'animal bones', 'animal scales', 'armored plating', 'bat-wing like extensions', 'bird feathers', 'blade-like attachments', 'carefully wrapped leather', 'crafted eyes', 'curved talon-like spikes', 'ebony details', 'flower petals', 'gilded details', 'golden rings', 'intricate carve work', 'intricate steel designs', 'ivory details', 'large animal horns', 'large wood carvings', 'magical runes', 'many small spikes', 'masterful paintworks', 'ornate golden details', 'pieces of obsidian', 'rows of gems', 'rows of large teeth', 'rows of small teeth', 'rune-like symbols', 'seemingly glowing runes', 'several large spikes', 'several long spikes', 'silken ribbons', 'small animal horns', 'small sigils', 'tribal paintings', 'wing-like constructions', 'wrapped silk ribbons', 'wrapped vines'];
  const nm9 = ['curves', 'slight curves', 'rounded curves', 'long points', 'points', 'narrow points'];
  const nm10 = ['shaped like snake heads', 'shaped like wings', 'shaped like dragon heads', 'shaped like talons', 'shaped like tusks', 'shaped like blades', 'shaped like axe heads', 'shaped like scythes', 'shaped like branches', 'shaped like delicate ribbons', 'ornamented with small skulls', 'ornamented with thin glowing ribbons', 'ornamented with feathers', 'ornamented with crafted wings', 'ornamented with spikes', 'ornamented with sharp blades', 'ornamented with various gems', 'ornamented with teeth', 'ornamented with flowers', 'ornamented with gilded details', 'ornamented with arrow heads', 'ornamented with crafted talons', 'ornamented with tusks', 'ornamented with wrapped leather', 'ornamented with axe heads', 'ornamented with long spikes', 'ornamented with dragon bone', 'ornamented with magic runes', 'ornamented with animal scales', 'ornamented with gilded details', 'ornamented with large barbs', 'ornamented with curved claws', 'ornamented with intricate carvings', 'ornamented with carved decorations', 'ornamented with crafted leaves', 'ornamented with delicate decorations', 'ornamented with sharp edges', 'ornamented with small sigils', 'ornamented with spear heads', 'ornamented with obsidian tips'];
  const nm11 = ['cloth', 'coarse hide', 'dark leather', 'ebon', 'fur', 'hide', 'ivory', 'leaves', 'light leather', 'linen', 'obsidian', 'rare hide', 'rare leather', 'rare silk', 'reptilian skin', 'soft hide', 'soft silk', 'thick leather'];
  const nm12 = ['carved woodworks', 'feathers', 'gilded decorations', 'gilded linings', 'glowing threads', 'intricate thread work', 'leaves', 'magic runes', 'ominous carvings', 'painted decorations', 'rune-like symbols', 'sigil decorations', 'small gems', 'symbolic writing', 'tribal paintings'];
  const nm13 = ['a skilled archer', 'any archer', 'a master archer', 'an expert archer', 'anybody', 'a trained archer', 'a novice archer'];
  let nm14 = Math.floor(Math.random() * 200) + 1;
  let nm15 = 'handle';
  const nm16 = ['broad', 'bulky', 'large', 'long', 'modest', 'narrow', 'sizable', 'small', 'wide'];
  const nm17 = ['a hollowed out tree trunk', 'coarse hide', 'common fur and hide', 'common hide', 'dark leather', 'hollowed out bamboo', 'light leather', 'rare fur and hide', 'rare hide', 'rare leather', 'reptilian skin', 'soft hide', 'thick leather', 'woven fabric', 'woven leaves', 'woven natural fibres', 'woven vines'];
  const nm18 = ['back', 'belt'];
  const nm19 = ['a furry animal tail', 'a seemingly glowing thread', 'animal bones', 'animal horns', 'animal scales', 'armored plating', 'bird feathers', 'carefully wrapped leather', 'crafted eyes', 'curved talon-like spikes', 'ebony details', 'feathers', 'flower petals', 'gilded decorations', 'gilded details', 'gilded linings', 'glowing threads', 'golden rings', 'intricate thread work', 'ivory animal parts', 'ivory details', 'leaves', 'magic runes', 'magical runes', 'many small spikes', 'masterful paintworks', 'ominous symbols', 'ornate golden details', 'painted decorations', 'painted on eyes', 'patterns of fabric', 'pieces of obsidian', 'rows and rows of different arrow heads', 'rows of gems', 'rows of large teeth', 'rows of small teeth', 'rune-like symbols', 'seemingly glowing runes', 'seemingly growing vines', 'several small furry animal tails', 'sigil decorations', 'silken ribbons', 'small animal horns', 'small antlers', 'small gems', 'small sigils', 'symbolic writing', 'tribal paintings', 'wrapped silk ribbons', 'wrapped vines'];
  const nm20 = ['seems to mean a lot to the archer', 'don\'t seem to have a particular meaning', 'likely have a significant meaning to the archer', 'may be purely decorational or might have a meaning', 'may be related to previous victories', 'could very well be done in a significant way for the archer', 'are probably just a means of showing off', 'likely are meant purely to make the archer stand out', 'at least make it look more special than normal quivers', 'don\'t seem to have any function other than decoration', 'probably costed a fair bit of money', 'may have been added by the archer on a lazy day', 'must be there for more than just decoration', 'may be of greater significance to the archer than to others', 'although seemingly random does have some reason behind it'];
  const rnd2 = Math.floor(Math.random() * nm2.length);
  if (rnd2 > 7) {
    nm14 -= 100;
    nm15 = 'stock';
  }
  const rnd6b = Math.floor(Math.random() * nm6b.length);
  const name = `This ${sample(nm1)} ${sample(nm2)} has been ${sample(nm3)} constructed of ${sample(nm4)} ${sample(nm5)}. `;
  const name2 = `Its string is made from ${sample(nm6)} ${nm6b[rnd6b]}, it's ${sample(nm7)} material around these parts of the world.`;
  const name3 = `The limbs have been decorated with ${sample(nm8)} and end in ${sample(nm9)} ${sample(nm10)}. `;
  const name4 = `The ${nm15} is wrapped in ${sample(nm11)} and decorated with ${sample(nm12)}.`;
  const name6 = `The ${sample(nm16)} quiver is made from ${sample(nm17)} and is supposed to be worn around the archer's ${sample(nm18)}. The outer side has been decorated with ${sample(nm19)}, which ${sample(nm20)}.`;
  const name5 = `In the hands of ${sample(nm13)} this bow is capable of firing arrows up to ${nm14} meters while still retaining lethal power.`;
  let result = '';
  result += name;
  result += name2;
  result += '\n';
  result += '\n';
  result += name3;
  result += name4;
  result += '\n';
  result += '\n';
  result += name6;
  result += '\n';
  result += '\n';
  result += name5;
  return result;
}
