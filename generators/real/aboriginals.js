export default function aboriginals() {
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Abbagan', 'Amaranga', 'Arringurry', 'Babroda', 'Balagee', 'Balarabar', 'Balgowie', 'Ballafully', 'Ballil', 'Bambara', 'Bamboorah', 'Bander', 'Bandymall', 'Banering', 'Bantam', 'Barnergu', 'Barool', 'Bealiabiddy', 'Beangagarrie', 'Bebenna', 'Beeran', 'Belangana', 'Benan', 'Benben', 'Benjan', 'Bernilidge', 'Bevan', 'Bido', 'Bilaranora', 'Bilay', 'Bilbrodins', 'Billijee', 'Billingarra', 'Billingulbut', 'Bilyagoora', 'Bingargy', 'Bingarra', 'Bingarrie', 'Binny', 'Binyan', 'Biyine', 'Bolubung', 'Bonarrantwu', 'Booagoo', 'Boobala', 'Booban', 'Boollgie', 'Boolman', 'Boolway', 'Boomgardie', 'Boomgunglla', 'Boongew', 'Booyounboomurra', 'Borgulneigh', 'Boyaneal', 'Boyenboomarra', 'Boyentoie', 'Braren', 'Brojah', 'Brungarra', 'Bubba', 'Buckia', 'Bulgbarn', 'Bumbra', 'Bumbrygoora', 'Bundalla', 'Bundamerrie', 'Bungarook', 'Bungarrow', 'Bunyan', 'Burrhayanda', 'Burrula', 'Butterbung', 'Buun', 'Cagi', 'Cale', 'Canjugga', 'Canya', 'Capingool', 'Caroo', 'Carrabiddy', 'Carrible', 'Cauering', 'Ceasear', 'Chalbo', 'Chalga', 'Chalmu', 'Chalya', 'Changurlla', 'Charley', 'Charrah', 'Charrat', 'Charrot', 'Chewing', 'Chichong', 'Chilarrie', 'Chilbeel', 'Chilkerney', 'Chilra', 'Chinmarra', 'Chinmarran', 'Chiridie', 'Chooly', 'Chowaberry', 'Chuimarran', 'Ciccagunga', 'Ciobie', 'Clyanbong', 'Cobbier', 'Cobelcoot', 'Cocogo', 'Colengood', 'Comagrue', 'Condy', 'Congalia', 'Congon', 'Coobidan', 'Coobine', 'Coodaura', 'Coodgie', 'Coogeerappa', 'Coogellong', 'Cookubung', 'Cooladdie', 'Cooladjie', 'Coolanyarra', 'Cooley', 'Coolip', 'Coomarrah', 'Coombil', 'Coombilie', 'Coombooloo', 'Coombre', 'Coomer', 'Coomooro', 'Coonbee', 'Coondada', 'Cooniburt', 'Coorabin', 'Coorabung', 'Cooradoo', 'Cordinally', 'Coreddie', 'Corellor', 'Coringora', 'Corringoora', 'Coulbabunar', 'Coungila', 'Coutballi', 'Cowaneal', 'Cowell', 'Cowing', 'Croongumgene', 'Cudda', 'Cuddaring', 'Cuiale', 'Culip', 'Cullangarra', 'Culludie', 'Cumbul', 'Cummul', 'Cunaring', 'Cundijerry', 'Cunggen', 'Currancumback', 'Curtenbiddy', 'Curumbah', 'Daboot', 'Dalgoring', 'Damming', 'Damper', 'Damtop', 'Dandy', 'Dangedgie', 'Darbut', 'Daygoora', 'Daygorra', 'Dearle', 'Delion', 'Diddumo', 'Digbah', 'Dimmoly', 'Dindal', 'Dinga', 'Dingbah', 'Dollie', 'Dolloper', 'Doolabin', 'Doontah', 'Drell', 'Drice', 'Dugald', 'Dugarrie', 'Duhigong', 'Dulbarabarra', 'Dundor', 'Dungallah', 'Durramby', 'Eauberl', 'Edgi', 'Egaboo', 'Ejee', 'Eki', 'Elan', 'Eline', 'Elliabung', 'Enugowra', 'Eregah', 'Erramulla', 'Eualagie', 'Eualldo', 'Eyaboo', 'Flowie', 'Garebung', 'Gddjup', 'Geenian', 'Geering', 'Georgie', 'Gibagee', 'Gidarra', 'Gigaroo', 'Gillanda', 'Gillander', 'Gillut', 'Ginmakin', 'Ginmugga', 'Gnamangarrah', 'Gnewry', 'Gnoolbann', 'Gnuger', 'Golyer', 'Goomal', 'Goonamana', 'Goormurra', 'Governurra', 'Gubblew', 'Guemajarry', 'Guerin', 'Guiemagerra', 'Gundowlar', 'Gunmatcha', 'Guooka', 'Gyalong', 'Haldily', 'Hogmine', 'Hulla', 'Iaheitgool', 'Ianbida', 'Ibingie', 'Ibithie', 'Ibyanbiddy', 'Ielbuggarra', 'Illgidy', 'Imetta', 'Indamury', 'Ingdon', 'Ioolgileroh', 'Ischoongoban', 'Jabbelgee', 'Jackie', 'Jalyeanic', 'Jamaha', 'Jamwarrah', 'Janbah', 'Jandamurra', 'Jano', 'Janrmayarie', 'Janyaring', 'Jardogoord', 'Jaroweer', 'Jarragah', 'Jarragia', 'Jarrambah', 'Jathie', 'Jebbedie', 'Jebung', 'Jeeung', 'Jemairo', 'Jennagueiroo', 'Jerico', 'Jerong', 'Jerriman', 'Jessabury', 'Jilbonger', 'Jillawar', 'Jimala', 'Jinagooda', 'Jindardie', 'Jinnacoobeedy', 'Jinnamoora', 'Jinnerwalthy', 'Jiwabiddy', 'Jomdah', 'Jongalin', 'Jowallie', 'Jowdah', 'Jowella', 'Jowlee', 'Juanmorgo', 'Jubaitch', 'Jubeck', 'Jubenar', 'Judaburga', 'Judju', 'Juebidge', 'Jugatuna', 'Julbert', 'Julmerra', 'Julumah', 'Julyangary', 'Juminmeral', 'Jumpe', 'Jumpiger', 'Jumpigma', 'Jundesbiddi', 'Jundle', 'Jundy', 'Juney', 'Junga', 'Jungera', 'Jungerbiddie', 'Jungla', 'Jungurrur', 'Junkaline', 'Junnup', 'Jurorarra', 'Jurumba', 'Jurungah', 'Juuderbiddil', 'Kagageerra', 'Kalallow', 'Kalgarmen', 'Kaligadigo', 'Kallabillii', 'Kareelya', 'Karemmgen', 'Karmengen', 'Karribal', 'Keayo', 'Kellyaine', 'Kerunian', 'Kheiladoo', 'Kialja', 'Kialya', 'Kianga', 'Kidnarrie', 'Killiel', 'Kilrengen', 'Kimala', 'Kinburrie', 'Kippin', 'Kitale', 'Kitarra', 'Kitdagie', 'Knemessing', 'Kolongulla', 'Kombo', 'Komer', 'Koodagga', 'Koondering', 'Kotund', 'Kowan', 'Kuemerring', 'Kunajaring', 'Kurgowallah', 'Kurranga', 'Kutching', 'Kyah', 'Kyang', 'Kyer', 'Kyes', 'Labbaduma', 'Lambi', 'Laringmea', 'Lawarjarro', 'Ledgin', 'Leidawah', 'Limbie', 'Limera', 'Linjah', 'Lofgun', 'Loobagarra', 'Loomerra', 'Loongarra', 'Loupgan', 'Lunonjong', 'Mabingar', 'Madgelparah', 'Maguriett', 'Mahdi', 'Mair', 'Mallabal', 'Mallerbury', 'Mallinbilly', 'Malminya', 'Malmurchi', 'Malylun', 'Manbie', 'Mangangooma', 'Mangangoora', 'Mangoo', 'Mann', 'Manyarie', 'Maranbar', 'Marbonger', 'Mardabiddy', 'Mareeda', 'Maring', 'Marlow', 'Marraka', 'Matchino', 'Matchinoo', 'Mauaka', 'Mayborr', 'Mayleebee', 'Mayra', 'Meardie', 'Meeowarra', 'Meetow', 'Mejarra', 'Merka', 'Merricumana', 'Mewinurra', 'Miabiddy', 'Miamonger', 'Midger', 'Milangurrie', 'Milbaral', 'Milllring', 'Milura', 'Mimmie', 'Minabiddy', 'Minarrie', 'Mindah', 'Mindennia', 'Mindolan', 'Minesley', 'Mingaring', 'Mingarra', 'Mingie', 'Mingin', 'Mingo', 'Mingun', 'Mininarra', 'Minjarrah', 'Minrong', 'Mira', 'Mirrygoora', 'Mitchamur', 'Mombawamarra', 'Monga', 'Mongah', 'Monurga', 'Moogie', 'Mookamunda', 'Moolmemillah', 'Moolyal', 'Moolyarl', 'Moonby', 'Moonoriguna', 'Moonrungah', 'Moonta', 'Moora', 'Mooralga', 'Moorangie', 'Moorangone', 'Morangi', 'Morangoril', 'Morangorin', 'Mordego', 'Morigarra', 'Morlbiny', 'Morle', 'Mornay', 'Mougurra', 'Moulayunda', 'Mudungarra', 'Muganna', 'Muggamina', 'Muiero', 'Mula', 'Mulbagaroo', 'Muldabila', 'Mulginna', 'Mulgooma', 'Muljohn', 'Mullallah', 'Mullallar', 'Mullener', 'Mullerwula', 'Mullonga', 'Muloyan', 'Mulya', 'Mulyall', 'Munarring', 'Munaungo', 'Mundaja', 'Munderero', 'Mungagee', 'Munglegarra', 'Mungonna', 'Mungool', 'Mungymia', 'Muninyong', 'Munmardie', 'Munnion', 'Munyagamarra', 'Murdie', 'Murgagee', 'Muria', 'Murrawah', 'Murraworra', 'Myrabella', 'Naajahbung', 'Naba', 'Nagely', 'Nagerbiddy', 'Naibar', 'Nailgahn', 'Najinghu', 'Nallabiddy', 'Naluda', 'Namboo', 'Namburrah', 'Namia', 'Nammammerra', 'Nanberry', 'Nangerow', 'Nanmin', 'Nany', 'Narabocho', 'Narga', 'Nargie', 'Narraloo', 'Narrkie', 'Neenynah', 'Nemegarrie', 'Nemy', 'Niabatteroo', 'Nimergirrie', 'Nimm', 'Ninala', 'Ninnie', 'Nobburg', 'Nogee', 'Nolyup', 'Noolanda', 'Noolarda', 'Noolhardie', 'Nooriudamurra', 'Norangibah', 'Noregnbor', 'Nugerlett', 'Nullya', 'Nunaeba', 'Nundle', 'Nundowaga', 'Nungen', 'Nungerray', 'Nyan', 'Nyning', 'Obing', 'Ondarrie', 'Onemah', 'Oneye', 'Oogoola', 'Oolengurra', 'Oolgee', 'Oubin', 'Painbiddy', 'Palague', 'Panlijiny', 'Paradibung', 'Parala', 'Patatiall', 'Peberra', 'Peenut', 'Peewalla', 'Peteyoora', 'Pilibung', 'Pimpeye', 'Pingar', 'Pinginoora', 'Pingnally', 'Pingo', 'Pinjarra', 'Poontah', 'Pooroogooroo', 'Pranga', 'Prangarah', 'Puckelgabba', 'Pulgem', 'Pundaroo', 'Punta', 'Puttyyearra', 'Quadgabung', 'Quadport', 'Quailing', 'Quamberry', 'Quaramoire', 'Quartermarra', 'Quering', 'Quolermer', 'Ramanganoora', 'Ranga', 'Rangar', 'Reenjulga', 'Rogermulla', 'Rommullah', 'Simalin', 'Suggene', 'Suna', 'Tabitol', 'Talborough', 'Tallyibumbera', 'Tamrie', 'Tandawiy', 'Taragea', 'Taranay', 'Targabiddy', 'Tarrakiday', 'Tebec', 'Tebur', 'Teteroo', 'Thalyermana', 'Thorlibin', 'Tiababar', 'Tiangalan', 'Tilianne', 'Timble', 'Timblejoorany', 'Timboine', 'Timbul', 'Timerdy', 'Tindibarkonbri', 'Tmy', 'Tomen', 'Tommy', 'Toogier', 'Toombon', 'Toucceey', 'Towelly', 'Towerling', 'Tulget', 'Tunburrie', 'Tungabiddy', 'Tungabung', 'Uamber', 'Ulinda', 'Ummaundon', 'Unbaranga', 'Undamarra', 'Unga', 'Unjung', 'Urronga', 'Urrrmaring', 'Wabbokombor', 'Wadiabora', 'Wahbu', 'Wahlady', 'Wakkerman', 'Walabiddy', 'Walbook', 'Walbreieu', 'Walenbooke', 'Walgamarrie', 'Wallyermerrie', 'Waltoko', 'Wammallu', 'Wanbin', 'Wandi', 'Wandie', 'Wanering', 'Wangabiddy', 'Wangandie', 'Wanganllie', 'Wanmoor', 'Wannabung', 'Wannigoora', 'Wanorra', 'Wanthergoora', 'Warab', 'Wargiabor', 'Warnup', 'Warraburro', 'Warrad', 'Watchingi', 'Watchitwah', 'Waume', 'Weddy', 'Wedgegoo', 'Weedie', 'Weelyarra', 'Weeno', 'Weer', 'Welinnia', 'Wenamah', 'Werababa', 'Werrinmurri', 'Whilira', 'Whiskelmee', 'Wiberoo', 'Wickaman', 'Wiggie', 'Wileody', 'Wimmirer', 'Winam', 'Windacool', 'Windarra', 'Windary', 'Windella', 'Windill', 'Windong', 'Windygona', 'Wine', 'Wineburt', 'Wingaring', 'Wingatta', 'Wingerwinger', 'Winimarrie', 'Winnlip', 'Winung', 'Winwiggie', 'Wiring', 'Wirribbaby', 'Witzie', 'Wobbing', 'Woganure', 'Woilie', 'Womarry', 'Wombing', 'Womering', 'Womorwering', 'Wongar', 'Wonges', 'Wongie', 'Wongoidchee', 'Wooglemere', 'Woolburry', 'Worrowa', 'Wunagoora', 'Wurangihul', 'Wyeallicbah', 'Wygan', 'Yabariem', 'Yabbinger', 'Yabongona', 'Yadingallie', 'Yalara', 'Yalgeege', 'Yalgigger', 'Yalla', 'Yallajarra', 'Yallerman', 'Yallica', 'Yallie', 'Yallup', 'Yamboo', 'Yammayanie', 'Yangarra', 'Yangdangerra', 'Yangingoo', 'Yanmingo', 'Yarangulie', 'Yargie', 'Yarin', 'Yaringarra', 'Yarrabung', 'Yarrabyth', 'Yarragally', 'Yarragee', 'Yarramenbung', 'Yarramurrah', 'Yarre', 'Yaulgamuggia', 'Yearndiemurra', 'Yembeane', 'Yengangarry', 'Yernilgurrawa', 'Yerowie', 'Yiendi', 'Yinaring', 'Yombeen', 'Yondoora', 'Youdiggy', 'Youkall', 'Youlatch', 'Youlbourybung', 'Youngoo', 'Yourange', 'Youwearie', 'Yowdar', 'Yulla', 'Yulman', 'Yumboo', 'Yungurra'];
  const nm2 = ['Anaeah', 'Andabiddy', 'Angao', 'Backo', 'Baganimen', 'Ballasbiny', 'Ballasbiny', 'Balnah', 'Baluah', 'Balyuah', 'Bambilul', 'Bambuna', 'Banbarra', 'Banda', 'Bando', 'Banyahn', 'Bardikin', 'Bargana', 'Barla', 'Barmboo', 'Barnbee', 'Bebar', 'Bedgebah', 'Beenan', 'Biano', 'Bibby', 'Bidadory', 'Bilal', 'Billelee', 'Billilia', 'Billyebah', 'Bilyack', 'Bimering', 'Bindu', 'Bingaar', 'Bingmea', 'Binjmea', 'Binmarry', 'Binmary', 'Binnagoora', 'Binonia', 'Biradoo', 'Biralla', 'Birgonie', 'Birrabag', 'Birrabba', 'Birrabian', 'Birraga', 'Birramorra', 'Bongol', 'Bongular', 'Boogagara', 'Boolda', 'Boora', 'Boori', 'Bootamarra', 'Boothbarrier', 'Booyer', 'Booyerbong', 'Booyo', 'Boromooru', 'Bottail', 'Bowenboak', 'Bowrubroh', 'Boya', 'Briddan', 'Bringie', 'Buadoo', 'Buddagun', 'Bugadum', 'Buimarry', 'Bulba', 'Bulloo', 'Bullyabinung', 'Bulyen', 'Bumbieugo', 'Bumpatha', 'Bunbarrah', 'Bundanaring', 'Bundang', 'Bundoo', 'Bungar', 'Bungaree', 'Bungaring', 'Bungay', 'Bunggo', 'Bungin', 'Bunjarrie', 'Bunnabiddy', 'Bunnagarra', 'Bunner', 'Burjog', 'Burrajarra', 'Buryalow', 'Buyjenbup', 'Cabbilya', 'Cabidubba', 'Cacabut', 'Cadadgoor', 'Cadayan', 'Cainyerbiny', 'Calbut', 'Calderbiddy', 'Callant', 'Calmore', 'Calookota', 'Calpie', 'Canamoola', 'Canaway', 'Carboagunia', 'Carbynung', 'Careby', 'Carlarry', 'Caroon', 'Carratung', 'Carwce', 'Caulba', 'Chabooka', 'Chaccaroo', 'Chadagooda', 'Chambulla', 'Charlow', 'Charooga', 'Cheeringowie', 'Cheetinga', 'Cheetingnarra', 'Chegong', 'Cheunjoora', 'Chewbaran', 'Chibero', 'Chielien', 'Chimiayarra', 'Chinagoora', 'Chirrugarra', 'Chowager', 'Chulberingo', 'Chumbuli', 'Chumbulli', 'Chungi', 'Cobbabowga', 'Cobbler', 'Cobra', 'Cockamarra', 'Codgie', 'Colba', 'Colungalla', 'Combean', 'Combye', 'Comiran', 'Congoo', 'Conguing', 'Conquering', 'Conquering', 'Cooallie', 'Cooararing', 'Coobada', 'Cooban', 'Coobeen', 'Cooberong', 'Cooboouna', 'Coodurundy', 'Cooeathalby', 'Coogapee', 'Coogibee', 'Cookarrie', 'Cookelludy', 'Cookering', 'Cookrana', 'Coolagee', 'Coolgardie', 'Coolgrigie', 'Coolyal', 'Coolyala', 'Coomalye', 'Coomba', 'Coombun', 'Coomeron', 'Coona', 'Coonderiujo', 'Coonduna', 'Coongie', 'Coonibango', 'Coorabar', 'Copperbung', 'Cormo', 'Cornbell', 'Coromar', 'Coulbie', 'Coulbrinya', 'Cudginoora', 'Cudiaboo', 'Cueing', 'Cujabiddy', 'Cullyal', 'Cumbella', 'Cumbering', 'Cummerer', 'Cunda', 'Cungibung', 'Cunyour', 'Curridee', 'Curryman', 'Darraga', 'Deera', 'Delingbar', 'Denal', 'Depat', 'Dickeyman', 'Dilnnarri', 'Dingin', 'Dingree', 'Diniga', 'Diyah', 'Dolerigacco', 'Dongen', 'Dongo', 'Doodah', 'Doodubury', 'Dujah', 'Dulgan', 'Dungarilla', 'Dunglebee', 'Durey', 'Eadiebong', 'Easer', 'Eirewallah', 'Eleilbah', 'Ellie', 'Ellimba', 'Elyando', 'Enanty', 'Enbacona', 'Erragelly', 'Errawarie', 'Ethanga', 'Ethanja', 'Ettica', 'Eubunga', 'Faardib', 'Fannu', 'Farram', 'Farrama', 'Flaardob', 'Fluten', 'Gabgaba', 'Galgurra', 'Gandga', 'Ganungo', 'Gaooley', 'Gegecoora', 'Gelgiran', 'Gidgegidgee', 'Gillbunnian', 'Gilya', 'Ginawalla', 'Gininberalis', 'Ginnumarra', 'Ginourie', 'Gnaran', 'Gnarlie', 'Gnarly', 'Gningden', 'Gnoolga', 'Gnoolya', 'Gnowen', 'Gollanna', 'Gongean', 'Goodalah', 'Goolman', 'Goombarra', 'Goomenarrie', 'Goonabering', 'Goondagie', 'Goondeyar', 'Gooragall', 'Goorageyah', 'Griael', 'Gualjoogie', 'Guearbie', 'Guelbion', 'Gundulan', 'Gunmonga', 'Halingbiddy', 'Harbey', 'Harraloonda', 'Heegi', 'Heurel', 'Hitheygorra', 'Hoonn', 'Hortee', 'Huruauley', 'Hynman', 'Ibargio', 'Ihorli', 'Imberbe', 'Inyah', 'Irrawella', 'Jabarbiddy', 'Jabee', 'Jackaloo', 'Jackiha', 'Jaelabiddy', 'Jage', 'Jalbingie', 'Jambie', 'Jangabba', 'Jange', 'Jangee', 'Jangie', 'Janman', 'Janyca', 'Jargee', 'Jarminga', 'Jarnix', 'Jarran', 'Jarrawillah', 'Jarrugulla', 'Jeemo', 'Jellon', 'Jenerary', 'Jerrylar', 'Jeward', 'Jewi', 'Jilaia', 'Jilber', 'Jilbia', 'Jilgarine', 'Jiloolie', 'Jimbooda', 'Jimlooda', 'Jimmar', 'Jinambie', 'Jindin', 'Jinerwellya', 'Jinmica', 'Jinnermonunal', 'Jippan', 'Jivobbie', 'Jordigibbina', 'Jordip', 'Jugoorah', 'Juian', 'Juibar', 'Juivelly', 'Julianon', 'Jummal', 'Jumpy', 'Junaman', 'Jungedun', 'Jungi', 'Jungobiddy', 'Junkey', 'Junlgire', 'Junman', 'Juradoo', 'Juragoo', 'Jurdiebiddy', 'Juripe', 'Kaardob', 'Kankanya', 'Kanmuki', 'Karrijeuiga', 'Katash', 'Keyer', 'Kioubah', 'Kiturra', 'Koln', 'Komlak', 'Kondidi', 'Koola', 'Kooran', 'Kudgeon', 'Kuget', 'Kunfey', 'Kungmay', 'Kurijy', 'Kurragiley', 'Kurryman', 'Kutchinder', 'Laldian', 'Lambourga', 'Lammay', 'Largin', 'Larrabidal', 'Lawn', 'Liarmer', 'Liga', 'Lindin', 'Lingangaror', 'Lingarry', 'Linyardi', 'Linyarry', 'Longnal', 'Longuma', 'Luianna', 'Lumplebiny', 'Lungada', 'Lungarrier', 'Luryada', 'Madering', 'Madgadung', 'Madgaring', 'Madjigooda', 'Magget', 'Magmu', 'Malaura', 'Maleyua', 'Maljagoora', 'Mallabooda', 'Malle', 'Mallerong', 'Mallinarah', 'Malooda', 'Maminda', 'Managee', 'Manbyabung', 'Mangalden', 'Mangaller', 'Manganella', 'Maniliosia', 'Manninga', 'Manue', 'Manurah', 'Manyee', 'Maoonga', 'Maoonja', 'Maouigah', 'Mardananjada', 'Mariandia', 'Marinue', 'Markal', 'Marrawa', 'Marrinna', 'Maryelung', 'Mawall', 'Mayoneye', 'Meanah', 'Medjo', 'Meenjordie', 'Meerala', 'Melangoo', 'Memmah', 'Merrimoroo', 'Mierala', 'Milgara', 'Milhie', 'Millagoora', 'Millagorra', 'Minabunga', 'Minan', 'Minbunya', 'Minda', 'Mindidgin', 'Minga', 'Mingelow', 'Minjla', 'Minjon', 'Minkin', 'Minniewallah', 'Minningi', 'Minwae', 'Minyarrie', 'Mirilbung', 'Mirlingo', 'Mirrenbing', 'Mirylbung', 'Mithea', 'Miuling', 'Mllieumuna', 'Monaghar', 'Mongarri', 'Mooda', 'Moodie', 'Moogera', 'Mookara', 'Mookoora', 'Moolbuckie', 'Moolerabiny', 'Moolgal', 'Mooloo', 'Moonannie', 'Moontagee', 'Moora', 'Mooraeul', 'Mooraling', 'Moorawoonya', 'Moorawooya', 'Mooria', 'Mootie', 'Morgoorra', 'Mouaremarra', 'Moywing', 'Muccajiggla', 'Muccajiggle', 'Muckin', 'Mudahroo', 'Muddear', 'Mudjergool', 'Mugerurary', 'Mulbuggie', 'Mulgagoora', 'Mulgarran', 'Muljah', 'Mullabandie', 'Mullaburra', 'Mullara', 'Mullaring', 'Mullelah', 'Mullerabury', 'Mullgalber', 'Mullginbulla', 'Mullha', 'Mullilah', 'Mullum', 'Mulooloo', 'Mulya', 'Mulyae', 'Mulyar', 'Mulyenoora', 'Mulyongoorah', 'Mulyongorah', 'Mulyoryorah', 'Mulyugali', 'Mummir', 'Munamullida', 'Munchon', 'Munda', 'Mundaday', 'Mundagooga', 'Mundaine', 'Mundamarra', 'Mundamba', 'Mundarra', 'Mundooga', 'Munenanel', 'Munga', 'Mungar', 'Mungo', 'Mungoo', 'Mungoola', 'Mungurin', 'Munjuen', 'Munnamurrah', 'Munumarra', 'Mununymermera', 'Munuraijala', 'Munya', 'Murrabiddy', 'Murragoo', 'Murrich', 'Murris', 'Murumulada', 'Myaringie', 'Myingarry', 'Myngelar', 'Mynyarri', 'Nabadiddy', 'Nabberbiddy', 'Nabla', 'Nadigagurra', 'Nainbung', 'Nallacussa', 'Nallu', 'Namagilly', 'Nanberen', 'Nandaning', 'Nangalgarrie', 'Nannie', 'Nanyagurrie', 'Nanyan', 'Narbollie', 'Narlgunbiny', 'Narrabiddy', 'Narraboo', 'Narragin', 'Narragoord', 'Narraivynia', 'Narrauedi', 'Narrowinee', 'Neabinbury', 'Neema', 'Neenadja', 'Negegoord', 'Neji', 'Nemarrie', 'Neminoo', 'Nemma', 'Neneman', 'Neta', 'Neuarals', 'Neurueriny', 'Newagoora', 'Newariddy', 'Newbillygin', 'Ngellan', 'Nguing', 'Niabiddy', 'Nianbung', 'Nilgagoora', 'Nilgie', 'Nillannie', 'Nimburndie', 'Ninarjah', 'Ningobandie', 'Noggowalla', 'Nogolgot', 'Noine', 'Nolligan', 'Nomangellah', 'Nomi', 'Noochbah', 'Noodie', 'Noodong', 'Nookegan', 'Noondigoola', 'Noongor', 'Noorabury', 'Noothy', 'Nordinau', 'Norianni', 'Nothunga', 'Nounoinagoora', 'Nubidimer', 'Nulla', 'Numpy', 'Nunbun', 'Nunderanga', 'Nundi', 'Nunduiga', 'Nungaar', 'Nungaw', 'Nungella', 'Nunilla', 'Nunniemurra', 'Nuring', 'Nurma', 'Nuthourra', 'Nya', 'Nyarlo', 'Nyinda', 'Nyngmarrie', 'Nyudubiddy', 'Ogingi', 'Ollgeroo', 'Olmary', 'Omanledge', 'Onebing', 'Onemacoora', 'Onyama', 'Ooglebong', 'Oonahallah', 'Oonyeyoo', 'Ora', 'Oujah', 'Pabban', 'Pangee', 'Panu', 'Parganna', 'Patrit', 'Peawallah', 'Pendor', 'Pengoorra', 'Permaro', 'Pinamord', 'Pinberong', 'Pinder', 'Pinemore', 'Pingamma', 'Pingat', 'Pinginy', 'Pinmarrie', 'Pinmarry', 'Pinnella', 'Pinthia', 'Pira', 'Pobata', 'Polabury', 'Pooly', 'Poonagoora', 'Poonglarew', 'Pully', 'Puntabung', 'Puragee', 'Putaho', 'Pyalgojinney', 'Pydida', 'Quindron', 'Ramie', 'Raracold', 'Rear', 'Riana', 'Rimbala', 'Rinnowra', 'Rockerman', 'Rockermann', 'Rombala', 'Ronga', 'Rower', 'Rowllah', 'Ruckramba', 'Talbabree', 'Tangeroon', 'Tanngagga', 'Tannquental', 'Taranna', 'Tarberry', 'Tarbier', 'Targuea', 'Targuea', 'Tarpier', 'Taryamarra', 'Tealbiddy', 'Thammara', 'Thungalla', 'Thungarala', 'Thunjundi', 'Tiallarkan', 'Tiatan', 'Tilgula', 'Tindin', 'Tiopruae', 'Tobagee', 'Tooaora', 'Toodal', 'Toomulbah', 'Tooping', 'Tougea', 'Towering', 'Tuban', 'Tubarry', 'Tumbunna', 'Tummil', 'Tungoran', 'Tunumara', 'Ulah', 'Ulatara', 'Umax', 'Umberalla', 'Unoodja', 'Verah', 'Wadenguda', 'Waderguda', 'Wadgie', 'Wadjie', 'Wadoru', 'Wagga', 'Waggeraddy', 'Waggin', 'Wagin', 'Wahcoogara', 'Wahghel', 'Waickie', 'Waijeram', 'Waimaring', 'Walbounna', 'Wallalie', 'Wallalla', 'Wallaran', 'Walleybudda', 'Wallier', 'Wallizie', 'Walloogie', 'Wana', 'Wanagoorie', 'Wanagorie', 'Wanagu', 'Wanasbiddy', 'Wanau', 'Wandaning', 'Wandara', 'Wandoawe', 'Wandowie', 'Wangan', 'Wanganee', 'Wangei', 'Wangunna', 'Wanigia', 'Wannabiddy', 'Wannon', 'Wanyangie', 'Warina', 'Warna', 'Warnitt', 'Warraloonda', 'Warramber', 'Warrangie', 'Waumajorra', 'Wayanee', 'Wearing', 'Wedgara', 'Wedn', 'Weeal', 'Weedagooda', 'Weegie', 'Weeingan', 'Weelyarah', 'Weelyrah', 'Weeriwirri', 'Welatchie', 'Wellogoora', 'Wenjah', 'Weourrie', 'Weringjarra', 'Werrigee', 'Whatchella', 'Whitecoora', 'Whittledong', 'Whyabba', 'Widegegoor', 'Wiesta', 'Wigoogoora', 'Wilbarra', 'Wilgagoora', 'Wiliberg', 'Willaja', 'Willering', 'Williagoora', 'Williamberry', 'Wilumjarra', 'Wimbagan', 'Winbery', 'Winda', 'Windaloo', 'Winga', 'Wingah', 'Wingall', 'Winyallie', 'Wirajoora', 'Wirero', 'Wirribunga', 'Wirriwirri', 'Wisiney', 'Withegoora', 'Wittledong', 'Witzie', 'Wobunun', 'Wodyabiddy', 'Wogin', 'Woluabiddy', 'Womangee', 'Womba', 'Wombaddy', 'Womica', 'Wonany', 'Wongarra', 'Wongon', 'Wonnogun', 'Woobannyan', 'Woodeney', 'Wooderie', 'Woodya', 'Woolajan', 'Woolgarra', 'Woolly', 'Woombrah', 'Woonda', 'Woondale', 'Woonegoora', 'Woratbin', 'Worrallie', 'Wottah', 'Wya', 'Wyanie', 'Yabin', 'Yadginnew', 'Yadyaboora', 'Yagadoo', 'Yagerleary', 'Yalbie', 'Yalbori', 'Yallaferra', 'Yallumboll', 'Yamadie', 'Yambie', 'Yamby', 'Yamijah', 'Yammanie', 'Yandarah', 'Yandie', 'Yangeen', 'Yangie', 'Yanjigurry', 'Yanmagoora', 'Yannanbiddy', 'Yannie', 'Yanningbiddy', 'Yano', 'Yanuinga', 'Yanyea', 'Yarragoora', 'Yarramurry', 'Yarrawallah', 'Yarrling', 'Yatchigoora', 'Yealingba', 'Yeeathda', 'Yelbebbie', 'Yella', 'Yellawalla', 'Yenemrne', 'Yetchgoora', 'Yewo', 'Yilbibbie', 'Yillea', 'Yimmah', 'Yingee', 'Ynallie', 'Yoekabiddy', 'Yonerda', 'Yonyinonna', 'Yoondong', 'Yorjup', 'Yorresie', 'Youbah', 'Youllisa', 'Youlou', 'Younga', 'Yourie', 'Yowalie', 'Yowanona', 'Yoweina', 'Yowerassy', 'Yowlah', 'Yuinabang', 'Yunda'];


  i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm2.length);
      names = nm2[rnd];
      nm2.splice(rnd, 1);
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      names = nm1[rnd];
      nm1.splice(rnd, 1);
    }
    return names;
  }
}
