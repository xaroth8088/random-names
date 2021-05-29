import { sample } from 'lodash-es';

export default function remans() {
  let names;
  const nm1 = ['Aku', 'Anra', 'Ari', 'Axio', 'Bera', 'Bi', 'Bia', 'Bru', 'Dena', 'Dira', 'Do', 'Dri', 'Ja', 'Jeru', 'Jia', 'Jo', 'Ka', 'Kara', 'Kia', 'Kru', 'Lira', 'Lita', 'Lo', 'Lori', 'Me', 'Mekri', 'Mi', 'Mia', 'Na', 'Ni', 'Nira', 'Nori', 'Obi', 'Onu', 'Ora', 'Ovi', 'R\'Da', 'R\'Ki', 'R\'Ve', 'R\'Xi', 'Ra', 'Rena', 'Ria', 'Risu', 'S\'Ha', 'S\'Ki', 'S\'Ma', 'S\'Ri', 'Sa', 'Si', 'Sio', 'Sira', 'Tare', 'Te', 'Tena', 'Ti', 'Tira', 'Via', 'Vkru', 'Vri', 'Vro', 'Xa', 'Xena', 'Xio', 'Xiro'];
  const nm2 = ['clado', 'clek', 'crek', 'crix', 'kad', 'karix', 'kir', 'kirud', 'kix', 'krax', 'krikuk', 'kruvek', 'kuk', 'marik', 'mek', 'mix', 'mosik', 'muk', 'narix', 'natek', 'nuk', 'nuvik', 'nux', 'rad', 'rarix', 'rix', 'ruk', 'ruvix', 'sarix', 'sek', 'sik', 'srix', 'stuk', 'tek', 'tix', 'trik', 'tuk', 'turik', 'vek', 'vik', 'vrex', 'vurik', 'vux'];
  {
    names = sample(nm1) + sample(nm2);
    return names;
  }
}
