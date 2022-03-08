import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {

  public tasks: String[] = [];
  private completedTasks: String[] = [];
  //debe estar inicializado para poder hacer push
  constructor() { 
    this.tasks.push("Tarea1","Tarea3");
    this.completedTasks.push("Tarea2","Tarea4");
  }

  public addTask(task:String){
    this.tasks.push(task);
    console.log(task);
  }

  public removeTask(pos:number){
    this.tasks.splice(pos,1);
  }

  public getTasks(){
    return this.tasks;
    console.log(this.tasks);
  }

  public completeTask(pos:number){
    this.completedTasks.push(this.tasks[pos]);
    this.removeTask(pos);
  }

  public getCompletedTasks(){
    return this.completedTasks;
  }

  public removeCompleteTask(pos:number){
    this.completedTasks.splice(pos, 1);
  }
  public unCompleteTask(pos:number){
    this.tasks.push(this.completedTasks[pos]);
    this.removeCompleteTask(pos);
  }
}
