import sample from 'lodash/sample';

export default function newspapers() {
  let names;
  const nm3 = [
    ['The ', 'Bulletin'],
    ['The ', 'Chronicle'],
    ['The ', 'Chronicles'],
    ['The ', 'Gazette'],
    ['The ', 'Herald'],
    ['The ', 'Inquirer'],
    ['The ', 'Journal'],
    ['The ', 'Mirror'],
    ['', 'News'],
    ['', 'News'],
    ['', 'News'],
    ['The ', 'Observer'],
    ['The ', 'Post'],
    ['', 'Press'],
    ['The ', 'Record'],
    ['', 'Record'],
    ['The ', 'Register'],
    ['The ', 'Report'],
    ['The ', 'Reporter'],
    ['The ', 'Sentinel'],
    ['The ', 'Telegram'],
    ['', 'Time'],
    ['', 'Times'],
    ['The ', 'Time'],
    ['The ', 'Times'],
    ['', 'Tribune'],
    ['The ', 'Tribune'],
  ];
  const nm4 = ['Daily', 'Daily', 'Daily', 'Weekly', 'Morning', 'Evening'];
  const nm1 = ['Apex', 'Aurora', 'Avant-Garde', 'Banner', 'Beacon', 'Break of Day', 'Breakfast', 'Bulletin', 'Business', 'Capital', 'Capitol', 'Carpe Diem', 'Citizen', 'Community', 'Courier', 'Crack of Dawn', 'Daily', 'Daily Watch', 'Dawn', 'Dawning', 'Day Break', 'Daybreak', 'Daylight', 'Dayspring', 'Diem', 'Dispatch', 'Early', 'Early Bird', 'Eastern', 'Echo', 'Emerald', 'Emporium', 'Enterprise', 'Epoch', 'Era', 'Estate', 'Evening', 'Everyday', 'Explorer', 'Express', 'Eyewitness', 'First Light', 'Foreday', 'Foundation', 'Global', 'Headline', 'Heritage', 'Independent', 'Inside', 'Insider', 'Key', 'Leading', 'Legacy', 'Liberty', 'Life', 'Local', 'Local Voice', 'Lodestar', 'Metropolitan', 'Modest', 'Monday', 'Morn', 'Morning', 'Morning Star', 'Morning Watch', 'Morningtide', 'Morrow', 'National', 'New', 'Northern', 'Nova', 'Observer', 'Paragon', 'Patriot', 'Patron', 'Pinnacle', 'Pioneer', 'Plain', 'Prime', 'Public', 'Record', 'Relay', 'Saturday', 'Society', 'Southern', 'Standard', 'Star', 'State', 'Sun', 'Sunday', 'Sunrise', 'Sunup', 'Telegraph', 'Today\'s', 'Tribune', 'Vertex', 'Vista', 'Weekly', 'Western', 'Witness', 'World', 'Zenith'];
  const nm2 = ['Account', 'Alliance', 'Apex', 'Aurora', 'Beacon', 'Breakfast', 'Bulletin', 'Business', 'Capital', 'Capitol', 'Carpe Diem', 'Chronicle', 'Chronicles', 'Citizen', 'Community', 'Connection', 'Courier', 'Day Break', 'Diem', 'Dispatch', 'Echo', 'Emerald', 'Emporium', 'Enquirer', 'Enterprise', 'Epoch', 'Era', 'Estate', 'Evening', 'Explorer', 'Express', 'Eyewitness', 'Gazette', 'Global', 'Globe', 'Headline', 'Herald', 'Heritage', 'Home', 'Independent', 'Inside', 'Insider', 'Journal', 'Leader', 'Ledger', 'Legacy', 'Liberty', 'Life', 'Local', 'Local Voice', 'Lodestar', 'Look', 'Look Back', 'Mail', 'Metropolitan', 'Morn', 'Morning Star', 'Morning Watch', 'Morningtide', 'Morrow', 'Narrative', 'National', 'Network', 'News', 'Nova', 'Observer', 'Outlook', 'Paragon', 'Patriot', 'Patron', 'Pinnacle', 'Pioneer', 'Prime', 'Record', 'Register', 'Relay', 'Report', 'Reporter', 'Review', 'Sentinel', 'Society', 'Standard', 'Star', 'Sun', 'Telegram', 'Telegraph', 'Time', 'Times', 'Tribune', 'Union', 'Unity', 'Vista', 'Witness', 'World', 'Zenith'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 6) {
      names = `${sample(nm3)[0] + sample(nm1)} ${sample(nm3)[1]}`;
    } else if (i < 8) {
      names = `${sample(nm2)} ${sample(nm4)}`;
    } else {
      names = `${sample(nm4)} ${sample(nm2)}`;
    }
    return names;
  }
}
