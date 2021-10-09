import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  title = 'Quotes';
  quotes:Quotes[] = [
    {id:1, author:'Koro Sensei',name:'The difference between the novice and the master is that the master has failed more times than the novice has tried.'},
    {id:2, author:'Koro Sensei',name:"As you go through life, the might current of society is bound to get in your way and there will certainly be times that things don't go as you'd hoped. When this happens, don't look to society for a cause...Do not renounce society. Frankly, you'd be wasting your time...Instead just say, 'That's life!' and muddle your way through with frustration."}
  ];

  constructor() { }

  ngOnInit() {
  }

}
