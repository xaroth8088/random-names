export default function imperials() {
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Aci', 'Ada', 'Ado', 'Adri', 'Adve', 'Aebo', 'Aeri', 'Afe', 'Agri', 'Albe', 'Ale', 'Alli', 'Alo', 'Ama', 'Ami', 'Amie', 'Ammi', 'Ancu', 'Anto', 'Ape', 'Aqu', 'Aqui', 'Are', 'Ari', 'Ariu', 'Arlo', 'Arri', 'Asti', 'Atte', 'Aude', 'Augu', 'Auni', 'Ave', 'Baco', 'Baro', 'Benu', 'Bre', 'Bri', 'Brie', 'Bro', 'Bru', 'Cai', 'Caiu', 'Cali', 'Capi', 'Cari', 'Caro', 'Cavo', 'Cha', 'Chae', 'Cice', 'Cidi', 'Cla', 'Clau', 'Cle', 'Cli', 'Coci', 'Codu', 'Coi', 'Cra', 'Cre', 'Cro', 'Cru', 'Cuni', 'Cyro', 'Danu', 'Dari', 'Dece', 'Decu', 'Dene', 'Depu', 'Desi', 'Dexi', 'Dio', 'Dra', 'Dru', 'Duni', 'Duru', 'Duvi', 'Dyu', 'Edu', 'Edua', 'Enno', 'Erti', 'Fadu', 'Fagu', 'Flo', 'Fra', 'Fri', 'Furi', 'Gai', 'Gaiu', 'Geme', 'Geri', 'Gia', 'Gio', 'Gla', 'Gle', 'Gra', 'Gre', 'Gua', 'Hade', 'Here', 'Hie', 'Humi', 'Igna', 'Ila', 'Ildo', 'Ile', 'Ilno', 'Imu', 'Ini', 'Inie', 'Iniu', 'Ira', 'Irla', 'Iti', 'Itiu', 'Iulu', 'Janu', 'Jara', 'Jiro', 'Jonu', 'Joo', 'Lari', 'Leo', 'Lere', 'Levu', 'Linu', 'Lio', 'Luca', 'Luci', 'Luri', 'Luve', 'Mali', 'Mani', 'Mari', 'Maro', 'Matu', 'Meci', 'Melu', 'Meni', 'Meti', 'Mile', 'Mini', 'Mori', 'Muru', 'Nama', 'Nata', 'Nigi', 'Nolu', 'Olvu', 'Ontu', 'Ori', 'Orme', 'Oti', 'Otiu', 'Para', 'Pavo', 'Pela', 'Peli', 'Pilu', 'Pina', 'Pla', 'Plau', 'Pli', 'Pri', 'Pro', 'Que', 'Qui', 'Rami', 'Rebe', 'Rebu', 'Regu', 'Rema', 'Rexu', 'Rie', 'Rima', 'Rode', 'Roga', 'Roli', 'Rufi', 'Sabi', 'Sae', 'Samu', 'Sau', 'Sce', 'Segu', 'Seli', 'Seni', 'Seve', 'Sila', 'Sili', 'Silu', 'Siro', 'Siti', 'Somu', 'Sore', 'Sta', 'Ste', 'Stlu', 'Stri', 'Suli', 'Suri', 'Suru', 'Taci', 'Tase', 'Tasi', 'Tau', 'Teo', 'Tere', 'The', 'Theo', 'Tice', 'Tie', 'Tini', 'Titu', 'Tou', 'Tre', 'Ture', 'Tyra', 'Tyre', 'Tyro', 'Uri', 'Urie', 'Vala', 'Valu', 'Vari', 'Varu', 'Vase', 'Vela', 'Velu', 'Vena', 'Veru', 'Via', 'Vira', 'Vite', 'Vla', 'Vodu', 'Zeno'];
  const nm2 = ['Acil', 'Adam', 'Adon', 'Adr', 'Adv', 'Aeb', 'Aer', 'Afer', 'Agr', 'Alb', 'Alet', 'All', 'Aloy', 'Aman', 'Amm', 'Anc', 'And', 'Andr', 'Ant', 'Apel', 'Arc', 'Arct', 'Aren', 'Arl', 'Arr', 'Ash', 'Asht', 'Ast', 'Att', 'Aud', 'Aug', 'Aun', 'Aven', 'Bac', 'Bar', 'Bas', 'Bass', 'Basz', 'Ben', 'Bend', 'Bet', 'Bett', 'Brem', 'Brot', 'Bruc', 'Brus', 'Bur', 'Burc', 'Cac', 'Cacc', 'Cal', 'Calv', 'Can', 'Canc', 'Cap', 'Car', 'Carm', 'Carn', 'Cart', 'Cas', 'Cass', 'Cast', 'Cav', 'Cic', 'Cid', 'Cim', 'Cimb', 'Clag', 'Clas', 'Clec', 'Clib', 'Coc', 'Cod', 'Coir', 'Col', 'Coll', 'Con', 'Cons', 'Cont', 'Cor', 'Corp', 'Corr', 'Corv', 'Cos', 'Cosm', 'Cras', 'Cres', 'Crot', 'Crul', 'Cun', 'Cyr', 'Dan', 'Dar', 'Dec', 'Den', 'Deny', 'Dep', 'Des', 'Dex', 'Dion', 'Dir', 'Dirg', 'Dran', 'Drus', 'Dun', 'Dur', 'Duv', 'Dyus', 'Enn', 'Ert', 'Esd', 'Esdr', 'Fad', 'Fag', 'Fal', 'Falc', 'Falx', 'Fan', 'Fand', 'Flor', 'For', 'Fort', 'Fral', 'Frin', 'Fur', 'Gal', 'Gall', 'Galt', 'Gan', 'Ganc', 'Gar', 'Garr', 'Gav', 'Gavr', 'Gel', 'Gell', 'Gem', 'Ger', 'Gerg', 'Gian', 'Giov', 'Glab', 'Glal', 'Glen', 'Gran', 'Grat', 'Greg', 'Gual', 'Had', 'Has', 'Hasp', 'Hel', 'Helv', 'Her', 'Herd', 'Hier', 'Hir', 'Hirr', 'Hum', 'Ign', 'Ilav', 'Ild', 'Ilen', 'Iln', 'Imus', 'Irat', 'Irl', 'Iul', 'Jak', 'Jan', 'Jar', 'Jir', 'Jiv', 'Joh', 'John', 'Jon', 'Joof', 'Kan', 'Kant', 'Kas', 'Kasl', 'Kast', 'Lan', 'Lang', 'Lar', 'Larr', 'Lay', 'Layt', 'Leon', 'Ler', 'Let', 'Letr', 'Lev', 'Ley', 'Lin', 'Liod', 'Lor', 'Lorg', 'Luc', 'Lucr', 'Lur', 'Lus', 'Lusp', 'Lut', 'Luth', 'Luv', 'Mal', 'Mall', 'Malp', 'Man', 'Mar', 'Marc', 'Mars', 'Mart', 'Mas', 'Masq', 'Mat', 'Matt', 'Mec', 'Mel', 'Men', 'Mer', 'Merc', 'Met', 'Mil', 'Min', 'Mol', 'Molv', 'Mor', 'Mur', 'Murb', 'Mus', 'Nam', 'Nas', 'Nasp', 'Nat', 'Natc', 'Ner', 'Nerm', 'Nig', 'Nir', 'Nirt', 'Nit', 'Nitt', 'Nol', 'Nos', 'Nost', 'Olv', 'Ont', 'Orit', 'Orm', 'Ort', 'Orth', 'Par', 'Pav', 'Pel', 'Pen', 'Penn', 'Per', 'Perc', 'Pil', 'Pilp', 'Pin', 'Plit', 'Prim', 'Proc', 'Prov', 'Pus', 'Pust', 'Quen', 'Quin', 'Ral', 'Rall', 'Ram', 'Rax', 'Raxl', 'Reb', 'Reg', 'Regl', 'Rel', 'Rell', 'Rem', 'Rex', 'Riel', 'Rim', 'Ris', 'Rod', 'Rog', 'Rol', 'Ruf', 'Rufr', 'Sab', 'Saen', 'Sal', 'Salv', 'Sam', 'Sap', 'Sapr', 'Saul', 'Sav', 'Savl', 'Scel', 'Seg', 'Sel', 'Sell', 'Sen', 'Sep', 'Sept', 'Ser', 'Serg', 'Serv', 'Sev', 'Sil', 'Sir', 'Sit', 'Som', 'Sor', 'Stan', 'Stef', 'Sten', 'Stl', 'Str', 'Sul', 'Sull', 'Sur', 'Syn', 'Synn', 'Tac', 'Tah', 'Tahm', 'Tap', 'Tapp', 'Tas', 'Taur', 'Tel', 'Telr', 'Ter', 'Tert', 'Tic', 'Tien', 'Tin', 'Tit', 'Tout', 'Treb', 'Tren', 'Tul', 'Tull', 'Tur', 'Tyr', 'Val', 'Valg', 'Valv', 'Van', 'Vand', 'Vant', 'Var', 'Varn', 'Vas', 'Vel', 'Velw', 'Ven', 'Ver', 'Vert', 'Viat', 'Vin', 'Vinn', 'Vir', 'Vit', 'Vlan', 'Vlar', 'Vod', 'Von', 'Vont', 'Wul', 'Wulf', 'Xan', 'Xand', 'Zed', 'Zedr', 'Zen'];
  const nm3 = ['bane', 'ber', 'bergus', 'berius', 'bo', 'bonius', 'brio', 'canius', 'cator', 'ccius', 'centor', 'cessus', 'ch', 'cian', 'ciele', 'cino', 'cius', 'co', 'ctunian', 'curio', 'cus', 'cyon', 'der', 'deratus', 'des', 'dir', 'dius', 'dorallen', 'du', 'dus', 'fan', 'ffan', 'fy', 'ge', 'gesto', 'gio', 'gius', 'gley', 'gory', 'gren', 'gus', 'hat', 'he', 'her', 'hius', 'honder', 'hus', 'la', 'latinus', 'lav', 'lcabor', 'le', 'leius', 'les', 'ley', 'lian', 'lias', 'licus', 'lin', 'linus', 'lis', 'lius', 'livupis', 'lles', 'llian', 'llis', 'llius', 'llus', 'lowyn', 'ltierus', 'lus', 'lvus', 'malo', 'man', 'mius', 'mman', 'mo', 'mus', 'nal', 'narus', 'nato', 'nd', 'ndeius', 'ndrus', 'nhonder', 'nian', 'nin', 'ninus', 'nis', 'nius', 'nivus', 'nnius', 'nnus', 'nolian', 'nroy', 'ns', 'ntin', 'ntius', 'ntus', 'nus', 'penix', 'per', 'phat', 'phon', 'pinian', 'pis', 'pius', 'pulus', 'que', 'rav', 'rd', 'reas', 'reius', 'ren', 'rentius', 'retinaus', 'ri', 'ric', 'rick', 'rimil', 'rinus', 'rio', 'rius', 'ro', 'ronymus', 'ros', 'roy', 'rrus', 'rtene', 'rtius', 'rudus', 'rufus', 'rus', 'sanis', 'scius', 'scus', 'sianus', 'sius', 'somo', 'ssius', 'stans', 'stantius', 'stes', 'stian', 'sus', 'ta', 'tan', 'tans', 'tantius', 'tav', 'tch', 'tene', 'ter', 'terius', 'the', 'thius', 'tian', 'tierus', 'tilvius', 'timus', 'tin', 'tinius', 'tis', 'tius', 'to', 'ton', 'tor', 'trus', 'ttus', 'tula', 'tullian', 'tumeliorus', 'tunian', 'tunus', 'turus', 'tus', 'tustius', 'vanni', 'vario', 'vatius', 'ventus', 'vianus', 'virian', 'vius', 'vo', 'vus', 'we', 'wyn', 'xto', 'xus', 'yiir', 'yn', 'yon', 'ys', 'zone'];
  const nm4 = ['agius', 'alinus', 'alius', 'alo', 'alus', 'an', 'and', 'andrus', 'anian', 'anius', 'anni', 'anus', 'ard', 'ario', 'arius', 'arus', 'as', 'atinus', 'atius', 'ato', 'ator', 'atus', 'av', 'eas', 'ebane', 'ecius', 'edus', 'eius', 'ek', 'el', 'elivupis', 'ellis', 'ellius', 'ellus', 'elus', 'emius', 'en', 'enian', 'enix', 'ens', 'entius', 'entor', 'entus', 'er', 'ergus', 'eric', 'erio', 'erius', 'ero', 'erus', 'es', 'esius', 'essus', 'etinaus', 'ex', 'exus', 'ialius', 'ian', 'iand', 'ianus', 'ich', 'ick', 'icus', 'ideratus', 'idius', 'iele', 'ien', 'iir', 'ilian', 'ilias', 'ilis', 'ilius', 'illian', 'illius', 'ilvius', 'ilvus', 'imil', 'imus', 'in', 'inal', 'inian', 'inis', 'inius', 'innus', 'ino', 'intus', 'inus', 'io', 'ion', 'ir', 'irian', 'is', 'istes', 'istian', 'isus', 'iton', 'itus', 'iulus', 'ius', 'ixto', 'odius', 'odus', 'ogesto', 'ola', 'olian', 'olin', 'ollus', 'omo', 'on', 'ondeius', 'one', 'onin', 'onius', 'onymus', 'ophon', 'or', 'orallen', 'ori', 'ortius', 'ory', 'os', 'owe', 'owyn', 'uarius', 'ubo', 'udius', 'udus', 'ue', 'uel', 'ufus', 'ula', 'ulcabor', 'ullian', 'ulus', 'umeliorus', 'umus', 'unius', 'univus', 'unus', 'urio', 'urius', 'urrus', 'urus', 'us', 'usanis', 'ustius', 'utis'];
  const nm5 = ['Acca', 'Ade', 'Adra', 'Adria', 'Ae', 'Aemi', 'Agri', 'Ahe', 'Aheto', 'Alce', 'Ale', 'Alessa', 'Ama', 'Anto', 'Apro', 'Arca', 'Are', 'Arena', 'Arie', 'Arno', 'Arria', 'Asti', 'Auda', 'Augu', 'Avi', 'Avie', 'Avre', 'Bla', 'Bri', 'Bro', 'Bu', 'Bunta', 'Ca', 'Cae', 'Caeci', 'Calda', 'Cami', 'Cano', 'Carlo', 'Carma', 'Cau', 'Ci', 'Cii', 'Cli', 'Co', 'Consta', 'Cove', 'Crae', 'Do', 'Domi', 'Domini', 'Duma', 'Dyna', 'Elia', 'Eme', 'Epo', 'Eri', 'Eti', 'Ettie', 'Fa', 'Famma', 'Fari', 'Fau', 'Fausti', 'Fentu', 'Fla', 'Flae', 'Fra', 'Fru', 'Ga', 'Gae', 'Gale', 'Ge', 'Gi', 'Gia', 'Grui', 'Gruia', 'Ha', 'He', 'Hermi', 'Ho', 'Horo', 'Horu', 'Ido', 'Inda', 'Isa', 'Iso', 'Ja', 'Jano', 'Jasti', 'Javo', 'Jora', 'Ju', 'Juli', 'La', 'Lala', 'Lalai', 'Lari', 'Larie', 'Lassi', 'Lau', 'Lauri', 'Lavi', 'Le', 'Leke', 'Leo', 'Li', 'Lu', 'Ly', 'Ma', 'Mae', 'Mara', 'Marce', 'Mari', 'Maria', 'Marle', 'Marti', 'Mi', 'Millo', 'Mo', 'Na', 'Nari', 'Ne', 'Nebi', 'Ore', 'Pa', 'Pani', 'Pe', 'Pele', 'Pelle', 'Pere', 'Pi', 'Pla', 'Praxe', 'Pri', 'Ra', 'Rae', 'Rafo', 'Rasa', 'Re', 'Resti', 'Rhea', 'Ria', 'Ro', 'Roma', 'Rose', 'Ru', 'Sa', 'Sabri', 'Safi', 'Salo', 'Sarmo', 'Se', 'Sele', 'Selvi', 'Septi', 'Seve', 'Si', 'Siby', 'Sila', 'Simpli', 'So', 'Sylo', 'Te', 'Thra', 'Tu', 'Va', 'Vau', 'Ve', 'Vi', 'Via', 'Vie', 'Vile', 'Vini', 'Vio', 'Vite', 'Vitto', 'Vo', 'Ysa'];
  const nm7 = ['bel', 'bia', 'brina', 'bylla', 'ccenia', 'ccia', 'cella', 'cia', 'cilia', 'cina', 'da', 'dara', 'dia', 'dina', 'donea', 'donia', 'drie', 'fia', 'fora', 'fre', 'fza', 'gna', 'grina', 'la', 'laine', 'laisa', 'lana', 'latia', 'lbia', 'ldana', 'lea', 'lena', 'lene', 'leria', 'lfre', 'lga', 'lia', 'liana', 'lias', 'litta', 'lla', 'llae', 'llaise', 'llea', 'llecia', 'llia', 'llona', 'loe', 'lona', 'lonia', 'loria', 'lotta', 'lrina', 'lva', 'lvia', 'mana', 'mania', 'milia', 'mitia', 'mma', 'mmana', 'na', 'nara', 'nari', 'nce', 'nda', 'ndia', 'ndra', 'ndria', 'ne', 'nee', 'nia', 'nicia', 'nis', 'nitia', 'nka', 'nna', 'nne', 'nnia', 'noa', 'nonia', 'nora', 'nstance', 'ntea', 'ntia', 'ntina', 'ntula', 'ppina', 'ptima', 'ra', 'rana', 'rara', 'rcella', 'ri', 'ria', 'riana', 'rida', 'rienna', 'rina', 'rlena', 'rmana', 'rmia', 'rta', 'rtia', 'rtina', 'rulia', 'sa', 'sala', 'scia', 'se', 'sia', 'sila', 'spia', 'ssandra', 'ssia', 'ssinia', 'sta', 'stae', 'stia', 'stina', 'stira', 'stita', 'ta', 'tara', 'tellia', 'tia', 'tira', 'tis', 'totis', 'trix', 'tta', 'ttia', 'ttoria', 'tula', 'vera', 'veria', 'via', 'viera', 'vinia', 'vita', 'volia', 'vresa', 'xedes', 'xia'];
  const nm9 = ['Abi', 'Abo', 'Acci', 'Aci', 'Aere', 'Aeri', 'Afra', 'Afro', 'Agru', 'Alba', 'Albu', 'Alfe', 'Alle', 'Ama', 'Ami', 'Amiu', 'Amni', 'Andu', 'Angi', 'Anni', 'Anta', 'Anto', 'Anzi', 'Api', 'Arca', 'Are', 'Ari', 'Ariu', 'Armi', 'Arri', 'Arte', 'Arto', 'Ate', 'Atei', 'Atri', 'Atti', 'Aure', 'Auri', 'Auru', 'Avi', 'Axi', 'Axiu', 'Bae', 'Beni', 'Bla', 'Blo', 'Bola', 'Bra', 'Bro', 'Broa', 'Bru', 'Brui', 'Cadi', 'Cae', 'Cali', 'Calu', 'Cari', 'Caro', 'Cata', 'Cati', 'Ceci', 'Cedu', 'Cela', 'Ceno', 'Ceru', 'Che', 'Cine', 'Cipi', 'Cive', 'Cla', 'Clae', 'Clo', 'Clu', 'Cni', 'Colo', 'Colu', 'Coni', 'Cosa', 'Cru', 'Curi', 'Dare', 'Deca', 'Deci', 'Deli', 'Deni', 'Desi', 'Dora', 'Dou', 'Doua', 'Dra', 'Dui', 'Duro', 'Egna', 'Enda', 'Enti', 'Essa', 'Evi', 'Faci', 'Fale', 'Fama', 'Fau', 'Favo', 'Fela', 'Fla', 'Flae', 'Flo', 'Fra', 'Furo', 'Gabe', 'Gabi', 'Gale', 'Gavi', 'Gawe', 'Gemu', 'Geo', 'Gio', 'Glo', 'Gone', 'Gra', 'Gre', 'Gree', 'Hano', 'Hanu', 'Hate', 'Here', 'Hiri', 'Hora', 'Hosi', 'Ido', 'Ini', 'Inia', 'Inve', 'Iulu', 'Jaro', 'Jera', 'Jiri', 'Juca', 'Juni', 'Juru', 'Kra', 'Kre', 'Lae', 'Lale', 'Leo', 'Leru', 'Lio', 'Loge', 'Lora', 'Lore', 'Lovi', 'Lusi', 'Mabo', 'Mae', 'Magi', 'Mara', 'Mari', 'Maro', 'Mati', 'Maxi', 'Mede', 'Meli', 'Mena', 'Mero', 'Mevu', 'Mico', 'Mido', 'Muco', 'Muni', 'Musi', 'Nanu', 'Nava', 'Nere', 'Nigi', 'Niro', 'Noni', 'Oho', 'Olci', 'Olo', 'Opsi', 'Ora', 'Ori', 'Oriu', 'Osto', 'Oti', 'Otiu', 'Ottu', 'Pale', 'Papi', 'Pela', 'Pele', 'Peti', 'Peve', 'Phi', 'Pla', 'Ple', 'Pli', 'Plo', 'Polu', 'Poni', 'Popi', 'Posu', 'Pre', 'Puru', 'Qua', 'Qui', 'Rama', 'Rato', 'Ria', 'Rie', 'Rili', 'Rose', 'Rufu', 'Ruli', 'Rune', 'Ruso', 'Sce', 'Sci', 'Sco', 'Scri', 'Secu', 'Sena', 'Sia', 'Siba', 'Siru', 'Sore', 'Sosi', 'Spu', 'Sta', 'Tala', 'Tasu', 'Tere', 'Tira', 'Titu', 'Tra', 'Tre', 'Tru', 'Trui', 'Tuni', 'Urge', 'Urgu', 'Urti', 'Uule', 'Vale', 'Vali', 'Valo', 'Valu', 'Vani', 'Vari', 'Varo', 'Vedi', 'Vesu', 'Vici', 'Vidu', 'Vini', 'Viri', 'Vite', 'Vli', 'Voni', 'Whi'];
  const nm10 = ['Abit', 'Abor', 'Acc', 'Acic', 'Acil', 'Aer', 'Afr', 'Agr', 'Alb', 'Alf', 'All', 'Amat', 'Amn', 'Amp', 'Amph', 'Anc', 'Anch', 'Ancr', 'And', 'Andr', 'Ang', 'Ann', 'Ant', 'Anz', 'Apin', 'Arc', 'Aret', 'Arm', 'Arr', 'Art', 'Atr', 'Att', 'Aur', 'Aurr', 'Aut', 'Autr', 'Avid', 'Baen', 'Bel', 'Bell', 'Ben', 'Ber', 'Bern', 'Bin', 'Binc', 'Blac', 'Blan', 'Blon', 'Bol', 'Brad', 'Brod', 'Brol', 'Brus', 'Bur', 'Burt', 'Cad', 'Cael', 'Caer', 'Caes', 'Cal', 'Call', 'Car', 'Carb', 'Cart', 'Carv', 'Cat', 'Catr', 'Cec', 'Ced', 'Cel', 'Cen', 'Cer', 'Chen', 'Chey', 'Cin', 'Cinn', 'Cip', 'Civ', 'Clan', 'Clos', 'Clut', 'Cnis', 'Col', 'Con', 'Conc', 'Cor', 'Corr', 'Cos', 'Cosm', 'Crun', 'Cul', 'Cull', 'Cur', 'Dan', 'Dann', 'Dar', 'Dec', 'Del', 'Den', 'Der', 'Derg', 'Des', 'Don', 'Dont', 'Dor', 'Dral', 'Duil', 'Dur', 'Egn', 'End', 'Ent', 'Esd', 'Esdr', 'Ess', 'Evic', 'Fac', 'Fal', 'Falv', 'Fam', 'Faus', 'Fav', 'Fel', 'Flac', 'Flar', 'Flav', 'Flon', 'Flor', 'Fral', 'Ful', 'Fulb', 'Fulc', 'Fur', 'Gab', 'Gal', 'Gall', 'Gar', 'Garr', 'Gav', 'Gaw', 'Gem', 'Geon', 'Gior', 'Glor', 'Gol', 'Gold', 'Gon', 'Grat', 'Grav', 'Greg', 'Han', 'Har', 'Harm', 'Hars', 'Has', 'Hass', 'Hat', 'Hay', 'Hayn', 'Her', 'Hers', 'Hert', 'Hir', 'Hod', 'Hodg', 'Hof', 'Hoff', 'Hor', 'Hos', 'Idol', 'Inv', 'Iul', 'Jan', 'Jann', 'Jar', 'Jer', 'Jir', 'Juc', 'Jul', 'Jull', 'Jun', 'Jur', 'Krat', 'Krex', 'Lac', 'Lach', 'Laec', 'Laen', 'Laf', 'Laft', 'Lal', 'Leon', 'Leot', 'Ler', 'Lex', 'Lior', 'Log', 'Lol', 'Loll', 'Lon', 'Long', 'Lor', 'Lov', 'Lus', 'Mab', 'Mac', 'Macc', 'Macr', 'Maen', 'Mag', 'Mal', 'Mall', 'Man', 'Mant', 'Mar', 'Mat', 'Max', 'Med', 'Mel', 'Men', 'Mer', 'Merc', 'Mev', 'Mic', 'Mid', 'Mon', 'Monr', 'Mos', 'Mosl', 'Muc', 'Mun', 'Mus', 'Musp', 'Muss', 'Nan', 'Nav', 'Ner', 'Nig', 'Nir', 'Non', 'Nuc', 'Nucc', 'Nun', 'Nunc', 'Ohol', 'Olc', 'Ops', 'Oran', 'Ost', 'Ott', 'Pal', 'Pap', 'Pat', 'Patn', 'Pel', 'Pet', 'Petr', 'Pev', 'Phil', 'Pin', 'Pind', 'Plal', 'Plat', 'Pleb', 'Plin', 'Plot', 'Pol', 'Pon', 'Pont', 'Pop', 'Pos', 'Prel', 'Pren', 'Prev', 'Pul', 'Pull', 'Pun', 'Pund', 'Pur', 'Quar', 'Quas', 'Quin', 'Ram', 'Rat', 'Rian', 'Rien', 'Ril', 'Ros', 'Rosc', 'Ruf', 'Rul', 'Run', 'Rus', 'Sac', 'Sacc', 'Sal', 'Sall', 'Salv', 'Scer', 'Scin', 'Scot', 'Scr', 'Sec', 'Sen', 'Seny', 'Sep', 'Sept', 'Ses', 'Sest', 'Sex', 'Sext', 'Sial', 'Sib', 'Sig', 'Sign', 'Sil', 'Silv', 'Sir', 'Sor', 'Sos', 'Spur', 'Stat', 'Tal', 'Tas', 'Ter', 'Tir', 'Tit', 'Trag', 'Treb', 'Trem', 'Trup', 'Tul', 'Tull', 'Tun', 'Tur', 'Turr', 'Umb', 'Umbr', 'Urg', 'Urt', 'Uul', 'Val', 'Valg', 'Van', 'Vand', 'Vant', 'Var', 'Varr', 'Vas', 'Vass', 'Ved', 'Vel', 'Velv', 'Ven', 'Vend', 'Ves', 'Vesn', 'Vic', 'Vid', 'Vin', 'Vir', 'Vit', 'Vlin', 'Von', 'Vul', 'Vulp', 'Vun', 'Vunn', 'Wav', 'Wavr', 'Whit', 'Wot', 'Wotr'];
  const nm11 = ['batius', 'benus', 'bo', 'bolis', 'bonia', 'cal', 'ccus', 'ceius', 'ch', 'cia', 'cian', 'ciatius', 'cinius', 'cinnius', 'cius', 'ckwell', 'ctus', 'cus', 'cusius', 'dacia', 'dano', 'denius', 'der', 'des', 'dia', 'dicci', 'dicus', 'dilius', 'dius', 'dus', 'dwine', 'fus', 'ga', 'gan', 'ge', 'gia', 'gius', 'goner', 'gori', 'grius', 'gus', 'hance', 'haria', 'hia', 'kwell', 'lalian', 'lchiotus', 'ld', 'le', 'leius', 'lenus', 'ler', 'lgoner', 'lia', 'lian', 'lida', 'lidus', 'lienus', 'lilia', 'lilius', 'lin', 'lis', 'liulus', 'lius', 'llia', 'llian', 'llida', 'llin', 'lliun', 'llius', 'llo', 'llus', 'lmoton', 'locius', 'lonus', 'lus', 'lustius', 'lusus', 'ma', 'mellia', 'mevus', 'mius', 'moton', 'mus', 'na', 'nagus', 'nceia', 'ndia', 'ne', 'neim', 'nette', 'ngius', 'nia', 'nian', 'nis', 'nius', 'nix', 'nler', 'nnia', 'nnius', 'nnus', 'norman', 'noslin', 'nshield', 'ntanus', 'ntia', 'ntilius', 'ntiulonus', 'ntius', 'ntus', 'nus', 'pidius', 'pin', 'pter', 'ptor', 'pus', 'ra', 'rana', 'ranox', 'raso', 'rdano', 're', 'recus', 'reia', 'reius', 'rel', 'rellia', 'rellius', 'ria', 'rianus', 'rick', 'rid', 'rina', 'rio', 'riosus', 'rium', 'rius', 'rnian', 'ro', 'ronicus', 'rra', 'rugrius', 'rus', 'scius', 'seius', 'sennius', 'sia', 'sildor', 'sillius', 'siner', 'sinia', 'sinus', 'siso', 'sius', 'spus', 'ssaeia', 'ssiner', 'ssius', 'stiris', 'stus', 'ta', 'tanian', 'tarian', 'tedius', 'telli', 'tely', 'tepelus', 'testrake', 'ti', 'tia', 'tian', 'tilius', 'tim', 'tinius', 'tino', 'tis', 'tiulonus', 'tius', 'tlilia', 'tlilius', 'ton', 'tor', 'torius', 'trius', 'tti', 'ttian', 'tumnus', 'tus', 'vain', 'varus', 'velus', 'ver', 'via', 'vius', 'vonius', 'vus', 'wine', 'yan', 'ynoslin'];
  const nm12 = ['abolis', 'acia', 'ad', 'ades', 'adia', 'aennius', 'agan', 'agia', 'agrius', 'ain', 'al', 'ale', 'alian', 'alius', 'an', 'ana', 'ance', 'and', 'anian', 'anis', 'anius', 'annus', 'anox', 'ant', 'anus', 'ar', 'arel', 'aria', 'arian', 'ario', 'arnian', 'arus', 'aso', 'assius', 'ata', 'atius', 'ectus', 'ecus', 'edius', 'eia', 'eim', 'eius', 'el', 'eld', 'elia', 'elian', 'elius', 'elli', 'ellia', 'ellian', 'elliun', 'ellius', 'ello', 'ellus', 'ely', 'en', 'ena', 'enagus', 'engius', 'enix', 'ennia', 'ennius', 'enshield', 'entanus', 'entia', 'entius', 'enus', 'er', 'eria', 'erius', 'es', 'esius', 'estrake', 'ette', 'eus', 'evelus', 'evius', 'evus', 'ey', 'ia', 'ian', 'iand', 'iant', 'ianus', 'iatius', 'ibonia', 'icci', 'ich', 'icia', 'ician', 'icius', 'ick', 'id', 'idenius', 'idia', 'idicus', 'idius', 'idus', 'iel', 'ienus', 'ifus', 'ilchiotus', 'ildor', 'ilia', 'ilius', 'illin', 'illius', 'im', 'imius', 'imus', 'in', 'ina', 'inia', 'inius', 'innius', 'ino', 'inus', 'io', 'ione', 'iosus', 'iotus', 'ipter', 'irus', 'is', 'issaeia', 'itian', 'iulus', 'ium', 'ius', 'iusus', 'ocius', 'odius', 'ol', 'ollius', 'on', 'one', 'onia', 'onicus', 'onius', 'onus', 'orel', 'ori', 'oria', 'orius', 'orman', 'otepelus', 'otis', 'otus', 'uceius', 'ucia', 'udilius', 'ugrius', 'uius', 'uleius', 'uliulus', 'ullus', 'ulus', 'ulusus', 'umnus', 'unceia', 'unia', 'ureius', 'us', 'useius', 'usiso', 'usius', 'ustiris', 'ustius', 'usus', 'uttian'];


  const i = Math.floor(Math.random() * 10);
  {
    if (1 % 2 === 0) {
      rnd5 = Math.floor(Math.random() * nm9.length);
      rnd6 = Math.floor(Math.random() * nm11.length);
      lName = ` ${nm9[rnd5]}${nm11[rnd6]}`;
    } else {
      rnd5 = Math.floor(Math.random() * nm10.length);
      rnd6 = Math.floor(Math.random() * nm12.length);
      lName = ` ${nm10[rnd5]}${nm12[rnd6]}`;
    }
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm5.length);
      rnd2 = Math.floor(Math.random() * nm7.length);
      names = nm5[rnd] + nm7[rnd2] + lName;
    } else if (i % 2 !== 0) {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm3.length);
      names = nm1[rnd] + nm3[rnd2] + lName;
    } else {
      rnd = Math.floor(Math.random() * nm2.length);
      rnd2 = Math.floor(Math.random() * nm4.length);
      names = nm2[rnd] + nm4[rnd2] + lName;
    }
    return names;
  }
}