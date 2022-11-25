let foods = [
  {
    id: 1,
    name: "Sho'rva",
    price: 15000,
    count: 57
  },
  {
    id: 2,
    name: "Manti",
    price: 11000,
    count: 49
  },
  {
    id: 3,
    name: "Pizza",
    price: 60000,
    count: 33
  },
  {
    id: 4,
    name: "Hamburger",
    price: 20000,
    count: 40
  },
  {
    id: 5,
    name: "Osh",
    price: 31000,
    count: 33
  },
  {
    id: 6,
    name: "Kabob",
    price: 77000,
    count: 22
  },
  {
    id: 7,
    name: "Lavash",
    price: 47000,
    count: 32
  },
  {
    id: 8,
    name: "Somsa",
    price: 8000,
    count: 47
  }

]

let nomi = " "

while(nomi){
  nomi = prompt(`Qanday ovqat buyurtma qilmoqchisiz. Ovqat nomini kiriting! 
  Bizda quydagi ovqatlar mavjud!
  1. Sho'rva
  2. Manti
  3. Pizza
  4. Hamburger
  5. Osh
  6. Kabob
  7. Lavash
  8. Somsa` )
  
  let boryokiyoq = false
  if(nomi){
    for(let ovqat of foods){
     if(ovqat.name?.toLocaleLowerCase() == nomi?.toLocaleLowerCase()){
      boryokiyoq = true
     }
    }
  }

  let soni = 0

  if(boryokiyoq){
    soni = prompt(`Nechta ${nomi} kerak`)
  } else {
    alert(`Bizda bu ${nomi} ovqati mavjud emas. Iltimos boshqa ovqatni kiritib ko'ring!`)
  }

  if(soni > 0){
    let food = {}

    for(let ovqat of foods){
      if(ovqat.name?.toLocaleLowerCase() == nomi?.toLocaleLowerCase()){
        food = ovqat
       }
    }
    if(food.count >= soni){
      alert(`Sizdan ${soni * food.price} so'm bo'ldi.`)
      foods[food.id -1].count = food.count - soni
      console.log(foods)
    }
    else{
      alert(`Bizda ${food.count} bor ekan. ${soni - food.count} ta 30 minutda tayyor bo'ladi.`)
    }
  }


}
