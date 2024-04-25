import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Gifservice {

  private _tagsHistory: string[] = [];
  private apiKey: string = 'Rwh2VYWnq64kfcQXzuemOqcdA3TjWTKH';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) { }

  get tagsHistory() {
    return [...this._tagsHistory]
  }

  private organizeHistoty(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
  }

  searchTap(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistoty(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag)

    this.http.get(`${this.serviceUrl}/search`, {params})
      .subscribe(res => {
        console.log(res);
      })

    // opcional 'NO'
    // fetch('https://api.giphy.com/v1/gifs/search?api_key=Rwh2VYWnq64kfcQXzuemOqcdA3TjWTKH&q=valorant&limit=10')
    //   .then(res => res.json())
    //   .then(data => console.log(data));

  }
}
