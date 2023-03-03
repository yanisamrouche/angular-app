// src/app/api/tasks.service.ts

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Tasks } from "../types/task";


// Nous créons un service, c'est un objet que l'on pourra utiliser
// au sein de nos composants ou même dans d'autres services ! Afin de ne pas avoir à instancier
// nous même ce service lorsqu'on en aura besoin, on peut s'appuyer sur Angular pour l'instancier
// pour nous à la demande : Merci Angular DI (Dependency Injection) System !
// Pour indiquer à Angular qu'il devra se charger de l'instanciation de cette classe, on utilise le
// décorateur @Injectable() :
@Injectable()
export class TasksService {

    /**
     * Dans ce service, nous allons envoyer des requêtes HTTP, nous demanderons donc
     * au système d'injection de dépendances d'Angular de nous injecter une instance du HttpClient
     */
    constructor(private http: HttpClient) { }

    /**
     * Récupère l'ensemble des lignes de l'API et retourne un tableau de tâches
     */
    findAll(): Observable<Tasks> {
        return this.http.get<Tasks>("https://fdezozztgafhxkllqbnh.supabase.co/rest/v1/todos", {
            headers: {
                "Content-Type": "application/json",
                apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkZXpvenp0Z2FmaHhrbGxxYm5oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc1MDc4NDQsImV4cCI6MTk5MzA4Mzg0NH0.rpOybLjWOaGD-ArHkP_RYv0SXZNPfjaGDStddH7vXeI"
            }
        });
    }

    /**
     * Met à jour le statut d'une tâche et retourne la tâche mise à jour (dans un tableau contenant une tâche)
     */
    toggleDone(id: number, isDone: boolean): Observable<Tasks> {
        return this.http.patch<Tasks>("https://fdezozztgafhxkllqbnh.supabase.co/rest/v1/todos" + '?id=eq.' + id, {
            done: isDone
        }, {
            headers: {
                "Content-Type": "application/json",
                apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkZXpvenp0Z2FmaHhrbGxxYm5oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc1MDc4NDQsImV4cCI6MTk5MzA4Mzg0NH0.rpOybLjWOaGD-ArHkP_RYv0SXZNPfjaGDStddH7vXeI",
                Prefer: "return=representation"
            }
        });
    }

    /**
     * Créé une tâche auprès de l'API qui nous retournera un tableau contenant la tâche
     * nouvellement créée
     */
    create(text: string): Observable<Tasks> {
        return this.http.post<Tasks>("https://fdezozztgafhxkllqbnh.supabase.co/rest/v1/todos", {
            text: text,
            done: false
        }, {
            headers: {
                "Content-Type": "application/json",
                apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkZXpvenp0Z2FmaHhrbGxxYm5oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc1MDc4NDQsImV4cCI6MTk5MzA4Mzg0NH0.rpOybLjWOaGD-ArHkP_RYv0SXZNPfjaGDStddH7vXeI",
                Prefer: "return=representation"
            }
        });
    }

    findOne(id: number): Observable<Tasks> {
        return this.http.get<Tasks>("https://fdezozztgafhxkllqbnh.supabase.co/rest/v1/todos" + '?id=eq.' + id, {
            headers: {
                "Content-Type": "application/json",
                apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkZXpvenp0Z2FmaHhrbGxxYm5oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc1MDc4NDQsImV4cCI6MTk5MzA4Mzg0NH0.rpOybLjWOaGD-ArHkP_RYv0SXZNPfjaGDStddH7vXeI",
                Prefer: "return=representation"
            }
        });
    }
}