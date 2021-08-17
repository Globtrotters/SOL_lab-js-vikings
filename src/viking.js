// Soldier
class Soldier {
  // constructor will define the parameters that need to be passed when creating a new element of the class
  constructor(health, strength) {
    this.health = health; // this.health will create a new attribute. health will be the value passed from the parameter when creating the element.
    this.strength = strength;// same for strength
  }

// method that returns the strength attribute
  attack() {
    return this.strength;
  }

  // method that will reduce the damage being passed as an argument to the current health
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking. Comes from parent class Soldier. Will inherit attributes and methods from Soldier
class Viking extends Soldier {

  constructor(name, health, strength) {
// constructor with the same parameters of Soldier + a new one (name)
    super(health, strength); // this super will pass the values health and strength as a parameter to the parent class.
    
    this.name = name;

  }

  receiveDamage(damage) {
    
    this.health -= damage;
    
  // conditional that checks if the Viking is still alive. (this.health > 0)
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }

  
}

// Saxon
class Saxon extends Soldier {

  constructor(health, strength) {
    super(health, strength)
  }

  receiveDamage(damage) {
    
    this.health -= damage;

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  
  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }


  vikingAttack() {
    
    let randomIndex = Math.floor(Math.random() * this.saxonArmy.length); 

    this.attackedSaxon = this.saxonArmy[randomIndex]; 
    //This creates attackedSaxon inside the class object

    let vikingAttacker =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];


    let attack = attackedSaxon.receiveDamage(vikingAttacker.attack());

    if (attackedSaxon.health <= 0) {
      this.saxonArmy.splice(attackedSaxon, 1);
    }

    return attack;
  }

  saxonAttack() {
    let attackedViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    let saxonAttacker =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    let attack = attackedViking.receiveDamage(saxonAttacker.strength);

    if (attackedViking.health <= 0) {
      this.vikingArmy.splice(attackedViking, 1);
    }

    return attack;
  }

  armyAttack(army) {
    let attackerArmy;
    let defenderArmy;

    switch (army.tolowerCase()) {
      case 'vikings':
        attackerArmy = this.vikingArmy;
        defenderArmy = this.saxonArmy;
        break;
      case 'saxons':
        attackerArmy = this.vikingArmy;
        defenderArmy = this.saxonArmy;
      default:
        return;
    }

    const attackingUnit =
      attackerArmy[Math.floor(Math.random() * attackerArmy.length)];

    const defendingUnit =
      defenderArmy[Math.floor(Math.random() * defenderArmy.length)];

    const battleResult = defendingUnit.receiveDamage(attackingUnit.strength);

    if (defendingUnit.health <= 0) {
      defenderArmy.splice(defendingUnit, 1);
    }

    return battleResult;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length == 0) {
      return 'Saxons have fought for their lives and survived another day...';
    } else {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}
















// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
