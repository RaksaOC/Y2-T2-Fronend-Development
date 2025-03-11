const quizzes = [
  {
    image: "./images/quiz.png",
    name: "Famous Movie Quotes Quiz",
    questions: [
      {
        question: "Who said 'May the Force be with you'?",
        choices: ["Han Solo", "Luke Skywalker", "Obi-Wan Kenobi", "Yoda"],
        correctAnswer: "Obi-Wan Kenobi",
      },
      {
        question: "Who said 'I’m gonna make him an offer he can’t refuse'?",
        choices: [
          "Michael Corleone",
          "Vito Corleone",
          "Tom Hagen",
          "Johnny Fontane",
        ],
        correctAnswer: "Vito Corleone",
      },
      {
        question: "Who said 'There’s no place like home'?",
        choices: ["Dorothy", "Glinda", "The Wicked Witch", "The Scarecrow"],
        correctAnswer: "Dorothy",
      },
      {
        question: "Who said 'I’ll be back'?",
        choices: ["RoboCop", "The Terminator", "John Wick", "Rocky"],
        correctAnswer: "The Terminator",
      },
      {
        question: "Who said 'You can’t handle the truth!'?",
        choices: [
          "Jack Nicholson",
          "Tom Cruise",
          "Nicholas Cage",
          "Morgan Freeman",
        ],
        correctAnswer: "Jack Nicholson",
      },
      {
        question: "Who said 'I feel the need – the need for speed'?",
        choices: ["Tom Cruise", "Val Kilmer", "Brad Pitt", "John Travolta"],
        correctAnswer: "Tom Cruise",
      },
      {
        question: "Who said 'Life is like a box of chocolates'?",
        choices: [
          "Tom Hanks",
          "Morgan Freeman",
          "Danny DeVito",
          "Matthew McConaughey",
        ],
        correctAnswer: "Tom Hanks",
      },
      {
        question: "Who said 'I see dead people'?",
        choices: [
          "Bruce Willis",
          "M. Night Shyamalan",
          "Hayley Joel Osment",
          "Will Smith",
        ],
        correctAnswer: "Hayley Joel Osment",
      },
      {
        question: "Who said 'Why so serious?'?",
        choices: ["Joker", "Batman", "Harley Quinn", "Two-Face"],
        correctAnswer: "Joker",
      },
      {
        question: "Who said 'You had me at hello'?",
        choices: [
          "Julia Roberts",
          "Tom Hanks",
          "Dustin Hoffman",
          "Renée Zellweger",
        ],
        correctAnswer: "Renée Zellweger",
      },
      {
        question: "Who said 'There’s no place like home'?",
        choices: ["Glinda", "The Wicked Witch", "The Tin Man", "Dorothy"],
        correctAnswer: "Dorothy",
      },
      {
        question: "Who said 'I am the one who knocks'?",
        choices: [
          "Walter White",
          "Jesse Pinkman",
          "Hank Schrader",
          "Saul Goodman",
        ],
        correctAnswer: "Walter White",
      },
      {
        question: "Who said 'You talkin’ to me?'?",
        choices: ["Al Pacino", "Robert De Niro", "Joe Pesci", "Jack Nicholson"],
        correctAnswer: "Robert De Niro",
      },
      {
        question: "Who said 'To infinity and beyond!'?",
        choices: ["Buzz Lightyear", "Woody", "Mr. Potato Head", "Rex"],
        correctAnswer: "Buzz Lightyear",
      },
      {
        question: "Who said 'Here’s looking at you, kid'?",
        choices: [
          "Clark Gable",
          "Humphrey Bogart",
          "Marlon Brando",
          "Gary Cooper",
        ],
        correctAnswer: "Humphrey Bogart",
      },
    ],
  },
  {
    image: "./images/quiz.png",
    name: "Math Quiz",
    questions: [
      {
        question: "What is 5 + 3?",
        choices: ["6", "7", "8", "9"],
        correctAnswer: "8",
      },
      {
        question: "What is 9 * 6?",
        choices: ["54", "60", "56", "66"],
        correctAnswer: "54",
      },
      {
        question: "What is 15 - 7?",
        choices: ["6", "8", "9", "10"],
        correctAnswer: "8",
      },
      {
        question: "What is 100 / 4?",
        choices: ["20", "25", "30", "35"],
        correctAnswer: "25",
      },
    ],
  },
  {
    image: "./images/quiz.png",
    name: "Geography Quiz",
    questions: [
      {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin", "Rome"],
        correctAnswer: "Paris",
      },
      {
        question: "Which is the largest continent?",
        choices: ["Africa", "Asia", "Europe", "North America"],
        correctAnswer: "Asia",
      },
      {
        question: "Which is the longest river in the world?",
        choices: [
          "Amazon River",
          "Nile River",
          "Yangtze River",
          "Mississippi River",
        ],
        correctAnswer: "Amazon River",
      },
      {
        question: "What is the largest country by area?",
        choices: ["Russia", "Canada", "China", "United States"],
        correctAnswer: "Russia",
      },
    ],
  },
  {
    image: "./images/quiz.png",
    name: "Superheroes Trivia",
    questions: [
      {
        question: "Who is the alter ego of Batman?",
        choices: ["Bruce Wayne", "Clark Kent", "Peter Parker", "Tony Stark"],
        correctAnswer: "Bruce Wayne",
      },
      {
        question: "Who is the king of Wakanda?",
        choices: ["Iron Man", "Black Panther", "Captain America", "Thor"],
        correctAnswer: "Black Panther",
      },
      {
        question: "Who is Spider-Man’s real name?",
        choices: ["Peter Parker", "Bruce Banner", "Clark Kent", "Barry Allen"],
        correctAnswer: "Peter Parker",
      },
      {
        question: "What is the real name of the Hulk?",
        choices: ["Bruce Wayne", "Clark Kent", "Bruce Banner", "Tony Stark"],
        correctAnswer: "Bruce Banner",
      },
      {
        question: "What is Wonder Woman’s weapon of choice?",
        choices: [
          "Lasso of Truth",
          "Hammer of Thor",
          "Shield of Captain America",
          "Sword of Justice",
        ],
        correctAnswer: "Lasso of Truth",
      },
      {
        question: "What city does Batman protect?",
        choices: ["Gotham", "Metropolis", "Star City", "Central City"],
        correctAnswer: "Gotham",
      },
      {
        question: "Who is known as the 'Fastest Man Alive'?",
        choices: ["The Flash", "Quicksilver", "Superman", "Green Lantern"],
        correctAnswer: "The Flash",
      },
      {
        question: "What is the name of Thor's hammer?",
        choices: ["Mjolnir", "Stormbreaker", "Thanos", "Gungnir"],
        correctAnswer: "Mjolnir",
      },
      {
        question: "What is Captain America’s shield made of?",
        choices: ["Vibranium", "Adamantium", "Steel", "Titanium"],
        correctAnswer: "Vibranium",
      },
      {
        question: "Who is Iron Man’s main antagonist?",
        choices: ["Loki", "Ultron", "Thanos", "Mandarin"],
        correctAnswer: "Mandarin",
      },
      {
        question: "Which superhero is also known as 'The Merc with a Mouth'?",
        choices: ["Deadpool", "Wolverine", "Iron Fist", "Punisher"],
        correctAnswer: "Deadpool",
      },
      {
        question: "What is the name of the Green Lantern’s power ring?",
        choices: [
          "Emerald Ring",
          "Lantern Ring",
          "Power Ring",
          "Infinity Ring",
        ],
        correctAnswer: "Power Ring",
      },
      {
        question: "Who is the leader of the X-Men?",
        choices: ["Professor X", "Magneto", "Wolverine", "Cyclops"],
        correctAnswer: "Professor X",
      },
      {
        question: "Who is the villain in 'Black Panther'?",
        choices: ["Thanos", "Ultron", "Killmonger", "Loki"],
        correctAnswer: "Killmonger",
      },
      {
        question: "What metal is Wolverine’s claws made of?",
        choices: ["Titanium", "Iron", "Adamantium", "Steel"],
        correctAnswer: "Adamantium",
      },
    ],
  },
  {
    image: "./images/quiz.png",
    name: "Animal Facts Quiz",
    questions: [
      {
        question: "Which is the largest mammal on Earth?",
        choices: ["Elephant", "Whale", "Giraffe", "Hippo"],
        correctAnswer: "Whale",
      },
      {
        question: "What is the fastest land animal?",
        choices: ["Lion", "Cheetah", "Tiger", "Leopard"],
        correctAnswer: "Cheetah",
      },
      {
        question: "Which animal is known as the King of the Jungle?",
        choices: ["Lion", "Tiger", "Bear", "Elephant"],
        correctAnswer: "Lion",
      },
      {
        question: "Which animal is the largest reptile?",
        choices: ["Crocodile", "Komodo Dragon", "Iguana", "Alligator"],
        correctAnswer: "Crocodile",
      },
      {
        question: "Which is the largest bird?",
        choices: ["Ostrich", "Eagle", "Penguin", "Emu"],
        correctAnswer: "Ostrich",
      },
      {
        question: "Which mammal is known for its ability to fly?",
        choices: ["Bat", "Squirrel", "Flying Squirrel", "Flying Fox"],
        correctAnswer: "Bat",
      },
      {
        question: "What animal is known for its black and white stripes?",
        choices: ["Zebra", "Tiger", "Leopard", "Giraffe"],
        correctAnswer: "Zebra",
      },
      {
        question: "Which animal can sleep for up to 3 years?",
        choices: ["Sloth", "Bear", "Tortoise", "Koala"],
        correctAnswer: "Tortoise",
      },
      {
        question: "Which animal is the largest type of bear?",
        choices: ["Polar Bear", "Grizzly Bear", "Brown Bear", "Black Bear"],
        correctAnswer: "Polar Bear",
      },
      {
        question: "Which animal is famous for having a long neck?",
        choices: ["Giraffe", "Elephant", "Camel", "Horse"],
        correctAnswer: "Giraffe",
      },
      {
        question: "Which animal is known for changing colors?",
        choices: ["Chameleon", "Octopus", "Cuttlefish", "Squid"],
        correctAnswer: "Chameleon",
      },
      {
        question: "What is the only mammal capable of true flight?",
        choices: ["Bat", "Flying Squirrel", "Pangolin", "Bird"],
        correctAnswer: "Bat",
      },
      {
        question: "Which animal can live without water the longest?",
        choices: ["Camel", "Koala", "Meerkat", "Tortoise"],
        correctAnswer: "Camel",
      },
      {
        question: "Which animal can live in space?",
        choices: ["Tardigrade", "Cockroach", "Rabbit", "Goat"],
        correctAnswer: "Tardigrade",
      },
      {
        question: "What is the largest species of shark?",
        choices: [
          "Great White Shark",
          "Whale Shark",
          "Tiger Shark",
          "Hammerhead Shark",
        ],
        correctAnswer: "Whale Shark",
      },
    ],
  },
  {
    image: "./images/quiz.png",
    name: "Famous Landmarks Around the World",
    questions: [
      {
        question: "Where is the Eiffel Tower located?",
        choices: ["Paris", "London", "Rome", "New York"],
        correctAnswer: "Paris",
      },
      {
        question: "Which city is home to the Colosseum?",
        choices: ["Athens", "Rome", "Cairo", "Dubai"],
        correctAnswer: "Rome",
      },
      {
        question: "What is the famous statue in Rio de Janeiro?",
        choices: [
          "Christ the Redeemer",
          "David",
          "The Thinker",
          "Venus de Milo",
        ],
        correctAnswer: "Christ the Redeemer",
      },
      {
        question: "Where can you find the Great Wall?",
        choices: ["China", "India", "Egypt", "Greece"],
        correctAnswer: "China",
      },
      {
        question: "Which landmark is located in India and made of marble?",
        choices: [
          "Eiffel Tower",
          "Taj Mahal",
          "Pyramids of Giza",
          "Stonehenge",
        ],
        correctAnswer: "Taj Mahal",
      },
      {
        question: "Where is Machu Picchu located?",
        choices: ["Brazil", "Mexico", "Peru", "Argentina"],
        correctAnswer: "Peru",
      },
      {
        question: "Which iconic building is found in Sydney, Australia?",
        choices: [
          "Sydney Opera House",
          "Sydney Tower",
          "Melbourne Tower",
          "Harbour Bridge",
        ],
        correctAnswer: "Sydney Opera House",
      },
      {
        question: "Where can you find the Statue of Liberty?",
        choices: [
          "Washington D.C.",
          "New York",
          "Los Angeles",
          "San Francisco",
        ],
        correctAnswer: "New York",
      },
      {
        question: "Which city has the famous Big Ben clock tower?",
        choices: ["London", "Paris", "Berlin", "Madrid"],
        correctAnswer: "London",
      },
      {
        question: "What is the name of the giant stone heads in Easter Island?",
        choices: ["Moai", "Inca", "Totem", "Obelisk"],
        correctAnswer: "Moai",
      },
      {
        question: "Which structure is located in Cairo, Egypt?",
        choices: [
          "Eiffel Tower",
          "Colosseum",
          "Great Pyramid of Giza",
          "Acropolis",
        ],
        correctAnswer: "Great Pyramid of Giza",
      },
      {
        question: "Which iconic landmark is found in Paris?",
        choices: ["Eiffel Tower", "Louvre Museum", "Colosseum", "Big Ben"],
        correctAnswer: "Eiffel Tower",
      },
      {
        question: "Where is the Leaning Tower of Pisa?",
        choices: ["Italy", "Spain", "Germany", "Greece"],
        correctAnswer: "Italy",
      },
      {
        question: "Where is the Great Barrier Reef located?",
        choices: ["Australia", "Japan", "Hawaii", "Bahamas"],
        correctAnswer: "Australia",
      },
      {
        question: "Which city has the famous Alhambra Palace?",
        choices: ["Seville", "Lisbon", "Paris", "Granada"],
        correctAnswer: "Granada",
      },
      {
        question: "Which famous structure is located in Agra, India?",
        choices: ["Taj Mahal", "Petra", "Colosseum", "Parthenon"],
        correctAnswer: "Taj Mahal",
      },
    ],
  },
  {
    image: "./images/quiz.png",
    name: "Ultimate Food Quiz",
    questions: [
      {
        question: "What is the main ingredient in guacamole?",
        choices: ["Tomato", "Avocado", "Lime", "Onion"],
        correctAnswer: "Avocado",
      },
      {
        question: "Which country is famous for sushi?",
        choices: ["China", "Japan", "Thailand", "Korea"],
        correctAnswer: "Japan",
      },
      {
        question: "What is the key ingredient in hummus?",
        choices: ["Chickpeas", "Beans", "Lentils", "Tomatoes"],
        correctAnswer: "Chickpeas",
      },
      {
        question:
          "Which fruit is known for being the 'king of fruits' in Southeast Asia?",
        choices: ["Durian", "Mango", "Papaya", "Banana"],
        correctAnswer: "Durian",
      },
      {
        question: "Which food is made from milk and often used in pizza?",
        choices: ["Cheese", "Yogurt", "Butter", "Cream"],
        correctAnswer: "Cheese",
      },
      {
        question: "Which country is known for its pasta dishes?",
        choices: ["Italy", "Mexico", "France", "Greece"],
        correctAnswer: "Italy",
      },
      {
        question: "What type of fruit is a mango?",
        choices: ["Citrus", "Stone fruit", "Berry", "Tropical"],
        correctAnswer: "Tropical",
      },
      {
        question: "Which of these is a type of Italian bread?",
        choices: ["Baguette", "Ciabatta", "Naan", "Pita"],
        correctAnswer: "Ciabatta",
      },
      {
        question: "Which cheese is typically used in Greek salads?",
        choices: ["Cheddar", "Mozzarella", "Feta", "Parmesan"],
        correctAnswer: "Feta",
      },
      {
        question: "Which of these fruits is yellow when ripe?",
        choices: ["Apple", "Banana", "Grapefruit", "Peach"],
        correctAnswer: "Banana",
      },
      {
        question:
          "Which dessert is made with eggs, sugar, and caramelized sugar?",
        choices: ["Tiramisu", "Panna Cotta", "Crème Brûlée", "Baklava"],
        correctAnswer: "Crème Brûlée",
      },
      {
        question:
          "Which food is often served in a shell and eaten raw in sushi?",
        choices: ["Oysters", "Clams", "Lobster", "Scallops"],
        correctAnswer: "Oysters",
      },
      {
        question: "Which country is famous for tacos?",
        choices: ["USA", "France", "Mexico", "Italy"],
        correctAnswer: "Mexico",
      },
      {
        question: "What fruit is known for its high vitamin C content?",
        choices: ["Apple", "Strawberry", "Orange", "Watermelon"],
        correctAnswer: "Orange",
      },
      {
        question: "Which dish is made with fried dough, sugar, and cinnamon?",
        choices: ["Donuts", "Brownies", "Muffins", "Pancakes"],
        correctAnswer: "Donuts",
      },
      {
        question: "What type of food is sushi?",
        choices: ["Dessert", "Soup", "Fish-based", "Pasta"],
        correctAnswer: "Fish-based",
      },
    ],
  },
  {
    image: "./images/quiz.png",
    name: "Music Legends Trivia",
    questions: [
      {
        question: "Who is known as the 'King of Pop'?",
        choices: [
          "Elvis Presley",
          "Michael Jackson",
          "Prince",
          "Freddie Mercury",
        ],
        correctAnswer: "Michael Jackson",
      },
      {
        question:
          "Which band is famous for songs like 'Hey Jude' and 'Let It Be'?",
        choices: ["The Rolling Stones", "The Beatles", "Queen", "Led Zeppelin"],
        correctAnswer: "The Beatles",
      },
      {
        question:
          "Which famous female singer is known for 'Rolling in the Deep'?",
        choices: ["Adele", "Beyoncé", "Lady Gaga", "Rihanna"],
        correctAnswer: "Adele",
      },
      {
        question: "Who is the lead singer of Queen?",
        choices: [
          "Mick Jagger",
          "Freddie Mercury",
          "David Bowie",
          "John Lennon",
        ],
        correctAnswer: "Freddie Mercury",
      },
      {
        question: "Which famous rock band wrote 'Bohemian Rhapsody'?",
        choices: ["The Who", "AC/DC", "Queen", "Pink Floyd"],
        correctAnswer: "Queen",
      },
      {
        question: "Which genre is associated with Bob Marley?",
        choices: ["Jazz", "Reggae", "Rock", "Pop"],
        correctAnswer: "Reggae",
      },
      {
        question: "Who is known for the album 'Thriller'?",
        choices: ["Michael Jackson", "Prince", "Whitney Houston", "Elton John"],
        correctAnswer: "Michael Jackson",
      },
      {
        question: "Which artist is known as the 'Material Girl'?",
        choices: ["Madonna", "Cyndi Lauper", "Lady Gaga", "Cher"],
        correctAnswer: "Madonna",
      },
      {
        question: "Who is the 'Queen of Soul'?",
        choices: ["Aretha Franklin", "Tina Turner", "Beyoncé", "Diana Ross"],
        correctAnswer: "Aretha Franklin",
      },
      {
        question: "Which band wrote 'Stairway to Heaven'?",
        choices: [
          "The Rolling Stones",
          "Led Zeppelin",
          "The Beatles",
          "Pink Floyd",
        ],
        correctAnswer: "Led Zeppelin",
      },
      {
        question: "Which artist is famous for 'Like a Rolling Stone'?",
        choices: [
          "Bob Dylan",
          "John Lennon",
          "Neil Young",
          "Bruce Springsteen",
        ],
        correctAnswer: "Bob Dylan",
      },
      {
        question: "Who is the 'Boss' of rock music?",
        choices: [
          "Bruce Springsteen",
          "John Mellencamp",
          "Tom Petty",
          "Billy Joel",
        ],
        correctAnswer: "Bruce Springsteen",
      },
      {
        question: "Which band is famous for 'Smells Like Teen Spirit'?",
        choices: ["Nirvana", "Pearl Jam", "Soundgarden", "Alice in Chains"],
        correctAnswer: "Nirvana",
      },
      {
        question: "Which artist is known for the song 'Viva La Vida'?",
        choices: ["Coldplay", "U2", "The Killers", "Radiohead"],
        correctAnswer: "Coldplay",
      },
      {
        question: "Which musical legend is known for the song 'Purple Rain'?",
        choices: ["Elvis Presley", "Jimi Hendrix", "Prince", "David Bowie"],
        correctAnswer: "Prince",
      },
    ],
  },
  {
    image: "./images/quiz.png",
    name: "Superhero Trivia",
    questions: [
      {
        question: "Who is the alter ego of Spider-Man?",
        choices: ["Bruce Wayne", "Clark Kent", "Peter Parker", "Tony Stark"],
        correctAnswer: "Peter Parker",
      },
      {
        question: "Which superhero is known as the 'Man of Steel'?",
        choices: ["Superman", "Iron Man", "Thor", "Hulk"],
        correctAnswer: "Superman",
      },
      {
        question: "Who is Batman's sidekick?",
        choices: ["Robin", "Nightwing", "The Flash", "Green Lantern"],
        correctAnswer: "Robin",
      },
      {
        question: "Which superhero wields a magic hammer called Mjolnir?",
        choices: ["Iron Man", "Thor", "Captain America", "Hawkeye"],
        correctAnswer: "Thor",
      },
      {
        question: "Who is known as the 'Merc with a Mouth'?",
        choices: ["Deadpool", "Wolverine", "Hawkeye", "Iron Fist"],
        correctAnswer: "Deadpool",
      },
      {
        question:
          "Which superhero is from the X-Men with the ability to control metal?",
        choices: ["Magneto", "Professor X", "Cyclops", "Wolverine"],
        correctAnswer: "Magneto",
      },
      {
        question: "Which superhero is known for the 'Iron Suit'?",
        choices: ["Thor", "Iron Man", "Black Panther", "Hawkeye"],
        correctAnswer: "Iron Man",
      },
      {
        question: "Which superhero has the ability to shrink and grow at will?",
        choices: ["Ant-Man", "The Flash", "Green Lantern", "Hulk"],
        correctAnswer: "Ant-Man",
      },
      {
        question: "Who is the arch-nemesis of Superman?",
        choices: ["Lex Luthor", "The Joker", "Green Goblin", "Thanos"],
        correctAnswer: "Lex Luthor",
      },
      {
        question: "Which superhero can stretch his body like rubber?",
        choices: ["Mr. Fantastic", "The Thing", "Green Lantern", "Aquaman"],
        correctAnswer: "Mr. Fantastic",
      },
      {
        question: "Which superhero has super speed?",
        choices: ["Flash", "Superman", "Green Lantern", "Hawkman"],
        correctAnswer: "Flash",
      },
      {
        question: "Which superhero is known for his shield?",
        choices: ["Iron Man", "Thor", "Captain America", "Black Widow"],
        correctAnswer: "Captain America",
      },
      {
        question: "Who is the leader of the Avengers?",
        choices: ["Iron Man", "Thor", "Captain America", "Hawkeye"],
        correctAnswer: "Captain America",
      },
      {
        question: "Who is Wonder Woman's love interest?",
        choices: ["Bruce Wayne", "Steve Trevor", "Clark Kent", "Tony Stark"],
        correctAnswer: "Steve Trevor",
      },
      {
        question: "Which superhero was bitten by a radioactive spider?",
        choices: ["Iron Man", "Spider-Man", "Green Lantern", "The Flash"],
        correctAnswer: "Spider-Man",
      },
    ],
  },
  {
    image: "./images/quiz.png",
    name: "Harry Potter Knowledge",
    questions: [
      {
        question: "What is the name of Harry Potter's owl?",
        choices: ["Hedwig", "Scabbers", "Crookshanks", "Fawkes"],
        correctAnswer: "Hedwig",
      },
      {
        question: "Which house was Harry Potter sorted into?",
        choices: ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"],
        correctAnswer: "Gryffindor",
      },
      {
        question:
          "Who was Harry's first Defense Against the Dark Arts teacher?",
        choices: [
          "Remus Lupin",
          "Gilderoy Lockhart",
          "Severus Snape",
          "Dolores Umbridge",
        ],
        correctAnswer: "Gilderoy Lockhart",
      },
      {
        question: "What is the name of the dark wizard Harry defeats?",
        choices: [
          "Lucius Malfoy",
          "Voldemort",
          "Bellatrix Lestrange",
          "Tom Riddle",
        ],
        correctAnswer: "Voldemort",
      },
      {
        question:
          "Which magical creature guards the entrance to the Gryffindor common room?",
        choices: ["Fluffy", "Hippogriff", "Cerberus", "The Grey Lady"],
        correctAnswer: "The Fat Lady",
      },
      {
        question: "What is the name of Harry's best friend?",
        choices: [
          "Ron Weasley",
          "Hermione Granger",
          "Draco Malfoy",
          "Neville Longbottom",
        ],
        correctAnswer: "Ron Weasley",
      },
      {
        question: "What is the name of the school Harry attends?",
        choices: [
          "Beauxbatons Academy",
          "Hogwarts",
          "Durmstrang Institute",
          "Ilvermorny",
        ],
        correctAnswer: "Hogwarts",
      },
      {
        question: "Who is the headmaster of Hogwarts?",
        choices: [
          "Severus Snape",
          "Gilderoy Lockhart",
          "Albus Dumbledore",
          "Minerva McGonagall",
        ],
        correctAnswer: "Albus Dumbledore",
      },
      {
        question: "Which potion is used to make someone fall in love?",
        choices: [
          "Felix Felicis",
          "Veritaserum",
          "Amortentia",
          "Polyjuice Potion",
        ],
        correctAnswer: "Amortentia",
      },
      {
        question: "Which position does Harry play in Quidditch?",
        choices: ["Seeker", "Chaser", "Beater", "Keeper"],
        correctAnswer: "Seeker",
      },
      {
        question: "Who is Harry's godfather?",
        choices: [
          "Lucius Malfoy",
          "Sirius Black",
          "Remus Lupin",
          "Arthur Weasley",
        ],
        correctAnswer: "Sirius Black",
      },
      {
        question: "Which Weasley sibling is known for being a prankster?",
        choices: ["Percy", "Fred", "George", "Ron"],
        correctAnswer: "Fred and George",
      },
      {
        question: "What is the name of the Weasley's home?",
        choices: ["The Burrow", "The Cottage", "The Castle", "The Treehouse"],
        correctAnswer: "The Burrow",
      },
      {
        question: "Who does Harry marry at the end of the series?",
        choices: [
          "Hermione Granger",
          "Ginny Weasley",
          "Luna Lovegood",
          "Cho Chang",
        ],
        correctAnswer: "Ginny Weasley",
      },
      {
        question: "Which creature is used to guard Gringotts?",
        choices: ["Troll", "Dragon", "House Elf", "Hippogriff"],
        correctAnswer: "Dragon",
      },
    ],
  },
  {
    image: "./images/quiz.png",
    name: "TV Show Trivia",
    questions: [
      {
        question: "Who played the character of Walter White in 'Breaking Bad'?",
        choices: [
          "Aaron Paul",
          "Bryan Cranston",
          "Bob Odenkirk",
          "Giancarlo Esposito",
        ],
        correctAnswer: "Bryan Cranston",
      },
      {
        question: "What is the name of the coffee shop in 'Friends'?",
        choices: [
          "Monica's Cafe",
          "Central Perk",
          "Coffee Central",
          "Ralph's Cafe",
        ],
        correctAnswer: "Central Perk",
      },
      {
        question: "Who is the main character in 'Sherlock' (BBC)?",
        choices: ["Sherlock Holmes", "John Watson", "Moriarty", "Lestrade"],
        correctAnswer: "Sherlock Holmes",
      },
      {
        question:
          "Which TV series is set in the fictional town of Hawkins, Indiana?",
        choices: [
          "The X-Files",
          "Stranger Things",
          "The Walking Dead",
          "Twin Peaks",
        ],
        correctAnswer: "Stranger Things",
      },
      {
        question:
          "In 'Game of Thrones', who is known as the 'Mother of Dragons'?",
        choices: [
          "Cersei Lannister",
          "Sansa Stark",
          "Daenerys Targaryen",
          "Arya Stark",
        ],
        correctAnswer: "Daenerys Targaryen",
      },
      {
        question:
          "Which series revolves around a group of survivors after a zombie apocalypse?",
        choices: [
          "The Walking Dead",
          "Breaking Bad",
          "The 100",
          "Stranger Things",
        ],
        correctAnswer: "The Walking Dead",
      },
      {
        question:
          "What is the name of the fictional paper company in 'The Office'?",
        choices: [
          "Dunder Mifflin",
          "Staples",
          "OfficeMax",
          "Michael Scott Paper Company",
        ],
        correctAnswer: "Dunder Mifflin",
      },
      {
        question: "Who is the father of Steve Urkel in 'Family Matters'?",
        choices: [
          "Carl Winslow",
          "Eddie Winslow",
          "Harold Urkel",
          "Richie Crawford",
        ],
        correctAnswer: "Carl Winslow",
      },
      {
        question: "Who is the protagonist in 'The Mandalorian'?",
        choices: [
          "Han Solo",
          "Obi-Wan Kenobi",
          "The Mandalorian",
          "Luke Skywalker",
        ],
        correctAnswer: "The Mandalorian",
      },
      {
        question:
          "What was the name of Ross and Rachel’s daughter in 'Friends'?",
        choices: ["Emma", "Sophie", "Carmen", "Chloe"],
        correctAnswer: "Emma",
      },
      {
        question:
          "What is the name of the fake town in 'Parks and Recreation'?",
        choices: ["Pawnee", "Scranton", "Riverside", "Brooklyn"],
        correctAnswer: "Pawnee",
      },
      {
        question:
          "Which show features a group of teenagers who solve supernatural mysteries?",
        choices: [
          "Supernatural",
          "The X-Files",
          "Buffy the Vampire Slayer",
          "Scooby-Doo",
        ],
        correctAnswer: "Scooby-Doo",
      },
      {
        question: "In 'The Simpsons', what is the name of Bart's best friend?",
        choices: ["Millhouse", "Ralph Wiggum", "Martin Prince", "Nelson Muntz"],
        correctAnswer: "Millhouse",
      },
      {
        question:
          "Which TV series is about a group of high school students with superpowers?",
        choices: ["The 100", "Heroes", "Buffy the Vampire Slayer", "Riverdale"],
        correctAnswer: "Heroes",
      },
      {
        question:
          "Who played the role of 'Daenerys Targaryen' in 'Game of Thrones'?",
        choices: [
          "Emilia Clarke",
          "Natalie Dormer",
          "Maisie Williams",
          "Sophie Turner",
        ],
        correctAnswer: "Emilia Clarke",
      },
    ],
  },
  {
    image: "./images/quiz.png",
    name: "Space Exploration",
    questions: [
      {
        question: "What is the closest planet to the Sun?",
        choices: ["Mercury", "Venus", "Earth", "Mars"],
        correctAnswer: "Mercury",
      },
      {
        question: "Which planet is known as the Red Planet?",
        choices: ["Mars", "Saturn", "Jupiter", "Neptune"],
        correctAnswer: "Mars",
      },
      {
        question:
          "What was the name of the first manned mission to land on the Moon?",
        choices: ["Apollo 11", "Apollo 13", "Sputnik 1", "Soyuz 11"],
        correctAnswer: "Apollo 11",
      },
      {
        question: "Who was the first person to walk on the Moon?",
        choices: [
          "Neil Armstrong",
          "Buzz Aldrin",
          "Yuri Gagarin",
          "Alan Shepard",
        ],
        correctAnswer: "Neil Armstrong",
      },
      {
        question: "What is the name of NASA’s most famous space telescope?",
        choices: ["Hubble", "James Webb", "Chandra", "Spitzer"],
        correctAnswer: "Hubble",
      },
      {
        question: "Which space agency launched the Mars Rover?",
        choices: ["NASA", "ESA", "Roscosmos", "CNSA"],
        correctAnswer: "NASA",
      },
      {
        question: "Which is the largest planet in our solar system?",
        choices: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        correctAnswer: "Jupiter",
      },
      {
        question:
          "What is the name of the first artificial satellite launched into space?",
        choices: ["Sputnik 1", "Explorer 1", "Vostok 1", "Apollo 11"],
        correctAnswer: "Sputnik 1",
      },
      {
        question: "Which spacecraft is famous for exploring the outer planets?",
        choices: ["Voyager", "Apollo 11", "Challenger", "Columbia"],
        correctAnswer: "Voyager",
      },
      {
        question: "What is the name of the galaxy we live in?",
        choices: ["Andromeda", "Milky Way", "Triangulum", "Whirlpool"],
        correctAnswer: "Milky Way",
      },
      {
        question: "Which planet has the most moons?",
        choices: ["Jupiter", "Saturn", "Neptune", "Uranus"],
        correctAnswer: "Saturn",
      },
      {
        question:
          "What does the Hubble Space Telescope help scientists observe?",
        choices: ["Stars", "Exoplanets", "Galaxies", "All of the above"],
        correctAnswer: "All of the above",
      },
      {
        question: "Which spacecraft visited Pluto?",
        choices: [
          "Voyager 2",
          "New Horizons",
          "Mars Rover",
          "Parker Solar Probe",
        ],
        correctAnswer: "New Horizons",
      },
      {
        question: "What is the name of the first woman to fly into space?",
        choices: [
          "Valentina Tereshkova",
          "Sally Ride",
          "Mae Jemison",
          "Eileen Collins",
        ],
        correctAnswer: "Valentina Tereshkova",
      },
      {
        question:
          "Which planet is known for having a giant storm called the Great Red Spot?",
        choices: ["Jupiter", "Saturn", "Neptune", "Mars"],
        correctAnswer: "Jupiter",
      },
    ],
  },
  {
    image: "./images/quiz.png",
    name: "Music Legends",
    questions: [
      {
        question: "Who is known as the 'King of Pop'?",
        choices: [
          "Elvis Presley",
          "Michael Jackson",
          "Prince",
          "Justin Timberlake",
        ],
        correctAnswer: "Michael Jackson",
      },
      {
        question: "Which band was Freddie Mercury the lead singer of?",
        choices: ["The Beatles", "Queen", "The Rolling Stones", "Led Zeppelin"],
        correctAnswer: "Queen",
      },
      {
        question:
          "Which artist is famous for the hit song 'Like a Rolling Stone'?",
        choices: ["Bob Dylan", "Bruce Springsteen", "Neil Young", "Elton John"],
        correctAnswer: "Bob Dylan",
      },
      {
        question: "Which band released the album 'Abbey Road'?",
        choices: [
          "The Rolling Stones",
          "The Beatles",
          "Pink Floyd",
          "The Doors",
        ],
        correctAnswer: "The Beatles",
      },
      {
        question: "Who is the 'Queen of Soul'?",
        choices: [
          "Aretha Franklin",
          "Whitney Houston",
          "Diana Ross",
          "Tina Turner",
        ],
        correctAnswer: "Aretha Franklin",
      },
      {
        question: "Which music icon famously said, 'I want to hold your hand'?",
        choices: [
          "Elvis Presley",
          "The Beatles",
          "The Rolling Stones",
          "The Beach Boys",
        ],
        correctAnswer: "The Beatles",
      },
      {
        question:
          "Which rapper is known for the albums 'The Marshall Mathers LP' and 'Recovery'?",
        choices: ["Jay-Z", "Drake", "Kanye West", "Eminem"],
        correctAnswer: "Eminem",
      },
      {
        question: "What is the name of Adele's debut album?",
        choices: ["25", "21", "19", "30"],
        correctAnswer: "19",
      },
      {
        question:
          "Which famous musician is known for his hit songs 'Purple Rain' and 'When Doves Cry'?",
        choices: ["Elvis Presley", "Prince", "David Bowie", "Michael Jackson"],
        correctAnswer: "Prince",
      },
      {
        question: "Which music legend is known for the song 'Imagine'?",
        choices: ["Elton John", "John Lennon", "Paul McCartney", "David Bowie"],
        correctAnswer: "John Lennon",
      },
      {
        question: "Which artist released the album 'Thriller'?",
        choices: ["Prince", "Michael Jackson", "Madonna", "Lionel Richie"],
        correctAnswer: "Michael Jackson",
      },
      {
        question: "Who is known as the 'Godfather of Soul'?",
        choices: ["James Brown", "Marvin Gaye", "Ray Charles", "Chuck Berry"],
        correctAnswer: "James Brown",
      },
      {
        question: "Which band is known for the song 'Bohemian Rhapsody'?",
        choices: ["Queen", "Led Zeppelin", "Pink Floyd", "The Who"],
        correctAnswer: "Queen",
      },
      {
        question:
          "Which female artist is known for her hit song 'Rolling in the Deep'?",
        choices: ["Lady Gaga", "Beyoncé", "Adele", "Rihanna"],
        correctAnswer: "Adele",
      },
      {
        question: "Which music legend is famous for the song 'Respect'?",
        choices: [
          "Aretha Franklin",
          "Diana Ross",
          "Tina Turner",
          "Whitney Houston",
        ],
        correctAnswer: "Aretha Franklin",
      },
    ],
  },
];

