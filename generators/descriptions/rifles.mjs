export default function rifles() {
  const nm1 = ['a classic', 'a beauty', 'excellent', 'fear inducing', 'intimidating', 'near perfect', 'amazing', 'terrifying', 'a new release', 'a prototype', 'an odd one', 'a new model', 'a one of a kind', 'a new design', 'different from most', 'unique'];
  const nm1b = ', but ';
  const nm2 = ['admired by many', 'commissioned for many around the world', 'desired across the globe', 'famous around the world', 'in high demand', 'infamous around the world', 'made a name for itself', 'noted by many across the world', 'praised by many', 'prominent across the globe', 'purchased and sold by many', 'sold to people across the globe', 'well-known across the world', 'world renowned'];
  const nm3 = ['celebrated for its consistent aim and accuracy', 'celebrated for its precision and reliability', 'known as a low cost, high value weapon', 'known for its deadly accuracy', 'known for its versatility and adaptability', 'praised as bang for your buck, due to its low manufacturing cost', 'praised for its deadly precision', 'praised for its reliability in almost any situation', 'praised for its stability, reliability and versatility', 'prominent due to its cheap cost and good reliability'];
  const nm4 = ['overall length', 'standard length', 'length', 'typical length'];
  const nm5 = Math.floor((Math.random() * 500) + 600);
  const nm6 = Math.floor((Math.random() * 255) + 295);
  const nm7 = ['roughly around', 'about', 'roughly', 'around', 'approximately'];
  const nm8 = (Math.floor((Math.random() * 27) + 27)) / 10;
  const nm9 = ['5.45x39', '5.56x45', '5.8x42', '6.5x39', '6.8x43', '7.62x33', '7.62x35', '7.62x39', '7.62x45', '7.62x51', '7.92x33'];
  const nm10 = ['a few other calibers have been produced as well', 'all other standard calibers are available as well', 'it can come in a wide variety of different calibers', 'many other calibers are produced as well', 'most other calibers are available', 'one other caliber is available', 'other calibers are available', 'other calibers are available, although harder to come by', 'other calibers are currently in production', 'other calibers have yet to be produced'];
  const nm11 = ['an upper and lower receiver for easier maintenance', 'an upper and lower receiver to allow for easier customization', 'an upper and lower receiver to make potential repairs easier and low cost', 'its receiver located in front of the pistol grip to increase customizability', 'its receiver located in front of the pistol grip which helped increase the barrel length', 'its receiver located in front of the pistol grip, allowing for a more ergonomic design', 'its receiver located behind the pistol grip for a more compact design', 'its receiver located behind the pistol grip to improve maneuverability', 'its receiver located behind the pistol grip to save on weight'];
  const nm12 = ['wood', 'plastic', 'metal'];
  const nm13 = ['wood', 'plastic', 'metal', 'premium wood', 'ivory', 'pearl', 'engraved wood', 'exotic wood', 'horn'];
  const nm14 = ['your wishes', 'your desires', 'your purpose', 'your goals', 'your needs'];
  const nm15 = ['walnut', 'maple', 'myrtle wood', 'birch', 'plastic', 'metal', 'laminated wood'];
  const nm16 = ['other materials are available', 'other stocks will soon go in production', 'a few other stock materials are available', 'other stock materials are unfortunately not available yet', 'stocks made from a different material have to be custom made', 'most other stock materials are widely available', 'some other stock materials can be acquired with some effort', 'other materials, including luxury materials, are available as well', 'other materials have yet to be made available', 'other materials aren\'t available yet and may never be'];
  const nm17 = ['folding stock', 'extendable stock', 'detachable stock', 'shoulder stock', 'wooden stock', 'plastic stock', 'straight grip stock', 'full grip stock', 'semi-grip stock'];
  const nm19 = ['very common as well', 'the next most common stock available', 'high up on the list of demand', 'often preferred instead', 'used more often', 'just as common and popular', 'second in line, although not as common', 'very popular as well, despite being less common', 'slowly becoming the new standard', 'a close second in terms of popularity'];
  const nm20 = ['drum', 'detachable box', 'horizontal box', 'casket', 'rotary', 'spool', 'STANAG', 'hopper', 'helical', 'saddle-drum', 'semi-curved'];
  const nm21 = ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100'];
  const nm22 = ['other magazine are available', 'plenty of other magazine are available', 'a few other magazines are available as well', 'this is generally the only available magazine', 'other sizes are available', 'the magazine comes in various sizes', 'while this is the only magazine type, it does come in other sizes', 'other magazines types and magazine sizes are available', 'two more sizes and one other magazine type is available', 'customization for other magazine types and sizes is possible'];
  const nm23 = ['a push button', 'a paddle', 'a lever', 'both a button and lever'];
  const nm24 = ['automatic', 'semi-auto', '2-round burst', '3-round burst'];
  const nm25 = ['secret forces', 'military police', 'military', 'freedom fighters', 'rebels', 'revolutionists', 'separatists', 'army', 'special forces', 'marines', 'armed forces', 'secret service'];
  const nm26 = ['winning a war', 'winning a civil war', 'preventing more crime', 'preventing war through a show of power', 'keeping the peace', 'increasing security', 'fighting crime on a bigger scale', 'upgrading the existing inventory', 'updating the existing inventory', 'preparing for a likely war', 'gaining the upper hand in a guerrilla war', 'providing more versatility in terms of weapon choice', 'increasing the amount of weapons available', 'fighting new threats', 'fighting terrorism more efficiently'];
  const nm27 = ['Japanese man named H. Yoshimitsu', 'German man named G. Klauss', 'British man named E. Fawkes', 'American man named G. Jones', 'Canadian man names L. Coats', 'South-African man named A. Botha', 'Chinese man named B. Chan', 'Israeli man named D. Mizrahi', 'Russian man named T. Yakovich', 'Korean man named Sung S. W', 'Indian man named C. Mahal', 'Iranian man named B. Javan', 'Turkish man named T. Almaz', 'Italian man named W. Brocato', 'French man named C. Bouvard', 'Spanish man named D. Cruz'];
  const nm28 = ['There are a few other variants of this weapon', 'Many other variants of this weapon are available', 'There are three other variants of this weapon', 'This weapon has quite a few other variants', 'Several other variants of this weapon are in production as well', 'Two other variants of this weapon are currently in production', 'Quite a few other variants of this weapon are available, with more nearing production', 'A few variants of this weapon will soon be in production'];
  const nm29 = ['including a civilian version', 'including a semi-auto civilian version', 'including two less powerful civilian versions', 'but there\'s no civilian version yet', 'but there are no plans for a civilian version', 'but a civilian version is most likely out of the question', 'but a civilian version is currently on hold', 'but the plans for a less powerful civilian version have been delayed'];
  const nm30 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const nm31 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm32 = ['Desert Viper', 'Black Mamba', 'Peacekeeper', 'The Ambassador', 'Oathkeeper', 'Due Diligence', 'Boomer', 'Bulldog', 'Valkyrie', 'Vengeance', 'Rattlesnake', 'Thunder', 'Big Daddy', 'The Punisher', 'The Judge'];
  const rnd1 = Math.floor(Math.random() * nm1.length);
  const rnd2 = Math.floor(Math.random() * nm2.length);
  const rnd3 = Math.floor(Math.random() * nm3.length);
  const rnd4 = Math.floor(Math.random() * nm4.length);
  const rnd7 = Math.floor(Math.random() * nm7.length);
  const rnd9 = Math.floor(Math.random() * nm9.length);
  const rnd10 = Math.floor(Math.random() * nm10.length);
  const rnd11 = Math.floor(Math.random() * nm11.length);
  const rnd12 = Math.floor(Math.random() * nm12.length);
  let rnd13a = Math.floor(Math.random() * nm13.length);
  while (rnd13a === rnd12) {
    rnd13a = Math.floor(Math.random() * nm13.length);
  }
  let rnd13b = Math.floor(Math.random() * nm13.length);
  while (rnd13b === rnd12 || rnd13b === rnd13a) {
    rnd13b = Math.floor(Math.random() * nm13.length);
  }
  const rnd14 = Math.floor(Math.random() * nm14.length);
  const rnd15 = Math.floor(Math.random() * nm15.length);
  const rnd16 = Math.floor(Math.random() * nm16.length);
  const rnd17 = Math.floor(Math.random() * nm17.length);
  let rnd18 = Math.floor(Math.random() * nm17.length);
  while (rnd18 === rnd17) {
    rnd18 = Math.floor(Math.random() * nm17.length);
  }
  const rnd19 = Math.floor(Math.random() * nm19.length);
  const rnd20 = Math.floor(Math.random() * nm20.length);
  let rnd21 = Math.floor(Math.random() * nm21.length);
  if (rnd20 === 0) {
    while (rnd21 < 5) {
      rnd21 = Math.floor(Math.random() * nm21.length);
    }
  } else {
    while (rnd21 > 4) {
      rnd21 = Math.floor(Math.random() * nm21.length);
    }
  }
  const rnd22 = Math.floor(Math.random() * nm22.length);
  const rnd23 = Math.floor(Math.random() * nm23.length);
  let rnd24a = Math.floor(Math.random() * nm24.length);
  let rnd24b = Math.floor(Math.random() * nm24.length);
  while (rnd24a === rnd24b) {
    rnd24b = Math.floor(Math.random() * nm24.length);
  }
  if (rnd24b === 2 || rnd24b === 3) {
    while (rnd24a > 1) {
      rnd24a = Math.floor(Math.random() * nm24.length);
    }
  }
  const rnd25 = Math.floor(Math.random() * nm25.length);
  const rnd26 = Math.floor(Math.random() * nm26.length);
  const rnd27 = Math.floor(Math.random() * nm27.length);
  const rnd28 = Math.floor(Math.random() * nm28.length);
  const rnd29 = Math.floor(Math.random() * nm29.length);
  const rnd30a = Math.floor(Math.random() * nm30.length);
  const rnd30b = Math.floor(Math.random() * nm30.length);
  const rnd31a = Math.floor(Math.random() * nm31.length);
  const rnd31b = Math.floor(Math.random() * nm31.length);
  const rnd31c = Math.floor(Math.random() * nm31.length);
  const rnd31d = Math.floor(Math.random() * nm31.length);
  const rnd32 = Math.floor(Math.random() * nm32.length);
  const name = `This weapon is ${nm1[rnd1]}${nm1b}${nm2[rnd2]} and ${nm3[rnd3]}.`;
  const name2 = `The ${nm4[rnd4]} of the weapon is ${nm5}mm, with a ${nm6}mm barrel and the weapon weighs ${nm7[rnd7]} ${nm8}kg.`;
  const name3 = `It uses ${nm9[rnd9]}mm rounds, but ${nm10[rnd10]}.`;
  const name4 = `The weapon has ${nm11[rnd11]}. The pistol grip is made out of ${nm12[rnd12]}, but can also be made out of ${nm13[rnd13a]} and ${nm13[rnd13b]} depending on ${nm14[rnd14]}.`;
  const name5 = `The stock is made out of ${nm15[rnd15]}, but ${nm16[rnd16]}. The standard stock is a ${nm17[rnd17]}, but the ${nm17[rnd18]} is ${nm19[rnd19]}.`;
  const name6 = `The standard issue magazine is a ${nm20[rnd20]} which carries ${nm21[rnd21]} rounds, but ${nm22[rnd22]}. It has ${nm23[rnd23]} mechanism to release the magazine.`;
  const name7 = `The selective fire modes are safe mode, ${nm24[rnd24a]} and ${nm24[rnd24b]}.`;
  const name8 = `This weapon was designed for the ${nm25[rnd25]} with the purpose of ${nm26[rnd26]}. It was designed by a ${nm27[rnd27]}.`;
  const name9 = `${nm28[rnd28]}, ${nm29[rnd29]}.`;
  const name10 = `The weapon is called the ${nm30[rnd30a]}${nm31[rnd31a]}${nm31[rnd31b]}-${nm30[rnd30b]}${nm31[rnd31c]}${nm31[rnd31d]}, but it usally goes by its nickname '${nm32[rnd32]}'.`;
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
  result += '\n';
  result += name6;
  result += '\n';
  result += name7;
  result += '\n';
  result += '\n';
  result += name8;
  result += '\n';
  result += name9;
  result += '\n';
  result += name10;
  return result;
}
