import { Component,OnInit } from "@angular/core";
import { ActivitiesService } from "./activities.service";

@Component({
    selector:"<activities>",
    templateUrl:"activities.component.html"
})

export class ActivitiesComponent implements OnInit{
    newActi={
        descrizione:"",
        data:"",
        oraInizio:"",
        oraFine:""
    }
    showForm=false;
    risultato : any [] = [];
    constructor(private activitiesServ:ActivitiesService){
        
    }
    

    ngOnInit(): void {
        
        this.getAll();
        
        
    }
    addBtn(){
        this.showForm=!this.showForm
    }
    removeActivities(){
        
    }
    addNewActivities(){
        this.showForm=!this.showForm
        this.activitiesServ.addActivities(this.newActi)
    }
    getAll(){
        this.activitiesServ.getActivities().subscribe((response)=>{
            this.risultato=response.map((elemento:any)=>{
                return elemento.payload.doc.data()
            });
            
        });
        
    }
    
}