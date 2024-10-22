//////////////////////////////////////////////////////
///                                                ///
///           JS BEGINNER GROUP PROJECT            ///
///                                                ///
///              TEXT ADVENTURE GAME               ///
///                                                ///
//////////////////////////////////////////////////////

// We use an Object here to keep track of all our messages in one easy to access place. You can use a different method if you like.
const messages = {
  welcome: 'Welcome, would you like to play a game?',
  agreed: 'Awesome! Let\'s get ready to save the townsfolk!',
  refusedToPlay: 'I guess people are dying thanks to your lack of courage.',
  north: 'Would you like to fight with a bow or sword today?',
  northSword: 'The large dragon dropped a boulder on your head and you are now bleeding profusely. You have lost health but manage to flee home to recover for the night!',
  northBow: 'Great choice, you were able to survive the dragon\'s attack and defeated it.',
  success: 'The townsfolk are incredibly greatful for you efforts and have organized a small celebration for you.',
  east: 'Do you choose to take your harpoon or shield with you?',
  eastShield: 'You reach the ocean and encounter a kraken! Your shield can\'t withstand the beast\'s blows! Your health decreases.',
  eastHarpoon: 'Looking down an ocean cliff, you spot the dreaded kraken below. With a well aimed throw, you pierce the beast in its enormous eye!',
  west: 'Do you choose to take your broadsword or slingshot on this journey?',
  westSlingshot: 'You were faced with a gruesome and powerful Ogre. Unfortunately, your slingshot was not strong enough! Despite your efforts to keep yourself at a distance, you take damage.',
  westBroadsword: 'You were faced with a gruesome ogre. Luckily your powerful broadsword was strong enough to defeat the Ogre.',
  south: 'Your neighbor approaches! Do you offer them a potpie or a shovel?',
  southPotpie: 'Cheers! You and your neighbor enjoy dinner by the fire. Your health improves.',
  southShovel: 'Your neighbor accuses you of stealing his shovel! He grabs it from you and hits you over the head, leaving you behind to consider your life choices. Your health decreases.',
  damageTaken: 'It looks like that\'s the end of the line for you. Maybe you\'ll do better next time.', 
  onToNewAdventure: 'Time to rest up for the next adventure.'
};

function beginLife() {
  const response = confirm('Try again?');
  if (response) {
    health = 100;
    beginGame();
  } else {
    alert(messages.refusedToPlay);
  }
}

function beginGame() {
  // 'confirm' shows a message and waits for the user to press “OK” or “CANCEL”. It returns true for OK and false for CANCEL/Esc.
  const response = confirm(messages.welcome);
  if (response) {
    alert(messages.agreed);
    newDirection();
  } else {
    alert(messages.refusedToPlay);
  }
}

function newDirection() {
  // 'prompt' shows a message asking the user to input text. It returns the text or, if CANCEL or Esc is clicked, null.
  const response = prompt(`It's a new day! Will you explore to the north, east, west, or south today?  (Type \'quit\' or \'exit\' to leave game)`);
  if (response === 'north') {
    const response = prompt(messages.north);
    if (response === 'sword') {
      const endOfTheDay = confirm(messages.northSword);
      health -= 25;
      const currentHealth = confirm(`Your current health is ${health}%!`);
      if (health <= 0) {
        const endOfLife = confirm(messages.damageTaken);
        if (beginLife) {
          beginLife();
        }
      }
      newDirection();
    } else if (response === 'bow') {
      const success = confirm(messages.northBow);
      const currentHealth = confirm(`Your current health is ${health}%!`);
      alert(messages.onToNewAdventure);
      newDirection();
    } else {
      alert('Why did I want to go fight something? A peaceful day at home sounds good today.');
      newDirection();
    }

  } else if (response === 'east') {
    const response = prompt(messages.east);
    if (response === 'shield') {
      const endOfTheDay = confirm(messages.eastShield);
      health -= 25;
      const currentHealth = confirm(`Your current health is ${health}%!`);
      if (health <= 0) {
        const endOfLife = confirm(messages.damageTaken);
        if (beginLife) {
          beginLife();
        }
      }
      newDirection();
    } else if (response === 'harpoon') {
      alert(messages.eastHarpoon);
      const success = confirm(messages.success);
      const currentHealth = confirm(`Your current health is ${health}%!`);
      if (success) {
        alert(messages.onToNewAdventure);
        newDirection();
      }
    } else {
      alert('I guess it was foolish to go this way today. Maybe it\'s a good idea to try again tomorrow.');
      newDirection();
    }
  } else if (response === 'west') {
    const response = prompt(messages.west);
    if (response === 'slingshot') {
      //ogreWrong ogreRight
      const endOfTheDay = confirm(messages.westSlingshot);
      health -= 25;
      const currentHealth = confirm(`Your current health is ${health}%!`);
      if (health <= 0) {
        const endOfLife = confirm(messages.damageTaken);
      } if (beginLife) {
        beginLife();
      } 
      newDirection();
    } else if (response === 'broadsword') {
      const endOfTheDay = confirm(messages.westBroadsword)
      const success = confirm(messages.success);
      const currentHealth = confirm(`Your current health is ${health}%!`);
      if (success) {
        alert(messages.onToNewAdventure);
        newDirection();
      }
    }  else {
      alert('Why did I want to go fight something? A peaceful day at home sounds good today.');
      newDirection();
    }
  } else if (response === 'south') {
    const response = prompt(messages.south);
    if (response === 'potpie') {
      // const endOfTheDay = confirm(messages.C1);
      alert(messages.southPotpie);
      health += 25;
      if (health > 100) {
        health = 100;
      }
      alert(`Your current health is ${health}%!`);
      newDirection();
    } else if (response === 'shovel') {
      alert(messages.southShovel);
      health -= 25;
      alert(`Your current health is ${health}%!`);
      if (health <= 0) {
        const endOfLife = confirm(messages.damageTaken);
        beginLife();
      }
      alert(messages.onToNewAdventure);
      newDirection();
    } else {
      alert('You pretend you don\'t see your neighbor and walk away.');
      newDirection();
    }
  } else if (response === 'exit' || response === 'quit') {
    alert('Thanks for testing our game, hope you enjoyed it!');
  } else if (response === 'dirtnap') {
    alert('The only way to not lose is to not play!');
    health -= 1100;
    alert(`Your current health is ${health}%!`);
    beginLife();
  } else if (response === 'nap') {
    alert('The only way to not lose is to not play!');
    alert(`Your current health is ${health}%!`);
    beginLife();
  } else {
    alert('I guess you couldn\'t decide where to go today. Maybe go to bed instead and try again tomorrow?');
    newDirection();
  }
}

let health = 100
beginGame();
