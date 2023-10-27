// Hamster class
class Hamster {
    constructor(name) {
    this.owner = "";
    this.name = name;
    this.price = 15;
    }
  
    wheelRun() {
      console.log("squeak squeak");
    }
  
    eatFood() {
      console.log("nibble nibble");
    }
  
    getPrice() {
      return this.price;
    }
  }
  
  // Person class
  class Person {
    constructor(name) {
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
    }
  
getName() {
return this.name;
}
  
 getAge() {
return this.age;
}
  
getWeight() {
return this.weight;
}
  
  
eat() {
this.weight++;
this.mood++;
}
  
    exercise() {
      this.weight--;
    }
  
    ageUp() {
      this.age++;
      this.height++;
      this.weight++;
      this.mood--;
    }
  
    buyHamster(hamster) {
      this.hamsters.push(hamster);
      this.mood += 10;
      hamster.owner = this.name;
    }
  }
  
 
  const timmy = new Person("Timmy");
  
  for (let i = 0; i < 5; i++) {
    timmy.ageUp();
  }
  
  for (let i = 0; i < 5; i++) {
    timmy.eat();
  }
  
  for (let i = 0; i < 5; i++) {
    timmy.exercise();
  }
  
  const gus = new Hamster("Gus");
  timmy.buyHamster(gus);
  
  for (let i = 0; i < 15; i++) {
    timmy.ageUp();
  }
  
  for (let i = 0; i < 2; i++) {
    timmy.eat();
  }
  
  for (let i = 0; i < 2; i++) {
    timmy.exercise();
  }
  
  // Output

  console.log("Timmy's hamsters:");
for (const hamster of timmy.hamsters) {
  console.log(hamster.name);
}
  console.log("Timmy's Exercise :", timmy.weight);
  console.log (timmy)

  // Class for creating the Din
class Dinner {
    constructor(appetizer, entree, dessert) {
      this.appetizer = appetizer;
      this.entree = entree;
      this.dessert = dessert;
    }
  }
  
  // Class for Chef
  class Chef {
    static makeDinner(appetizer, entree, dessert) {
      return new Dinner(appetizer, entree, dessert);
    }
  }
  
 // Din Due Amici Menu/Italian 
  const dinner1 = Chef.makeDinner("Green Salad", "Grilled Salmon", "Chocolate Mousse");
  const dinner2 = Chef.makeDinner("Tomato Soup", "Spaghetti Carbonara", "Tiramisu");
  const dinner3 = Chef.makeDinner("Caesar Salad", "Chicken Alfredo", "Cheesecake");
  
  console.log("Dinner 1:", dinner1);
  console.log("Dinner 2:", dinner2);
  console.log("Dinner 3:", dinner3);
  