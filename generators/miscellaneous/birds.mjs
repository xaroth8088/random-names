export default function birds() {
  let names;
  let rnd;
  let rnd2;
  let rnd;
  let rnd2;
  let names;
  const nm1 = ['Aalge', 'Abdimii', 'Aberti', 'Abingoni', 'Aburria', 'Abyssinica', 'Abyssinicus', 'Acadicus', 'Accipiter', 'Aceros', 'Acridotheres', 'Acrocephalus', 'Acryllium', 'Actitis', 'Actophilornis', 'Acuta', 'Acutipennis', 'Acutirostris', 'Adamsii', 'Adeliae', 'Adsimilis', 'Adspersus', 'Aechmophorus', 'Aedon', 'Aegithalos', 'Aegolius', 'Aegyptiaca', 'Aegyptius', 'Aequatorialis', 'Aequatorius', 'Aestiva', 'Aethereus', 'Aethia', 'Aethiopicus', 'Aethiops', 'Afer', 'Affinis', 'Africana', 'Africanoides', 'Africanus', 'Agapornis', 'Agelaioides', 'Agelaius', 'Agelasticus', 'Aguimp', 'Aimophila', 'Aix', 'Ajaja', 'Alba', 'Albatrus', 'Albellus', 'Albeola', 'Albicaudatus', 'Albiceps', 'Albicilla', 'Albicolis', 'Albicollis', 'Albifrons', 'Albigularis', 'Albilora', 'Albirostris', 'Albiventer', 'Albiventris', 'Albofasciata', 'Albolarvatus', 'Albospecularis', 'Albosquamatus', 'Alboterminatus', 'Albus', 'Alca', 'Alcedo', 'Alcyon', 'Alectoris', 'Alectura', 'Alexandri', 'Alisterus', 'Alle', 'Alnorum', 'Alopochen', 'Alpestris', 'Alpina', 'Aluco', 'Amadonastur', 'Amaurocephalus', 'Amaurornis', 'Amaurotis', 'Amazilia', 'Amazona', 'Amazonetta', 'Amazonica', 'Amblyospiza', 'Americana', 'Americanus', 'Amethystina', 'Ammodramus', 'Amoena', 'Amphispiza', 'Anaethetus', 'Anas', 'Anastomus', 'Anatum', 'And', 'Andinus', 'Andropadus', 'Angolensis', 'Anguitimens', 'Angustifrons', 'Angustirostris', 'Anhinga', 'Ani', 'Anna', 'Anneae', 'Anodorhynchus', 'Anorrhinus', 'Anous', 'Anser', 'Anseranas', 'Antarcticus', 'Anthobaphes', 'Anthochaera', 'Anthracinus', 'Anthracoceros', 'Anthropoides', 'Anthus', 'Antigone', 'Antillarum', 'Antilophia', 'Antipodes', 'Aphantochroa', 'Aphelocoma', 'Aphriza', 'Apiaster', 'Aplopelia', 'Aptenodytes', 'Apteryx', 'Apus', 'Aquatica', 'Aquaticus', 'Aquila', 'Ara', 'Arachnothera', 'Aramus', 'Ararauna', 'Aratinga', 'Arborea', 'Arborophila', 'Archilochus', 'Arctica', 'Arcticus', 'Arcuata', 'Ardea', 'Ardeola', 'Ardeotis', 'Ardesiaca', 'Ardosiacus', 'Arenaria', 'Argentatus', 'Argenteus', 'Argus', 'Argusianus', 'Aristotelsis', 'Armatus', 'Armenicus', 'Arminjoniana', 'Arnaudi', 'Arnotti', 'Arquata', 'Arquatrix', 'Arremon', 'Arremonops', 'Arundinicola', 'Asiatica', 'Asiaticus', 'Asio', 'Assimilis', 'Astrild', 'Ater', 'Aterrimus', 'Athene', 'Atra', 'Atratus', 'Atricapilla', 'Atricapillus', 'Atriceps', 'Atricilla', 'Atrococcineus', 'Atrogularis', 'Atthis', 'Attila', 'Audax', 'Auduboni', 'Augur', 'Aulacorhynchus', 'Aura', 'Aurantius', 'Auratus', 'Aurea', 'Aureola', 'Auriceps', 'Auricularis', 'Aurifrons', 'Auriparus', 'Aurita', 'Auritus', 'Aurocapillus', 'Auroreus', 'Australis', 'Autumnalis', 'Avosetta', 'Aythya', 'Bachmani', 'Badius', 'Baeolophus', 'Baeri', 'Baglafecht', 'Bahamensis', 'Bailloni', 'Bairdii', 'Balaeniceps', 'Balearica', 'Bambusicola', 'Banksii', 'Barbadensis', 'Barbarus', 'Barbata', 'Barnardius', 'Baroni', 'Bartramia', 'Baryphthengus', 'Basileuterus', 'Bassanus', 'Batara', 'Batis', 'Baudinii', 'Bauri', 'Beccarii', 'Beldingi', 'Belli', 'Bellicosus', 'Bellii', 'Bendirei', 'Benghalensis', 'Bennetti', 'Bergii', 'Bernicla', 'Bernieri', 'Bewicki', 'Bewickii', 'Biarmicus', 'Bicinctus', 'Bicolor', 'Bicornis', 'Bidentata', 'Bilineata', 'Bistriatus', 'Biziura', 'Blanchoti', 'Boehmi', 'Bombycilla', 'Bonariensis', 'Bonasa', 'Boobook', 'Boodang', 'Borin', 'Bornea', 'Bostrychia', 'Botaurus', 'Bouvreuil', 'Brachypterus', 'Brachyrhynchos', 'Brachyrhynchus', 'Bradfieldi', 'Bransfieldensis', 'Branta', 'Brasilianum', 'Brasilianus', 'Brasiliense', 'Brasiliensis', 'Bresilius', 'Brevipes', 'Brevirostris', 'Breweri', 'Browni', 'Brunneicapillus', 'Bubalornis', 'Bubo', 'Bubulcus', 'Buccinator', 'Bucephala', 'Buceros', 'Bucinator', 'Bucorvus', 'Bulleri', 'Bullockii', 'Bullockoides', 'Buphagus', 'Burchelli', 'Burhinus', 'Burrovianus', 'Buteo', 'Buteogallus', 'Butorides', 'Bycaistes', 'Cabanisi', 'Cacatua', 'Cacicus', 'Cacomantis', 'Cactospiza', 'Caerulea', 'Caerulescens', 'Caeruleus', 'Caesia', 'Cafer', 'Caffra', 'Cairina', 'Calandra', 'Calcarius', 'Caledonicus', 'Calendula', 'Calidris', 'Californianus', 'Californica', 'Californicus', 'Calliope', 'Callipepla', 'Calliphlox', 'Callonetta', 'Calocitta', 'Caloenas', 'Calonectris', 'Calvus', 'Calypte', 'Calyptorhynchus', 'Camarhynchus', 'Camelus', 'Campanisona', 'Campephilus', 'Campestris', 'Campethera', 'Camptostoma', 'Campylopterus', 'Campylorhynchus', 'Cana', 'Canadensis', 'Canagicus', 'Canaria', 'Caniceps', 'Canicollis', 'Canorus', 'Canus', 'Canutus', 'Capense', 'Capensis', 'Capicola', 'Capitalis', 'Capitata', 'Caprimulgus', 'Caracara', 'Carbo', 'Cardellina', 'Cardinalis', 'Carduelis', 'Cariama', 'Carneipes', 'Carolina', 'Carolinensis', 'Carolinus', 'Carpalis', 'Carpodacus', 'Carunculata', 'Carunculatus', 'Caspia', 'Cassinii', 'Castanea', 'Castanotis', 'Casuarius', 'Cathartes', 'Catharus', 'Catherpes', 'Caudacutus', 'Caudata', 'Caudatus', 'Caurina', 'Caurinus', 'Cauta', 'Cayana', 'Cayanensis', 'Ceciliae', 'Cedrorum', 'Celata', 'Celeus', 'Cenchroides', 'Centrocercus', 'Centropus', 'Cepphus', 'Cercomela', 'Cereopsis', 'Cerorhinca', 'Certhia', 'Certhidea', 'Ceryle', 'Ceylonensis', 'Chacuru', 'Chaetocercus', 'Chalcophaps', 'Chalcoptera', 'Chalcospilos', 'Chalybaeus', 'Chalybea', 'Chalybeus', 'Chamaea', 'Chamaeza', 'Charadrius', 'Chasiempis', 'Chauna', 'Chelicuti', 'Chen', 'Chenonetta', 'Cheriway', 'Chersomanes', 'Chihi', 'Chilensis', 'Chimachima', 'Chimera', 'Chinensis', 'Chionis', 'Chiroxiphia', 'Chirurgus', 'Chlidonias', 'Chloephaga', 'Chloricterus', 'Chloris', 'Chloroceryle', 'Chlorocichla', 'Chlorophanes', 'Chlorophonia', 'Chloroptera', 'Chloropus', 'Chlorostilbon', 'Chlorurus', 'Choliba', 'Chondestes', 'Chordeiles', 'Chroicocephalus', 'Chrysaetos', 'Chrysocephalus', 'Chrysocome', 'Chrysoenas', 'Chrysoides', 'Chrysolophum', 'Chrysolophus', 'Chrysomus', 'Chrysops', 'Chrysostoma', 'Chrysura', 'Chukar', 'Cichladusa', 'Ciconia', 'Cinclodes', 'Cinclus', 'Cincta', 'Cinerascens', 'Cinerea', 'Cinereum', 'Cinereus', 'Cinnamominus', 'Cinnyricinclus', 'Cinnyris', 'Circaetus', 'Circus', 'Ciris', 'Cirratus', 'Cirrhata', 'Cirrhatus', 'Cirrochloris', 'Cissa', 'Cissopis', 'Cistothorus', 'Citrea', 'Citrina', 'Clangula', 'Clarkii', 'Clemenciae', 'Cliftoni', 'Clypeata', 'Clytolaema', 'Cnemotriccus', 'Cobbi', 'Coccinea', 'Coccothraustes', 'Coccyzus', 'Cochlearius', 'Cocoi', 'Coelebs', 'Coereba', 'Coerulescens', 'Colaptes', 'Colchicus', 'Colibri', 'Colinus', 'Colius', 'Collaris', 'Collurio', 'Colma', 'Colubris', 'Columba', 'Columbarius', 'Columbiana', 'Columbianus', 'Columbina', 'Concolor', 'Conirostris', 'Connivens', 'Conopophaga', 'Conspicillatus', 'Contopus', 'Conuropsis', 'Convexus', 'Cooperi', 'Cooperii', 'Coprotheres', 'Copsychus', 'Coqui', 'Coracias', 'Coracina', 'Coragyps', 'Coralensis', 'Corax', 'Corniculata', 'Corniculatus', 'Coromandus', 'Coronata', 'Coronatus', 'Corone', 'Coronoides', 'Corrugatus', 'Corvinella', 'Corvus', 'Corythaeola', 'Corythaix', 'Corythaixoides', 'Coscoroba', 'Cosmopsarus', 'Cossypha', 'Costae', 'Costaricensis', 'Coturnicops', 'Coturniculus', 'Coua', 'Cracticus', 'Creagrus', 'Creatophora', 'Creatopus', 'Crecca', 'Crecopsis', 'Crinitis', 'Crissale', 'Crissalis', 'Cristata', 'Cristatella', 'Cristatellus', 'Cristatus', 'Crithagra', 'Croceus', 'Croconotus', 'Crotophaga', 'Cruentatus', 'Cruentus', 'Crumeniferus', 'Cruziana', 'Cryptoxanthus', 'Cucullata', 'Cucullatus', 'Cuneata', 'Cunicularia', 'Cupido', 'Cupreicaudus', 'Currucoides', 'Curucui', 'Curvirostra', 'Curvirostre', 'Cuvieri', 'Cyana', 'Cyanea', 'Cyaneus', 'Cyanirostris', 'Cyanistes', 'Cyanocephala', 'Cyanocephalus', 'Cyanochen', 'Cyanocitta', 'Cyanocorax', 'Cyanoleuca', 'Cyanomelas', 'Cyanopica', 'Cyanoptera', 'Cyanopterus', 'Cyanopus', 'Cyanostictus', 'Cyanotis', 'Cyanus', 'Cyclarhis', 'Cygnoides', 'Cygnus', 'Cynanthus', 'Dacelo', 'Dacnis', 'Dactylatra', 'Daption', 'Darnaudii', 'Daurica', 'Davidi', 'Decaocto', 'Decipiens', 'Deckeni', 'Decoratus', 'Decumanus', 'Deglandi', 'Delawarensis', 'Delicata', 'Delichon', 'Delphinae', 'Demersus', 'Dendragapus', 'Dendrocolaptes', 'Dendrocopos', 'Dendrocygna', 'Dendroperdix', 'Derbianus', 'Desmaresti', 'Diadematus', 'Dickinsoni', 'Dicolorus', 'Dicrurus', 'Difficilis', 'Diffusus', 'Dimorpha', 'Dinemelli', 'Dinemellia', 'Diomedea', 'Discolor', 'Discors', 'Doliatus', 'Dolichonyx', 'Domenicensis', 'Domesticus', 'Dominica', 'Dominicanus', 'Dorsalis', 'Dougallii', 'Dromaius', 'Dromas', 'Drymophila', 'Dryocopus', 'Dryolimnas', 'Dubius', 'Dumetella', 'Dyphlodes', 'Dysithamnus', 'Eburnea', 'Ecaudatus', 'Eclectus', 'Ectopistes', 'Edouardi', 'Egregia', 'Egretta', 'Elaenia', 'Elanoides', 'Elanus', 'Elegans', 'Elseyornis', 'Emberiza', 'Emberizoides', 'Embernagra', 'Eminentissima', 'Emphanum', 'Empidonax', 'Empidornis', 'Enarratus', 'Entomyzon', 'Enucleator', 'Eolophus', 'Eos', 'Ephippiorhynchus', 'Episcopus', 'Epomophora', 'Epops', 'Eremita', 'Eremophila', 'Eremopterix', 'Erithacus', 'Erythrocephalus', 'Erythrogaster', 'Erythrogenys', 'Erythrolophus', 'Erythronotos', 'Erythronotus', 'Erythrophthalma', 'Erythrophthalmus', 'Erythropthalmus', 'Erythrorhyncha', 'Erythrorhynchos', 'Erythrorhynchus', 'Estrilda', 'Eudocimus', 'Eudromia', 'Eudynamys', 'Eudyptes', 'Eudyptula', 'Eugenes', 'Eupetomena', 'Euphagus', 'Euphonia', 'Eupodotis', 'Eurocephalus', 'Europaea', 'Eurynome', 'Eurypyga', 'Excubitor', 'Exilis', 'Eximius', 'Exulans', 'Eytoni', 'Fabalis', 'Falcata', 'Falcinellus', 'Falcipennis', 'Falcklandii', 'Falco', 'Falklandica', 'Falklandicus', 'Familiaris', 'Famosa', 'Fasciata', 'Fasciatus', 'Fasciicauda', 'Fedoa', 'Female', 'Ferox', 'Ferruginea', 'Ferrugineigula', 'Fimbriata', 'Finschi', 'Fischeri', 'Flabelliformis', 'Flammea', 'Flammeus', 'Flava', 'Flaveola', 'Flaveolus', 'Flavescens', 'Flaviceps', 'Flavifrons', 'Flavipes', 'Flavirostra', 'Flavirostris', 'Flaviventris', 'Flavogaster', 'Florida', 'Floridanus', 'Florisuga', 'Fluvicola', 'Forcipata', 'Forficatus', 'Formicarius', 'Formicivora', 'Formicivorus', 'Formosa', 'Forpus', 'Forsteri', 'Fortis', 'Fossii', 'Foudia', 'Francolinus', 'Frantzii', 'Fratercula', 'Fregata', 'Fringilla', 'Frontalis', 'Fulgens', 'Fulica', 'Fulicarius', 'Fuliginosa', 'Fuliginosus', 'Fuligula', 'Fulmarus', 'Fulvigula', 'Fulvus', 'Furcatus', 'Furnarius', 'Fusca', 'Fuscatus', 'Fuscescens', 'Fuscicollis', 'Fuscus', 'Fytchii', 'Gabar', 'Galapagensis', 'Galapagoensis', 'Galbula', 'Galeata', 'Galeatus', 'Galericulata', 'Galerita', 'Galeritus', 'Galgulus', 'Gallicolumba', 'Gallinacea', 'Gallinago', 'Gallinula', 'Gallirallus', 'Gallopavo', 'Gallus', 'Gambeli', 'Gambelii', 'Gambensis', 'Gambieri', 'Garrulax', 'Garrulus', 'Garzetta', 'Gavia', 'Gayi', 'Gelochelidon', 'Genei', 'Gentilis', 'Geococcyx', 'Geopelia', 'Geophaps', 'Georgiana', 'Georgica', 'Geospiza', 'Geothlypis', 'Geotrygon', 'Geranoaetus', 'Geronticus', 'Gibbericeps', 'Giganteus', 'Gigas', 'Gilvus', 'Gindiana', 'Glacialis', 'Glandarius', 'Glareola', 'Glaucescens', 'Glaucidium', 'Glaucopis', 'Glyphorhynchus', 'Gnoma', 'Goiavier', 'Goliath', 'Goura', 'Gracilis', 'Graculina', 'Graculus', 'Grallina', 'Gramineus', 'Grammacus', 'Granatina', 'Grandis', 'Granti', 'Gravis', 'Grayii', 'Graysoni', 'Grisegena', 'Griseiventris', 'Griseocapilla', 'Griseus', 'Grus', 'Gryphus', 'Guarauna', 'Guatemalensis', 'Gubernetes', 'Guinea', 'Guira', 'Guirahuro', 'Gujanensis', 'Gularis', 'Guttata', 'Guttatus', 'Guttera', 'Gutturalis', 'Gygis', 'Gymnogyps', 'Gymnorhina', 'Gymnorhinus', 'Gyps', 'Habroptilus', 'Haemacephala', 'Haematodus', 'Haematonolus', 'Haematopus', 'Haemorrhous', 'Hagedash', 'Halcyon', 'Haliaeetus', 'Haliaetus', 'Haliastur', 'Halli', 'Hammondii', 'Harrisi', 'Hartlaubi', 'Hartlaubii', 'Hasitata', 'Hedydipna', 'Heermanni', 'Helias', 'Hellmayri', 'Hemignathus', 'Hemileucurus', 'Hemiphaga', 'Hemitriccus', 'Henslowii', 'Herbicola', 'Herodias', 'Heteralocha', 'Heterospizias', 'Hiaticula', 'Hieraaetus', 'Hildebrandti', 'Himantopus', 'Hirundineus', 'Hirundo', 'Histrionicus', 'Histurgops', 'Hoactii', 'Hoffmanii', 'Hottentota', 'Hrota', 'Hudsonia', 'Humbloti', 'Humboldti', 'Humeralis', 'Hutchinsii', 'Huttoni', 'Hyacinthinus', 'Hybrida', 'Hydrophasianus', 'Hydroprogne', 'Hydropsalis', 'Hyemalis', 'Hylocharis', 'Hylophila', 'Hylophilus', 'Hymenolaimus', 'Hyperborea', 'Hyperboreus', 'Hyperrhynchus', 'Hypoleuca', 'Hypsipetes', 'Hypugaea', 'Ianthinogaster', 'Ibis', 'Icteria', 'Icterocephala', 'Icterotis', 'Icterus', 'Idae', 'Ignita', 'Iliaca', 'Immer', 'Immutabilis', 'Impennis', 'Importunus', 'Inca', 'Incana', 'Indica', 'Indicus', 'Infuscatus', 'Inornatus', 'Insularis', 'Intermedia', 'Intermedius', 'Interpres', 'Irediparra', 'Irrorata', 'Islandica', 'Ispidina', 'Ixobrychus', 'Ixoreus', 'Jabiru', 'Jacana', 'Jacarina', 'Jacutinga', 'Jamaicensis', 'Jamesi', 'Japonensis', 'Japonica', 'Jardineii', 'Javanicus', 'Jefferyi', 'Jocosus', 'Jubata', 'Jubatus', 'Jugularis', 'Junco', 'Kennicottii', 'Knipolegus', 'Kori', 'Lacernulatus', 'Lactea', 'Lacteus', 'Lagonosticta', 'Lagopus', 'Lalandi', 'Lamelligerus', 'Lampornis', 'Lamprotornis', 'Laniarius', 'Lanius', 'Lapponicus', 'Larosterna', 'Larus', 'Larvata', 'Larvatus', 'Lateralis', 'Laterallus', 'Lathami', 'Latirostris', 'Lawrencei', 'Laysanensis', 'Leachii', 'Leadbeateri', 'Lecontei', 'Leiothrix', 'Leipoa', 'Lentiginosus', 'Leocogaster', 'Leopoldi', 'Lepidocolaptes', 'Leptasthenura', 'Leptodon', 'Leptopogon', 'Leptoptilos', 'Leptotila', 'Lesbia', 'Leucocarbo', 'Leucocephala', 'Leucocephalus', 'Leucochloris', 'Leucogaster', 'Leucogeranus', 'Leucolophus', 'Leucomelas', 'Leuconotus', 'Leucopareia', 'Leucophaeus', 'Leucophrys', 'Leucopodus', 'Leucopsar', 'Leucopsis', 'Leucoptera', 'Leucorodia', 'Leucorrhoa', 'Leucoryphus', 'Leucoscepus', 'Leucotis', 'Leucura', 'Leucurus', 'Leverianus', 'Levipes', 'Lewinii', 'Lewis', 'Lherminieri', 'Libonyana', 'Limicola', 'Limnodromus', 'Limosa', 'Lincolnii', 'Lineata', 'Lineatum', 'Lineatus', 'Lineola', 'Lissotis', 'Litsitsirupa', 'Livens', 'Livia', 'Lobata', 'Lobatus', 'Lomvia', 'Lonchura', 'Longicauda', 'Longicaudus', 'Longirostre', 'Longirostris', 'Lonnbergi', 'Lophaetus', 'Lophodytes', 'Lophonetta', 'Lophophanes', 'Lophornis', 'Lophotes', 'Lophotibis', 'Lophotis', 'Lophotriccus', 'Lophura', 'Loricata', 'Loriculus', 'Lorius', 'Lory', 'Loxia', 'Loxigilla', 'Loyca', 'Luciae', 'Lucidus', 'Ludoviciana', 'Ludovicianus', 'Lugubris', 'Lunulata', 'Luscinia', 'Lutea', 'Luteola', 'Luteovirens', 'Lutescens', 'Macao', 'Maccormicki', 'Macdonaldi', 'Machetornis', 'Mackenziaena', 'Macleayanus', 'Macleayii', 'Macronectes', 'Macronyx', 'Macrorhynchos', 'Macroura', 'Macrourus', 'Macrurus', 'Macularius', 'Maculata', 'Maculatus', 'Maculosa', 'Madagascariensis', 'Magellanica', 'Magellanicus', 'Magna', 'Magnificens', 'Magnificus', 'Magnirostris', 'Magnolia', 'Maguari', 'Mahali', 'Major', 'Malacca', 'Malaconotus', 'Malacoptila', 'Malacorhynchus', 'Male', 'Malura', 'Malurus', 'Malvinarum', 'Manacus', 'Manorina', 'Marginatus', 'Marila', 'Marinus', 'Mariquensis', 'Maritima', 'Maritimus', 'Marmaronetta', 'Martii', 'Martinica', 'Mascarin', 'Mascarinus', 'Massaicus', 'Matricaria', 'Mauri', 'Maurus', 'Maxillosus', 'Maxima', 'Maximus', 'Mayeri', 'Megacephalum', 'Megaceryle', 'Megadyptes', 'Megalaima', 'Megapodius', 'Megarhyncha', 'Megascops', 'Melaenornis', 'Melambrotus', 'Melancholicus', 'Melancoryphus', 'Melanerpes', 'Melanicterus', 'Melanitta', 'Melanocephala', 'Melanocephalus', 'Melanochloros', 'Melanodera', 'Melanodryas', 'Melanogaster', 'Melanoleuca', 'Melanoleucos', 'Melanonota', 'Melanonotus', 'Melanophris', 'Melanops', 'Melanoptera', 'Melanopterus', 'Melanospilus', 'Melanotis', 'Melanotos', 'Melanura', 'Melanurus', 'Melba', 'Meleagris', 'Melierax', 'Meliphaga', 'Mellori', 'Melodia', 'Melodus', 'Melospiza', 'Melozone', 'Membranaceus', 'Mendiculus', 'Menstruus', 'Mentalis', 'Merganser', 'Mergellus', 'Mergus', 'Meridionalis', 'Merops', 'Merula', 'Merulaxis', 'Metabates', 'Metallura', 'Mevesii', 'Mexicana', 'Mexicanum', 'Mexicanus', 'Michahellis', 'Micrathene', 'Micronisus', 'Migrans', 'Migratorius', 'Mikado', 'Miles', 'Miliaria', 'Milvago', 'Milvus', 'Mimus', 'Minimus', 'Minor', 'Minuta', 'Minutilla', 'Mionectes', 'Mirafra', 'Mitrata', 'Mitratus', 'Mitu', 'Mniotilta', 'Modestus', 'Modularis', 'Molitor', 'Mollissima', 'Molothrus', 'Molucca', 'Molybdophanes', 'Momota', 'Momotus', 'Monachus', 'Monasa', 'Monedula', 'Monocerata', 'Montagnii', 'Montanus', 'Monteiri', 'Montezuma', 'Monticola', 'Moquini', 'Moreirae', 'Moreletti', 'Morio', 'Morus', 'Moschata', 'Motacilla', 'Motitensis', 'Mulsant', 'Murina', 'Muscicapa', 'Muscipipra', 'Musophaga', 'Muta', 'Mutata', 'Muticus', 'Myadestes', 'Mycteria', 'Myiarchus', 'Myioborus', 'Myiopagis', 'Myiophobus', 'Myiopsitta', 'Myiornis', 'Myrmeciza', 'Myrmecocichla', 'Nabouroup', 'Naevia', 'Naevius', 'Naevosa', 'Namaqua', 'Nasutus', 'Natalensis', 'Naumanni', 'Nebouxii', 'Nebulosa', 'Necrosyrtes', 'Nectarinia', 'Neglecta', 'Nelicourvi', 'Nemosia', 'Nengeta', 'Neopelma', 'Neoxena', 'Nesoenas', 'Nesomimus', 'Nestor', 'Netta', 'Nettapus', 'Newtoni', 'Niauensis', 'Nicobarica', 'Nictydromus', 'Niger', 'Nigerimus', 'Nigra', 'Nigrescens', 'Nigricans', 'Nigricollis', 'Nigrifrons', 'Nigripennis', 'Nigripes', 'Nigrirostris', 'Nigrogularis', 'Nilotica', 'Ninox', 'Nipalensis', 'Nisaetus', 'Nitens', 'Nitidus', 'Nivalis', 'Nivea', 'Nivosus', 'Nobabilis', 'Nobilis', 'Noctua', 'Notharchus', 'Nothura', 'Novaeguineae', 'Novaehollandiae', 'Novaeseelandiae', 'Noveboracensis', 'Nubicoides', 'Nubicus', 'Nuchalis', 'Nucifraga', 'Numenius', 'Numida', 'Nuttalli', 'Nuttallii', 'Nyctanassa', 'Nyctibius', 'Nycticorax', 'Nyroca', 'Nystalus', 'Oberholseri', 'Obscura', 'Obscurus', 'Obsoletum', 'Obsoletus', 'Occidentalis', 'Occipitalis', 'Oceanicus', 'Oceanites', 'Ocellata', 'Ochrocephala', 'Ochropyga', 'Ocreatus', 'Oculata', 'Ocyphaps', 'Oedicnemus', 'Oena', 'Oenanthe', 'Oenas', 'Oleagineus', 'Olivacea', 'Olivaceus', 'Olor', 'Onocrotalus', 'Onychognathus', 'Onychoprion', 'Onychorhynchus', 'Ophthalmica', 'Oporornis', 'Oratrix', 'Orbitatus', 'Oreophasis', 'Oreophylax', 'Oreortyx', 'Oreoscoptes', 'Oreothlypis', 'Orientalis', 'Oriolus', 'Ornata', 'Ornatus', 'Ortalis', 'Orthogonys', 'Oryzivorus', 'Oscitans', 'Ossifragus', 'Ostralegus', 'Otidiphaps', 'Otus', 'Oustaleti', 'Oxyruncus', 'Oxyura', 'Pachycephala', 'Pachyramphus', 'Pacifica', 'Pacificus', 'Pagodroma', 'Pagophila', 'Palliatus', 'Pallida', 'Pallidicinctus', 'Palmarum', 'Palmerstoni', 'Palpebrata', 'Palumbus', 'Palustris', 'Panamensis', 'Pandion', 'Panurus', 'Papa', 'Papua', 'Parabuteo', 'Paradisaea', 'Paradisea', 'Paradisi', 'Paraguaiae', 'Parasiticus', 'Parasitus', 'Pardalotus', 'Parisorum', 'Parkesia', 'Paroaria', 'Parula', 'Parus', 'Parvirostris', 'Parvulus', 'Passer', 'Passerculus', 'Passerella', 'Passerina', 'Pastinator', 'Patagioenas', 'Patagonicus', 'Paulista', 'Pavo', 'Pavonina', 'Pectoralis', 'Pecuarius', 'Pelagicus', 'Pelecanus', 'Peliperdix', 'Penelope', 'Penicillatus', 'Pennata', 'Pensylvanica', 'Peposaca', 'Peregrinus', 'Periparus', 'Perisoreus', 'Perlatum', 'Personata', 'Personatus', 'Perspicillata', 'Pertinax', 'Peruviana', 'Petechia', 'Petrochelidon', 'Petroica', 'Peucaea', 'Peucedramus', 'Phacellodomus', 'Phaeonotus', 'Phaeopus', 'Phaethon', 'Phaethornis', 'Phainopepla', 'Phalacrocorax', 'Phalaenoptilus', 'Phalaropus', 'Phalcoboenus', 'Phaps', 'Pharomachrus', 'Phasianus', 'Pheucticus', 'Phibalura', 'Philadelphia', 'Philbyi', 'Philemon', 'Philetairus', 'Philippinus', 'Philomachus', 'Philomelos', 'Philppensis', 'Phimosus', 'Phoebastria', 'Phoebe', 'Phoebetria', 'Phoeniceus', 'Phoeniconaias', 'Phoenicoparrus', 'Phoenicoptera', 'Phoenicopterus', 'Phoeniculus', 'Phoenicurus', 'Phrygilus', 'Phylidonyris', 'Phyllomyias', 'Phylloscartes', 'Piaya', 'Pica', 'Picata', 'Picoides', 'Picta', 'Pictus', 'Picumnus', 'Pileata', 'Pileatus', 'Pilherodius', 'Pinguinus', 'Pinicola', 'Pinus', 'Pionites', 'Pionus', 'Pipilo', 'Pipixcan', 'Pipra', 'Pipraeidea', 'Piprites', 'Piranga', 'Pitangus', 'Pithecophaga', 'Pitiayumi', 'Pitta', 'Plagiatus', 'Plancus', 'Platalea', 'Platensis', 'Platycercus', 'Platypterus', 'Platyrhynchos', 'Platyrinchus', 'Platyrostris', 'Plectrophenax', 'Plectropterus', 'Plegadis', 'Plocepasser', 'Ploceus', 'Plumatus', 'Plumbeiceps', 'Pluvialis', 'Podargus', 'Podiceps', 'Podilymbus', 'Poecile', 'Poecilodryas', 'Poecilotriccus', 'Poicephalus', 'Poicilotis', 'Polemaetus', 'Polihierax', 'Poliocephalum', 'Polionotus', 'Poliopterus', 'Polioptila', 'Polyboroides', 'Polychopterus', 'Polyglottos', 'Polyplectron', 'Pomarinus', 'Pompadora', 'Pondicerianus', 'Pooecetes', 'Poospiza', 'Porphyrio', 'Porzana', 'Prasinus', 'Pratincola', 'Preciosa', 'Pretrei', 'Princeps', 'Prinia', 'Prionops', 'Probosciger', 'Progne', 'Prosopeia', 'Protonotaria', 'Prunella', 'Psaltria', 'Psaltriparus', 'Psarocolius', 'Psephotus', 'Pseudastur', 'Pseudoleistes', 'Pseudonigrita', 'Psittacula', 'Psophia', 'Psophocichla', 'Pternistis', 'Pterocles', 'Pterocnemia', 'Pterodroma', 'Pteroglossus', 'Pteronetta', 'Pteroptochos', 'Ptilinopus', 'Ptilocnemis', 'Ptilonorhynchus', 'Ptilopsis', 'Pubescens', 'Puffinus', 'Pugnax', 'Pulchellus', 'Pulsatrix', 'Puna', 'Punctatus', 'Punctulata', 'Purpuratus', 'Purpureus', 'Purpuropterus', 'Pusilla', 'Pusillus', 'Pycnonotus', 'Pygargus', 'Pygmaea', 'Pygoscelis', 'Pyrocephalus', 'Pyroderus', 'Pyrrhocorax', 'Pyrrhonota', 'Pyrrhopterus', 'Pyrrhula', 'Pyrrhura', 'Pytilia', 'Quelea', 'Querquedula', 'Querula', 'Quiscalus', 'Quiscula', 'Radjah', 'Raggiana', 'Ralloides', 'Rallus', 'Ramphastos', 'Ramphocelus', 'Ramphodon', 'Ramphotrigon', 'Rapax', 'Recorded', 'Recurvirostra', 'Redivivum', 'Reevesi', 'Regalis', 'Regia', 'Regius', 'Regulorum', 'Regulus', 'Reichenowi', 'Reinwardt', 'Revoilii', 'Rex', 'Rhea', 'Rhinopomastus', 'Rhinoptilus', 'Rhipidura', 'Rhodopareia', 'Rhodophoneus', 'Rhynchotis', 'Rhynochetos', 'Rhyticeros', 'Richardsonii', 'Ridgwayi', 'Ridibundus', 'Riparia', 'Rissa', 'Rixosa', 'Robusta', 'Rollulus', 'Roratus', 'Roseicapilla', 'Roseicollis', 'Roseus', 'Rossii', 'Rostratula', 'Rothschildi', 'Roulroul', 'Rubecula', 'Ruber', 'Rubescens', 'Rubicola', 'Rubicunda', 'Rubidiceps', 'Rubinus', 'Rubra', 'Rubricapillus', 'Rubricauda', 'Rubricollis', 'Rubripes', 'Rubrogenys', 'Rudis', 'Rueppellii', 'Rufa', 'Rufescens', 'Ruficapilla', 'Ruficapillus', 'Ruficauda', 'Ruficaudus', 'Ruficeps', 'Ruficollis', 'Ruficrista', 'Rufina', 'Rufitorques', 'Rufiventris', 'Rufivirgatus', 'Rufofuscus', 'Rufum', 'Rufus', 'Rupicola', 'Rupicoloides', 'Rupicolus', 'Rupornis', 'Rustica', 'Rusticolus', 'Ruticilla', 'Rynchops', 'Sabota', 'Sacra', 'Sagittarius', 'Sahari', 'Salpinctes', 'Saltator', 'Sandvicensis', 'Sandwichensis', 'Sarcoramphus', 'Sarkidiornis', 'Sasin', 'Satrapa', 'Saturatior', 'Saturninus', 'Saularis', 'Savana', 'Savannarum', 'Saxicola', 'Saya', 'Sayaca', 'Sayornis', 'Scalaris', 'Scandens', 'Scandiacus', 'Scapularis', 'Scheepmakeri', 'Schiffornis', 'Schistisagus', 'Schoeniclus', 'Scirpaceus', 'Sclateri', 'Scolopacea', 'Scolopaceus', 'Scolopax', 'Scopulinus', 'Scopus', 'Scoresbii', 'Scoticus', 'Scripta', 'Scutatus', 'Seiurus', 'Selasphorus', 'Seledon', 'Semifasciata', 'Semipalmata', 'Semipalmatus', 'Semipartitus', 'Semitorquata', 'Semitorquatus', 'Senegalensis', 'Senegallus', 'Senegaloides', 'Senegalus', 'Sephaena', 'Sericornis', 'Sericulus', 'Serinus', 'Serpentarius', 'Serpophaga', 'Serrator', 'Serriana', 'Serripennis', 'Setaria', 'Setophaga', 'Sialia', 'Sialis', 'Sibilatrix', 'Sicalis', 'Similis', 'Sinuatus', 'Sitta', 'Skua', 'Smithsonianus', 'Smyrnensis', 'Socius', 'Solitaria', 'Solitarius', 'Somateria', 'Sordida', 'Sordidulus', 'Souimanga', 'Sparsa', 'Sparverius', 'Speciosa', 'Spectabilis', 'Specularioides', 'Spekei', 'Sphecotheres', 'Spheniscus', 'Sphenurus', 'Sphyrapicus', 'Spilogaster', 'Spinicollis', 'Spinosus', 'Spiza', 'Spizella', 'Spizocorys', 'Splendens', 'Splendidus', 'Sponsa', 'Sporophila', 'Sporopipes', 'Squalidus', 'Squamata', 'Squamifrons', 'Squammata', 'Squamosa', 'Squatarola', 'Stagonopleura', 'Stelgidopteryx', 'Stellaris', 'Stellata', 'Stelleri', 'Stellula', 'Stephani', 'Stephanophorus', 'Stephanoxis', 'Stercorarius', 'Sterna', 'Sternula', 'Stictonetta', 'Stictothorax', 'Stolidus', 'Strenua', 'Strepera', 'Streptopelia', 'Striata', 'Striatus', 'Strigoides', 'Strigops', 'Strix', 'Struthio', 'Struthiunculus', 'Sturnella', 'Sturnus', 'Stygius', 'Stymphalornis', 'Subaureus', 'Subbuteo', 'Subcristata', 'Subflava', 'Subis', 'Subtilis', 'Sula', 'Sulcirostris', 'Sulfuratus', 'Sulphuratus', 'Sulphurescens', 'Sundevalli', 'Superbus', 'Superciliaris', 'Superciliosa', 'Superciliosus', 'Surrucura', 'Suscitator', 'Svecica', 'Swainsoni', 'Swainsonii', 'Sylvestris', 'Sylvia', 'Sylvietta', 'Sylviolus', 'Synallaxis', 'Syriacus', 'Syrigma', 'Syrmaticus', 'Tabida', 'Tabuensis', 'Tachybaptus', 'Tachycineta', 'Tachyeres', 'Tachyphonus', 'Tadorna', 'Tadornoides', 'Taeniatus', 'Tahapisi', 'Tahitiensis', 'Taitensis', 'Talatala', 'Talpacoti', 'Tangara', 'Tapera', 'Tarnii', 'Tauraco', 'Temminckii', 'Tenebricosa', 'Tenebrosa', 'Tenuirostris', 'Terathopius', 'Terpsiphone', 'Tersina', 'Tetrao', 'Thagus', 'Thalassarche', 'Thalasseus', 'Thalassina', 'Thalassornis', 'Thalurania', 'Thamnophilus', 'Theomacha', 'Theristicus', 'Thinornis', 'Thoracica', 'Thraupis', 'Threskiornis', 'Thryomanes', 'Thryothorus', 'Thula', 'Thyroideus', 'Tibicen', 'Tigrisoma', 'Tinamus', 'Tinnunculus', 'Tityra', 'Tockus', 'Toco', 'Todiramphus', 'Todirhamphus', 'Todirostrum', 'Tolmiei', 'Tolmomyias', 'Tomentosum', 'Torda', 'Torgos', 'Torquata', 'Torquatus', 'Totanus', 'Touit', 'Toulou', 'Townsendi', 'Toxostoma', 'Tracheliotus', 'Trachyphonus', 'Tragopan', 'Traillii', 'Treron', 'Trichas', 'Trichoglossus', 'Tricholaema', 'Tricholimnas', 'Trichothraupis', 'Tricollaris', 'Tricolor', 'Tridactyla', 'Trigonoceps', 'Tringa', 'Tristigma', 'Tristigmata', 'Tristis', 'Triurus', 'Trochilidae', 'Troglodytes', 'Trogon', 'Tuberculifer', 'Turdoides', 'Turdus', 'Turnix', 'Turtur', 'Tympanuchus', 'Typus', 'Tyrannulus', 'Tyrannus', 'Tyto', 'Ultramarina', 'Umbellus', 'Umbretta', 'Unappendiculatus', 'Underwoodii', 'Undulata', 'Undulatus', 'Unicinctus', 'Upupa', 'Uraeginthus', 'Uratelornis', 'Urbica', 'Uria', 'Urile', 'Urinator', 'Urocissa', 'Urocolius', 'Urogallus', 'Urophasianus', 'Uropygialis', 'Urubitinga', 'Ustulatus', 'Vaillantii', 'Validus', 'Valisineria', 'Vanellus', 'Varia', 'Variegata', 'Varius', 'Velatus', 'Velox', 'Veneratus', 'Ventralis', 'Vermiculatus', 'Vermivora', 'Verreauxi', 'Verreauxii', 'Versicolor', 'Verticalis', 'Vespertinus', 'Vestiaria', 'Vetula', 'Victor', 'Victoriae', 'Vidua', 'Viduata', 'Villosus', 'Violacea', 'Violaceus', 'Violiceps', 'Virdis', 'Virens', 'Vireo', 'Virescens', 'Virgata', 'Virginianus', 'Virgo', 'Viridigenalis', 'Viridis', 'Vitellinus', 'Vitiensis', 'Vittata', 'Vocifer', 'Vociferans', 'Vociferus', 'Volatinia', 'Vulcani', 'Vulgaris', 'Vultur', 'Vulturinum', 'Wahlbergi', 'Washingtoniensis', 'Whitneyi', 'Wilsonia', 'Wollweberi', 'Woodhouseii', 'Wrightii', 'Wyvilliana', 'Xanthocephalus', 'Xanthopterygius', 'Xanthotis', 'Xolmis', 'Yetapa', 'Yncas', 'Yucatanensis', 'Zenaida', 'Zonarius', 'Zonotrichia', 'Zosterops']; {
    rnd = Math.floor(Math.random() * nm1.length);
    rnd2 = Math.floor(Math.random() * nm1.length);
    names = `${nm1[rnd]} ${nm1[rnd2]}`;
    return names;
  }
}
