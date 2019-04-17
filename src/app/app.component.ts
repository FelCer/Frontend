import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';
  public pantalla: boolean = false;
  public pantallaTable: boolean = false;
  public pantallaCel: boolean = false;
  public numero: number;
  public marca: any = '';
  public modelo: any = '';
  public ano: any = "";
  public email: any = '';
  public msj: boolean = false;
  public msjDos: boolean = false;
  public correoNovalida:boolean=false;
  ngOnInit() {
    this.numero = window.screen.width;
    this.ValidarDispositivo();
  }
  ValidarDispositivo() {
    if (this.numero > 768) {
      this.pantalla = true;
      this.pantallaTable = false;
      this.pantallaCel = false;
    } else if (this.numero <= 768 && this.numero > 320) {
      this.pantalla = false;
      this.pantallaTable = true;
      this.pantallaCel = false;
    } else if (this.numero <= 320) {
      this.pantalla = false;
      this.pantallaTable = false;
      this.pantallaCel = true;
    }

  }
  ValirdarFormulario() {
    this.marca = $("#marca").val();
    this.modelo = $("#modelo").val();
    this.ano = $("#modelo").val();
    this.email = $("#email").val();
    if (this.marca != '' && this.modelo != '' && this.ano != '') {
      if (this.validarEmail(this.email)) {
        this.msj = true;
        this.msjDos = false;
        this.correoNovalida=false;
      }else{
        this.msj = false;
        this.msjDos = false;
        this.correoNovalida=true;
      }
    } else {
      this.msjDos = true;
      this.msj = false;
    }
  }
  validarEmail(mail) {
    const regExp = new RegExp(/^[a-zA-Z0-9_.]+[^-.'"!#$%&/()=?¿¡*~}ÇüéâåçêëïîÄÅ♫æÆôûÿÖø£Ø×ƒ|{Ññªº®¬½¼▓«▒»░┤©╣║╗╝¥┬├─┼¤█▄¦↨▀ßµ±‗¾¶§¸°¨☺¹³²■☻]+\@+[a-z]+\.[a-z.]{1,3}(\.[a-z]{1,3})?(\.[a-z]{1,3})?$/);
    if (regExp.test($("#email").val())) {
      return true;
    } else {
      if ($("#email").val() == '') {
        return false;
      } else {
        return false;
      }
    }
  }
}
