import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class Gifservice {

  private _tagsHistory:string[] =[];

  constructor() { }

  get tagsHistory(){
    return [...this._tagsHistory]
  }

searchTap(tag:string){
  this._tagsHistory.unshift(tag);
  console.log(this._tagsHistory);

}
}
