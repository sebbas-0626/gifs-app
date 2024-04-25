import { Component, ElementRef, ViewChild } from '@angular/core';
import { Gifservice } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @ViewChild('txtTapI')
  public TapInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: Gifservice) { }

  searchTap() {
    const newTap = this.TapInput.nativeElement.value;

    this.gifsService.searchTap(newTap);

    this.TapInput.nativeElement.value = '';
    console.log({ newTap });
  }
}
