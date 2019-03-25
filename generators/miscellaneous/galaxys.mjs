import sample from 'lodash/sample';

export default function galaxys() {
  let names;
  const nm1 = ['Alpha', 'Apus', 'Aquila', 'Ara', 'Beta', 'Canis', 'Carina', 'Comae', 'Corona', 'Crux', 'Delta', 'Draco', 'Epsilon', 'Gamma', 'Lambda', 'Lyra', 'Nemo', 'Omega', 'Omicron', 'Pavo', 'Proxima', 'Sagitta', 'Serpens', 'Sigma', 'Theta', 'Upsilon', 'Ursa', 'Vela', 'Virgo', 'Zeta', '', '', '', '', '', ''];
  const nm2 = ['Acallaris', 'Achelois', 'Adastreia', 'Aegialeus', 'Aegimius', 'Alatheia', 'Alcyoneus', 'Aldebaran', 'Amphiaraus', 'Anadeia', 'Andromeda', 'Aquarii', 'Arcturus', 'Aristaeus', 'Asteria', 'Asteropaios', 'Astraeus', 'Aurigae', 'Boreas', 'Borysthenis', 'Calesius', 'Capella', 'Cassiopeia', 'Centauri', 'Centaurus', 'Chronos', 'Cymopoleia', 'Dioscuri', 'Draconis', 'Eioneus', 'Eridani', 'Eridanus', 'Eubuleus', 'Euphorion', 'Eusebeia', 'Euthenia', 'Hemithea', 'Hyperbius', 'Hyperes', 'Hyperion', 'Icarius', 'Ichnaea', 'Ilioneus', 'Kentaurus', 'Leporis', 'Librae', 'Lyrae', 'Majoris', 'Miriandynus', 'Myrmidon', 'Nebula', 'Nemesis', 'Odysseus', 'Ophiuchi', 'Orion', 'Orionis', 'Orithyia', 'Palioxis', 'Peleus', 'Perileos', 'Perseus', 'Phoroneus', 'Polystratus', 'Porphyrion', 'Proioxis', 'Sagittarius', 'Sirius', 'Solymus', 'Zagreus', 'Zephyrus'];
  const nm3 = ['Abyss', 'Acorn', 'Arrowhead', 'Banana', 'Beansprout', 'Beanstalk', 'Bell', 'Blue Ribbon', 'Blueberry', 'Bottleneck', 'Bowl', 'Bull\'s Eye', 'Bullet', 'Butterfly', 'Cat\'s Ear', 'Cat\'s Eye', 'Catterpillar', 'Cherry', 'Chickpea', 'Clover', 'Coconut', 'Comet', 'Crescent', 'Crow\'s Feet', 'Crown', 'Dandelion', 'Diamond', 'Dragontooth', 'Droplet', 'Eagle Claw', 'Eggshell', 'Exploding', 'Eyebrow', 'Eyelash', 'Falling', 'Feather', 'Fern Leaf', 'Fingerprint', 'Fisheye', 'Fishscale', 'Flame', 'Football', 'Grain', 'Halo', 'Heart', 'Horseshoe', 'Hurricane', 'Icicle', 'Iris', 'Jellyfish', 'Kettle', 'Leaf', 'Lemon', 'Lightbulb', 'Lilypad', 'Lion\'s Mane', 'Lion\'s Tail', 'Maelstrom', 'Meridian', 'Mosaic', 'Mouse', 'Octopus', 'Oculus', 'Onion', 'Owl Head', 'Pear', 'Pepper', 'Pig\'s Tail', 'Pinecone', 'Ponytail', 'Potato', 'Red Ribbon', 'Rippled', 'Rose Petal', 'Sawblade', 'Seashell', 'Serpent', 'Serpent\'s Eye', 'Sharkfin', 'Sharktooth', 'Shield', 'Shooting Star', 'Snail Shell', 'Snowflake', 'Soap Bubble', 'Sparrow', 'Spearpoint', 'Spiderleg', 'Spiderweb', 'Spiral', 'Starfish', 'Strawberry', 'Teacup', 'Tiara', 'Tiger Paw', 'Tree Root', 'Tree Trunk', 'Turtle Shell', 'Vortex', 'Wave', 'Whale\'s Tail', 'Zodiac'];
  const nm4 = ['Nebula', 'Galaxy', 'Cloud', 'Star System'];
  const nm5 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ''];
  const nm6 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ''];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 3) {
      names = `${sample(nm1)} ${sample(nm2)}`;
    } else if (i < 5) {
      names = `${sample(nm2)} ${sample(nm4)}`;
    } else if (i < 8) {
      names = `${sample(nm3)} ${sample(nm4)}`;
    } else if (i < 9) {
      names = `${sample(nm5) + sample(nm5)}-${sample(nm6)}${sample(nm6)}${sample(nm6)}`;
    } else {
      names = `${sample(nm5) + sample(nm5) + sample(nm5)} ${sample(nm6)}${sample(nm6)}${sample(nm5)}`;
    }
    return names;
  }
}
