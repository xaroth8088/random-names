export default function fursonas() {
  let names;
  let rnd;
  let rnd2;
  let rnd3;
  let rnd4;
  let rnd6;
  let rnd7;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Amber', 'Arctic', 'Ash', 'Atom', 'Autumn', 'Big', 'Dire', 'Black', 'Blaze', 'Blue', 'Bone', 'Boulder', 'Bright', 'Bronze', 'Cinder', 'Cloud', 'Common', 'Crest', 'Crimson', 'Crystal', 'Dark', 'Dawn', 'Day', 'Desert', 'Dew', 'Doom', 'Dream', 'Dusk', 'Dust', 'Earth', 'Ebon', 'Ember', 'Evening', 'Feather', 'Feral', 'Fire', 'Flame', 'Forest', 'Free', 'Frenzy', 'Frost', 'Fury', 'Gloom', 'Gold', 'Grand', 'Gray', 'Grim', 'High', 'Hill', 'Humble', 'Ice', 'Iron', 'Jade', 'Keen', 'Light', 'Lightning', 'Low', 'Luna', 'Lunar', 'Magic', 'Meadow', 'Mild', 'Mist', 'Molten', 'Moon', 'Morning', 'Mountain', 'Mud', 'Night', 'Noble', 'Ocean', 'Old', 'Pale', 'Pride', 'Proud', 'Rage', 'Rain', 'Rainbow', 'Rapid', 'Rave', 'Razor', 'Red', 'Regal', 'River', 'Rock', 'Rough', 'Rune', 'Sea', 'Shade', 'Shadow', 'Short', 'Silent', 'Silver', 'Simple', 'Sky', 'Small', 'Snow', 'Soft', 'Solar', 'Spark', 'Spirit', 'Spring', 'Star', 'Steel', 'Stone', 'Storm', 'Stout', 'Strong', 'Summer', 'Sun', 'Swift', 'Tall', 'Terra', 'Thunder', 'True', 'Velvet', 'Whit', 'White', 'Wild', 'Wind', 'Winter', 'Wise', 'Wood', 'Young'];
  const nm2 = ['bat', 'bunny', 'cat', 'claw', 'coat', 'coyote', 'crest', 'crown', 'dog', 'face', 'fang', 'fennec', 'fox', 'fur', 'heart', 'hoof', 'horse', 'hound', 'hunter', 'husky', 'jackal', 'kitten', 'kitty', 'leopard', 'liger', 'lion', 'mane', 'panther', 'paw', 'pelt', 'pony', 'rabbit', 'snout', 'stud', 'tail', 'tiger', 'unicorn', 'vixen', 'wolf'];
  const nm3 = ['Courage', 'Power', 'Brave', 'Silly', 'Odd', 'Weird', 'Smelly', 'Wise', 'Crafty', 'Sly', 'Lazy', 'New', 'Cold', 'Rabid', 'Lucky', 'Proud', 'Smart', 'Clever', 'Happy', 'Killer', 'Old', 'Ancient', 'Cruel', 'Funny', 'Friendly', 'Adept', 'Rogue', 'Smart', 'Subtle', 'Slick', 'Sharp', 'Mean', 'Active', 'Adorable', 'Agile', 'Alert', 'Ample', 'Angry', 'Angel', 'Ancient', 'Anxious', 'Arctic', 'Awkward', 'Average', 'Bad', 'Baggy', 'Big', 'Bitter', 'Bland', 'Bliss', 'Blissful', 'Bold', 'Bouncy', 'Brave', 'Bright', 'Brisk', 'Bubbly', 'Calm', 'Clean', 'Clever', 'Cold', 'Coarse', 'Creepy', 'Crazy', 'Corny', 'Cute', 'Curly', 'Curvy', 'Dark', 'Dapper', 'Dense', 'Dim', 'Dirty', 'Dull', 'Eager', 'Evil', 'Exotic', 'Fancy', 'False', 'Fair', 'Faint', 'Fake', 'Feisty', 'Fine', 'Flashy', 'Fluffy', 'Fresh', 'Frosty', 'Fuzzy', 'Gentle', 'Good', 'Grace', 'Great', 'Greedy', 'Grim', 'Hard', 'Harsh', 'Hollow', 'Humble', 'Idle', 'Jolly', 'Kind', 'Large', 'Lean', 'Lazy', 'Light', 'Little', 'Lone', 'Long', 'Loud', 'Low', 'Mad', 'Mild', 'Merry', 'Mellow', 'Naughty', 'Nimble', 'Nice', 'Pale', 'Posh', 'Poor', 'Prime', 'Pretty', 'Pure', 'Quick', 'Quiet', 'Rude', 'Rich', 'Rare', 'Rapid', 'Sad', 'Sane', 'Scary', 'Scared', 'Secret', 'Shy', 'Silent', 'Simple', 'Silly', 'Silver', 'Smooth', 'Strong', 'Swift', 'Sweet', 'Super', 'Sunny', 'True', 'Twin', 'Tiny', 'Tender', 'Tame', 'Vain', 'Wild', 'Wicked'];
  const nm4 = ['bane', 'bark', 'blade', 'bone', 'bones', 'claw', 'claws', 'coat', 'crest', 'eye', 'eyes', 'face', 'fang', 'fangs', 'feather', 'plume', 'plumes', 'feathers', 'fur', 'growl', 'heart', 'hide', 'hoof', 'howl', 'mane', 'mask', 'meow', 'mug', 'nail', 'nails', 'nose', 'pack', 'paw', 'paws', 'pelt', 'scream', 'shadow', 'skin', 'smile', 'smirk', 'tail', 'teeth', 'tongue', 'tooth', 'wing', 'wings', 'yelp'];
  const nm5 = ['', '', '', '', '', 'b', 'c', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'ph', 'r', 's', 'th', 'b', 'br', 'cl', 'bh', 'cl', 'cr', 'c', 'ch', 'd', 'dr', 'f', 'fr', 'fl', 'gr', 'gl', 'g', 'gh', 'h', 'k', 'kl', 'kr', 'l', 'm', 'n', 'r', 's', 'sh', 'st', 'str', 't', 'th', 'tr', 'v', 'vr', 'w', 'z', 'zh', 'zr'];
  const nm6 = ['a', 'e', 'i', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ui', 'ea', 'ei', 'ie', 'ai', 'ua', 'ei', 'eo', 'ia', 'aa', 'eo', 'ee'];
  const nm7 = ['b', 'c', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'ph', 'r', 's', 'th', 'b', 'c', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'ph', 'r', 's', 'th', 'b', 'b', 'br', 'bl', 'cl', 'c', 'c', 'cr', 'd', 'd', 'dl', 'dr', 'g', 'g', 'gr', 'gn', 'k', 'k', 'kr', 'kn', 'l', 'l', 'lc', 'll', 'lm', 'lt', 'lw', 'm', 'm', 'mn', 'mr', 'n', 'n', 'nc', 'ndl', 'nh', 'nn', 'ns', 'nz', 'r', 'r', 'rd', 'rk', 'rn', 'rs', 'rv', 'ry', 's', 's', 'st', 'sk', 'sr', 'str', 't', 'th', 'tr', 'tn', 't', 'thm', 'v', 'v', 'z', 'z'];
  const nm10 = ['', '', '', '', '', '', '', '', '', 'b', 'bs', 'c', 'cs', 'ck', 'd', 'f', 'g', 'k', 'l', 'ld', 'll', 'lt', 'ln', 'lm', 'ls', 'm', 'n', 'nd', 'p', 'q', 'r', 'rs', 'rd', 'rt', 's', 'st', 'sh', 'z', 'y'];
  const nm11 = ['', '', '', '', '', 'br', 'bl', 'b', 'c', 'ch', 'cl', 'cw', 'd', 'dr', 'dh', 'f', 'h', 'h', 'g', 'gl', 'gr', 'gw', 'j', 'k', 'kh', 'kl', 'l', 'm', 'n', 'p', 'pr', 'pl', 'ph', 'q', 'r', 's', 'sh', 'st', 'str', 't', 'th', 'tr', 'v', 'w', 'z', 'x', 'y'];
  const nm12 = ['a', 'e', 'i', 'a', 'e', 'i', 'a', 'e', 'i', 'a', 'e', 'i', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ai', 'io', 'ei', 'ea', 'ae', 'ia', 'ue', 'ua'];
  const nm13 = ['b', 'c', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'ph', 'r', 's', 'th', 'b', 'c', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'ph', 'r', 's', 'th', 'br', 'bh', 'b', 'dh', 'd', 'dn', 'dd', 'f', 'ff', 'fr', 'g', 'gh', 'gg', 'h', 'h', 'hh', 'k', 'kr', 'kh', 'l', 'll', 'lm', 'ln', 'lv', 'lw', 'm', 'mm', 'mn', 'n', 'nc', 'nn', 'pp', 'p', 'ph', 'pr', 'r', 'rg', 'rr', 's', 'ss', 'sh', 'tt', 'th', 'v', 'zn', 'z'];
  const nm16 = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'q', 'x', 'z', 'ph', 'ss', 'sh', '', 's', 'n', 'h', 'l', 'th'];
  const nm17 = ['', '', '', '', '', 'b', 'br', 'cl', 'bh', 'cl', 'cr', 'c', 'ch', 'd', 'dr', 'f', 'fr', 'fl', 'gr', 'gl', 'g', 'gh', 'h', 'k', 'kl', 'kr', 'l', 'm', 'n', 'r', 's', 'sh', 'st', 'str', 't', 'th', 'tr', 'v', 'vr', 'w', 'z', 'zh', 'zr', '', '', '', '', '', 'br', 'bl', 'b', 'c', 'ch', 'cl', 'cw', 'd', 'dr', 'dh', 'f', 'h', 'h', 'g', 'gl', 'gr', 'gw', 'j', 'k', 'kh', 'kl', 'l', 'm', 'n', 'p', 'pr', 'pl', 'ph', 'q', 'r', 's', 'sh', 'st', 'str', 't', 'th', 'tr', 'v', 'w', 'z', 'x', 'y'];
  const nm18 = ['a', 'e', 'i', 'a', 'e', 'i', 'a', 'e', 'i', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ui', 'ea', 'ei', 'ie', 'ai', 'ua', 'ei', 'eo', 'ia', 'aa', 'eo', 'ee'];
  const nm19 = ['b', 'c', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'ph', 'r', 's', 'th', 'b', 'c', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'ph', 'r', 's', 'th', 'b', 'b', 'br', 'bl', 'cl', 'c', 'c', 'cr', 'd', 'd', 'dl', 'dr', 'g', 'g', 'gr', 'gn', 'k', 'k', 'kr', 'kn', 'l', 'l', 'lc', 'll', 'lm', 'lt', 'lw', 'm', 'm', 'mn', 'mr', 'n', 'n', 'nc', 'ndl', 'nh', 'nn', 'ns', 'nz', 'r', 'r', 'rd', 'rk', 'rn', 'rs', 'rv', 'ry', 's', 's', 'st', 'sk', 'sr', 'str', 't', 'th', 'tr', 'tn', 't', 'thm', 'v', 'v', 'z', 'z', 'br', 'bh', 'b', 'dh', 'd', 'dn', 'dd', 'f', 'ff', 'fr', 'g', 'gh', 'gg', 'h', 'h', 'hh', 'k', 'kr', 'kh', 'l', 'll', 'lm', 'ln', 'lv', 'lw', 'm', 'mm', 'mn', 'n', 'nc', 'nn', 'pp', 'p', 'ph', 'pr', 'r', 'rg', 'rr', 's', 'ss', 'sh', 'tt', 'th', 'v', 'zn', 'z'];
  const nm22 = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'q', 'x', 'z', 'ph', 'ss', 'sh', '', 's', 'n', 'h', 'l', 'th', 'b', 'bs', 'c', 'cs', 'ck', 'd', 'f', 'g', 'k', 'l', 'ld', 'll', 'lt', 'ln', 'lm', 'ls', 'm', 'n', 'nd', 'p', 'q', 'r', 'rs', 'rd', 'rt', 's', 'st', 'sh', 'z', 'y'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 5) {
      if (type === 1) {
        rnd = Math.floor(Math.random() * nm11.length);
        rnd2 = Math.floor(Math.random() * nm12.length);
        rnd3 = Math.floor(Math.random() * nm13.length);
        rnd6 = Math.floor(Math.random() * nm12.length);
        rnd7 = Math.floor(Math.random() * nm16.length);
        names = nm11[rnd] + nm12[rnd2] + nm13[rnd3] + nm12[rnd6] + nm16[rnd7];
      } else if (type === 2) {
        rnd = Math.floor(Math.random() * nm17.length);
        rnd2 = Math.floor(Math.random() * nm18.length);
        rnd3 = Math.floor(Math.random() * nm19.length);
        rnd6 = Math.floor(Math.random() * nm18.length);
        rnd7 = Math.floor(Math.random() * nm22.length);
        names = nm17[rnd] + nm18[rnd2] + nm19[rnd3] + nm18[rnd6] + nm22[rnd7];
      } else {
        rnd = Math.floor(Math.random() * nm5.length);
        rnd2 = Math.floor(Math.random() * nm6.length);
        rnd3 = Math.floor(Math.random() * nm7.length);
        rnd6 = Math.floor(Math.random() * nm6.length);
        rnd7 = Math.floor(Math.random() * nm10.length);
        names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd6] + nm10[rnd7];
      }
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd4 = Math.floor(Math.random() * nm4.length);
      names = `${nm1[rnd] + nm2[rnd2]} ${nm3[rnd3]}${nm4[rnd4]}`;
    }
    return names;
  }
}
