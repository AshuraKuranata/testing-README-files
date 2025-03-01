# testing-README-files
---

## THE CONCEPT
We met together as a group to discuss the options of whta we wanted to create for this first game.  Our team member had a good idea for a cyber-punk/dungeons & dragons style game.

We began the process by seeing what developed lines of code they had created:

``` JavaScript below:
const prompt = require('prompt-sync')();

console.log('What do you wish to be called?\n')
const username = prompt('Sign here & sell your soul: ');
console.log(`\nMany warm greetings to you, ${username}! The road ahead looks hard won to travel.`);
console.log('\nChoose your faction!\n');

let charaFaction = `
    |NETRUNNER| Masters of the digital world.\n
    |ROGUE| Merceneries for hire.\n
    |CORPORATE SPY| The deal makers behind the curtians.\n
    |NOMAD| Roaming scavengers.\n
    |MAGE| Weave spells and potions in the streets.\n
`;

let chara = {
    name : `${username}`,
    health: 100,
    sanity: 100,
    strength: 10,
    intelligence: 10,
    dexterity: 10,
    constitution: 10,
    wisdom: 10,
    charisma: 10,
};

//figured out that we needed to put the codes below, above the switch case code in order for it to work properly on the terminal.
console.log(charaFaction);
const choiceFaction = prompt('Your choice: ');

switch(choiceFaction) {
    case 'Netrunner', 'netrunner':
        console.log("\nYou've chosen to be a Netrunner. \nDigital realms bend to your will, but beware the dangers lurking in the code.\n");
        
        break;
    case 'Rogue', 'rogue':
        console.log("\nYou've chosen to be a Rogue. \nSteel, neon, and blood — the city pays you to stay in the shadows.\n");
        
        break;
    case 'Mage', 'mage':
        console.log("\nYou've chosen to be a Mage. \nThe magic of the old world clashes with the tech of the new. You are the bridge between the two.\n");
        
        break;
    case 'Nomad', 'nomad':
        console.log("\nYou've chose to be a Nomad. \nThe wastelands are your home, but the city calls with its neon lights and promises.\n");
        
        break;
    case 'Corporate Spy', 'Spy', 'corporate spy', 'spy':
        console.log("\nYou've chosen The Corporate Spy. \nYou move in shadows, paid in secrets, manipulating the power players of the world.\n");
        
        break;
    default:
        console.log("\nERROR 404: Access denied. \nThe neon lights flicker in aticipation and The Darkness is closing in on you.\n");
        break;
};
/*tried using for else was problibatic. I needed a code that I can put multipule layers of
 user input that mean the same thing. As much as I love for else, you can also add so many things
to each characteristic.*/

let gameOver = false

 function checkGameOver() {
     if (chara.health <= 0) {
         console.log('As The Darkness closes in around you, your blood pools around you.'); 
        console.log('\nYou start feeling colder as time passes and every body part goes numb.'); 
        console.log('\nGAME OVER flashes before your eyes one last time before The Darkness takes over.');
     } else (chara.sanity <= 0) {
         console.log('The Darkness has closed in around you. \nYou are no longer in control of your body.');
         console.log('\nYou may only watch as the whispers become the screams of the people near by.');
         console.log(' \nYou can only watch as The Darkness takes over your body and tears througoh teh city you have grown to love.');
       } 
     gameOver = true
     process.exit();
 };
 console.log(`${username}\n |HEALTH| ${chara.health}\n |SANITY| ${chara.sanity}\n |WISDOM| ${chara.wisdom}\n |INTELLIGENCE| ${chara.intelligence}\n |CONSTITUTION| ${chara.constitution}\n |STRENGTH| ${chara.strength}\n |DEXTERITY| ${chara.dexterity}\n |CHARISMA| ${chara.charisma}`);




console.log("This is part of an going project. Stay alive and stay tuned for more coming soon...")
```

We took a look over the code base and thought it was a good start to work through!

