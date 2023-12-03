import { Component } from '@angular/core';
import { DatabaseFirebaseService } from 'src/app/services/database-firebase.service';
import { FormGroup,FormControl,Validators,FormBuilder, FormControlDirective, } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  isFlipped: boolean = false;
  
  jobs!:FormGroup;
  newJob = false;
  listJobs:any =[]
constructor(private database: DatabaseFirebaseService){

}
ngOnInit(){
  this.createForm();
  this.getData()

}
createForm(){
  this.jobs=new FormGroup({
    name: new FormControl(""),
    phone: new FormControl(""),
    email: new FormControl("", Validators.email),
    subject:new FormControl("",Validators.minLength(10)),
    message: new FormControl("")

})
}
  toggleCard() {
    this.isFlipped = !this.isFlipped;
  }

  addJob(){
    this.newJob=true;
  }
  closeAddJob(){
    this.newJob=false
  }

  getData(){
    this.database.getDoc('Registros1','00001').subscribe((result: any)=>{
      console.log(result)
      this.listJobs.push(result.subject)
    },(error=>{
      console.log(error)
    }))
  }

  setData(){
    const data = {
      name: this.jobs.value.name,
      phone: this.jobs.value.phone,
      email: this.jobs.value.email,
      subject: this.jobs.value.subject,
      message: this.jobs.value.message
    }
    console.log('Esta es data',data)

    this.database.createDoc(data,'Registros1', '00001').then(result=>{
      console.log(result)
    }).catch(error=>{
      console.log('Algo salió mal', error)
    });
     
  }
  
}
