//Multiple conditions

const salary = 25000;
const isBCS = true;
const height = 78;
const hasCar = true;

if (salary > 20000 && height > 66) {
  console.log("Supatro");
} else {
  console.log("Onno patro khuji");
}

if (salary > 25000 || height > 72) {
  console.log("Eso baba kobul");
} else {
  console.log("Onno patro khuji");
}

if (salary > 30000 || height < 72 || isBCS == true) {
  console.log("Eso baba kobul");
} else {
  console.log("Onno patro khuji");
}

if (salary > 30000 && height < 72 && isBCS == true) {
  console.log("Eso baba kobul");
} else {
  console.log("Onno patro khuji");
}

if ((salary > 30000 && height > 72) || isBCS == true) {
  console.log("Sobai raji");
} else {
  console.log("Keu raji na");
}

if ((salary > 30000 || height > 72) && isBCS == true) {
  console.log("Sobai raji");
} else {
  console.log("Keu raji na");
}
