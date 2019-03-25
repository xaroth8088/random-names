import sample from 'lodash/sample';

export default function christmasElfs() {
  let names;
  const type = Math.floor(Math.random() * 3.0);
  const nm1 = ['Alabaster', 'Angel', 'Berry', 'Bing', 'Bling', 'Blitz', 'Blue', 'Bluebell', 'Brandysnap', 'Brownie', 'Buddy', 'Bushy', 'Buster', 'Butters', 'Button', 'Buttons', 'Candycane', 'Cedar', 'Chestnut', 'Choco', 'Cinnamon', 'Coco', 'Cocoa', 'Cookie', 'Dash', 'Elm', 'Evergreen', 'Fig', 'Figgy', 'Fir', 'Fizzy', 'Flake', 'Fluffy', 'Frost', 'Frosty', 'Fruity', 'Fudge', 'Fuzzle', 'Garland', 'Ginger', 'Gingernuts', 'Gingersnap', 'Glitter', 'Glory', 'Hazelnut', 'Ice', 'Jangle', 'Jingle', 'Jolly', 'Marzipan', 'Merry', 'Mince', 'Mint', 'Mistle', 'Mistletoe', 'Noel', 'Nutmeg', 'Pepper', 'Peppetmint', 'Perky', 'Pine', 'Pinecone', 'Pudding', 'Rusty', 'Shimmer', 'Skittle', 'Snappy', 'Snow', 'Snowball', 'Snowdrop', 'Snowflake', 'Sparkle', 'Sprinkle', 'Sprinkles', 'Starlight', 'Stripes', 'Sugar', 'Sugarplum', 'Tinkles', 'Tinsel', 'Tiny', 'Topper', 'Trinket', 'Twinkle', 'Twinkletoes', 'Wink', 'Winter', 'Yule'];
  const nm2 = ['Angel', 'Berry', 'Bing', 'Bling', 'Blitz', 'Blue', 'Bluebell', 'Brownie', 'Button', 'Buttons', 'Candycane', 'Choco', 'Cinnamon', 'Coco', 'Cocoa', 'Cookie', 'Dash', 'Fig', 'Figgy', 'Fizzy', 'Flake', 'Fluffy', 'Fruity', 'Fudge', 'Fuzzle', 'Garland', 'Ginger', 'Gingernuts', 'Gingersnap', 'Glitter', 'Glory', 'Ice', 'Jangle', 'Jingle', 'Jolly', 'Merry', 'Mince', 'Mint', 'Mistle', 'Mistletoe', 'Nutmeg', 'Pepper', 'Peppetmint', 'Perky', 'Pine', 'Pudding', 'Skittle', 'Snappy', 'Snow', 'Snowball', 'Snowdrop', 'Snowflake', 'Sparkle', 'Sprinkle', 'Sprinkles', 'Starlight', 'Stripes', 'Sugar', 'Sugarplum', 'Tinkles', 'Tinsel', 'Tiny', 'Topper', 'Trinket', 'Twinkle', 'Twinkletoes', 'Wink', 'Winter', 'Yule'];
  const nm3 = ['Angel', 'Belle', 'Berry', 'Bing', 'Bling', 'Blitz', 'Blue', 'Bluebell', 'Brandy', 'Brownie', 'Bubbles', 'Button', 'Buttons', 'Candy', 'Candycane', 'Carol', 'Cherry', 'Choco', 'Cinnamon', 'Clove', 'Coco', 'Cocoa', 'Cookie', 'Cupcake', 'Dandy', 'Dash', 'Ember', 'Emerald', 'Eve', 'Evie', 'Faith', 'Fig', 'Figgy', 'Fizzy', 'Flake', 'Fluffy', 'Fruity', 'Fudge', 'Fuzzle', 'Garland', 'Ginger', 'Gingernuts', 'Gingersnap', 'Glitter', 'Gloria', 'Glory', 'Hazel', 'Holly', 'Honey', 'Honeycomb', 'Hope', 'Ice', 'Ivy', 'Jangle', 'Jewel', 'Jingle', 'Jolly', 'Joy', 'Juniper', 'Merry', 'Mince', 'Mint', 'Mistle', 'Mistletoe', 'Noelle', 'Nutmeg', 'Pepper', 'Peppetmint', 'Perky', 'Pine', 'Pudding', 'Ruby', 'Scarlet', 'Skittle', 'Snappy', 'Snow', 'Snowball', 'Snowdrop', 'Snowflake', 'Sparkle', 'Sprinkle', 'Sprinkles', 'Starlight', 'Stripes', 'Sugar', 'Sugarplum', 'Tinkles', 'Tinsel', 'Tiny', 'Topper', 'Trinket', 'Trixie', 'Twinkle', 'Twinkletoes', 'Wink', 'Winter', 'Yule'];
  const nm4 = ['Angel', 'Bustle', 'Busy', 'Candle', 'Candy', 'Carol', 'Chill', 'Chilly', 'Chimney', 'Chocolate', 'Cider', 'Cookie', 'Crackle', 'Cuddle', 'Dream', 'Ever', 'Fire', 'Flippy', 'Frost', 'Frosty', 'Fruit', 'Gift', 'Good', 'Goody', 'Grotto', 'Happy', 'Holi', 'Holly', 'Hot', 'Hustle', 'Ivy', 'Jiggle', 'Jingle', 'Jolly', 'Magic', 'Milk', 'Milky', 'Miracle', 'Mistle', 'Mitten', 'Morning', 'Muffin', 'Nibble', 'Night', 'Nippy', 'Party', 'Pickle', 'Plum', 'Poem', 'Pudding', 'Rhyme', 'Ribbon', 'Sleepy', 'Snow', 'Sparkle', 'Sugar', 'Sweet', 'Toffee', 'Twinkle', 'Wiggle'];
  const nm5 = ['ball', 'beard', 'bell', 'bow', 'box', 'cake', 'cane', 'card', 'carol', 'cheer', 'dance', 'dancer', 'dash', 'feast', 'flake', 'foot', 'friend', 'frost', 'fun', 'game', 'gift', 'glitter', 'glove', 'guest', 'hat', 'hope', 'hug', 'icicle', 'ivy', 'joke', 'joy', 'jump', 'kiss', 'laugh', 'light', 'love', 'milk', 'mitten', 'moon', 'myrrh', 'night', 'pie', 'plum', 'scarf', 'sledge', 'sleigh', 'song', 'spirit', 'star', 'toy', 'tree', 'warmth', 'wine', 'wish', 'wrap'];
  {
    if (type === 1) {
      names = `${sample(nm3)} ${sample(nm4)}${sample(nm5)}`;
    } else if (type === 2) {
      names = `${sample(nm2)} ${sample(nm4)}${sample(nm5)}`;
    } else {
      names = `${sample(nm1)} ${sample(nm4)}${sample(nm5)}`;
    }
    return names;
  }
}
