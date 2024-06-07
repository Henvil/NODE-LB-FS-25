import { nextTick } from "node:process";

function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));
    nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw ;)`);
      } else {
        reject(new Error(`${player} lost in the draw :(`));
      }
    });
  });
}

async function getDrawsResult() {
  const playerList = ["Tina", "Jorge", "Julien"];

  for (const player of playerList) {
    try {
      const result = await luckyDraw(player);
      console.log(result);
    } catch (error) {
      console.error(error.message);
    }
  }
}

getDrawsResult();
