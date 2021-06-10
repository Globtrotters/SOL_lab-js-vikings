// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  //const soldier1 = new Soldier(50, 5)

  /*const soldier1 = {
    health: 50,
    strength: 5
  }
  
  const soldier2 = {
    health: 60,
    strength: 3
  }

  soldier1.attack()  => 5
  soldier1.receiveDamage(10) => 50 - 10 

  soldier1.receiveDamage(soldier2.attack())  50 - 3  
  */

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {

  constructor(name, health, strength) {

    super(health, strength);
    
    this.name = name;

  }

  receiveDamage(damage) {
    
    this.health -= damage;

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }

  /*

  viking1.attack()
  viking1.receiveDamage()  //Different from the soldier
  viking1.battleCry()

  //There is no solider1.battleCry()

  */
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
  /*
  const war1 = new War()
  const war2 = new War()

  war1 = {
    vikingArmy: [],
    saxonArmy: []
  }

  war2 = {
    vikingArmy: [],
    saxonArmy: []
  }

  */

  addViking(viking) {
    
    /*
    console.log(war) // war {
      vikingArmy: [],
      saxonArmy: []
    }
    */

    this.newCrazyProperty = 'ascowbvouwbvw';

    /*
    console.log(war) // war {
      vikingArmy: [],
      saxonArmy: []
      newCrayProperty: 'ascowbvouwbvw'
    }
    */

    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  /*

  const Harald = new Viking("Harald", 50, 5)
  const Arl = new Viking("Arl", 40, 4)


  war1.addViking(Harald)
  war1.addViking(Arl)

  //console.log(war1.vikingArmy) /// [
    {
    name: "Harald",
    health: 50,
    strength: 5
    },{
    name: "Arl",
    health: 40,
    strength: 4
    },
  ]

  */

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
