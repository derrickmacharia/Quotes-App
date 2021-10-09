import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  title = 'Quotes';
  quotes: Quotes[] = [
    new Quotes(1, 'The difference between the novice and the master is that the master has failed more times than the novice has tried.', '_Koro Sensei'),
    new Quotes(2, 'Try not to become a person of success, but rather try to become a person of value', '_Albert Einstein')
  ];

  toggleDetails(index:number){
    this.quotes[index].showCreator = !this.quotes[index].showCreator;
  }

  deleteQuote(isComplete: any, index: any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
// The difference between the novice and the master is that the master has failed more times than the novice has tried.

