const names = ["Schneider", "Butcher", "Pointdexter", "Ramerez"];
const jobs = ["gardener", "cook", "programmer", "turot"];
const pay = [10, 20, 25, 50, 60, 70, 90, 95, 100, 120];
const maxNames = 10;
const freeLance = [
    {
      name: "Schneider",
      job: "gardener",
      price: 50,
    },
    {
      name: "Butcher",
      job: "cook",
      price: 20,
    },
];
const startPrice = [50, 20]
const avgElement = document.createElement("h3");
const addFreeLanceId = setInterval(addPerson, 1000);
render();

function aveCost(startPrice){
  let arrAve = 0;
  for(let i = 0; i < startPrice.length; i++){
    arrAve = (arrAve + startPrice[i] / startPrice.length)
  }
  console.log(arrAve);
  return arrAve;
}

function render() {

    const fourms = document.querySelector("#freeLancers");
    const fourmElements = freeLance.map((person) => {
      const element = document.createElement("li");
      element.classList.add(person.name, person.job, person.price);
      console.log(element);
      element.textContent = (`${person.name} - ${person.job} - $${person.price}`);
      return element;
    });
    freelancers.replaceChildren(...fourmElements);
    const avePrice = document.querySelector("#average");
    const avePriceElement = startPrice.map(() => {
      const average = startPrice.reduce ((a, b) => a+b)/ startPrice.length;
      console.log(average);
      console.log(avgElement);
      avgElement.textContent = (`Average Cost is $${average.toFixed(2)}`)
      return avgElement;
    });
    avePrice.replaceChildren(...avePriceElement)
}


/*function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  } */
  


function addPerson() {
    //const name = names[Math.floor(Math.random() * names.length)];
    //const job = jobs[Math.floor(Math.random() * jobs.length)];
    //const price = pay[getRandomInt(80)];
  
    //freeLance.push({ name, job, price});
    if (names.length <= 2) {
        freeLance.push({ name:"Pointdexter", job:"programmer", price:"100"});
        startPrice.push(100);
        render();
      }
    else if (freeLance.length >= maxNames){
      clearInterval(addFreeLanceId);
    }
    else{
        const name = names[Math.floor(Math.random() * names.length)];
        const job = jobs[Math.floor(Math.random() * jobs.length)];
        const price = pay[Math.floor(Math.random() * pay.length)];
        startPrice.push(price);
        console.log(startPrice);
        freeLance.push({name, job, price });
        render();

      }
    
  
}