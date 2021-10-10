
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quotes } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote!: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();

  likes : number = 0;
  dislikes: number = 0;
  likeButtonClick() {
    this.likes++;
  }
  dislikeButtonClick(){
    this.dislikes++;
  }

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit(){
  }

}
