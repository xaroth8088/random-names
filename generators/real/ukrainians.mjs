export default function ukrainians() {
  let names;
  let rnd;
  let rnd2;
  let rnd;
  let rnd2;
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Adrik', 'Akim', 'Alek', 'Aleksandr', 'Aleksi', 'Aleksis', 'Alexei', 'Alik', 'Aloyoshenka', 'Aloysha', 'Anatolii', 'Andrei', 'Andrij', 'Andrusha', 'Andrya', 'Anstice', 'Antinko', 'Anton', 'Antosha', 'Arman', 'Arsen', 'Arsenij', 'Artem', 'Avel', 'Bogdan', 'Bogdashha', 'Bohdan', 'Bolodenka', 'Boris', 'Borya', 'Boryenka', 'Borys', 'Brends', 'Brody', 'Burian', 'Cheslav', 'Czar', 'Danya', 'Demyan', 'Denis', 'Dima', 'Dimitri', 'Dmytro', 'Edik', 'Eduard', 'Egor', 'Evgenii', 'Fabi', 'Faddei', 'Fadey', 'Fadeyka', 'Fedor', 'Fedya', 'Fedyenka', 'Feliks', 'Filip', 'Fjodor', 'Foma', 'Fredek', 'Fyodor', 'Ganya', 'Gav', 'Gavrel', 'Gavrie', 'Gavril', 'Gavrilovich', 'Gennadi', 'Gregori', 'Grigor', 'Grigori', 'Grigorii', 'Grisha', 'Hedeon', 'Helge', 'Igor', 'Igoryok', 'Ilya', 'Ioakim', 'Iov', 'Ivan', 'Ivano', 'Jascha', 'Jasha', 'Jeirgif', 'Jermija', 'Jov', 'Jurg', 'Karolek', 'Kiril', 'Kirill', 'Kliment', 'Konstantin', 'Konstantine', 'Kostya', 'Laurente', 'Leonide', 'Lev', 'Levka', 'Luka', 'Lukyan', 'Maks', 'Maksim', 'Maksimillian', 'Maksym', 'Marko', 'Markov', 'Matvey', 'Matysh', 'Maxim', 'Michail', 'Mikhail', 'Misha', 'Mishe', 'Moriz', 'Motka', 'Myhajlo', 'Mykola', 'Naum', 'Nicolai', 'Nikolai', 'Oleg', 'Oleksij', 'Olexander', 'Olezka', 'Ony', 'Oral', 'Orel', 'Orell', 'Oriel', 'Orrel', 'Osip', 'Pabiyan', 'PavIpv', 'Pavel', 'Pavlik', 'Pavlo', 'Pavlusha', 'Pavlushka', 'Pavlya', 'Petenka', 'Petro', 'Petrov', 'Petya', 'Pyotr', 'Roman', 'Romochka', 'Rostyslav', 'Rurik', 'Ruslan', 'Sacha', 'Sanya', 'Sasha', 'Semyon', 'Serge', 'Sergei', 'Sergij', 'Serguei', 'Seriozha', 'Seriozhenka', 'Sevastian', 'Shashenka', 'Shura', 'Shurik', 'Shurochka', 'Slavik', 'Stanislav', 'Stanislov', 'Stefan', 'Stephan', 'Stepka', 'Tamryn', 'Taras', 'Tasha', 'Tolenka', 'Tolya', 'Tosya', 'Tusya', 'Uri', 'Uriah', 'Urie', 'Ustin', 'Vadim', 'Vadym', 'Valerii', 'Valerik', 'Vanechka', 'Vanya', 'Vanyusha', 'Vas', 'Vasilii', 'Vasily', 'Vassi', 'Vassily', 'Vasya', 'Vasyl', 'Viktor', 'Vitalij', 'Vitaliy', 'Vitenka', 'Vladik', 'Vladilen', 'Vladislav', 'Vladmir', 'Vladmiri', 'Vladya', 'Vladyslav', 'Volody', 'Volodymyr', 'Vyacheslav', 'Yakov', 'Yaremka', 'Yaroslav', 'Yasha', 'Yefrem', 'Yerik', 'Yevgeni', 'Yevgenij', 'Yura', 'Yuri', 'Yurii', 'Yurij', 'Yurik', 'Yurochka', 'Zhenechka', 'Zhenya', 'Zhorah', 'Ziven', 'Zivon', 'Zory'];
  const nm2 = ['Albina', 'Albinochka', 'Alechka', 'Alexandra', 'Alina', 'Alinochka', 'Alisa', 'Alisochka', 'Alla', 'Allochka', 'Allushka', 'Alya', 'Alyona', 'Alyonka', 'Alyonochka', 'Alyonushka', 'Anastasia', 'Anastasiya', 'Anechka', 'Angela', 'Angelochka', 'Anna', 'Annushka', 'Antonina', 'Anya', 'Anyuta', 'Anzhelika', 'Chrystyna', 'Chtystya', 'Daria', 'Dariya', 'Daryna', 'Dasha', 'Dashechka', 'Dashen’ka', 'Dashunya', 'Diana', 'Dianochka', 'Dianushka', 'Dina', 'Ekaterina', 'Elechka', 'Eleonora', 'Elizaveta', 'Elvira', 'Elya', 'Evgenia', 'Galchonok', 'Galina', 'Galochka', 'Galya', 'Galyna', 'Galyushka', 'Gulnara', 'Gulya', 'Inessa', 'Inna', 'Innessa', 'Innochka', 'Inok', 'Inusya', 'Ira', 'Irina', 'Irinchik', 'Irinka', 'Irinochka', 'Irisha', 'Irishka', 'Irok', 'Irunchik', 'Iryna', 'Katerina', 'Kateryna', 'Katya', 'Katyusha', 'Katyushka', 'Kristina', 'Ksana', 'Ksenia', 'Ksyusha', 'Ksyushenka', 'Ksyushka', 'Lara', 'Larik', 'Larisa', 'Larochka', 'Lena', 'Lenchik', 'Lenochka', 'Lenok', 'Lera', 'Lerchik', 'Lerok', 'Lerunchik', 'Lerunya', 'Lerusya', 'Lesya', 'Lilechka', 'Lilia', 'Lilya', 'Liza', 'Lizochka', 'Lizok', 'Lola', 'Lolita', 'Lolitochka', 'Lora', 'Lyuba', 'Lyubasha', 'Lyubochka', 'Lyubov', 'Lyuda', 'Lyudmila', 'Lyudochka', 'Lyusya', 'Margarita', 'Margaritka', 'Margo', 'Maria', 'Marianna', 'Marina', 'Marinochka', 'Marisha', 'Marishka', 'Mariya', 'Masha', 'Mashunya', 'Mashusha', 'Mila', 'Milochka', 'Nadezhda', 'Nadia', 'Nadyusha', 'Nadyushka', 'Nastassya', 'Nastya', 'Nastyona', 'Nastyusha', 'Nata', 'Nataha', 'Nataliya', 'Natasha', 'Natashechka', 'Natusik', 'Nelechka', 'Nelly', 'Nelya', 'Nika', 'Nina', 'Ninochka', 'Ninok', 'Ninulya', 'Ninushka', 'Oksana', 'Oksanochka', 'Olena', 'Olesya', 'Olexandra', 'Olga', 'Olya', 'Olyushka', 'Polechka', 'Polina', 'Polinka', 'Polya', 'Raechka', 'Raisa', 'Raya', 'Rayusha', 'Rimma', 'Rimmochka', 'Rita', 'Ritochka', 'Ritulya', 'Roza', 'Rozi', 'Rozita', 'Rozochka', 'Sasha', 'Sashka', 'Shura', 'Shurochka', 'Sohpiya', 'Sonechka', 'Sonya', 'Sophia', 'Sophie', 'Sophochka', 'Sophya', 'Sveta', 'Svetik', 'Svetlana', 'Svetlanka', 'Svetochka', 'Svitlana', 'Tamara', 'Tamarka', 'Tanechka', 'Tanya', 'Tanyusha', 'Tanyushka', 'Tatyana', 'Tetyana', 'Toma', 'Tomochka', 'Tonechka', 'Tonya', 'Ulechka', 'Ulya', 'Ulyana', 'Valechka', 'Valentina', 'Valeria', 'Valeriya', 'Valya', 'Valyusha', 'Valyushka', 'Vera', 'Verochka', 'Verok', 'Veronika', 'Verunya', 'Vika', 'Viktoria', 'Viktoriya', 'Yana', 'Yanchik', 'Yanochka', 'Yelena', 'Yelenushka', 'Yelyzaveta', 'Yulia', 'Yuliya', 'Yulya', 'Zhanna', 'Zhannochka', 'Zhenechka', 'Zhenya', 'Zoya'];
  const nm3 = ['Abrahamovsky', 'Adamchuk', 'Andreichenko', 'Andriychuk', 'Andreichyn', 'Andreikiv', 'Andreiko', 'Andresyuk', 'Andrichuk', 'Andriyenko', 'Androshchuk', 'Andrukh', 'Andruntsiv', 'Andrusenko', 'Andrushchenko', 'Andrushkiv', 'Andrushko', 'Andrusiv', 'Andrusyak', 'Andrusyshyn', 'Antonenko', 'Antoniw', 'Artyuschenko', 'Avramenko', 'Archipenko', 'Babiak', 'Balanchuk', 'Barabash', 'Belenko', 'Belovol', 'Bilokhatniuk', 'Bohatenko', 'Bondarenko', 'Boreckyi', 'Boyko', 'Brutka', 'Bublik', 'Burgos', 'Bzovsky', 'Vann', 'Veremchuk', 'Vershyhora', 'Vovk', 'Vynnychenko', 'Voitenko', 'Voloshyn', 'Vyhovsky', 'Harasemchuk', 'Halyckyj', 'Holub', 'Golub', 'Hordiyenko', 'Hotopylo', 'Hotopіlo', 'Huba', 'Guba', 'Hubenko', 'Hulyahrotsky', 'Hryhorenko', 'Hrytsenko', 'Hryshchuk', 'Holowaty', 'Hycha', 'Gogol', 'Gleba', 'Galey', 'Goraya', 'Gulka', 'Gura', 'Gurka', 'Glushenko', 'Gryglewicz', 'Danilenko', 'Davydenko', 'Demchyshyn', 'Derkach', 'Dzubenko', 'Dobryivechir', 'Doroshenko', 'Dovzhenko', 'Dudyk', 'Evanishyn', 'Ewaschuk', 'Yehorenko', 'Yelenyuk', 'Yeliashkevych', 'Yelyuk', 'Yevdokymenko', 'Yevtukh', 'Yevtushenko', 'Yevtushok', 'Yecoshenko', 'Zherdev', 'Zavgorodniy', 'Yakimchuk', 'Ivanenko', 'Yiranek', 'Yovenko', 'Kalashnik', 'Karaszkewycz', 'Karwatsky', 'Katyuk', 'Klimenko', 'Kluka', 'Kobevko', 'Kolba', 'Kosh', 'Koshla', 'Kostachuk', 'Kozbur', 'Kondratyuk', 'Kondratskyi', 'Kovalenko', 'Kovalchick', 'Kovalchuk', 'Kozachenko', 'Kravets', 'Kryvobok', 'Kryvonis', 'Kryvoruchko', 'Krylenko', 'Kupranec', 'Kurylenko', 'Kurywczak', 'Kyzyma', 'Kudleychuk', 'Lazarenko', 'Lukashenko', 'Leonchuk', 'Liski', 'Litovchenko', 'Loboda', 'Lyakh', 'Malarenko', 'Mandyczewski', 'Marmurchuk', 'Maslak', 'Matviyenko', 'Melnik', 'Miroshnychenko', 'Motruk', 'Maryniuk', 'Mykhaylyk', 'Minyaylyuk', 'Mykytiuk', 'Mayko', 'Nazarchuk', 'Nazarenko', 'Nazdratenko', 'Nalyvaiko', 'Nepyipyvo', 'Netudykhata', 'Nazarowicz', 'Navolska', 'Oliynyk', 'Orlyk', 'Osipenko', 'Palinchak', 'Panchak', 'Panchyk', 'Parkhomenko', 'Pavlyuchenko', 'Pavlyuk', 'Petrenko', 'Pipenko', 'Pivtorakozhukha', 'Plushenko', 'Plyushenko', 'Pogrebinsky', 'Pokotylo', 'Ponikarovsky', 'Popadynets', 'Poroshenko', 'Potchak', 'Pshyk', 'Prokup', 'Pymonenko', 'Porchowsky', 'Rodchenko', 'Roscha', 'Rudenko', 'Sahaidachny', 'Salenko', 'Serben', 'Skoryk', 'Skripchenko', 'Skrobala', 'Sokulsky', 'Suprunyuk', 'Stecyszyn', 'Strembicky', 'Swischuk', 'Savaryn', 'Shadrova', 'Skripachuk', 'Cashcov', 'Sokolov', 'Sokolova', 'Soskin', 'Soskina', 'Tarasenko', 'Tereshchenko', 'Tereszczenko', 'Teterya', 'Timko', 'Tomenko', 'Tomorug', 'Tryasylo', 'Tyahnybok', 'Tymoshchuk', 'Tymoshenko', 'Tyshchenko', 'Udovenko', 'Udovychenko', 'Usachenko', 'Usenko', 'Usyk', 'Ustenko', 'Ustymenko', 'Ustymovych', 'Ustyyanovych', 'Fedorchuk', 'Fedorenko', 'Fedotenko', 'Fomenko', 'Chachula', 'Khymnyuk', 'Chomiak', 'Tsvyk', 'Tsvyhun', 'Tsipkin', 'Chovnik', 'Chornovil', 'Sernulka', 'Shevchenko', 'Shevchuk', 'Shulyayev', 'Shynkarchuk', 'Shmata', 'Shch', 'Shcherba', 'Shcherbak', 'Shcherbatyuk', 'Shcherbachenko', 'Shcherbyna', 'Shchyrytsya', 'Shchors', 'Shchuka', 'Shchurat', 'Yurchenko', 'Yushchenko', 'Yanukovych', 'Yarmoluk']; {
    rnd2 = Math.floor(Math.random() * nm3.length);
    nm3.splice(rnd2, 1);
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm2.length);
      names = `${nm2[rnd]} ${nm3[rnd2]}`;
      nm2.splice(rnd, 1);
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      names = `${nm1[rnd]} ${nm3[rnd2]}`;
      nm1.splice(rnd, 1);
    }
    return names;
  }
}
