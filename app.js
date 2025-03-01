const prompt = require('prompt-sync')();
const username = prompt('Sign here & sell your soul: ');
console.log(`\nMany warm greetings to you, ${username}! The road ahead looks hard won to travel.`);
console.log('\nChoose your faction!');

/*---END OF GAME FUNCTION---*/

function checkGameOver() {
    if (chara.health <= 0) {
        console.log('As The Darkness closes in around you, your blood pools around you.'); 
        console.log('\nYou start feeling colder as time passes and every body part goes numb.'); 
        console.log('\nGAME OVER flashes before your eyes one last time before The Darkness takes over.');
    } else if (chara.sanity <= 0) {
        console.log('The Darkness has closed in around you. \nYou are no longer in control of your body.');
        console.log('\nYou may only watch as the whispers become the screams of the people near by.');
        console.log(' \nYou can only watch as The Darkness takes over your body and tears througoh teh city you have grown to love.');
    } else (gameOver = true)
    process.exit();
};

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

let gameOver = false
let visitBar = true;

let charaFaction = `
    |NETRUNNER| Masters of the digital world.
    |ROGUE| Merceneries for hire.
    |CORPORATE SPY| The deal makers behind the curtians.
    |NOMAD| Roaming scavengers.
    |MAGE| Weave spells and potions in the streets.
`;

//  figured out that we needed to put the codes below, above the switch case code in order for it to work properly on the terminal.

console.log(charaFaction);
const choiceFaction = prompt('Your choice: ');

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
    drinks: 0,
};

switch(choiceFaction.toUpperCase(choiceFaction)) {
    case 'NETRUNNER':
        console.log("\nYou've chosen to be a Netrunner. \nDigital realms bend to your will, but beware the dangers lurking in the code.\n");
        chara.heath = 70,
        chara.sanity = 90,
        chara.intelligence = 15,
        chara.dexterity = 12,
        chara.constitution = 8
        break
    case 'ROGUE':
        console.log("\nYou've chosen to be a Rogue. \nSteel, neon, and blood — the city pays you to stay in the shadows.\n");
        chara.dexterity = 15,
        chara.intelligence = 8,
        chara.wisdom = 12
        break;
    case 'MAGE':
        console.log("\nYou've chosen to be a Mage. \nThe magic of the old world clashes with the tech of the new. You are the bridge between the two.\n");
        chara.intelligence = 20,
        chara.wisdom = 15,
        chara.health = 50
        break;
    case 'NOMAD':
        console.log("\nYou've chose to be a Nomad. \nThe wastelands are your home, but the city calls with its neon lights and promises.\n");
        chara.health = 140,
        chara.sanity = 140
        break;
    case 'CORPORATE SPY':
    case 'SPY':
        console.log("\nYou've chosen The Corporate Spy. \nYou move in shadows, paid in secrets, manipulating the power players of the world.\n");
        chara.sanity = 50,
        chara.charisma = 20,
        chara.intelligence = 12
        break;
    default:
        console.log("\nERROR 404: Access denied. \nThe neon lights flicker in anticipation and The Darkness is closing in on you.\n");
        process.exit()
};

/*tried using for else was problibatic. I needed a code that I can put multipule layers of
user input that mean the same thing. As much as I love for else, you can also add so many things
to each characteristic.*/

/*---FACTION SKILLS---*/

// Print user selection
console.log(`${username}\n ${chara.faction}\n |HEALTH| ${chara.health}\n |SANITY| ${chara.sanity}\n |WISDOM| ${chara.wisdom}\n |INTELLIGENCE| ${chara.intelligence}\n |CONSTITUTION| ${chara.constitution}\n |STRENGTH| ${chara.strength}\n |DEXTERITY| ${chara.dexterity}\n |CHARISMA| ${chara.charisma}\n`);

/*---GENERAL STORY---*/

console.log("In the City of Light, years of prosperity and peace teetered on the edge of ruin. A new force had taken root—an extremist faction calling themselves the 'Soul Survivors.\n'")
console.log("Their doctrine was cryptic, their motives shrouded in twisted faith, but their actions spoke louder than any sermon.\n")
console.log("Missing persons posters lined the streets, their faces now whispers in the wind. And then came the 'Darkness'—a creeping, unnatural force that wrapped itself around the city's heart,\n")
console.log("swallowing whole districts in shadow. There was no doubt about its source. The City stands at a crossroads. The time for neutrality has passed.\n")
console.log("It's up to you to lead determine the fate of 'Light'.\n")


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


console.log("This is part of an going project. Stay alive and stay tuned for more coming soon...")