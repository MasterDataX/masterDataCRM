import { Component } from '@angular/core';
import { DatabaseFirebaseService } from 'src/app/services/database-firebase.service';
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
constructor(private databaseFirebaseService: DatabaseFirebaseService){

}
  toggleCard() {
    this.isFlipped = !this.isFlipped;
  }

  sendMail() {
    // Lógica para enviar el correo
    console.log('Enviando correo...');
  }
  
}
