import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {

  questions:Question[];

  constructor() {

/*  Test Data
    this.questions = [
      {
        text: 'what is your name?',
        answer: 'my name is mobeen',
        hidden: true
      },
      {
        text: 'what is your favorite colour?',
        answer: 'blue',
        hidden: true
      },
      {
        text: 'How old are you?',
        answer: '23',
        hidden: true
      }
    ];
*/
  }

  getQuestions() {
    if (localStorage.getItem('questions') === null) {
      this.questions = [];
    } else {
      // Convert questions into strings
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }

  addQuestion(question:Question) {
    this.questions.unshift(question);

    let questions;

    if (localStorage.getItem('questions') === null) {
      questions = [];
      // Push new question
      questions.unshift(question);
      // Set new array to LS
      localStorage.setItem('questions', JSON.stringify(questions));
    } else {
      questions = JSON.parse(localStorage.getItem('questions'));
      questions.unshift(question);
      // Re set LS
      localStorage.setItem('questions', JSON.stringify(questions));
    }

  }

  removeQuestion(question:Question) {
    for(let i = 0; i < this.questions.length; i++) {
      if(question == this.questions[i]) {
        this.questions.splice(i, 1);
        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    }
  }

}
