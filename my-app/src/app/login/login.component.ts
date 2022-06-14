import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({ 
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css'] 
})
export class LoginComponent {
    constructor(private http : HttpClient,private router: Router) {}

    @ViewChild('user') user: ElementRef;

    @ViewChild('password') password: ElementRef;

    login() {
        const url = "http://localhost:1309"
        const headers = {
            'content-type': 'application/json'
        };

        var usuario = this.user.nativeElement.value;

        var senha = this.password.nativeElement.value;

        var body = {
            "usuario":usuario,
            "senha":senha
        }

        this.http.post(`/api/login`,JSON.stringify(body),{headers})
        .subscribe(
        resultado => {
            if (resultado == true) {
                window.localStorage.setItem("logado","true")
                this.router.navigate(['home']);
            } else {
                alert("Usuário Não Encontrado")
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