export default function royalNavy() {
  const names = ['Apples', 'Butter', 'Charlie', 'Duff', 'Edward', 'Freddy', 'George', 'Harry', 'Ink', 'Johnnie', 'King', 'London', 'Monkey', 'Nuts', 'Orange', 'Pudding', 'Queenie', 'Robert', 'Sugar', 'Tommy', 'Uncle', 'Vinegar', 'Willie', 'Xerxes', 'Yellow', 'Zebra'];
  const r1 = Math.floor(Math.random() * names.length);
  let r2 = Math.floor(Math.random() * (names.length - 1));
  if (r2 >= r1) r2 += 1;
  return `${names[r1]} ${names[r2]}`;
}
