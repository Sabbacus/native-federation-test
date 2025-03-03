import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <p>{{message}}</p>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'systemjs';
  message = '';

  constructor () {
    console.log('AppComponent constructor');
    System.import('https://www.example.com/foo.js').then(() => {
      console.log('foo.js loaded');
      this.message = 'SystemJS loaded the foo.js file';
    }).catch((err) => {
      console.error('foo.js failed to load', err);
      this.message = 'SystemJS failed to load the foo.js file';
    });
  }
}
