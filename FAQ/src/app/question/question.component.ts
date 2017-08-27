import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../models/Question';
import { DataService }from '../services/data.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input('question') question:Question;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onRemoveQuestion(question){
    this.dataService.removeQuestion(question);
  }

  onHidden(question) {
    this.question.hidden = !this.question.hidden;
  }
}
