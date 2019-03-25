export default function spriggans() {
  let names;
  let rnd0;
  let rnd1;
  let rnd2;
  let rnd3;
  const names1 = ['Abe', 'Abel', 'Adi', 'Adis', 'Aeg', 'Aegi', 'Ael', 'Aela', 'Aer', 'Aeri', 'Aet', 'Aeta', 'Aga', 'Agat', 'Agn', 'Agna', 'Agne', 'Agni', 'Ald', 'Aldi', 'Ale', 'Alea', 'Alf', 'Alfh', 'Alg', 'Alga', 'Alv', 'Alva', 'Alvi', 'Ang', 'Angi', 'Ani', 'Anis', 'Anj', 'Anja', 'Ann', 'Anne', 'Ans', 'Ansk', 'Arg', 'Argi', 'Ari', 'Ast', 'Asta', 'Astr', 'Aum', 'Aums', 'Bar', 'Barr', 'Bei', 'Beit', 'Ber', 'Bera', 'Berg', 'Bet', 'Betr', 'Bir', 'Birn', 'Bja', 'Bjar', 'Bod', 'Bodi', 'Bol', 'Bolf', 'Bot', 'Boti', 'Bra', 'Bras', 'Bre', 'Brey', 'Bri', 'Brin', 'Brit', 'Bry', 'Bryl', 'Buj', 'Bujo', 'Dag', 'Dagn', 'Dan', 'Dani', 'Dor', 'Dort', 'Dri', 'Drif', 'Edi', 'Edit', 'Edl', 'Edla', 'Eig', 'Eigm', 'Eir', 'Eiri', 'Eiru', 'Eis', 'Eisa', 'Ekk', 'Ekkh', 'Eld', 'Elda', 'Eli', 'Elis', 'Els', 'Else', 'Emf', 'Emfr', 'Erd', 'Erdi', 'Eri', 'Eris', 'Ern', 'Erna', 'Eve', 'Evet', 'Eyd', 'Eydi', 'Eyj', 'Eyja', 'Fai', 'Faid', 'Fan', 'Fana', 'Fas', 'Fast', 'Fin', 'Finn', 'Fjo', 'Fjol', 'Fjor', 'Fjot', 'Fra', 'Frab', 'Fral', 'Fre', 'Frea', 'Fred', 'Frei', 'Frey', 'Fri', 'Frid', 'Fril', 'Fro', 'Froa', 'Frod', 'Fru', 'Fruk', 'Fry', 'Fryf', 'Frys', 'Fur', 'Fura', 'Ger', 'Gerd', 'Gis', 'Gisl', 'Gor', 'Gorm', 'Gre', 'Grei', 'Grel', 'Grer', 'Gret', 'Grey', 'Gro', 'Gros', 'Gwe', 'Gwen', 'Hae', 'Hael', 'Haem', 'Haf', 'Hafj', 'Ham', 'Hama', 'Har', 'Hara', 'Hed', 'Hedd', 'Hef', 'Hefi', 'Hel', 'Hela', 'Helg', 'Her', 'Herk', 'Herm', 'Hert', 'Hes', 'Hest', 'Hid', 'Hida', 'Hil', 'Hild', 'Hill', 'Hilu', 'Hjo', 'Hjol', 'Hjor', 'Hjot', 'Hod', 'Hodd', 'Hol', 'Holm', 'Hor', 'Hors', 'Hre', 'Href', 'Hrei', 'Hro', 'Hroa', 'Hrok', 'Hror', 'Huk', 'Huki', 'Hul', 'Huld', 'Hyr', 'Hyri', 'Idd', 'Iddr', 'Ign', 'Igna', 'Ilf', 'Ilfh', 'Ill', 'Illd', 'Ims', 'Imsi', 'Ing', 'Inge', 'Ingj', 'Ingo', 'Ingr', 'Ingu', 'Ion', 'Iona', 'Irg', 'Irgn', 'Isg', 'Isge', 'Jal', 'Jala', 'Jen', 'Jens', 'Jof', 'Jofr', 'Jol', 'Jold', 'Jor', 'Jora', 'Jord', 'Kar', 'Kat', 'Katl', 'Katr', 'Kil', 'Kili', 'Kir', 'Kirs', 'Kjo', 'Kjol', 'Kol', 'Kolf', 'Lai', 'Lail', 'Lam', 'Lami', 'Lie', 'Lies', 'Lil', 'Lill', 'Lis', 'Lisa', 'Lisb', 'Lyd', 'Lydi', 'Lyn', 'Lynl', 'Mab', 'Mabj', 'Mac', 'Maca', 'Mack', 'Mae', 'Maev', 'Mal', 'Male', 'Mar', 'Mare', 'Marg', 'Mat', 'Matl', 'Mav', 'Mave', 'Mer', 'Mere', 'Mert', 'Met', 'Mett', 'Min', 'Mine', 'Mjo', 'Mjol', 'Mor', 'Morw', 'Nar', 'Narr', 'Net', 'Nett', 'Nil', 'Nils', 'Nja', 'Njad', 'Nur', 'Nura', 'Nurn', 'Odd', 'Oddn', 'Ola', 'Olav', 'Old', 'Olda', 'Olf', 'Olfe', 'Olfi', 'Ond', 'Ondi', 'Ori', 'Orie', 'Orl', 'Orla', 'Pet', 'Petr', 'Rak', 'Rake', 'Ran', 'Rang', 'Rey', 'Reyd', 'Rig', 'Rige', 'Rigm', 'Rik', 'Rikk', 'Rin', 'Ring', 'Ris', 'Risi', 'Ron', 'Rona', 'Ros', 'Rost', 'Ruk', 'Ruki', 'Run', 'Runa', 'Sap', 'Sapp', 'Ser', 'Sera', 'Sig', 'Sign', 'Sigr', 'Sil', 'Sild', 'Sir', 'Siri', 'Sis', 'Siss', 'Skj', 'Skjo', 'Sof', 'Sofi', 'Son', 'Soni', 'Sonj', 'Sor', 'Sorl', 'Sot', 'Sott', 'Sus', 'Susa', 'Sva', 'Svan', 'Svar', 'Sve', 'Sven', 'Swa', 'Swan', 'Syl', 'Sylg', 'Tek', 'Tekl', 'Tem', 'Temb', 'Tha', 'Thae', 'Thal', 'Thr', 'Thre', 'Thu', 'Thun', 'Til', 'Tild', 'Tilm', 'Tor', 'Torm', 'Tov', 'Tova', 'Ulf', 'Ulfr', 'Ulr', 'Ulri', 'Una', 'Urs', 'Ursi', 'Uth', 'Uthg', 'Val', 'Vale', 'Vib', 'Vibe', 'Vig', 'Vigd', 'Vor', 'Vori', 'Ygf', 'Ygfa', 'Yrs', 'Yrsa', 'Yso', 'Ysol'];
  const names2 = ['a', 'aa', 'aarn', 'al', 'alla', 'an', 'ana', 'anna', 'ar', 'ara', 'ard', 'ari', 'arte', 'ba', 'bbi', 'bet', 'bi', 'ca', 'da', 'de', 'di', 'dil', 'ding', 'dis', 'do', 'dolyn', 'dreid', 'drika', 'dur', 'dvild', 'e', 'eigr', 'eke', 'eki', 'ekke', 'el', 'ela', 'ella', 'en', 'ena', 'ene', 'erd', 'erica', 'eror', 'estris', 'et', 'ete', 'ette', 'evi', 'fa', 'finna', 'fna', 'fnhild', 'frida', 'frodi', 'ga', 'garte', 'geira', 'gela', 'gerd', 'geth', 'gi', 'gird', 'gja', 'gljot', 'greir', 'gret', 'gritte', 'gvild', 'he', 'hi', 'hild', 'hilde', 'hire', 'hvir', 'i', 'ia', 'ica', 'id', 'ida', 'ide', 'idil', 'ie', 'if', 'igr', 'ika', 'il', 'ild', 'ilde', 'ilief', 'in', 'ina', 'ine', 'ing', 'inna', 'ior', 'ir', 'ird', 'irek', 'is', 'ith', 'ja', 'jaarn', 'jard', 'je', 'jorg', 'ka', 'ke', 'ki', 'kja', 'kke', 'kning', 'la', 'laith', 'lara', 'ld', 'lda', 'lestris', 'levi', 'lfrodi', 'lga', 'lgeth', 'li', 'lia', 'lief', 'ling', 'lith', 'ljot', 'lka', 'll', 'lla', 'lod', 'logi', 'lone', 'lver', 'ly', 'ma', 'mgeira', 'mir', 'mlaith', 'mor', 'mund', 'na', 'nd', 'ndolyn', 'ne', 'ng', 'nhild', 'nhilde', 'nhvir', 'nir', 'nja', 'nmund', 'nna', 'ny', 'o', 'od', 'okning', 'old', 'one', 'or', 'org', 'orta', 'phire', 'ra', 'rdis', 'red', 'reid', 'reir', 'rek', 'ret', 'ri', 'ria', 'rica', 'rid', 'rida', 'rika', 'rine', 'rior', 'ritte', 'ror', 'rta', 'rtur', 'run', 'sa', 'se', 'sel', 'si', 'sif', 'sine', 'ski', 'sl', 'sla', 'ssa', 'sta', 'steir', 'sten', 'ta', 'te', 'teir', 'ten', 'th', 'the', 'tild', 'tilde', 'tla', 'tlogi', 'tra', 'tred', 'tta', 'tte', 'tur', 'uki', 'un', 'und', 'ur', 'va', 'ver', 'vild', 'wen', 'y', 'ya', 'ydis', 'yf'];
  const names3 = ['Air', 'Amber', 'Ash', 'Aspen', 'Autumn', 'Bark', 'Birch', 'Bitter', 'Black', 'Blind', 'Blue', 'Brance', 'Briar', 'Bright', 'Cedar', 'Cherry', 'Cloud', 'Cold', 'Crystal', 'Cypress', 'Daisy', 'Dark', 'Dawn', 'Day', 'Drift', 'Dusk', 'Elm', 'Evening', 'Fern', 'Fierce', 'Fig', 'Fire', 'Frost', 'Frosty', 'Frozen', 'Garnet', 'Gloom', 'Grassy', 'Gray', 'Green', 'Hazel', 'Holly', 'Holy', 'Honey', 'Island', 'Isle', 'Leaf', 'Light', 'Lightning', 'Lily', 'Lotus', 'Lumber', 'Magic', 'Maple', 'Mire', 'Mist', 'Moon', 'Morning', 'Moss', 'Mossy', 'Mountain', 'Muddy', 'Never', 'Night', 'Nymph', 'Oak', 'Oaken', 'Petal', 'Pine', 'Poison', 'Quick', 'Quiet', 'Rain', 'River', 'Root', 'Rose', 'Shimmer', 'Silent', 'Silver', 'Single', 'Spirit', 'Spring', 'Star', 'Sun', 'Swift', 'Tangle', 'Thunder', 'Timber', 'Tree', 'Vine', 'Water', 'White', 'Wild', 'Willow', 'Winter', 'Wisp', 'Wonder', 'Wood'];
  const names4 = ['bite', 'blood', 'bloom', 'blossom', 'branch', 'breath', 'breeze', 'briar', 'bush', 'claw', 'clove', 'clover', 'crown', 'curl', 'dance', 'dash', 'dew', 'drop', 'dust', 'fang', 'fist', 'flame', 'flash', 'flesh', 'flower', 'fog', 'foot', 'forest', 'fruit', 'gazer', 'glade', 'grace', 'grass', 'grove', 'gust', 'heart', 'herb', 'hollow', 'ivy', 'lash', 'leaf', 'light', 'lily', 'maul', 'meadow', 'mire', 'mist', 'moon', 'muse', 'newt', 'oak', 'petal', 'ripper', 'ripple', 'root', 'rose', 'sage', 'shadow', 'shard', 'shine', 'song', 'spell', 'spirit', 'spray', 'sprite', 'sprout', 'star', 'stem', 'storm', 'strider', 'swirl', 'thistle', 'thorn', 'tree', 'twig', 'twist', 'vine', 'wax', 'web', 'whirl', 'whisper', 'willow', 'wind', 'wish', 'wood', 'woods'];
  {
    rnd0 = Math.floor(Math.random() * names1.length);
    rnd1 = Math.floor(Math.random() * names2.length);
    rnd2 = Math.floor(Math.random() * names3.length);
    rnd3 = Math.floor(Math.random() * names4.length);
    names = `${names1[rnd0] + names2[rnd1]} ${names3[rnd2]}${names4[rnd3]}`;
    return names;
  }
}
