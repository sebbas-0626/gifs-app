import { Component } from '@angular/core';
import { Gifservice } from 'src/app/core/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  // private gifsService

  constructor(private gifsService: Gifservice) { }

  get tags(){
    return this.gifsService.tagsHistory;
  }
}
