// src/app/task-form.component.ts

import { Component, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: "app-task-form",
    template: `
        <form (ngSubmit)="onSubmit()" [formGroup]="form">
            <input 
              formControlName="text"
              type="text" 
              name="todo-text" 
              placeholder="Ajouter une tâche" 
            />
            <button>Ajouter</button>
        </form>
    `
})
export class TaskFormComponent {
    @Output()
    onNewTask = new EventEmitter<string>();

    form = new FormGroup({
        text: new FormControl()
    }); 

    onSubmit() {
        // Au moment de la soumission, on va déclencher un événement
        // Et la donnée que l'on va émettre sera la valeur du champ 
        // "text" qui se trouve dans notre formulaire !
        this.onNewTask.emit(this.form.value.text);

        // On pourra même réinitialiser la valeur du formulaire
        // une fois que le traitement sera terminé :
        this.form.setValue({
            text: ''
        }); 
    }
}