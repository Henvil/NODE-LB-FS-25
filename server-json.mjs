import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log("request received");

  response.statusCode = 200;

  response.setHeader("Content-Type", "application/json");

  const jsonResponseBody = JSON.stringify({ location: "Mars" });

  response.end(jsonResponseBody);
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});

/*$response = Invoke-WebRequest -Uri http://localhost:3000 -Verbose                                  >> $response.Headers                                              
>>
DETTAGLIATO: GET with 0-byte payload
DETTAGLIATO: received 19-byte response of content type
application/json

Key            Value
---            -----
Connection     keep-alive
Keep-Alive     timeout=5
Content-Length 19
Content-Type   application/json
Date           Thu, 06 Jun 2024 15:24:22 GMT*/
