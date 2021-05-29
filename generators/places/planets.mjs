import { sample } from 'lodash-es';

export default function planets() {
  let names;
  const nm1 = ['b', 'c', 'd', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', '', '', '', '', ''];
  const nm2 = ['a', 'e', 'o', 'u'];
  const nm3 = ['br', 'cr', 'dr', 'fr', 'gr', 'pr', 'str', 'tr', 'bl', 'cl', 'fl', 'gl', 'pl', 'sl', 'sc', 'sk', 'sm', 'sn', 'sp', 'st', 'sw', 'ch', 'sh', 'th', 'wh'];
  const nm4 = ['ae', 'ai', 'ao', 'au', 'a', 'ay', 'ea', 'ei', 'eo', 'eu', 'e', 'ey', 'ua', 'ue', 'ui', 'uo', 'u', 'uy', 'ia', 'ie', 'iu', 'io', 'iy', 'oa', 'oe', 'ou', 'oi', 'o', 'oy'];
  const nm5 = ['turn', 'ter', 'nus', 'rus', 'tania', 'hiri', 'hines', 'gawa', 'nides', 'carro', 'rilia', 'stea', 'lia', 'lea', 'ria', 'nov', 'phus', 'mia', 'nerth', 'wei', 'ruta', 'tov', 'zuno', 'vis', 'lara', 'nia', 'liv', 'tera', 'gantu', 'yama', 'tune', 'ter', 'nus', 'cury', 'bos', 'pra', 'thea', 'nope', 'tis', 'clite'];
  const nm6 = ['una', 'ion', 'iea', 'iri', 'illes', 'ides', 'agua', 'olla', 'inda', 'eshan', 'oria', 'ilia', 'erth', 'arth', 'orth', 'oth', 'illon', 'ichi', 'ov', 'arvis', 'ara', 'ars', 'yke', 'yria', 'onoe', 'ippe', 'osie', 'one', 'ore', 'ade', 'adus', 'urn', 'ypso', 'ora', 'iuq', 'orix', 'apus', 'ion', 'eon', 'eron', 'ao', 'omia'];
  const nm7 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 2) {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm4) + sample(nm5);
    } else if (i < 4) {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm6);
    } else if (i < 6) {
      names = sample(nm1) + sample(nm4) + sample(nm5);
    } else if (i < 8) {
      names = sample(nm3) + sample(nm2) + sample(nm1) + sample(nm2) + sample(nm5);
    } else {
      names = `${sample(nm3) + sample(nm6)} ${sample(nm7)}${sample(nm7)}${sample(nm7)}${sample(nm7)}`;
    }
    return names;
  }
}
