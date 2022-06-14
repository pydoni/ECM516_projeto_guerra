import { Component,ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({ 
    templateUrl: 'signup.component.html',
    styleUrls: ['./signup.component.css']  
})
export class SignupComponent {
    constructor(private http : HttpClient,private router: Router) {}

    @ViewChild('user') user: ElementRef;

    @ViewChild('password') password: ElementRef;

    @ViewChild('identity') identity: ElementRef;

    @ViewChild('city') city: ElementRef;

    cadastro() {
        const url = "http://localhost:1309"
        const headers = {
            'content-type': 'application/json'
        };

        var usuario = this.user.nativeElement.value;

        var senha = this.password.nativeElement.value;

        var identidade = this.identity.nativeElement.value;

        var cidade = this.city.nativeElement.value;

        var body = {
            "usuario":usuario,
            "senha":senha,
            "identidade": identidade,
            "cidade": cidade
        }

        this.http.post(`/api/cadastro`,JSON.stringify(body),{headers})
        .subscribe(
        resultado => {
            if (resultado == true) {
                window.localStorage.setItem("logado","true")
                this.router.navigate(['home']);
            } else {
                alert("Usuário Já Cadastrado")
            }
        },
        erro => {
            if(erro.status == 400) {
                console.log(erro);
            }
            }
        );
    }
}