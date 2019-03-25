export default function akans() {
  let rnd;
  let rnd2;
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Kwadwó (Monday)', 'Kwabená (Tuesday)', 'Kwakú (Wednesday)', 'Yaw (Thursday)', 'Kofí (Friday)', 'Kwámè (Saturday)', 'Kwǎmè (Saturday)', 'Kwasí (Sunday)', 'Kodjó (Monday)', 'Kojo (Monday)', 'Jojo (Monday)', 'Cudjoe (Monday)', 'Komlá (Tuesday)', 'Komlã (Tuesday)', 'Komlan (Tuesday)', 'Kabenla Kobby (Tuesday)', 'Ebo (Tuesday)', 'Kobi Kobina (Tuesday)', 'Koku (Wednesday)', 'Kokou (Wednesday)', 'Kweku (Wednesday)', 'Kaku (Wednesday)', 'Kuuku (Wednesday)', 'Yao (Thursday)', 'Yaba (Thursday)', 'Yawo (Thursday)', 'Ekow (Thursday)', 'Kow (Thursday)', 'Kwaw (Thursday)', 'Koffi (Friday)', 'Fiifi (Friday)', 'Yoofi (Friday)', 'Ato (Saturday)', 'Kwami (Saturday)', 'Kuwame (Saturday)', 'Kwamena (Saturday)', 'Kwamina (Saturday)', 'Komi (Saturday)', 'Kwesi (Sunday)', 'Siisi (Sunday)', 'Akwasi (Sunday)', 'Kosi (Sunday)', 'Atá (Twin)', 'Atá Pánin (Younger Twin)', 'Atá Kúmaa (Elder Twin)', 'Táwia (Born after twins)', 'Gaddo (Born after \'Táwia\')', 'Píèsíe (First Born)', 'Mǎnu (Second Born)', 'Meńsã́ (Third Born)', 'Anan (Fourth Born)', 'Anané (Fourth Born)', 'Núm (Fifth Born)', 'Anúm (Fifth Born)', 'Nsĩã́ (Sixth Born)', 'Asón (Seventh Born)', 'Bótwe (Eight Born)', 'Ákron (Ninth Born)', 'Nkróma (Ninth Born)', 'Badú (Tenth Born)', 'Dúkũ (Eleventh Born)', 'Dúnu (Twelfth Born)', 'Kaakyire (Last Born)', 'Mensah (Third Born)', 'Mansah (Third Born)', 'Annan (Fourth Born)', 'Essien (Sixth Born)', 'Esson (Seventh Born)', 'Ansong (Seventh Born)', 'Awotwe (Eight Born)', 'Awotwie (Eight Born)', 'Akun (Ninth Born)', 'Ackon (Ninth Born)', 'Nkrumah (Ninth Born)', 'Bedu (Tenth Born)', 'Berko (First Born)', 'Arko (First Born)', 'Afúom (On the field)', 'Ɔkwán (On the road)', 'Bekṍe (In war)', 'Afiríyie (Happy circumstances)', 'Adofo (Loving circumstances)', 'Agyenim (Great one)', 'Nyamékyε (After long childlessness)', 'Nyaméama (Premature)', 'Kumi (Forcefully)', 'Antó (After death of father)', 'Obím̀pέ (Father refuses)', 'Yεmpέw (Father refuses)'];
  const nm2 = ['Adwoa (Monday)', 'Abenaa (Tuesday)', 'Abénaa (Tuesday)', 'Akua (Wednesday)', 'Akúá (Wednesday)', 'Akuba (Wednesday)', 'Yaa (Thursday)', 'Afua (Friday)', 'Ám̀ma (Saturday)', 'Ámmá (Saturday)', 'Akosua (Sunday)', 'Adjua (Monday)', 'Ajwoba (Monday)', 'Adjoa (Monday)', 'Adjowa (Monday)', 'Ablá (Tuesday)', 'Ablã (Tuesday)', 'Abena (Tuesday)', 'Araba (Tuesday)', 'Abrema (Tuesday)', 'Akú (Wednesday)', 'Ekua (Wednesday)', 'Ayawa (Thursday)', 'Baaba (Thursday)', 'Yaaba (Thursday)', 'Aba (Thursday)', 'Afí (Friday)', 'Afua (Friday)', 'Efia (Friday)', 'Efua (Friday)', 'Ame (Saturday)', 'Ama (Saturday)', 'Ami (Saturday)', 'Amba (Saturday)', 'Ameyo (Saturday)', 'Akosi (Sunday)', 'Akosiwa (Sunday)', 'Así (Sunday)', 'Esi (Sunday)', 'Kwasiba (Sunday)', 'Ataá (Twin)', 'Ataá Pánin (Younger Twin)', 'Ataá Kúmaa (Elder Twin)', 'Táwia (Born after twins)', 'Nyankómàgó (Born after \'Táwia\')', 'Mensah (Third Born)', 'Mansah (Third Born)', 'Annan (Fourth Born)', 'Essien (Sixth Born)', 'Esson (Seventh Born)', 'Ansong (Seventh Born)', 'Awotwe (Eight Born)', 'Awotwie (Eight Born)', 'Akun (Ninth Born)', 'Ackon (Ninth Born)', 'Nkrumah (Ninth Born)', 'Bedu (Tenth Born)', 'Dede (First Born)', 'Dedei (First Born)', 'Abaka (First Born)', 'Kande (First Born)', 'Píèsíe (First Born)', 'Máanu (Second Born)', 'Mánsã (Third Born)', 'Anan (Fourth Born)', 'Anané (Fourth Born)', 'Núm (Fifth Born)', 'Anúm (Fifth Born)', 'Nsĩã́ (Sixth Born)', 'Nsṍwaa (Seventh Born)', 'Bótwe (Eight Born)', 'Nkróma (Ninth Born)', 'Badúwaa (Tenth Born)', 'Dúkũ (Eleventh Born)', 'Dúnu (Twelfth Born)', 'Kaakyire (Last Born)', 'Bedíàkṍ (In war)', 'Afúom (On the field)', 'Ɔkwán (On the road)', 'Afiríyie (Happy circumstances)', 'Adofo (Loving circumstances)', 'Agyenim (Great one)', 'Nyamékyε (After long childlessness)', 'Nyaméama (Premature)', 'Kumi (Forcefully)', 'Antó (After death of father)', 'Obím̀pέ (Father refuses)', 'Yεmpέw (Father refuses)'];
  const nm3 = ['Abeberese', 'Abeyie', 'Aboagye', 'Aboah', 'Aborah', 'Aborampah', 'Abrafi', 'Abrefa', 'Achamfour', 'Acheampong', 'Acquah', 'Adade', 'Addai', 'Addo', 'Adiyiah', 'Adomah', 'Adomako', 'Adusei', 'Adwubi', 'Afful', 'Afirifa', 'Afoakwah', 'Afrakoma', 'Afrakomah', 'Afram', 'Afrane', 'Afreh', 'Afrifa', 'Afriyie', 'Agyapong', 'Agyare', 'Agyei', 'Agyeman', 'Agyemang', 'Ahinful', 'Akaminko', 'Akenten', 'Akenteng', 'Akomeah', 'Akomfrah', 'Akosah', 'Akoto', 'Akrofi', 'Akuamoah', 'Akuffo', 'Akyaw', 'Amakye', 'Amamfo', 'Amankona', 'Amankonah', 'Amankwah', 'Ameyaw', 'Amissah', 'Amoabeng', 'Amoah', 'Amoako', 'Amoateng', 'Amofah', 'Ampadu', 'Ampem', 'Ampofo', 'Amponsah', 'Amponsem', 'Andoh', 'Ankobiah', 'Ankomah', 'Ankrah', 'Annan', 'Anokye', 'Ansah', 'Apau', 'Apori Antwi', 'Appiah', 'Arkorful', 'Asamoah', 'Asante', 'Asantewaa', 'Asare', 'Asenso', 'Ashia', 'Asiamah', 'Asiedu', 'Asomadu', 'Asomaning', 'Assifuah', 'Asubonteng', 'Awuah', 'Ayeh', 'Ayensu', 'Ayew', 'Baafi', 'Baah', 'Baako', 'Baffoe', 'Bafuor', 'Baidoo', 'Banahene', 'Barwuah', 'Bediako', 'Bekoe', 'Bemah', 'Boadi', 'Boadu', 'Boahen', 'Boakye', 'Boamah', 'Boampong', 'Boasiako', 'Boatei', 'Boateng', 'Bonah', 'Bonsra', 'Bonsrah', 'Bonsu', 'Brempong', 'Busia', 'Busiah', 'Cofie', 'Crentsil', 'Cuffee', 'Daako', 'Dankwah', 'Danquah', 'Danso', 'Dapaa', 'Dapaah', 'Darko', 'Diawuo', 'Djan', 'Djansi', 'Domfe', 'Donkor', 'Dorkenoo', 'Duah', 'Dufie', 'Duodu', 'Dwamena', 'Dwamenah', 'Dwomoh', 'Ekuoba', 'Enninful', 'Essien', 'Farkyi', 'Firikyi', 'Fofie', 'Fokuo', 'Fordjour', 'Forobuor', 'Fredua', 'Freduah', 'Fremah', 'Frempon', 'Frempong', 'Frimpong', 'Gyaama', 'Gyakari', 'Gyamah', 'Gyambibi', 'Gyamera', 'Gyamerah', 'Gyamfi', 'Gyan', 'Gyasi', 'Gyeabuor', 'Gyimah', 'Inkoom', 'Karikari', 'Katakyie', 'Kenu', 'Koduah', 'Kofi', 'Kokote', 'Konadu', 'Koranten', 'Koranteng', 'Korsah', 'Kouassi', 'Kuffour', 'Kufuor', 'Kumankama', 'Kusi', 'Kusiwaa', 'Kwaata', 'Kwakye', 'Kwarteng', 'Kwateng', 'Kwayie', 'Kyei', 'Kyekyeku', 'Kyem', 'Kyerematen', 'Kyeremateng', 'Kyereme', 'Kyerewa', 'Kyerewaa', 'Manso', 'Mensah', 'Mintah', 'Misa', 'Mmorosa', 'Mpong', 'Munuo', 'Narh', 'Nduom', 'Nimo', 'Nimoh', 'Nkansa', 'Nkansah', 'Nkrumah', 'Nsiah', 'Nsonwaa', 'Nsonwah', 'Nsor', 'Ntiamoa', 'Ntiamoah', 'Ntim', 'Ntow', 'Nuamah', 'Nyamekye', 'Nyankomago', 'Nyantah', 'Nyantakyi', 'Nyarko', 'Obeng', 'Obuor', 'Oduro', 'Ofori', 'Ofosu', 'Ogyampah', 'Ohemeng', 'Ohene', 'Okese', 'Okoromansah', 'Okyere', 'Omenaa', 'Omenah', 'Opambuor', 'Opare', 'Opoku', 'Oppong', 'Opuni', 'Osafo', 'Osam', 'Osei', 'Oteng', 'Otuo', 'Owoahene', 'Owusu', 'Oyiakwan', 'Paintsil', 'Pappoe', 'Peprah', 'Pinaman', 'Poku', 'Prempeh', 'Quainoo', 'Quansah', 'Safo', 'Sakyi', 'Sarfo', 'Sarkodie', 'Sarpei', 'Sarpon', 'Sarpong', 'Sasraku', 'Siabuor', 'Siaw', 'Sika', 'Sikafuo', 'Sintim', 'Siriboe', 'Soadwa', 'Soadwah', 'Sowah', 'Tagoe', 'Takyi', 'Tandoh', 'Tawiah', 'Tuffour', 'Twasam', 'Tweneboa', 'Tweneboah', 'Twerefuo', 'Twum', 'Twumasi', 'Vorsah', 'Wiafe', 'Wiredu', 'Yamoah', 'Yankah', 'Yartei', 'Yeboah', 'Yiadom'];
  {
    rnd2 = Math.floor(Math.random() * nm3.length);
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm2.length);
      names = `${nm2[rnd]} ${nm3[rnd2]}`;
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      names = `${nm1[rnd]} ${nm3[rnd2]}`;
    }
    return names;
  }
}
