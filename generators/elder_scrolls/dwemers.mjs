export default function dwemers() {
  let names;
  let names1;
  let names2;
  let rnd2;
  let rnd3;
  let rnd0;
  let rnd1;
  let rnd2;
  let
    rnd3;
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const names3 = ['Aga', 'Alno', 'Asra', 'Aza', 'Ba', 'Bha', 'Bno', 'Bre', 'Care', 'Choa', 'Chra', 'Chru', 'Chze', 'Cra', 'Csto', 'Cza', 'Dju', 'Do', 'Dru', 'Dzre', 'Ge', 'Gra', 'Gri', 'Gzo', 'Ilze', 'Inra', 'Ishe', 'Izvu', 'Ja', 'Jho', 'Jle', 'Jra', 'Ko', 'Kre', 'Ksre', 'Kzre', 'Me', 'Mha', 'Mro', 'Mza', 'Nchu', 'Nhe', 'No', 'Nro', 'Ra', 'Rao', 'Rho', 'Ryu', 'Shra', 'Sne', 'Stu', 'Szo', 'Ta', 'Tcha', 'Tro', 'Tze', 'Ya', 'Ycho', 'Ynza', 'Yre'];
  const names4 = ['baln', 'bchasz', 'bnanch', 'bwarn', 'dchan', 'dlin', 'dras', 'drunz', 'dzach', 'fnyg', 'frach', 'frysz', 'furn', 'garn', 'glan', 'glynsh', 'grenz', 'grozsch', 'gwetch', 'hatch', 'hnch', 'hretz', 'hron', 'huanch', 'larn', 'lchanf', 'lratz', 'lrohn', 'lzarf', 'maratzch', 'mgunch', 'morn', 'mratz', 'mrumhz', 'nard', 'ngnthumz', 'nrazg', 'nruz', 'nrynn', 'nzcharn', 'rach', 'rhytz', 'rlakch', 'rlatz', 'rzhurk', 'tarn', 'tchatz', 'tchzan', 'thurzch', 'tvar', 'varn', 'vnorz', 'vragch', 'vretch', 'vzyrn', 'zalf', 'zchyn', 'zhurz', 'zlurch', 'ztar'];
  if (type === 1) {} else {} {
    rnd0 = Math.floor(Math.random() * names1.length);
    rnd1 = Math.floor(Math.random() * names2.length);
    rnd2 = Math.floor(Math.random() * names3.length);
    rnd3 = Math.floor(Math.random() * names4.length);
    names = `${names1[rnd0] + names2[rnd1]} ${names3[rnd2]}${names4[rnd3]}`;
    return names;
  }
}
