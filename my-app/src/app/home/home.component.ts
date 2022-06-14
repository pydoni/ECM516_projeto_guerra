import { Component, ElementRef, ViewChild , AfterViewInit } from '@angular/core';

@Component({ 
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css']  
})
export class HomeComponent {
    constructor() {}

    @ViewChild('login_div') loginDiv: ElementRef;

    @ViewChild('texto_div') textoDiv: ElementRef;

    @ViewChild('botoes_div') botoesDiv: ElementRef;

    ngAfterViewInit() {
        if (window.localStorage.getItem("logado") == "true") {
            this.loginDiv.nativeElement.style.display = "none";
            this.textoDiv.nativeElement.style.display = "";
            this.botoesDiv.nativeElement.style.display = "";
        }
    }
}