// src/app/app.component.ts

// Le décorateur Component permet de donner à Angular des informations
// supplémentaires sur une classe afin d'expliquer que :
// 1. C'est un composant ;
// 2. Il devra afficher un template HTML donné ;
// 3. Il aura des styles scopés ;
// Et beaucoup d'autres choses encore
import { Component } from '@angular/core';

@Component({
  // Le sélecteur du composant permet de dire à Angular
  // "Quand tu vois une balise <app-root>, remplaces la
  // par le rendu de ce composant
  selector: 'app-root',
  // Le template représente le HTML qui sera rendu par ce composant
  // Il peut contenir des balises HTML classiques comme des
  // appels à d'autres composants Angular
  template: `
  <div id="app">
      <h1>La Todo App</h1>

      <main>
        <ul>
          <li *ngFor="let item of tasks">
            <label>
              <input type="checkbox" id="item-{{ item.id }}" [checked]="item.done" />
              {{ item.text }}
            </label>
          </li>
        </ul>
      </main>
  </div>
  `,
  // Les styles nous permettent de créer des styles CSS *scopés*
  // C'est à dire que les règles définies ici ne s'appliqueront que sur
  // le template de ce composant, et pas en dehors
  styles: []
})
export class AppComponent {
  title = 'todoapp';
  tasks: any[] = [
    { id: 1, text: "Aller faire des courses", done: false },
    { id: 2, text: "Faire à manger", done: true },
  ];
}
