const Express = require('express');
const app = Express();
const porta = 4000;

// engine vai ser ejs
app.set("view engine", "ejs");

// pasta estatica de arquivos
app.use(Express.static("public")); 

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(porta, () => {

    console.log("Servidor rodando na porta: " + porta);

});