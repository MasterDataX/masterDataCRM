import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DatabaseFirebaseService {

  constructor(private firestore : AngularFirestore) { }
  //Crea documento en firebase
  createDoc(data: any, path: string, id: string){
    const collection= this.firestore.collection(path);
    return collection.doc(id).set(data);
  }
  //Muestra documento en firebase

//Este es un nuevo commit
  getDoc<tipo>(path: string, id:string){
    const collection = this.firestore.collection<tipo>(path);
    return collection.doc(id).valueChanges();
  }

  //elimina
  deleteDoc(path:string, id:string){
    const collection = this.firestore.collection(path);
    return collection.doc(id).delete();
  }
  //actualiza
  updateDoc(data: any, path: string, id: string){
    const collection = this.firestore.collection(path);
    return collection.doc(id).update(data);
  }
  getAllDocs<tipo>(path: string): Observable<tipo[]> {
    const collection = this.firestore.collection<tipo>(path);
    return collection.valueChanges().pipe(
      filter(docs => docs !== undefined)
    );
  }
}
