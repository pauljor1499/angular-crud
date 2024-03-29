import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { SuperHeroes } from './super-heroes';
import { CreateOrUpdateSuperHero } from './create-or-update-super-hero';

const BASE_URL = "http://localhost:3000/super-heroes";

@Injectable({
	providedIn: 'root'
})

export class SuperHeroesService {

	constructor(private http: HttpClient) { }

	get() {
		return this.http.get<SuperHeroes[]>(BASE_URL);
	}

	create(superHero: CreateOrUpdateSuperHero) {
		return this.http.post(BASE_URL, superHero);
	}

	getByID(id: string) {
		return this.http.get<SuperHeroes>(`${BASE_URL}/${id}`);
	}

	update(id: string, superHero: CreateOrUpdateSuperHero) {
		return this.http.put(`${BASE_URL}/${id}`, superHero);
	}

	delete(id: string) {
		return this.http.delete(`${BASE_URL}/${id}`);
	}

}
