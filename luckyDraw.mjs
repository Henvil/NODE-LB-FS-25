import { nextTick } from "node:process";

function luckyDraw(giocatore) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));
    process.nextTick(() => {
      if (win) {
        resolve(`${giocatore} won a prize in the draw ;)`);
      } else {
        reject(new Error(`${giocatore} lost in the draw :(`));
      }
    });
  });
}

luckyDraw("Joe")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error.message);
  });

luckyDraw("Caroline")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error.message);
  });

luckyDraw("Sabrina")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error.message);
  });
