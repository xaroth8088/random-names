export default function myLittlePonys() {
  let names;
  let names1;
  let names2;
  let rnd0;
  let
    rnd1;
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  if (type === 1) {
    var names3 = ['Aura', 'Aurora', 'Bee', 'Berry', 'Blossom', 'Breeze', 'Cake', 'Candy', 'Charm', 'Cupcake', 'Daisy', 'Dawn', 'Diamond', 'Dream', 'Drop', 'Dusk', 'Eyes', 'Fashion', 'Fire', 'Flower', 'Gem', 'Glow', 'Harmony', 'Jewel', 'Kisses', 'Light', 'Lilly', 'Love', 'Moon', 'Moonlight', 'Night', 'Nourish', 'Petal', 'Petunia', 'Pie', 'Rain', 'Rose', 'Shadow', 'Smooch', 'Snow', 'Snowflake', 'Song', 'Sparkle', 'Spice', 'Star', 'Sunlight', 'Swing', 'Swirl', 'Twirl', 'Wings'];
  } else if (type === 2) {
    var names3 = ['Arrow', 'Beat', 'Blanket', 'Breeze', 'Charm', 'Chaser', 'Cube', 'Dash', 'Dough', 'Eyes', 'Fang', 'Fury', 'Gadget', 'Gem', 'Haste', 'Heart', 'Hoof', 'Hooves', 'Leap', 'Light', 'Manes', 'Meteor', 'Might', 'Mist', 'Moon', 'Moonlight', 'Mystery', 'Note', 'Prize', 'Sapphire', 'Scar', 'Shadow', 'Shy', 'Smirk', 'Solo', 'Song', 'Sparkle', 'Spice', 'Star', 'Step', 'Steps', 'Stream', 'Style', 'Sunset', 'Sunshine', 'Thimble', 'Tinker', 'Toes', 'Tooth', 'Tumbler', 'Vision', 'Wing', 'Wish'];
  } else {
    var names3 = ['Ace', 'Armor', 'Arrow', 'Bolt', 'Breeze', 'Bristle', 'Bronco', 'Buster', 'Charge', 'Chaser', 'Colt', 'Comet', 'Crunch', 'Dare', 'Dash', 'Facade', 'Feet', 'Flash', 'Force', 'Gust', 'Haze', 'Hero', 'Hooves', 'Hunter', 'Ice', 'Jester', 'Justice', 'Mane', 'Mark', 'Mask', 'Meadow', 'Metal', 'Moon', 'Mustang', 'Night', 'Prickle', 'Road', 'Rock', 'Shadow', 'Shine', 'Snow', 'Sorbet', 'Spark', 'Specter', 'Spirit', 'Sprint', 'Star', 'Starlight', 'Storm', 'Strikes', 'Sweeper', 'Tail', 'Thunder', 'Twister', 'Venture', 'Victory', 'Vision', 'Whiskers', 'Whistle', 'White', 'Wing'];
  }
  const i = Math.floor(Math.random() * 10); {
    if (i < 5) {
      rnd0 = Math.floor(Math.random() * names1.length);
      names = names1[rnd0];
    } else {
      rnd0 = Math.floor(Math.random() * names2.length);
      rnd1 = Math.floor(Math.random() * names3.length);
      names = `${names2[rnd0]} ${names3[rnd1]}`;
    }
    return names;
  }
}
