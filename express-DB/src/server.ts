import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import morgan from "morgan";
import dotenv from "dotenv";
import { getAll, getOneById, create, updateById, deleteById } from "./controllers/planets.js";
import Joi from "joi";
import pgPromise from "pg-promise";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const db = pgPromise()("postgres://postgres:postgres@localhost:5432/MyTestDB")
console.log(db)

app.use(morgan("dev"));
app.use(express.json());

const planetSchemaJoi = Joi.object({
  id: Joi.number().integer().required(),
  name: Joi.string().required(),
});

const validatePlanet = (req: Request, res: Response, next: NextFunction) => {
  const { error } = planetSchemaJoi.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

app.get("/api/planets", getAll);
app.get("/api/planets/:id", getOneById);
app.post("/api/planets", validatePlanet, create);
app.put("/api/planets/:id", validatePlanet, updateById);
app.delete("/api/planets/:id", deleteById);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