function loadQuizzes() {

  const quizzesWrapper = document.querySelector(".pop-quizzes");
  for (let quiz of quizzes) {
    const quizCard = document.createElement("div");
    const img = document.createElement("img");
    const quizPlay = document.createElement("div");
    const quizTitle = document.createElement("h3");
    const playButton = document.createElement("a");
    const play = document.createTextNode("Play");
    playButton.setAttribute("href", "./quiz.html");
    playButton.appendChild(play);

    quizCard.setAttribute("class", "quiz-card");
    quizPlay.setAttribute("class", "quiz-play");
    quizTitle.textContent = quiz.name;

    img.setAttribute("src", quiz.image);
    console.log("quiz has been loaded");

    quizPlay.appendChild(quizTitle);
    quizPlay.appendChild(playButton);
    console.log(playButton);

    playButton.addEventListener("click", function () {
      startQuiz(quiz);
    });

    quizCard.appendChild(img);
    quizCard.appendChild(quizPlay);

    quizzesWrapper.appendChild(quizCard);
  }
}

function startQuiz(quiz) {
  localStorage.clear();
  localStorage.setItem("selectedQuiz", JSON.stringify(quiz));
  console.log(JSON.stringify(quiz));
  window.location.href = "quiz.html";
  console.log("quiz started and changed page");
}

