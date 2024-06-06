import * as fs from "node:fs";
import { Buffer } from "node:buffer";

const data = new Uint8Array(
  Buffer.from("Sono stato generato dallo script e mi chiamo messaggio1.txt!")
);
fs.writeFile("messaggio1.txt", data, (error) => {
  if (error) throw error;
  console.log("Il file è stato salvato!");
});

const data2 = new Uint8Array(
  Buffer.from("Sono stato generato dallo script e mi chiamo messaggio2.txt!")
);
fs.writeFile("messaggio2.txt", data2, (error) => {
  if (error) throw error;
  console.log("Il file è stato salvato!");
});

fs.readFile(
  "messaggio1.txt",
  { encoding: "utf-8" },
  function (error, file1Data) {
    if (error) {
      console.error(error);
      return;
    }
    console.log(`Il contenuto del file 1 è:
     ${file1Data}`);

    fs.readFile(
      "messaggio2.txt",
      { encoding: "utf-8" },
      function (error, file2Data) {
        if (error) {
          console.error(error);
          return;
        }
        console.log(`Il contenuto del file 2 è:
         ${file2Data}`);
      }
    );
  }
);
