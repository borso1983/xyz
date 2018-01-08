import { Component } from '@angular/core';
import {Types} from './Types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to xyz';
  types: Types[] ;

  constructor(){
    this.types = [
              {'year': 2017,
               'title':'Jin',
                'keyword': 'emotion'},
                {
                  'year': 2018,
                   'title':'Jang',
                    'keyword': 'power',
                }];
  }

}