function renderQuiz(quiz) {
  const head = document.querySelector("head");
  const title = document.createElement("title");
  title.textContent = quiz.name;
  head.appendChild(title);

  let index = 0;
  const loadingBar = document.createElement("div");
  loadingBar.innerHTML = `<div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`;
  function nextQuestion() {
    const main = document.querySelector("main");
    main.innerHTML = ""; // Clear previous content
    main.appendChild(loadingBar); // Show loading bar

    setTimeout(() => {
      main.innerHTML = ""; // Remove loading bar
      if (index < quiz.questions.length) {
        renderQuestion(quiz.questions[index], index, nextQuestion);
        index++;
      } else {
        console.log("Quiz completed!");
        quizCompleted();
      }
    }, 500); // Delay before loading next question (adjust time as needed)
  }

  nextQuestion();
}

function quizCompleted() {
  const main = document.querySelector("main");
  main.innerHTML = "";
  const com = document.createElement("h2");
  com.innerText = "Quiz Completed";
  main.appendChild(com);
  const backBtn = document.createElement("a");
  backBtn.setAttribute("href", "index.html");
  backBtn.setAttribute("class", "back");
  backBtn.innerText = "Go Back";
  main.appendChild(backBtn);
}

function renderQuestion(question, index, nextQuestion) {
  const main = document.querySelector("main");
  main.innerHTML = "";

  const quesWrapper = document.createElement("div");
  quesWrapper.setAttribute("class", "question-wrapper");

  const quesHead = document.createElement("h2");
  quesHead.textContent = "Question " + (index + 1);
  quesWrapper.appendChild(quesHead);

  const ques = document.createElement("h3");
  ques.textContent = question.question;
  quesWrapper.appendChild(ques);

  const ansWrapper = document.createElement("div");
  ansWrapper.setAttribute("class", "ans-wrapper");

  question.choices.forEach((choice) => {
    const choiceBtn = document.createElement("button");
    choiceBtn.textContent = choice;

    choiceBtn.addEventListener("click", function () {
      if (checkAnswer(question, choice)) {
        choiceBtn.style.backgroundColor = "#7AABB9";
        setTimeout(() => {
          console.log("Correct Answer!");
          nextQuestion(); // Move to the next question
        }, 500);
      } else {
        choiceBtn.style.backgroundColor = "#FF0000";
      }
    });

    ansWrapper.appendChild(choiceBtn);
  });

  quesWrapper.appendChild(ansWrapper);
  main.appendChild(quesWrapper);
}

function checkAnswer(question, choice) {
  return question.correctAnswer === choice;
}

// const quizMakerBtn = document.querySelector("#quiz-maker");
// quizMakerBtn.addEventListener("click", function () {
//   window.location.href = "maker.html";
// });


if (window.location.pathname.includes("index.html")) {
  loadQuizzes(); // Load quizzes dynamically on the landing page
}
if (window.location.pathname.includes("quiz.html")) {
  const selectedQuizData = localStorage.getItem("selectedQuiz");
  if (selectedQuizData) {
    const selectedQuiz = JSON.parse(selectedQuizData);
    renderQuiz(selectedQuiz);
  } else {
    // Handle the case where the selected quiz is not found in localStorage
    console.log("No quiz selected or quiz data is missing.");
  }
}
