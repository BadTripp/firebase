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
    showChangeItem=false;
    waitChange=false;
    showForm=false;
    risultato : any [] = [];
    constructor(private activitiesServ:ActivitiesService){
        
    }
    

    ngOnInit(): void {
        
        this.getAll();
        
        
    }
    onClickChangeItem(){
        if(!this.waitChange){
            this.showChangeItem=!this.showChangeItem
            this.waitChange=true;
        }
    }
    itemChange(item:any){
        this.waitChange=false;
        this.activitiesServ.changeActivities(item)
    }
    addBtn(){
        this.showForm=!this.showForm
    }
    addNewActivities(){
        this.showForm=!this.showForm
        this.activitiesServ.addActivities(this.newActi)
    }
    getAll(){
        this.activitiesServ.getActivities().subscribe((response)=>{
            this.risultato=response.map((elemento:any)=>{
                
                return  {id:elemento.payload.doc.id,...elemento.payload.doc.data()}
                
            });
            
        });
        
    }
    removeActivities(id:string){
       
        this.activitiesServ.deleteActivities(id);
    }
    
}