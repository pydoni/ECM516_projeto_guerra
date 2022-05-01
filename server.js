const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.get("/", (request,response) =>{
	response.sendFile(__dirname+"/static/index.html")
});

// chamadas para login

app.get("/login",(request,response) => {
	res.sendFile(__dirname+"/static/login.html");
});

app.post("/login", (request,response)=> {
	let usuario = req.body.usuario;
	let senha = req.body.senha;
	res.send("Usuario: ${usuario} | Senha: ${senha}")
})

// chamadas para cadastro

app.get("/cadastro",(request,response) => {
        res.sendFile(__dirname+"/static/cadastro.html");
});

app.post("/cadastro", (request,response)=> {
        let usuario = request.body.usuario;
        let identidade = request.body.identidade;
	let cidade = request.body.cidade;
        let senha = request.body.senha;
        res.send("Usuario: ${usuario} | Senha: ${senha} | Identidade: ${identidade} | Cidade : ${cidade}")
})


// a chamada /mapa é onde trataremos o pin registrado por um usuario com a categoria escolhida, a coordenada do evento e a data do dia que foi registrada

app.get("/mapa",(request,response) => {
        res.sendFile(__dirname+"/static/mapa.html");
});

app.post("/mapa", (request,response)=> {
        let categoria = request.body.categoria;
        let coordenada_x = request.body.coord_x;
        let coordenada_y = request.body.coord_y;
	let data_obj = new Date();
	let data = ("0" + data_obj.getDate()).slice(-2) +"/" + ("0" + (data_obj.getMonth() + 1)).slice(-2) + " " + data_obj.getHours() + ":" +data_obj.getMinutes() +":"+ data_obj.getSeconds();
	let token = request.body.token;
        res.send("Categoria: ${categoria} | x: ${coordenada_x} | y: ${coordenada_y} | data do pin : ${data}")
})


const port = 1308

app.listen(port, () => console.log("rodando em ${port}"))


