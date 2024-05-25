// import { Component, OnInit } from '@angular/core';
// import { ApiService } from './services/api.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent implements OnInit{
//   constructor(
//     private apiService: ApiService
//   ) {}

//   ngOnInit() {
//     this.apiService.getUser('johnpapa').subscribe(console.log);
//   }
// }

// app.component.ts

// ====================
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username: string = '';

  onSearch(username: string) {
    this.username = username;
  }
}

