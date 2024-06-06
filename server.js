import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log("request received");

  response.statusCode = 200;

  response.setHeader("Content-Type", "text/html");

  response.end(
    `<!DOCTYPE html>
    <html lang="it">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pagina Placeholder</title>
        <style>
            body { font-family: Arial, sans-serif; }
            .container { max-width: 800px; margin: 0 auto; padding: 20px; }
            h1, h2, h3 { color: #333; }
            p { margin: 10px 0; }
            ul, ol { margin: 10px 0; padding-left: 20px; }
            table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            table, th, td { border: 1px solid #ccc; }
            th, td { padding: 10px; text-align: left; }
            img { max-width: 100%; height: auto; }
            form { margin: 20px 0; }
            label { display: block; margin: 10px 0 5px; }
            input, textarea { width: 100%; padding: 10px; margin-bottom: 10px; }
            button { padding: 10px 20px; background-color: #333; color: #fff; border: none; cursor: pointer; }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Benvenuto alla Pagina Placeholder</h1>
            <p>Questa è una pagina placeholder creata utilizzando NODE. Benvenuto!</p>

            <h2>Sezione di Testo</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

            <h3>Elenco non ordinato</h3>
            <ul>
                <li>Elemento 1</li>
                <li>Elemento 2</li>
                <li>Elemento 3</li>
            </ul>

            <h3>Elenco ordinato</h3>
            <ol>
                <li>Primo elemento</li>
                <li>Secondo elemento</li>
                <li>Terzo elemento</li>
            </ol>

            <h2>Tabella di Esempio</h2>
            <table>
                <thead>
                    <tr>
                        <th>Colonna 1</th>
                        <th>Colonna 2</th>
                        <th>Colonna 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Dato 1</td>
                        <td>Dato 2</td>
                        <td>Dato 3</td>
                    </tr>
                    <tr>
                        <td>Dato 4</td>
                        <td>Dato 5</td>
                        <td>Dato 6</td>
                    </tr>
                </tbody>
            </table>`
  );
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
