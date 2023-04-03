{
  interface CoffeeCup {
    shots: number;
    hasMilk: boolean;
  }

  class CoffeeMaker {
    static BEANS_GRAM_PER_SHOT: number = 7; // class lavel
    // class level로 하면 메모리낭비를 줄일수있다
    // 왜? 인스턴스를 생성할때마다 static으로 선언한 데이터가 중복으로 나오지않기때문에
    // BEANS_GRAM_PER_SHOT: number = 7;
    coffeeBeans: number = 0; // instance lavel

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }
    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error("not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots: shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32);
  console.log(maker);
  console.log(maker.makeCoffee(2));
}
