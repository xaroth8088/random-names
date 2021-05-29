import { sample } from 'lodash-es';

export default function plantations() {
  let names;
  const nm1 = ['Allen', 'Alt', 'Ash', 'Asp', 'Aspen', 'Autumn', 'Banner', 'Barley', 'Beaver', 'Bee', 'Beech', 'Belle', 'Bird', 'Birds', 'Black', 'Bleak', 'Bog', 'Boulder', 'Brier', 'Broad', 'Brown', 'Buck', 'Castle', 'Cedar', 'Cherry', 'Cinnamon', 'Clare', 'Clay', 'Clear', 'Clover', 'Cold', 'Cole', 'Cool', 'Craw', 'Creek', 'Crescent', 'Crimson', 'Crow', 'Dawn', 'Dusk', 'East', 'Edge', 'Elk', 'Elm', 'Ever', 'Fair', 'Far', 'Farm', 'Forest', 'Fox', 'Free', 'Frog', 'Frost', 'Glen', 'Good', 'Grace', 'Grass', 'Gray', 'Green', 'Grime', 'Hare', 'Haw', 'Hazel', 'High', 'Hill', 'Holly', 'Home', 'Honey', 'Hope', 'Humble', 'Idle', 'Ivy', 'Jade', 'King', 'Kings', 'Lake', 'Lang', 'Lily', 'Locust', 'Log', 'Long', 'Low', 'Marsh', 'Mel', 'Mid', 'Middle', 'Mill', 'Moon', 'Moss', 'Mud', 'Myrtle', 'Narrow', 'Nettle', 'New', 'Noble', 'North', 'Oak', 'Oat', 'Peace', 'Pine', 'Pleasant', 'Raven', 'Red', 'Rich', 'Ridge', 'Rivers', 'Rock', 'Rose', 'Rosen', 'Rust', 'Salt', 'Sand', 'Sea', 'Shade', 'Shadow', 'Short', 'Snow', 'South', 'Spring', 'Stag', 'Star', 'Stone', 'Summer', 'Swan', 'Tangle', 'Thorn', 'Under', 'West', 'Wheat', 'Whit', 'White', 'Wild', 'Willow', 'Wind', 'Winter', 'Wood', 'Worm'];
  const nm2 = ['bald', 'bay', 'bend', 'berry', 'bloom', 'blossom', 'bluff', 'borough', 'bourne', 'branch', 'bridge', 'brook', 'burg', 'burgh', 'burn', 'bury', 'cairn', 'cove', 'creek', 'dale', 'dam', 'dew', 'down', 'field', 'fields', 'font', 'ford', 'green', 'ground', 'grove', 'hall', 'haven', 'hill', 'hope', 'isle', 'land', 'lands', 'lane', 'lawn', 'meadow', 'mond', 'mont', 'more', 'moss', 'mount', 'mountain', 'mourne', 'mouth', 'pebble', 'plains', 'point', 'pond', 'pool', 'port', 'rest', 'ridge', 'river', 'rock', 'side', 'song', 'sor', 'spring', 'springs', 'stead', 'stone', 'stones', 'thorne', 'ton', 'town', 'vale', 'valley', 'view', 'ville', 'wall', 'way', 'well', 'wild', 'will', 'wood', 'woods', 'worth', 'worthy'];
  const nm3 = ['Plantation', 'Plantation House', 'Manor', 'Home', 'Mansion', 'Hall', 'Plantation'];
  {
    names = `${sample(nm1) + sample(nm2)} ${sample(nm3)}`;
    return names;
  }
}
