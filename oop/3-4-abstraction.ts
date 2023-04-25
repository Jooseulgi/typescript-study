{
  interface CoffeeCup {
    shots: number;
    hasMilk: boolean;
  }

  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class lavel
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    grindBeans(shots) {
      console.log();
    }
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeas;
      //   if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
      //     throw new Error("not enough coffee beans!");
      //   }
      //   this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      //   return {
      //     shots: shots,
      //     hasMilk: false,
      //   };
    }
  }

  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(32);
  //maker.coffeeBeans = -24; // 캡슐화하지 않으면 유효하지 않은 상태를 만들수있다.
  console.log(maker);
  console.log(maker.makeCoffee(2));
}

// {
// 	class Cat{
// 		constructor(behaver: string){
// 			this.behaver = behaver
// 		}
// 		makeCat(){
// 			if(this.behaver)

// 		}
// 	}

// 	const maker = new Cat('놀아줌');
// 	console.log(maker.makeCat())
// }
