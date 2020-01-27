import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'tossup-draw',
  templateUrl: './draws.component.html',
  styles: [':host {height: 100%}']
})
export class DrawsComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('/api/draws').subscribe(data => console.log(data));
  }
}
