// src/app/todo-list.component.ts

import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Tasks } from './types/task';

@Component({
    // Ce composant sera affiché par Angular à chaque fois
    // qu'un élément <app-todo-list> sera rencontré dans
    // un template HTML
    selector: 'app-todo-list',
    // Le HTML reprend ici notre liste de tâches
    template: `
        <ul>
            <li *ngFor="let item of tasks">
                <label>
                <input 
                    type="checkbox" 
                    id="item-{{ item.id }}" 
                    [checked]="item.done" 
                    (change)="toggle(item.id)"
                />
                {{ item.text }}
                </label>
                <a routerLink="/{{ item.id }}/details">Details</a>
                
            </li>
        </ul>
    `
})
export class TodoListComponent {
    @Input()
    tasks: Tasks = []; 
    @Output()
    onToggle = new EventEmitter<number>();

    // Cette méthode sera appelée lorsqu'une checkbox change
    toggle(id: number) {
      // On se sert de l'EventEmitter pour émettre l'identifiant 
      // d'une tâche qui change afin que le composant parent
      // soit au courant que cette tâche doit changer de statut
      this.onToggle.emit(id);
    }
}