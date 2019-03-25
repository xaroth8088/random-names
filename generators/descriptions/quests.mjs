export default function quests() {
  let name;
  let name2;
  let name3;
  let name4;
  const type = Math.random() > 0.5 ? 0 : 1;
  if (type === 1) {} else {}
  let result = '';
  result += name;
  result += '\n';
  result += '\n';
  result += name2;
  result += '\n';
  if (type !== 1) {
    result += name3;
    result += '\n';
    result += '\n';
  } else if (type === 1) {
    result += '\n';
  }
  result += name4;
  return result;
}
