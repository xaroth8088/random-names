export default function telegram() {
  const names = ['Adam', 'Boston', 'Chicago', 'Denver', 'Edward', 'Frank', 'George', 'Henry', 'Ida', 'John', 'King', 'Lincoln', 'Mary', 'New York', 'Ocean', 'Peter', 'Queen', 'Roger', 'Sugar', 'Thomas', 'Union', 'Victor', 'William', 'Xray', 'Young', 'Zero'];
  const r1 = Math.floor(Math.random() * names.length);
  let r2 = Math.floor(Math.random() * (names.length - 1));
  if (r2 >= r1) r2 += 1;
  return `${names[r1]} ${names[r2]}`;
}
