import express from "express";
import {fileURLToPath} from "url"
import path from "path"

const app = express();
const PORT = 3000;

const caminho_para_pasta = path.dirname(fileURLToPath(import.meta.url))

app.use(express.static(path.join(caminho_para_pasta, "web", "html")));
app.use(express.static(path.join(caminho_para_pasta, "web", "styles")));

app.get("/", (req, res) => {
    res.sendFile(path.join(caminho_para_pasta, "web", "html", "home.html"))
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server rodando");
});


