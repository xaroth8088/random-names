function generator$pathfinder$goblins() {
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', '', '', 'b', 'ch', 'dr', 'fl', 'g', 'gh', 'j', 'k', 'kr', 'l', 'm', 'n', 'p', 'r', 'v', 'w', 'z'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'o', 'u', 'oo', 'ou', 'oa'];
  const nm3 = ['bb', 'bbl', 'bm', 'br', 'bn', 'bz', 'd', 'dd', 'dr', 'dz', 'dg', 'ff', 'g', 'ggl', 'gm', 'gn', 'gt', 'gv', 'gb', 'gd', 'm', 'md', 'mb', 'mz', 'mg', 'mk', 'nth', 'nz', 'nd', 'ng', 'ngb', 'ngl', 'nd', 'nv', 'rg', 'rk', 'rp', 'rs', 'rt', 'rd', 'rg', 'tf', 'tv', 'tt', 'tg', 'v', 'vg', 'vd', 'vn', 'vm'];
  const nm4 = ['', '', '', '', '', 'b', 'ff', 'g', 'k', 'n', 'nk', 'rch', 'rd', 'rg', 'rk', 'rnk', 'rt', 's', 'sh', 't', 'wg', 'z'];
  const nm5 = ['', '', '', '', '', 'ch', 'f', 'g', 'gh', 'gr', 'h', 'j', 'kl', 'l', 'm', 'n', 'p', 'r', 'v', 'vr', 'y', 'z'];
  const nm6 = ['a', 'e', 'i', 'o', 'u', 'e', 'i', 'o', 'a', 'e', 'i', 'o', 'u', 'e', 'i', 'o', 'a', 'e', 'i', 'o', 'u', 'e', 'i', 'o', 'ee', 'ie', 'oo'];
  const nm7 = ['ck', 'dl', 'dg', 'dr', 'dn', 'dk', 'g', 'gl', 'gn', 'gm', 'gl', 'k', 'kk', 'kl', 'kn', 'km', 'kch', 'kt', 'lk', 'ld', 'lg', 'lv', 'lb', 'll', 'mb', 'ml', 'mp', 'md', 'mk', 'mr', 'nb', 'nch', 'nd', 'ng', 'nk', 'p', 'ph', 'phr', 'phl', 'rk', 'rg', 'rd', 'rb', 'rbl', 's', 'sh', 'ss', 'sk', 'st', 't', 'tr', 'tl', 'tch', 'vv', 'x'];
  const nm8 = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'b', 'h', 'l', 'k', 'n', 'ns', 'ms', 's', 'sh', 'th'];
  const nm9 = ['Amber', 'Ash', 'Bear', 'Blade', 'Blood', 'Bone', 'Boulder', 'Cask', 'Claw', 'Crag', 'Crow', 'Crystal', 'Dead', 'Dew', 'Dog', 'Doom', 'Ear', 'Earth', 'Elf', 'Ember', 'Far', 'Finger', 'Fire', 'Fist', 'Flame', 'Flint', 'Forest', 'Frost', 'Fuse', 'Gloom', 'Gold', 'Gore', 'Grass', 'Gut', 'Hallow', 'Hard', 'Haze', 'Heart', 'Heavy', 'Hell', 'High', 'Hill', 'Hog', 'Horse', 'Ice', 'Iron', 'Keen', 'Long', 'Man', 'Marble', 'Marsh', 'Meadow', 'Moon', 'Moss', 'Nettle', 'Nose', 'Orb', 'Pine', 'Plain', 'Poke', 'Rage', 'Rain', 'Raven', 'Rip', 'River', 'Rock', 'Rough', 'Shadow', 'Silver', 'Skull', 'Snake', 'Snow', 'Spider', 'Stab', 'Star', 'Steel', 'Stern', 'Stone', 'Storm', 'Strong', 'Stump', 'Swamp', 'Toe', 'Tree', 'Water', 'Wild', 'Wind', 'Wold', 'Wood'];
  const nm10 = ['bane', 'bash', 'basher', 'belly', 'bender', 'binder', 'bite', 'biter', 'blazer', 'bleeder', 'blight', 'brace', 'brand', 'breaker', 'breath', 'brew', 'brook', 'brow', 'bumper', 'caller', 'chaser', 'chew', 'chewer', 'chopper', 'cleaver', 'cooker', 'crag', 'crest', 'crusher', 'cut', 'cutter', 'dancer', 'draft', 'dreamer', 'dust', 'eye', 'fall', 'fang', 'flaw', 'flayer', 'force', 'fury', 'gloom', 'grip', 'gripper', 'guard', 'gut', 'hammerer', 'horn', 'hunter', 'jumper', 'killer', 'lasher', 'mark', 'mauler', 'maw', 'more', 'nugget', 'part', 'parts', 'pike', 'punch', 'puncher', 'rage', 'rager', 'reaper', 'reaver', 'rip', 'ripper', 'roar', 'rock', 'scar', 'scream', 'seeker', 'shard', 'shield', 'shooter', 'shot', 'singer', 'slaver', 'slayer', 'snacker', 'snarl', 'snouth', 'spark', 'spear', 'splitter', 'stalk', 'stalker', 'steel', 'stick', 'stomper', 'strike', 'striker', 'surge', 'taker', 'tracker', 'trapper', 'wad', 'walker', 'watcher', 'wound'];


  i = Math.floor(Math.random() * 10);
  {
    if (type === 2) {
      rnd = Math.floor(Math.random() * nm9.length);
      rnd2 = Math.floor(Math.random() * nm10.length);
      names = nm9[rnd] + nm10[rnd2];
    } else if (type === 1) {
      rnd = Math.floor(Math.random() * nm5.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm7.length);
      rnd4 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm8.length);
      if (i < 6) {
        names = nm5[rnd] + nm2[rnd2] + nm7[rnd3] + nm2[rnd4] + nm8[rnd5];
      } else {
        rnd6 = Math.floor(Math.random() * nm7.length);
        rnd7 = Math.floor(Math.random() * nm2.length);
        names = nm5[rnd] + nm2[rnd2] + nm7[rnd3] + nm2[rnd4] + nm7[rnd6] + nm2[rnd7] + nm8[rnd5];
      }
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd4 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm4.length);
      if (i < 4) {
        while (rnd < 4) {
          rnd = Math.floor(Math.random() * nm1.length);
        }
        while (rnd5 < 5) {
          rnd5 = Math.floor(Math.random() * nm4.length);
        }
        names = nm1[rnd] + nm2[rnd2] + nm4[rnd5];
      } else if (i < 8) {
        names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
      } else {
        rnd6 = Math.floor(Math.random() * nm3.length);
        rnd7 = Math.floor(Math.random() * nm2.length);
        names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd6] + nm2[rnd7] + nm4[rnd5];
      }
    }
    return names;
  }
}
