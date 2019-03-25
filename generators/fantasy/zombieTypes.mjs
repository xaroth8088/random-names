export default function zombieTypes() {
  let names;
  let rnd;
  let rnd;
  let names;
  const nm1 = ['Acher', 'Acid Zombie', 'Advanced Zombie', 'Ambush Zombie', 'Augmented Zombie', 'Bambino', 'Barfer', 'Barker', 'Bawler', 'Bender', 'Berserker', 'Bilger', 'Biter', 'Blaster', 'Blazer', 'Bleeder', 'Blight Zombie', 'Bloater', 'Bloomer', 'Blubber Zombie', 'Bluster Zombie', 'Bony Zombie', 'Boomer', 'Bouncer', 'Brawler', 'Brittle Zombie', 'Broken Zombie', 'Brooder', 'Browser', 'Brute', 'Burner', 'Burster', 'Busted Zombie', 'Buster', 'Cackler', 'Camo Zombie', 'Cannibal', 'Carnal Zombie', 'Carrier', 'Chaser', 'Chewer', 'Chomper', 'Chopper', 'Chubber', 'Chum', 'Chunky', 'Clacker', 'Clamper', 'Cleaner', 'Cleaver', 'Clicker', 'Climber', 'Cougher', 'Courier', 'Cracker', 'Crawler', 'Crazed Zombie', 'Crazy Zombie', 'Creeper', 'Crispy', 'Crowd Zombie', 'Crumbler', 'Crusher', 'Crusty', 'Cryer', 'Curious Zombie', 'Dancer', 'Darter', 'Dasher', 'Deducer', 'Defective Zombie', 'Digger', 'Dissolver', 'Dreamer', 'Drencher', 'Dribbler', 'Dripper', 'Driver', 'Drizzler', 'Drooper', 'Dropper', 'Drowner', 'Eager Zombie', 'Enhanced Zombie', 'Enhancer', 'Evolver', 'Experiment', 'Experimental Zombie', 'Exploder', 'Fader', 'Fanatic', 'Fatty', 'Feeder', 'Feeler', 'Feral Zombie', 'Fetid Zombie', 'Fighter', 'Flamer', 'Flasher', 'Fleshy Zombie', 'Flipper', 'Floater', 'Flocker', 'Foamer', 'Follower', 'Forager', 'Fragment', 'Fragmented Zombie', 'Frantic', 'Freak', 'Frenzied', 'Friendly Zombie', 'Frother', 'Fungi', 'Fungus Zombie', 'Fuser', 'Gagger', 'Gaunt Zombie', 'Glazer', 'Glider', 'Gnawer', 'Gobbler', 'Grasper', 'Grazer', 'Griever', 'Groaner', 'Grower', 'Grumbler', 'Grunter', 'Gusher', 'Hacker', 'Haunter', 'Hefty Zombie', 'Herd Zombie', 'Herder', 'Hider', 'Higher', 'Hook Zombie', 'Hopper', 'Horde Zombie', 'Howler', 'Hunter', 'Hurler', 'Husk Zombie', 'Husky Zombie', 'Hyper Zombie', 'Icicle Zombie', 'Infant Zombie', 'Inflated', 'Intelligent Zombie', 'Itcher', 'Joker', 'Jumper', 'Lanky Zombie', 'Leaper', 'Learner', 'Leecher', 'Licker', 'Limper', 'Little Zombie', 'Lurker', 'Mad Zombie', 'Melter', 'Mindless Zombie', 'Moaner', 'Mob Zombie', 'Mourner', 'Muller', 'Mumbler', 'Muncher', 'Mutant', 'Mute', 'Newborn', 'Nibbler', 'Oozer', 'Pack Zombie', 'Parasite', 'Partial Zombie', 'Peeler', 'Piercer', 'Pin Cushion', 'Pincher', 'Pixy', 'Plump Zombie', 'Plunger', 'Polyp', 'Popsicle', 'Porcupine', 'Pouncer', 'Primer', 'Private Zombie', 'Prober', 'Psycho', 'Pudgy', 'Puker', 'Putrid', 'Pygmy', 'Rabid Zombie', 'Radical Zombie', 'Radioactive Zombie', 'Rager', 'Rancer', 'Rapid Zombie', 'Raver', 'Recaller', 'Recollecter', 'Reeker', 'Reliver', 'Retainer', 'Retched Zombie', 'Retcher', 'Revoker', 'Ripe Zombie', 'Roaring', 'Rotter', 'Rumbler', 'Runner', 'Rupture Zombie', 'Ruptured Zombie', 'Rusher', 'Savage', 'Scourge', 'Scrambler', 'Scraper', 'Scratcher', 'Scrawny', 'Screaker', 'Screamer', 'Screecher', 'Scuffer', 'Scuttler', 'Senior', 'Shambler', 'Shouter', 'Shrieker', 'Shuffler', 'Siren', 'Skeletal Zombie', 'Skinner', 'Skinny Zombie', 'Skipper', 'Slender Zombie', 'Slider', 'Slimer', 'Slitherer', 'Sliver', 'Sloucher', 'Sludger', 'Slumper', 'Smacker', 'Smart Zombie', 'Smasher', 'Snacker', 'Snapper', 'Snarler', 'Sneezer', 'Sobbing Zombie', 'Spasm Zombie', 'Spastic', 'Spitter', 'Spittle Zombie', 'Splasher', 'Spoiled Zombie', 'Sponger', 'Spouter', 'Sprayer', 'Spreader', 'Sprouter', 'Spumer', 'Spurter', 'Squaller', 'Squealer', 'Squirmer', 'Stalker', 'Stinger', 'Stinker', 'Stout Zombie', 'Stretcher', 'Strider', 'Stuffer', 'Stumbler', 'Sucker', 'Suckling Zombie', 'Superior Zombie', 'Surfer', 'Swarmer', 'Sweller', 'Swimmer', 'Swinger', 'Swollen Zombie', 'Tainted Zombie', 'Tainter', 'Talker', 'Tank', 'Tantrum Zombie', 'Taster', 'Tearer', 'Temper', 'Tender Zombie', 'Tester', 'Thinker', 'Ticker', 'Tickler', 'Tracker', 'Trailer', 'Trapper', 'Tumbler', 'Tumor Zombie', 'Twitcher', 'Venom Zombie', 'Vomiter', 'Wacko', 'Wailer', 'Walker', 'Waster', 'Weeper', 'Whacker', 'Whiner', 'Whistler', 'Wild Zombie', 'Withering Zombie', 'Wrangler', 'Wrestler', 'Wriggler', 'Writher', 'Yelper']; {
    rnd = Math.floor(Math.random() * nm1.length);
    names = nm1[rnd];
    nm1.splice(rnd, 1);
    return names;
  }
}
