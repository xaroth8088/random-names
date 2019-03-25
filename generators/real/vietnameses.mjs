import sample from 'lodash/sample';

export default function vietnameses() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Au', 'Ba', 'Banh', 'Bi', 'Bien', 'Bo', 'Bui', 'Cam', 'Can', 'Cao', 'Chan', 'Chau', 'Che', 'Chiem', 'Chu', 'Chung', 'Chuong', 'Co', 'Cong', 'Dai', 'Dam', 'Dan', 'Dang', 'Danh', 'Dao', 'Dau', 'Diep', 'Dieu', 'Dinh', 'Dinn', 'Do', 'Doan', 'Don', 'Dong', 'Du', 'Dung', 'Duong', 'Giang', 'Ha', 'Hai', 'Han', 'Hang', 'Hau', 'Ho', 'Hoang', 'Hua', 'Hue', 'Huynh', 'Hy', 'Kha', 'Khong', 'Khuu', 'Kien', 'Kieu', 'Kim', 'Ky', 'La', 'Lac', 'Lai', 'Lam', 'Lang', 'Lavan', 'Le', 'Lien', 'Lieu', 'Lo', 'Loi', 'Luc', 'Luong', 'Luu', 'Ly', 'Ma', 'Mac', 'Mach', 'Mai', 'Minh', 'Nghiem', 'Ngo', 'Ngu', 'Nguy', 'Nguyen', 'Nhan', 'Nzuyen', 'On', 'Ong', 'Pham', 'Phan', 'Phang', 'Phong', 'Phu', 'Phung', 'Phuong', 'Quach', 'Quang', 'Quyen', 'Sai', 'Su', 'Ta', 'Tang', 'Tat', 'Thach', 'Thai', 'Tham', 'Than', 'Thang', 'Thanh', 'Thao', 'Thi', 'Thong', 'Thuy', 'Tian', 'Tien', 'Tieu', 'To', 'Ton', 'Trach', 'Tram', 'Tran', 'Trang', 'Tri', 'Trieu', 'Trinh', 'Tron', 'Troung', 'Truong', 'Tu', 'Tuan', 'Ty', 'Van', 'Vang', 'Vien', 'Vinh', 'Vo', 'Vong', 'Voong', 'Vu', 'Vuong', 'Vuu'];
  const nm2 = ['Van', 'Huu', 'Duc', 'Dinh', 'Xuan', 'Ngoc', 'Quang', 'Cong', 'Manh', 'Trong', 'Qui', '', '', ''];
  const nm3 = ['An', 'Anh Dung', 'Bao ', 'Binh', 'Canh', 'Chien', 'Chinh', 'Cuong', 'Dac Kien', 'Danh', 'Dao', 'Dat', 'De', 'Dien', 'Duc', 'Due', 'Dung', 'Duong', 'Gia', 'Giang', 'Hai', 'Hao', 'Hien', 'Hieu', 'Hoc', 'Hung', 'Huu', 'Huy', 'Huynh', 'Khan', 'Lan', 'Lanh', 'Loc', 'Minh', 'Nguyen', 'Nhat', 'Phuc', 'Phuoc', 'Quan', 'Quang', 'Quoc', 'Sang', 'Si ', 'Sinh', 'Son', 'Thang', 'Thanh', 'Thao', 'Thinh', 'Tho ', 'Thu', 'Thuan', 'Toai', 'Toan', 'Trang', 'Trieu', 'Trong', 'Trong Tri', 'Trung', 'Tu', 'Tuan', 'Tung', 'Van', 'Vien', 'Viet', 'Vuong', 'Xuan'];
  const nm4 = ['Thi', ''];
  const nm5 = ['Ai', 'An', 'Anh', 'Be', 'Bian', 'Bich', 'Binh', 'Cam', 'Canh', 'Chau', 'Chi', 'Dao', 'Diep', 'Diu', 'Doan Vien', 'Dong', 'Giang ', 'Ha', 'Hai', 'Han', 'Hang', 'Hanh Phuc', 'Hien', 'Hoa', 'Hong', 'Hong Hanh', 'Hong Yen', 'Hue', 'Hung', 'Huong ', 'Huyen', 'Hyunh', 'Ket Nien', 'Khanh', 'Kieu', 'Kim', 'Kim Cuc', 'Kim-Ly', 'Lam', 'Lan', 'Lang', 'Lanh', 'Le', 'Le ', 'Lien', 'Lieu', 'Linh', 'Loan', 'Mai', 'My', 'Nam Ha', 'Ngoc', 'Ngoc Bich', 'Ngu', 'Ngu ', 'Nguyet', 'Nhu', 'Nhung', 'Nu ', 'Phuong', 'Quy', 'Quyen', 'Sang', 'Suong', 'Tam', 'Tan', 'Tham', 'Thanh', 'Thanh Ha', 'Thao', 'Thi', 'Thi ', 'Thien ', 'Thom', 'Thu', 'Thuy', 'Tien', 'Trinh', 'Truc', 'Tuyen', 'Tuyet', 'Uoc', 'Van', 'Viet', 'Xuan', 'Yen'];
  {
    if (type === 1) {
      names = `${sample(nm1)} ${sample(nm4)} ${sample(nm5)}`;
    } else {
      names = `${sample(nm1)} ${sample(nm2)} ${sample(nm3)}`;
    }
    return names;
  }
}
