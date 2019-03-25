import sample from 'lodash/sample';

export default function fallens() {
  let names;
  const nm1 = ['b', 'br', 'd', 'dr', 'f', 'fr', 'g', 'gr', 'k', 'kr', 'n', 'p', 'ph', 'pr', 'r', 's', 'sk', 't', 'tr', 'v', 'vr', 'w', 'y', 'z'];
  const nm2 = ['a', 'e', 'i', 'o', 'y'];
  const nm3 = ['g', 'gr', 'k', 'kl', 'kn', 'kr', 'ks', 'l', 'ld', 'lkr', 'ltr', 'lv', 'lz', 'p', 'r', 'rk', 'rl', 'rrh', 'sg', 'sgr', 'sk', 'skr', 'str', 'thr', 'tk', 'tr', 'v', 'vg', 'vk', 'vr'];
  const nm4 = ['k', 'ks', 'ks', 'ks', 'n', 'r', 'rk', 's', 's', 's', 'sk'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 5) {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4);
    } else {
      names = sample(nm2) + sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4);
    }
    return names;
  }
}
