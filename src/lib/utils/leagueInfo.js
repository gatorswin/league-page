/*   STEP 1   */
export const leagueID = "792872868110241792"; // your league ID
export const leagueName = "Mr. Bachelor's Final Project 2.0"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>In the summer of 2021, Benjamin Marks tried to convice his 10+ year redraft companions to enter into the realm of Dynasty. However, the request was met with much skepticism. After exhausting his fantasy interested friends, the Mr. Bachelor's Final Project was formed. The league was named in honor of a legendary teach at the highschool shared by all of the members, Mr. Bachelor. In the fall of 2013, a former student at their highschool ventured into the adult film industry. A alumni of the same district, decided to upload the video for the community onto youtube under the title "Mr. Bachelor's Final Project" in honor of the recently retired legend. To continue this legacy, commissioner Ben Marks decided to once again honor the adult film start and the legendary teacher, and thus created the Mr. Bachelor's Final Project Dynasty League.  Its members were Alex Bookser, Ben Marks, Bobby Stocker, Brian McMullen, Dan Steele, Danny Walsh, Jake Champagne, & Teddy Merrick. After only one season the league folded. With only Ben Marks, Bobby Stocker, and Jake Champagne wanting to continue the dynasty.</p>
  <p>The following summer of 2022, determined to try again, Ben declared efforts to revamp his dynasty league with his friends. This time he turned to his college teammates and his little brothers friend's. With some mild convincing. Mr. Bachelor's Final Project 2.0 was born.</p>
  <p>Ben and the two other returning members of MBFP 1.0 were th original members. Soon after the league began to fill. Ben's little brother, Adam joined, along with his highschool companion, lacrosse teammate, and college roomate Dan Kovalan. With the support and help from Bobby Stocker and Adam Marks, another member was recruited. James Stocker. James is the younger brother of Bobby, as well as a friend of Adam. Two other former Mt. Lebanon students were invited to join the league Will Gladden and Thomas Hunley. Will was a year older than the original members of MBFP, but was a valuable teamate in their highschool football careers. Thomas was a dear friend in highschool, but unfortunately did not graduate with the other young men, as he moved to Boston, MA during highschool. With the Mt. Lebanon ties exhausted, Ben turned towards four of his former teammates during his college football career, Travis Thomas, Nick Wojnar, Max Sessions, & Tyler Noebe.</p>
  <p>At last, Mr. Bachelor's Final Project 2.0 was filled with eager managers.</p>
  <p>Adam Marks, Ben Marks, Bobby Stocker, Dan Kovalan, Jake Champagne, James Stocker, Max Sessions, Nick Wojnar, Thomas Hunley, Travis Thomas, Will Gladden.</p>
 
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
   {
     "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "James Stocker",
     
    "location": "Pittsburgh", // (optional)
    "bio": "Lorem ipsum...",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
     "fantasyStart": 2021, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
     "rival": {
       name: "Rival", // Can be anything (usually your rival's name)
       link: 6, // manager array number within this array, or null to link back to all managers page
       image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
     },
     "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
     "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 10, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
    {
      "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
     "name": "Will Gladden",
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "Brooklyn", // (optional)
    "bio": "Lorem ipsum...",
     "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
     "rival": {
       name: "Rival", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
       image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
     "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10, // 1 - 10
     "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
   {
    "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
     "name": "Ben Marks",
    "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "Pittsburgh-Hershey", // (optional)
      "bio": "Lorem ipsum...",
   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
     "fantasyStart": 2008, // (optional) when did the manager start playing fantasy football
     "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
     "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
       link: 6, // manager array number within this array, or null to link back to all managers page
       image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
     },
     "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
     "philosophy": "Your fantasy team's philosophy",
     "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
   {
    "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
     "name": "Jake Champagne",
    "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "West Coast Baby", // (optional)
      "bio": "Lorem ipsum...",
   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
     "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
     "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
     "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
       link: 6, // manager array number within this array, or null to link back to all managers page
       image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
     },
     "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
     "philosophy": "Your fantasy team's philosophy",
     "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
   {
    "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
     "name": "Nick Wojnar",
    "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "Buffalo", // (optional)
      "bio": "Lorem ipsum...",
   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
     "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
     "favoriteTeam": "buf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
     "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
       link: 6, // manager array number within this array, or null to link back to all managers page
       image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
     },
     "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
     "philosophy": "Your fantasy team's philosophy",
     "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
   {
    "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
     "name": "Adam Marks",
    "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "Pittsburgh-Athens", // (optional)
      "bio": "Lorem ipsum...",
   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
     "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
     "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
     "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
       link: 6, // manager array number within this array, or null to link back to all managers page
       image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
     },
     "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
     "philosophy": "Your fantasy team's philosophy",
     "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
   {
    "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
     "name": "Bobby Stocker",
    "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "Pittsburgh", // (optional)
      "bio": "Lorem ipsum...",
   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
     "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
     "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
     "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
       link: 6, // manager array number within this array, or null to link back to all managers page
       image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
     },
     "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
     "philosophy": "Your fantasy team's philosophy",
     "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
   {
    "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
     "name": "Travis Thomas",
    "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "New Port Ritchie", // (optional)
      "bio": "Lorem ipsum...",
   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
     "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
     "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
     "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
       link: 6, // manager array number within this array, or null to link back to all managers page
       image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
     },
     "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
     "philosophy": "Your fantasy team's philosophy",
     "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
   {
    "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
     "name": "Thomas Hunley",
    "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "LA", // (optional)
      "bio": "Lorem ipsum...",
   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
     "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
     "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
     "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
       link: 6, // manager array number within this array, or null to link back to all managers page
       image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
     },
     "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
     "philosophy": "Your fantasy team's philosophy",
     "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
   {
    "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
     "name": "Tyler Noebe",
    "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "Butt Hole of America", // (optional)
      "bio": "Lorem ipsum...",
   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
     "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
     "favoriteTeam": "cle", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
     "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
       link: 6, // manager array number within this array, or null to link back to all managers page
       image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
     },
     "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
     "philosophy": "Your fantasy team's philosophy",
     "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
   {
    "roster": 11,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
     "name": "Dan Kovalan",
    "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "Pittsburgh-Athens", // (optional)
      "bio": "Lorem ipsum...",
   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
     "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
     "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
     "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
       link: 6, // manager array number within this array, or null to link back to all managers page
       image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
     },
     "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
     "philosophy": "Your fantasy team's philosophy",
     "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
   {
    "roster": 12,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
     "name": "Tyler Noebe",
    "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "Seatle-DC area", // (optional)
      "bio": "Lorem ipsum...",
   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
     "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
     "favoriteTeam": "sea", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
     "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
       link: 6, // manager array number within this array, or null to link back to all managers page
       image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
     },
     "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
     "philosophy": "Your fantasy team's philosophy",
     "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
