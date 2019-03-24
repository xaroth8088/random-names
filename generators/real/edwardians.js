export default function edwardians() {
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Aaron', 'Abraham', 'Adam', 'Alan', 'Albert', 'Alec', 'Alexander', 'Alfred', 'Allan', 'Allen', 'Amos', 'Andrew', 'Angus', 'Anthony', 'Archibald', 'Archie', 'Arnold', 'Arthur', 'Aubrey', 'Augustus', 'Austin', 'Baden', 'Basil', 'Ben', 'Benjamin', 'Bernard', 'Bert', 'Bertie', 'Bertram', 'Brinley', 'Bryn', 'Brynmor', 'Campbell', 'Carl', 'Cecil', 'Charles', 'Charley', 'Charlie', 'Christopher', 'Clarence', 'Claud', 'Claude', 'Clement', 'Clifford', 'Colin', 'Cornelius', 'Cristopher', 'Cuthbert', 'Cyril', 'Dan', 'Daniel', 'David', 'Denis', 'Dennis', 'Dick', 'Donald', 'Douglas', 'Dudley', 'Dugald', 'Duncan', 'Ebenezer', 'Edgar', 'Edmund', 'Edward', 'Edwin', 'Eli', 'Elias', 'Elijah', 'Ellis', 'Emlyn', 'Emmanuel', 'Emrys', 'Enoch', 'Ephraim', 'Eric', 'Ernest', 'Euros', 'Evan', 'Ewdin', 'Ewen', 'Felix', 'Finlay', 'Francis', 'Frank', 'Fred', 'Frederic', 'Frederick', 'Gareth', 'Gavin', 'Geoffrey', 'George', 'Gerald', 'Gilbert', 'Godfrey', 'Gordon', 'Granville', 'Griffith', 'Guy', 'Gwilym', 'Hamilton', 'Harold', 'Harris', 'Harry', 'Harvey', 'Haulfrun', 'Hector', 'Henry', 'Herbert', 'Herman', 'Horace', 'Howard', 'Hubert', 'Hugh', 'Hyman', 'Hywel', 'Ian', 'Idris', 'Isaac', 'Islwyn', 'Israel', 'Ivor', 'Jack', 'Jacob', 'James', 'Jasper', 'Jeremiah', 'Jesse', 'Jim', 'Job', 'Joe', 'John', 'Jonathan', 'Joseph', 'Joshua', 'Josiah', 'Kenneth', 'Lachlan', 'Lancelot', 'Laurence', 'Lawrence', 'Leo', 'Leonard', 'Leopold', 'Leslie', 'Levi', 'Lewis', 'Lionel', 'Llewellyn', 'Louis', 'Luke', 'Magnus', 'Malcolm', 'Mark', 'Martin', 'Matthew', 'Maurice', 'Maxwell', 'Merlin', 'Michael', 'Montague', 'Morgan', 'Morris', 'Moses', 'Murdo', 'Murdoch', 'Myer', 'Nathan', 'Nathaniel', 'Nelson', 'Nicholas', 'Noel', 'Norman', 'Oliver', 'Oscar', 'Oswald', 'Owen', 'Patrick', 'Paul', 'Percival', 'Percy', 'Peter', 'Philip', 'Ralph', 'Raymond', 'Redvers', 'Rees', 'Reginald', 'Reuben', 'Richard', 'Robert', 'Roberts', 'Roderick', 'Roger', 'Roland', 'Ronald', 'Rowland', 'Roy', 'Rupert', 'Russell', 'Sam', 'Samuel', 'Sidney', 'Simon', 'Sinclair', 'Solomon', 'Stanley', 'Stephen', 'Stewart', 'Stuart', 'Sydney', 'Terence', 'Theodore', 'Thomas', 'Timothy', 'Tom', 'Trevor', 'Valentine', 'Vernon', 'Victor', 'Vincent', 'Vivian', 'Wallace', 'Walter', 'Wilfred', 'Wilfrid', 'William', 'Willie', 'Wilson', 'Winston'];
  const nm2 = ['Acacia', 'Ada', 'Adela', 'Adelaide', 'Adelia', 'Adeline', 'Agnes', 'Alexandrina', 'Alexina', 'Alice', 'Alison', 'Alma', 'Amelia', 'Amy', 'Ann', 'Anna', 'Annabella', 'Anne', 'Annie', 'Arabella', 'Audrey', 'Aurelia', 'Ava', 'Barbara', 'Beatrice', 'Bella', 'Bertha', 'Beryl', 'Bessie', 'Betsy', 'Blanch', 'Blanche', 'Blodwen', 'Brenda', 'Briallen', 'Bridget', 'Caroline', 'Carrie', 'Catherine', 'Cecicia', 'Cecilia', 'Celia', 'Ceridwen', 'Charlotte', 'Christian', 'Christiana', 'Christina', 'Christine', 'Cicely', 'Cissie', 'Cissy', 'Clara', 'Clarice', 'Constance', 'Cordelia', 'Daffodil', 'Daisy', 'Davina', 'Dinah', 'Dora', 'Doris', 'Dorothea', 'Dorothy', 'Edith', 'Edna', 'Eileen', 'Eleanor', 'Eleri', 'Eliza', 'Elizabeth', 'Ella', 'Ellen', 'Elsie', 'Elspeth', 'Emily', 'Emma', 'Emmeline', 'Ena', 'Enid', 'Esther', 'Ethel', 'Eucharis', 'Eunice', 'Euphemia', 'Eurwen', 'Eva', 'Eveline', 'Evelyn', 'Fanny', 'Flora', 'Florence', 'Florrie', 'Flossie', 'Frances', 'Freda', 'Freesia', 'Georgina', 'Gertrude', 'Getrude', 'Gladys', 'Glenys', 'Grace', 'Gwendolen', 'Gwendoline', 'Gwenllian', 'Gwladys', 'Gwyneira', 'Hannah', 'Harriet', 'Harriett', 'Helen', 'Helena', 'Henrietta', 'Hettie', 'Hetty', 'Heulwen', 'Hilda', 'Hyacinth', 'Ida', 'Idalia', 'Ilene', 'Irene', 'Iris', 'Isabel', 'Isabella', 'Iva', 'Ivy', 'Jane', 'Janet', 'Jasmine', 'Jean', 'Jeanie', 'Jemima', 'Jennie', 'Jenny', 'Jessamine', 'Jessie', 'Joan', 'Johan', 'Johanna', 'Josephine', 'Joyce', 'Julia', 'Kate', 'Katherine', 'Kathleen', 'Katie', 'Laura', 'Lavender', 'Lavinia', 'Leah', 'Lena', 'Leonora', 'Letitia', 'Lilac', 'Lilian', 'Lilias', 'Lillian', 'Lillias', 'Lillie', 'Lilly', 'Lilwen', 'Lily', 'Linda', 'Lizzie', 'Lois', 'Lottie', 'Louie', 'Louisa', 'Louise', 'Lucilla', 'Lucy', 'Lydia', 'Mabel', 'Madeline', 'Madge', 'Maggie', 'Margaret', 'Margaretta', 'Margeret', 'Margery', 'Marguerite', 'Maria', 'Marian', 'Marie', 'Marion', 'Marjorie', 'Marjory', 'Martha', 'Mary', 'Matilda', 'Maud', 'Maude', 'Maureen', 'May', 'Mildred', 'Millicent', 'Millie', 'Mimosa', 'Minnie', 'Miriam', 'Mona', 'Monica', 'Muriel', 'Myra', 'Myrtle', 'Nancy', 'Naomi', 'Nellie', 'Nelly', 'Nerissa', 'Nora', 'Norah', 'Olive', 'Olwen', 'Ophelia', 'Orchid', 'Penelope', 'Phillis', 'Phoebe', 'Phyllis', 'Polly', 'Pretoria', 'Primula', 'Priscilla', 'Rachel', 'Rebecca', 'Rhiannon', 'Rhoda', 'Robina', 'Rosa', 'Rosalind', 'Rosanna', 'Rose', 'Rosella', 'Rosetta', 'Rosie', 'Rosina', 'Ruby', 'Ruth', 'Sarah', 'Selina', 'Sheila', 'Sophia', 'Stella', 'Susan', 'Susannah', 'Sybil', 'Sylvia', 'Teresa', 'Theresa', 'Thomasina', 'Vera', 'Veronica', 'Victoria', 'Violet', 'Wilhelmina', 'Williamina', 'Winifred', 'Winnie'];
  const nm3 = ['Aarons', 'Adams', 'Addington', 'Albury', 'Aldworth', 'Allaway', 'Allen', 'Alvey', 'Andrew', 'Andrews', 'Angove', 'Angwin', 'Argall', 'Arno', 'Arnold', 'Ashpole', 'Ashwell', 'Aslett', 'Bailey', 'Baker', 'Bandy', 'Barker', 'Barkle', 'Barks', 'Barnes', 'Bartlett', 'Bartrop', 'Bates', 'Bawden', 'Beardall', 'Beerling', 'Belcher', 'Belsey', 'Bennett', 'Bennetts', 'Bertrand', 'Bing', 'Bird', 'Blagg', 'Blake', 'Blatherwick', 'Blaxland', 'Blay', 'Blissett', 'Bodkin', 'Boness', 'Bonser', 'Booth', 'Bosley', 'Bottoms', 'Bouchard', 'Bowsher', 'Brading', 'Brakefield', 'Bran', 'Brandom', 'Brant', 'Bray', 'Breed', 'Breedon', 'Brenchley', 'Brightman', 'Brisley', 'Brockett', 'Brown', 'Brum', 'Buckett', 'Buckner', 'Bunker', 'Burgess', 'Burton', 'Butler', 'Bywaters', 'Camburn', 'Cantor', 'Carhart', 'Carter', 'Cavalier', 'Chad', 'Chadbourne', 'Chambers', 'Chapman', 'Cheater', 'Chegwidden', 'Chenoweth', 'Chesterman', 'Cheverton', 'Chittenden', 'Chiverton', 'Clark', 'Clarke', 'Coast', 'Cole', 'Collins', 'Cook', 'Cooper', 'Copas', 'Costa', 'Costen', 'Couchman', 'Course', 'Covington', 'Cox', 'Cradduck', 'Crayford', 'Creamer', 'Cropp', 'Curnow', 'Cushway', 'Dacosta', 'Dadson', 'Daft', 'Danton', 'Darrington', 'Davey', 'Davis', 'Day', 'Daykin', 'Defries', 'Dence', 'Devereux', 'Dilley', 'Dimes', 'Dimmick', 'Downer', 'Dunnings', 'Dunstan', 'Dupree', 'Durling', 'Earll', 'Easom', 'Eastes', 'Eddy', 'Edwards', 'Eggleton', 'Ellingham', 'Emerton', 'Engel', 'Epps', 'Eustice', 'Evans', 'Ewell', 'Fagg', 'Fairey', 'Figgins', 'File', 'Fisher', 'Fitzwater', 'Fletcher', 'Flinders', 'Flitter', 'Ford', 'Fossey', 'Foster', 'Freemantle', 'Frid', 'Fuchs', 'Fugler', 'Fulker', 'Fullagar', 'Gadsden', 'Gamblin', 'Gambrill', 'Gammons', 'Garcia', 'Garner', 'Gatrell', 'Gentle', 'George', 'Gilbert', 'Giles', 'Gillet', 'Goddard', 'Goldberg', 'Goldstein', 'Golly', 'Goodheart', 'Goodman', 'Goodspeed', 'Green', 'Greenstreet', 'Grundon', 'Halfacre', 'Hall', 'Hallam', 'Hamblin', 'Hancock', 'Harding', 'Hardy', 'Harpham', 'Harris', 'Harrison', 'Harryman', 'Harston', 'Harvey', 'Hatto', 'Hawkins', 'Hayles', 'Hearson', 'Henman', 'Hermann', 'Hermon', 'Herridge', 'Herrod', 'Hibben', 'Hichens', 'Hickling', 'Hicks', 'Hill', 'Hills', 'Hillyard', 'Hocking', 'Holdaway', 'Hollow', 'Holmes', 'Holness', 'Hooper', 'Hopewell', 'Hosking', 'Hosmer', 'Hougham', 'Huckle', 'Huckstep', 'Hunt', 'Huskinson', 'Hyams', 'Illsley', 'Jacka', 'Jackson', 'James', 'Janes', 'Jellis', 'Jenkin', 'Jephson', 'Johns', 'Johnson', 'Jones', 'Josey', 'Kahn', 'Keech', 'Keep', 'Keeton', 'Kesby', 'Kestle', 'Kill', 'King', 'Kirk', 'Kitcher', 'Klein', 'Kneller', 'Knife', 'Knight', 'Knowlton', 'Koster', 'Laity', 'Lale', 'Lambourne', 'Lampshire', 'Langsdale', 'Larcher', 'Lawrence', 'Lawry', 'Lazarus', 'Leal', 'Lee', 'Lemar', 'Levene', 'Levy', 'Lewis', 'Liddiard', 'Liddicoat', 'Limb', 'Linger', 'Linington', 'Lion', 'Lipman', 'Littlefield', 'Lobb', 'Lovejoy', 'Lowe', 'Luker', 'Lyford', 'Lynds', 'Maddern', 'Magnus', 'Marriott', 'Marsh', 'Marshall', 'Martell', 'Martin', 'Matthews', 'Mattingley', 'May', 'Mayfield', 'Medlin', 'Mellors', 'Mendoza', 'Merrills', 'Mew', 'Michaels', 'Mildenhall', 'Miller', 'Mills', 'Minear', 'Minney', 'Mitchell', 'Moore', 'Mooring', 'Morley', 'Morris', 'Mulford', 'Munks', 'Murden', 'Murrish', 'Must', 'Mycroft', 'Nailer', 'Newman', 'Nicholls', 'Northway', 'Northwood', 'Oakland', 'Odell', 'Odgers', 'Oliver', 'Olney', 'Oppy', 'Outen', 'Page', 'Painton', 'Paling', 'Palmer', 'Pardey', 'Pare', 'Parker', 'Pascoe', 'Pates', 'Paulson', 'Payne', 'Pearce', 'Pemble', 'Pembleton', 'Pembroke', 'Penna', 'Phillips', 'Pinnick', 'Pocock', 'Polack', 'Popkin', 'Posner', 'Pounds', 'Prater', 'Pratt', 'Prevost', 'Primmer', 'Prior', 'Prisk', 'Privett', 'Puddephatt', 'Purser', 'Quelch', 'Quince', 'Rackett', 'Rackley', 'Ragsdale', 'Rampton', 'Rayfield', 'Reddish', 'Redgate', 'Reis', 'Reseigh', 'Richards', 'Richardson', 'Richens', 'Rick', 'Rickman', 'Rigley', 'Roberts', 'Robinson', 'Rogers', 'Roscorla', 'Rosenburg', 'Rosenthal', 'Rosewall', 'Rosier', 'Rosson', 'Rowe', 'Russell', 'Rutt', 'Salomon', 'Sandow', 'Sandry', 'Sara', 'Saunders', 'Scott', 'Scovell', 'Searson', 'Sellen', 'Semmens', 'Sevier', 'Sharp', 'Shaw', 'Shelvey', 'Shutler', 'Simpson', 'Sincock', 'Smith', 'Smitherman', 'Snellgrove', 'Solomons', 'Spanner', 'Spanswick', 'Spargo', 'Spencer', 'Spillett', 'Spray', 'Stapleton', 'Starks', 'Startup', 'Stay', 'Stephens', 'Steptoe', 'Stevens', 'Stevenson', 'Stickels', 'Stickles', 'Strout', 'Strutton', 'Sulley', 'Swadling', 'Symons', 'Tamblyn', 'Taylor', 'Temby', 'Thomas', 'Thompson', 'Thrall', 'Tier', 'Tingey', 'Titchener', 'Titcomb', 'Tolfree', 'Tomlinson', 'Tompkins', 'Tonkin', 'Towle', 'Towlson', 'Treadaway', 'Treadway', 'Trebilcock', 'Tregoning', 'Treloar', 'Trembath', 'Trethewey', 'Trevarthen', 'Trevorrow', 'Trice', 'Troke', 'Trudgeon', 'Tull', 'Turner', 'Turney', 'Udy', 'Uren', 'Urry', 'Voce', 'Walker', 'Ward', 'Warren', 'Watson', 'Watts', 'Webb', 'Weil', 'Wellard', 'Wells', 'West', 'Westall', 'Wheat', 'Wheeler', 'Whitcher', 'White', 'Whitt', 'Whittemore', 'Widdowson', 'Wildma', 'Wilkinson', 'Williams', 'Wills', 'Wilson', 'Witcher', 'Wood', 'Wooding', 'Woodley', 'Woodmore', 'Wraight', 'Wright', 'Young'];


  i = Math.floor(Math.random() * 10);
  {
    rnd2 = Math.floor(Math.random() * nm3.length);
    nm3.splice(rnd2, 1);
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm2.length);
      names = `${nm2[rnd]} ${nm3[rnd2]}`;
      nm2.splice(rnd, 1);
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      names = `${nm1[rnd]} ${nm3[rnd2]}`;
      nm1.splice(rnd, 1);
    }
    return names;
  }
}
