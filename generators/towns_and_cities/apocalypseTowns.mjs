export default function apocalypseTowns() {
  let rnd;
  let names;
  const names1 = ['Abandale', 'Ailmoor', 'Ailton', 'Anguith', 'Armagetown',
    'Ashbourne', 'Ashshore', 'Ashtown', 'Atrophy', 'Baneville', 'Bareton',
    'Bartertown', 'Beggar\'s End', 'Bilgewaters', 'Blackridge', 'Blightown',
    'Blightville', 'Blissville', 'Boomtown', 'Borderville', 'Boundington',
    'Breaktown', 'Burnington', 'Burnsley', 'Carnage', 'Carthage', 'Catatonia',
    'Cavity', 'Ceaseton', 'Charcity', 'Charington', 'Cinders',
    'City of Darwin', 'Closure', 'Cloudville', 'Corruptown', 'Crashmere',
    'Crishire', 'Cruelfeld', 'Cruelfield', 'Crumbleton', 'Crumblewall',
    'Curtain Falls', 'Cussington', 'Darkington', 'Dawnbury', 'Dawnford',
    'Deadline', 'Deciville', 'Defacity', 'Defectown', 'Demonarm', 'Demonia',
    'Desolation City', 'Destinus', 'Devils Fork', 'Diaborough', 'Direfall',
    'Direfield', 'Ditchford', 'Doomcaster', 'Doomsbury', 'Doomville',
    'Dreadville', 'Ecstacity', 'Eden', 'Edgetown', 'Elysium', 'Emberville',
    'Emitton', 'Endcliff', 'Endsby', 'Eternity', 'Evermore', 'Everwinter',
    'Expocity', 'Extinctown', 'Extremire', 'Felicity', 'Festerchapel',
    'Festerfield', 'Festerville', 'Final Falls', 'Firebend', 'Foolshope',
    'Forsaken Falls', 'Gloomville', 'Grieford', 'Grieftown', 'Grimburg',
    'Gutterville', 'Guttown', 'Harmony', 'Havoc', 'Hazardine', 'Hells Gate',
    'Hells Point', 'Hope Falls', 'Hope Rises', 'Horriford', 'Illmoor',
    'Isolon', 'Isolone', 'Jericho', 'Karma', 'Kilead', 'Killmoor',
    'Killville', 'Leaveside', 'Lightsville', 'Lost Angeles', 'Malady',
    'Malaise', 'Malicity', 'Malimoor', 'Maraud', 'Mauseleum', 'Men\'s Rest',
    'Mensfield', 'Miraclesfield', 'Misery', 'Moonblight', 'Murkville',
    'Necroshire', 'Nefaria', 'Nemesis', 'Netherville', 'Nirvana',
    'Paradise Falls', 'Pearly Gates', 'Perile', 'Perishton', 'Phantown',
    'Pleasureville', 'Postville', 'Precipire', 'Privacity', 'Project Hope',
    'Promise', 'Purgatory', 'Quellton', 'Quietus', 'Remorse', 'Repocity',
    'Revoltown', 'Rottingham', 'Safari', 'Scramton', 'Scythe', 'Seclusion',
    'Serenity', 'Slumberville', 'Snowmelt', 'Solaris', 'Solitude',
    'Spoilford', 'Surmise', 'Taintborne', 'Taintchapel', 'Taintside',
    'Termina', 'Terminus', 'The Barrens', 'The Blanks', 'The Boons',
    'The Bounds', 'The Confines', 'The Curtains', 'The Dumps', 'The Falls',
    'The Hub', 'The Mopes', 'The Nether', 'The Projects', 'The Prospects',
    'The Shadows', 'The Skids', 'The Verdicts', 'The Void', 'The Wickeds',
    'Tradesburg', 'Transfere', 'Turnville', 'Utopia', 'Vacancy',
    'Victorville', 'Vileville', 'Vilewaters', 'Voidville', 'Wakefield',
    'Wickhills', 'Windgrip', 'Witherbury', 'Withergate', 'Withervale',
    'Woeford', 'Wolfwater', 'Wrathford', 'Wreckville', 'Zion']; {
    rnd = Math.floor(Math.random() * names1.length);
    names = names1[rnd];
    return names;
  }
}