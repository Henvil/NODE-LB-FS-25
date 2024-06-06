import * as fs from "node:fs";

fs.readFile(
  "fileLetturaEsercizio.txt",
  { encoding: "utf-8" },
  function (error, file1Data) {
    if (error) {
      console.error(error);
      return;
    }
    console.log(`Il contenuto del file 1 è:
     ${file1Data}`);

    fs.readFile(
      "fileLetturaEsercizioCopia.txt",
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
