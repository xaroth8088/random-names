export default function spells() {
  const nm1 = ['Aug', 'Corrupt', 'Deflect', 'Dupl', 'Ech', 'Ejec', 'Erec', 'Evic', 'Evict', 'Exp', 'Exting', 'Ignit', 'Ill', 'Imb', 'Imm', 'Incant', 'Incent', 'Incept', 'Invoc', 'Lag', 'Magn', 'Mend', 'Morph', 'Muffl', 'Oblit', 'Obsc', 'Pest', 'Petrif', 'Port', 'Purif', 'Rect', 'Refl', 'Reflect', 'Sanc', 'Sanct', 'Scorch', 'Slug', 'Supr', 'Tranq', 'Trans', 'Alte', 'Alter', 'Apear', 'Aper', 'Ara', 'Augmen', 'Clar', 'Clari', 'Confus', 'Conju', 'Conjur', 'Cor', 'Corrup', 'Cur', 'Decim', 'Defen', 'Deler', 'Depres', 'Depri', 'Descen', 'Divi', 'Ethe', 'Ether', 'Evi', 'Expel', 'Expul', 'Exte', 'Extermi', 'Extermin', 'Exti', 'Fier', 'Fir', 'Flar', 'Fluo', 'Igni', 'Illumi', 'Immol', 'Immun', 'Imped', 'Impedim', 'Imper', 'Incen', 'Incre', 'Increm', 'Incren', 'Inter', 'Iso', 'Isol', 'Lev', 'Levi', 'Levita', 'Libe', 'Liber', 'Loco', 'Locomo', 'Lum', 'Lumi', 'Magni', 'Mobi', 'Mobil', 'Mor', 'Muf', 'Mystif', 'Neur', 'Neural', 'Ob', 'Obli', 'Obliter', 'Pes', 'Pesti', 'Pet', 'Petri', 'Por', 'Porta', 'Pro', 'Prot', 'Puri', 'Quen', 'Re', 'Red', 'Redu', 'Rege', 'Regen', 'Rejuvi', 'Rel', 'Releas', 'Reno', 'Rep', 'Repa', 'Repe', 'Repel', 'Restor', 'Revi', 'Sco', 'Scor', 'Ser', 'Sever', 'Shri', 'Sil', 'Silen', 'Slu', 'Stu', 'Stup', 'Supres', 'Tra', 'Tranqi', 'Venge'];
  const nm2 = ['a', 'actum', 'actus', 'arbus', 'armus', 'aro', 'ashio', 'asi', 'asis', 'aris', 'ate', 'ecto', 'ectum', 'ectus', 'ego', 'egra', 'egris', 'elio', 'ello', 'em', 'empra', 'endio', 'endius', 'endo', 'enim', 'enis', 'enta', 'entus', 'enum', 'enus', 'eo', 'eom', 'eos', 'eous', 'erbus', 'ergio', 'erio', 'eris', 'erous', 'es', 'esco', 'eseo', 'etus', 'eum', 'eus', 'i', 'iate', 'iatis', 'iato', 'ictum', 'ictus', 'icum', 'icus', 'id', 'igeo', 'im', 'indo', 'inio', 'inius', 'io', 'ior', 'is', 'iseo', 'ite', 'iteus', 'itus', 'ium', 'ius', 'orgio', 'ori', 'orpus', 'ortia', 'ortis', 'ortus', 'orus', 'otis', 'otum', 'ucio', 'ucto', 'ula', 'ulsi', 'ulsis', 'ulso', 'ulus', 'um', 'undis', 'undo', 'uno', 'uro', 'us'];
  const nm3 = ['Anim', 'Anno', 'Arach', 'Arachn', 'Arachni', 'Av', 'Avi', 'Ban', 'Bull', 'Can', 'Cand', 'Candel', 'Cani', 'Canin', 'Consi', 'Consil', 'Contag', 'Dem', 'Demo', 'Demon', 'Drac', 'Drag', 'Elem', 'Elemen', 'Element', 'Fel', 'Feli', 'Felin', 'Foc', 'Focu', 'Infec', 'Infect', 'Intim', 'Intimi', 'Intimid', 'Ligh', 'Light', 'Noct', 'Oppon', 'Oppres', 'Padl', 'Padloc', 'Perso', 'Person', 'Pest', 'Rasc', 'Rat', 'Serp', 'Serpen', 'Stri', 'Strix', 'Torch', 'Torm', 'Tormen', 'Tyr', 'Tyran', 'Vesper', 'Vex', 'Vexat', 'Vir', 'Viral', 'Ache', 'Ago', 'Agon', 'Miser'];
  const nm4 = ['Alatar', 'Ariane', 'Babidi', 'Balthazar', 'Circe', 'Crispin', 'Dumbledore', 'Else', 'Gandalf', 'Howell J.', 'Jadis', 'Jafar', 'Joseph C.', 'Maediv', 'Manannan', 'Merlin', 'Mordack', 'Morgan Le Fay', 'Morrigan', 'Neloth', 'P. Halliwell', 'Pallando', 'Radagast', 'Saruman', 'Shazam', 'Solcius', 'Tim the Enchanter', 'W. Witch', 'Willow', 'Zatanna'];
  const nm5 = ['Causes a target to forget the events of the past few hours permanently or temporarily', 'Allows a living target to pass through objects for a period of time. Doesn\'t allow passing of magical barriers', 'Allows a living target to understand and speak a specific language for a period of time', 'Allows a living target to withstand extreme cold', 'Allows a living target to withstand extreme heat', 'Allows the caster the see the area around a previously marked spot or object', 'Allows the caster the walk on walls and ceilings for a period of time', 'Allows the caster to appear in or otherwise affect a dream of a sleeping target', 'Allows the caster to communicate with another living target for a period of time', 'Allows the caster to read minds for period of time', 'Allows the caster to see undead creatures otherwise invisible to most people', 'Allows the caster to sift through memories of whoever is targeted', 'Allows the target to read minds for a period of time', 'Allows whoever is targeted to breath underwater', 'Allows whoever is targeted to move at greater speed', 'Animates whichever object is targeted', 'Banishes whoever or whatever is targeted to a different dimension', 'Breaks whatever is targeted, if used on life targets it\'ll cause bodily harm', 'Causes a living target to feel jealousy for a period of time', 'Causes a living target to only be able to tell the truth', 'Causes a living target to panic for a period of time', 'Causes a living target to view the caster in a positive way', 'Causes a living target to vomit', 'Causes living targets to appear as an infant version of themselves for a period of time', 'Causes nearby flora to grow faster for as long as the spell is cast', 'Causes the caster to appear dead for a period of time', 'Causes the caster to grow in size', 'Causes the caster to shrink in size', 'Causes the caster to teleport to a chosen location', 'Causes the caster to teleport to a random location', 'Causes the eyes of a living target to cloud up so the world is viewed as if it\'s heavily fogged', 'Causes the living target to be attracted towards a second target for a period of time', 'Causes the living target to feel drowsy, as if the target is drunk', 'Causes the target to be paralyzed wherever it\'s hit', 'Causes the target to be teleported to a chosen location', 'Causes the target to be teleported to a random location', 'Causes time to stop for a short period', 'Causes whatever is targeted to become concealed, including ink on paper', 'Causes whatever is targeted to levitate', 'Causes whatever or whoever is targeted to become ghost-like', 'Causes whatever type of locking mechanism is targeted to lock, including ropes meant to tie something shut', 'Causes whichever creature is targeted to obey the caster\'s command', 'Causes whichever lock, knot or other type of locking mechanism to unlock', 'Causes whoever is targeted to appear dead for a period of time', 'Causes whoever is targeted to be able to fly', 'Causes whoever is targeted to be blind for a period of time', 'Causes whoever is targeted to be deaf for a period of time', 'Causes whoever is targeted to be mute for a period of time', 'Causes whoever is targeted to become covered in fake sores', 'Causes whoever is targeted to become invisible for a period of time', 'Causes whoever is targeted to become overwhelmed by itchy feelings', 'Causes whoever is targeted to become paranoid for a period of time', 'Causes whoever is targeted to breath fire', 'Causes whoever is targeted to drop whatever they\'re holding', 'Causes whoever is targeted to enter a state of confusion for a period of time', 'Causes whoever is targeted to hallucinate for a period of time', 'Causes whoever is targeted to laugh uncontrollably for a period of time', 'Causes whoever is targeted to writhe in pain for as long as that person is targeted', 'Causes whoever is targeted to be able to levitate', 'Causes whoever or whatever is targeted to float upside down for as long as it remains targeted', 'Causes whoever or whatever is targeted to increase in size', 'Causes whoever or whatever is targeted to shrink in size', 'Causes whoever or whatever is targeted to stick to whatever or whoever else is targeted', 'Changes the voice of a living target to that of a secondary target', 'Conjures a botanic familiar', 'Conjures a floating light that travels with the caster for a period of time', 'Conjures a magical familiar', 'Conjures a magical rope that will wrap itself around the target', 'Conjures a storm around the position of the caster', 'Conjures a thick fog that acts as a smoke screen', 'Conjures an elemental familiar', 'Conjures food with energy equal to whatever was used to cast the spell', 'Cools down the area around the caster, effectively freezing most areas', 'Creates a barrier of demonic energy', 'Creates a barrier of electric energy', 'Creates a barrier of fiery energy', 'Creates a barrier of frosty energy', 'Creates a barrier of shadowy energy', 'Creates a bolt of demonic energy', 'Creates a bolt of electric energy', 'Creates a bolt of fiery energy', 'Creates a bolt of frosty energy', 'Creates a bolt of shadowy energy', 'Creates a bubble in which time is stopped for a short period', 'Creates a chosen weather effect around the caster', 'Creates a copy of whatever or whoever is targeted made out of whichever material was used to cast the spell, including food', 'Creates a demonic portal to a different dimension', 'Creates a demonic summoning portal', 'Creates a floating scroll and quill that\'ll write down everything the caster or target says for a period of time', 'Creates a magical barrier that blocks all below or above a certain age', 'Creates a magical barrier that blocks all magical beings and those affected by a magical effect', 'Creates a magical barrier that blocks all sound from entering and escaping', 'Creates a magical barrier that blocks all with dark intentions or dark influences over them', 'Creates a magical barrier that changes the appearance of anything that happens inside to those looking inwards from outside the barrier', 'Creates a magical barrier that prevents magical ways of spying', 'Creates a magical barrier that prevents teleportation and other magically enhanced forms of travel', 'Creates a magical barrier that will alarm the caster of all living creatures that pass it', 'Creates a magical clone that sleeps when the original is awake and wakes up when the original falls asleep', 'Creates a magical copy of the caster', 'Creates a magical copy of whatever is targeted', 'Creates a magical copy of whomever is targeted', 'Creates a magical duplicate of whatever is targeted. Magical duplicates can be dispelled', 'Creates a magical eye that allows the caster to see anywhere the eye travels', 'Creates a magical floating weapon that\'ll protect the caster for a period of time', 'Creates a magical fog that harms all that breath it in', 'Creates a magical object that\'ll hold part of the caster\'s energy', 'Creates a magical trail marking where somebody walked', 'Creates a portal to a different dimension', 'Creates a portal to a different location', 'Creates a pressure trap of demonic energy', 'Creates a pressure trap of electric energy', 'Creates a pressure trap of fiery energy', 'Creates a pressure trap of frosty energy', 'Creates a pressure trap of shadowy energy', 'Creates a rain of demonic energy', 'Creates a rain of electric energy', 'Creates a rain of fiery energy', 'Creates a rain of frosty energy', 'Creates a rain of shadowy energy', 'Creates a shockwave of demonic energy from the caster', 'Creates a shockwave of electric energy from the caster', 'Creates a shockwave of fiery energy from the caster', 'Creates a shockwave of frosty energy from the caster', 'Creates a shockwave of shadowy energy from the caster', 'Creates a skin-like barrier of demonic energy', 'Creates a skin-like barrier of electric energy', 'Creates a skin-like barrier of fiery energy', 'Creates a skin-like barrier of frosty energy', 'Creates a skin-like barrier of shadowy energy', 'Creates a spellblocking barrier', 'Creates a weapon of demonic energy', 'Creates a weapon of electric energy', 'Creates a weapon of fiery energy', 'Creates a weapon of frosty energy', 'Creates a weapon of shadowy energy', 'Creates claws of demonic energy', 'Creates claws of electric energy', 'Creates claws of fiery energy', 'Creates claws of frosty energy', 'Creates claws of shadowy energy', 'Creates several bolts of demonic energy', 'Creates several bolts of electric energy', 'Creates several bolts of fiery energy', 'Creates several bolts of frosty energy', 'Creates several bolts of shadowy energy', 'Decreases the weight of whatever or whoever is targeted', 'Delivers a message as a whisper to a living target', 'Destroys whatever and whoever is targeted', 'Destroys whichever object is targeted', 'Dispels magical effects active on the caster', 'Dispels magical effects active on the target', 'Dispels magical effects in the area', 'Drains energy of whoever or whatever is targeted', 'Drains the life of whoever is targeted', 'Extinguishes fires in proportion to how much magical energy is put into this spell', 'Fills whichever container is targeted with water', 'Heals minor injuries of whoever is targeted, including unseen injuries', 'Heats up the area around the caster, effectively melting and/or scorching most areas', 'Increases the focus of whoever is targeted for a short period of time', 'Increases the mental capabilities of whoever is targeted for a short period of time', 'Increases the weight of whatever or whoever is targeted', 'Locks a magical portal so none can pass through it', 'Locks a magical portal so only those marked with another magic spell can pass through it', 'Makes magical auras visible to the caster for a period of time', 'Marks all objects and beings under the influence of magic', 'Marks an item that will cause it to emit all sorts of magical nuisances when picked up by others', 'Mends whatever is broken, including broken bones', 'Pacifies the mind of whoever is targeted', 'Purifies whoever is targeted of magical impurities', 'Puts whoever is targeted into a meditative state of mind', 'Puts whoever is targeted into a sleep-like state for a period of time', 'Puts whoever is targeted into a trance-like sleep for a period of time', 'Renders a living target unconscious as if the target was knocked out', 'Renders whoever is targeted immobile for a period of time', 'Restores the health of the caster', 'Restores the health of whoever is targeted', 'Resurrects something or somebody from the dead', 'Reveals all beings and objects made invisible by magic', 'Scrambles text so only those marked with a specific spell can read it', 'Scrambles the thoughts of whoever is targeted', 'Siphons any liquid substances out of a targeted container', 'Slows the speed of whoever is targeted', 'Strengthens magical barriers in the area, including those the caster may be unaware of', 'Summon a magical familiar', 'Summons a magical guardian spirit', 'Summons a magical mount fit for the caster', 'Summons an elemental familiar', 'Summons an object that has previously been marked with this same spell', 'Summons botanic familiars', 'Suppresses pain in whoever is targeted', 'Swaps the souls of the caster and whoever is targeted for a period of time', 'Teleports a marked object and whoever holds it to the caster', 'Teleports the caster to whichever location was previously marked with this same spell', 'Transforms the caster into a demonic being for a period of time', 'Transforms the caster into a magical being for a period of time', 'Transforms the caster into a shadowy figure for a period of time', 'Transforms the target into a different person', 'Transforms the target into an animal', 'Transforms the target into an object', 'Turns glass into mirrors and vice versa', 'Turns ground to quicksand wherever the spell is targeted, but only if the ground allows it', 'Unleashes a blinding light for a short period of time', 'Unleashes a deafening sound for a short period of time', 'Wipes the memory of whoever is targeted'];
  const nm6 = ['A bright', 'A clear', 'A cluttered', 'A complex', 'A constant', 'A dark', 'A dim', 'A flat', 'A fluid', 'A gentle', 'A jagged', 'A jumbled', 'A light', 'A mellow', 'A mixed', 'A modest', 'A plain', 'A pure', 'A rough', 'A rounded', 'A simple', 'A smooth', 'A spiky', 'A stable', 'A straight', 'A strong', 'A tangled', 'A thick', 'A thin', 'A transparent', 'A uniform', 'A vibrant', 'A violent', 'A wild', 'A wobbly', 'An impure', 'An interwoven', 'An intricate', 'An irregular', 'An unstable'];
  const nm7 = ['amber', 'azure', 'blue', 'blue-green', 'bronze', 'brown', 'burgundy', 'cerulean', 'cobalt', 'copper', 'crimson', 'emerald', 'golden', 'green', 'indigo', 'ivory', 'jade', 'lilac', 'magenta', 'maroon', 'multi-colored', 'orange', 'pink', 'purple', 'red', 'rose', 'ruby', 'sanguine', 'scarlet', 'silver', 'teal', 'vermilion', 'violet', 'white', 'yellow'];
  const nm8 = ['beam', 'blast of particles', 'blast of small waves', 'blast of waves', 'blaze of fragments', 'blaze of particles', 'blaze of sparks', 'coil', 'coil of particles', 'coil of waves', 'corkscrew of particles', 'flash', 'flash of particles', 'flash of sparks', 'glowing beam', 'glowing corkscrew', 'glowing fragment cluster', 'glowing particle cluster', 'glowing ray', 'glowing shaft', 'glowing sparks', 'glowing spike', 'glowing wave', 'intertwining duo of coils', 'intertwining duo of rays', 'intertwining duo of ripples', 'intertwining duo of streams', 'intertwining duo of twirls', 'intertwining duo of waves', 'line', 'line of particles', 'particle wave', 'ray', 'ray of particles', 'ray of sparks', 'rush of ripples', 'rush of small spikes', 'rush of small waves', 'rush of spikes', 'shaft', 'spike of particles', 'stream', 'stream of fragments', 'stream of particles', 'stream of sparks', 'surge', 'surge of fragments', 'surge of particles', 'surge of ripples', 'surge of sparks', 'surge of waves', 'twirl', 'twisting coil', 'twisting stream', 'twisting wave', 'wave of fragments', 'wave of particles', 'wave of tiny particles'];
  const rnd1 = Math.floor(Math.random() * nm1.length);
  const rnd2 = Math.floor(Math.random() * nm2.length);
  const rnd2b = Math.floor(Math.random() * nm2.length);
  const rnd3 = Math.floor(Math.random() * nm3.length);
  const rnd4 = Math.floor(Math.random() * nm4.length);
  const rnd5 = Math.floor(Math.random() * nm5.length);
  const rnd6 = Math.floor(Math.random() * nm6.length);
  const rnd7 = Math.floor(Math.random() * nm7.length);
  const rnd8 = Math.floor(Math.random() * nm8.length);
  const rnd9 = Math.floor(Math.random() * nm1.length);
  const rnd10 = Math.floor(Math.random() * nm2.length);
  const rnd10b = Math.floor(Math.random() * nm2.length);
  const rnd11 = Math.floor(Math.random() * nm3.length);
  const rnd12 = Math.floor(Math.random() * nm4.length);
  const rnd13 = Math.floor(Math.random() * nm5.length);
  const rnd14 = Math.floor(Math.random() * nm6.length);
  const rnd15 = Math.floor(Math.random() * nm7.length);
  const rnd16 = Math.floor(Math.random() * nm8.length);
  const name = `Spell name: ${nm1[rnd9]}${nm2[rnd10]} ${nm3[rnd11]}${nm2[rnd10b]}`;
  const name2 = `Inventor: ${nm4[rnd12]}`;
  const name3 = `Effect: ${nm5[rnd13]}.`;
  const name4 = `Appearance: ${nm6[rnd14]}, ${nm7[rnd15]} ${nm8[rnd16]}.`;
  const name5 = '----------------------------';
  const name6 = `Spell name: ${nm1[rnd1]}${nm2[rnd2]} ${nm3[rnd3]}${nm2[rnd2b]}`;
  const name7 = `Inventor: ${nm4[rnd4]}`;
  const name8 = `Effect: ${nm5[rnd5]}.`;
  const name9 = `Appearance: ${nm6[rnd6]}, ${nm7[rnd7]} ${nm8[rnd8]}.`;
  let result = '';
  result += name;
  result += '\n';
  result += name2;
  result += '\n';
  result += name3;
  result += '\n';
  result += name4;
  result += '\n';
  result += '\n';
  result += name5;
  result += '\n';
  result += '\n';
  result += name6;
  result += '\n';
  result += name7;
  result += '\n';
  result += name8;
  result += '\n';
  result += name9;
  return result;
}
