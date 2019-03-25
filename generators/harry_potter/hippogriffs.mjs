import sample from 'lodash/sample';

export default function hippogriffs() {
  let names;
  const nm1 = ['Agile', 'Beauty', 'Blitz', 'Breeze', 'Brisk', 'Buck', 'Charge', 'Class', 'Dart', 'Dash', 'Draft', 'Fleet', 'Flow', 'Flurry', 'Flux', 'Gale', 'Gentle', 'Glamor', 'Grace', 'Guard', 'Gust', 'Hale', 'Hate', 'Hurricane', 'Iron', 'Keen', 'Loud', 'Mellow', 'Nimble', 'Quick', 'Quiet', 'Rough', 'Rush', 'Sharp', 'Silk', 'Soft', 'Spirit', 'Spry', 'Stark', 'Steel', 'Storm', 'Stout', 'Strong', 'Surge', 'Swift', 'Tame', 'Tender', 'Thunder', 'Wild', 'Wind'];
  const nm2 = ['beak', 'bill', 'claw', 'colt', 'eye', 'feather', 'fluff', 'fringe', 'hoof', 'hook', 'mane', 'plume', 'quill', 'scream', 'screech', 'steed', 'tail', 'talon', 'tuft', 'wing'];
  {
    names = sample(nm1) + sample(nm2);
    return names;
  }
}
