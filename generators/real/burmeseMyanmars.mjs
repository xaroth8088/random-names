import sample from 'lodash/sample';

export default function burmeseMyanmars() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm2 = ['Aeindra', 'Ag', 'Aung', 'Aye', 'Cho', 'Ei', 'Eindra', 'Eka', 'Hayma', 'Haymar', 'Hlaing', 'Hline', 'Hnin', 'Hsu', 'Htay', 'Htet', 'Htun', 'Inzali', 'Kay', 'Khaing', 'Khin', 'Khine', 'Kyaw', 'Le', 'Marlar', 'May', 'Mon', 'Myat', 'Myint', 'Myitzu', 'Naing', 'Nanda', 'Nandar', 'New', 'Nhin', 'Nila', 'Nilar', 'Nine', 'Nway', 'Nwe', 'Ohmar', 'Ommar', 'Phone', 'Phyo', 'Phyu', 'Pwint', 'San', 'Sanda', 'Sandar', 'Su', 'Thanda', 'Thandar', 'Thawda', 'Thawdar', 'Thawka', 'Theingi', 'Thet', 'Thi', 'Thida', 'Thidar', 'Thin', 'Thinza', 'Thinzar', 'Thiri', 'Thu', 'Thuzar', 'Tun', 'U', 'Win', 'Yadana', 'Yadanar', 'Yati', 'Yee', 'Yi', 'Yin', 'Yu', 'Yuzana', 'Zar', 'Zaw', 'Zin'];
  const nm1 = ['Ag', 'Arkar', 'Aung', 'Bo', 'Hein', 'Htet', 'Htun', 'Htut', 'Kan', 'Kaung', 'Khaing', 'Khant', 'Khine', 'Ko', 'Kyaw', 'Lin', 'Linn', 'Maung', 'Mg', 'Min', 'Myat', 'Myint', 'Myo', 'Naing', 'Nyan', 'Phone', 'Phyo', 'Phyoe', 'Pyae', 'Pyay', 'Sein', 'Soe', 'Thant', 'Thawda', 'Thet', 'Thiha', 'Thu', 'Thura', 'Thurein', 'Thuta', 'Tun', 'U', 'Wai', 'Win', 'Wunna', 'Yarzar', 'Yaza', 'Ye', 'Zarni', 'Zaw', 'Zeya', 'Zeyar', 'Zin'];
  const i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      if (i < 4) {
        names = `${sample(nm2)} ${sample(nm2)}`;
      } else if (i < 7) {
        names = `${sample(nm2)} ${sample(nm2)} ${sample(nm2)}`;
      } else {
        names = `${sample(nm2)} ${sample(nm2)} ${sample(nm2)} ${sample(nm2)}`;
      }
    } else if (i < 4) {
      names = `${sample(nm1)} ${sample(nm1)}`;
    } else if (i < 7) {
      names = `${sample(nm1)} ${sample(nm1)} ${sample(nm1)}`;
    } else {
      names = `${sample(nm1)} ${sample(nm1)} ${sample(nm1)} ${sample(nm1)}`;
    }
    return names;
  }
}
