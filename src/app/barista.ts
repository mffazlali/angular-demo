export class Barista {
  
  makeCoffee(type: string): ICoffee {
    switch (type) {
      case 'plain':
        return new PlainCoffee();
      case 'milk':
        return new CoffeeWithMilk();
      case 'sugar':
        return new CoffeeWithSugar();
      case 'milkAndSugar':
        return new CoffeeWithMilkAndSugar();
      default:
        throw new Error('Invalid coffee type');
    }
  }
}

interface ICoffee {
  getCost(): number;
  getIngredient(): string;
}


export class PlainCoffee implements ICoffee {
  getCost(): number {
    return 2.5;
  }

  getIngredient(): string {
    return 'coffee';
  }
}

export class CoffeeWithMilk implements ICoffee {
  getCost(): number {
    return 3;
  }

  getIngredient(): string {
    return 'coffee with milk';
  }
}

export class CoffeeWithSugar implements ICoffee {
  getCost(): number {
    return 3.5;
  }

  getIngredient(): string {
    return 'coffee with sugar';
  }
}

export class CoffeeWithMilkAndSugar implements ICoffee {
  getCost(): number {
    return 4;
  }

  getIngredient(): string {
    return 'coffee with milk and sugar';
  }
}
