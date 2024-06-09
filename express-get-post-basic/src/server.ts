import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import morgan from "morgan";
import dotenv from "dotenv";
import Joi from "joi";

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
/*JOI*/
const planetSchemaJoi = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
})

const validatePlanet = (req: Request, res: Response, next: NextFunction) => {
  const {error} = planetSchemaJoi.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message})
  }
  next();
}

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

app.post("/api/planets", validatePlanet, (req, res) => {
    const {id, name} = req.body
    const newPlanet = {id, name}
    planets = [...planets, newPlanet]

    console.log(planets)

    res.status(201).json( { msg: "The Planet has been created" })
})

/*update a planet: PUT*/
app.put("/api/planets/:id", (req, res) => {
  const {id} = req.params
  const {name} = req.body
  planets = planets.map(p => p.id === Number(id) ? ({...p, name}) : p )

  console.log(planets);

  res.status(200).json({msg: "The Planet has been updated"})
})

/*delete a planet: DELETE*/
app.delete("/api/planets/:id", (req, res) => {
  const {id} = req.params
  planets = planets.filter(p => p.id !== Number(id))

  res.status(200).json({ msg: "The planet has been deleted"})
  console.log(planets)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
