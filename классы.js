class Appliances {
  constructor(price, numberOfUse) {
    this.price = price
    this.numberOfUse = numberOfUse

    this.isEnabled = false
  }

  applyDiscount(discount) {
    this.price = this.price * (1 - discount)
  }

  toggle() {
    this.isEnabled = !this.isEnabled
  }
}

class CoffeeMachine extends Appliances {
  constructor(price, numberOfUse, makingTime) {
    super(price, numberOfUse)

    this.makingTime = makingTime
  }

  makeCoffee() {
    if (this.numberOfUse <= 0) {
      console.log('CoffeeMachine is broken')
      return
    }

    this.toggle()
    console.log('Started making coffee')

    setTimeout(() => {
      this.toggle()
      this.numberOfUse--
      console.log('Coffee is ready')
    }, this.makingTime)
  }
}

class Grill extends Appliances {
  constructor(price, numberOfUse) {
    super(price, numberOfUse)

    this.temperature = null
  }

  setTemperature(temperature) {
    this.temperature = temperature
    console.log('Temperature changed')
  }
}

const coffeeMachine = new CoffeeMachine(2000, 2, 1000)

console.log(`Current price is ${coffeeMachine.price}`)
coffeeMachine.applyDiscount(0.5)
console.log(`Price after discount is ${coffeeMachine.price}`)

coffeeMachine.makeCoffee()

const grill = new Grill(10000, 30)
grill.toggle()
grill.setTemperature(200)