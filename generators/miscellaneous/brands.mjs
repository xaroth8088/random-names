import sample from 'lodash/sample';

export default function brands() {
  let names;
  const nm1 = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', 'br', 'cr', 'dr', 'fr', 'gr', 'kr', 'pr', 'qr', 'sr', 'tr', 'vr', 'wr', 'zr', 'str', 'spr', 'st', 'bl', 'cl', 'dl', 'fl', 'gl', 'kl', 'pl', 'sl', 'vl', 'zl', 'bh', 'ch', 'dh', 'gh', 'kh', 'ph', 'sh', 'sch', 'th', 'thr', 'sph', 'vh', 'wh', 'zh', 'gn', 'kn', 'sn', 'zn', 'sm', 'zm', 'sw', 'tw', 'zw', 'sc'];
  const nm2 = ['b', 'c', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'x', 'z'];
  const nm3 = ['a', 'e', 'i', 'o', 'u'];
  const nm6 = ['c', 'ck', 'd', 'f', 'g', 'ght', 'l', 'ld', 'll', 'm', 'mp', 'n', 'nd', 'ng', 'ngs', 'nk', 'nt', 'q', 'p', 'pp', 'r', 'rn', 'rs', 's', 'sh', 'sm', 'ss', 'st', 't', 'th', 'w', 'wn', 'x', 'y', 'z'];
  const nm7 = ['able', 'ack', 'acy', 'ad', 'age', 'ail', 'ain', 'ake', 'al', 'ale', 'all', 'am', 'ame', 'an', 'ance', 'ank', 'ap', 'app', 'ar', 'ash', 'at', 'ate', 'aw', 'ay', 'dom', 'eat', 'eel', 'eep', 'eet', 'ell', 'en', 'ence', 'ent', 'er', 'ers', 'esque', 'est', 'ful', 'fy', 'ible', 'ic', 'ical', 'ice', 'ick', 'ide', 'ier', 'ies', 'ife', 'ify', 'ight', 'ile', 'ill', 'in', 'ine', 'ing', 'ink', 'ion', 'ious', 'ip', 'ise', 'ish', 'ism', 'ist', 'it', 'ite', 'ity', 'ive', 'ize', 'led', 'less', 'ment', 'ned', 'ness', 'oat', 'ock', 'og', 'oil', 'oke', 'oo', 'ood', 'oof', 'ook', 'ool', 'oom', 'oon', 'oop', 'oot', 'op', 'or', 'ore', 'orn', 'ot', 'ought', 'ould', 'ous', 'ouse', 'out', 'ow', 'own', 'red', 'ship', 'sion', 'ted', 'ter', 'tes', 'tion', 'ty', 'uck', 'ug', 'ump', 'un', 'unk', 'y', 'zed'];
  const nm8 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ee', 'eu', 'eo', 'ea', 'ei', 'aa', 'ai', 'au', 'ae', 'io', 'ia', 'iu', 'ie', 'oo', 'oa', 'ou', 'oe', 'oi', 'uu', 'ua', 'ue', 'ui', 'uo'];
  const nm10 = ['', '', '', '', '', 'a', 'e', 'i', 'o', 'u'];
  const nm11 = ['A', 'An', 'Ante', 'Anti', 'As', 'Auto', 'Bi', 'Bin', 'Car', 'Cha', 'Char', 'Com', 'Como', 'Con', 'Contra', 'De', 'Demi', 'Di', 'Dis', 'Du', 'En', 'Ex', 'Extra', 'Gall', 'Hemi', 'Hyper', 'Il', 'Im', 'In', 'Inter', 'Intra', 'Ir', 'Micro', 'Mono', 'Non', 'Omni', 'Out', 'Over', 'Par', 'Post', 'Pre', 'Pro', 'Quin', 'Res', 'Rese', 'Scar', 'Semi', 'Sha', 'Spin', 'Sta', 'Stra', 'Stri', 'Sub', 'Syn', 'Tech', 'Tran', 'Trans', 'Tri', 'Un', 'Uni'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 2) {
      names = sample(nm11) + sample(nm2) + sample(nm7);
    } else if (i < 4) {
      names = sample(nm1) + sample(nm8) + sample(nm6) + sample(nm10);
    } else if (i < 6) {
      names = sample(nm1) + sample(nm3) + sample(nm2) + sample(nm7);
    } else if (i < 8) {
      names = sample(nm11) + sample(nm7);
    } else if (i < 9) {
      names = sample(nm11) + sample(nm2) + sample(nm3) + sample(nm6);
    } else {
      names = sample(nm8) + sample(nm1) + sample(nm8);
    }
    return names;
  }
}
