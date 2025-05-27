
// Import the createPlan function from the plan module and invoke it
// store returned value in a variable called yearlyPlan
import { createPlan } from './plan.js';
import { createAsparagus } from './seeds/asparagus.js';
import { createCorn } from './seeds/corn.js';
import { createPotato } from './seeds/potato.js';
import { createSunflower } from './seeds/sunflower.js';
import { createSoybean } from './seeds/soybean.js';
import { createWheat } from './seeds/wheat.js';
import { addPlant, usePlants } from './field.js';


const yearlyPlan = createPlan();
// console.log(yearlyPlan);

const asparugusSeed = createAsparagus();
const potatoSeed = createPotato();
const sunflowerSeed = createSunflower();
const soybeanSeed = createSoybean();
const wheatSeed = createWheat();
const cornSeed = createCorn();
// console.log(asparugusSeed);
// console.log(potatoSeed);
// console.log(sunflowerSeed);
// console.log(soybeanSeed);
// console.log(wheatSeed);
// console.log(cornSeed);
addPlant(asparugusSeed)
addPlant(potatoSeed)
addPlant(sunflowerSeed)
addPlant(soybeanSeed)
addPlant(wheatSeed)
addPlant(cornSeed)

const plantsInField = usePlants()
console.log(plantsInField)