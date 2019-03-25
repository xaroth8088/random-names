export default function goblins() {
  let rnd2; let rnd3; let rnd5; let rnd6; let rnd7; let
    rnd8;


  let names;

  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', '', '', '', '', '', 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'p', 'r', 't', 'v', 'w', 'x', 'z', 'br', 'bl', 'cr', 'cl', 'ch', 'dr', 'fr', 'gr', 'gl', 'gn', 'kr', 'kl', 'pr', 'pl', 'str', 'st', 'sr', 'sl', 'tr', 'vr', 'wr', 'zr'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'y', 'ia', 'io', 'ee', 'aa', 'ui', 'ie', 'ea', 'oi'];
  const nm3 = ['b', 'd', 'g', 'h', 'k', 'l', 'm', 'n', 'r', 's', 't', 'v', 'z', 'b', 'd', 'g', 'h', 'k', 'l', 'm', 'n', 'r', 's', 't', 'v', 'z', 'b', 'd', 'g', 'h', 'k', 'l', 'm', 'n', 'r', 's', 't', 'v', 'z', 'b', 'd', 'g', 'h', 'k', 'l', 'm', 'n', 'r', 's', 't', 'v', 'z', 'bb', 'bd', 'bh', 'bl', 'bk', 'bn', 'br', 'bs', 'bt', 'bz', 'db', 'dd', 'df', 'dh', 'dl', 'dn', 'dr', 'ds', 'dv', 'dz', '', 'gg', 'gb', 'gd', 'gh', 'gk', 'gl', 'gm', 'gn', 'gr', 'gs', 'gt', 'gz', 'hd', 'hb', 'hk', 'hn', 'hz', 'kl', 'kn', 'kz', 'kv', 'kk', 'lb', 'ld', 'lg', 'lk', 'll', 'lr', 'ls', 'lt', 'lv', 'lz', 'mr', 'mv', 'mz', 'mt', 'nr', 'nv', 'nz', 'nt', 'rb', 'rd', 'rg', 'rk', 'rl', 'rm', 'rn', 'rr', 'rs', 'rt', 'rv', 'rz', 'sb', 'sd', 'sh', 'sk', 'sm', 'sn', 'sr', 'str', 'st', 'sv', 'sz', 'ss', 'tb', 'tl', 'tm', 'tn', 'tr', 'tv', 'tz', 'tt', 'vl', 'vn', 'vr', 'vz', 'zb', 'zd', 'zg', 'zl', 'zm', 'zn', 'zt'];
  const nm4 = ['c', 'g', 'k', 'l', 'q', 'r', 't', 'x', 'z', 'nk', 'ld', 'rd', 's', 'sz', 'zz', 'ng', 'kz', 'lb', 'rm', 'sb', 'bs', 'ts', 'cs', 'ct', 'gs', 'gz', 'kt', 'kx', 'lk', 'lx', 'rk', 'rt', 'rd', 'rx'];
  const nm5 = ['', '', '', '', '', '', '', 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'bh', 'br', 'bl', 'cr', 'cl', 'ch', 'fr', 'fl', 'gr', 'gl', 'gn', 'kh', 'kl', 'ph', 'pr', 'sh', 'st', 'sr', 'sl', 'sw', 'th', 'thr', 'tr', 'vr', 'wr'];
  const nm6 = ['b', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'b', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'b', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'b', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'bb', 'bd', 'bh', 'bl', 'bk', 'bn', 'br', 'bs', 'bt', 'bz', 'fb', 'fl', 'fm', 'fn', 'fs', 'ft', 'gg', 'gb', 'gd', 'gh', 'gk', 'gl', 'gm', 'gn', 'gr', 'gs', 'gt', 'gz', 'hd', 'hb', 'hk', 'hn', 'hz', 'kl', 'kn', 'kz', 'kv', 'kk', 'lb', 'ld', 'lg', 'lk', 'll', 'lr', 'ls', 'lt', 'lv', 'lz', 'mr', 'mv', 'mz', 'mt', 'nr', 'nv', 'nz', 'nt', 'ph', 'pf', 'pl', 'pn', 'pm', 'pr', 'ps', 'pt', 'pv', 'rb', 'rd', 'rg', 'rk', 'rl', 'rm', 'rn', 'rr', 'rs', 'rt', 'rv', 'rz', 'sb', 'sd', 'sh', 'sk', 'sm', 'sn', 'sr', 'str', 'st', 'sv', 'sz', 'ss', 'tb', 'tl', 'tm', 'tn', 'tr', 'tv', 'tz', 'tt', 'vl', 'vn', 'vr', 'vz'];
  const nm7 = ['h', 'f', 'g', 'l', 'n', 'q', 's', 'x', 'z', 'ls', 'nk', 'zz', 'ld', 'sh', 'sz', 'ss', 'gs', 'sx', 'lx', 'hx', 'th', 'rx', 'rt', 'ft', 'fs', 'fz', 'lm', 'lk', 'lt', 'ng', 'nx', 'ns', 'nq'];
  const nm8 = ['e', 'i', 'ee', 'ia', 'ea', 'a', 'ai', '', '', '', '', '', '', '', '', '', '', '', '', ''];


  const i = Math.floor(Math.random() * 10);
  {
    rnd2 = Math.floor(Math.random() * nm2.length);
    rnd2b = Math.floor(Math.random() * nm2.length);
    if (type === 1) {
      rnd5 = Math.floor(Math.random() * nm5.length);
      rnd7 = Math.floor(Math.random() * nm7.length);
      rnd8 = Math.floor(Math.random() * nm8.length);
      if (i < 5) {
        names = nm5[rnd5] + nm2[rnd2] + nm7[rnd7] + nm8[rnd8];
      } else {
        rnd6 = Math.floor(Math.random() * nm6.length);
        names = nm5[rnd5] + nm2[rnd2] + nm6[rnd6] + nm2[rnd2b] + nm7[rnd7] + nm8[rnd8];
      }
    } else {
      rnd5 = Math.floor(Math.random() * nm1.length);
      rnd7 = Math.floor(Math.random() * nm4.length);
      if (i < 5) {
        names = nm1[rnd5] + nm2[rnd2] + nm4[rnd7];
      } else {
        rnd3 = Math.floor(Math.random() * nm3.length);
        names = nm1[rnd5] + nm2[rnd2] + nm3[rnd3] + nm2[rnd2b] + nm4[rnd7];
      }
    }
    return names;
  }
}
