import { Component } from '@angular/core';
import { DatabaseFirebaseService } from 'src/app/services/database-firebase.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  jobs!: FormGroup;
  isFlipped: boolean = false;
  name: string = '';
  phone: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';
  newJob = false;
  jobsArray: any = [];
  images: File[] = [];

  constructor(private databaseFirebaseService: DatabaseFirebaseService) {}

  ngOnInit() {
    this.getData();
    this.createForm();
  }

  addJob() {
    this.newJob = true;
  }

  createForm() {
    this.jobs = new FormGroup({
      name: new FormControl(''),
      phone: new FormControl(Number),
      email: new FormControl('', Validators.email),
      subject: new FormControl(''),
      message: new FormControl('')
    });
  }

  toggleCard() {
    this.isFlipped = !this.isFlipped;
  }

  sendMail() {
    // Lógica para enviar el correo
    console.log('Enviando correo...');
  }

  getData() {
    this.databaseFirebaseService.getDoc('reportes', '000001').subscribe((result: any) => {
      console.log('Este es Prueba', result);
      const name = result.name;
      this.jobsArray.push(name);
    });
  }

  setJob() {
    const data = {
      name: this.jobs.value.name,
      phone: this.jobs.value.phone,
      email: this.jobs.value.email,
      subject: this.jobs.value.subject,
      message: this.jobs.value.message
    };

    // Agrega la lógica para enviar la información y las imágenes
    console.log('Enviando información y imágenes:', data, this.images);
    this.databaseFirebaseService.createDoc(data, 'reportes', '000001');
  }

  handleImageChange(event: any) {
    this.images = event.target.files;
  }

  cancelImageUpload() {
    this.images = [];
  }

  getImageSrc(image: File): string {
    const imageUrl = URL.createObjectURL(image);
    const thumbnailSize = '5cm';

    return `<img src="${imageUrl}" alt="Imagen" style="width: ${thumbnailSize}; height: ${thumbnailSize};">`;
  }
}

