import express from "express";
import request from "request";

const app = express();

const PORT = 4000;

// Codesanbox does not need PORT :)
app.listen(PORT, () => console.log(`Listening!`));
