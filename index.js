import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://random.dog/woof.json";

app.use(express.static("public"));

app.get("/", async (req, res)=>{
    try {
        const result = await axios.get(API_URL);
        res.render("index.ejs", { url: result.data.url });
      } catch (error) {
        console.log(error.response.data);
        res.status(500);
      }
})

app.get("/submit", async (req, res)=>{
    try {
        const result = await axios.get(API_URL);
        res.redirect("/");
      } catch (error) {
        console.log(error.response.data);
        res.status(500);
      }
})
app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
});