---
###  FIRST STEPS
---

From here, we decided that the first iterations we'd take on this is to make the process for the start of the game in character creation to make the faction choice.

We ran into a number of bugs and issues as we were working through this code, especially on how to utilize the 'switch - case' logic:

``` JavaScript
let chara = {
    name: `${username}`,
    faction: `${choiceFaction}`,
    health: 100,
    sanity: 100,
    strength: 10,
    intelligence: 10,
    dexterity: 10,
    constitution: 10,
    wisdom: 10,
    charisma: 10,
};

switch(choiceFaction) {
    case 'Netrunner', 'netrunner':
        console.log("\nYou've chosen to be a Netrunner. \nDigital realms bend to your will, but beware the dangers lurking in the code.\n");
        chara.heath = 70,
        chara.sanity = 90,
        chara.intelligence = 15,
        chara.dexterity = 12,
        chara.constitution = 8
        break;
}
```

The two bugs we encountered here were:
1. How to make the input from the player enter properly hit the case correctly
2. After the input was successful, how to make the input from the player capitalize properly into the 'chara' object

We tried various bug fixes, like:

``` Javascript
switch(choiceFaction) {
    case 'Netrunner' || 'netrunner':
}

switch(choiceFaction) {
    case 'Netrunner':
    case 'netrunner':
}
```

The first not working as intended and only returning the last value, and the second, while working as intended, required us to increase the lines of code and also required a specific input from the players.

The solution that one of our team members came up with was:

``` Javascript
let chara = {
    name: `${username}`,
    faction: `${choiceFaction.toUpperCase()}`,
    health: 100,
    sanity: 100,
    strength: 10,
    intelligence: 10,
    dexterity: 10,
    constitution: 10,
    wisdom: 10,
    charisma: 10,
};
switch(choiceFaction.toLowerCase(choiceFaction)) {
    case 'netrunner':
        console.log("\nYou've chosen to be a Netrunner. \nDigital realms bend to your will, but beware the dangers lurking in the code.\n");
        chara.heath = 70,
        chara.sanity = 90,
        chara.intelligence = 15,
        chara.dexterity = 12,
        chara.constitution = 8
        break
}
```

This solution allows the player to input any properly spelled version of the accepted name of each class, which solved our issues with player input & also updated the faction listed to upper case, so it would print out properly like this:

``` javascript
John
 MAGE // Input was 'mAgE' and it printed correctly 
 |HEALTH| 50
 |SANITY| 100
 |WISDOM| 15
 |INTELLIGENCE| 20
 |CONSTITUTION| 10
 |STRENGTH| 10
 |DEXTERITY| 10
 |CHARISMA| 10
```

This was our first major update.

---

### Bar Scene

---

The next update we wanted to add in was the potential branching content that would occur for the scenario.

We brainstormed as a group and came up with:

* A huge amount of missing peoples posters scattered across the City of Light
* A new sect called the "Soul Survivors" spreading in the City of Light
* A need to manage the Darkness that give the player's character power, but at the potential cost of losing themselves.

Based on that, the team used chatGPT to help craft a simple intro story:

``` Javascript
console.log("In the City of Light, years of prosperity and peace teetered on the edge of ruin. A new force had taken root—an extremist faction calling themselves the 'Soul Survivors.\n'")
console.log("Their doctrine was cryptic, their motives shrouded in twisted faith, but their actions spoke louder than any sermon.\n")
console.log("Missing persons posters lined the streets, their faces now whispers in the wind. And then came the 'Darkness'—a creeping, unnatural force that wrapped itself around the city's heart,\n")
console.log("swallowing whole districts in shadow. There was no doubt about its source. The City stands at a crossroads. The time for neutrality has passed.\n")
console.log("It's up to you to lead determine the fate of 'Light'.\n")
```

After doing this, we also thought of some areas that we think would be interesting for the characters to potentially enter:

