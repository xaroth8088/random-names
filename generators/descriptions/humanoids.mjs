export default function humanoids() {
  let rnd1;
  let rnd2;
  let rnd3;
  let rnd4;
  let rnd5;
  let rnd6;
  let rnd7;
  let rnd8;
  let rnd9;
  let rnd10;
  let rnd11;
  let rnd12;
  let rnd13;
  let rnd14;
  let rnd15;
  let rnd16;
  let rnd17;
  let rnd18;
  let rnd19;
  let rnd20;
  let rnd21;
  let rnd22;
  let rnd23;
  let rnd24;
  let rnd25;
  let rnd26;
  let rnd27;
  let rnd28;
  let rnd29;
  let rnd34;
  let rnd35;
  let rnd36;
  let rnd37;
  let rnd38;
  let rnd39;
  let rnd40;
  let rnd41;
  let rnd42;
  let rnd43;
  let rnd44;
  let rnd45;
  let rnd49;
  let rnd50;
  let rnd51;
  let rnd52;
  let rnd53;
  let rnd54;
  let rnd55;
  let rnd57;
  let rnd59;
  let name5;
  let name;
  let name2;
  let name3;
  let name4;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Two', 'Two', 'Two', 'Three', 'Four', 'Two'];
  const nm2 = ['beady', 'broad', 'bug-eyed', 'clear', 'close-set', 'dead',
    'doe-eyed', 'enormous', 'giant', 'glassy', 'glowing', 'heavy', 'hollow',
    'hooded', 'large', 'narrow', 'shiny', 'shuttered', 'small', 'sunken',
    'thin', 'tiny', 'wide'];
  const nm3 = ['observe', 'study', 'watch', 'inspect', 'examine', 'monitor',
    'survey', 'look at', 'view'];
  const nm4 = ['narrow', 'wide', 'broad', 'large', 'thin', 'deep', 'huge',
    'bony'];
  const nm5 = ['big', 'broad', 'crooked', 'flat', 'gentle', 'large', 'narrow',
    'pig-like', 'pointy', 'round', 'short', 'small', 'tiny', 'wide'];
  const nm6 = ['narrow', 'large', 'wide', 'long', 'shallow', 'deep', 'average',
    'normal', 'ordinary', 'small'];
  const nm7 = ['sly', 'shy', 'wide', 'happy', 'gentle', 'creepy', 'brittle',
    'gummy', 'lazy', 'sardonic', 'thin'];
  const nm8 = ['sharp', 'long', 'pointy', 'short', 'small', 'stubby', 'dull',
    'thin', 'crooked', 'large', 'creepy', 'eerie'];
  const nm9 = ['flat', 'broad', 'thin', 'long', 'wide', 'small', 'large'];
  const nm10 = ['Short', 'Long', 'Narrow', 'Wide', 'Broad', 'Large', 'Small',
    'Thin'];
  const nm11 = ['pointy', 'round', 'bent', 'squared'];
  const nm12 = ['long', 'short', 'average', 'small', 'large'];
  const nm13 = ['narrow', 'wide', 'thin', 'broad', 'rounded', 'squared',
    'pointy'];
  const nm14 = ['thick', 'curly', 'thin', 'long', 'short', 'wavy', 'coarse',
    'soft', 'very long', 'silken'];
  const nm15 = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    ' and has two small horns protruding from the top',
    ' and has two small horns protruding from the sides',
    ' and has two curved horns protruding from the top',
    ' and has two curved horns protruding from the sides',
    ' and has two stubby horns protruding from the top',
    ' and has two stubby horns protruding from the sides',
    ' and has two thin horns protruding from the top',
    ' and has two thin horns protruding from the sides',
    ' and has two broad horns protruding from the top',
    ' and has two broad horns protruding from the sides'];
  const nm16 = ['short', 'long', 'tall', 'small', 'low', 'average'];
  const nm17 = ['muscular', 'broad', 'thin', 'skinny', 'lean', 'fat', 'slender',
    'bulky', 'chunky', 'hefty', 'athletic', 'stout', 'brawny'];
  const nm18 = ['stands straight', 'is slightly hunched over',
    'is hunched over', 'stands straight'];
  const nm19 = ['long', 'thick', 'short', 'broad', 'average', 'thin', 'lean'];
  const nm20 = ['dangle', 'hang', 'rest'];
  const nm21 = ['small', 'gentle', 'graceful', 'large', 'thin', 'narrow',
    'wide', 'broad'];
  const nm22 = ['long', 'thick', 'thin', 'short', 'stubby', 'small', 'curvy'];
  const nm23 = ['normal', 'long', 'sharp', 'claw-like', 'dull', 'thin',
    'pointy', 'broad'];
  const nm24 = ['long', 'muscular', 'broad', 'short', 'small', 'tall', 'wide',
    'lean', 'thin', 'skinny'];
  const nm25 = ['stand straight', 'are slightly bent', 'are bent',
    'stand straight'];
  const nm26 = ['large', 'broad', 'small', 'short', 'wide', 'big', 'hairy',
    'flat'];
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
  const nm34 = ['narrow', 'wide', 'broad', 'large', 'thin', 'deep', 'huge',
    'bony', 'scaly', 'eerie', 'slimy', 'bulging', 'enormous', 'giant', 'tiny'];
  const nm35 = ['big', 'broad', 'crooked', 'flat', 'gentle', 'large', 'narrow',
    'pig-like', 'pointy', 'round', 'short', 'small', 'tiny', 'wide',
    'barely existing', 'snake-like', 'reptilian', 'bony', 'spiky', 'hollow',
    'bent', 'sharp', 'hooked', 'thin', 'narrow'];
  const nm36 = ['narrow', 'large', 'wide', 'long', 'shallow', 'deep', 'normal',
    'small', 'huge', 'massive', 'tiny', 'giant', 'overbite', 'underbite',
    'enormous'];
  const nm37 = ['sly', 'shy', 'wide', 'happy', 'gentle', 'creepy', 'brittle',
    'gummy', 'lazy', 'sardonic', 'thin'];
  const nm38 = ['rows upon rows of small teeth', 'rows upon rows of teeth',
    'two large fangs', 'two small fangs', 'two large canines',
    'two small canines', 'rows of eerie looking teeth',
    'several rows of sharp teeth', 'monstrous teeth', 'curved fangs',
    'rows of crooked teeth', 'rows of dull teeth',
    'only a few teeth here and there', 'rows of huge teeth',
    'several huge dull teeth', 'several huge sharp teeth',
    'several large broken teeth', 'rows of broken teeth',
    'rows of shark-like teeth'];
  const nm39 = ['flat', 'broad', 'thin', 'long', 'wide', 'small', 'large',
    'very long', 'forked', 'huge', 'coarse', 'slimy'];
  const nm40 = ['Short', 'Long', 'Narrow', 'Wide', 'Broad', 'Large', 'Small',
    'Thin', 'Huge', 'Enormous', 'Tiny', 'Massive'];
  const nm41 = ['pointy', 'round', 'bent', 'squared', 'fan-like', 'spiky',
    'bony', 'warped', 'hanging', 'flappy', 'stubby', 'wrinkled', 'jagged'];
  const nm42 = ['long', 'short', 'average', 'small', 'large', 'huge', 'tiny',
    'massive'];
  const nm43 = ['narrow', 'wide', 'thin', 'broad', 'rounded', 'squared',
    'pointy', 'oval', 'angular', 'wrinkled', 'lean', 'bony', 'triangular'];
  const nm44 = ['long hairs', 'coarse hairs', 'short hairs',
    'rows of small horns', 'rows of small spikes', 'small tentacles',
    'thin hair-like tentacles', 'bony ridges', 'bony spikes', 'web-like fans',
    'tiny hairs', 'tattoo-like markings', 'scar-like carvings', 'soft hair',
    'scaly ridges'];
  const nm45 = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    ' and has two small horns protruding from the top',
    ' and has two small horns protruding from the sides',
    ' and has two curved horns protruding from the top',
    ' and has two curved horns protruding from the sides',
    ' and has two stubby horns protruding from the top',
    ' and has two stubby horns protruding from the sides',
    ' and has two thin horns protruding from the top',
    ' and has two thin horns protruding from the sides',
    ' and has two broad horns protruding from the top',
    ' and has two broad horns protruding from the sides',
    ' and has two large tentacles protruding from the top',
    ' and has two large tentacles protruding from the sides',
    ' and has two large antlers protruding from the top',
    ' and has two large antlers protruding from the sides',
    ' and has two bony spikes protruding from the top',
    ' and has two bony spikes protruding from the sides',
    ' and has two huge horns protruding from the top',
    ' and has two huge horns protruding from the sides',
    ' and has two small tentacles protruding from the top',
    ' and has two small tentacles protruding from the sides',
    ' and has two small antlers protruding from the top',
    ' and has two small antlers protruding from the sides',
    ' and has several bony spikes protruding from the top',
    ' and has several bony spikes protruding from the sides',
    ' and has several large tentacles protruding from the top',
    ' and has several large tentacles protruding from the sides'];
  const nm49 = ['long', 'thick', 'short', 'broad', 'average', 'thin', 'lean'];
  const nm50 = ['arms', 'tentacle-like arms', 'bony arms',
    'almost branch-like arms', 'stone-like arms', 'fleshy arms',
    'warping arms', 'crooked arms'];
  const nm51 = ['small', 'large', 'thin', 'narrow', 'wide', 'broad', 'bony',
    'webbed', 'tentacle-like', 'claw-like', 'bent', 'crooked', 'massive',
    'huge', 'tiny', 'stone-like'];
  const nm52 = ['long', 'thick', 'thin', 'short', 'stubby', 'small', 'curvy',
    'bent', 'very long', 'sharp nailed', 'long nailed', 'claw-like'];
  const nm53 = ['6', '8', '10', '12'];
  const nm54 = ['long', 'muscular', 'broad', 'short', 'small', 'wide', 'lean',
    'thin', 'skinny', 'crooked'];
  const nm55 = ['feet', 'hooves', 'feet', 'paws'];
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
    rnd1 = Math.floor(Math.random() * nm1.length);
    rnd2 = Math.floor(Math.random() * nm2.length);
    rnd3 = Math.floor(Math.random() * nm3.length);
    rnd34 = Math.floor(Math.random() * nm34.length);
    rnd35 = Math.floor(Math.random() * nm35.length);
    rnd36 = Math.floor(Math.random() * nm36.length);
    rnd37 = Math.floor(Math.random() * nm37.length);
    rnd38 = Math.floor(Math.random() * nm38.length);
    rnd39 = Math.floor(Math.random() * nm39.length);
    rnd40 = Math.floor(Math.random() * nm40.length);
    rnd41 = Math.floor(Math.random() * nm41.length);
    rnd42 = Math.floor(Math.random() * nm42.length);
    rnd43 = Math.floor(Math.random() * nm43.length);
    rnd44 = Math.floor(Math.random() * nm44.length);
    rnd45 = Math.floor(Math.random() * nm45.length);
    rnd16 = Math.floor(Math.random() * nm16.length);
    rnd17 = Math.floor(Math.random() * nm17.length);
    rnd18 = Math.floor(Math.random() * nm18.length);
    rnd49 = Math.floor(Math.random() * nm49.length);
    rnd50 = Math.floor(Math.random() * nm50.length);
    rnd20 = Math.floor(Math.random() * nm20.length);
    rnd51 = Math.floor(Math.random() * nm51.length);
    rnd52 = Math.floor(Math.random() * nm52.length);
    rnd53 = Math.floor(Math.random() * nm53.length);
    rnd54 = Math.floor(Math.random() * nm54.length);
    rnd24 = Math.floor(Math.random() * nm24.length);
    rnd25 = Math.floor(Math.random() * nm25.length);
    rnd55 = Math.floor(Math.random() * nm55.length);
    rnd57 = Math.floor(Math.random() * nm57.length);
    rnd28 = Math.floor(Math.random() * nm28.length);
    rnd59 = Math.floor(Math.random() * nm59.length);
    name = `${nm1[rnd1]} ${nm2[rnd2]} eyes ${nm3[rnd3]} their surroundings from their ${nm34[rnd34]} sockets. A ${nm35[rnd35]} nose rests below, but it's the ${nm36[rnd36]} mouth below that takes all the attention. A ${nm37[rnd37]} smile reveals ${nm38[rnd38]} and a ${nm39[rnd39]} tongue.`;
    name2 = `${nm40[rnd40]} ${nm41[rnd41]} ears sit on each side of its ${nm42[rnd42]}, ${nm43[rnd43]} head, which itself is covered in ${nm44[rnd44]}${nm45[rnd45]}.`;
    name3 = `Its ${nm16[rnd16]} ${nm17[rnd17]} body ${nm18[rnd18]}. Two ${nm49[rnd49]} ${nm50[rnd50]} ${nm20[rnd20]} at its sides and end in ${nm51[rnd51]} hands with ${nm52[rnd52]} fingers, of which it has ${nm53[rnd53]} in total.`;
    name4 = `Its legs are ${nm24[rnd24]} and ${nm25[rnd25]}, each ending in ${nm54[rnd54]} ${nm55[rnd55]}.`;
    name5 = `Its body is covered in ${nm57[rnd57]} and its shoulders are ${nm28[rnd28]} its pelvis${nm59[rnd59]}.`;
  } else {
    rnd1 = Math.floor(Math.random() * nm1.length);
    rnd2 = Math.floor(Math.random() * nm2.length);
    rnd3 = Math.floor(Math.random() * nm3.length);
    rnd4 = Math.floor(Math.random() * nm4.length);
    rnd5 = Math.floor(Math.random() * nm5.length);
    rnd6 = Math.floor(Math.random() * nm6.length);
    rnd7 = Math.floor(Math.random() * nm7.length);
    rnd8 = Math.floor(Math.random() * nm8.length);
    rnd9 = Math.floor(Math.random() * nm9.length);
    rnd10 = Math.floor(Math.random() * nm10.length);
    rnd11 = Math.floor(Math.random() * nm11.length);
    rnd12 = Math.floor(Math.random() * nm12.length);
    rnd13 = Math.floor(Math.random() * nm13.length);
    rnd14 = Math.floor(Math.random() * nm14.length);
    rnd15 = Math.floor(Math.random() * nm15.length);
    rnd16 = Math.floor(Math.random() * nm16.length);
    rnd17 = Math.floor(Math.random() * nm17.length);
    rnd18 = Math.floor(Math.random() * nm18.length);
    rnd19 = Math.floor(Math.random() * nm19.length);
    rnd20 = Math.floor(Math.random() * nm20.length);
    rnd21 = Math.floor(Math.random() * nm21.length);
    rnd22 = Math.floor(Math.random() * nm22.length);
    rnd23 = Math.floor(Math.random() * nm23.length);
    rnd24 = Math.floor(Math.random() * nm24.length);
    rnd25 = Math.floor(Math.random() * nm25.length);
    rnd26 = Math.floor(Math.random() * nm26.length);
    rnd27 = Math.floor(Math.random() * nm27.length);
    rnd28 = Math.floor(Math.random() * nm28.length);
    rnd29 = Math.floor(Math.random() * nm29.length);
    name = `${nm1[rnd1]} ${nm2[rnd2]} eyes ${nm3[rnd3]} their surroundings from their ${nm4[rnd4]} sockets. A ${nm5[rnd5]} nose rests below, but it's the ${nm6[rnd6]} mouth below that takes all the attention. A ${nm7[rnd7]} smile reveals two ${nm8[rnd8]} canines and a ${nm9[rnd9]} tongue.`;
    name2 = `${nm10[rnd10]} ${nm11[rnd11]} ears sit on each side of its ${nm12[rnd12]}, ${nm13[rnd13]} head, which itself is covered in ${nm14[rnd14]}${nm15[rnd15]} hair.`;
    name3 = `Its ${nm16[rnd16]} ${nm17[rnd17]} body ${nm18[rnd18]}. Two ${nm19[rnd19]} arms ${nm20[rnd20]} at its sides and end in ${nm21[rnd21]} hands with ${nm22[rnd22]} fingers, each with ${nm23[rnd23]} nails.`;
    name4 = `Its legs are ${nm24[rnd24]} and ${nm25[rnd25]}, each ending in ${nm26[rnd26]} feet.`;
    name5 = `Its body is covered in ${nm27[rnd27]} and its shoulders are ${nm28[rnd28]} its pelvis${nm29[rnd29]}.`;
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
