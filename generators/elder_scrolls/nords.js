export default function nords() {
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Abb', 'Abba', 'Ada', 'Adal', 'Add', 'Addi', 'Addv', 'Adr', 'Adri', 'Aen', 'Aena', 'Aev', 'Aeva', 'Aga', 'Agar', 'Agm', 'Agma', 'Agn', 'Agna', 'Agni', 'Aka', 'Akar', 'Al', 'Ald', 'Aldi', 'Alf', 'Alfa', 'Alfb', 'Alfh', 'Alg', 'Algo', 'All', 'Alld', 'Alo', 'Alof', 'Alv', 'Alvo', 'Alvr', 'And', 'Ande', 'Andr', 'Andu', 'Ang', 'Angr', 'Angv', 'Arc', 'Arct', 'Are', 'Area', 'Arg', 'Argi', 'Ark', 'Arkm', 'Arn', 'Arnb', 'Arng', 'Arns', 'Arr', 'Arra', 'Asb', 'Asbj', 'Asg', 'Asge', 'Asl', 'Aslf', 'Ass', 'Assu', 'Ata', 'Atar', 'Aud', 'Audm', 'Ave', 'Aven', 'Avu', 'Avul', 'Bad', 'Badn', 'Bal', 'Balb', 'Bald', 'Balf', 'Balg', 'Bali', 'Balm', 'Bar', 'Bari', 'Bas', 'Basl', 'Bass', 'Bat', 'Bath', 'Bato', 'Bed', 'Bedr', 'Bei', 'Bein', 'Beir', 'Bel', 'Belr', 'Ben', 'Benk', 'Beno', 'Ber', 'Bers', 'Bir', 'Birk', 'Bit', 'Bitt', 'Bj', 'Bja', 'Bjad', 'Bjal', 'Bjo', 'Bjor', 'Bol', 'Bolg', 'Boll', 'Bolu', 'Bor', 'Borg', 'Borm', 'Borr', 'Borv', 'Bot', 'Botr', 'Bott', 'Bra', 'Bran', 'Bre', 'Bref', 'Bri', 'Brie', 'Bril', 'Brir', 'Bro', 'Bron', 'Bru', 'Brun', 'Brur', 'Bry', 'Bryn', 'Bul', 'Bulf', 'Bur', 'Burd', 'Cal', 'Cald', 'Car', 'Cars', 'Chr', 'Chri', 'Cri', 'Cris', 'Dag', 'Dagl', 'Dagu', 'Dat', 'Dath', 'Den', 'Deng', 'Deo', 'Deor', 'Der', 'Dere', 'Dero', 'Dra', 'Drah', 'Dre', 'Dren', 'Dry', 'Dryn', 'Eif', 'Eifi', 'Eim', 'Eima', 'Ein', 'Eina', 'Eit', 'Eita', 'Eld', 'Eldj', 'Eldr', 'Elg', 'Elgr', 'Elm', 'Elmu', 'Emb', 'Embr', 'Eng', 'Enga', 'Enn', 'Ennb', 'Eor', 'Eorl', 'Er', 'Erg', 'Ergn', 'Eri', 'Eric', 'Erik', 'Erl', 'Erle', 'Erli', 'Esb', 'Esbe', 'Faf', 'Fafn', 'Fal', 'Falk', 'Fan', 'Fana', 'Far', 'Fare', 'Fark', 'Fel', 'Fell', 'Fen', 'Fenr', 'Fil', 'Filn', 'Fjo', 'Fjol', 'Fjor', 'Fjot', 'Fjr', 'Fjro', 'For', 'Fors', 'Fra', 'Frak', 'Fral', 'Fri', 'Frik', 'Fro', 'Frod', 'Frof', 'Frok', 'Fror', 'Frot', 'Gal', 'Galm', 'Galt', 'Gar', 'Gard', 'Gart', 'Garu', 'Gau', 'Gaul', 'Gei', 'Geil', 'Geim', 'Geir', 'Gel', 'Gell', 'Ges', 'Gest', 'Gir', 'Girg', 'Gis', 'Gisl', 'Giss', 'Gja', 'Gjak', 'Gjal', 'Gju', 'Gjuk', 'Glo', 'Glot', 'God', 'Godr', 'Gog', 'Gogr', 'Gol', 'Goll', 'Gon', 'Gonn', 'Gor', 'Gorm', 'Gort', 'Gra', 'Gral', 'Grar', 'Gre', 'Greg', 'Gri', 'Grim', 'Gris', 'Grj', 'Grjo', 'Gro', 'Grom', 'Gud', 'Gudl', 'Guk', 'Guki', 'Gun', 'Gund', 'Gunm', 'Gunn', 'Gur', 'Guri', 'Gut', 'Guth', 'Haa', 'Haak', 'Had', 'Hadr', 'Hadv', 'Hae', 'Haen', 'Haes', 'Haf', 'Hafi', 'Hafn', 'Hag', 'Hagr', 'Haj', 'Hajv', 'Hak', 'Haka', 'Hakn', 'Hako', 'Hal', 'Halb', 'Hall', 'Haln', 'Halo', 'Halu', 'Ham', 'Hami', 'Haml', 'Hamv', 'Han', 'Hans', 'Har', 'Hara', 'Harg', 'Hark', 'Harl', 'Harr', 'Hav', 'Havi', 'Hed', 'Hedd', 'Hef', 'Hefa', 'Hei', 'Heid', 'Heif', 'Heim', 'Hein', 'Hel', 'Helv', 'Hem', 'Hemm', 'Hen', 'Henr', 'Her', 'Hera', 'Herd', 'Herm', 'Hern', 'Hew', 'Hewn', 'Hig', 'Higi', 'Hil', 'Hild', 'Hir', 'Hirn', 'His', 'Hisi', 'Hja', 'Hjal', 'Hjar', 'Hjo', 'Hjol', 'Hjor', 'Hjr', 'Hjro', 'Hla', 'Hlar', 'Hlo', 'Hlof', 'Hlog', 'Hlor', 'Hoa', 'Hoag', 'Hod', 'Hodl', 'Hof', 'Hofg', 'Hog', 'Hogn', 'Hok', 'Hoki', 'Hol', 'Holg', 'Holm', 'Hon', 'Honm', 'Hont', 'Hor', 'Horg', 'Hori', 'Hork', 'Horm', 'Hors', 'Hos', 'Hosg', 'Hra', 'Hrar', 'Hre', 'Hrei', 'Hri', 'Hrid', 'Hris', 'Hro', 'Hroa', 'Hrod', 'Hrog', 'Hroi', 'Hrol', 'Hron', 'Hror', 'Hrot', 'Hru', 'Hrun', 'Hul', 'Hulg', 'Hun', 'Hunr', 'Hur', 'Hurg', 'Hurn', 'Huro', 'Hyl', 'Hylf', 'Idl', 'Idla', 'Ido', 'Idol', 'Igm', 'Igmu', 'Ing', 'Ingj', 'Ingm', 'Irl', 'Irlo', 'Irn', 'Irns', 'Irr', 'Irro', 'Ist', 'Ista', 'Istl', 'Ita', 'Itar', 'Ive', 'Iver', 'Jal', 'Jalm', 'Jay', 'Jayr', 'Jee', 'Jeek', 'Jen', 'Jens', 'Jer', 'Jerv', 'Jes', 'Jesp', 'Jod', 'Jof', 'Jofn', 'Joft', 'Jol', 'Jolf', 'Jolg', 'Joll', 'Jon', 'Jond', 'Jor', 'Jorc', 'Jorg', 'Jori', 'Jorl', 'Jorn', 'Joru', 'Jur', 'Jurg', 'Jyr', 'Jyri', 'Kai', 'Kal', 'Kalt', 'Kar', 'Karl', 'Kars', 'Kel', 'Keld', 'Kib', 'Kibe', 'Kj', 'Kja', 'Kjar', 'Kje', 'Kjel', 'Kjo', 'Kjor', 'Kle', 'Klep', 'Kli', 'Klim', 'Klu', 'Kluw', 'Knj', 'Knja', 'Knu', 'Knud', 'Knur', 'Kod', 'Kodl', 'Kodr', 'Kol', 'Koli', 'Kor', 'Kori', 'Kors', 'Kot', 'Kott', 'Kra', 'Kral', 'Kun', 'Kunt', 'Kus', 'Kust', 'Kuv', 'Kuva', 'Kve', 'Kven', 'Kyr', 'Kyrn', 'Lar', 'Lars', 'Lart', 'Las', 'Lass', 'Lei', 'Leif', 'Leig', 'Lem', 'Lemk', 'Len', 'Lenn', 'Lle', 'Llew', 'Loa', 'Loat', 'Lod', 'Lodi', 'Lodv', 'Log', 'Logr', 'Logv', 'Lok', 'Lokh', 'Loki', 'Lon', 'Lond', 'Lor', 'Lore', 'Lork', 'Loro', 'Lort', 'Lun', 'Lund', 'Lyg', 'Lygr', 'Lyn', 'Lync', 'Lyno', 'Mae', 'Maer', 'Maj', 'Majn', 'Mal', 'Malt', 'Man', 'Manh', 'Mant', 'Manw', 'Mar', 'Mark', 'Mat', 'Math', 'Mau', 'Maul', 'Mek', 'Meks', 'Men', 'Mend', 'Menr', 'Mer', 'Merk', 'Met', 'Meti', 'Mik', 'Mika', 'Mikr', 'Mir', 'Mira', 'Mog', 'Moge', 'Moj', 'Mol', 'Molg', 'Mra', 'Mral', 'Mry', 'Mryf', 'Msi', 'Msir', 'Nar', 'Narf', 'Ned', 'Nedd', 'Nel', 'Nelk', 'Nels', 'New', 'Newh', 'Nie', 'Niel', 'Nil', 'Nils', 'Nod', 'Nodu', 'Nor', 'Norr', 'Nys', 'Nyst', 'Oda', 'Odar', 'Odf', 'Odfe', 'Odm', 'Odmi', 'Oen', 'Oeng', 'Ogm', 'Ogmu', 'Ola', 'Olaf', 'Olav', 'Olf', 'Olfa', 'Olfr', 'Oll', 'Ollr', 'Olm', 'Olmg', 'Ong', 'Onga', 'Onm', 'Onmi', 'Onmu', 'Org', 'Orgn', 'Orm', 'Ormv', 'Ort', 'Orth', 'Orti', 'Osl', 'Osla', 'Pac', 'Pact', 'Pel', 'Pelf', 'Rad', 'Radd', 'Rae', 'Raer', 'Raf', 'Rafl', 'Rag', 'Ragn', 'Rak', 'Rako', 'Ral', 'Ralo', 'Ram', 'Ramt', 'Ran', 'Ranm', 'Rar', 'Rarg', 'Reg', 'Regn', 'Rei', 'Rein', 'Reis', 'Rev', 'Reve', 'Rho', 'Rhor', 'Rig', 'Rige', 'Rigm', 'Ris', 'Riss', 'Roe', 'Roet', 'Rog', 'Roge', 'Rogg', 'Rol', 'Rolf', 'Rolg', 'Roli', 'Ror', 'Rori', 'Rorl', 'Run', 'Rund', 'Rus', 'Rust', 'Sab', 'Sabj', 'Sae', 'Saer', 'Saet', 'Sar', 'Sarn', 'Sat', 'Satt', 'Sav', 'Sava', 'Sib', 'Sibb', 'Sid', 'Sidd', 'Sif', 'Sifk', 'Sifn', 'Sig', 'Siga', 'Sigd', 'Sigu', 'Sigv', 'Sil', 'Sild', 'Sin', 'Sind', 'Sinm', 'Sir', 'Sirg', 'Sirk', 'Sit', 'Sitt', 'Sja', 'Sjar', 'Sjo', 'Sjor', 'Ska', 'Skag', 'Skal', 'Skar', 'Ske', 'Skeg', 'Skj', 'Skjo', 'Sko', 'Skor', 'Sku', 'Skul', 'Sla', 'Slaf', 'Sna', 'Snad', 'Snar', 'Sne', 'Sned', 'Sni', 'Snil', 'Sno', 'Snor', 'Sog', 'Sogr', 'Sol', 'Sola', 'Sold', 'Sor', 'Sork', 'Sorr', 'Sta', 'Stal', 'Star', 'Ste', 'Stei', 'Sten', 'Sti', 'Stig', 'Sto', 'Stor', 'Str', 'Stro', 'Sty', 'Styr', 'Sul', 'Sulv', 'Sva', 'Svak', 'Sve', 'Sven', 'Svo', 'Svog', 'Swy', 'Swyk', 'Tal', 'Tals', 'Ter', 'Terr', 'Tha', 'Thad', 'Thae', 'Thal', 'Thar', 'Thi', 'Thia', 'Thj', 'Thjo', 'Tho', 'Thon', 'Thor', 'Thr', 'Thro', 'Thru', 'Thry', 'Thu', 'Thur', 'Tol', 'Tola', 'Tolf', 'Tolg', 'Tor', 'Tora', 'Torb', 'Toro', 'Tors', 'Torv', 'Tory', 'Tov', 'Tove', 'Tri', 'Tril', 'Tsu', 'Tsun', 'Tul', 'Tulv', 'Tym', 'Tymv', 'Tys', 'Tysn', 'Uch', 'Uche', 'Ulf', 'Ulfa', 'Ulfb', 'Ulfg', 'Ulfr', 'Ulr', 'Und', 'Undv', 'Unm', 'Unmi', 'Urf', 'Urfi', 'Url', 'Urla', 'Val', 'Vald', 'Valg', 'Valu', 'Van', 'Vani', 'Vek', 'Veke', 'Vel', 'Velf', 'Ver', 'Vern', 'Vid', 'Vidg', 'Vidi', 'Vidk', 'Vidr', 'Vig', 'Vigg', 'Vign', 'Vil', 'Vilk', 'Vilo', 'Vip', 'Vipi', 'Vir', 'Virg', 'Virk', 'Vol', 'Volk', 'Von', 'Vong', 'Vor', 'Vors', 'Vra', 'Vrag', 'Vul', 'Vulw', 'Vun', 'Vund', 'Wil', 'Wilh', 'Wilm', 'Wra', 'Wrat', 'Wul', 'Wulf', 'Wuu', 'Wuun', 'Ylg', 'Ylga', 'Yng', 'Yngl', 'Yngn', 'Yngo', 'Yngv', 'Yrs', 'Yrsa', 'Ysg', 'Ysgr', 'Ysm', 'Ysmi', 'Yus', 'Yust'];
  const nm2 = ['a', 'aak', 'aar', 'ach', 'ad', 'admir', 'ae', 'ael', 'aer', 'af', 'aflod', 'ak', 'akr', 'al', 'ald', 'aldr', 'alf', 'allod', 'ami', 'amor', 'an', 'and', 'ar', 'arald', 'ard', 'arel', 'arinn', 'arn', 'arr', 'arth', 'as', 'atar', 'atr', 'aug', 'aul', 'avar', 'bal', 'bald', 'barn', 'berth', 'bi', 'bjof', 'bjorn', 'brand', 'brir', 'bus', 'ch', 'ck', 'ct', 'dall', 'dan', 'dar', 'dbrir', 'del', 'demar', 'der', 'dgeir', 'dheim', 'di', 'dic', 'dimar', 'ding', 'dir', 'dis', 'dlar', 'dmir', 'dmund', 'dnar', 'dor', 'dr', 'drir', 'dulf', 'dur', 'e', 'ed', 'edil', 'ehl', 'eif', 'eim', 'eir', 'ek', 'el', 'eld', 'elf', 'elheim', 'ell', 'ellyn', 'elm', 'emar', 'en', 'endr', 'engar', 'enor', 'ens', 'enz', 'er', 'erd', 'ern', 'ers', 'erth', 'es', 'eskr', 'far', 'fdir', 'ferth', 'ff', 'fgar', 'fi', 'fing', 'fknir', 'fmare', 'fnir', 'fred', 'frek', 'fring', 'fur', 'fwiil', 'fyg', 'gal', 'gan', 'gar', 'garel', 'garth', 'gas', 'ge', 'geir', 'gelf', 'gen', 'ger', 'gerd', 'gg', 'ggar', 'ggi', 'ggr', 'gheid', 'gi', 'gny', 'gor', 'gr', 'grim', 'grir', 'grod', 'grom', 'gruuf', 'gul', 'gun', 'gunn', 'guri', 'gvar', 'gvild', 'gvir', 'gvor', 'h', 'har', 'hardt', 'hedil', 'heim', 'helm', 'hff', 'hies', 'hild', 'hjar', 'hjolf', 'hl', 'hman', 'hmar', 'hmund', 'hor', 'horgh', 'hrum', 'i', 'iand', 'ianus', 'iarco', 'ic', 'id', 'ies', 'ig', 'ik', 'il', 'ild', 'ilius', 'ilstein', 'im', 'imar', 'imir', 'imk', 'imund', 'in', 'ing', 'inn', 'ir', 'irod', 'irrid', 'is', 'ismod', 'ister', 'it', 'jaldr', 'jar', 'jof', 'jolf', 'jolfr', 'jorg', 'jorn', 'kar', 'kas', 'ke', 'ki', 'kil', 'kir', 'kjorg', 'kmar', 'kmir', 'kmund', 'knir', 'knolf', 'kon', 'kr', 'kum', 'kun', 'kur', 'kus', 'kvar', 'kvild', 'kvir', 'kyllian', 'laf', 'lak', 'lam', 'lar', 'laug', 'ld', 'ldan', 'ldar', 'ldir', 'ldr', 'ldur', 'leid', 'leif', 'len', 'lf', 'lfar', 'lfdir', 'lfi', 'li', 'lin', 'ling', 'lir', 'lismod', 'lius', 'lki', 'll', 'lling', 'llod', 'lmer', 'lmir', 'lnach', 'lnar', 'lod', 'lof', 'lring', 'ls', 'lstein', 'lti', 'lund', 'lvald', 'lvar', 'lvaror', 'man', 'mar', 'mare', 'mdall', 'mek', 'mer', 'meskr', 'mgar', 'mi', 'ming', 'mir', 'mk', 'mm', 'mmek', 'moor', 'mor', 'mskr', 'mund', 'muth', 'mvar', 'nach', 'nal', 'nar', 'navar', 'nd', 'ndar', 'ndi', 'ndir', 'ndr', 'ne', 'nel', 'neld', 'nen', 'ner', 'nferth', 'nfid', 'nfing', 'ng', 'ngar', 'ngheid', 'ngr', 'ngrim', 'ngvor', 'nhardt', 'nhild', 'ni', 'nil', 'ning', 'nir', 'njar', 'njolf', 'njolfr', 'nl', 'nlen', 'nnen', 'nnir', 'nolf', 'nolfr', 'non', 'nr', 'nrich', 'nrod', 'ns', 'nskar', 'ntus', 'nunn', 'nvar', 'nwulf', 'ny', 'nz', 'oct', 'od', 'of', 'oit', 'oke', 'oknolf', 'okvar', 'ol', 'old', 'oldr', 'olf', 'ollod', 'om', 'omgar', 'on', 'ondir', 'oor', 'or', 'orgh', 'ormr', 'orn', 'oslod', 'ot', 'otgaror', 'ou', 'per', 'ppr', 'pr', 'ra', 'rad', 'rae', 'raflod', 'rald', 'rallod', 'ramor', 'rand', 'rbald', 'rbjorn', 'rd', 'rdan', 'red', 'reid', 'rek', 'relheim', 'renor', 'rfyg', 'rgal', 'rgar', 'rgeir', 'rguri', 'ri', 'ric', 'rich', 'rid', 'rig', 'rik', 'rim', 'ring', 'rinn', 'rir', 'rkmar', 'rknir', 'rlaf', 'rlak', 'rlam', 'rleid', 'rlund', 'rm', 'rmar', 'rmir', 'rmoor', 'rmund', 'rn', 'rnfid', 'rnolfr', 'rnskar', 'ro', 'rod', 'rolf', 'rom', 'roor', 'rormr', 'rr', 'rreid', 'rri', 'rrid', 'rrod', 'rs', 'rsten', 'rth', 'rul', 'rum', 'runn', 'ruuf', 'rvar', 'ry', 'rygg', 'ryr', 'se', 'sen', 'sgar', 'si', 'sianus', 'sim', 'sing', 'skar', 'skr', 'slod', 'smar', 'snr', 'ss', 'ssen', 'sskar', 'st', 'staag', 'stag', 'star', 'stein', 'sten', 'ster', 'str', 'stus', 'sur', 'svar', 'taag', 'tag', 'tar', 'te', 'ten', 'tgaror', 'th', 'thar', 'theim', 'thjar', 'thjolf', 'thmund', 'thor', 'ti', 'tiarco', 'tir', 'tleif', 'tneld', 'tr', 'treid', 'tring', 'trom', 'tur', 'tus', 'u', 'ud', 'uk', 'ul', 'ulf', 'um', 'un', 'und', 'undr', 'unn', 'ur', 'urd', 'urs', 'us', 'uth', 'vaar', 'vald', 'var', 'vard', 'varor', 'varr', 'vatr', 'vaul', 'veld', 'vid', 'vild', 'vir', 'vur', 'we', 'wellyn', 'wiil', 'wulf', 'ygg', 'yllian', 'ynn', 'yr', 'ald', 'an', 'ar', 'arik', 'arke', 'arne', 'eld', 'en', 'ens', 'er', 'ik', 'is', 'orn'];
  const nm3 = ['sen', 'ssen', 'son', 'sson'];
  const nm4 = ['Abe', 'Abel', 'Adi', 'Adis', 'Aeg', 'Aegi', 'Ael', 'Aela', 'Aer', 'Aeri', 'Aet', 'Aeta', 'Aga', 'Agat', 'Agn', 'Agna', 'Agne', 'Agni', 'Ald', 'Aldi', 'Ale', 'Alea', 'Alf', 'Alfh', 'Alg', 'Alga', 'Alv', 'Alva', 'Alvi', 'Ang', 'Angi', 'Ani', 'Anis', 'Anj', 'Anja', 'Ann', 'Anne', 'Ans', 'Ansk', 'Arg', 'Argi', 'Ari', 'Ast', 'Asta', 'Astr', 'Aum', 'Aums', 'Bar', 'Barr', 'Bei', 'Beit', 'Ber', 'Bera', 'Berg', 'Bet', 'Betr', 'Bir', 'Birn', 'Bja', 'Bjar', 'Bod', 'Bodi', 'Bol', 'Bolf', 'Bot', 'Boti', 'Bra', 'Bras', 'Bre', 'Brey', 'Bri', 'Brin', 'Brit', 'Bry', 'Bryl', 'Buj', 'Bujo', 'Dag', 'Dagn', 'Dan', 'Dani', 'Dor', 'Dort', 'Dri', 'Drif', 'Edi', 'Edit', 'Edl', 'Edla', 'Eig', 'Eigm', 'Eir', 'Eiri', 'Eiru', 'Eis', 'Eisa', 'Ekk', 'Ekkh', 'Eld', 'Elda', 'Eli', 'Elis', 'Els', 'Else', 'Emf', 'Emfr', 'Erd', 'Erdi', 'Eri', 'Eris', 'Ern', 'Erna', 'Eve', 'Evet', 'Eyd', 'Eydi', 'Eyj', 'Eyja', 'Fai', 'Faid', 'Fan', 'Fana', 'Fas', 'Fast', 'Fin', 'Finn', 'Fjo', 'Fjol', 'Fjor', 'Fjot', 'Fra', 'Frab', 'Fral', 'Fre', 'Frea', 'Fred', 'Frei', 'Frey', 'Fri', 'Frid', 'Fril', 'Fro', 'Froa', 'Frod', 'Fru', 'Fruk', 'Fry', 'Fryf', 'Frys', 'Fur', 'Fura', 'Ger', 'Gerd', 'Gis', 'Gisl', 'Gor', 'Gorm', 'Gre', 'Grei', 'Grel', 'Grer', 'Gret', 'Grey', 'Gro', 'Gros', 'Gwe', 'Gwen', 'Hae', 'Hael', 'Haem', 'Haf', 'Hafj', 'Ham', 'Hama', 'Har', 'Hara', 'Hed', 'Hedd', 'Hef', 'Hefi', 'Hel', 'Hela', 'Helg', 'Her', 'Herk', 'Herm', 'Hert', 'Hes', 'Hest', 'Hid', 'Hida', 'Hil', 'Hild', 'Hill', 'Hilu', 'Hjo', 'Hjol', 'Hjor', 'Hjot', 'Hod', 'Hodd', 'Hol', 'Holm', 'Hor', 'Hors', 'Hre', 'Href', 'Hrei', 'Hro', 'Hroa', 'Hrok', 'Hror', 'Huk', 'Huki', 'Hul', 'Huld', 'Hyr', 'Hyri', 'Idd', 'Iddr', 'Ign', 'Igna', 'Ilf', 'Ilfh', 'Ill', 'Illd', 'Ims', 'Imsi', 'Ing', 'Inge', 'Ingj', 'Ingo', 'Ingr', 'Ingu', 'Ion', 'Iona', 'Irg', 'Irgn', 'Isg', 'Isge', 'Jal', 'Jala', 'Jen', 'Jens', 'Jof', 'Jofr', 'Jol', 'Jold', 'Jor', 'Jora', 'Jord', 'Kar', 'Kat', 'Katl', 'Katr', 'Kil', 'Kili', 'Kir', 'Kirs', 'Kjo', 'Kjol', 'Kol', 'Kolf', 'Lai', 'Lail', 'Lam', 'Lami', 'Lie', 'Lies', 'Lil', 'Lill', 'Lis', 'Lisa', 'Lisb', 'Lyd', 'Lydi', 'Lyn', 'Lynl', 'Mab', 'Mabj', 'Mac', 'Maca', 'Mack', 'Mae', 'Maev', 'Mal', 'Male', 'Mar', 'Mare', 'Marg', 'Mat', 'Matl', 'Mav', 'Mave', 'Mer', 'Mere', 'Mert', 'Met', 'Mett', 'Min', 'Mine', 'Mjo', 'Mjol', 'Mor', 'Morw', 'Nar', 'Narr', 'Net', 'Nett', 'Nil', 'Nils', 'Nja', 'Njad', 'Nur', 'Nura', 'Nurn', 'Odd', 'Oddn', 'Ola', 'Olav', 'Old', 'Olda', 'Olf', 'Olfe', 'Olfi', 'Ond', 'Ondi', 'Ori', 'Orie', 'Orl', 'Orla', 'Pet', 'Petr', 'Rak', 'Rake', 'Ran', 'Rang', 'Rey', 'Reyd', 'Rig', 'Rige', 'Rigm', 'Rik', 'Rikk', 'Rin', 'Ring', 'Ris', 'Risi', 'Ron', 'Rona', 'Ros', 'Rost', 'Ruk', 'Ruki', 'Run', 'Runa', 'Sap', 'Sapp', 'Ser', 'Sera', 'Sig', 'Sign', 'Sigr', 'Sil', 'Sild', 'Sir', 'Siri', 'Sis', 'Siss', 'Skj', 'Skjo', 'Sof', 'Sofi', 'Son', 'Soni', 'Sonj', 'Sor', 'Sorl', 'Sot', 'Sott', 'Sus', 'Susa', 'Sva', 'Svan', 'Svar', 'Sve', 'Sven', 'Swa', 'Swan', 'Syl', 'Sylg', 'Tek', 'Tekl', 'Tem', 'Temb', 'Tha', 'Thae', 'Thal', 'Thr', 'Thre', 'Thu', 'Thun', 'Til', 'Tild', 'Tilm', 'Tor', 'Torm', 'Tov', 'Tova', 'Ulf', 'Ulfr', 'Ulr', 'Ulri', 'Una', 'Urs', 'Ursi', 'Uth', 'Uthg', 'Val', 'Vale', 'Vib', 'Vibe', 'Vig', 'Vigd', 'Vor', 'Vori', 'Ygf', 'Ygfa', 'Yrs', 'Yrsa', 'Yso', 'Ysol'];
  const nm5 = ['a', 'aa', 'aarn', 'al', 'alla', 'an', 'ana', 'anna', 'ar', 'ara', 'ard', 'ari', 'arte', 'ba', 'bbi', 'bet', 'bi', 'ca', 'da', 'de', 'di', 'dil', 'ding', 'dis', 'dir', 'do', 'dolyn', 'dreid', 'drika', 'dur', 'dvild', 'e', 'eigr', 'eke', 'eki', 'ekke', 'el', 'ela', 'ella', 'en', 'ena', 'ene', 'erd', 'erica', 'eror', 'estris', 'et', 'ete', 'ette', 'evi', 'fa', 'finna', 'fna', 'fnhild', 'frida', 'frodi', 'ga', 'garte', 'geira', 'gela', 'gerd', 'geth', 'gi', 'gird', 'gja', 'gljot', 'greir', 'gret', 'gritte', 'gvild', 'he', 'hi', 'hild', 'hilde', 'hire', 'hvir', 'i', 'ia', 'ica', 'id', 'ida', 'ide', 'idil', 'ie', 'if', 'igr', 'ika', 'il', 'ild', 'ilde', 'ilief', 'in', 'ina', 'ine', 'ing', 'inna', 'ior', 'ir', 'ird', 'irek', 'is', 'ith', 'ja', 'jaarn', 'jard', 'je', 'jorg', 'ka', 'ke', 'ki', 'kja', 'kke', 'kning', 'la', 'laith', 'lara', 'ld', 'lda', 'lestris', 'levi', 'lfrodi', 'lga', 'lgeth', 'li', 'lia', 'lief', 'ling', 'lith', 'ljot', 'lka', 'll', 'lla', 'lod', 'logi', 'lone', 'lver', 'ly', 'ma', 'mgeira', 'mir', 'mlaith', 'mor', 'mund', 'na', 'nd', 'ndolyn', 'ne', 'ng', 'nhild', 'nhilde', 'nhvir', 'nir', 'nja', 'nmund', 'nna', 'ny', 'o', 'od', 'okning', 'old', 'one', 'or', 'org', 'orta', 'phire', 'ra', 'rdis', 'red', 'reid', 'reir', 'rek', 'ret', 'ri', 'ria', 'rica', 'rid', 'rida', 'rika', 'rine', 'rior', 'ritte', 'ror', 'rta', 'rtur', 'run', 'sa', 'se', 'sel', 'si', 'sif', 'sine', 'ski', 'sl', 'sla', 'ssa', 'sta', 'steir', 'sten', 'ta', 'te', 'teir', 'ten', 'th', 'the', 'tild', 'tilde', 'tla', 'tlogi', 'tra', 'tred', 'tta', 'tte', 'tur', 'uki', 'un', 'und', 'ur', 'va', 'ver', 'vild', 'wen', 'y', 'ya', 'ydis', 'yf'];
  const nm6 = ['sdottir', 'dottir'];
  const nm7 = ['Anvil', 'Arrow', 'Autumn', 'Axe', 'Banner', 'Bear', 'Bellow', 'Black', 'Blue', 'Boar', 'Bog', 'Bold', 'Boulder', 'Brandy', 'Brittle', 'Broken', 'Bronze', 'Cabbage', 'Cairn', 'Cloud', 'Copper', 'Corundum', 'Crag', 'Crossed', 'Dark', 'Dead', 'Death', 'Deep', 'Doom', 'Double', 'Dragon', 'Drunk', 'Drunken', 'Dwarf', 'Early', 'Ebon', 'Elf', 'Ember', 'Fair', 'Far', 'Fiery', 'Fine', 'Fire', 'Flame', 'Flat', 'Fog', 'Fork', 'Free', 'Frozen', 'Geode', 'Ghost', 'God', 'Gold', 'Golden', 'Gray', 'Green', 'Grey', 'Hairy', 'Hammer', 'Hand', 'Hard', 'Head', 'Heart', 'Hearth', 'Hoarse', 'Home', 'Honey', 'Horse', 'Ice', 'Iron', 'Knot', 'Law', 'Little', 'Lonely', 'Long', 'Lute', 'Maiden', 'Milk', 'Nail', 'Night', 'Oaken', 'Oath', 'Once', 'Orc', 'Poor', 'Pure', 'Raven', 'Red', 'Rich', 'Rock', 'Round', 'Sable', 'Salt', 'Salty', 'Scar', 'Secret', 'Seven', 'Shade', 'Shadow', 'Shallow', 'Short', 'Silver', 'Smiling', 'Snow', 'Soul', 'Spring', 'Star', 'Steel', 'Stone', 'Storm', 'Stout', 'Strong', 'Summer', 'Sun', 'Swift', 'Thrice', 'Triple', 'Troll', 'Twice', 'Two', 'War', 'Wave', 'Wet', 'Whetted', 'White', 'Wide', 'Wild', 'Wind', 'Wine', 'Winter', 'Wolf', 'Worm'];
  const nm8 = ['-Anvil', '-Arm', '-Back', '-Bandit', '-Bane', '-Bear', '-Beard', '-Bearer', '-Blade', '-Blood', '-Brand', '-Breaker', '-Breeks', '-Champion', '-Child', '-Chucker', '-Cloak', '-Colossus', '-Crusher', '-Daggers', '-Dawn', '-Defender', '-Drinker', '-Drums', '-Eater', '-Eye', '-Eyes', '-Face', '-Fang', '-Feet', '-Finger', '-Fingers', '-Fire', '-Fist', '-Foot', '-Free', '-Fur', '-Gale', '-Giver', '-Gobler', '-Gut', '-Hair', '-Hammers', '-Hand', '-Hater', '-Head', '-Healer', '-Heart', '-Helm', '-Hewer', '-Hilt', '-Honored', '-Hull', '-Hunter', '-Jumper', '-Killed', '-Killer', '-Knee', '-Leg', '-Legs', '-Liar', '-Light', '-Loom', '-Lute', '-Maiden', '-Master', '-Mouth', '-Mug', '-Nail', '-Nose', '-Outlaw', '-Pierced', '-Plank', '-Pommel', '-Raed', '-Robber', '-Runner', '-Sage', '-Sailer', '-Sayer', '-Seeker', '-Shaper', '-Shield', '-Shifter', '-Shoal', '-Singer', '-Skeever', '-Skinner', '-Smasher', '-Smith', '-Song', '-Sot', '-Spear', '-Spring', '-Stone', '-Strider', '-Sung', '-Sword', '-Swords', '-Tamer', '-Thief', '-Toe', '-Toes', '-Tongue', '-Tooth', '-Torn', '-Trotter', '-Veins', '-Versed', '-Victim', '-Voice', '-Wand', '-Wave', '-Wife', '-Winter', '-Wish', '-Wrecker', '-Scourge', '-Rival', '-Torment', '-Seer', '-Mage', '-Guard'];
  const nm9 = ['Bearclaw', 'Blackthorn', 'Bloodmouth', 'Braggart', 'Broken', 'Builder', 'Bulwark', 'Burly', 'Buxom', 'Colossus', 'Cook', 'Craven', 'Crow', 'Curse-Bringer', 'Dreamer', 'Easterner', 'Ebonhand', 'Elfkiller', 'Farseer', 'Flayer', 'Fleetfoot', 'Greycloak', 'Haggard', 'Halfhand', 'Harrier', 'Helmbolg', 'Highlander', 'Hollowleg', 'Ironhand', 'Ironkettle', 'Laggard', 'Lioness', 'Long', 'Maulhand', 'Merkiller', 'Nightingale', 'Northerner', 'Outcast', 'Outlaw', 'Peacock', 'Ravencrone', 'Roarer', 'Rockbreaker', 'Singer', 'Six Fingers', 'Slayer', 'Smith', 'Starkad', 'Stone', 'Stonearm', 'Stormcloak', 'Stout', 'Strong', 'Sword-Maiden', 'Tallowhand', 'Thrallmaster', 'Trollsbane', 'Walker', 'Wanderer', 'Warlock', 'White', 'Whitemane', 'Windcaller', 'Windrime', 'Woodcutter', 'Wulfharth', 'of Stuhn', 'of the Isles', 'of the Piercing Eyes', 'of the River', 'the Bearclaw', 'the Blackthorn', 'the Blind', 'the Bloodmouth', 'the Bloody', 'the Bold', 'the Braggart', 'the Broken', 'the Builder', 'the Bulwark', 'the Burly', 'the Buxom', 'the Calm', 'the Candle', 'the Cautious', 'the Clerk', 'the Colossus', 'the Contemptible', 'the Cook', 'the Craven', 'the Crow', 'the Curse-Bringer', 'the Deaf', 'the Dreamer', 'the Easterner', 'the Ebonhand', 'the Elfkiller', 'the Fair', 'the Farseer', 'the Fat', 'the Fearless', 'the Fearsome', 'the Feeble', 'the Flayer', 'the Fleet', 'the Frenzied', 'the Gentle', 'the Giant', 'the Gifted', 'the Greater', 'the Greycloak', 'the Haggard', 'the Halfhand', 'the Halt', 'the Harrier', 'the Heavy', 'the Helmbolg', 'the Highlander', 'the Hollowleg', 'the Huntress', 'the Innocent', 'the Intrepid', 'the Ironhand', 'the Ironkettle', 'the Kind', 'the Knife', 'the Laggard', 'the Large', 'the Lean', 'the Lioness', 'the Long', 'the Long-Sighted', 'the Man', 'the Maulhand', 'the Merkiller', 'the Mumbling', 'the Naughty', 'the Nightingale', 'the Northerner', 'the Nose', 'the Old', 'the Outcast', 'the Outlaw', 'the Peacock', 'the Pickled', 'the Portly', 'the Quiet', 'the Rascal', 'the Raven', 'the Ravencrone', 'the Roarer', 'the Rockbreaker', 'the Rotted', 'the Scribe', 'the Seal', 'the Singer', 'the Slayer', 'the Smiler', 'the Smith', 'the Steady', 'the Stone', 'the Stonearm', 'the Stormcloak', 'the Stout', 'the Strange', 'the Strong', 'the Sufficient', 'the Sweltering', 'the Sword-Maiden', 'the Tall', 'the Tallowhand', 'the Thrallmaster', 'the Tiny', 'the Tongue', 'the Trollsbane', 'the Ugly', 'the Unbroken', 'the Unending', 'the Unfaithful', 'the Unliving', 'the Unlucky', 'the Unmentioned', 'the Unminded', 'the Unrestful', 'the Unseen', 'the Unwavering', 'the Unworthy', 'the Walker', 'the Wanderer', 'the Warlock', 'the White', 'the Whitemane', 'the Wicked', 'the Wide', 'the Wild', 'the Willful', 'the Windcaller', 'the Windrime', 'the Withdrawn', 'the Woodcutter', 'the World-Weary', 'the Worm', 'the Yellow', 'the Younger'];
  const nm10 = ['Ahl', 'Al', 'Alf', 'Alr', 'Arg', 'As', 'Asg', 'Bj', 'Bjo', 'Dj', 'Ehr', 'Engm', 'Enr', 'Er', 'Fanr', 'Fenar', 'Fenr', 'Fj', 'Gj', 'Hahr', 'Har', 'Her', 'Ingm', 'Ingr', 'Jarg', 'Jorg', 'Jurg', 'Kj', 'Mj', 'Mjor', 'Moj', 'Sar', 'Sohr', 'Sor', 'Tarb', 'Torb', 'Torv', 'Ulfr', 'Ulr'];
  const nm11 = ['aeld', 'aen', 'ahr', 'ahrik', 'ald', 'alde', 'alder', 'an', 'ander', 'aner', 'ans', 'ar', 'arde', 'arik', 'arike', 'arke', 'arme', 'arn', 'arne', 'arok', 'ehr', 'eld', 'en', 'enr', 'ens', 'ensve', 'er', 'ervon', 'ifk', 'ik', 'ikver', 'is', 'isor', 'isver', 'orin', 'orke', 'orn', 'orne'];


  i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm4.length);
      rnd2 = Math.floor(Math.random() * nm5.length);
      if (i < 4) {
        rnd7 = Math.floor(Math.random() * nm7.length);
        rnd8 = Math.floor(Math.random() * nm8.length);
        names = `${nm4[rnd] + nm5[rnd2]} ${nm7[rnd7]}${nm8[rnd8]}`;
      } else if (i < 7) {
        rnd7 = Math.floor(Math.random() * nm9.length);
        names = `${nm4[rnd] + nm5[rnd2]} ${nm9[rnd7]}`;
      } else {
        rnd7 = Math.floor(Math.random() * nm10.length);
        rnd8 = Math.floor(Math.random() * nm11.length);
        rnd6 = Math.floor(Math.random() * nm6.length);
        names = `${nm4[rnd] + nm5[rnd2]} ${nm10[rnd7]}${nm11[rnd8]}${nm6[rnd6]}`;
      }
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      if (i < 4) {
        rnd7 = Math.floor(Math.random() * nm7.length);
        rnd8 = Math.floor(Math.random() * nm8.length);
        names = `${nm1[rnd] + nm2[rnd2]} ${nm7[rnd7]}${nm8[rnd8]}`;
      } else if (i < 7) {
        rnd7 = Math.floor(Math.random() * nm9.length);
        names = `${nm1[rnd] + nm2[rnd2]} ${nm9[rnd7]}`;
      } else {
        rnd7 = Math.floor(Math.random() * nm10.length);
        rnd8 = Math.floor(Math.random() * nm11.length);
        rnd6 = Math.floor(Math.random() * nm3.length);
        names = `${nm1[rnd] + nm2[rnd2]} ${nm10[rnd7]}${nm11[rnd8]}${nm3[rnd6]}`;
      }
    }
    return names;
  }
}
