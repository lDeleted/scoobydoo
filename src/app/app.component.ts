// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'scooby';
// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  
  palabra = 'SCOOBY';
  palabraOculta = '';
  intentos = 0;

  gano = false;
  perdio = false;

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor(){
    
    this.setUpScripts();

    window.onload = function() {
      window.scroll({ top: 100 });
    };

  }

  setUpScripts(){
    this.palabraOculta = '_ '.repeat(this.palabra.length);
  }

  check(letra){

    this.checkWord(letra);

    let palabraOcultaArr = this.palabraOculta.split(' ');

    for (let i = 0; i < this.palabra.length; i++) {
      
      if(this.palabra[i] === letra){

        palabraOcultaArr[i] = letra;

      }

    }

    this.palabraOculta = palabraOcultaArr.join(' ');
    this.checkWin();
    
  }

  checkWin(){

    // const palabraArr = this.palabraOculta.replace(/ /g, '');
    const palabraArr = this.palabraOculta.split(' ');
    const palabraEv = palabraArr.join('');

    if(palabraEv === this.palabra){

      this.gano = true;

    }

    if (this.intentos >= 9) {
      
      this.perdio = true;
      this.palabraOculta = this.palabra;

    }

  }

  checkWord(letra){

    if(this.palabra.indexOf(letra) <= -1){

      window.scroll({
        top: 0,
        behavior: 'smooth'
      });

      this.intentos ++;

      setTimeout(()=>{
        window.scroll({
          top: 100,
          behavior: 'smooth'
        });
      }, 800);

    }

  }

  stillPlaying(){

    this.palabra = 'PARACO';
    this.intentos = 0;
    this.gano = false;
    this.perdio = false;
    this.palabraOculta = '';
    this.setUpScripts();

  }

}