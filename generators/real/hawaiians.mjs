export default function hawaiians() {
  let rnd;

  let rnd2;


  let names;

  const type = Math.random() < 0.5 ? 0 : 1;

  const nm1 = ['\'A\'ala', '\'A\'amakualenalena', '\'Aila\'au', '\'Ailana', '\'Ailani', '\'Ainakea', '\'Ainalani', '\'Ainanani', '\'Akahi', '\'Akau', '\'Ala', '\'Alaneo', '\'Alepo\'i', '\'Alihi Kaua', '\'Alohi', '\'Alohilani', '\'Alohilohi', '\'Aluna', '\'Ano\'i', '\'Ano\'ipua', '\'Anolani', '\'Apona', '\'Auina', '\'Aukai', '\'Ehu', '\'Ele', '\'Enakai', '\'Ilima', '\'Iolani', '\'Olina', '\'Opunui', 'A\'alona', 'A\'ia\'i', 'Aarona ', 'Ahe', 'Aheahe', 'Ahonui', 'Ahuahu', 'Ahulani', 'Aiwaiwa', 'Aka\'ula', 'Akahele', 'Akamai', 'Akamu', 'Akamu ', 'Akanahe', 'Akeakamai', 'Akela', 'Akiliano', 'Akoni', 'Akoni ', 'Alaka\'i', 'Alamimo', 'Alana', 'Alani', 'Alapa\'i', 'Alapai', 'Alaula', 'Alebana', 'Alekanedero', 'Alekanekelo', 'Alekona', 'Alemana', 'Alena ', 'Alepana', 'Aletona', 'Alevina', 'Alewina', 'Ali\'imalu', 'Alika', 'Aloalo', 'Aloha', 'Alohaekaunei', 'Alohalani', 'Alohanani', 'Alohilani', 'Aloiki', 'Aloisi', 'Amoka', 'Amosa', 'Anadare', 'Anakale', 'Anakoni', 'Analu', 'Anatoni', 'Anederea', 'Anekelea', 'Anela', 'Aniani', 'Ano', 'Anolu ', 'Anuenue', 'Anuenue Akua', 'Anuhea', 'Aolani', 'Aoloa', 'Aonani', 'Aouli', 'Aowena', 'Apekaloma', 'Apela', 'Apelahama', 'Apikai', 'Aremana', 'Atoni', 'Auali\'i', 'Aukanai\'i', 'Aukukino', 'Aulani', 'Aulii', 'Aumoe', 'Ehehene', 'Ekewaka ', 'Elika ', 'Ewe', 'Ewekapu', 'Ewelani', 'Feleti', 'Ha\'aheo', 'Ha\'iku', 'Ha\'ulili', 'Ha\'upu', 'Haku', 'Hakumele', 'Halana malie', 'Hale ', 'Haleakua', 'Halemano', 'Hali\'a', 'Hali\'aaloha', 'Hali\'imaile', 'Halia', 'Haloa', 'Halolani', 'Halulu', 'Hanaaloha', 'Hanaiakamalama', 'Hanakahi', 'Hanalei', 'Hanau hou', 'Hanauhoulani', 'Hani', 'Hanini', 'Hanohano', 'Haoa ', 'Hau kea', 'Hau\'oli', 'Hau\'oli\'oli', 'Haulani', 'Haumakapu\'u', 'Haunani', 'Haupuehuehu', 'Hawaii', 'Hekili', 'Heleuma', 'Hemolele', 'Hemolelekeakua', 'Heneli ', 'Hi\'ilani', 'Hi\'ilawe', 'Hi\'ilei', 'Hiapa\'i\'ole', 'Hiapo', 'Hie', 'Hiehie', 'Hikialani', 'Hilo', 'Hinano', 'Hinuhinu', 'Hiwa lani', 'Hiwahiwa', 'Hiwahiwakeiki', 'Ho\'ohie', 'Ho\'ohiehie', 'Ho\'okele', 'Ho\'ola\'i', 'Ho\'olana', 'Ho\'olaua\'e', 'Ho\'opa\'a', 'Hoa kua', 'Hoa pili', 'Hoaalohakupa\'a', 'Hoaka', 'Hoakoa', 'Hoalohalani', 'Hoalohanani', 'Hokeo', 'Hoku', 'Hoku ala', 'Hoku\'alohi', 'Hokuao', 'Hokuaonani', 'Hokuhelele\'i', 'Hokulani', 'Hokule\'a', 'Hokulele', 'Hokuli\'ili\'i', 'Hokupa\'a', 'Holo\'oka\'a', 'Holokai', 'Holomakani', 'Hone', 'Honehone', 'Honi', 'Hu\'elani', 'Hu\'eu', 'Huaka', 'Hualani', 'Huali', 'Huananai', 'Huapala', 'Hulama', 'Huluali\'i', 'Hunakai', 'Iakepa', 'Iakona ', 'Iasepa', 'Ihe', 'Ihupani', 'Ikaika', 'Ilihia', 'Inoa', 'Inoke', 'Ioane ', 'Iokepa', 'Iokua ', 'Iolani', 'Iona\'ala', 'Ionatana ', 'Ipo', 'Ipolani', 'Iukekini ', 'Iwalani', 'Iwana ', 'Ka\'ana\'ana', 'Ka\'aona', 'Ka\'apeha', 'Ka\'aukai', 'Ka\'aumoana', 'Ka\'ehu', 'Ka\'ena', 'Ka\'eo', 'Ka\'ihikapu', 'Ka\'iimamao', 'Ka\'ike\'apona', 'Ka\'ili', 'Ka\'ilinemo', 'Ka\'imi', 'Ka\'iulani', 'Ka\'ohu', 'Ka\'uhane', 'Kaha\'aheo', 'Kaha\'i', 'Kahakea', 'Kahakuhale', 'Kahakuloa', 'Kahale', 'Kahana', 'Kahananui', 'Kahanu', 'Kahaulani', 'Kahauolupea', 'Kahawai', 'Kaheka', 'Kaheka\'alohi', 'Kahekili', 'Kahele', 'Kahelemeakua', 'Kahewai', 'Kahiau', 'Kahikilani', 'Kahikina', 'Kahikookeakua', 'Kahili', 'Kahoku', 'Kaholo', 'Kahoni', 'Kahua', 'Kahue', 'Kahuna', 'Kai', 'Kaiaka', 'Kaiapo', 'Kaiea', 'Kaiemi', 'Kaihalulu', 'Kaihe', 'Kaihekoa', 'Kaiho\'i', 'Kaihohonu', 'Kaiholo', 'Kaikane', 'Kaikea', 'Kaiko', 'Kaili', 'Kaimalie', 'Kaimalolo', 'Kaimana', 'Kainalu', 'Kainehe', 'Kainoa', 'Kainu\'u', 'Kainui', 'Kaipalaoa', 'Kaipo', 'Kaipo\'i', 'Kaiulu', 'Kaiwi', 'Kakahi', 'Kakielekea', 'Kakumulani', 'Kala', 'Kala\'i', 'Kalaheo', 'Kalama', 'Kalani', 'Kalawai\'a', 'Kalawina ', 'Kale', 'Kale ', 'Kale\'a', 'Kaleho', 'Kalei', 'Kaleialoha', 'Kaleikaumaka', 'Kaleiokalani', 'Kaleo', 'Kaleoaloha', 'Kaleolani', 'Kalia', 'Kaliko', 'Kalikohemolele', 'Kalili', 'Kalino', 'Kalua', 'Kama', 'Kama hele', 'Kamaha\'o', 'Kamahi\'ai', 'Kamaile', 'Kamaka', 'Kamakakoa', 'Kamakana', 'Kamakani', 'Kamala', 'Kamalani', 'Kamalei', 'Kamaluhiakapu', 'Kamamalu', 'Kamani', 'Kamea', 'Kamealoha', 'Kamoku', 'Kamole', 'Kamuela ', 'Kana', 'Kana\'i', 'Kanakanui', 'Kanale ', 'Kanaloa', 'Kanani', 'Kane', 'Kaneho\'omalu', 'Kanoa', 'Kanoelani', 'Kanuha', 'Kanupa', 'Kapahu', 'Kapalaoa', 'Kapalekanaka', 'Kapali', 'Kapena', 'Kapono', 'Kapua', 'Kapua\'ilima', 'Kapua\'ula', 'Kapueo', 'Kapula', 'Kapule', 'Kapuni', 'Kau\'i', 'Kau\'ilani', 'Kauanoe', 'Kauhi', 'Kaulana', 'Kawai', 'Kawailani', 'Kawaimomona', 'Kawelo', 'Kawena', 'Kawena\'ula', 'Kawika', 'Kawikani', 'Ke\'ala', 'Ke\'alohi', 'Ke\'alohilani', 'Ke\'ohi', 'Keahi', 'Keahilani', 'Keaka', 'Keaka ', 'Keala´alohi', 'Keala', 'Kealamauloa', 'Kealani', 'Keali\'i', 'Kealii', 'Kealoha', 'Keani', 'Keanu', 'Keao', 'Keawe', 'Keha', 'Kei', 'Keikemamake', 'Keiki', 'Keikilani', 'Kekelika ', 'Kekipi', 'Kekoa', 'Kelalani', 'Kelani', 'Kele ', 'Kelewina ', 'Keli ', 'Keli\'i', 'Kelii', 'Kenika ', 'Keo', 'Keo ', 'Keoki ', 'Keokolo ', 'Keola', 'Keolakupaianaha', 'Keolamauloa', 'Keon', 'Keona', 'Keonaona', 'Keone', 'Keoni', 'Kepano ', 'Kewika ', 'Kikeona', 'Kila', 'Kileona', 'Kilikikopa ', 'Kilohana', 'Kimo', 'Kimo ', 'Kini', 'Kiwini ', 'Koa', 'Koamalu', 'Koma ', 'Kominiko ', 'Kona', 'Konala', 'Konane', 'Ku', 'Ku\'ualoha', 'Kuali\'i', 'Kuenekina ', 'Kukane', 'Kulamau\'u', 'Kulani', 'Kupa\'alani', 'La\'akea', 'Lahahana', 'Laionela', 'Laka', 'Lalepa ', 'Lanakila', 'Lani', 'Lei', 'Lei ', 'Leialoha', 'Leilani', 'Leinani', 'Leolani', 'Lewai ', 'Lewi', 'Lihau', 'Likeke ', 'Liko', 'Lilo', 'Loe', 'Lokelani', 'Lokomaika\'i', 'Lono', 'Lopaka ', 'Lulani', 'Mahi\'ai', 'Mahoe', 'Maika\'i', 'Maika\'ikeakua', 'Maka\'alohi', 'Maka\'alohilohi', 'Makaio', 'Makaio ', 'Makala', 'Makalohi', 'Makana', 'Makanaakua', 'Makanamaika\'i', 'Makanaokeakua', 'Makani', 'Makanui', 'Makoa', 'Malana', 'Maleko ', 'Malu', 'Maluhia', 'Maluhialani', 'Malulani', 'Maluokeakua', 'Mamo', 'Mana', 'Mana\'o\'i\'o', 'Mana\'olana', 'Mana\'olanakeiki', 'Manu', 'Manuku', 'Manumakali\'i', 'Mapuana', 'Maui', 'Mika\'ele', 'Mikala ', 'Milana', 'Miliani', 'Milimili', 'Mo\'o', 'Moana', 'Mohala', 'Moke', 'Nahele', 'Nainoa', 'Nakana\'ela ', 'Nakoa', 'Nalani', 'Nalunani', 'Nawai', 'Nihopalaoa', 'Nikolao', 'Nikolo ', 'Noa', 'Noa ', 'Noela ', 'Noelani', 'Nohea', 'Nohokai', 'Nu\'uanu', 'Oke', 'Olakeakua', 'Onaona', 'Pa\'ahana', 'Palani ', 'Paulo ', 'Pekelo ', 'Peleke ', 'Peni ', 'Pi\'ilani', 'Pili ', 'Pilipo ', 'Pomaika\'i', 'Pua', 'Punawai', 'Uilama', 'Uiliama', 'Ululani', 'Uluwehi', 'Wainani', 'Wana\'ao', 'Wana\'aonani', 'Wehilani'];
  const nm2 = ['\'A\'ala', '\'Ailana', '\'Ailani', '\'Ainakea', '\'Ainalani', '\'Ainanani', '\'Akahi', '\'Akau', '\'Ala', '\'Alaneo', '\'Alepo\'i', '\'Alihi Kaua', '\'Alohi', '\'Alohilani', '\'Alohilohi', '\'Aluna', '\'Anela', '\'Ano\'i', '\'Ano\'ipua', '\'Anolani', '\'Apona', '\'Auina', '\'Aukai', '\'Aulani', '\'Ele', '\'Enakai', '\'Ilima', '\'Iolani', '\'Iwalani', '\'Olina', '\'Opunui', 'A\'ia\'i', 'Abegaila', 'Ahe', 'Aheahe', 'Ahonui', 'Ahuahu', 'Ahulani', 'Aiwaiwa', 'Aka\'ula', 'Akahele', 'Akamai', 'Akanahe', 'Akeakamai', 'Alaka\'i', 'Alamea', 'Alamimo', 'Alana', 'Alani', 'Alanna', 'Alapa\'i', 'Alaula', 'Aleka', 'Aleka', 'Ali\'imalu', 'Alika', 'Aloalo', 'Aloha', 'Alohaekaunei', 'Alohalani', 'Alohanani', 'Alohilani', 'Amana', 'Amanaka', 'Ana', 'Anakalia', 'Ane', 'Anela', 'Anela', 'Aniani', 'Anika', 'Ano', 'Anuenue', 'Anuenue Akua', 'Anuhea', 'Aolani', 'Aoloa', 'Aonani', 'Aouli', 'Aowena', 'Apika\'ila', 'Auali\'i', 'Aukanai\'i', 'Aulani', 'Aulii', 'Aumoe', 'Ehehene', 'Elena', 'Elika', 'Elikapeka', 'Elikapeka', 'Eme', 'Emele', 'Emelina', 'Ewe', 'Ewekapu', 'Ewelani', 'Ha\'aheo', 'Ha\'iku', 'Ha\'ulili', 'Ha\'upu', 'Haku', 'Hakumele', 'Halana malie', 'Haleakua', 'Halemano', 'Hali\'a', 'Hali\'aaloha', 'Hali\'imaile', 'Halia', 'Haloa', 'Halolani', 'Halulu', 'Hanaaloha', 'Hanaiakamalama', 'Hanakahi', 'Hanalei', 'Hanau hou', 'Hanauhoulani', 'Hani', 'Hanini', 'Hanohano', 'Hau kea', 'Hau\'oli', 'Hau\'oli\'oli', 'Haulani', 'Haumea', 'Haunani', 'Haupuehuehu', 'Hawaii', 'Healani', 'Hekili', 'Helena', 'Helene', 'Heleuma', 'Helina', 'Hemolele', 'Hemolelekeakua', 'Hi\'iaka', 'Hi\'ilani', 'Hi\'ilawe', 'Hi\'ilei', 'Hiapa\'i\'ole', 'Hiapo', 'Hie', 'Hiehie', 'Hikialani', 'Hina', 'Hina\'ea', 'Hinuhinu', 'Hiwa lani', 'Hiwahiwa', 'Hiwahiwakeiki', 'Ho\'ohie', 'Ho\'ohiehie', 'Ho\'okele', 'Ho\'ola\'i', 'Ho\'olana', 'Ho\'olaua\'e', 'Ho\'opa\'a', 'Hoa kua', 'Hoa pili', 'Hoaalohakupa\'a', 'Hoaka', 'Hoakoa', 'Hoalohalani', 'Hoalohanani', 'Hoku', 'Hoku ala', 'Hoku\'alohi', 'Hokuao', 'Hokuaonani', 'Hokuhelele\'i', 'Hokulani', 'Hokule\'a', 'Hokulele', 'Hokuli\'ili\'i', 'Hokupa\'a', 'Holo\'oka\'a', 'Holokai', 'Holomakani', 'Hone', 'Honehone', 'Honi', 'Hopoelehua', 'Hu\'elani', 'Hu\'eu', 'Huaka', 'Hualani', 'Huali', 'Huananai', 'Huapala', 'Hulama', 'Huluali\'i', 'Hunakai', 'Ianeke', 'Ianete', 'Ienipa', 'Ihe', 'Ihupani', 'Ilihia', 'Inoa', 'Ioke', 'Iokina', 'Iolana', 'Iolani', 'Iona\'ala', 'Ipo', 'Ipolani', 'Iukikina', 'Iulia', 'Iwalani', 'Ka\'ana\'ana', 'Ka\'aona', 'Ka\'apeha', 'Ka\'aumoana', 'Ka\'ehu', 'Ka\'ena', 'Ka\'eo', 'Ka\'ihikapu', 'Ka\'iimamao', 'Ka\'ike\'apona', 'Ka\'ili', 'Ka\'ilinemo', 'Ka\'imi', 'Ka\'iulani', 'Ka\'ohu', 'Ka\'uhane', 'Kaha\'aheo', 'Kahakea', 'Kahakuhale', 'Kahakuloa', 'Kahalaomapuana', 'Kahale', 'Kahana', 'Kahanu', 'Kahaulani', 'Kahauolupea', 'Kahawai', 'Kahealani', 'Kaheka', 'Kaheka\'alohi', 'Kahekili', 'Kahele', 'Kahelemeakua', 'Kahewai', 'Kahiau', 'Kahikilani', 'Kahikina', 'Kahikookeakua', 'Kahili', 'Kahoku', 'Kaholo', 'Kahoni', 'Kahua', 'Kahue', 'Kahula', 'Kahuna', 'Kai', 'Kaiaka', 'Kaiapo', 'Kaiea', 'Kaiemi', 'Kaihalulu', 'Kaihe', 'Kaihekoa', 'Kaiho\'i', 'Kaihohonu', 'Kaiholo', 'Kaikea', 'Kaiko', 'Kaila', 'Kailani', 'Kaili', 'Kaimalie', 'Kaimalolo', 'Kaimana', 'Kainehe', 'Kainoa', 'Kainu\'u', 'Kainui', 'Kaiona', 'Kaipalaoa', 'Kaipo', 'Kaipo\'i', 'Kaiulu', 'Kakahi', 'Kakarina', 'Kakielekea', 'Kakumulani', 'Kala', 'Kala\'i', 'Kalaheo', 'Kalala', 'Kalala', 'Kalalaina', 'Kalalika', 'Kalama', 'Kalani', 'Kale', 'Kale\'a', 'Kalea', 'Kaleho', 'Kalehua', 'Kalei', 'Kaleialoha', 'Kaleiokalani', 'Kalena', 'Kaleo', 'Kaleoaloha', 'Kaleolani', 'Kali\'a', 'Kalia', 'Kaliko', 'Kalili', 'Kalilinoe', 'Kalino', 'Kaliona', 'Kalolaina', 'Kalua', 'Kama hele', 'Kamaha\'o', 'Kamaile', 'Kamaka', 'Kamakana', 'Kamakani', 'Kamala', 'Kamalah', 'Kamalani', 'Kamalei', 'Kamamalu', 'Kamani', 'Kamea', 'Kamealoha', 'Kameli', 'Kamila', 'Kamoana', 'Kamole', 'Kana', 'Kanae', 'Kanaloa', 'Kanani', 'Kanoa', 'Kanoelani', 'Kanuha', 'Kanupa', 'Kapahu', 'Kapena', 'Kapi\'olani', 'Kaponianani', 'Kapono', 'Kapua', 'Kapua\'ilima', 'Kapua\'ula', 'Kapueo', 'Kapula', 'Kapule', 'Kapuni', 'Kau\'i', 'Kau\'ilani', 'Kauanoe', 'Kaulana', 'Kauluwehi', 'Kawai', 'Kawailani', 'Kawaimomona', 'Kawehi', 'Kawelu', 'Kawena', 'Kawena\'ula', 'Ke\'ala', 'Ke\'alohi', 'Ke\'alohilani', 'Ke\'ohi', 'Keahi', 'Keahilani', 'Keaka', 'Keala', 'Kealani', 'Kealii', 'Kealoha', 'Keana', 'Keani', 'Keanu', 'Keao', 'Keawe', 'Keeaola', 'Keena', 'Keha', 'Kehau', 'Kehaulani', 'Kei', 'Keikemamake', 'Keiki', 'Keikilani', 'Keilani', 'Keke', 'Kekepania', 'Kekipi', 'Kekoa', 'Kela', 'Kelalani', 'Kelani', 'Keli\'i', 'Kelia', 'Kelii', 'Keola', 'Keolakupaianaha', 'Keona', 'Keonaona', 'Kiana', 'Kiana', 'Kiele', 'Kielekea', 'Kilikina', 'Kilohana', 'Kimi', 'Kimi', 'Kina', 'Kini', 'Kinipela', 'Kolina', 'Kolokea', 'Konane', 'Korina', 'Ku\'ualoha', 'Ku\'uipo', 'Ku\'ulei', 'Ku\'uleialoha', 'Kuilei', 'Kukana', 'Kulani', 'Kuli', 'Kuliana', 'Kunani', 'Kupa\'alani', 'Lahela', 'Lahela', 'Laka', 'Lala', 'Lana', 'Lanai', 'Lanakila', 'Lani', 'Lea', 'Lea', 'Lehua', 'Lei', 'Leialoha', 'Leilani', 'Leimomi', 'Leina\'ala', 'Leinani', 'Leolani', 'Leonani', 'Lepeka', 'Lihau', 'Lika', 'Lilia', 'Lilinoe', 'Lilo', 'Loe', 'Lokapele', 'Loke', 'Lokelani', 'Lokemele', 'Lokomaika\'i', 'Lokomaika\'inani', 'Lu\'ukia', 'Luka', 'Luke', 'Lukia', 'Lukia', 'Lulia', 'Lupe', 'Mahealani', 'Mahina', 'Mahoe', 'Maika\'i', 'Maika\'ikeakua', 'Maila', 'Maile', 'Maira', 'Maka', 'Maka\'alohi', 'Maka\'alohilohi', 'Makaio', 'Makala', 'Makalika', 'Makamae', 'Makana', 'Makanaakua', 'Makanamaika\'i', 'Makani', 'Makanui', 'Makela', 'Makelina', 'Malaea', 'Malalani', 'Malana', 'Malea', 'Maleah', 'Maleia', 'Maleka', 'Malia', 'Malia', 'Maliana', 'Malie', 'Malu', 'Maluhia', 'Maluhialani', 'Malulani', 'Mamo', 'Mana', 'Mana\'o\'i\'o', 'Mana\'olana', 'Mana\'olanakeiki', 'Manaali\'i', 'Manalani', 'Manawale\'a', 'Manu', 'Mapuana', 'Mei', 'Mele', 'Mele', 'Meli', 'Melia', 'Melika', 'Mikala', 'Mikilana', 'Milana', 'Milena', 'Maile', 'Miliani', 'Mililani', 'Milimili', 'Miulana', 'Mo\'o', 'Moana', 'Moananani', 'Moani', 'Mohala', 'Moke', 'Mokihana', 'Momi', 'Momi', 'Momilani', 'Nai\'a', 'Nalani', 'Nalukea', 'Namaka', 'Nanala', 'Nanea', 'Naneki', 'Nani', 'Naniahiahi', 'Naomi', 'Napua', 'Nawai', 'Nele', 'Nina', 'Noelani', 'Nohea', 'Nohealani', 'Okalani', 'Oke', 'Olakeakua', 'Onaona', 'Pauahi', 'Peke', 'Pele', 'Pelenakeka', 'Pi\'ikea', 'Pi\'ilani', 'Pikake', 'Pilikika', 'Pineki', 'Pole', 'Poli\'ahu', 'Pomaika\'i', 'Pua', 'Puakai', 'Puakea', 'Pualani', 'Puanani', 'Qiana', 'Qianna', 'Quiana', 'Roselani', 'U\'ilani', 'Ululani', 'Uluwehi', 'Wailani', 'Wainani', 'Waiola', 'Wana\'ao', 'Wana\'ao', 'Wana\'aonani', 'Wanaka', 'Wehilani', 'Wikolia', 'Wilikinia'];
  const nm3 = ['\'Akamu', '\'Aukai', '\'Opunui', 'Aelan ', 'Ah-Puck', 'Aikau', 'Ailani ', 'Akamu ', 'Akana', 'Akanu', 'Akela ', 'Akina', 'Akoni ', 'Akuini', 'Alamea ', 'Alana', 'Alana ', 'Alapa', 'Alapai', 'Alaula ', 'Alika ', 'Allen', 'Aloha ', 'Alohilani', 'Alohilani ', 'Amalu', 'Among', 'Anakoni ', 'Analu ', 'Aneko', 'Ano', 'Aolani ', 'Aulani ', 'Awana', 'Dorit ', 'Edena ', 'Ekewaka ', 'Elikapeka ', 'Haiku', 'Hailama', 'Hale', 'Halia ', 'Hamakua', 'Haukea ', 'Hekekia', 'Hina ', 'Hiram', 'Hoapili', 'Hoke', 'Hookano', 'Iakopa ', 'Iaukea', 'Iekika ', 'Ikaia ', 'Inoke ', 'Iokina ', 'Iokua ', 'Iolana ', 'Iolani ', 'Iona', 'Ipo ', 'Iwalani ', 'Ka\'ahanui', 'Ka\'ai\'ai', 'Ka\'ana\'ana', 'Ka\'aukai', 'Ka\'uhane', 'Kaai', 'Kaanaana', 'Kaapana', 'Kaeo', 'Kahala', 'Kahale', 'Kahanamoku', 'Kahananui', 'Kahaulelio', 'Kahawaii', 'Kahele', 'Kahike', 'Kahikina', 'Kahiona', 'Kahoiwai', 'Kahoku ', 'Kahue', 'Kai ', 'Kaia ', 'Kaialani ', 'Kaialiilii', 'Kaiaokamalie', 'Kaila ', 'Kailani ', 'Kailikea', 'Kaimana ', 'Kaimi ', 'Kaipo ', 'Kaiuwaihui', 'Kaiwi', 'Kakalina ', 'Kala ', 'Kalainawai', 'Kalakona', 'Kalama', 'Kalama ', 'Kalani', 'Kalani ', 'Kalanianioli', 'Kalanie ', 'Kalawai\'a', 'Kale ', 'Kalea ', 'Kalei', 'Kalei ', 'Kaleigh ', 'Kalena ', 'Kaleo ', 'Kali ', 'Kalili', 'Kalima', 'Kaloni ', 'Kalua', 'Kaluhiokalani', 'Kaluhiwa', 'Kama', 'Kamaauoha', 'Kamaka', 'Kamakeoaina', 'Kamali\'i', 'Kamauoha', 'Kamea ', 'Kamealoha', 'Kamehaha', 'Kameo ', 'Kana ', 'Kane', 'Kanekalau', 'Kani ', 'Kanoa ', 'Kaoao', 'Kaohi', 'Kapahu', 'Kapiolani', 'Kapono ', 'Kapule', 'Kawaha', 'Kawai', 'Kawena ', 'Keahi', 'Keahi ', 'Keala ', 'Kealoha', 'Keao', 'Keaunui', 'Keawe', 'Keaweamahi', 'Keiki ', 'Keilani ', 'Kekahuna', 'Kekai', 'Kekaula', 'Kekepania ', 'Kekoa', 'Kekoa ', 'Kekumu', 'Kelekolio', 'Keli\'i', 'Kelii ', 'Keliikoa', 'Keoki ', 'Keola ', 'Keolanui', 'Keomalu', 'Keon ', 'Keona ', 'Keone', 'Keoni ', 'Kiana ', 'Kiele ', 'Kiliona', 'Kimo ', 'Kina ', 'Kinimaka', 'Kinipela ', 'Koi ', 'Kona ', 'Konala ', 'Konane ', 'Laban ', 'Laemoa', 'Lahela ', 'Lala ', 'Lana ', 'Lanai ', 'Lani ', 'Lea ', 'Leia ', 'Leilani ', 'Liko ', 'Liliha ', 'Lilo ', 'Liwai', 'Lokelani ', 'Londeree', 'Loni ', 'Lono', 'Lonoehu', 'Look', 'Luahoomae', 'Luana ', 'Mahaulu', 'Mahelona', 'Mahi\'ai', 'Mahina ', 'Mahoe', 'Maile ', 'Makaha', 'Makaiau', 'Makaio ', 'Makaiwi', 'Makala ', 'Makan ', 'Makana ', 'Makani ', 'Makelina ', 'Malana ', 'Maleah ', 'Maleko ', 'Malia ', 'Malina ', 'Malo ', 'Mano ', 'Manunui', 'Mei Mele ', 'Mele ', 'Melia ', 'Mika', 'Mikil ', 'Miliani ', 'Moana ', 'Moanna ', 'Moi', 'Moliakalaniikeola', 'Naihe', 'Nakanaela', 'Nakaneaela', 'Nalani ', 'Nalanie ', 'Nana ', 'Nani ', 'Napua ', 'Natua', 'Nawahine', 'Newalu', 'Nihipali', 'Noe ', 'Noelani ', 'Nohealani ', 'Noma ', 'Okalani ', 'Ola ', 'Oliana ', 'Olina ', 'Oline ', 'Onakea', 'Onaona ', 'Paahao', 'Pahia', 'Paikuli', 'Palakiko', 'Palea', 'Palila ', 'Pane\'e', 'Pekelo', 'Pi', 'Pilialoha ', 'Pilis ', 'Pookalani', 'Pouha', 'Puhihale', 'Pukahi', 'Pula', 'Sasilvia', 'Ulani', 'Wikolia'];


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