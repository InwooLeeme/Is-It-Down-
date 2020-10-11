import express from "express";
import request from "request";

const app = express();

const PORT = 4000;

const getUrl = (req, res) => {
  const {
    query: { url },
  } = req;
  console.log(url);
  request(
    url.startsWith("http") ? url : `http://${url}`,
    (error, response, body) => {
      if (error) {
        console.log(error);
        res.send("Down!");
        return;
      } else {
        if (response.statusCode <= 445) {
          res.send("Up!");
        } else {
          res.send("Down!");
        }
      }
    }
  );
};

app.get("/", getUrl);

// Codesanbox does not need PORT :)
app.listen(PORT, () => console.log(`Listening!`));
