import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  title = 'Quotes';
  quotes: Quotes[] = [
    new Quotes(1, 'The difference between the novice and the master is that the master has failed more times than the novice has tried.', 'Koro Sensei' ,'Derrick Macharia' ,new Date(2018,3,14)),
    new Quotes(2, 'Try not to become a person of success, but rather try to become a person of value', ' Albert Einstein' , 'Ezekiel Kibyego',new Date(2021,10,10))
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

  addNewQuote(quote: Quotes){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit() {
  }


}

