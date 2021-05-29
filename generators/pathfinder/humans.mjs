import { sample } from 'lodash-es';

export default function humans() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  /* Kellid */
  const nm1 = ['b', 'br', 'd', 'dr', 'g', 'k', 'kr', 'p', 'pr', 'q', 'r', 'str', 't', 'tr', 'v'];
  const nm2 = ['a', 'e', 'i', 'o', 'u'];
  const nm3 = ['d', 'l', 'ld', 'lb', 'lk', 'lr', 'm', 'ml', 'n', 'nd', 'nk', 'r', 'rk', 'rc', 'rd', 'rl'];
  const nm4 = ['c', 'd', 'g', 'k', 'n', 't'];
  const nm5 = ['', '', 'b', 'bh', 'd', 'dh', 'h', 'kh', 'l', 'm', 'n', 'p', 'r', 's', 't', 'th', 'v', 'y'];
  const nm6 = ['d', 'll', 'lb', 'ld', 'lr', 'l', 'lk', 'm', 'n', 'nn', 'nr', 'nd', 'nk', 'r', 'rr', 'rl', 'rn', 'rm', 'rd'];
  const nm7 = ['', '', '', '', 'h', 'n', 's', 't'];
  /* Ulfen */
  const nm8 = ['', '', '', '', '', 'b', 'bj', 'br', 'f', 'fr', 'g', 'gr', 'h', 'hr', 'hj', 'j', 'k', 'kr', 'm', 'r', 's', 'st', 'sv', 'sk', 't', 'th', 'v', 'y'];
  const nm9 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'au', 'ei', 'uu', 'ae'];
  const nm10 = ['bj', 'd', 'ddv', 'dg', 'dm', 'dv', 'g', 'gb', 'gbj', 'gf', 'gg', 'gn', 'gnv', 'k', 'ks', 'lb', 'lbj', 'ld', 'ldm', 'lk', 'll', 'lld', 'm', 'n', 'nd', 'ng', 'ngv', 'nk', 'nn', 'nv', 'p', 'r', 'rg', 'rl', 'rn', 'rnl', 'rr', 'rs', 'rt', 'rv', 'sg', 'sk', 'st', 'th', 'tv', 'v', 'w', 'x', 'z'];
  const nm11 = ['', '', '', '', 'c', 'd', 'f', 'g', 'gg', 'gr', 'k', 'ld', 'lf', 'lfr', 'll', 'm', 'n', 'nd', 'ndr', 'nn', 'r', 'rk', 'rl', 'rn', 'rr', 'rth', 'st', 't'];
  const nm12 = ['', '', '', '', '', 'b', 'br', 'd', 'dr', 'f', 'fr', 'g', 'gr', 'h', 'j', 'k', 'l', 'lj', 'm', 'n', 'r', 's', 'sv', 'th', 't', 'v'];
  const nm13 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'y', 'y', 'au', 'ie', 'ae'];
  const nm14 = ['bj', 'd', 'df', 'dg', 'dh', 'dl', 'dn', 'dr', 'fl', 'g', 'gd', 'gn', 'gv', 'ld', 'lk', 'll', 'llg', 'lv', 'm', 'n', 'nd', 'nfr', 'ng', 'nj', 'nng', 'nnv', 'r', 'rd', 'rf', 'rg', 'rgr', 'rl', 'rn', 'sfr', 'sg', 'sl', 'str', 'th', 'thr'];
  const nm15 = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'd', 'f', 'g', 'ld', 'lf', 'n', 'nn', 'rd', 'rg', 's', 'th'];
  const nm16 = ['Amber', 'Arm', 'Ash', 'Autumn', 'Battle', 'Bear', 'Black', 'Blaze', 'Blood', 'Boar', 'Boulder', 'Brawl', 'Bright', 'Bronze', 'Bull', 'Cinder', 'Cloud', 'Cold', 'Common', 'Dark', 'Dawn', 'Dead', 'Doom', 'Dream', 'Dusk', 'Dust', 'Ember', 'Even', 'Fine', 'Forest', 'Free', 'Frost', 'Frozen', 'Gloom', 'Gold', 'Grand', 'Great', 'Grim', 'Grizzly', 'Hallow', 'Hell', 'High', 'Honey', 'Horn', 'Ice', 'Iron', 'Keen', 'Light', 'Lone', 'Long', 'Mighty', 'Mist', 'Moss', 'Mountain', 'Night', 'Noble', 'Pale', 'Plain', 'Pride', 'Proud', 'Quick', 'Rage', 'Rapid', 'Raven', 'River', 'Rock', 'Rune', 'Shadow', 'Sharp', 'Silent', 'Silver', 'Smoke', 'Snow', 'Soft', 'Spirit', 'Star', 'Steel', 'Stone', 'Storm', 'Strong', 'Summer', 'Swift', 'Thunder', 'Troll', 'True', 'War', 'Wild', 'Wind', 'Winter', 'Wolf'];
  const nm17 = ['arm', 'arrow', 'bane', 'bash', 'bear', 'blade', 'brace', 'brand', 'breaker', 'breath', 'brew', 'caller', 'cleaver', 'crest', 'crusher', 'cut', 'cutter', 'dream', 'eye', 'eyes', 'fall', 'fire', 'fist', 'flame', 'force', 'forge', 'fury', 'gaze', 'gleam', 'grip', 'guard', 'hair', 'hall', 'hammer', 'hand', 'heart', 'hunter', 'killer', 'lash', 'mane', 'mantle', 'mark', 'maul', 'rage', 'reaper', 'reaver', 'rider', 'ripper', 'roar', 'rock', 'root', 'scar', 'scream', 'shield', 'shout', 'slayer', 'snarl', 'song', 'spirit', 'splitter', 'star', 'stride', 'sun', 'sword', 'thorn', 'tongue', 'walker', 'ward', 'watcher', 'wind', 'wine', 'wolf'];
  /* Varisian */
  const nm18 = ['', '', '', '', '', 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'r', 's', 'tr', 'v', 'y'];
  const nm19 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ua', 'eo', 'oi', 'ia'];
  const nm20 = ['b', 'br', 'bg', 'c', 'd', 'dg', 'dr', 'ds', 'k', 'l', 'ld', 'lp', 'm', 'n', 'nd', 'ndr', 'nn', 'r', 'rdr', 'rg', 'rn', 'rr', 'sm', 'sn', 'ss', 'st', 'v', 'vr', 'vg', 'vd'];
  const nm21 = ['', '', '', 'c', 'k', 'l', 'll', 'n', 'r', 'rd', 'rt', 's', 'sk', 'v'];
  const nm22 = ['', '', '', '', '', 'b', 'c', 'd', 'f', 'h', 'k', 'l', 'm', 'n', 'r', 's', 'sh', 't', 'v', 'z'];
  const nm23 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ai', 'ya', 'uu', 'ie', 'ei', 'ia', 'eo', 'ae'];
  const nm24 = ['d', 'ff', 'f', 'fr', 'fl', 'j', 'l', 'ld', 'll', 'lm', 'lr', 'ls', 'lt', 'm', 'mm', 'ms', 'mr', 'ns', 'nr', 'n', 'nd', 'nn', 'ph', 'r', 'rl', 'rh', 'rm', 'rn', 's', 'sh', 'sk', 'sr', 'ss', 'sl', 'th', 'tl', 'v', 'x'];
  const nm25 = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', 'h', 'k', 'n', 'r', 's'];
  const nm26 = ['', '', '', '', '', 'c', 'cz', 'd', 'f', 'fr', 'g', 'gr', 'j', 'k', 'kl', 'm', 'mv', 'p', 'r', 's', 'ts', 'v', 'vh', 'w', 'z'];
  const nm27 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'y', 'ai', 'io', 'ae', 'aa', 'oo'];
  const nm28 = ['cc', 'd', 'ddr', 'dm', 'g', 'gr', 'j', 'k', 'l', 'ld', 'll', 'm', 'ml', 'n', 'nd', 'ndl', 'ng', 'nj', 'nn', 'nt', 'r', 'rdr', 'rk', 'rr', 'rs', 'shk', 'sht', 'sk', 'st', 't', 'th', 'ttl', 'v', 'zm', 'zn', 'zz'];
  /* Azlanti */
  const nm30 = ['', '', '', '', 'b', 'br', 'cr', 'c', 'd', 'dh', 'dr', 'g', 'gr', 'j', 'k', 'kr', 'm', 'n', 'nh', 'r', 'x', 'z', 'zr'];
  const nm31 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'au', 'ou'];
  const nm32 = ['b', 'br', 'bz', 'c', 'cr', 'd', 'dr', 'dl', 'gh', 'gg', 'gr', 'gn', 'gm', 'k', 'kk', 'kn', 'km', 'kr', 'lr', 'lm', 'ln', 'lb', 'lg', 'ld', 'm', 'md', 'mz', 'mr', 'mg', 'n', 'nd', 'ng', 'nd', 'nr', 'r', 'rg', 'rgh', 'rp', 'rr', 'rz', 'th'];
  const nm33 = ['', '', '', '', '', 'c', 'd', 'g', 'l', 'n', 'r', 's', 'sh'];
  const nm34 = ['', '', '', '', '', 'b', 'bh', 'ch', 'd', 'dh', 'g', 'h', 'k', 'kh', 'l', 'm', 'n', 'nh', 'r', 's', 'sh', 't', 'th', 'v'];
  const nm35 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ia', 'ea'];
  const nm36 = ['d', 'dr', 'dh', 'f', 'ff', 'g', 'gg', 'gn', 'gm', 'gh', 'gl', 'h', 'hh', 'l', 'll', 'llm', 'ls', 'lz', 'lm', 'ln', 'lg', 'ld', 'm', 'mm', 'mn', 'ms', 'mz', 'ml', 'n', 'nn', 'nl', 'ns', 'nr', 'r', 'rs', 'rr', 'rl', 'rsh', 's', 'ss', 'sh', 'sr', 't', 'v', 'zn'];
  const nm37 = ['', '', '', '', '', '', '', '', '', '', 'h', 'l', 'm', 'n', 's', 'st', 'th'];
  const nm38 = ['', '', '', '', '', 'b', 'br', 'c', 'd', 'dr', 'g', 'gr', 'h', 'k', 'kr', 'l', 'm', 'n', 'r', 's', 'sh', 'st', 't', 'th', 'v', 'x', 'z'];
  const nm39 = ['a', 'e', 'i', 'o', 'u'];
  const nm40 = ['d', 'dr', 'f', 'g', 'gg', 'gr', 'gh', 'gm', 'j', 'k', 'kk', 'kr', 'kn', 'kl', 'l', 'll', 'ld', 'lg', 'lb', 'lm', 'ln', 'm', 'mm', 'md', 'mb', 'mr', 'ml', 'n', 'nn', 'nb', 'nl', 'ng', 'ngr', 'nr', 'r', 'rs', 'rr', 'rb', 'rg', 'rl', 'ss', 'sh', 't', 'th', 'v', 'z'];
  const nm41 = ['', '', '', '', '', 'g', 'll', 'l', 'm', 'n', 'r', 's', 'sh', 'st', 'th'];
  /* Keleshite */
  const nm42 = ['', '', '', '', 'b', 'c', 'd', 'dh', 'f', 'gh', 'gr', 'h', 'j', 'k', 'm', 'n', 'r', 's', 'sh', 't', 'x', 'w', 'z'];
  const nm43 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'a', 'a', 'i', 'i', 'u', 'aa', 'ya', 'eo', 'ee', 'oo', 'ai'];
  const nm44 = ['b', 'd', 'dd', 'dh', 'dr', 'dw', 'f', 'g', 'h', 'hr', 'hs', 'j', 'k', 'km', 'l', 'll', 'm', 'mm', 'n', 'ns', 'q', 'qd', 'qm', 'r', 'rb', 'rf', 'rg', 'rh', 'rr', 'rw', 's', 'sf', 'sh', 'sm', 'ss', 'st', 'z'];
  const nm45 = ['', '', 'b', 'd', 'dh', 'f', 'j', 'jh', 'k', 'l', 'lf', 'm', 'n', 'r', 's', 'sh', 'th', 'wz', 'z'];
  const nm46 = ['', '', '', 'f', 'gh', 'h', 'j', 'k', 'kh', 'l', 'm', 'n', 'p', 'r', 's', 'sh', 't', 'th', 'w', 'z'];
  const nm47 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'a', 'u', 'i', 'y', 'ya', 'aa', 'ai', 'iya', 'ee'];
  const nm48 = ['b', 'br', 'd', 'dh', 'f', 'fl', 'fn', 'h', 'hd', 'hj', 'hm', 'j', 'km', 'l', 'lm', 'm', 'mt', 'n', 'nt', 'ph', 'q', 'r', 'rh', 's', 'sf', 'sh', 'shm', 'sm', 't', 'th', 'z'];
  const nm49 = ['', '', '', '', '', '', '', '', '', '', 'f', 'h', 'l', 'n', 'r', 's', 't'];
  const nm50 = ['', '', '', '', 'b', 'bh', 'd', 'f', 'gh', 'h', 'j', 'k', 'kh', 'm', 'q', 'r', 's', 'sh', 't', 'vr', 'y', 'z'];
  const nm51 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'a', 'i', 'i', 'ee', 'aa', 'ou', 'ei'];
  const nm52 = ['b', 'bb', 'd', 'dd', 'dr', 'f', 'h', 'hr', 'j', 'k', 'l', 'lk', 'll', 'lm', 'm', 'n', 'nb', 'nl', 'ns', 'r', 'rw', 's', 'sh', 'sm', 'sp', 'sr', 'ss', 'st', 'th', 'tt', 'v', 'w', 'z'];
  const nm53 = ['', '', '', 'd', 'h', 'j', 'kh', 'l', 'lm', 'm', 'n', 'r', 's'];
  /* Garundi */
  const nm54 = ['', '', '', 'b', 'ch', 'f', 'g', 'h', 'j', 'k', 'kh', 'm', 'n', 'p', 'q', 'r', 's', 't', 'th', 'v', 'z'];
  const nm55 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'y', 'ae', 'eu', 'aa', 'ui'];
  const nm56 = ['b', 'ch', 'dr', 'f', 'fm', 'g', 'h', 'hbr', 'hm', 'k', 'kh', 'kht', 'l', 'm', 'mm', 'ms', 'n', 'nh', 'nk', 'nkh', 'nm', 'nn', 'nr', 'ns', 'nt', 'p', 'ph', 'ps', 'pt', 'r', 'rg', 'rk', 'rm', 'rp', 'rph', 'rr', 'rs', 'rt', 's', 'sk', 'skh', 'ss', 'st', 't', 'thr', 'zgh'];
  const nm57 = ['', '', '', 'b', 'd', 'f', 'ff', 'h', 'ln', 'nn', 'p', 'r', 's', 'sh', 't', 'x'];
  const nm58 = ['', '', '', '', 'b', 'ch', 'cl', 'h', 'k', 'kh', 'l', 'm', 'n', 'p', 'r', 's', 'sh', 't', 'th', 'z'];
  const nm59 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ee', 'ia', 'au', 'eo', 'ei'];
  const nm60 = ['b', 'c', 'fs', 'h', 'hm', 'k', 'kh', 'kr', 'kt', 'l', 'm', 'mm', 'n', 'nk', 'nkh', 'nn', 'ns', 'nt', 'p', 'pp', 'q', 'r', 'rm', 'rs', 's', 'sh', 'st', 't', 'th', 'tm', 'tr', 'z'];
  const nm61 = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'f', 'h', 'l', 'm', 'n', 'r', 's', 't'];
  const nm62 = ['', '', '', '', '', '', '', '', 'b', 'ch', 'cl', 'f', 'g', 'h', 'j', 'k', 'kh', 'l', 'm', 'n', 'p', 'q', 'r', 's', 'sh', 't', 'th', 'v', 'z'];
  const nm63 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'y', 'ae', 'eu', 'aa', 'ui', 'ee', 'ia', 'au', 'eo', 'ei'];
  const nm64 = ['b', 'c', 'ch', 'dr', 'f', 'fm', 'fs', 'g', 'h', 'hbr', 'hm', 'k', 'kh', 'kht', 'kr', 'kt', 'l', 'm', 'mm', 'ms', 'n', 'nh', 'nk', 'nkh', 'nm', 'nn', 'nr', 'ns', 'nt', 'p', 'ph', 'pp', 'ps', 'pt', 'q', 'r', 'rg', 'rk', 'rm', 'rp', 'rph', 'rr', 'rs', 'rt', 's', 'sh', 'sk', 'skh', 'ss', 'st', 't', 'th', 'thr', 'tm', 'tr', 'z', 'zgh'];
  const nm65 = ['', '', '', '', '', '', '', '', 'b', 'd', 'f', 'ff', 'h', 'l', 'ln', 'm', 'n', 'nn', 'p', 'r', 's', 'sh', 't', 'x'];
  const i = Math.floor(Math.random() * 12);
  {
    if (type === 1) {
      if (i < 2) {
        names = sample(nm5) + sample(nm2) + sample(nm6) + sample(nm2) + sample(nm7);
      } else if (i < 4) {
        names = `${sample(nm12) + sample(nm13) + sample(nm14) + sample(nm13) + sample(nm15)} ${sample(nm16)}${sample(nm17)}`;
      } else if (i < 6) {
        names = `${sample(nm22) + sample(nm23) + sample(nm24) + sample(nm23) + sample(nm25)} ${sample(nm26)}${sample(nm27)}${sample(nm28)}${sample(nm27)}${sample(nm28)}`;
      } else if (i < 8) {
        names = `${sample(nm34) + sample(nm35) + sample(nm36) + sample(nm35) + sample(nm37)} ${sample(nm38)}${sample(nm39)}${sample(nm40)}${sample(nm39)}${sample(nm41)}`;
      } else if (i < 10) {
        names = `${sample(nm46) + sample(nm47) + sample(nm48) + sample(nm47) + sample(nm49)} ${sample(nm50)}${sample(nm51)}${sample(nm52)}${sample(nm51)}${sample(nm53)}`;
      } else {
        names = `${sample(nm58) + sample(nm59) + sample(nm60) + sample(nm59) + sample(nm61)} ${sample(nm62)}${sample(nm63)}${sample(nm64)}${sample(nm63)}${sample(nm65)}`;
      }
    } else if (i < 2) {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4);
    } else if (i < 4) {
      names = `${sample(nm8) + sample(nm9) + sample(nm10) + sample(nm9) + sample(nm11)} ${sample(nm16)}${sample(nm17)}`;
    } else if (i < 6) {
      names = `${sample(nm18) + sample(nm19) + sample(nm20) + sample(nm19) + sample(nm21)} ${sample(nm26)}${sample(nm27)}${sample(nm28)}${sample(nm27)}${sample(nm28)}`;
    } else if (i < 8) {
      names = `${sample(nm30) + sample(nm31) + sample(nm32) + sample(nm31) + sample(nm33)} ${sample(nm38)}${sample(nm39)}${sample(nm40)}${sample(nm39)}${sample(nm41)}`;
    } else if (i < 10) {
      names = `${sample(nm42) + sample(nm43) + sample(nm44) + sample(nm43) + sample(nm45)} ${sample(nm50)}${sample(nm51)}${sample(nm52)}${sample(nm51)}${sample(nm53)}`;
    } else {
      names = `${sample(nm54) + sample(nm55) + sample(nm56) + sample(nm55) + sample(nm57)} ${sample(nm62)}${sample(nm63)}${sample(nm64)}${sample(nm63)}${sample(nm65)}`;
    }
    return names;
  }
}
