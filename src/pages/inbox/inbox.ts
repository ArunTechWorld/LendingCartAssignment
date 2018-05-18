import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, TextInput, Content, } from 'ionic-angular';
import { InboxProvider } from '../../providers/inbox/inbox';

/**
 * Generated class for the InboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {
  @ViewChild('commentInput') commentInput: TextInput;
  @ViewChild(Content) content: Content;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private inboxProvider: InboxProvider, ) {
  }
  private inboxComments = [];
  private newComment = this.initializeNewComment();
  private edititingComment = this.initializeNewComment();
  private isReply = false;
  private filteredComments;

  /*Once page loaded , loading initial comments. If any comments stored fetching and displaying comments from service,
    which in turn stores inlocal storage(data available even if application quits and restarts)*/
  ionViewDidLoad() {
    this.inboxComments = this.inboxProvider.getStoredComments();
    this.filteredComments = this.inboxComments;
    this.focusCommentSection();
  }

  //function initializae the comment object based on it is new comment, existing comment or reply comment.
  initializeNewComment(editComment?, replay?) {
    let replyId;
    const comment = {
      title: (editComment) ? editComment.title : '',
      message: (editComment) ? editComment.message : '',
      replyId: (editComment && editComment.replyId != null && editComment.replyId > -1) ? editComment.id : null,
      id: 0,
    };
    if (replay && replay != 0) {
      comment.replyId = editComment.id;
    }
    else if (editComment && editComment.id) {
      comment.id = editComment.id
    }
    return comment;
  }

  /*Function to add new comment and save the existing commint after editing
  If it is new comment it will directly push to array,
  If it is reply comment, then it will store the reply id as initial comment id for future refrence,
  If it is edit comment it will take comment id and update the comment*/
  addNewComment() {
    if(!this.newComment.title || !this.newComment.message){
      return;
    }
    const message = {
      title: this.newComment.title,
      message: this.newComment.message,
      replyId: (this.edititingComment.replyId != null && this.edititingComment.replyId > -1) ? this.edititingComment.replyId : null,
      id: (this.edititingComment.id) ? this.edititingComment.id : this.inboxComments.length + 1,
    };

    //If it is reply comment
    if (this.isReply) {
      message.replyId = this.edititingComment.id;
      message.id = this.inboxComments.length + 1;
      for (let i = 0; i < this.inboxComments.length; i++) {
        if (this.inboxComments[i].id === this.edititingComment.replyId) {
          let comments = this.inboxComments;;
          let pushLocationArray = comments.splice(0, i + 1);
          pushLocationArray.push(message);
          this.inboxComments = pushLocationArray.concat(comments);
          this.refreshCommentSection();
          return;
        }
      }
    }

    //If it is edit comment
    else if (this.edititingComment.id) {
      for (let i = 0; i < this.inboxComments.length; i++) {
        if (this.inboxComments[i].id === this.edititingComment.id) {
          this.inboxComments[i] = message;
          this.refreshCommentSection();
          return;
        }
      }
    }
    //If it is new comment
    else {
      this.focusCommentSection();
      this.inboxComments.push(message);
      this.refreshCommentSection();
    }
  }

  //Delete the existing comment
  deleteComment(comment) {
    for (let i = 0; i < this.inboxComments.length; i++) {
      if (this.inboxComments[i].id === comment.id) {
        this.inboxComments.splice(i, 1);
        // Need to implement delete all related replys , once parent is removed
        this.refreshCommentSection();
        return;
      }
    }
  }


  //Function triggered when user click on Edit or Reply, takes the relevent comment id and initialize the local objects
  editComment(comment, id) {
    this.newComment = this.initializeNewComment();
    this.isReply = (id != 0) ? true : false;
    this.edititingComment = this.initializeNewComment(comment, id);
    if (!this.isReply) {
      this.newComment = this.initializeNewComment(comment);
    }
    this.focusCommentSection();
  }

  //Refresh the comments section
  refreshCommentSection() {
    this.isReply = false;
    this.newComment = this.initializeNewComment();
    this.edititingComment = this.initializeNewComment();
    this.inboxProvider.storeComments(this.inboxComments);
    this.filteredComments = this.inboxComments;
  }

  //Search function, will take input box value and return the filtered value which are matching.
  getItems(ev: any) {
    // set val to the value of the searchbar
    let val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.filteredComments = this.inboxComments.filter((comment) => {
        return (comment.title.toLowerCase().indexOf(val.toLowerCase()) > -1 || comment.message.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      // By default all users will be shown
      this.filteredComments = this.inboxComments;
    }
  }

  //By default focus on the input field
  focusCommentSection() {
    setTimeout(() => {
      this.commentInput.setFocus();
      this.content.scrollToBottom();
    }, 150);
  }

}
