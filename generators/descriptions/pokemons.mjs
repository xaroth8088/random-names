export default function pokemons() {
  let i;
  let rnd3;
  let rnTrait;
  let rndmz;
  let rndm;
  let description;
  let place;
  let attk1;
  let atkOne;
  let attk2;
  let atkTwo;
  let rndPlace;
  const flyArms = [''];
  const flySnout = [''];
  const groundWings = [''];
  const rockWings = [''];
  const bugSkin = ['bioluminescent', 'phosphorescent', 'fluorescent', 'camouflaged', 'dark', 'fluff covered', 'glowing', 'hair covered', 'light', 'patterned', 'thick armored', 'thorny', 'translucent'];
  const bugLegs = ['ridged', 'armored', 'thick, fluffy', 'hair covered', 'thin, long', 'thorn covered', 'camouflaged', 'small', 'powerful'];
  const bugWings = ['angular', 'bioluminescent', 'phosphorescent', 'fluorescent', 'petal-like', 'camouflaged', 'cloak-like', 'dark', 'double paired', 'giant', 'glowing', 'light', 'patterned', 'powerful', 'razor sharp', 'ribbon-like', 'small', 'translucent'];
  const bugMouth = ['tusked', 'seemingly invisible', 'giant', 'powerful', 'little', 'toothed', 'sharp toothed', 'pincer-like', 'seemingly smiling', 'seemingly frowning'];
  const bugArms = ['bladed', 'pincer-like', 'flexible', 'strong', 'stinger-like', 'claw-like', 'tiny', 'hidden'];
  const darkSkin = ['black', 'black and crimson', 'black and gray', 'black and white', 'blue and crimson', 'blue and purple', 'dark', 'dark blue', 'dark glowing', 'deep purple', 'gray', 'red and black', 'shadowy', 'white and blue'];
  const darkLegs = ['ridged', 'armored', 'thick', 'powerful', 'shaded', 'smoke-like', 'patterned', 'an extra pair of', 'gem encrusted'];
  const darkArms = ['ridged', 'folded', 'shielded', 'strong', 'enormous', 'elongated', 'bladed', 'barbed', 'muscled'];
  const darkWings = ['angular', 'smoke-like', 'cloak-like', 'dark', 'double paired', 'giant', 'glowing', 'patterned', 'powerful', 'razor sharp', 'translucent', 'ribbon-like', 'overgrown', 'barbed', 'reflective'];
  const darkMouth = ['tusked', 'seemingly invisible', 'giant', 'powerful', 'sharp toothed', 'seemingly smirking', 'seemingly frowning', 'distinct lack of a visible', 'cavernous', 'toothed'];
  const darkBeak = ['crescent', 'reinforced', 'razor sharp', 'crystal-like', 'thick obsidian', 'solid onyx', 'sharp, crimson', 'terrifying', 'mighty', 'enlarged', 'rugged'];
  const darkSnout = ['tusked', 'horned', 'pointed', 'giant', 'stubby', 'sharp toothed', 'seemingly smirking', 'seemingly frowning', 'fuming', 'abyssal', 'toothed'];
  const darkTail = ['a tail much like a whip', 'a tail that ends in a barbed tip', 'a pair of tails instead of one', 'several tails instead of one', 'a tail with the appearance of flowing smoke', 'a tail that ends in a sharp, blade-like curve', 'a tail that ends in a fan-like shape', 'a tail that seems to shimmer in light', 'an incredibly fluffy tail', 'a tail covered in armored plates', 'a tail that visibly holds the Pokemon\'s powers', 'a tail charged with dark energies', 'a tail that wraps itself around the body when in rest', 'a tail decorated by the Pokemon', 'a tail that pulses with energy during attacks', 'a tail with odd, dark pulsing symbols', 'a tail that seems to distort light behind and around the Pokemon'];
  const darkEars = ['horn-like', 'wing-like', 'pointy', 'flappy', 'flabby', 'huge', 'jagged', 'ribbon-like', 'fan-like', 'stubby', 'nimble', 'enormous'];
  const darkHorns = ['ridged', 'a crown of', 'a row of', 'blade-like', 'crystal', 'curved', 'glowing', 'obsidian', 'onyx', 'pulsing', 'scythe-like', 'sharp', 'thin', 'two sets of'];
  const dragonHorns = ['ridged', 'a crown of', 'a row of', 'antler-like', 'crystal', 'curved', 'fan-like', 'glowing', 'hammer-like', 'mohawk-like', 'pulsing', 'sharp', 'stubby', 'thin', 'two sets of'];
  const dragonEars = ['armored', 'bone-like', 'coiling', 'crystal', 'enormous', 'hammer-like', 'horn-like', 'no visible', 'pointy', 'round', 'smoldering', 'wing-like'];
  const dragonSkin = ['aerodynamic', 'armor plated', 'barbed', 'bioluminescent', 'phosphorescent', 'fluorescent', 'boulder-like', 'cloud-like', 'crystal-like', 'fiery looking', 'glowing', 'metal', 'scaled', 'smooth', 'soft', 'thick', 'translucent'];
  const dragonLegs = ['ridged', 'an extra pair of', 'armored', 'barbed', 'crystal-like', 'curved', 'enormous', 'massive', 'powerful', 'stubby', 'thick', 'two extra pairs of'];
  const dragonArms = ['ridged', 'folded', 'armored', 'barbed', 'bat-like', 'blade-like', 'clawed', 'fiery', 'jagged', 'stocky', 'strong', 'winged'];
  const dragonWings = ['cloud-like', 'rainbow', 'fiery', 'angelic', 'barbed', 'bioluminescent', 'phosphorescent', 'fluorescent', 'crystal', 'energy pulsing', 'enormous', 'fan-like', 'giant', 'glowing', 'humongous', 'jagged', 'ridged', 'translucent', 'two pairs of'];
  const dragonMouth = ['tusked', 'bearded', 'blade toothed', 'boulder-like', 'cavernous', 'crystal toothed', 'fiery', 'metal-like', 'powerful', 'seemingly ever angry', 'seemingly smiling', 'sharp toothed', 'small', 'smoldering'];
  const dragonTail = ['a barbed tail', 'a bladed tail', 'a cloud-like tail', 'a crystal adorned tail', 'a curling tail', 'a fan-like tail', 'a pair of tails', 'a rainbow tail', 'a segmented tail', 'a stubby tail', 'a tail ending in a hammer', 'a tail ending in double barbs', 'a tail like a whip', 'a thick tail', 'an armor plated tail', 'an incredibly long tail', 'an incredibly powerful tail', 'several tails'];
  const elecSkin = ['yellow', 'orange', 'black and yellow', 'blue and yellow', 'yellow and white', 'statically charged', 'electrifying', 'charged', 'electrically charged', 'magnetized', 'jagged', 'sharp', 'sharply jagged', 'barbed'];
  const elecLegs = ['ridged', 'agile', 'bolt-like', 'energy laden', 'energy pulsing', 'fast', 'magnetized', 'nimble', 'powerful', 'spiked', 'tiny'];
  const elecArms = ['ridged', 'folded', 'bolt-like', 'energy laden', 'energy pulsing', 'magnetized', 'swift', 'strong', 'small', 'electrifying', 'an extra pair of', 'orb-like'];
  const elecWings = ['angular', 'bolt-like', 'cloak-like', 'electrically laden', 'energized', 'jagged', 'layered', 'magnetic', 'pulsing', 'tiny', 'two pairs of'];
  const elecMouth = ['bearded', 'gigantic', 'jagged', 'sharp toothed', 'small', 'tiny', 'toothed', 'seemingly lack of a', 'seemingly invisible', 'hidden'];
  const elecBeak = ['crescent', 'bolt-like', 'bright yellow', 'glowing', 'jagged', 'powerful', 'pulsing', 'razor sharp'];
  const elecSnout = ['tusked', 'horned', 'jagged', 'pointed', 'seemingly frowning', 'seemingly smirking', 'sharp toothed', 'small', 'smiling', 'stubby', 'thick'];
  const elecTail = ['a coiling tail', 'a jagged tail', 'a jagged, fan-like tail', 'a lightning bolt tail', 'a magnetized tail', 'a pair of tails', 'a positively and a negatively charged tail', 'a sharp blade-like tail', 'a stubby orb-like tail', 'a tail ending in a charged orb', 'a tail ending in a magnet', 'a tail full of charged orbs', 'a tail laden with electric charges', 'a tail pulsing with electricity', 'several tails'];
  const elecEars = ['bolt-like', 'coiling', 'oscillating', 'electrically charged', 'big, round', 'tiny', 'orb-like', 'magnetized', 'blade-like', 'flappy', 'flabby', 'stubby', 'glowing'];
  const elecHorns = ['ridged', 'pulsing', 'magnetized', 'orb-like', 'coiled', 'bolt-like', 'sharp', 'jagged', 'curved', 'a row of', 'mohawk-like', 'stubby', 'two sets of'];
  const fairySkin = ['blushy', 'coral', 'fluffy', 'glistening', 'glossy', 'glowing', 'luminous', 'pink', 'rose', 'shiny', 'silken', 'soft', 'sparkling', 'velvety'];
  const fairyLegs = ['covered', 'feathery', 'fluffy', 'glowing', 'lean', 'shrouded', 'slender', 'slim', 'small', 'soft', 'stubby', 'tiny', 'wispy'];
  const fairyArms = ['cloak-like', 'elongated', 'fat', 'fluffy', 'folded', 'lean', 'ribbon-like', 'slim', 'small', 'smooth', 'stubby', 'tiny'];
  const fairyWings = ['angelic', 'bioluminescent', 'bow-like', 'cloud-like', 'enormous', 'fan-like', 'floating', 'fluffy', 'glowing', 'layered', 'ribbon-like', 'smooth', 'soft, feathery', 'tiny', 'two sets of'];
  const fairyBeak = ['blunt', 'broad', 'crescent', 'curved', 'glowing', 'huge', 'pointy', 'shining', 'smiling', 'sparkling'];
  const fairyMouth = ['bearded', 'blunt toothed', 'broad', 'cavernous', 'grinning', 'hidden', 'lack of a', 'shrouded', 'small', 'smiling', 'smirking', 'tiny', 'veiled'];
  const fairySnout = ['bearded', 'broad', 'fluffy', 'glossy', 'glowing', 'huge', 'pointy', 'rounded', 'shining', 'shrouded', 'small', 'sparkling', 'stubby', 'tiny', 'veiled'];
  const fairyTail = ['a bioluminescent tail', 'a decorated tail', 'a fan-like tail', 'a fluffy tail', 'a glowing tail', 'a long tail wrapped around its body', 'a long, floating tail', 'a long, forked tail', 'a ribbon-like tail', 'a short, stubby tail', 'a sparkling tail', 'several tails instead of one', 'two tails instead of one'];
  const fairyEars = ['bow-like', 'cloud-like', 'enormous', 'flabby', 'flappy', 'fluffy', 'hidden', 'huge', 'pointy', 'puffy', 'ribbon-like', 'short', 'stubby', 'veiled'];
  const fairyHorns = ['antenna-like', 'antler-like', 'coiling', 'crescent', 'curling', 'curving', 'decorated', 'looping', 'painted', 'pointy', 'short', 'smooth', 'stubby'];
  const fightSkin = ['armor-like', 'bruised', 'camouflaged', 'coarse', 'decorated', 'deflective', 'nimble', 'patterned', 'smooth', 'stone-like', 'strengthened', 'thick'];
  const fightLegs = ['ridged', 'agile', 'armored', 'broad', 'clothed', 'decorated', 'dexterous', 'muscled', 'nimble', 'patterned', 'powerful', 'strengthened', 'two sets of'];
  const fightArms = ['ridged', 'folded', 'armored', 'barbed', 'blade-like', 'composed', 'energetic', 'hammer-like', 'relaxed', 'robust', 'slim', 'strong', 'toned', 'two sets of'];
  const fightWings = ['angular', 'angelic', 'armored', 'blade-like', 'broad', 'cloak-like', 'fan-like', 'honed', 'jagged', 'ribbon-like', 'robe-like', 'sharp', 'strong'];
  const fightMouth = ['tusked', 'foaming', 'focused looking', 'frowning', 'giant', 'lack of a', 'raging', 'seemingly angry', 'seemingly smirking', 'serious looking', 'smiling', 'content looking', 'tranquil looking', 'seemingly arrogantly smiling'];
  const fightBeak = ['crescent', 'reinforced', 'barbed', 'blade-like', 'broad', 'decorated', 'jagged', 'powerful', 'razor sharp', 'sharp', 'talon-like', 'thin'];
  const fightSnout = ['tusked', 'horned', 'broad', 'bruised', 'decorated', 'fierce looking', 'flattened', 'frowning', 'pointy', 'protected', 'seemingly arrogantly smiling', 'seemingly broken', 'seemingly smirking', 'serious looking', 'sharp', 'shielded', 'stubby'];
  const fightTail = ['a leg-like tail', 'a long tail used for superior balance', 'a muscular tail', 'a nimble and strong tail', 'a prehensile tail', 'a ribbon-like tail', 'a set of prehensile tails', 'a set of tails like a fan', 'a set of two powerful tails', 'a tail ending in a fist-like extremity', 'a tail ending in a hammer', 'a tail like a whip', 'a tail that wraps around the body like a belt'];
  const fightEars = ['a lack of', 'bolt-like', 'broken', 'fan-like', 'flappy', 'flabby', 'hat-like', 'helmet-like', 'jagged', 'mohawk-like', 'protective', 'ribbon-like', 'round', 'smoothened', 'stubby'];
  const fightHorns = ['ridged', 'a crown of', 'a row of', 'aerodynamic', 'antler-like', 'blade-like', 'curled', 'curved', 'mohawk-like', 'pointed', 'ridge', 'rounded', 'sharp', 'spiral', 'stubby'];
  const fireSkin = ['incandescent', 'burning', 'crimson', 'fiery', 'flaming', 'fuming', 'gleaming', 'glowing', 'lava-like', 'luminous', 'orange', 'red', 'red and orange', 'sanguine', 'smoking', 'smoldering', 'white and orange'];
  const fireLegs = ['ridged', 'an extra set of', 'ashen', 'black', 'boulder-like', 'dark', 'fiery hot', 'glowing', 'lava stone', 'muscular', 'obsidian', 'powerful', 'smoking', 'strong'];
  const fireArms = ['ridged', 'folded', 'agile', 'ashen', 'dark', 'little', 'muscular', 'nimble', 'obsidian', 'slim', 'smoldering', 'strong', 'stubby'];
  const fireWings = ['angular', 'ashen', 'black', 'burning', 'cloak-like', 'crimson', 'dark', 'enormous', 'fan-like', 'fiery', 'flame-like', 'fuming', 'glowing', 'layered', 'luminescent', 'obsidian', 'ribbon-like', 'robe-like', 'smoldering', 'steaming'];
  const fireMouth = ['cavernous', 'fiery', 'frowning', 'fuming', 'serious looking', 'sharp toothed', 'small', 'smiling', 'smirking', 'steaming'];
  const fireBeak = ['crescent', 'black', 'curved', 'fiery', 'fuming', 'glowing', 'luminescent', 'dark', 'razor-sharp', 'sharp', 'steaming'];
  const fireSnout = ['tusked', 'horned', 'fierce looking', 'bearded', 'black', 'broad', 'glowing', 'black', 'protected', 'smoldering', 'steaming', 'stubby', 'stumpy', 'thin'];
  const fireTail = ['a burning tail', 'a flame-like tail', 'a fluffy flame patterned tail', 'a lava-like tail', 'a literal flame as a tail', 'a muscular', 'a smoldering tail', 'a stubby tail', 'a tail like a fan', 'a tail that ends in fire', 'a tailpipe-like tail', 'an obsidian tail', 'several tails in a fan-like pattern'];
  const fireEars = ['enormous', 'wing-like', 'flame shaped', 'flappy', 'flabby', 'furnace-like', 'horn-like', 'huge', 'pointy', 'rounded', 'small', 'steaming', 'stumpy', 'tiny', 'big'];
  const fireHorns = ['ridged', 'enormous', 'curved', 'furnace-like', 'stubby', 'huge', 'pointy', 'rounded', 'small', 'steaming', 'stumpy', 'tiny', 'jagged'];
  const flySkin = ['armored', 'bioluminescent', 'phosphorescent', 'fluorescent', 'brightly colored', 'camouflaged', 'light', 'patterned', 'rough', 'smooth', 'soft', 'thorny', 'translucent'];
  const flyLegs = ['an extra pair of', 'armored', 'broad', 'clawed', 'decorated', 'delicate', 'fluffy', 'long', 'muscular', 'nimble', 'powerful', 'slim', 'tiny'];
  const flyWings = ['angular', 'angelic', 'armored', 'bioluminescent', 'phosphorescent', 'fluorescent', 'blade-like', 'clawed', 'cloak-like', 'cloud-like', 'enormous', 'fan-like', 'gigantic', 'huge', 'layered', 'patterned', 'rainbow', 'shield-like', 'translucent', 'two pairs of'];
  const flyMouth = ['broad', 'cavernous', 'frowning', 'hidden', 'huge', 'lack of a', 'mischievous', 'pointed', 'seemingly angry', 'seemingly expressionless', 'seemingly invisible', 'small', 'smiling', 'tiny', 'toothed', 'tranquil looking'];
  const flyBeak = ['crescent', 'reinforced', 'broad', 'crooked', 'curved', 'decorated', 'glowing', 'jagged', 'black', 'painted', 'patterned', 'pointy', 'powerful', 'razor sharp', 'seemingly frowning', 'seemingly smiling', 'seemingly smirking', 'sharp'];
  const flyTail = ['a barbed tail', 'a cloak-like tail', 'a cloud-like tail', 'a fan-like tail', 'a muscular tail', 'a powerful tail', 'a puffy, round tail', 'a rainbow colored tail', 'a rather small tail', 'a ribbon-like tail', 'a set of tails', 'an elongated tail', 'an incredibly long, ribbon-like tail', 'several tails in a fan-like shape', 'two tails instead of one'];
  const flyEars = ['an extra pair of', 'wing-like', 'antenna-like', 'antler-like', 'fan-like', 'feather-like', 'fluffy', 'hidden', 'horn-like', 'huge', 'orb-like', 'pointy', 'puffy', 'rounded', 'seemingly invisible', 'tiny'];
  const flyHorns = ['ridged', 'blade-like', 'curled', 'curved', 'jagged', 'mohawk-like', 'pointy', 'rounded', 'sharp', 'small', 'stubby'];
  const ghostSkin = ['bioluminescent', 'phosphorescent', 'fluorescent', 'black', 'black and crimson', 'blue and black', 'crimson', 'dark', 'dark blue', 'gaseous', 'glowing', 'hazy', 'luminous', 'purple', 'see through', 'translucent'];
  const ghostLegs = ['elongated', 'gaseous', 'hanging', 'hidden', 'hovering', 'ribbon-like', 'shrouded', 'stumpy', 'suspended', 'tiny', 'veiled', 'wavy'];
  const ghostArms = ['folded', 'bioluminescent', 'phosphorescent', 'fluorescent', 'blade-like', 'cloak-like', 'dangling', 'floating', 'glowing', 'hanging', 'often invisible', 'ribbon-like', 'shield-like', 'stretched', 'stubby', 'wavy'];
  const ghostWings = ['angular', 'angelic', 'bioluminescent', 'phosphorescent', 'fluorescent', 'cloak-like', 'cloth-like', 'cloud-like', 'enormous', 'gaseous', 'glowing', 'inflatable', 'poncho-like', 'powerful', 'ribbon-like', 'shield-like', 'shrouded', 'two pairs of'];
  const ghostMouth = ['tusked', 'cavernous', 'frowning', 'grinning', 'hidden', 'huge', 'serious looking', 'shrouded', 'smiling', 'smirking', 'sneering', 'toothed', 'veiled'];
  const ghostBeak = ['crescent', 'barbed', 'black', 'blade-like', 'crooked', 'curved', 'dark', 'pointy', 'razor sharp', 'sharp', 'shrouded', 'smirking', 'sneering', 'veiled'];
  const ghostSnout = ['tusked', 'horned', 'bearded', 'black', 'dark', 'frowning', 'grinning', 'lack of a', 'mostly hidden', 'partially hidden', 'serious looking', 'shrouded', 'smiling', 'smirking', 'veiled'];
  const ghostTail = ['a broad tail, ribbon-like tail', 'a fan-like tail', 'a gaseous tail', 'a hovering tail', 'a long tail floating gently in the air', 'a long tail wrapped around its body', 'a long, ribbon-like tail', 'a spiky tail', 'a tail like a cape', 'several ribbon-like tails', 'several tails instead of one', 'two tails instead of one'];
  const ghostEars = ['antenna-like', 'wing-like', 'broad', 'broken', 'curved', 'floppy', 'hat-like', 'horn-like', 'inflatable', 'pointy', 'rounded', 'stubby', 'stumpy', 'tiny'];
  const ghostHorns = ['ridged', 'a crown of', 'antler-like', 'bioluminescent', 'phosphorescent', 'fluorescent', 'broken', 'curled', 'curved', 'flame-like', 'glowing', 'mohawk-like', 'moon-shaped', 'several rows', 'sharp', 'two pairs of'];
  const grassSkin = ['bark-like', 'bioluminescent', 'phosphorescent', 'fluorescent', 'blossoming', 'camouflaged', 'emerald', 'glowing', 'grass-like', 'green', 'jade', 'leafy', 'lush', 'mossy', 'sprouting', 'thorny', 'verdigris', 'vine-like', 'viridian'];
  const grassLegs = ['ridged', 'an extra pair of', 'bark-like', 'brown', 'elongated', 'flower covered', 'leaf covered', 'leaf shrouded', 'lean', 'root-like', 'seed shaped', 'slim', 'stumpy', 'thick', 'trunk-like', 'veiled'];
  const grassArms = ['ridged', 'folded', 'stalk-like', 'blossoming', 'broccoli-like', 'fan-like', 'leaf', 'leaf-like', 'petal', 'ribbon-like', 'small', 'sprouting', 'stumpy', 'thick', 'thorny', 'vine'];
  const grassWings = ['angular', 'blade-like', 'blossoming', 'budding', 'fan-like', 'flowering', 'leaf', 'leaf-like', 'needle', 'petal', 'ribbon-like', 'sprouting', 'stalk-like', 'two sets of'];
  const grassMouth = ['bark-like', 'hidden', 'huge', 'lack of a', 'prickly', 'sharp toothed', 'smiling', 'smirking', 'thorny', 'tiny'];
  const grassBeak = ['crescent', 'bark-like', 'blossoming', 'broad', 'curved', 'humongous', 'leaf shaped', 'needle', 'mostly overgrown', 'sharp', 'shining', 'stubby', 'thorn-like', 'thorny'];
  const grassSnout = ['tusked', 'horned', 'bearded', 'blossoming', 'broad', 'flower covered', 'gentle', 'huge', 'leaf covered', 'leaf shrouded', 'mossy', 'mostly overgrown', 'pointy', 'sharp', 'smiling', 'stubby', 'thorny'];
  const grassTail = ['a bioluminescent tail', 'a blossoming tail', 'a fan-like tail', 'a leafy tail', 'a moss covered tail', 'a mostly overgrown tail', 'a mushroom as a tail', 'a needle-like tail', 'a stubby tail', 'a tail full of flowers', 'a thorny tail', 'a trunk-like tail', 'a vine-like tail', 'an evergrowing tail', 'several vine-like tails'];
  const grassEars = ['blossoming', 'wing-like', 'flower', 'flowery', 'fluffy', 'huge', 'leaf-like', 'leafy', 'mushroom', 'mushroom-like', 'needle-like', 'pollen-like', 'round', 'sprouting', 'thorny', 'tiny', 'vine-like'];
  const grassHorns = ['ridged', 'a crown of', 'blossoming', 'curled', 'curved', 'flowering', 'hidden', 'mushroom shaped', 'needle', 'overgrown', 'pointy', 'rounded', 'sharp', 'spiky', 'spotted'];
  const groundSkin = ['amber', 'brown', 'brown and gray', 'bulky', 'camouflaged', 'coarse', 'compact', 'dark', 'dull', 'dusty', 'gray', 'hazel', 'muddy', 'plated', 'sandy', 'sepia', 'shielded', 'solid', 'thick'];
  const groundLegs = ['ridged', 'an extra pair of', 'armored', 'coarse', 'elongated', 'fluffy', 'heavy', 'huge', 'muscular', 'powerful', 'protected', 'robust', 'short', 'stumpy', 'thick'];
  const groundArms = ['ridged', 'blade-like', 'clawed', 'dig-efficient', 'drill-like', 'elongated', 'fluffy', 'folded', 'lean', 'muscular', 'short', 'shovel-like', 'strong', 'stumpy', 'thick'];
  const groundMouth = ['bearded', 'broad', 'cavernous', 'frowning', 'grinning', 'huge', 'lack of a', 'pointy', 'powerful', 'seemingly expressionless', 'shrouded', 'small', 'smiling', 'tiny', 'tusked', 'veiled'];
  const groundBeak = ['blunt', 'bone-like', 'broad', 'crescent', 'curved', 'horn-like', 'huge', 'humongous', 'jagged', 'large', 'reinforced', 'sharp', 'small', 'stone', 'stubby'];
  const groundSnout = ['bearded', 'broad', 'coarse', 'flat', 'frowning', 'grinning', 'horned', 'large', 'pointy', 'protected', 'reinforced', 'sharp toothed', 'shielded', 'small', 'smiling', 'smirking', 'stubby', 'tusked'];
  const groundTail = ['a barbed tail', 'a bony tail', 'a broad tail', 'a bruised tail', 'a fab-like tail', 'a forked tail', 'a long, thin tail', 'a muscular tail', 'a powerful tail', 'a short, stubby tail', 'a shovel-like tail', 'a strong and nimble tail', 'a stubby tail', 'a tail suitable for digging', 'an armor plated tail', 'several tails instead of one', 'two tails instead of one'];
  const groundEars = ['antenna-like', 'bone-like', 'broken', 'coarse', 'flabby', 'flappy', 'horn-like', 'huge', 'jagged', 'orb-like', 'pointy', 'rounded', 'stubby', 'thorny', 'wing-like'];
  const groundHorns = ['ridged', 'a crown of', 'blunt', 'broad', 'broken', 'coarse', 'curled', 'curved', 'drill-like', 'mohawk-like', 'orb-like', 'sharp', 'shield-like', 'shovel-like', 'stubby'];
  const iceSkin = ['azure', 'blue', 'blue and white', 'cobalt', 'frost covered', 'frosty', 'glacial', 'ice cold', 'icy', 'ivory', 'reflective', 'sapphire', 'silvery', 'smooth', 'thick', 'pure white'];
  const iceLegs = ['ridged', 'an extra pair of', 'fat', 'fluffy', 'ice covered', 'muscular', 'powerful', 'short', 'snowy', 'stout', 'strong', 'stubby', 'thick'];
  const iceArms = ['ridged', 'folded', 'cloak-like', 'fan-like', 'fat', 'fluffy', 'icicle-like', 'lean', 'muscular', 'ribbon-like', 'scarf-like', 'strong', 'stubby', 'warming'];
  const iceWings = ['angular', 'cloak-like', 'enormous', 'frost covered', 'frosty', 'gigantic', 'icy', 'reflective', 'ribbon-like', 'scarf-like', 'shield-like', 'shimmering', 'shivering', 'sleeted', 'smooth', 'stalactite covered', 'glowing'];
  const iceMouth = ['bearded', 'broad', 'cavernous', 'crystal', 'frowning', 'fur covered', 'hidden', 'icicle covered', 'icicle toothed', 'serious looking', 'smiling', 'smirking', 'sparkling', 'tiny'];
  const iceBeak = ['crescent', 'broad', 'crystal', 'curved', 'frost covered', 'large, icicle-like', 'pointy', 'reflective', 'rimy', 'sapphire', 'sharp', 'silvery', 'sleeted', 'small, icicle-like'];
  const iceSnout = ['tusked', 'horned', 'bearded', 'broad', 'densely icicle-covered', 'fluffy', 'frost covered', 'frosty', 'frowning', 'fur covered', 'smiling', 'smirking', 'stubby', 'thinly icicle-covered', 'tranquil looking'];
  const iceTail = ['a broad, fan-like tail', 'a fluffy tail', 'a frost covered tail', 'a frosty tail', 'a long, fluffy tail wrapped around its body', 'a ribbon-like tail', 'a short and stubby tail', 'a tail wrapped around its body like a scarf', 'an icicle covered tail', 'an icicle-like tail', 'an icy, reflective tail', 'several tails instead of one', 'two tails instead of one'];
  const iceEars = ['crystal-like', 'fluffy', 'frosty', 'furry', 'fuzzy', 'huge', 'ice-like', 'icicle', 'icy', 'pointy', 'reflective', 'round', 'snowball-like', 'snowflake-like', 'tiny'];
  const iceHorns = ['ridged', 'a crown of', 'antler-like', 'broad', 'crystal', 'curved', 'diamond shaped', 'freezing', 'frosty', 'ice-like', 'icicle', 'icy, crystal-like', 'pointy', 'reflective', 'short', 'sleeted', 'stubby'];
  const normSkin = ['bioluminescent', 'phosphorescent', 'fluorescent', 'coarse', 'dirt covered', 'dull', 'glossy', 'glowing', 'luminous', 'lustrous', 'messy', 'radiant', 'silky', 'smooth', 'unkempt', 'velvety', 'vibrant', 'vivid'];
  const normLegs = ['ridged', 'an extra pair of', 'armored', 'elongated', 'enlarged', 'huge', 'lean', 'muscular', 'powerful', 'short', 'stour', 'stubby', 'thick', 'tiny', 'withdrawn'];
  const normArms = ['ridged', 'folded', 'armored', 'cloak-like', 'elongated', 'fat', 'fluffy', 'lean', 'little', 'long', 'slim', 'small', 'strong', 'stubby', 'tiny'];
  const normWings = ['angular', 'broad', 'cloak-like', 'elongated', 'enormous', 'fluffy', 'humongous', 'layered', 'pointy', 'ribbon-like', 'sharp', 'slender', 'smooth', 'thick', 'two pairs of'];
  const normMouth = ['bearded', 'blunt toothed', 'broad', 'cavernous', 'frowning', 'grinning', 'hidden', 'humongous', 'serious looking', 'sharp toothed', 'small', 'smiling', 'smirking', 'tiny', 'veiled'];
  const normBeak = ['crescent', 'blunt', 'broad', 'crooked', 'curved', 'flattened', 'huge', 'sharp', 'slim', 'thin', 'needle-like'];
  const normSnout = ['tusked', 'horned', 'bearded', 'bioluminescent', 'phosphorescent', 'fluorescent', 'broad', 'fluffy', 'frowning', 'glowing', 'large', 'pointy', 'smiling', 'smirking', 'stubby'];
  const normTail = ['a fluffy tail', 'a forked tail', 'a glowing tail', 'a long tail wrapped around its body', 'a ribbon-like tail', 'a short, rounded tail', 'a stubby little tail', 'a thick fluffy tail', 'an elongated tail', 'several tails instead of one', 'two tails instead of one'];
  const normEars = ['enlarged', 'wing-like', 'enormous', 'flabby', 'flappy', 'fluffy', 'horn-like', 'humongous', 'large', 'little', 'pointy', 'rounded', 'stubby', 'tiny'];
  const normHorns = ['ridged', 'a crown of', 'antler-like', 'blade-like', 'broken', 'curled', 'curved', 'fan-like', 'mohawk-like', 'pointy', 'rounded', 'sharp', 'spiked', 'stubby', 'stumpy'];
  const poisonSkin = ['armored', 'bioluminescent', 'phosphorescent', 'fluorescent', 'camouflaged', 'dark', 'darkened', 'glossy', 'glowing', 'grimy', 'luminous', 'magenta', 'purple', 'shiny', 'silky', 'smooth', 'vibrant', 'violet', 'vivid'];
  const poisonLegs = ['ridged', 'an extra pair of', 'armored', 'elongated', 'hidden', 'lean', 'long', 'muscular', 'powerful', 'scaly', 'skinny', 'slimy', 'stumpy', 'thin'];
  const poisonArms = ['ridged', 'folded', 'armored', 'barbed', 'broad', 'clawed', 'elongated', 'fat', 'lean', 'little', 'muscular', 'ribbon-like', 'small', 'strong', 'stubby', 'thorny'];
  const poisonWings = ['angular', 'barbed', 'bioluminescent', 'phosphorescent', 'fluorescent', 'blade-like', 'cloak-like', 'elongated', 'enormous', 'glowing', 'layered', 'pointy', 'reflective', 'ribbon-like', 'scaly', 'sharp', 'smooth', 'thin', 'thorny', 'translucent'];
  const poisonMouth = ['tusked', 'cavernous', 'grinning', 'hidden', 'huge', 'lack of a', 'noxious', 'sharp toothed', 'shrouded', 'smirking', 'thorny', 'tiny', 'veiled', 'venomous'];
  const poisonBeak = ['crescent', 'blunt', 'broad', 'curved', 'hidden', 'noxious', 'pointy', 'razor sharp', 'sharp', 'smirking', 'toothed', 'veiled', 'venomous'];
  const poisonSnout = ['bearded', 'bioluminescent', 'phosphorescent', 'fluorescent', 'fluffy', 'glowing', 'grimy', 'horned', 'luminous', 'noxious', 'protected', 'shrouded', 'slimy', 'stubby', 'tusked', 'veiled', 'venomous'];
  const poisonTail = ['a barbed tail', 'a bioluminescent tail', 'a forked tail', 'a glowing tail', 'a long tail wrapped around its body', 'a long, whip-like tail', 'a rattling tail', 'a slimy tail', 'a spiky tail', 'a spring-like tail', 'a tail with a stinger at the end', 'a thorny tail', 'a venomous tail', 'several tails instead of one', 'two tails instead of one'];
  const poisonEars = ['a lack of', 'wing-like', 'chimney-like', 'fan-like', 'flabby', 'flappy', 'fluffy', 'gooey', 'hairy', 'horn-like', 'huge', 'mucky', 'pointy', 'spiky', 'stubby', 'vent-like'];
  const poisonHorns = ['ridged', 'a crown of', 'antler-like', 'barbed', 'blade-like', 'broken', 'chimney-like', 'curled', 'curved', 'ejectable', 'fan-like', 'looping', 'mohawk-like', 'spiky', 'stinger-like', 'thorny', 'venomous', 'vent-like'];
  const psySkin = ['armored', 'bioluminescent', 'phosphorescent', 'fluorescent', 'black and white', 'camouflaged', 'dark', 'darkened', 'glossy', 'glowing', 'luminous', 'obsidian', 'pink and purple', 'pink and white', 'purple', 'smooth', 'vermilion', 'white'];
  const psyLegs = ['an extra pair of', 'broad', 'elongated', 'fat', 'hidden', 'hovering', 'lean', 'muscular', 'patterned', 'powerful', 'short', 'shrouded', 'stubby', 'thick', 'thin', 'veiled'];
  const psyArms = ['armored', 'cloak-like', 'elongated', 'fan-like', 'fat', 'folded', 'lean', 'long', 'muscular', 'ribbon-like', 'shrouded', 'slender', 'stumpy'];
  const psyWings = ['angelic', 'angular', 'armored', 'blade-like', 'body wrapping', 'cloak-like', 'darkened', 'enormous', 'gaseous', 'glossy', 'huge', 'reflective', 'ribbon-like', 'shadowy', 'smooth'];
  const psyMouth = ['bearded', 'broad', 'frowning', 'grinning', 'hidden', 'lack of a', 'pointy', 'seemingly expressionless', 'serene looking', 'shrouded', 'smiling', 'smirking', 'tiny', 'tusked', 'veiled'];
  const psyBeak = ['crescent', 'blunt', 'crooked', 'curved', 'flat', 'metal', 'razor sharp', 'sharp', 'shrouded', 'smirking', 'thorny', 'toothed', 'veiled'];
  const psySnout = ['bearded', 'bioluminescent', 'phosphorescent', 'fluorescent', 'broad', 'flat', 'fluffy', 'glowing', 'hairy', 'horned', 'huge', 'humongous', 'large', 'long', 'protected', 'shrouded', 'small', 'stubby', 'tiny', 'tusked', 'veiled'];
  const psyTail = ['a barbed tail', 'a bioluminescent tail', 'a forked tail', 'a long, decorated tail', 'a long, muscular tail', 'a ribbon-like tail', 'a spiky tail', 'a tail ending in a crescent shape', 'a tail that ends in a fan-like shape', 'a tail that ends in an orb shape', 'a tail that has been tied into a knot', 'a tail that hovers gently in the air', 'a tail that wraps completely around its body', 'a tail with a crystal on its tip', 'a tail with a gem on its tip', 'an armored tail', 'an incredibly long tail', 'several tails instead of one', 'two tails instead of one'];
  const psyEars = ['antenna-like', 'wing-like', 'elongated', 'enormous', 'fan-like', 'flabby', 'flappy', 'fuzzy', 'hidden', 'horn-like', 'long', 'pointy', 'rounded', 'shrouded', 'stubby', 'two sets of', 'veiled'];
  const psyHorns = ['ridged', 'a crown of', 'antenna-like', 'antler-like', 'barbed', 'blade-like', 'broken', 'connected', 'curled', 'curved', 'huge', 'looping', 'pointy', 'sharp', 'thick', 'two sets of'];
  const rockSkin = ['crystal', 'gem encrusted', 'amber', 'armored', 'boulder-like', 'brown', 'brown and gray', 'bulky', 'compact', 'dark', 'dusty', 'gray', 'hard', 'hazel', 'muddy', 'plated', 'rock-like', 'sandy', 'sepia', 'shielded', 'solid', 'thick'];
  const rockLegs = ['ridged', 'an extra pair of', 'armor plated', 'armored', 'coarse', 'heavy', 'huge', 'muscular', 'powerful', 'protected', 'robust', 'rock-like', 'short', 'stone covered', 'stumpy'];
  const rockArms = ['ridged', 'folded', 'armor plated', 'armored', 'elongated', 'gem adorned', 'lean', 'muscular', 'rocky', 'rough textured', 'short', 'stalagmite-like', 'strong', 'stumpy', 'thick', 'two sets of'];
  const rockMouth = ['broad', 'cavernous', 'crystal', 'crystal toothed', 'frowning', 'grinning', 'powerful', 'seemingly expressionless', 'small', 'stalactite toothed', 'stalgmite and stalactite toothed', 'stone', 'tusked'];
  const rockBeak = ['crescent', 'reinforced', 'blunt', 'bone-like', 'broad', 'crystal', 'curved', 'gem-like', 'jagged', 'sharp', 'stone', 'stubby'];
  const rockSnout = ['tusked', 'horned', 'bone covered', 'broad', 'coarse', 'crystal', 'flat', 'hardened', 'protected', 'shielded', 'stubby', 'large', 'small'];
  const rockTail = ['a broad tail', 'a bruised tail', 'a gem encrusted tail', 'a hammer-like tail', 'a muscular tail', 'a powerful tail', 'a shovel-like tail', 'a strong and nimble tail', 'a stubby tail', 'a tail full of stalactites', 'a tail like a stalactite', 'a tail like a stalagmite', 'a tail suitable for digging', 'an armor plated tail'];
  const rockEars = ['bone-like', 'boulder-like', 'broken', 'coarse', 'crystal', 'diamond', 'flappy', 'flabby', 'gem encrusted', 'horn-like', 'huge', 'pointy', 'rock-like', 'rounded', 'shield-like', 'stone', 'stubby'];
  const rockHorns = ['ridged', 'a crown of', 'blunt', 'broad', 'broken', 'coarse', 'crystal', 'curled', 'curved', 'diamond', 'drill-like', 'gem encrusted', 'metal', 'obsidian', 'sharp', 'stone'];
  const steelSkin = ['armored', 'bronze', 'copper', 'glistening', 'golden', 'gray', 'heavily armored', 'incredibly thick', 'iron', 'jagged', 'layered', 'magnetic', 'metal', 'reflective', 'sharp', 'shiny', 'silvery', 'smooth', 'spiky'];
  const steelLegs = ['ridged', 'an extra pair of', 'armor plated', 'armored', 'blade-like', 'glistening', 'heavy set', 'honed', 'huge', 'magnetic', 'powerful', 'reflective', 'sharpened', 'shielded', 'smooth', 'spiked', 'steel-plated', 'thick'];
  const steelArms = ['ridged', 'folded', 'armored', 'blade-like', 'elongated', 'energized', 'lean', 'metal-plated', 'pincer-like', 'reinforced', 'shielded', 'smooth', 'spiky', 'stubby', 'sturdy', 'thick'];
  const steelWings = ['armored', 'blade-like', 'enormous', 'fan-like', 'honed', 'humongous', 'layered', 'magnetized', 'powerful', 'reflective', 'reinforced', 'sharp', 'shield-like', 'smooth', 'thick', 'thin'];
  const steelMouth = ['broad', 'frowning', 'hidden', 'huge', 'jagged', 'lack of a', 'powerful', 'reinforced', 'seemingly expressionless', 'sharp', 'sharp toothed', 'shrouded', 'smiling', 'smirking', 'tusked'];
  const steelBeak = ['crescent', 'crooked', 'curved', 'glistening', 'glowing', 'huge', 'humongous', 'luminous', 'metal', 'pincer-like', 'pointy', 'razor sharp', 'reinforced', 'sharp', 'shiny', 'smooth', 'steel plated'];
  const steelSnout = ['bearded', 'broadened', 'hidden', 'metal', 'metal covered', 'metal plated', 'metal toothed', 'metal tusked', 'powerful', 'protective', 'reinforced', 'shrouded', 'spiky', 'stubby', 'tusked'];
  const steelTail = ['a blade-like tail', 'a fan-like tail', 'a forked, blade-like tail', 'a glowing, bioluminescent tail', 'a glowing, metallic tail', 'a long tail wrapped around its body', 'a long, energized tail', 'a long, spiky tail', 'a magnetized tail', 'a metal scaled tail', 'a short, spike-like tail', 'a short, stumpy tail', 'a tail ending in a massive orb-like shape', 'a tail ending in a u-shape magnet', 'a thick, reflective tail', 'an armor plated tail', 'an elongated tail', 'several tails instead of one', 'two tails instead of one'];
  const steelEars = ['a lack of', 'antenna-like', 'blade-like', 'cog-shaped', 'covered', 'enormous', 'fan-like', 'helmet-like', 'huge', 'jagged', 'pointy', 'shielded', 'spiky', 'thick', 'tiny', 'u-shaped'];
  const steelHorns = ['ridged', 'a crown of', 'antenna-like', 'antler-like', 'barbed', 'coil-like', 'curled', 'curved', 'enormous', 'forked', 'honed', 'keen', 'looping', 'mohawk-like', 'needle-like', 'pointy', 'razor sharp', 'spiky', 'stubby', 'u-shaped magnet'];
  const waterSkin = ['azure', 'bioluminescent', 'cerulean', 'coral', 'darkened', 'fluorescent', 'glistening', 'glossy', 'phosphorescent', 'salmon', 'sapphire', 'shimmering', 'shiny', 'silky', 'smooth', 'sparkling', 'teal', 'turquoise', 'ultramarine', 'velvety', 'white and blue'];
  const waterLegs = ['ridged', 'an extra pair of', 'coral encrusted', 'elongated', 'fat', 'fatty', 'firm', 'lean', 'muscular', 'scaly', 'shell covered', 'shiny', 'smooth', 'steady', 'stubby', 'thick'];
  const waterArms = ['an extra pair of', 'coral encrusted', 'elongated', 'fat', 'folded', 'long', 'pincer-like', 'ribbon-like', 'ridged', 'scaly', 'shell covered', 'short', 'slim', 'smooth', 'stubby'];
  const waterWings = ['angelic', 'bioluminescent', 'cloak-like', 'enormous', 'fin-like', 'flipper-like', 'fluorescent', 'glistening', 'glowing', 'layered', 'phosphorescent', 'ribbon-like', 'scaly', 'shimmering', 'smooth'];
  const waterMouth = ['bearded', 'blunt toothed', 'broad', 'cavernous', 'frowning', 'grinning', 'pointy', 'sharp toothed', 'shrouded', 'small', 'smiling', 'smirking', 'tusked'];
  const waterBeak = ['bioluminescent', 'blunt', 'broad', 'crescent', 'curved', 'glistening', 'glowing', 'pointy', 'sapphire', 'seemingly smiling', 'shell-like', 'shiny', 'stubby', 'wavy'];
  const waterSnout = ['bearded', 'bioluminescent', 'broad', 'coral covered', 'flat', 'fluffy', 'horned', 'huge', 'pointy', 'shell covered', 'smooth', 'sparkling', 'stubby', 'trumpet-like', 'tusked'];
  const waterTail = ['a bioluminescent tail', 'a broad, fan-like tail', 'a coral covered tail', 'a forked tail', 'a glowing tail', 'a huge, cloak-like tail', 'a long, curled up tail', 'a long, ribbon-like tail', 'a long, smooth tail', 'a long, wavy tail', 'a ridged tail', 'a shell covered tail', 'a short and tiny tail', 'a strong, muscular tail', 'a stubby, fin-like tail', 'several tails instead of one', 'two tails instead of one'];
  const waterEars = ['antenna-like', 'curled', 'enormous', 'fin-like', 'flabby', 'flappy', 'flipper-like', 'orb-like', 'shell covered', 'shell-like', 'short', 'shrouded', 'stubby', 'two sets of', 'wavy'];
  const waterHorns = ['antler-like', 'a crown of', 'antenna-like', 'bioluminescent', 'coral covered', 'coral-like', 'curled', 'curved', 'fin-like', 'flipper-like', 'glowing', 'looping', 'ridged', 'shell-like', 'short', 'smooth', 'stubby', 'wavy'];
  const placeBug = ['in labyrinths', 'during summer', 'in national parks', 'in bushes', 'in farmlands', 'in fields', 'in forests', 'in gardens', 'in grassy fields', 'in meadows', 'in parks', 'in pastures', 'in tree tops', 'in valleys', 'in vineyards'];
  const placeDark = ['in labyrinths', 'in dark caves', 'at midnight', 'in caverns', 'in caves', 'in chasms', 'in dark forests', 'in dens', 'in grottoes', 'in ruins', 'in shadowy places', 'in the early morning', 'in the evening', 'in the middle of the night', 'in thick forests'];
  const placeDragon = ['during heavy clouded weather', 'during periods of heavy winds', 'high up in the air', 'in canyons', 'in massive caves', 'in mountainous areas', 'in ruins', 'in towers', 'on deserted islands', 'on mountain tops'];
  const placeElectric = ['in labyrinths', 'after thunderstorms', 'during the day', 'during the night', 'during thunderstorms', 'in dark caves', 'in ruins', 'in valleys', 'near power facilities', 'near power plants'];
  const placeFairy = ['in dense forests', 'in hilly areas', 'in labyrinths', 'in large cave systems', 'in large forests', 'in the early morning', 'in the late evening hours', 'near mountains', 'near sanctuaries', 'near shrines'];
  const placeFighting = ['in cave systems', 'in dense forests', 'in hilly areas', 'in labyrinths', 'in mountain caves', 'in open fields', 'in rocky hill areas', 'in towers', 'near cliffs', 'near mountain tops', 'near ruins'];
  const placeFire = ['after forest fires', 'during summer', 'in cave systems', 'in deep caves', 'in deserty areas', 'near hot springs', 'near ruins', 'near volcanoes', 'on deserted islands', 'on hot summer days', 'on volcanic islands'];
  const placeFlying = ['high in the sky', 'in dense forests', 'in gardens', 'in large forests', 'in meadows', 'in national parks', 'in open fields', 'in parks', 'in summer', 'in tall grass', 'in the evening hours', 'in the morning hours', 'in tree tops', 'in winter'];
  const placeGhost = ['near temples', 'near shrines', 'near sanctuaries', 'at night', 'in abandoned buildings', 'in abandoned towers', 'in clock towers', 'in dark caves', 'in dark forests', 'in dense forests', 'in labyrinths', 'in the middle of the night', 'near graveyards', 'near ruins'];
  const placeGrass = ['in bushes', 'in dense forests', 'in farmlands', 'in fields', 'in flowery meadows', 'in forests', 'in gardens', 'in grassy fields', 'in meadows', 'in national parks', 'in open fields', 'in parks', 'in pastures', 'in summer', 'in the early morning', 'in the evening hours', 'in tree tops', 'in valleys', 'in vineyards'];
  const placeGround = ['at night', 'in cave systems', 'in caves', 'in dense forests', 'in deserty areas', 'in hilly areas', 'in labyrinths', 'in mountainous areas', 'in national parks', 'in rocky hill areas', 'near cliffs', 'near ruins', 'on rocky paths', 'on sandy paths'];
  const placeIce = ['after a blizzard', 'after a snow storm', 'during a blizzard', 'during snowy weather', 'in icy cave systems', 'in snowlands', 'in snowy mountain peaks', 'in taigas', 'in tundras', 'in winter', 'on cold mountain peaks', 'on frozen lakes', 'on frozen rivers', 'on icy plains'];
  const placeNormal = ['all around', 'at night', 'during the day', 'in farmlands', 'in fields', 'in forests', 'in gardens', 'in hilly areas', 'in national parks', 'in parks', 'in quiet towns', 'in the early morning', 'in the evening hours', 'near beaches', 'near ruins', 'near sanctuaries', 'near temples', 'on forest paths'];
  const placePoison = ['during summer', 'hiding in bushes', 'hiding in forests', 'hiding in tree tops', 'in dense forests', 'in gardens', 'in grassy fields', 'in labyrinths', 'in meadows', 'in parks', 'in valleys', 'near cliffs'];
  const placePsychic = ['in abandoned buildings', 'in abandoned towers', 'in cave systems', 'in dark caves', 'in dense forests', 'in the middle of the night', 'near ruins', 'near sanctuaries', 'near shrines', 'near temples', 'on deserted islands'];
  const placeRock = ['in cave systems', 'in caverns', 'in caves', 'in deep cavern systems', 'in labyrinths', 'in mountain caves', 'in mountainous areas', 'in rocky hill areas', 'in rocky mountains', 'near cliffs', 'on and near hillsides', 'on and near mountains', 'on mountain peaks', 'on rocky paths'];
  const placeSteel = ['after meteor showers', 'in cave systems', 'in caverns', 'in dark caves', 'in deep cavern systems', 'in labyrinths', 'near cliffs', 'near construction works', 'near mines', 'near shrines'];
  const placeWater = ['around harbors', 'around high tides', 'around low tides', 'in forest lakes', 'in gentle creeks', 'in lagoons', 'in large canals', 'in park lakes', 'in rivers', 'in serene lakes', 'in swampy areas', 'in wild water rapids', 'near beaches', 'near calm shores', 'near coral reefs', 'near ocean fronts', 'near sea fronts', 'near steep coastal areas', 'near waterfalls', 'on oceanic islands'];
  const pers = ['aggressive', 'apprehensive', 'attentive', 'carefree', 'cautious', 'cheerful', 'comical', 'cordial', 'disruptive', 'distrustful', 'easygoing', 'energetic', 'fearful', 'fidgety', 'friendly', 'gentle', 'hostile', 'impish', 'inhospitable', 'irritable', 'jittery', 'laid-back', 'lively', 'mischievous', 'placid', 'playful', 'precarious', 'quiet', 'receptive', 'relaxed', 'serene', 'shy', 'skittish', 'sociable', 'spiteful', 'threatening', 'timid', 'volatile', 'wary', 'watchful', 'whimsical'];
  const amnt = ['all around you', 'alone or alongside one or two others', 'alongside a few others', 'alongside other Pokemon', 'among many other kinds of Pokemon', 'hidden away and on their own', 'hiding with several others', 'in huge groups', 'in small groups', 'lurking about and on their own', 'lurking with several others', 'on their own', 'only after giving up your search for them', 'only by accident'];
  const wtr = ['dark', 'dragon', 'ghost', 'ice', 'poison', 'psychic', 'water'];
  const lnd = ['bug', 'dark', 'electric', 'fairy', 'fighting', 'fire', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel'];
  const air = ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fire', 'flying', 'ghost', 'normal', 'poison', 'psychic'];
  const bugAttk = ['Attack Order', 'Bug Bite', 'Bug Buzz', 'Defend Order', 'Fell Stinger', 'Fury Cutter', 'Heal Order', 'Infestation', 'Leech Life', 'Megahorn', 'Pin Missile', 'Powder', 'Quiver Dance', 'Rage Powder', 'Signal Beam', 'Silver Wind', 'Spider Web', 'Steamroller', 'Sticky Web', 'String Shot', 'Struggle Bug', 'Tail Glow', 'Twineedle', 'U-turn', 'X-Scissor'];
  const darkAttk = ['Assurance', 'Beat Up', 'Bite', 'Crunch', 'Dark Pulse', 'Dark Void', 'Embargo', 'Fake Tears', 'Feint Attack', 'Flatter', 'Fling', 'Foul Play', 'Hone Claws', 'Hyperspace Fury', 'Knock Off', 'Memento', 'Nasty Plot', 'Night Daze', 'Night Slash', 'Parting Shot', 'Payback', 'Punishment', 'Pursuit', 'Quash', 'Snarl', 'Snatch', 'Sucker Punch', 'Switcheroo', 'Taunt', 'Thief', 'Topsy-Turvy', 'Torment'];
  const dragonAttk = ['Draco Meteor', 'Dragon Breath', 'Dragon Claw', 'Dragon Dance', 'Dragon Pulse', 'Dragon Rage', 'Dragon Rush', 'Dragon Tail', 'Dual Chop', 'Outrage', 'Roar of Time', 'Spacial Rend', 'Twister'];
  const electricAttk = ['Bolt Strike', 'Charge', 'Charge Beam', 'Discharge', 'Eerie Impulse', 'Electric Terrain', 'Electrify', 'Electro Ball', 'Electroweb', 'Fusion Bolt', 'Ion Deluge', 'Magnet Rise', 'Magnetic Flux', 'Nuzzle', 'Parabolic Charge', 'Shock Wave', 'Spark', 'Thunder', 'Thunder Fang', 'Thunder Wave', 'Thunderbolt', 'Thunder Punch', 'Thunder Shock', 'Volt Switch', 'Volt Tackle', 'Wild Charge', 'Zap Cannon'];
  const fairyAttk = ['Aromatic Mist', 'Baby-Doll Eyes', 'Charm', 'Crafty Shield', 'Dazzling Gleam', 'Disarming Voice', 'Draining Kiss', 'Fairy Lock', 'Fairy Wind', 'Flower Shield', 'Geomancy', 'Light of Ruin', 'Misty Terrain', 'Moonblast', 'Moonlight', 'Play Rough', 'Sweet Kiss'];
  const fightingAttk = ['Arm Thrust', 'Aura Sphere', 'Brick Break', 'Bulk Up', 'Circle Throw', 'Close Combat', 'Counter', 'Cross Chop', 'Detect', 'Double Kick', 'Drain Punch', 'Dynamic Punch', 'Final Gambit', 'Flying Press', 'Focus Blast', 'Focus Punch', 'Force Palm', 'Hammer Arm', 'High Jump Kick', 'Jump Kick', 'Karate Chop', 'Low Kick', 'Low Sweep', 'Mach Punch', 'Mat Block', 'Power-Up Punch', 'Quick Guard', 'Revenge', 'Reversal', 'Rock Smash', 'Rolling Kick', 'Sacred Sword', 'Secret Sword', 'Seismic Toss', 'Sky Uppercut', 'Storm Throw', 'Submission', 'Superpower', 'Triple Kick', 'Vacuum Wave', 'Vital Throw', 'Wake-Up Slap'];
  const fireAttk = ['Blast Burn', 'Blaze Kick', 'Blue Flare', 'Ember', 'Eruption', 'Fiery Dance', 'Fire Blast', 'Fire Fang', 'Fire Pledge', 'Fire Punch', 'Fire Spin', 'Flame Burst', 'Flame Charge', 'Flame Wheel', 'Flamethrower', 'Flare Blitz', 'Fusion Flare', 'Heat Crash', 'Heat Wave', 'Incinerate', 'Inferno', 'Lava Plume', 'Magma Storm', 'Mystical Fire', 'Overheat', 'Sacred Fire', 'Searing Shot', 'Sunny Day', 'V-create', 'Will-O-Wisp'];
  const flyingAttk = ['Acrobatics', 'Aerial Ace', 'Aeroblast', 'Air Cutter', 'Air Slash', 'Bounce', 'Brave Bird', 'Chatter', 'Defog', 'Dragon Ascent', 'Drill Peck', 'Feather Dance', 'Fly', 'Gust', 'Hurricane', 'Mirror Move', 'Oblivion Wing', 'Peck', 'Pluck', 'Roost', 'Sky Attack', 'Sky Drop', 'Tailwind', 'Wing Attack'];
  const ghostAttk = ['Astonish', 'Confuse Ray', 'Curse', 'Destiny Bond', 'Grudge', 'Hex', 'Lick', 'Night Shade', 'Nightmare', 'Ominous Wind', 'Phantom Force', 'Shadow Ball', 'Shadow Claw', 'Shadow Force', 'Shadow Punch', 'Shadow Sneak', 'Spite', 'Trick-or-Treat'];
  const grassAttk = ['Absorb', 'Aromatherapy', 'Bullet Seed', 'Cotton Guard', 'Cotton Spore', 'Energy Ball', 'Forest\'s Curse', 'Frenzy Plant', 'Giga Drain', 'Grass Knot', 'Grass Pledge', 'Grass Whistle', 'Grassy Terrain', 'Horn Leech', 'Ingrain', 'Leaf Blade', 'Leaf Storm', 'Leaf Tornado', 'Leech Seed', 'Magical Leaf', 'Mega Drain', 'Needle Arm', 'Petal Blizzard', 'Petal Dance', 'Power Whip', 'Razor Leaf', 'Seed Bomb', 'Seed Flare', 'Sleep Powder', 'Solar Beam', 'Spiky Shield', 'Spore', 'Stun Spore', 'Synthesis', 'Vine Whip', 'Wood Hammer', 'Worry Seed'];
  const groundAttk = ['Bone Club', 'Bone Rush', 'Bonemerang', 'Bulldoze', 'Dig', 'Drill Run', 'Earth Power', 'Earthquake', 'Fissure', 'Land\'s Wrath', 'Magnitude', 'Mud Bomb', 'Mud Shot', 'Mud Sport', 'Mud-Slap', 'Precipice Blades', 'Rototiller', 'Sand Tomb', 'Sand Attack', 'Spikes', 'Thousand Arrows', 'Thousand Waves'];
  const iceAttk = ['Aurora Beam', 'Avalanche', 'Blizzard', 'Freeze-Dry', 'Freeze Shock', 'Frost Breath', 'Glaciate', 'Hail', 'Haze', 'Ice Ball', 'Ice Beam', 'Ice Burn', 'Ice Fang', 'Ice Punch', 'Ice Shard', 'Icicle Crash', 'Icicle Spear', 'Icy Wind', 'Mist', 'Powder Snow', 'Sheer Cold'];
  const normalAttk = ['Acupressure', 'After You', 'Assist', 'Attract', 'Barrage', 'Baton Pass', 'Belly Drum', 'Bestow', 'Bide', 'Bind', 'Block', 'Body Slam', 'Boomburst', 'Camouflage', 'Captivate', 'Celebrate', 'Chip Away', 'Comet Punch', 'Confide', 'Constrict', 'Conversion', 'Conversion 2', 'Copycat', 'Covet', 'Crush Claw', 'Crush Grip', 'Cut', 'Defense Curl', 'Disable', 'Dizzy Punch', 'Double Hit', 'Double Slap', 'Double Team', 'Double-Edge', 'Echoed Voice', 'Encore', 'Endeavor', 'Endure', 'Entrainment', 'Explosion', 'Extreme Speed', 'Facade', 'Fake Out', 'False Swipe', 'Feint', 'Flail', 'Flash', 'Focus Energy', 'Follow Me', 'Foresight', 'Frustration', 'Fury Attack', 'Fury Swipes', 'Giga Impact', 'Glare', 'Growl', 'Growth', 'Guillotine', 'Happy Hour', 'Harden', 'Head Charge', 'Headbutt', 'Heal Bell', 'Helping Hand', 'Hidden Power', 'Hold Back', 'Hold Hands', 'Horn Attack', 'Horn Drill', 'Howl', 'Hyper Beam', 'Hyper Fang', 'Hyper Voice', 'Judgment', 'Last Resort', 'Leer', 'Lock-On', 'Lovely Kiss', 'Lucky Chant', 'Me First', 'Mean Look', 'Mega Kick', 'Mega Punch', 'Metronome', 'Milk Drink', 'Mimic', 'Mind Reader', 'Minimize', 'Morning Sun', 'Natural Gift', 'Nature Power', 'Noble Roar', 'Odor Sleuth', 'Pain Split', 'Pay Day', 'Perish Song', 'Play Nice', 'Pound', 'Present', 'Protect', 'Psych Up', 'Quick Attack', 'Rage', 'Rapid Spin', 'Razor Wind', 'Recover', 'Recycle', 'Reflect Type', 'Refresh', 'Relic Song', 'Retaliate', 'Return', 'Roar', 'Rock Climb', 'Round', 'Safeguard', 'Scary Face', 'Scratch', 'Screech', 'Secret Power', 'Self-Destruct', 'Sharpen', 'Shell Smash', 'Simple Beam', 'Sing', 'Sketch', 'Skull Bash', 'Slack Off', 'Slam', 'Slash', 'Sleep Talk', 'Smelling Salts', 'Smokescreen', 'Snore', 'Soft-Boiled', 'Sonic Boom', 'Spike Cannon', 'Spit Up', 'Splash', 'Stockpile', 'Stomp', 'Strength', 'Struggle', 'Substitute', 'Super Fang', 'Supersonic', 'Swagger', 'Swallow', 'Sweet Scent', 'Swift', 'Swords Dance', 'Tackle', 'Tail Slap', 'Tail Whip', 'Take Down', 'Techno Blast', 'Teeter Dance', 'Thrash', 'Tickle', 'Transform', 'Tri Attack', 'Trump Card', 'Uproar', 'Vice Grip', 'Weather Ball', 'Whirlwind', 'Wish', 'Work Up', 'Wrap', 'Wring Out', 'Yawn'];
  const poisonAttk = ['Acid', 'Acid Armor', 'Acid Spray', 'Belch', 'Clear Smog', 'Coil', 'Cross Poison', 'Gastro Acid', 'Gunk Shot', 'Poison Fang', 'Poison Gas', 'Poison Jab', 'Poison Powder', 'Poison Sting', 'Poison Tail', 'Sludge', 'Sludge Bomb', 'Sludge Wave', 'Smog', 'Toxic', 'Toxic Spikes', 'Venom Drench', 'Venoshock'];
  const psychicAttk = ['Agility', 'Ally Switch', 'Amnesia', 'Barrier', 'Calm Mind', 'Confusion', 'Cosmic Power', 'Dream Eater', 'Extrasensory', 'Future Sight', 'Gravity', 'Guard Split', 'Guard Swap', 'Heal Block', 'Heal Pulse', 'Healing Wish', 'Heart Stamp', 'Heart Swap', 'Hyperspace Hole', 'Hypnosis', 'Imprison', 'Kinesis', 'Light Screen', 'Lunar Dance', 'Luster Purge', 'Magic Coat', 'Magic Room', 'Meditate', 'Miracle Eye', 'Mirror Coat', 'Mist Ball', 'Power Split', 'Power Swap', 'Power Trick', 'Psybeam', 'Psychic', 'Psycho Boost', 'Psycho Cut', 'Psycho Shift', 'Psyshock', 'Psystrike', 'Psywave', 'Reflect', 'Rest', 'Role Play', 'Skill Swap', 'Stored Power', 'Synchronoise', 'Telekinesis', 'Teleport', 'Trick', 'Trick Room', 'Wonder Room', 'Zen Headbutt'];
  const rockAttk = ['Ancient Power', 'Diamond Storm', 'Head Smash', 'Power Gem', 'Rock Blast', 'Rock Polish', 'Rock Slide', 'Rock Throw', 'Rock Tomb', 'Rock Wrecker', 'Rollout', 'Sandstorm', 'Smack Down', 'Stealth Rock', 'Stone Edge', 'Wide Guard'];
  const steelAttk = ['Autotomize', 'Bullet Punch', 'Doom Desire', 'Flash Cannon', 'Gear Grind', 'Gyro Ball', 'Heavy Slam', 'Iron Defense', 'Iron Head', 'Iron Tail', 'King\'s Shield', 'Magnet Bomb', 'Metal Burst', 'Metal Claw', 'Metal Sound', 'Meteor Mash', 'Mirror Shot', 'Shift Gear', 'Steel Wing'];
  const waterAttk = ['Aqua Jet', 'Aqua Ring', 'Aqua Tail', 'Brine', 'Bubble', 'Bubble Beam', 'Clamp', 'Crabhammer', 'Dive', 'Hydro Cannon', 'Hydro Pump', 'Muddy Water', 'Octazooka', 'Origin Pulse', 'Rain Dance', 'Razor Shell', 'Scald', 'Steam Eruption', 'Soak', 'Surf', 'Water Gun', 'Water Pledge', 'Water Pulse', 'Water Shuriken', 'Water Sport', 'Water Spout', 'Waterfall', 'Whirlpool', 'Withdraw'];
  const evo = ['could still evolve, but it requires a special stone', 'could still evolve, but only under rare circumstances', 'has already evolved once, but can still evolve one more time', 'has evolve once and can still evolve into one of two potential evolutions', 'has evolved once and can evolve no more', 'has evolved twice and can evolve no more', 'has evolved twice, but can still evolve once more', 'hasn\'t evolved yet and there are no known evolutions', 'hasn\'t evolved yet, but could do so once', 'hasn\'t evolved yet, but could do so twice'];
  const rsm = ['bears resemblance to', 'closely resembles', 'faintly looks like', 'is similar to', 'looks a little like', 'looks a lot like', 'shares features with', 'slightly resembles', 'somewhat resembles'];
  let pkm = [
    ['an aardvark', ['land'],
      ['fur'],
      ['legs'], 'snout', 'tail', 'ears',
    ],
    ['an albatross', ['air', 'water'],
      ['feathers'],
      ['wings'], 'beak', 'tail', 'none',
    ],
    ['an alligator', ['land', 'water'],
      ['skin', 'scales'],
      ['legs'], 'snout', 'tail', 'none',
    ],
    ['an alpaca', ['land'],
      ['fur'],
      ['legs'], 'snout', 'tail', 'ears',
    ],
    ['an ant', ['land'],
      ['skin'],
      ['legs'], 'mouth', 'none', 'none',
    ],
    ['an anteater', ['land'],
      ['fur'],
      ['legs'], 'snout', 'tail', 'ears',
    ],
    ['an antelope', ['land'],
      ['fur'],
      ['legs'], 'snout', 'tail', 'ears',
    ],
    ['an ape', ['land'],
      ['skin', 'fur'],
      ['legs'], 'mouth', 'none', 'ears',
    ],
    ['an armadillo', ['land'],
      ['fur'],
      ['legs'], 'snout', 'tail', 'ears',
    ],
    ['a baboon', ['land'],
      ['skin', 'fur'],
      ['legs'], 'mouth', 'none', 'ears',
    ],
    ['a badger', ['land'],
      ['fur'],
      ['legs'], 'snout', 'tail', 'ears',
    ],
    ['a barracuda', ['water'],
      ['scales'],
      ['fins'], 'mouth', 'none', 'none',
    ],
    ['a bat', ['air'],
      ['skin'],
      ['wings'], 'mouth', 'none', 'ears',
    ],
    ['a bear', ['land'],
      ['fur'],
      ['legs'], 'snout', 'none', 'ears',
    ],
    ['a beaver', ['land', 'water'],
      ['fur'],
      ['legs'], 'snout', 'tail', 'ears',
    ],
    ['a bee', ['air'],
      ['skin'],
      ['wings'], 'mouth', 'none', 'none',
    ],
    ['a bird', ['air'],
      ['feathers'],
      ['wings'], 'beak', 'tail', 'none',
    ],
    ['a bison', ['land'],
      ['fur'],
      ['legs'], 'snout', 'tail', 'ears',
    ],
    ['a boar', ['land'],
      ['skin', 'hide'],
      ['legs'], 'snout', 'tail', 'ears',
    ],
    ['a buffalo', ['land', 'water'],
      ['fur'],
      ['legs'], 'snout', 'tail', 'ears',
    ],
    ['a butterfly', ['air'],
      ['skin'],
      ['wings'], 'mouth', 'none', 'none',
    ],
    ['a camel', ['land'],
      ['hide'],
      ['legs'], 'snout', 'tail', 'ears',
    ],
    ['a caribou', ['land'],
      ['fur'],
      ['legs'], 'snout', 'none', 'ears',
    ],
    ['a cassowary', ['air', 'land'],
      ['feathers'],
      ['legs', 'wings'], 'beak', 'none', 'none',
    ],
    ['a cat', ['land'],
      ['fur'],
      ['legs'], 'mouth', 'tail', 'ears',
    ],
    ['a caterpillar', ['land'],
      ['skin'],
      ['legs'], 'mouth', 'none', 'none',
    ],
    ['a cheetah', ['land'],
      ['fur'],
      ['legs'], 'mouth', 'tail', 'ears',
    ],
    ['a chicken', ['air', 'land'],
      ['feathers'],
      ['legs', 'wings'], 'beak', 'none', 'none',
    ],
    ['a chimpanzee', ['land'],
      ['skin', 'fur'],
      ['legs'], 'mouth', 'none', 'ears',
    ],
    ['a chinchilla', ['land'],
      ['fur'],
      ['legs'], 'snout', 'none', 'ears',
    ],
    ['a cobra', ['land'],
      ['skin', 'scales'],
      ['body'], 'mouth', 'tail', 'none',
    ],
    ['a cockroach', ['land'],
      ['skin'],
      ['wings'], 'mouth', 'none', 'none',
    ],
    ['a cod', ['water'],
      ['scales'],
      ['fins'], 'mouth', 'none', 'none',
    ],
    ['a cow', ['land'],
      ['skin', 'hide'],
      ['legs'], 'snout', 'tail', 'ears',
    ],
    ['a coyote', ['land'],
      ['fur'],
      ['legs'], 'snout', 'tail', 'ears',
    ],
    ['a crab', ['land', 'water'],
      ['armor'],
      ['legs'], 'mouth', 'none', 'none',
    ],
    ['a crane', ['air', 'land', 'water'],
      ['feathers'],
      ['legs', 'wings'], 'beak', 'none', 'none',
    ],
    ['a crocodile', ['land', 'water'],
      ['skin', 'scales'],
      ['legs'], 'mouth', 'tail', 'none',
    ],
    ['a crow', ['air'],
      ['feathers'],
      ['wings'], 'beak', 'tail', 'none',
    ],
    ['a deer', ['land'],
      ['fur'],
      ['legs'], 'snout', 'none', 'horns',
    ],
    ['a dinosaur', ['land'],
      ['skin'],
      ['legs'], 'snout', 'tail', 'none',
    ],
    ['a dog', ['land'],
      ['fur'],
      ['legs'], 'snout', 'tail', 'ears',
    ],
    ['a dolphin', ['water'],
      ['skin'],
      ['fins'], 'mouth', 'none', 'none',
    ],
    ['a donkey', ['land'],
      ['fur'],
      ['legs'], 'snout', 'tail', 'ears',
    ],
    ['a dove', ['air'],
      ['feathers'],
      ['wings'], 'beak', 'tail', 'none',
    ],
    ['a dragonfly', ['air'],
      ['skin'],
      ['wings'], 'mouth', 'none', 'none',
    ],
    ['a duck', ['air', 'land', 'water'],
      ['feathers'],
      ['wings'], 'beak', 'tail', 'none',
    ],
    ['an eagle', ['air'],
      ['feathers'],
      ['wings'], 'beak', 'tail', 'none',
    ],
    ['an eel', ['water'],
      ['skin'],
      ['body'], 'mouth', 'tail', 'none',
    ],
    ['an eland', ['land'],
      ['skin', 'fur'],
      ['legs'], 'snout', 'tail', 'horns',
    ],
    ['an elephant', ['land', 'water'],
      ['skin'],
      ['legs'], 'mouth', 'none', 'ears',
    ],
    ['an elk', ['land'],
      ['fur'],
      ['legs'], 'snout', 'none', 'ears',
    ],
    ['an emu', ['air', 'land'],
      ['feathers'],
      ['legs', 'wings'], 'beak', 'none', 'none',
    ],
    ['a falcon', ['air'],
      ['feathers'],
      ['wings'], 'beak', 'tail', 'none',
    ],
    ['a ferret', ['land'],
      ['fur'],
      ['legs'], 'snout', 'tail', 'ears',
    ],
    ['a fish', ['water'],
      ['scales'],
      ['fins'], 'mouth', 'none', 'none',
    ],
    ['a flamingo', ['air', 'land', 'water'],
      ['feathers'],
      ['legs', 'wings'], 'beak', 'tail', 'none',
    ],
    ['a fly', ['air'],
      ['skin'],
      ['wings'], 'mouth', 'none', 'none',
    ],
    ['a fox', ['land'],
      ['fur'],
      ['legs'], 'snout', 'tail', 'ears',
    ],
    ['a frog', ['land', 'water'],
      ['skin'],
      ['legs'], 'mouth', 'none', 'none',
    ],
    ['a gazelle', ['land'],
      ['hide'],
      ['legs'], 'snout', 'tail', 'horns',
    ],
    ['a gerbil', ['land'],
      ['fur'],
      ['legs'], 'snout', 'tail', 'ears',
    ],
    ['a giraffe', ['land'],
      ['skin', 'hide'],
      ['legs'], 'snout', 'tail', 'ears',
    ],
    ['a gnu', ['land'],
      ['hide'],
      ['legs'], 'snout', 'tail', 'horns',
    ],
    ['a goat', ['land'],
      ['fur'],
      ['legs'], 'mouth', 'tail', 'horns',
    ],
    ['a goose', ['air', 'water'],
      ['feathers'],
      ['wings'], 'mouth', 'none', 'none',
    ],
    ['a gorilla', ['land'],
      ['skin', 'fur'],
      ['legs'], 'mouth', 'none', 'ears',
    ],
    ['a grasshopper', ['land'],
      ['skin'],
      ['legs'], 'mouth', 'none', 'none',
    ],
    ['a guinea pig', ['land'],
      ['fur'],
      ['legs'], 'mouth', 'none', 'ears',
    ],
    ['a gull', ['air', 'land', 'water'],
      ['feathers'],
      ['wings'], 'beak', 'tail', 'none',
    ],
    ['a hamster', ['land'],
      ['fur'],
      ['legs'], 'mouth', 'none', 'ears',
    ],
    ['a hare', ['land'],
      ['fur'],
      ['legs'], 'mouth', 'none', 'ears',
    ],
    ['a hawk', ['air'],
      ['feathers'],
      ['wings'], 'beak', 'none', 'none',
    ],
    ['a hedgehog', ['land'],
      ['fur'],
      ['legs'], 'snout', 'none', 'ears',
    ],
    ['a herring', ['water'],
      ['scales'],
      ['fins'], 'mouth', 'none', 'none',
    ],
    ['a hippopotamus', ['land', 'water'],
      ['skin'],
      ['legs'], 'mouth', 'tail', 'ears',
    ],
    ['a hornet', ['air'],
      ['skin'],
      ['wings'], 'mouth', 'none', 'none',
    ],
    ['a horse', ['land'],
      ['hide', 'hair'],
      ['legs'], 'mouth', 'tail', 'ears',
    ],
    ['a hummingbird', ['air'],
      ['feathers'],
      ['wings'], 'beak', 'none', 'none',
    ],
    ['a hyena', ['land'],
      ['fur', 'hair'],
      ['legs'], 'snout', 'tail', 'ears',
    ],
    ['an ibex', ['land'],
      ['hide'],
      ['legs'], 'snout', 'none', 'horns',
    ],
    ['an ibis', ['air', 'land', 'water'],
      ['feathers'],
      ['legs', 'wings'], 'beak', 'tail', 'none',
    ],
    ['a jackal', ['land'],
      ['fur'],
      ['legs'], 'snout', 'tail', 'ears',
    ],
    ['a jaguar', ['land'],
      ['fur'],
      ['legs'], 'mouth', 'tail', 'ears',
    ],
    ['a jellyfish', ['water'],
      ['skin'],
      ['tentacles'], 'mouth', 'none', 'none',
    ],
    ['a kangaroo', ['land'],
      ['fur'],
      ['legs'], 'snout', 'tail', 'ears',
    ],
    ['a koala', ['land'],
      ['fur'],
      ['legs'], 'snout', 'none', 'ears',
    ],
    ['a komodo dragon', ['land'],
      ['skin'],
      ['legs'], 'snout', 'tail', 'none',
    ],
    ['a kudu', ['land'],
      ['hide'],
      ['legs'], 'snout', 'tail', 'horns',
    ],
    ['a lark', ['air'],
      ['feathers'],
      ['wings'], 'beak', 'tail', 'none',
    ],
    ['a lemur', ['land'],
      ['fur'],
      ['legs'], 'mouth', 'tail', 'ears',
    ],
    ['a leopard', ['land'],
      ['fur'],
      ['legs'], 'mouth', 'tail', 'ears',
    ],
    ['a lion', ['land'],
      ['fur', 'hair'],
      ['legs'], 'mouth', 'tail', 'ears',
    ],
    ['a llama', ['land'],
      ['fur'],
      ['legs'], 'snout', 'none', 'ears',
    ],
    ['a lobster', ['water'],
      ['armor'],
      ['arms'], 'mouth', 'tail', 'none',
    ],
    ['a locust', ['land'],
      ['skin'],
      ['legs'], 'mouth', 'none', 'none',
    ],
    ['a lyrebird', ['air'],
      ['feathers'],
      ['wings'], 'beak', 'tail', 'none',
    ],
    ['a magpie', ['air'],
      ['feathers'],
      ['wings'], 'beak', 'tail', 'none',
    ],
    ['a mammoth', ['land'],
      ['fur'],
      ['legs'], 'mouth', 'tail', 'ears',
    ],
    ['a manatee', ['water'],
      ['skin'],
      ['fins'], 'snout', 'none', 'none',
    ],
    ['a mandrill', ['land'],
      ['fur'],
      ['legs'], 'mouth', 'none', 'ears',
    ],
    ['a mole', ['land'],
      ['fur'],
      ['legs'], 'snout', 'none', 'ears',
    ],
    ['a mongoose', ['land'],
      ['fur'],
      ['legs'], 'snout', 'tail', 'ears',
    ],
    ['a monkey', ['land'],
      ['skin', 'fur'],
      ['legs'], 'mouth', 'tail', 'ears',
    ],
    ['a moose', ['land'],
      ['fur'],
      ['legs'], 'snout', 'none', 'horns',
    ],
    ['a mosquito', ['air'],
      ['skin'],
      ['wings'], 'mouth', 'none', 'none',
    ],
    ['a mouse', ['land'],
      ['fur'],
      ['legs'], 'snout', 'tail', 'ears',
    ],
    ['a narwhal', ['water'],
      ['skin'],
      ['fins'], 'mouth', 'none', 'none',
    ],
    ['a newt', ['land'],
      ['skin'],
      ['legs'], 'mouth', 'tail', 'none',
    ],
    ['a nightingale', ['air'],
      ['feathers'],
      ['wings'], 'beak', 'tail', 'none',
    ],
    ['an octopus', ['water'],
      ['skin'],
      ['tentacles'], 'mouth', 'none', 'ears',
    ],
    ['an okapi', ['land'],
      ['hide'],
      ['legs'], 'snout', 'tail', 'none',
    ],
    ['an opossum', ['land'],
      ['fur'],
      ['legs'], 'snout', 'tail', 'ears',
    ],
    ['an ostrich', ['air', 'land'],
      ['feathers'],
      ['legs', 'wings'], 'beak', 'tail', 'none',
    ],
    ['an otter', ['land', 'water'],
      ['fur'],
      ['legs'], 'mouth', 'tail', 'ears',
    ],
    ['an owl', ['air'],
      ['feathers'],
      ['wings'], 'beak', 'tail', 'none',
    ],
    ['a panda', ['land'],
      ['fur'],
      ['legs'], 'snout', 'none', 'ears',
    ],
    ['a panther', ['land'],
      ['fur'],
      ['legs'], 'mouth', 'tail', 'ears',
    ],
    ['a parrot', ['air'],
      ['feathers'],
      ['wings'], 'beak', 'tail', 'none',
    ],
    ['a partridge', ['air', 'land'],
      ['feathers'],
      ['wings'], 'beak', 'tail', 'none',
    ],
    ['a pelican', ['air', 'water'],
      ['feathers'],
      ['wings'], 'beak', 'tail', 'none',
    ],
    ['a penguin', ['land', 'water'],
      ['skin'],
      ['legs', 'wings'], 'beak', 'none', 'none',
    ],
    ['a pheasant', ['air', 'land'],
      ['feathers'],
      ['wings'], 'beak', 'tail', 'none',
    ],
    ['a pig', ['land'],
      ['skin'],
      ['legs'], 'snout', 'tail', 'ears',
    ],
    ['a pigeon', ['air'],
      ['feathers'],
      ['wings'], 'beak', 'tail', 'none',
    ],
    ['a pony', ['land'],
      ['fur'],
      ['legs'], 'snout', 'tail', 'ears',
    ],
    ['a porcupine', ['land'],
      ['fur'],
      ['legs'], 'snout', 'none', 'none',
    ],
    ['a prairie dog', ['land'],
      ['fur'],
      ['legs'], 'snout', 'none', 'ears',
    ],
    ['a quail', ['air', 'land'],
      ['feathers'],
      ['wings'], 'beak', 'tail', 'none',
    ],
    ['a rabbit', ['land'],
      ['fur'],
      ['legs'], 'mouth', 'tail', 'ears',
    ],
    ['a raccoon', ['land'],
      ['fur'],
      ['legs'], 'snout', 'tail', 'ears',
    ],
    ['a ram', ['land'],
      ['fur'],
      ['legs'], 'mouth', 'none', 'horns',
    ],
    ['a rat', ['land'],
      ['fur'],
      ['legs'], 'snout', 'tail', 'ears',
    ],
    ['a raven', ['air'],
      ['feathers'],
      ['wings'], 'beak', 'tail', 'none',
    ],
    ['a reindeer', ['land'],
      ['fur'],
      ['legs'], 'snout', 'none', 'horns',
    ],
    ['a rhinoceros', ['land'],
      ['skin'],
      ['legs'], 'mouth', 'tail', 'ears',
    ],
    ['a salamander', ['land', 'water'],
      ['skin'],
      ['legs'], 'mouth', 'tail', 'none',
    ],
    ['a salmon', ['water'],
      ['scales'],
      ['fins'], 'mouth', 'none', 'none',
    ],
    ['a sardine', ['water'],
      ['scales'],
      ['fins'], 'mouth', 'none', 'none',
    ],
    ['a sea lion', ['water'],
      ['skin'],
      ['fins'], 'mouth', 'none', 'none',
    ],
    ['a seahorse', ['water'],
      ['skin'],
      ['fins'], 'snout', 'tail', 'ears',
    ],
    ['a seal', ['land', 'water'],
      ['skin'],
      ['fins'], 'mouth', 'none', 'none',
    ],
    ['a shark', ['water'],
      ['skin'],
      ['fins'], 'mouth', 'none', 'none',
    ],
    ['a sheep', ['land'],
      ['fur'],
      ['legs'], 'snout', 'none', 'ears',
    ],
    ['a skunk', ['land'],
      ['fur'],
      ['legs'], 'snout', 'tail', 'ears',
    ],
    ['a sloth', ['land'],
      ['fur'],
      ['legs'], 'mouth', 'tail', 'none',
    ],
    ['a snake', ['land', 'water'],
      ['scales'],
      ['body'], 'mouth', 'tail', 'none',
    ],
    ['a spider', ['land'],
      ['skin'],
      ['legs'], 'mouth', 'none', 'none',
    ],
    ['a squirrel', ['land'],
      ['fur'],
      ['legs'], 'snout', 'tail', 'ears',
    ],
    ['a swan', ['water'],
      ['feathers'],
      ['wings'], 'beak', 'none', 'none',
    ],
    ['a tapir', ['land'],
      ['hide'],
      ['legs'], 'snout', 'none', 'ears',
    ],
    ['a tarsier', ['land'],
      ['fur'],
      ['legs'], 'mouth', 'none', 'ears',
    ],
    ['a termite', ['land'],
      ['skin'],
      ['legs'], 'mouth', 'none', 'none',
    ],
    ['a tiger', ['land'],
      ['fur'],
      ['legs'], 'mouth', 'tail', 'ears',
    ],
    ['a toad', ['land'],
      ['skin'],
      ['legs'], 'mouth', 'none', 'none',
    ],
    ['a turkey', ['air', 'land'],
      ['feathers'],
      ['wings'], 'beak', 'tail', 'none',
    ],
    ['a turtle', ['land', 'water'],
      ['shell', 'skin'],
      ['fins'], 'mouth', 'tail', 'none',
    ],
    ['a tortoise', ['land'],
      ['shell', 'skin'],
      ['legs'], 'mouth', 'tail', 'none',
    ],
    ['a wallaby', ['land'],
      ['fur'],
      ['legs'], 'snout', 'tail', 'ears',
    ],
    ['a walrus', ['land', 'water'],
      ['skin'],
      ['fins'], 'mouth', 'none', 'none',
    ],
    ['a wasp', ['air'],
      ['skin'],
      ['wings'], 'mouth', 'none', 'none',
    ],
    ['a weasel', ['land'],
      ['fur'],
      ['legs'], 'snout', 'tail', 'ears',
    ],
    ['a whale', ['water'],
      ['skin'],
      ['fins'], 'mouth', 'none', 'none',
    ],
    ['a wolf', ['land'],
      ['fur'],
      ['legs'], 'snout', 'tail', 'ears',
    ],
    ['a wolverine', ['land'],
      ['fur'],
      ['legs'], 'snout', 'tail', 'ears',
    ],
    ['a wombat', ['land'],
      ['fur'],
      ['legs'], 'snout', 'none', 'ears',
    ],
    ['a yak', ['land'],
      ['fur'],
      ['legs'], 'snout', 'none', 'horns',
    ],
    ['a zebra', ['land'],
      ['fur'],
      ['legs'], 'snout', 'tail', 'ears',
    ],
  ];
  const traits = [];
  let pkType = '';
  const rnPers = Math.floor(Math.random() * pers.length);
  const rnAmnt = Math.floor(Math.random() * amnt.length);
  const rnEvo = Math.floor(Math.random() * evo.length);
  const rnRsm = Math.floor(Math.random() * rsm.length);
  let rnd1 = Math.floor(Math.random() * pkm.length);
  const rnd2 = Math.floor(Math.random() * pkm[rnd1][1].length);
  if (pkm[rnd1][1][rnd2] === 'land') {
    rnd3 = Math.floor(Math.random() * lnd.length);
    pkType = lnd[rnd3];
  } else if (pkm[rnd1][1][rnd2] === 'water') {
    rnd3 = Math.floor(Math.random() * wtr.length);
    pkType = wtr[rnd3];
  } else if (pkm[rnd1][1][rnd2] === 'air') {
    rnd3 = Math.floor(Math.random() * air.length);
    pkType = air[rnd3];
  }
  if (pkType === 'bug') {
    pkm = [
      ['an ant', ['land'],
        ['skin'],
        ['legs'], 'mouth', 'none', 'none',
      ],
      ['a bee', ['air'],
        ['skin'],
        ['wings'], 'mouth', 'none', 'none',
      ],
      ['a butterfly', ['air'],
        ['skin'],
        ['wings'], 'mouth', 'none', 'none',
      ],
      ['a caterpillar', ['land'],
        ['skin'],
        ['legs'], 'mouth', 'none', 'none',
      ],
      ['a cockroach', ['land'],
        ['skin'],
        ['wings'], 'mouth', 'none', 'none',
      ],
      ['a dragonfly', ['air'],
        ['skin'],
        ['wings'], 'mouth', 'none', 'none',
      ],
      ['a fly', ['air'],
        ['skin'],
        ['wings'], 'mouth', 'none', 'none',
      ],
      ['a grasshopper', ['land'],
        ['skin'],
        ['legs'], 'mouth', 'none', 'none',
      ],
      ['a hornet', ['air'],
        ['skin'],
        ['wings'], 'mouth', 'none', 'none',
      ],
      ['a locust', ['land'],
        ['skin'],
        ['legs'], 'mouth', 'none', 'none',
      ],
      ['a mosquito', ['air'],
        ['skin'],
        ['wings'], 'mouth', 'none', 'none',
      ],
      ['a termite', ['land'],
        ['skin'],
        ['legs'], 'mouth', 'none', 'none',
      ],
      ['a wasp', ['air'],
        ['skin'],
        ['wings'], 'mouth', 'none', 'none',
      ],
    ];
    rnd1 = Math.floor(Math.random() * pkm.length);
  }
  if (pkType === 'dragon') {
    pkm = [
      ['an alligator', ['land', 'water'],
        ['skin', 'scales'],
        ['legs'], 'snout', 'tail', 'none',
      ],
      ['an armadillo', ['land'],
        ['fur'],
        ['legs'], 'snout', 'tail', 'ears',
      ],
      ['a cobra', ['land'],
        ['skin', 'scales'],
        ['body'], 'mouth', 'tail', 'none',
      ],
      ['a crocodile', ['land', 'water'],
        ['skin', 'scales'],
        ['legs'], 'mouth', 'tail', 'none',
      ],
      ['a dragonfly', ['air'],
        ['skin'],
        ['wings'], 'mouth', 'none', 'none',
      ],
      ['an eel', ['water'],
        ['skin'],
        ['body'], 'mouth', 'tail', 'none',
      ],
      ['a komodo dragon', ['land'],
        ['skin'],
        ['legs'], 'snout', 'tail', 'none',
      ],
      ['a narwhal', ['water'],
        ['skin'],
        ['fins'], 'mouth', 'none', 'none',
      ],
      ['a salamander', ['land', 'water'],
        ['skin'],
        ['legs'], 'mouth', 'tail', 'none',
      ],
      ['a seahorse', ['water'],
        ['skin'],
        ['fins'], 'snout', 'tail', 'ears',
      ],
      ['a snake', ['land', 'water'],
        ['scales'],
        ['body'], 'mouth', 'tail', 'none',
      ],
    ];
    rnd1 = Math.floor(Math.random() * pkm.length);
  }
  while (traits.length < 3) {
    for (i = 2; i < pkm[rnd1].length; i++) {
      rnTrait = Math.floor(Math.random() * 2);
      if (rnTrait === 1) {
        if (traits.length < 3 && pkm[rnd1][i] !== 'none') {
          if (i === 2 || i === 3) {
            rndmz = Math.floor(Math.random() * pkm[rnd1][i].length);
            traits.push(pkm[rnd1][i][rndmz]);
          } else {
            traits.push(pkm[rnd1][i]);
          }
          if (traits[0] === traits[1]) {
            traits.splice(1, 1);
          } else if (traits[1] === traits[2] || traits[0] === traits[2]) {
            traits.splice(2, 1);
          }
        }
      }
    }
  }
  const descrs = [];
  switch (pkType) {
    case 'bug':
      for (i = 0; i < 3; i++) {
        if (traits[i] === 'skin' || traits[i] === 'shell' || traits[i] === 'hair' || traits[i] === 'feathers' || traits[i] === 'hide' || traits[i] === 'fur' || traits[i] === 'armor' || traits[i] === 'scales') {
          rndm = Math.floor(Math.random() * bugSkin.length);
          description = `${bugSkin[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'wings') {
          rndm = Math.floor(Math.random() * bugWings.length);
          description = `${bugWings[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'legs') {
          rndm = Math.floor(Math.random() * bugLegs.length);
          description = `${bugLegs[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'arms' || traits[i] === 'tentacles') {
          rndm = Math.floor(Math.random() * bugArms.length);
          description = `${bugArms[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'mouth') {
          rndm = Math.floor(Math.random() * bugMouth.length);
          description = `a ${bugMouth[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'fins') {
          rndm = Math.floor(Math.random() * bugLegs.length);
          description = `${bugLegs[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'body') {
          rndm = Math.floor(Math.random() * bugWings.length);
          description = `the added bonus of ${bugWings[rndm]} wings`;
          descrs.push(description);
        }
      }
      rndPlace = Math.floor(Math.random() * placeBug.length);
      place = placeBug[rndPlace];
      attk1 = Math.floor(Math.random() * bugAttk.length);
      atkOne = bugAttk[attk1];
      attk2 = Math.floor(Math.random() * bugAttk.length);
      while (attk1 === attk2) {
        attk2 = Math.floor(Math.random() * bugAttk.length);
      }
      atkTwo = bugAttk[attk2];
      break;
    case 'dark':
      for (i = 0; i < 3; i++) {
        if (traits[i] === 'skin' || traits[i] === 'shell' || traits[i] === 'hair' || traits[i] === 'feathers' || traits[i] === 'hide' || traits[i] === 'fur' || traits[i] === 'armor' || traits[i] === 'scales') {
          rndm = Math.floor(Math.random() * darkSkin.length);
          description = `${darkSkin[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'wings') {
          rndm = Math.floor(Math.random() * darkWings.length);
          description = `${darkWings[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'body') {
          rndm = Math.floor(Math.random() * darkWings.length);
          description = `the added bonus of ${darkWings[rndm]} wings`;
          descrs.push(description);
        } else if (traits[i] === 'legs') {
          rndm = Math.floor(Math.random() * darkLegs.length);
          description = `${darkLegs[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'arms' || traits[i] === 'tentacles') {
          rndm = Math.floor(Math.random() * darkArms.length);
          description = `${darkArms[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'mouth') {
          rndm = Math.floor(Math.random() * darkMouth.length);
          description = `a ${darkMouth[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'beak') {
          rndm = Math.floor(Math.random() * darkBeak.length);
          description = `a ${darkBeak[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'snout') {
          rndm = Math.floor(Math.random() * darkSnout.length);
          description = `a ${darkSnout[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'ears') {
          rndm = Math.floor(Math.random() * darkEars.length);
          description = `${darkEars[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'horns') {
          rndm = Math.floor(Math.random() * darkHorns.length);
          description = `${darkHorns[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'tail') {
          rndm = Math.floor(Math.random() * darkTail.length);
          description = darkTail[rndm];
          descrs.push(description);
        } else if (traits[i] === 'fins') {
          rndm = Math.floor(Math.random() * darkLegs.length);
          description = `${darkLegs[rndm]} ${traits[i]}`;
          descrs.push(description);
        }
      }
      rndPlace = Math.floor(Math.random() * placeDark.length);
      place = placeDark[rndPlace];
      attk1 = Math.floor(Math.random() * darkAttk.length);
      atkOne = darkAttk[attk1];
      attk2 = Math.floor(Math.random() * darkAttk.length);
      while (attk1 === attk2) {
        attk2 = Math.floor(Math.random() * darkAttk.length);
      }
      atkTwo = darkAttk[attk2];
      break;
    case 'dragon':
      for (i = 0; i < 3; i++) {
        if (traits[i] === 'skin' || traits[i] === 'shell' || traits[i] === 'hair' || traits[i] === 'feathers' || traits[i] === 'hide' || traits[i] === 'fur' || traits[i] === 'armor' || traits[i] === 'scales') {
          rndm = Math.floor(Math.random() * dragonSkin.length);
          description = `${dragonSkin[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'wings') {
          rndm = Math.floor(Math.random() * dragonWings.length);
          description = `${dragonWings[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'legs') {
          rndm = Math.floor(Math.random() * dragonLegs.length);
          description = `${dragonLegs[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'arms' || traits[i] === 'tentacles') {
          rndm = Math.floor(Math.random() * dragonArms.length);
          description = `${dragonArms[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'mouth' || traits[i] === 'snout' || traits[i] === 'beak') {
          rndm = Math.floor(Math.random() * dragonMouth.length);
          description = `a ${dragonMouth[rndm]} mouth`;
          descrs.push(description);
        } else if (traits[i] === 'ears') {
          rndm = Math.floor(Math.random() * dragonEars.length);
          description = `${dragonEars[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'horns') {
          rndm = Math.floor(Math.random() * dragonHorns.length);
          description = `${dragonHorns[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'tail') {
          rndm = Math.floor(Math.random() * dragonTail.length);
          description = dragonTail[rndm];
          descrs.push(description);
        } else if (traits[i] === 'fins') {
          rndm = Math.floor(Math.random() * dragonLegs.length);
          description = `${dragonLegs[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'body') {
          rndm = Math.floor(Math.random() * dragonWings.length);
          description = `the added bonus of ${dragonWings[rndm]} wings`;
          descrs.push(description);
        }
      }
      rndPlace = Math.floor(Math.random() * placeDragon.length);
      place = placeDragon[rndPlace];
      attk1 = Math.floor(Math.random() * dragonAttk.length);
      atkOne = dragonAttk[attk1];
      attk2 = Math.floor(Math.random() * dragonAttk.length);
      while (attk1 === attk2) {
        attk2 = Math.floor(Math.random() * dragonAttk.length);
      }
      atkTwo = dragonAttk[attk2];
      break;
    case 'electric':
      for (i = 0; i < 3; i++) {
        if (traits[i] === 'skin' || traits[i] === 'shell' || traits[i] === 'hair' || traits[i] === 'feathers' || traits[i] === 'hide' || traits[i] === 'fur' || traits[i] === 'armor' || traits[i] === 'scales') {
          rndm = Math.floor(Math.random() * elecSkin.length);
          description = `${elecSkin[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'wings') {
          rndm = Math.floor(Math.random() * elecWings.length);
          description = `${elecWings[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'legs') {
          rndm = Math.floor(Math.random() * elecLegs.length);
          description = `${elecLegs[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'arms' || traits[i] === 'tentacles') {
          rndm = Math.floor(Math.random() * elecArms.length);
          description = `${elecArms[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'mouth') {
          rndm = Math.floor(Math.random() * elecMouth.length);
          description = `a ${elecMouth[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'beak') {
          rndm = Math.floor(Math.random() * elecBeak.length);
          description = `a ${elecBeak[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'snout') {
          rndm = Math.floor(Math.random() * elecSnout.length);
          description = `a ${elecSnout[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'ears') {
          rndm = Math.floor(Math.random() * elecEars.length);
          description = `${elecEars[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'horns') {
          rndm = Math.floor(Math.random() * elecHorns.length);
          description = `${elecHorns[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'tail') {
          rndm = Math.floor(Math.random() * elecTail.length);
          description = elecTail[rndm];
          descrs.push(description);
        } else if (traits[i] === 'fins') {
          rndm = Math.floor(Math.random() * elecLegs.length);
          description = `${elecLegs[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'body') {
          rndm = Math.floor(Math.random() * elecWings.length);
          description = `the added bonus of ${elecWings[rndm]} wings`;
          descrs.push(description);
        }
      }
      rndPlace = Math.floor(Math.random() * placeElectric.length);
      place = placeElectric[rndPlace];
      attk1 = Math.floor(Math.random() * electricAttk.length);
      atkOne = electricAttk[attk1];
      attk2 = Math.floor(Math.random() * electricAttk.length);
      while (attk1 === attk2) {
        attk2 = Math.floor(Math.random() * electricAttk.length);
      }
      atkTwo = electricAttk[attk2];
      break;
    case 'fairy':
      for (i = 0; i < 3; i++) {
        if (traits[i] === 'skin' || traits[i] === 'shell' || traits[i] === 'hair' || traits[i] === 'feathers' || traits[i] === 'hide' || traits[i] === 'fur' || traits[i] === 'armor' || traits[i] === 'scales') {
          rndm = Math.floor(Math.random() * fairySkin.length);
          description = `${fairySkin[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'wings') {
          rndm = Math.floor(Math.random() * fairyWings.length);
          description = `${fairyWings[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'legs') {
          rndm = Math.floor(Math.random() * fairyLegs.length);
          description = `${fairyLegs[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'arms' || traits[i] === 'tentacles') {
          rndm = Math.floor(Math.random() * fairyArms.length);
          description = `${fairyArms[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'mouth') {
          rndm = Math.floor(Math.random() * fairyMouth.length);
          description = `a ${fairyMouth[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'beak') {
          rndm = Math.floor(Math.random() * fairyBeak.length);
          description = `a ${fairyBeak[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'snout') {
          rndm = Math.floor(Math.random() * fairySnout.length);
          description = `a ${fairySnout[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'ears') {
          rndm = Math.floor(Math.random() * fairyEars.length);
          description = `${fairyEars[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'horns') {
          rndm = Math.floor(Math.random() * fairyHorns.length);
          description = `${fairyHorns[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'tail') {
          rndm = Math.floor(Math.random() * fairyTail.length);
          description = fairyTail[rndm];
          descrs.push(description);
        } else if (traits[i] === 'fins') {
          rndm = Math.floor(Math.random() * fairyLegs.length);
          description = `${fairyLegs[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'body') {
          rndm = Math.floor(Math.random() * fairyWings.length);
          description = `the added bonus of ${fairyWings[rndm]} wings`;
          descrs.push(description);
        }
      }
      rndPlace = Math.floor(Math.random() * placeFairy.length);
      place = placeFairy[rndPlace];
      attk1 = Math.floor(Math.random() * fairyAttk.length);
      atkOne = fairyAttk[attk1];
      attk2 = Math.floor(Math.random() * fairyAttk.length);
      while (attk1 === attk2) {
        attk2 = Math.floor(Math.random() * fairyAttk.length);
      }
      atkTwo = fairyAttk[attk2];
      break;
    case 'fighting':
      for (i = 0; i < 3; i++) {
        if (traits[i] === 'skin' || traits[i] === 'shell' || traits[i] === 'hair' || traits[i] === 'feathers' || traits[i] === 'hide' || traits[i] === 'fur' || traits[i] === 'armor' || traits[i] === 'scales') {
          rndm = Math.floor(Math.random() * fightSkin.length);
          description = `${fightSkin[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'wings') {
          rndm = Math.floor(Math.random() * fightWings.length);
          description = `${fightWings[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'legs') {
          rndm = Math.floor(Math.random() * fightLegs.length);
          description = `${fightLegs[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'arms' || traits[i] === 'tentacles') {
          rndm = Math.floor(Math.random() * fightArms.length);
          description = `${fightArms[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'mouth') {
          rndm = Math.floor(Math.random() * fightMouth.length);
          description = `a ${fightMouth[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'beak') {
          rndm = Math.floor(Math.random() * fightBeak.length);
          description = `a ${fightBeak[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'snout') {
          rndm = Math.floor(Math.random() * fightSnout.length);
          description = `a ${fightSnout[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'ears') {
          rndm = Math.floor(Math.random() * fightEars.length);
          description = `${fightEars[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'horns') {
          rndm = Math.floor(Math.random() * fightHorns.length);
          description = `${fightHorns[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'tail') {
          rndm = Math.floor(Math.random() * fightTail.length);
          description = fightTail[rndm];
          descrs.push(description);
        } else if (traits[i] === 'fins') {
          rndm = Math.floor(Math.random() * fightLegs.length);
          description = `${fightLegs[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'body') {
          rndm = Math.floor(Math.random() * fightWings.length);
          description = `the added bonus of ${fightWings[rndm]} wings`;
          descrs.push(description);
        }
      }
      rndPlace = Math.floor(Math.random() * placeFighting.length);
      place = placeFighting[rndPlace];
      attk1 = Math.floor(Math.random() * fightingAttk.length);
      atkOne = fightingAttk[attk1];
      attk2 = Math.floor(Math.random() * fightingAttk.length);
      while (attk1 === attk2) {
        attk2 = Math.floor(Math.random() * fightingAttk.length);
      }
      atkTwo = fightingAttk[attk2];
      break;
    case 'fire':
      for (i = 0; i < 3; i++) {
        if (traits[i] === 'skin' || traits[i] === 'shell' || traits[i] === 'hair' || traits[i] === 'feathers' || traits[i] === 'hide' || traits[i] === 'fur' || traits[i] === 'armor' || traits[i] === 'scales') {
          rndm = Math.floor(Math.random() * fireSkin.length);
          description = `${fireSkin[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'wings') {
          rndm = Math.floor(Math.random() * fireWings.length);
          description = `${fireWings[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'legs') {
          rndm = Math.floor(Math.random() * fireLegs.length);
          description = `${fireLegs[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'arms' || traits[i] === 'tentacles') {
          rndm = Math.floor(Math.random() * fireArms.length);
          description = `${fireArms[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'mouth') {
          rndm = Math.floor(Math.random() * fireMouth.length);
          description = `a ${fireMouth[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'beak') {
          rndm = Math.floor(Math.random() * fireBeak.length);
          description = `a ${fireBeak[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'snout') {
          rndm = Math.floor(Math.random() * fireSnout.length);
          description = `a ${fireSnout[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'ears') {
          rndm = Math.floor(Math.random() * fireEars.length);
          description = `${fireEars[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'horns') {
          rndm = Math.floor(Math.random() * fireHorns.length);
          description = `${fireHorns[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'tail') {
          rndm = Math.floor(Math.random() * fireTail.length);
          description = fireTail[rndm];
          descrs.push(description);
        } else if (traits[i] === 'fins') {
          rndm = Math.floor(Math.random() * fireLegs.length);
          description = `${fireLegs[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'body') {
          rndm = Math.floor(Math.random() * fireWings.length);
          description = `the added bonus of ${fireWings[rndm]} wings`;
          descrs.push(description);
        }
      }
      rndPlace = Math.floor(Math.random() * placeFire.length);
      place = placeFire[rndPlace];
      attk1 = Math.floor(Math.random() * fireAttk.length);
      atkOne = fireAttk[attk1];
      attk2 = Math.floor(Math.random() * fireAttk.length);
      while (attk1 === attk2) {
        attk2 = Math.floor(Math.random() * fireAttk.length);
      }
      atkTwo = fireAttk[attk2];
      break;
    case 'flying':
      for (i = 0; i < 3; i++) {
        if (traits[i] === 'skin' || traits[i] === 'shell' || traits[i] === 'hair' || traits[i] === 'feathers' || traits[i] === 'hide' || traits[i] === 'fur' || traits[i] === 'armor' || traits[i] === 'scales') {
          rndm = Math.floor(Math.random() * flySkin.length);
          description = `${flySkin[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'wings') {
          rndm = Math.floor(Math.random() * flyWings.length);
          description = `${flyWings[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'legs') {
          rndm = Math.floor(Math.random() * flyLegs.length);
          description = `${flyLegs[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'arms' || traits[i] === 'tentacles') {
          rndm = Math.floor(Math.random() * flyArms.length);
          description = `${flyArms[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'mouth') {
          rndm = Math.floor(Math.random() * flyMouth.length);
          description = `a ${flyMouth[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'beak') {
          rndm = Math.floor(Math.random() * flyBeak.length);
          description = `a ${flyBeak[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'snout') {
          rndm = Math.floor(Math.random() * flySnout.length);
          description = `a ${flySnout[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'ears') {
          rndm = Math.floor(Math.random() * flyEars.length);
          description = `${flyEars[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'horns') {
          rndm = Math.floor(Math.random() * flyHorns.length);
          description = `${flyHorns[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'tail') {
          rndm = Math.floor(Math.random() * flyTail.length);
          description = flyTail[rndm];
          descrs.push(description);
        } else if (traits[i] === 'fins') {
          rndm = Math.floor(Math.random() * flyLegs.length);
          description = `${flyLegs[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'body') {
          rndm = Math.floor(Math.random() * flyWings.length);
          description = `the added bonus of ${flyWings[rndm]} wings`;
          descrs.push(description);
        }
      }
      rndPlace = Math.floor(Math.random() * placeFlying.length);
      place = placeFlying[rndPlace];
      attk1 = Math.floor(Math.random() * flyingAttk.length);
      atkOne = flyingAttk[attk1];
      attk2 = Math.floor(Math.random() * flyingAttk.length);
      while (attk1 === attk2) {
        attk2 = Math.floor(Math.random() * flyingAttk.length);
      }
      atkTwo = flyingAttk[attk2];
      break;
    case 'ghost':
      for (i = 0; i < 3; i++) {
        if (traits[i] === 'skin' || traits[i] === 'shell' || traits[i] === 'hair' || traits[i] === 'feathers' || traits[i] === 'hide' || traits[i] === 'fur' || traits[i] === 'armor' || traits[i] === 'scales') {
          rndm = Math.floor(Math.random() * ghostSkin.length);
          description = `${ghostSkin[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'wings') {
          rndm = Math.floor(Math.random() * ghostWings.length);
          description = `${ghostWings[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'legs') {
          rndm = Math.floor(Math.random() * ghostLegs.length);
          description = `${ghostLegs[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'arms' || traits[i] === 'tentacles') {
          rndm = Math.floor(Math.random() * ghostArms.length);
          description = `${ghostArms[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'mouth') {
          rndm = Math.floor(Math.random() * ghostMouth.length);
          description = `a ${ghostMouth[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'beak') {
          rndm = Math.floor(Math.random() * ghostBeak.length);
          description = `a ${ghostBeak[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'snout') {
          rndm = Math.floor(Math.random() * ghostSnout.length);
          description = `a ${ghostSnout[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'ears') {
          rndm = Math.floor(Math.random() * ghostEars.length);
          description = `${ghostEars[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'horns') {
          rndm = Math.floor(Math.random() * ghostHorns.length);
          description = `${ghostHorns[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'tail') {
          rndm = Math.floor(Math.random() * ghostTail.length);
          description = ghostTail[rndm];
          descrs.push(description);
        } else if (traits[i] === 'fins') {
          rndm = Math.floor(Math.random() * ghostLegs.length);
          description = `${ghostLegs[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'body') {
          rndm = Math.floor(Math.random() * ghostWings.length);
          description = `the added bonus of ${ghostWings[rndm]} wings`;
          descrs.push(description);
        }
      }
      rndPlace = Math.floor(Math.random() * placeGhost.length);
      place = placeGhost[rndPlace];
      attk1 = Math.floor(Math.random() * ghostAttk.length);
      atkOne = ghostAttk[attk1];
      attk2 = Math.floor(Math.random() * ghostAttk.length);
      while (attk1 === attk2) {
        attk2 = Math.floor(Math.random() * ghostAttk.length);
      }
      atkTwo = ghostAttk[attk2];
      break;
    case 'grass':
      for (i = 0; i < 3; i++) {
        if (traits[i] === 'skin' || traits[i] === 'shell' || traits[i] === 'hair' || traits[i] === 'feathers' || traits[i] === 'hide' || traits[i] === 'fur' || traits[i] === 'armor' || traits[i] === 'scales') {
          rndm = Math.floor(Math.random() * grassSkin.length);
          description = `${grassSkin[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'wings') {
          rndm = Math.floor(Math.random() * grassWings.length);
          description = `${grassWings[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'legs') {
          rndm = Math.floor(Math.random() * grassLegs.length);
          description = `${grassLegs[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'arms' || traits[i] === 'tentacles') {
          rndm = Math.floor(Math.random() * grassArms.length);
          description = `${grassArms[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'mouth') {
          rndm = Math.floor(Math.random() * grassMouth.length);
          description = `a ${grassMouth[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'beak') {
          rndm = Math.floor(Math.random() * grassBeak.length);
          description = `a ${grassBeak[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'snout') {
          rndm = Math.floor(Math.random() * grassSnout.length);
          description = `a ${grassSnout[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'ears') {
          rndm = Math.floor(Math.random() * grassEars.length);
          description = `${grassEars[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'horns') {
          rndm = Math.floor(Math.random() * grassHorns.length);
          description = `${grassHorns[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'tail') {
          rndm = Math.floor(Math.random() * grassTail.length);
          description = grassTail[rndm];
          descrs.push(description);
        } else if (traits[i] === 'fins') {
          rndm = Math.floor(Math.random() * grassLegs.length);
          description = `${grassLegs[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'body') {
          rndm = Math.floor(Math.random() * grassWings.length);
          description = `the added bonus of ${grassWings[rndm]} wings`;
          descrs.push(description);
        }
      }
      rndPlace = Math.floor(Math.random() * placeGrass.length);
      place = placeGrass[rndPlace];
      attk1 = Math.floor(Math.random() * grassAttk.length);
      atkOne = grassAttk[attk1];
      attk2 = Math.floor(Math.random() * grassAttk.length);
      while (attk1 === attk2) {
        attk2 = Math.floor(Math.random() * grassAttk.length);
      }
      atkTwo = grassAttk[attk2];
      break;
    case 'ground':
      for (i = 0; i < 3; i++) {
        if (traits[i] === 'skin' || traits[i] === 'shell' || traits[i] === 'hair' || traits[i] === 'feathers' || traits[i] === 'hide' || traits[i] === 'fur' || traits[i] === 'armor' || traits[i] === 'scales') {
          rndm = Math.floor(Math.random() * groundSkin.length);
          description = `${groundSkin[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'wings') {
          rndm = Math.floor(Math.random() * groundWings.length);
          description = `${groundWings[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'legs') {
          rndm = Math.floor(Math.random() * groundLegs.length);
          description = `${groundLegs[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'arms' || traits[i] === 'tentacles') {
          rndm = Math.floor(Math.random() * groundArms.length);
          description = `${groundArms[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'mouth') {
          rndm = Math.floor(Math.random() * groundMouth.length);
          description = `a ${groundMouth[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'beak') {
          rndm = Math.floor(Math.random() * groundBeak.length);
          description = `a ${groundBeak[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'snout') {
          rndm = Math.floor(Math.random() * groundSnout.length);
          description = `a ${groundSnout[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'ears') {
          rndm = Math.floor(Math.random() * groundEars.length);
          description = `${groundEars[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'horns') {
          rndm = Math.floor(Math.random() * groundHorns.length);
          description = `${groundHorns[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'tail') {
          rndm = Math.floor(Math.random() * groundTail.length);
          description = groundTail[rndm];
          descrs.push(description);
        } else if (traits[i] === 'fins') {
          rndm = Math.floor(Math.random() * groundLegs.length);
          description = `${groundLegs[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'body') {
          rndm = Math.floor(Math.random() * groundWings.length);
          description = `the added bonus of ${groundWings[rndm]} wings`;
          descrs.push(description);
        }
      }
      rndPlace = Math.floor(Math.random() * placeGround.length);
      place = placeGround[rndPlace];
      attk1 = Math.floor(Math.random() * groundAttk.length);
      atkOne = groundAttk[attk1];
      attk2 = Math.floor(Math.random() * groundAttk.length);
      while (attk1 === attk2) {
        attk2 = Math.floor(Math.random() * groundAttk.length);
      }
      atkTwo = groundAttk[attk2];
      break;
    case 'ice':
      for (i = 0; i < 3; i++) {
        if (traits[i] === 'skin' || traits[i] === 'shell' || traits[i] === 'hair' || traits[i] === 'feathers' || traits[i] === 'hide' || traits[i] === 'fur' || traits[i] === 'armor' || traits[i] === 'scales') {
          rndm = Math.floor(Math.random() * iceSkin.length);
          description = `${iceSkin[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'wings') {
          rndm = Math.floor(Math.random() * iceWings.length);
          description = `${iceWings[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'legs') {
          rndm = Math.floor(Math.random() * iceLegs.length);
          description = `${iceLegs[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'arms' || traits[i] === 'tentacles') {
          rndm = Math.floor(Math.random() * iceArms.length);
          description = `${iceArms[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'mouth') {
          rndm = Math.floor(Math.random() * iceMouth.length);
          description = `a ${iceMouth[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'beak') {
          rndm = Math.floor(Math.random() * iceBeak.length);
          description = `a ${iceBeak[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'snout') {
          rndm = Math.floor(Math.random() * iceSnout.length);
          description = `a ${iceSnout[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'ears') {
          rndm = Math.floor(Math.random() * iceEars.length);
          description = `${iceEars[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'horns') {
          rndm = Math.floor(Math.random() * iceHorns.length);
          description = `${iceHorns[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'tail') {
          rndm = Math.floor(Math.random() * iceTail.length);
          description = iceTail[rndm];
          descrs.push(description);
        } else if (traits[i] === 'fins') {
          rndm = Math.floor(Math.random() * iceLegs.length);
          description = `${iceLegs[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'body') {
          rndm = Math.floor(Math.random() * iceWings.length);
          description = `the added bonus of ${iceWings[rndm]} wings`;
          descrs.push(description);
        }
      }
      rndPlace = Math.floor(Math.random() * placeIce.length);
      place = placeIce[rndPlace];
      attk1 = Math.floor(Math.random() * iceAttk.length);
      atkOne = iceAttk[attk1];
      attk2 = Math.floor(Math.random() * iceAttk.length);
      while (attk1 === attk2) {
        attk2 = Math.floor(Math.random() * iceAttk.length);
      }
      atkTwo = iceAttk[attk2];
      break;
    case 'normal':
      for (i = 0; i < 3; i++) {
        if (traits[i] === 'skin' || traits[i] === 'shell' || traits[i] === 'hair' || traits[i] === 'feathers' || traits[i] === 'hide' || traits[i] === 'fur' || traits[i] === 'armor' || traits[i] === 'scales') {
          rndm = Math.floor(Math.random() * normSkin.length);
          description = `${normSkin[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'wings') {
          rndm = Math.floor(Math.random() * normWings.length);
          description = `${normWings[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'legs') {
          rndm = Math.floor(Math.random() * normLegs.length);
          description = `${normLegs[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'arms' || traits[i] === 'tentacles') {
          rndm = Math.floor(Math.random() * normArms.length);
          description = `${normArms[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'mouth') {
          rndm = Math.floor(Math.random() * normMouth.length);
          description = `a ${normMouth[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'beak') {
          rndm = Math.floor(Math.random() * normBeak.length);
          description = `a ${normBeak[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'snout') {
          rndm = Math.floor(Math.random() * normSnout.length);
          description = `a ${normSnout[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'ears') {
          rndm = Math.floor(Math.random() * normEars.length);
          description = `${normEars[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'horns') {
          rndm = Math.floor(Math.random() * normHorns.length);
          description = `${normHorns[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'tail') {
          rndm = Math.floor(Math.random() * normTail.length);
          description = normTail[rndm];
          descrs.push(description);
        } else if (traits[i] === 'fins') {
          rndm = Math.floor(Math.random() * normLegs.length);
          description = `${normLegs[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'body') {
          rndm = Math.floor(Math.random() * normWings.length);
          description = `the added bonus of ${normWings[rndm]} wings`;
          descrs.push(description);
        }
      }
      rndPlace = Math.floor(Math.random() * placeNormal.length);
      place = placeNormal[rndPlace];
      attk1 = Math.floor(Math.random() * normalAttk.length);
      atkOne = normalAttk[attk1];
      attk2 = Math.floor(Math.random() * normalAttk.length);
      while (attk1 === attk2) {
        attk2 = Math.floor(Math.random() * normalAttk.length);
      }
      atkTwo = normalAttk[attk2];
      break;
    case 'poison':
      for (i = 0; i < 3; i++) {
        if (traits[i] === 'skin' || traits[i] === 'shell' || traits[i] === 'hair' || traits[i] === 'feathers' || traits[i] === 'hide' || traits[i] === 'fur' || traits[i] === 'armor' || traits[i] === 'scales') {
          rndm = Math.floor(Math.random() * poisonSkin.length);
          description = `${poisonSkin[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'wings') {
          rndm = Math.floor(Math.random() * poisonWings.length);
          description = `${poisonWings[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'legs') {
          rndm = Math.floor(Math.random() * poisonLegs.length);
          description = `${poisonLegs[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'arms' || traits[i] === 'tentacles') {
          rndm = Math.floor(Math.random() * poisonArms.length);
          description = `${poisonArms[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'mouth') {
          rndm = Math.floor(Math.random() * poisonMouth.length);
          description = `a ${poisonMouth[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'beak') {
          rndm = Math.floor(Math.random() * poisonBeak.length);
          description = `a ${poisonBeak[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'snout') {
          rndm = Math.floor(Math.random() * poisonSnout.length);
          description = `a ${poisonSnout[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'ears') {
          rndm = Math.floor(Math.random() * poisonEars.length);
          description = `${poisonEars[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'horns') {
          rndm = Math.floor(Math.random() * poisonHorns.length);
          description = `${poisonHorns[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'tail') {
          rndm = Math.floor(Math.random() * poisonTail.length);
          description = poisonTail[rndm];
          descrs.push(description);
        } else if (traits[i] === 'fins') {
          rndm = Math.floor(Math.random() * poisonLegs.length);
          description = `${poisonLegs[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'body') {
          rndm = Math.floor(Math.random() * poisonWings.length);
          description = `the added bonus of ${poisonWings[rndm]} wings`;
          descrs.push(description);
        }
      }
      rndPlace = Math.floor(Math.random() * placePoison.length);
      place = placePoison[rndPlace];
      attk1 = Math.floor(Math.random() * poisonAttk.length);
      atkOne = poisonAttk[attk1];
      attk2 = Math.floor(Math.random() * poisonAttk.length);
      while (attk1 === attk2) {
        attk2 = Math.floor(Math.random() * poisonAttk.length);
      }
      atkTwo = poisonAttk[attk2];
      break;
    case 'psychic':
      for (i = 0; i < 3; i++) {
        if (traits[i] === 'skin' || traits[i] === 'shell' || traits[i] === 'hair' || traits[i] === 'feathers' || traits[i] === 'hide' || traits[i] === 'fur' || traits[i] === 'armor' || traits[i] === 'scales') {
          rndm = Math.floor(Math.random() * psySkin.length);
          description = `${psySkin[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'wings') {
          rndm = Math.floor(Math.random() * psyWings.length);
          description = `${psyWings[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'legs') {
          rndm = Math.floor(Math.random() * psyLegs.length);
          description = `${psyLegs[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'arms' || traits[i] === 'tentacles') {
          rndm = Math.floor(Math.random() * psyArms.length);
          description = `${psyArms[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'mouth') {
          rndm = Math.floor(Math.random() * psyMouth.length);
          description = `a ${psyMouth[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'beak') {
          rndm = Math.floor(Math.random() * psyBeak.length);
          description = `a ${psyBeak[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'snout') {
          rndm = Math.floor(Math.random() * psySnout.length);
          description = `a ${psySnout[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'ears') {
          rndm = Math.floor(Math.random() * psyEars.length);
          description = `${psyEars[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'horns') {
          rndm = Math.floor(Math.random() * psyHorns.length);
          description = `${psyHorns[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'tail') {
          rndm = Math.floor(Math.random() * psyTail.length);
          description = psyTail[rndm];
          descrs.push(description);
        } else if (traits[i] === 'fins') {
          rndm = Math.floor(Math.random() * psyLegs.length);
          description = `${psyLegs[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'body') {
          rndm = Math.floor(Math.random() * psyWings.length);
          description = `the added bonus of ${psyWings[rndm]} wings`;
          descrs.push(description);
        }
      }
      rndPlace = Math.floor(Math.random() * placePsychic.length);
      place = placePsychic[rndPlace];
      attk1 = Math.floor(Math.random() * psychicAttk.length);
      atkOne = psychicAttk[attk1];
      attk2 = Math.floor(Math.random() * psychicAttk.length);
      while (attk1 === attk2) {
        attk2 = Math.floor(Math.random() * psychicAttk.length);
      }
      atkTwo = psychicAttk[attk2];
      break;
    case 'rock':
      for (i = 0; i < 3; i++) {
        if (traits[i] === 'skin' || traits[i] === 'shell' || traits[i] === 'hair' || traits[i] === 'feathers' || traits[i] === 'hide' || traits[i] === 'fur' || traits[i] === 'armor' || traits[i] === 'scales') {
          rndm = Math.floor(Math.random() * rockSkin.length);
          description = `${rockSkin[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'wings') {
          rndm = Math.floor(Math.random() * rockWings.length);
          description = `${rockWings[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'legs') {
          rndm = Math.floor(Math.random() * rockLegs.length);
          description = `${rockLegs[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'arms' || traits[i] === 'tentacles') {
          rndm = Math.floor(Math.random() * rockArms.length);
          description = `${rockArms[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'mouth') {
          rndm = Math.floor(Math.random() * rockMouth.length);
          description = `a ${rockMouth[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'beak') {
          rndm = Math.floor(Math.random() * rockBeak.length);
          description = `a ${rockBeak[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'snout') {
          rndm = Math.floor(Math.random() * rockSnout.length);
          description = `a ${rockSnout[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'ears') {
          rndm = Math.floor(Math.random() * rockEars.length);
          description = `${rockEars[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'horns') {
          rndm = Math.floor(Math.random() * rockHorns.length);
          description = `${rockHorns[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'tail') {
          rndm = Math.floor(Math.random() * rockTail.length);
          description = rockTail[rndm];
          descrs.push(description);
        } else if (traits[i] === 'fins') {
          rndm = Math.floor(Math.random() * rockLegs.length);
          description = `${rockLegs[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'body') {
          rndm = Math.floor(Math.random() * rockWings.length);
          description = `the added bonus of ${rockWings[rndm]} wings`;
          descrs.push(description);
        }
      }
      rndPlace = Math.floor(Math.random() * placeRock.length);
      place = placeRock[rndPlace];
      attk1 = Math.floor(Math.random() * rockAttk.length);
      atkOne = rockAttk[attk1];
      attk2 = Math.floor(Math.random() * rockAttk.length);
      while (attk1 === attk2) {
        attk2 = Math.floor(Math.random() * rockAttk.length);
      }
      atkTwo = rockAttk[attk2];
      break;
    case 'steel':
      for (i = 0; i < 3; i++) {
        if (traits[i] === 'skin' || traits[i] === 'shell' || traits[i] === 'hair' || traits[i] === 'feathers' || traits[i] === 'hide' || traits[i] === 'fur' || traits[i] === 'armor' || traits[i] === 'scales') {
          rndm = Math.floor(Math.random() * steelSkin.length);
          description = `${steelSkin[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'wings') {
          rndm = Math.floor(Math.random() * steelWings.length);
          description = `${steelWings[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'legs') {
          rndm = Math.floor(Math.random() * steelLegs.length);
          description = `${steelLegs[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'arms' || traits[i] === 'tentacles') {
          rndm = Math.floor(Math.random() * steelArms.length);
          description = `${steelArms[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'mouth') {
          rndm = Math.floor(Math.random() * steelMouth.length);
          description = `a ${steelMouth[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'beak') {
          rndm = Math.floor(Math.random() * steelBeak.length);
          description = `a ${steelBeak[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'snout') {
          rndm = Math.floor(Math.random() * steelSnout.length);
          description = `a ${steelSnout[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'ears') {
          rndm = Math.floor(Math.random() * steelEars.length);
          description = `${steelEars[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'horns') {
          rndm = Math.floor(Math.random() * steelHorns.length);
          description = `${steelHorns[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'tail') {
          rndm = Math.floor(Math.random() * steelTail.length);
          description = steelTail[rndm];
          descrs.push(description);
        } else if (traits[i] === 'fins') {
          rndm = Math.floor(Math.random() * steelLegs.length);
          description = `${steelLegs[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'body') {
          rndm = Math.floor(Math.random() * steelWings.length);
          description = `the added bonus of ${steelWings[rndm]} wings`;
          descrs.push(description);
        }
      }
      rndPlace = Math.floor(Math.random() * placeSteel.length);
      place = placeSteel[rndPlace];
      attk1 = Math.floor(Math.random() * steelAttk.length);
      atkOne = steelAttk[attk1];
      attk2 = Math.floor(Math.random() * steelAttk.length);
      while (attk1 === attk2) {
        attk2 = Math.floor(Math.random() * steelAttk.length);
      }
      atkTwo = steelAttk[attk2];
      break;
    case 'water':
      for (i = 0; i < 3; i++) {
        if (traits[i] === 'skin' || traits[i] === 'shell' || traits[i] === 'hair' || traits[i] === 'feathers' || traits[i] === 'hide' || traits[i] === 'fur' || traits[i] === 'armor' || traits[i] === 'scales') {
          rndm = Math.floor(Math.random() * waterSkin.length);
          description = `${waterSkin[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'wings') {
          rndm = Math.floor(Math.random() * waterWings.length);
          description = `${waterWings[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'legs') {
          rndm = Math.floor(Math.random() * waterLegs.length);
          description = `${waterLegs[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'arms' || traits[i] === 'tentacles') {
          rndm = Math.floor(Math.random() * waterArms.length);
          description = `${waterArms[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'fins') {
          rndm = Math.floor(Math.random() * waterLegs.length);
          description = `${waterLegs[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'mouth') {
          rndm = Math.floor(Math.random() * waterMouth.length);
          description = `a ${waterMouth[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'beak') {
          rndm = Math.floor(Math.random() * waterBeak.length);
          description = `a ${waterBeak[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'snout') {
          rndm = Math.floor(Math.random() * waterSnout.length);
          description = `a ${waterSnout[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'ears') {
          rndm = Math.floor(Math.random() * waterEars.length);
          description = `${waterEars[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'horns') {
          rndm = Math.floor(Math.random() * waterHorns.length);
          description = `${waterHorns[rndm]} ${traits[i]}`;
          descrs.push(description);
        } else if (traits[i] === 'tail') {
          rndm = Math.floor(Math.random() * waterTail.length);
          description = waterTail[rndm];
          descrs.push(description);
        } else if (traits[i] === 'body') {
          rndm = Math.floor(Math.random() * waterWings.length);
          description = `the added bonus of ${waterWings[rndm]} wings`;
          descrs.push(description);
        }
      }
      rndPlace = Math.floor(Math.random() * placeWater.length);
      place = placeWater[rndPlace];
      attk1 = Math.floor(Math.random() * waterAttk.length);
      atkOne = waterAttk[attk1];
      attk2 = Math.floor(Math.random() * waterAttk.length);
      while (attk1 === attk2) {
        attk2 = Math.floor(Math.random() * waterAttk.length);
      }
      atkTwo = waterAttk[attk2];
      break;
    default:
      break;
  }
  const name = `This Pokemon is a ${pkType}-type Pokemon and ${rsm[rnRsm]} ${pkm[rnd1][0]}. It has ${descrs[0]}, ${descrs[1]} and ${descrs[2]}.`;
  const name2 = ` They're generally ${pers[rnPers]} by nature and can often be found ${place}. If you're out looking for them they can often be seen ${amnt[rnAmnt]}.`;
  const name3 = `It tends to attack with ${atkOne} and ${atkTwo}. It ${evo[rnEvo]}.`;
  let result = '';
  result += name;
  result += name2;
  result += '\n';
  result += name3;
  return result;
}
