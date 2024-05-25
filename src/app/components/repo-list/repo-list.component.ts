
// =========
// repo-list.component.ts
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { Repository } from '../../models/repository.model';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent implements OnInit, OnChanges {
  @Input() username: string = '';
  repositories: Repository[] = [];
  loading: boolean = false;
  error: boolean = false;
  page: number = 1;
  perPage: number = 10;

  constructor(private githubService: GithubService) {}

  ngOnInit() {
    this.fetchRepositories();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['username']) {
      this.page = 1;
      this.fetchRepositories();
    }
  }

  fetchRepositories() {
    this.loading = true;
    this.error = false;
    this.githubService.getRepositories(this.username, this.page, this.perPage).subscribe({
      next: (data) => {
        this.repositories = data;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }

  onPageChange(page: number) {
    this.page = page;
    this.fetchRepositories();
  }

  onPerPageChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.perPage = Number(selectElement.value);
    this.page = 1;
    this.fetchRepositories();
  }
}



