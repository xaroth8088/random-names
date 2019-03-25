import sample from 'lodash/sample';

export default function gnome() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Ba', 'Bil', 'Bim', 'Bin', 'Bink', 'Bo', 'Bom', 'Bon', 'Bonk', 'Bu', 'Bur', 'Car', 'Do', 'Don', 'Donk', 'Di', 'Dim', 'Din', 'Dink', 'El', 'Fen', 'Fil', 'Fim', 'Fin', 'Fink', 'Gel', 'Gim', 'Glim', 'Glin', 'Glink', 'Gno', 'Hin', 'Hink', 'Klo', 'La', 'Lo', 'Mit', 'Mittle', 'Nit', 'Nittle', 'Pit', 'Pith', 'Tal', 'Ten', 'Teen', 'Then', 'Thin', 'Think', 'Tin', 'To', 'Toc', 'Tyn'];
  const nm2 = ['k', 'b', 'l', 'ka', 'ba', 'la', 'lo', 'bo', 'ko', 'li', 'bi', 'ki', 'da', 'do', 'di', 'bee', 'lee', 'kee', 'dee', 'le', 'a', 'o', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm3 = ['ago', 'an', 'argo', 'arn', 'ash', 'bick', 'bik', 'bink', 'ble', 'brik', 'brick', 'bus', 'dink', 'dus', 'fink', 'finkle', 'flink', 'fonk', 'flonk', 'fizz', 'go', 'gus', 'kink', 'klink', 'klonk', 'link', 'mac', 'mink', 'nk', 'nus', 'onk', 'rgo', 'sizz', 'ris', 'tink', 'tonk', 'tank', 'think', 'thin', 'ulo', 'vash', 'vizz', 'wick', 'win', 'wack', 'wizz'];
  const nm4 = ['Ba', 'Bil', 'Bim', 'Bin', 'Bink', 'Bip', 'Bix', 'Bixi', 'Bo', 'Bon', 'By', 'Bur', 'Car', 'Di', 'Dim', 'Din', 'Dink', 'Do', 'El', 'Fen', 'Fil', 'Fim', 'Fyn', 'Fynk', 'Gel', 'Gim', 'Gin', 'Ginn', 'Glin', 'Glink', 'Gno', 'Gyn', 'Gynn', 'Hin', 'Hink', 'Jul', 'Kat', 'Kath', 'Kel', 'Ket', 'Keth', 'Kit', 'Kith', 'Klo', 'La', 'Lis', 'Liss', 'Lo', 'Lym', 'Lys', 'Lyss', 'Mer', 'Mit', 'Mittle', 'Nit', 'Nittle', 'Pit', 'Pith', 'Syr', 'Seel', 'Soo', 'Tal', 'Tan', 'Teel', 'Teen', 'Ten', 'Then', 'Thin', 'Think', 'Til', 'Tin', 'To', 'Toc', 'Tyl', 'Tyn'];
  const nm5 = ['ky', 'by', 'la', 'lo', 'bo', 'ko', 'li', 'bi', 'ki', 'da', 'do', 'di', 'bee', 'lee', 'kee', 'dee', 'le', 'a', 'o', 'y', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm6 = ['ago', 'an', 'arn', 'ash', 'bick', 'bik', 'bink', 'ble', 'brik', 'brick', 'bus', 'dink', 'dinkey', 'dinkle', 'dus', 'fink', 'finkle', 'flink', 'flynk', 'fonk', 'flonk', 'fizz', 'fizzy', 'fizzle', 'go', 'gus', 'kin', 'kink', 'klinkle', 'linkey', 'ly', 'mac', 'mink', 'nk', 'nus', 'onk', 'rgo', 'sizz', 'sizzle', 'ris', 'tink', 'tinkle', 'tonk', 'think', 'thinkle', 'thin', 'ulo', 'vash', 'vizz', 'vizzle', 'wick', 'win', 'wack'];
  const nm7 = ['Acer', 'Berry', 'Bizz', 'Black', 'Cast', 'Click', 'Cog', 'Draxle', 'Fast', 'Fine', 'Fizzle', 'Gear', 'Grind', 'Mecha', 'Mekka', 'Over', 'Porter', 'Puddle', 'Sad', 'Shine', 'Short', 'Spanner', 'Spark', 'Spring', 'Spry', 'Steam', 'Storm', 'Swift', 'Thistle', 'Tink', 'Tossle', 'Twist', 'Wobble'];
  const nm8 = ['bang', 'blast', 'bonk', 'bus', 'crank', 'dwadle', 'fizz', 'fizzle', 'fuse', 'fuzz', 'gauge', 'gear', 'grinder', 'house', 'kettle', 'master', 'needle', 'nozzle', 'pipe', 'span', 'spanner', 'spark', 'spindle', 'spinner', 'spring', 'sprocket', 'steel', 'strip', 'torque', 'whistle', 'wizzle', 'wrench'];
  {
    if (type === 1) {
      names = `${sample(nm4) + sample(nm5) + sample(nm6)} ${sample(nm7)}${sample(nm8)}`;
    } else {
      names = `${sample(nm1) + sample(nm2) + sample(nm3)} ${sample(nm7)}${sample(nm8)}`;
    }
    return names;
  }
}
