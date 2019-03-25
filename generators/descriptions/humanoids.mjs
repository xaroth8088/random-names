export default function humanoids() {
  let name;
  let name2;
  let name3;
  let name4;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm27 = ['short fur', 'coarse skin', 'smooth skin', 'soft skin',
    'delicate skin', 'coarse fur', 'thick fur', 'coarse skin', 'smooth skin',
    'soft skin', 'delicate skin', 'small scales', 'thick skin', 'thick scales',
  ];
  const nm28 = ['broader than', 'narrower than', 'about the same width as'];
  const nm29 = ['', '', '', '', '', '', '', '', '', '', '', '',
    ', from which a long tail sways back and forth',
    ', from which a short tail sways back and forth',
    ', from which a broad tail sways back and forth',
    ', from which a thin tail sways back and forth',
    ', from which a small tail sways back and forth',
    ', from which a large tail sways back and forth',
    ', from which a narrow tail sways back and forth'];
  const nm57 = ['short fur', 'coarse skin', 'smooth skin', 'soft skin',
    'delicate skin', 'coarse fur', 'thick fur', 'coarse skin', 'smooth skin',
    'soft skin', 'delicate skin', 'small scales', 'thick skin',
    'thick scales', 'slime', 'slimy scales', 'large scales',
    'rock-like scales', 'fluffy fur', 'nasty skin', 'wood-like skin',
    'small feathers', 'large feathers', 'feathers', 'oily skin',
    'armor-like scales', 'large armor-like scales'];
  const nm59 = ['', '', '', '', '', '', '', '', '', '', '', '',
    ', from which a long tail sways back and forth',
    ', from which a short tail sways back and forth',
    ', from which a broad tail sways back and forth',
    ', from which a thin tail sways back and forth',
    ', from which a small tail sways back and forth',
    ', from which a large tail sways back and forth',
    ', from which a narrow tail sways back and forth',
    ', from which a massive tail sways back and forth',
    ', from which a bony tail sways back and forth',
    ', from which a spiked tail sways back and forth',
    ', from which a tentacle-like tail grows',
    ', from which a coarse tail sways back and forth',
    ', from which a split tail sways back and forth',
    ', from which a forked tail sways back and forth',
    ', from which a bladed tail sways back and forth',
    ', from which a fanned tail sways back and forth'];
  if (type === 1) {
    const rnd57 = Math.floor(Math.random() * nm57.length);
    var rnd28 = Math.floor(Math.random() * nm28.length);
    const rnd59 = Math.floor(Math.random() * nm59.length);
    var name5 = `Its body is covered in ${nm57[rnd57]} and its shoulders are ${nm28[rnd28]} its pelvis${nm59[rnd59]}.`;
  } else {
    const rnd27 = Math.floor(Math.random() * nm27.length);
    var rnd28 = Math.floor(Math.random() * nm28.length);
    const rnd29 = Math.floor(Math.random() * nm29.length);
    var name5 = `Its body is covered in ${nm27[rnd27]} and its shoulders are ${nm28[rnd28]} its pelvis${nm29[rnd29]}.`;
  }
  let result = '';
  result += name;
  result += '\n';
  result += name2;
  result += '\n';
  result += '\n';
  result += name3;
  result += '\n';
  result += name4;
  result += '\n';
  result += '\n';
  result += name5;
  return result;
}
