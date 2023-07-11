import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})





export class HomeComponent {
  
  isFlipped: boolean = false;
  name: string = '';
  phone: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

  toggleCard() {
    this.isFlipped = !this.isFlipped;
  }

  sendMail() {
    // Lógica para enviar el correo
    console.log('Enviando correo...');
  }
  
}
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    // Otros módulos importados
    FormsModule
  ],
  // Otros metadatos del módulo
})
export class AppModule { 


}