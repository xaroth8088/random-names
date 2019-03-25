export default function signalese() {
  const names = ['Ack', 'Beer', 'Charlie', 'Don', 'Edward', 'Freddie', 'Gee', 'Harry', 'Ink', 'Johnnie', 'King', 'London', 'Emma', 'Nuts', 'Oranges', 'Pip', 'Queen', 'Robert', 'Esses', 'Toc', 'Uncle', 'Vic', 'William', 'Xray', 'Yorker', 'Zebra'];
  const r1 = Math.floor(Math.random() * names.length);
  let r2 = Math.floor(Math.random() * (names.length - 1));
  if (r2 >= r1) r2 += 1;
  return `${names[r1]} ${names[r2]}`;
}