| Location        | Encounters  |
| ------------- |:-------------:| 
| home      | 'Game Over' | 
| abandoned apartment      | 'Search to find access to Soul Survivor cult' | 
| bar | get info on abandoned apartment, drink (potential Game Over) |
| soul survivor location | Game Over if not prepared, back access if prepared | 

In this, we decided to break out our work slightly - one team would work on building a looping function for the bar scene and the other group would work on the loop for the prompt selection of the locations to visit.

The bar scene initially started out as:
``` Javascript
while (visitBar = true) {
    console.log("\nYou're at the bar.")
    function drinking() {
        if (chara.drinks >= 0 && chara.drinks < 3) {
        chara.sanity += 5;
    }   else if (chara.drinks >= 3) {
        console.log("---GAME OVER---")
        gameOver = true;
        checkGameOver()
    }}
}
```
This just got the initial interest of the idea that a player was rewarded for drinking, but if they drank too much, that would lead to a game over.

We realized that there were some issues in the code where we forgot to increase the drink count for the player and then built out additional functional aspects to the other choices to the code.  This led us to:

``` Javascript
function drinking() {
    if (chara.drinks >= 0 && chara.drinks < 3) {
        console.log("Bartender tells you, 'Best take it slow.'\n");
        chara.sanity += 5;
        console.log(`You feel refreshed and ready to face the challenges ahead.\nGain Sanity +5: ${chara.sanity}`)
        chara.drinks += 1;
    }
    else if (chara.drinks >= 3) {
        console.log("\nBartender tells you, 'You're not looking too hot there.'");
        console.log("'What's the point of resistance?' you ask yourself as you keep drinking your worries at the bottom of the glass.")
        console.log("Inebrieated, you stumble out of the bar, and forget the purpose you once had.")
        console.log("---GAME OVER---")
        gameOver = true;
        checkGameOver()
    }
}
while (visitBar = true) {
    console.log("\nYou're at the bar.")
    console.log("You can: |talk| to barkeep  |drink|  |leave| bar\n")
    barChoice = prompt("What do you do? ");
        if (barChoice = 'talk') {
            console.log("Bartender says important stuff to you about apt.")
        } else if (barChoice = 'drink') {
            drinking();
        } else if (barChoice = 'leave') {
            console.log("\nYou pay your respects and leave the bar.")
            visitChoice = true;
            return visitBar = false;
        } else
}
```
In this code, the while loop function worked, but we found a major bug:

* The if...elseif statements were not checking if barChoice was equal but instead making them equal, which didn't run properly and only output the bartender dialogue

We made some adjustments and then ended up with:
``` Javascript
function drinking() {
    if (chara.drinks >= 0 && chara.drinks < 3) {
        console.log("Bartender tells you, 'Best take it slow.'\n");
        chara.sanity += 5;
        console.log(`You feel refreshed and ready to face the challenges ahead.\nGain Sanity +5: ${chara.sanity}`)
        chara.drinks += 1;
    }
    else if (chara.drinks >= 3) {
        console.log("\nBartender tells you, 'You're not looking too hot there.'");
        console.log("'What's the point of resistance?' you ask yourself as you keep drinking your worries at the bottom of the glass.")
        console.log("Inebrieated, you stumble out of the bar, and forget the purpose you once had.")
        console.log("---GAME OVER---")
        gameOver = true;
        checkGameOver()
    }
}
while (visitBar = true) {
    console.log("\nYou're at the bar.")
    console.log("You can: |talk| to barkeep  |drink|  |leave| bar\n")
    barChoice = prompt("What do you do? ");
        if (barChoice === 'talk') {
            console.log("Bartender says important stuff to you about apt.")
        } else if (barChoice === 'drink') {
            drinking();
        } else if (barChoice === 'leave') {
            console.log("\nYou pay your respects and leave the bar.")
            visitChoice = true;
            return visitBar = false;
        } else;
}
```

This was a huge breakthrough as this while function would now be usable for our other branch paths to operate under based on the game's conditions!

---