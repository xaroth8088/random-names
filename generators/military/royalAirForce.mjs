export default function royalAirForce() {
  const names = ['Ace', 'Beer', 'Charlie', 'Don', 'Edward', 'Freddie', 'George', 'Harry', 'Ink', 'Johnnie', 'King', 'London', 'Monkey', 'Nuts', 'Orange', 'Pip', 'Queen', 'Robert', 'Sugar', 'Toc', 'Uncle', 'Vic', 'William', 'Xray', 'Yorker', 'Zebra'];
  const r1 = Math.floor(Math.random() * names.length);
  let r2 = Math.floor(Math.random() * (names.length - 1));
  if (r2 >= r1) r2 += 1;
  return `${names[r1]} ${names[r2]}`;
}
