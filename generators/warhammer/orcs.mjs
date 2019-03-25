import sample from 'lodash/sample';

export default function orcs() {
  let names;
  const nm1 = ['', '', '', '', 'b', 'br', 'cr', 'd', 'dr', 'g', 'gr', 'j', 'k', 'kr', 'm', 'n', 'r', 'v', 'w', 'z'];
  const nm2 = ['a', 'i', 'o', 'u'];
  const nm3 = ['dg', 'dz', 'dr', 'g', 'gd', 'gg', 'gh', 'gk', 'gr', 'gz', 'hg', 'hz', 'hzr', 'hrz', 'hr', 'k', 'kd', 'kg', 'kz', 'kr', 'l', 'ld', 'lz', 'lr', 'ldr', 'lgr', 'm', 'mg', 'mh', 'mgr', 'mz', 'mzr', 'mdr', 'md', 'nd', 'ndr', 'nz', 'nzr', 'ng', 'r', 'rb', 'rrz', 'rg', 'rgh', 'rz', 'rzr', 'rk', 'rl', 't', 'tg', 'tk', 'tr', 'tgr', 'tz', 'tzr', 'z', 'zh', 'zn'];
  const nm4 = ['c', 'd', 'g', 'k', 'r', 't', 'z'];
  {
    names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4);
    return names;
  }
}
