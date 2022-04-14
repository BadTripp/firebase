import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";

@Injectable()

export class ActivitiesService{

    constructor(private fire:AngularFirestore){}

    addActivities(newAct:any){
        
        this.fire.collection("activities").add(newAct)
    }
    getActivities(){
        return this.fire.collection("activities").snapshotChanges();
    }
}