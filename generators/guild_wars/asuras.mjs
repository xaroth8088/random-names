import { sample } from 'lodash-es';

export default function asuras() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'Z', 'Bl', 'Br', 'Bj', 'Dl', 'Dr', 'Dk', 'Dn', 'Fl', 'Fr', 'Fj', 'Gr', 'Gl', 'Gn', 'Gh', 'Bh', 'Dh', 'Kr', 'Kl', 'Kh', 'Kj', 'Lh', 'Mh', 'Pr', 'Pl', 'Pj', 'Ph', 'Rh', 'Qh', 'Sl', 'Sr', 'Sh', 'Tr', 'Tw', 'Sw', 'Pw', 'Kw', 'Dw', 'Bw', 'Vr', 'Vl', 'Sn', 'Sm', 'Zn', 'Zm', 'Str'];
  const nm2 = ['a', 'e', 'o', 'i', 'u', 'ea', 'eo', 'ia', 'io', 'ou', 'ua', 'a', 'e', 'o', 'i', 'u'];
  const nm3 = ['bb', 'dd', 'ff', 'gg', 'kk', 'll', 'mm', 'nn', 'pp', 'rr', 'ss', 'tt', 'xx', 'zz', 'bb', 'dd', 'ff', 'gg', 'kk', 'll', 'mm', 'nn', 'pp', 'rr', 'ss', 'tt', 'xx', 'zz', 'b', 'd', 'f', 'g', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'x', 'z'];
  const nm4 = ['oq', 'iq', 'aq', 'eq', 'uq', 'ot', 'it', 'at', 'et', 'ut', 'ap', 'op', 'ip', 'ep', 'up', 'os', 'is', 'as', 'es', 'us', 'ad', 'id', 'od', 'ed', 'ud', 'of', 'if', 'af', 'ef', 'uf', 'og', 'ig', 'ag', 'eg', 'ug', 'ok', 'ik', 'ak', 'ek', 'uk', 'ol', 'il', 'al', 'el', 'ul', 'oz', 'iz', 'az', 'ez', 'uz', 'ox', 'ix', 'ax', 'ex', 'ux', 'on', 'in', 'an', 'en', 'un', 'om', 'im', 'am', 'em', 'um', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm5 = ['Abjurer', 'Adept', 'Advisor', 'Agent', 'Alchemist', 'Alchemagician', 'Alienist', 'Artisan', 'Artificer', 'Architect', 'Analyst', 'Analyzer', 'Archivist', 'Assembler', 'Assistant', 'Astronomer', 'Attuner', 'Beastmaster', 'Builder', 'Cabalist', 'Calibrator', 'Calculator', 'Calumniator', 'Chemist', 'Cleaner', 'Chef', 'Chronicler', 'Compiler', 'Conjuror', 'Constructor', 'Convoker', 'Counselor', 'Collator', 'Collaborator', 'Crafter', 'Craftsman', 'Creator', 'Deconstructor', 'Demolisher', 'Demolitionist', 'Designer', 'Defender', 'Deviser', 'Director', 'Disassembler', 'Diviner', 'Doctor', 'Dynamist', 'Editor', 'Elementalist', 'Eliminator', 'Emulator', 'Enforcer', 'Engineer', 'Evoker', 'Expert', 'Explorer', 'Examiner', 'Extinguisher', 'Exterminator', 'Fabricator', 'Gemcutter', 'Generator', 'Golementalist', 'Golemwright', 'Guardian', 'Gunsmith', 'Guide', 'Helper', 'Hunter', 'Huntsman', 'Hypnotist', 'Illustrator', 'Initiator', 'Innovator', 'Invader', 'Invoker', 'Instructor', 'Instigator', 'Interlocutor', 'Interrogator', 'Insurrectionist', 'Inventor', 'Inveigler', 'Investigator', 'Infiltrator', 'Krewe Chief', 'Kreweman', 'Liquidator', 'Maestro', 'Machinist', 'Marksman', 'Mathematician', 'Mechanic', 'Mechwright', 'Mechsmith', 'Metallurgist', 'Metaphysicist', 'Mentor', 'Mesmer', 'Monitor', 'Mortifactor', 'Mortificator', 'Navigator', 'Necromancer', 'Operator', 'Optimizer', 'Organizer', 'Originator', 'Paraphysicist', 'Pathfinder', 'Phantasmist', 'Physicist', 'Pistoleer', 'Planner', 'Princeps', 'Progenitor', 'Prognosticator', 'Protector', 'Provoker', 'Professor', 'Preceptor', 'Psychometrist', 'Reanimator', 'Recalibrator', 'Researcher', 'Retriever', 'Refiner', 'Revisionist', 'Sage', 'Schematicist', 'Seeker', 'Sentinel', 'Schemer', 'Scientist', 'Savant', 'Saboteur', 'Subversionist', 'Specialist', 'Statistician', 'Supervisor', 'Surveyor', 'Synergist', 'Teacher', 'Techwright', 'Techsmith', 'Thaumaturgist', 'Theorist', 'Theonomist', 'Thermodynamist', 'Trailblazer', 'Trainer', 'Visualizer', 'Weaponeer', 'Electrician', 'Mortician', 'Scientician', 'Technician', 'Magitechnician', 'Necrotechnician', 'Pyrotechnician', 'Cryotechnician', 'Hydrotechnician', 'Aerotechnician', 'Terratechnician', 'Electrotechnician', 'Chronotechnician', 'Astromancer', 'Pyromancer', 'Cryomancer', 'Aeromancer', 'Geomancer', 'Terramancer', 'Electromancer', 'Chronomancer', 'Technomancer', 'Techromancer', 'Golemancer', 'Alchemologist', 'Anthropologist', 'Biologist', 'Botanist', 'Geologist', 'Elixologist', 'Chronologist', 'Electrologist', 'Parabiologist', 'Parabotanist', 'Pyrologist', 'Necrologist', 'Cryologist', 'Hydrologist', 'Aerologist', 'Terrologist', 'Hypnologist', 'Illusionist', 'Conflagrationist', 'Schematologist', 'Technologist', 'Tempestologist', 'Mesmerologist', 'Meteorologist', 'Mixologist', 'Gemologist', 'Golemologist', 'Radiologist', 'Thaumatologist', 'Wraithologist', 'Vulcanologist', 'Xenologist '];
  const nm6 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'Z', 'Bl', 'Br', 'Bj', 'Dl', 'Dr', 'Dk', 'Dn', 'Fl', 'Fr', 'Fj', 'Gr', 'Gl', 'Gn', 'Gh', 'Bh', 'Dh', 'Kr', 'Kl', 'Kh', 'Kj', 'Lh', 'Mh', 'Pr', 'Pl', 'Pj', 'Ph', 'Rh', 'Qh', 'Sl', 'Sr', 'Sh', 'Tr', 'Tw', 'Sw', 'Pw', 'Kw', 'Dw', 'Bw', 'Vr', 'Vl', 'Sn', 'Sm', 'Zn', 'Zm', 'Str'];
  const nm7 = ['a', 'e', 'o', 'i', 'u', 'ea', 'eo', 'ia', 'io', 'ou', 'ua', 'a', 'e', 'o', 'i', 'u'];
  const nm8 = ['bb', 'dd', 'ff', 'gg', 'kk', 'll', 'mm', 'nn', 'pp', 'rr', 'ss', 'tt', 'xx', 'zz', 'bb', 'dd', 'ff', 'gg', 'kk', 'll', 'mm', 'nn', 'pp', 'rr', 'ss', 'tt', 'xx', 'zz', 'b', 'd', 'f', 'g', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'x', 'z'];
  const nm9 = ['o', 'i', 'a', 'e', 'u'];
  const i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      if (i < 5) {
        names = `${sample(nm5)} ${sample(nm6)}${sample(nm7)}${sample(nm8)}${sample(nm9)}`;
      } else {
        names = `${sample(nm6) + sample(nm7) + sample(nm8) + sample(nm9)} the ${sample(nm5)}`;
      }
    } else if (i < 5) {
      names = `${sample(nm5)} ${sample(nm1)}${sample(nm2)}${sample(nm3)}${sample(nm4)}`;
    } else {
      names = `${sample(nm1) + sample(nm2) + sample(nm3) + sample(nm4)} the ${sample(nm5)}`;
    }
    return names;
  }
}
