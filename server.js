const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const mongoose = require("mongoose");
//mongoose.set("debug",true)
mongoose.connect("mongodb://localhost:27017/dbLingProg");
const Schema = mongoose.Schema;

const cadastroSchema = new Schema({usuario : String,senha : String,identidade: String,cidade : String});

const Conta = mongoose.model("contas", cadastroSchema);
Conta.find({"usuario":"Zelensky"});

app.use(bodyParser.json());

// chamadas para login

app.post("/login", (request,response)=> {
        const usuario_req = request.body.usuario;
        const senha_req = request.body.senha;
        Conta.find({usuario:usuario_req, senha:senha_req}, (err,docs)=>{
                if(err){
                        console.log(err);
                }
                else{
                        console.log("foi",docs);
                        if(docs.length == 0){
                                response.send("False")
                        }else{
                                response.send("True")
                        }
                }
        });
})

// chamadas para cadastro

app.post("/cadastro", (request,response)=> {
        const usuario_req = request.body.usuario;
        const id_req = request.body.identidade;
        const cidade_req = request.body.cidade;
        const senha_req = request.body.senha;

        Conta.find({$or:[{usuario:usuario_req},{identidade:id_req}]},
                (err,docs)=>{
                        if(err){
                                console.log(err);
                        }else{
                                if(docs.length == 0){
                                        const novo_usuario = new Conta({usuario :usuario_req,senha:senha_req,identidade:id_req,cidade:cidade_req});
                                        novo_usuario.save();
                                        response.send("True");
                                }else{
                                        response.send("False");
                                }
                        }
                }
        );

})


// a chamada /mapa é onde trataremos o pin registrado por um usuario com a categoria escolhida, a coordenada do evento e a data do dia que foi registrada

app.post("/mapa", (request,response)=> {
        const categoria = request.body.categoria;
        const coordenada_x = request.body.coord_x;
        const coordenada_y = request.body.coord_y;
        const data_obj = new Date();
        const data = ("0" + data_obj.getDate()).slice(-2) +"/" + ("0" + (data_obj.getMonth() + 1)).slice(-2) + " " + data_obj.getHours() + ":" +data_obj.getMinutes() +":"+ data_obj.getSeconds();
        const token = request.body.token;
        response.send(`Categoria: ${categoria} | x: ${coordenada_x} | y: ${coordenada_y} | data do pin : ${data}`)
})


const port = 1309

app.listen(port, () => console.log(`rodando em ${port}`))

