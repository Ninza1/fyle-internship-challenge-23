
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Repository } from '../models/repository.model';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}

  getRepositories(username: string, page: number, perPage: number): Observable<Repository[]> {
    const url = `${this.apiUrl}/${username}/repos?page=${page}&per_page=${perPage}`;
    return this.http.get<Repository[]>(url).pipe(
      switchMap(repos => {
        const repoObservables = repos.map(repo => this.fetchRepositoryLanguages(repo));
        return forkJoin(repoObservables);
      })
    );
  }

  private fetchRepositoryLanguages(repo: any): Observable<Repository> {
    const languagesUrl = repo.languages_url;
    return this.http.get<{ [language: string]: number }>(languagesUrl).pipe(
      map(languagesData => {
        const languages = Object.keys(languagesData);
        return {
          name: repo.name,
          description: repo.description,
          topics: repo.topics || [],
          languages: languages // Set the languages
        };
      })
    );
  }
}


