import express from "express";
import "express-async-errors";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(express.json())

type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

let planets: Planets = [
  { id: 1, name: "Earth" },
  { id: 2, name: "Mars" },
];

app.get('/api/planets', (req, res) => {
  res.status(200).json(planets);
});

app.get('/api/planets/:id', (req, res) => {
  const { id } = req.params;
  const planet = planets.find(p => p.id === Number(id));
  if (planet) {
    res.status(200).json(planet);
  } else {
    res.status(404).json({ message: "Planet not found" });
  }
});


app.post("/api/planets", (req, res) => {
    const {id, name} = req.body
    const newPlanet = {id, name}
    planets = [...planets, newPlanet]

    console.log(planets)

    res.status(201).json( { msg: "the planet has been created" })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
