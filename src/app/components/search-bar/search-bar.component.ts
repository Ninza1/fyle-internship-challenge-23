import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  username: string = '';
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  
  onSearch() {
    this.search.emit(this.username)
  
  }

}



