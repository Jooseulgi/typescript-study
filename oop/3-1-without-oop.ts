{
  interface CoffeeCup {
    shots: number;
    hasMilk: boolean;
  }

  const BEANS_GRAM_PER_SHOT: number = 7;

  let coffeeBeans: number = 0;
  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAM_PER_SHOT) {
      throw new Error("not enough coffee beans!");
    }
    coffeeBeans -= shots * BEANS_GRAM_PER_SHOT;
    return {
      shots: shots,
      hasMilk: false,
    };
  }

  coffeeBeans += 3 * BEANS_GRAM_PER_SHOT;
  const coffee = makeCoffee(2);
  console.log(coffee);

  // class CoffeeMachine {
  //     constructor(coffee: string) {
  //       this.coffee = coffee;
  //     }

  //     makeCoffee(shot: number) {
  //       return shot * coffee;
  //     }
  //   }

  //   const ccff = new CoffeeMachine('akdkdk');

  //   ccff.makeCoffee(3)
}
