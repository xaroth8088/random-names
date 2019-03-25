export default function humans() {
  let names;
  let rnd;
  let rnd2;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Aaron', 'Adam', 'Aidan', 'Aiden', 'Alex', 'Alexander', 'Alfie', 'Andrew', 'Anthony', 'Archie', 'Arthur', 'Ashton', 'Bailey', 'Ben', 'Benjamin', 'Billy', 'Blake', 'Bobby', 'Bradley', 'Brandon', 'Caleb', 'Callum', 'Cameron', 'Charles', 'Charlie', 'Christopher', 'Cody', 'Connor', 'Corey', 'Daniel', 'David', 'Declan', 'Dexter', 'Dominic', 'Dylan', 'Edward', 'Elliot', 'Ellis', 'Ethan', 'Evan', 'Ewan', 'Finlay', 'Finley', 'Frankie', 'Freddie', 'Frederick', 'Gabriel', 'George', 'Harley', 'Harrison', 'Harry', 'Harvey', 'Hayden', 'Henry', 'Isaac', 'Jack', 'Jackson', 'Jacob', 'Jake', 'James', 'Jamie', 'Jay', 'Jayden', 'Jenson', 'Joe', 'Joel', 'John', 'Jonathan', 'Jordan', 'Joseph', 'Josh', 'Joshua', 'Jude', 'Kai', 'Kayden', 'Kian', 'Kieran', 'Kyle', 'Leo', 'Leon', 'Lewis', 'Liam', 'Logan', 'Louie', 'Louis', 'Luca', 'Lucas', 'Luke', 'Mason', 'Matthew', 'Max', 'Michael', 'Morgan', 'Nathan', 'Nicholas', 'Noah', 'Oliver', 'Ollie', 'Oscar', 'Owen', 'Patrick', 'Peter', 'Reece', 'Reuben', 'Rhys', 'Riley', 'Robert', 'Rory', 'Ryan', 'Sam', 'Samuel', 'Scott', 'Sean', 'Sebastian', 'Spencer', 'Stanley', 'Taylor', 'Theo', 'Thomas', 'Toby', 'Tom', 'Tommy', 'Tyler', 'William', 'Zac', 'Zachary', 'Zak'];
  const nm2 = ['Abbie', 'Abby', 'Abigail', 'Aimee', 'Alexandra', 'Alice', 'Alicia', 'Alisha', 'Amber', 'Amelia', 'Amelie', 'Amy', 'Anna', 'Ava', 'Bella', 'Bethany', 'Brooke', 'Caitlin', 'Cerys', 'Charlie', 'Charlotte', 'Chelsea', 'Chloe', 'Courtney', 'Daisy', 'Danielle', 'Demi', 'Eleanor', 'Eliza', 'Elizabeth', 'Ella', 'Ellie', 'Eloise', 'Elsie', 'Emilia', 'Emily', 'Emma', 'Erin', 'Esme', 'Eva', 'Eve', 'Evelyn', 'Evie', 'Faith', 'Freya', 'Georgia', 'Georgina', 'Grace', 'Gracie', 'Hannah', 'Harriet', 'Heidi', 'Hollie', 'Holly', 'Imogen', 'Isabel', 'Isabella', 'Isabelle', 'Isla', 'Isobel', 'Jade', 'Jasmine', 'Jennifer', 'Jessica', 'Jodie', 'Julia', 'Kate', 'Katherine', 'Katie', 'Kayla', 'Kayleigh', 'Keira', 'Lacey', 'Lara', 'Laura', 'Lauren', 'Layla', 'Leah', 'Lexi', 'Lexie', 'Libby', 'Lilly', 'Lily', 'Lola', 'Louise', 'Lucy', 'Lydia', 'Maddison', 'Madeleine', 'Madison', 'Maisie', 'Maisy', 'Maria', 'Martha', 'Matilda', 'Maya', 'Megan', 'Melissa', 'Mia', 'Millie', 'Mollie', 'Molly', 'Morgan', 'Mya', 'Naomi', 'Natasha', 'Niamh', 'Nicole', 'Olivia', 'Paige', 'Phoebe', 'Poppy', 'Rachel', 'Rebecca', 'Rose', 'Rosie', 'Ruby', 'Samantha', 'Sara', 'Sarah', 'Scarlett', 'Shannon', 'Sienna', 'Skye', 'Sofia', 'Sophia', 'Sophie', 'Summer', 'Tegan', 'Tia', 'Tilly', 'Victoria', 'Willow', 'Yasmin', 'Zara', 'Zoe'];
  const nm3 = ['Abram', 'Acton', 'Addington', 'Adlam', 'Ainsworth', 'Alby', 'Alden', 'Allerton', 'Alston', 'Altham', 'Alvingham', 'Anderton', 'Appleton', 'Asheton', 'Ashley', 'Ashton', 'Astley', 'Atherton', 'Atterton', 'Barclay', 'Barlow', 'Barney', 'Barrie', 'Barton', 'Beasant', 'Beckwith', 'Benson', 'Bentham', 'Bentley', 'Berkeley', 'Beverly', 'Bing', 'Birkenhead', 'Blackwood', 'Blakemore', 'Blankley', 'Blythe', 'Bourne', 'Bradford', 'Bradley', 'Bradly', 'Bradshaw', 'Brady', 'Brandon', 'Branson', 'Braxton', 'Breeden', 'Brent', 'Bristol', 'Brooks', 'Brown', 'Browning', 'Brownrigg', 'Buckley', 'Bunce', 'Burbridge', 'Burlingame', 'Burton', 'Bush', 'Byron', 'Camden', 'Carlisle', 'Carlton', 'Carlyle', 'Charlton', 'Chatham', 'Cheek', 'Chester', 'Cholmondeley', 'Churchill', 'Clapham', 'Clare', 'Claridge', 'Clark', 'Clayden', 'Clayton', 'Clemons', 'Clifford', 'Clifton', 'Clinton', 'Clive', 'Colby', 'Colton', 'Compton', 'Coombs', 'Cooper', 'Copeland', 'Cotton', 'Crawford', 'Crompton', 'Cromwell', 'Crowder', 'Crutchley', 'Currington', 'Dalton', 'Darby', 'Davenport', 'Dawson', 'Dayton', 'Deighton', 'Denholm', 'Digby', 'Dryden', 'Dudley', 'Duke', 'Dukes', 'Earle', 'Eastaughffe', 'Eastoft', 'Elton', 'Emsworth', 'England', 'Farnham', 'Fawcett', 'Fisc', 'Fiske', 'Fletcher', 'Foy', 'Fulton', 'Gale', 'Garfield', 'Garrick', 'Garside', 'Garthside', 'Gartside', 'Gladstone', 'Godwin', 'Goodwin', 'Graeme', 'Graham', 'Gresham', 'Hackney', 'Hailey', 'Hale', 'Haley', 'Hallewell', 'Hamet', 'Hamilton', 'Hammett', 'Hampton', 'Harding', 'Harley', 'Harrington', 'Harrison', 'Hartford', 'Hastings', 'Hayden', 'Hayes', 'Hayhurst', 'Hayley', 'Helton', 'Hildom', 'Holt', 'Holton', 'Home', 'Hornsby', 'Huckabee', 'Huxley', 'Johnson', 'Keats', 'Kelsey', 'Kendal', 'Kendall', 'Kent', 'Kimberley', 'Kimberly', 'Kirby', 'Knotley', 'Knottley', 'Lancaster', 'Landon', 'Langdon', 'Langley', 'Law', 'Lea', 'Lee', 'Leighton', 'Lester', 'Lincoln', 'Lindsay', 'Lindsey', 'Livingstone', 'Luxford', 'Mabbott', 'Marlowe', 'Melling', 'Melton', 'Mendenhall', 'Merton', 'Middleton', 'Mildenhall', 'Milton', 'Mitchell', 'Morley', 'Morton', 'Myerscough', 'Nash', 'Netley', 'Newberry', 'Newbery', 'Newbury', 'Nibley', 'Noonan', 'Norton', 'Notleigh', 'Notley', 'Nottley', 'Nunnally', 'Nutlea', 'Nutlee', 'Oakley', 'Ogden', 'Oldham', 'Outerbridge', 'Paddle', 'Paddley', 'Padley', 'Payton', 'Peddle', 'Penney', 'Penny', 'Perry', 'Peyton', 'Pickering', 'Pinkerton', 'Prescott', 'Presley', 'Preston', 'Ramsay', 'Ramsey', 'Read', 'Reed', 'Reeve', 'Reeves', 'Reid', 'Remington', 'Richmond', 'Ridley', 'Riley', 'Rischer', 'Rivers', 'Rodney', 'Roscoe', 'Rowley', 'Royal', 'Royston', 'Rudge', 'Rudges', 'Rutherford', 'Rutland', 'Rylan', 'Sagar', 'Sampson', 'Sharman', 'Shearman', 'Shelby', 'Sheldon', 'Shelley', 'Shelly', 'Sherman', 'Sherwood', 'Shirley', 'Shurman', 'Sidney', 'Smit', 'Smith', 'Smithe', 'Smither', 'Smithers', 'Smithies', 'Smithy', 'Smyth', 'Smythe', 'Snape', 'Snowdon', 'Soames', 'Southey', 'Spalding', 'Spaulding', 'Spooner', 'Springfield', 'Stafford', 'Stamper', 'Stampes', 'Stanford', 'Stanley', 'Stansfield', 'Stanton', 'Stevens', 'Stevenson', 'Stonebridge', 'Stratford', 'Sutherland', 'Sutton', 'Swail', 'Swailes', 'Swale', 'Swales', 'Sweat', 'Sweet', 'Sweete', 'Swet', 'Swett', 'Sydney', 'Tattersall', 'Thackeray', 'Thorne', 'Thornton', 'Thorp', 'Thorpe', 'Tindall', 'Torp', 'Townend', 'Townsend', 'Trollope', 'Twynam', 'Tyndall', 'Upton', 'Ward', 'Watt', 'Webb', 'Whatley', 'Wheatleigh', 'Wheatley', 'Whiteley', 'Whitley', 'Whitney', 'Williams', 'Wither', 'Withers', 'Wyther', 'Yardley', 'Yeardley'];
  const nm4 = ['Aaren', 'Addison', 'Aiden', 'Alex', 'Alexis', 'Ali', 'Angel', 'Ash', 'Ashley', 'Ashton', 'Aubrey', 'Avery', 'Bailey', 'Bennie', 'Bev', 'Billie', 'Billy', 'Blair', 'Blake', 'Bret', 'Brett', 'Brice', 'Brook', 'Brynn', 'Caden', 'Cameron', 'Carmen', 'Carol', 'Casey', 'Charlie', 'Chris', 'Clem', 'Cory', 'Dane', 'Danni', 'Danny', 'Denny', 'Drew', 'Eli', 'Elliot', 'Emerson', 'Erin', 'Fran', 'Frankie', 'Franky', 'Gabby', 'Gabe', 'Gail', 'Gale', 'Gene', 'Glen', 'Glenn', 'Haiden', 'Harley', 'Harper', 'Hayden', 'Jackie', 'Jaden', 'Jaime', 'Jamie', 'Jess', 'Jesse', 'Jessie', 'Jo', 'Jody', 'Jordan', 'Jude', 'Justice', 'Kai', 'Kerry', 'Kiran', 'Kit', 'Kris', 'Lane', 'Lee', 'Leigh', 'Lesley', 'Leslie', 'Logan', 'Lynn', 'Maddox', 'Marley', 'Mason', 'Mel', 'Mell', 'Morgan', 'Nicky', 'Noel', 'Phoenix', 'Quinn', 'Ray', 'Raylee', 'Reed', 'Reggie', 'Rene', 'Riley', 'River', 'Robin', 'Rory', 'Rowan', 'Rudy', 'Ryan', 'Sam', 'Sammy', 'Shay', 'Sidney', 'Silver', 'Skye', 'Skylar', 'Skyler', 'Steff', 'Tanner', 'Taylor', 'Terry', 'Tyler', 'Val', 'Vic', 'Will', 'Willy'];
  {
    rnd2 = Math.floor(Math.random() * nm3.length);
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm2.length);
      names = `${nm2[rnd]} ${nm3[rnd2]}`;
      nm2.splice(rnd, 1);
    } else if (type === 2) {
      rnd = Math.floor(Math.random() * nm4.length);
      names = `${nm4[rnd]} ${nm3[rnd2]}`;
      nm4.splice(rnd, 1);
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      names = `${nm1[rnd]} ${nm3[rnd2]}`;
      nm1.splice(rnd, 1);
    }
    nm3.splice(rnd2, 1);
    return names;
  }
}
