import sample from 'lodash/sample';

export default function skyIslands() {
  let names;
  const nm1 = ['', '', '', '', '', 'b', 'c', 'd', 'dh', 'f', 'g', 'h', 'l', 'm', 'n', 'ph', 's', 'sh', 'th', 'v', 'w'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'o', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'o', 'ea', 'ae', 'ia', 'ai', 'eo'];
  const nm3 = ['b', 'b', 'f', 'f', 'ff', 'g', 'g', 'h', 'h', 'j', 'j', 'l', 'l', 'll', 'm', 'm', 'mm', 'n', 'n', 'nn', 'r', 'r', 's', 's', 'ss', 'th', 'th', 'v', 'v', 'b', 'bh', 'bl', 'bs', 'br', 'f', 'ff', 'fl', 'fr', 'g', 'gh', 'gn', 'gl', 'h', 'hn', 'hl', 'hm', 'j', 'l', 'lf', 'll', 'lt', 'lc', 'lb', 'ld', 'lm', 'ln', 'lr', 'lw', 'm', 'mm', 'mn', 'mr', 'n', 'nn', 'ns', 'nth', 'nt', 'nm', 'nf', 'nph', 'pr', 'phr', 'r', 'rl', 'rm', 'rn', 's', 'sf', 'sh', 'sp', 'st', 'sw', 'ss', 'sn', 'sm', 'th', 'v'];
  const nm4 = ['', '', '', '', '', 'f', 'h', 'l', 'm', 'n', 'r', 's', 'th'];
  const nm6 = ['Island', 'Enclave', 'Isle', 'Islet', 'Island', 'Isle'];
  const nm5 = ['Aeranas', 'Aerene', 'Aeria', 'Aeris', 'Aeros', 'Aerule', 'Albatross', 'Angel', 'Apex', 'Apogee', 'Ataraxia', 'Ataraxis', 'Atmos', 'Aura', 'Aurora', 'Avia', 'Avian', 'Avis', 'Azura', 'Azure', 'Azuris', 'Billow', 'Bliss', 'Borealis', 'Buoya', 'Bustard', 'Cassowary', 'Celes', 'Celeste', 'Cerulea', 'Cerulis', 'Cerulle', 'Chinook', 'Cirrostratus', 'Cirrus', 'Condor', 'Crane', 'Crow', 'Crown', 'Cuckoo', 'Cumulus', 'Dove', 'Eagle', 'Elysium', 'Empyre', 'Empyrea', 'Empyris', 'Falcon', 'Flamingo', 'Gale', 'Griffin', 'Gull', 'Halo', 'Halos', 'Harmony', 'Harpy', 'Hippogriff', 'Hummingbird', 'Imperos', 'Macaw', 'Mistral', 'Mistros', 'Murmus', 'Nebula', 'Nightingale', 'Nightowl', 'Obelisk', 'Owl', 'Ozone', 'Peacock', 'Pegasus', 'Pelican', 'Phoenix', 'Pigeon', 'Raven', 'Serenity', 'Solace', 'Sonas', 'Sonus', 'Sparrow', 'Spire', 'Stork', 'Storm', 'Stormy', 'Stratos', 'Stratus', 'Swan', 'Swift', 'Thunder', 'Toocan', 'Tranquility', 'Tropos', 'Tumul', 'Tumulus', 'Utopia', 'Valkyrie', 'Ventis', 'Vertex', 'Volance', 'Volantis', 'Volar', 'Volaris', 'Vortex', 'Vox', 'Voxis', 'Vulture', 'Windy', 'Zenith', 'Zephyr', 'Zephys', 'Zion'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 6) {
      if (i < 3) {
        names = `${sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4)} ${sample(nm6)}`;
      } else if (i < 6) {
        names = `${sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4)} ${sample(nm6)}`;
      }
    } else {
      names = `${sample(nm5)} ${sample(nm6)}`;
    }
    return names;
  }
}
