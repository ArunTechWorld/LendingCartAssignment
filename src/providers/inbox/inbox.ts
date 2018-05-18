import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the InboxProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InboxProvider {

  constructor(public http: HttpClient) {
    console.log('Hello InboxProvider Provider');
  }
  private preDefinedComments = [{
    title: 'Arun',
    message: 'Hi had your lunch?',
    replyId: null,
    id: 1,
  }, {
    title: 'Barath',
    message: 'Yes You?',
    replyId: 1,
    id: 2,
  }, {
    title: 'Arun',
    message: 'I had.',
    replyId: 2,
    id: 3,
  }, {
    title: 'Barath',
    message: 'Hi All',
    replyId: null,
    id: 4,
  }, {
    title: 'Anand',
    message: 'Hi Barath',
    replyId: 4,
    id: 5,
  }];
  getStoredComments(){
    const comments=localStorage.getItem('comments');
    if(comments){
      return JSON.parse(comments);
    }else{
      return this.preDefinedComments;
    }
  }

  storeComments(comments){
    // this.preDefinedComments=comments;
    localStorage.setItem('comments',JSON.stringify(comments));
  }

}
