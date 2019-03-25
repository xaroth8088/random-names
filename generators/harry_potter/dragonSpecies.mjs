import sample from 'lodash/sample';

export default function dragonSpecies() {
  let names;
  const nm1 = ['Algerian', 'American', 'Angolan', 'Antarctic', 'Argentinian', 'Armenian', 'Australian', 'Austrian', 'Bolivian', 'Brazilian', 'British', 'Bulgarian', 'Cambodian', 'Canadian', 'Chilean', 'Chinese', 'Croatian', 'Cuban', 'Danish', 'Egyptian', 'Finnish', 'French', 'German', 'Hungarian', 'Indian', 'Irish', 'Italian', 'Jamaican', 'Japanese', 'Mexican', 'Mongolian', 'Moroccan', 'Nepalese', 'Norwegian', 'Peruvian', 'Romanian', 'Russian', 'Slovenian', 'South-African', 'Spanish', 'Swedish', 'Thai', 'Turkish', 'Ukrainian', 'Vietnamese'];
  const nm2 = ['Barb', 'Blaze', 'Bristle', 'Dart', 'Demon', 'Ember', 'Fire', 'Flame', 'Foul', 'Fury', 'Giant', 'Glow', 'Horn', 'Iron', 'Jade', 'Long', 'Mammoth', 'Monster', 'Opal', 'Plate', 'Rage', 'Ridge', 'Ruby', 'Short', 'Smooth', 'Snake', 'Soft', 'Spark', 'Spike', 'Steel', 'Storm', 'Swift', 'Thin', 'Thorn', 'Thunder', 'Venom', 'Vile', 'Viper', 'Warp', 'Wide'];
  const nm3 = ['back', 'belly', 'bottom', 'claw', 'crown', 'dart', 'eye', 'fang', 'frame', 'gut', 'head', 'horn', 'muzzle', 'paw', 'rump', 'scale', 'skull', 'snout', 'spike', 'stub', 'tail', 'tooth', 'trunk', 'tusk', 'wing'];
  {
    names = `${sample(nm1)} ${sample(nm2)}${sample(nm3)}`;
    return names;
  }
}
