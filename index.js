function direction() {
    const response = confirm(`Will you explore today to the north, east, west, or south today.`);
    if (response === 'north') {
      health = health - 10;
      const startOver = confirm(`A large dragon dropped a boulder on you and you are concussed. You have lost 10 health and are now surrounded by a different monster!`);
      }
      } else if (response === 'bow') {
        alert(`Great choice, you survived and defeated the dragon.`);
        const goToZoo = confirm(`The townsfolk are incredibly greatful for you efforts and have organized a small celebration for you.`);
        if (goToZoo) {
          alert('You are an incredible hero...');
        } else if (response === 'east')  {
  
        } else if (response === 'west') {
     
        } else (response === 'south') {
            
        }
      }
     
  }