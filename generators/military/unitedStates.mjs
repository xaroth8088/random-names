export default function unitedStates() {
  const names = ['Able', 'Baker', 'Charlie', 'Dog', 'Easy', 'Fox', 'George', 'How', 'Item', 'Jig', 'King', 'Love', 'Mike', 'Nan', 'Oboe', 'Peter', 'Queen', 'Roger', 'Sugar', 'Tare', 'Uncle', 'Victor', 'William', 'Xray', 'Yoke', 'Zebra'];
  const r1 = Math.floor(Math.random() * names.length);
  let r2 = Math.floor(Math.random() * (names.length - 1));
  if (r2 >= r1) r2 += 1;
  return `${names[r1]} ${names[r2]}`;
}
