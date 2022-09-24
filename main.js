// Создать сущность человека, который будет содержать свойства “имя” и “возраст”.
//  А также иметь метод вывода данных объекта
   

function User(){
  this.name = prompt('Введите имя')
  this.age =  prompt ("Скоклько вам лет")
  this.printUser = function(){
    console.log(`${this.name} ${this.age} `)
  }
}

let user1 = new User()
let user2 = new User()
user1.printUser()
user2.printUser()
// Создать сущность автомобиля. Она должна содержать минимум 3 характеристики. 
// А также иметь метод вывода на экран данных об этом автомобиле. 
// И метод присвоение этого автомобиля владельцу 
// (метод должен записать в автомобиль объект владельца)

function Car(){
  this.model = prompt('Модель машины?')
  this.volume = prompt('Обьем двигателя?')
  this.year = prompt('Год выпуска?')
  this.showCar = function(){
    alert(`${this.model} ${this.volume}${'л.'} ${this.year}${'год'}`)
   
  }
  this.assignOwner = function(owner) {
    this.owner = owner
    console.log(this)
  }

}
 
let model1 = new Car()
model1.showCar()
model1.assignOwner(user1)

let model2 = new Car()
model2.showCar()
model2.assignOwner(user2)


