// src/app/types/task.ts

// Représentons une tâche par tout objet qui aurait :
export type Task = {
    // Une propriété id numérique
    id: number;
    // Une propriété text de type string
    text: string;
    // Une propriété done de type booléen
    done: boolean;
}

// src/app/types/task.ts
export type Tasks = Task[];