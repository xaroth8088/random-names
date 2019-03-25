export default function medievalClothings() {
  let name;
  let name2;
  let name3;
  let rnd1;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['delicate', 'elegant', 'fancy', 'graceful', 'luxurious',
    'relatively simple', 'majestic', 'modest', 'noble', 'ornate',
    'rather simple', 'refined', 'stylish', 'traditional'];
  const nm19 = ['long', 'very long', 'fairly long', 'short', 'very short',
    'fairly short'];
  if (type === 1) {
    const rnd = Math.floor(Math.random() * nm1.length);
    let rnd1 = Math.floor(Math.random() * nm1.length);
    while (rnd === rnd1) {
      rnd1 = Math.floor(Math.random() * nm1.length);
    }
  } else {
    const rnd19 = Math.floor(Math.random() * nm19.length);
    if (rnd19 > 2) {}
  }
  let result = '';
  result += name;
  result += '\n';
  result += '\n';
  result += name2;
  result += '\n';
  result += '\n';
  result += name3;
  return result;
}
