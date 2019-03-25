export default function khajiits() {
  let names;
  let names1;
  let names2;
  let rnd;
  let rnd2;
  let rnd3;
  let tp;
  let rnd;
  let rnd2;
  let rnd3;
  let
    rnd4;
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const names3 = ['Ah', 'Boora', 'Hamnu', 'Jar', 'Khar', 'Ka', 'Mahr', 'Ravi', 'Rou', 'Sah', 'Sih', 'Sohl', 'Tawak', 'Zah', 'Ahr', 'Bava', 'Havnu', 'Java', 'Kahra', 'Kihr', 'Marah', 'Rawi', 'Roj', 'Saj', 'Sij', 'Sal', 'Tarvak', 'Zahj', 'Ahj', 'Bahraja', 'Hannu', 'Jahk', 'Khanj', 'Kiji', 'Mahri', 'Rajiv', 'Rahk', 'Sara', 'Sira', 'Sajil', 'Tovik', 'Xa', 'A', 'Bara', 'Hammu', 'Ja', 'Kha', 'Ki', 'Mah', 'Rai', 'Ro', 'Sa', 'Si', 'Sol', 'Tavak', 'Za'];
  const names4 = ['biri', 'bus', 'davi', 'han', 'hir', 'kar', 'manni', 'mnin', 'nai', 'oni', 'rabi', 'spoor', 'stae', 'tani', 'vandi', 'bari', 'bes', 'dawi', 'haan', 'hior', 'kahr', 'mahni', 'mnihn', 'naihn', 'ani', 'rabbi', 'spaer', 'stee', 'tanni', 'vadni', 'bihrri', 'bussi', 'dhari', 'rhan', 'hirn', 'ghar', 'mhan', 'mnirn', 'nair', 'onihr', 'garvi', 'kpoor', 'stavir', 'tannil', 'gandihr', 'bihrith', 'busihr', 'dawihn', 'hasin', 'hirin', 'karon', 'manrin', 'nmin', 'nahir', 'ohin', 'radir', 'sopor', 'stahe', 'tamil', 'vanadi'];
  tp = type;
  if (type === 2) {} else {}
  const i = Math.floor(Math.random() * 10); {
    if (i < 5) {
      rnd = Math.floor(Math.random() * names1.length);
      rnd2 = Math.floor(Math.random() * names2.length);
      names = names1[rnd] + names2[rnd2];
    } else {
      rnd = Math.floor(Math.random() * names1.length);
      rnd2 = Math.floor(Math.random() * names2.length);
      rnd3 = Math.floor(Math.random() * names3.length);
      rnd4 = Math.floor(Math.random() * names4.length);
      names = `${names1[rnd] + names2[rnd2]} ${names3[rnd3]}${names4[rnd4]}`;
    }
    return names;
  }
}
