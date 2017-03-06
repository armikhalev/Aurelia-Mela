declare var $;
// import {HttpClient} from 'aurelia-fetch-client';

export class Koyla {

  "use strict";
  
  translation: string = 'translation';
  lang: string = 'english';
  word: string;

  constructor(){ };

  submitWord(){
    console.log("before /n");

     $.getJSON("http://0.0.0.0:8000/koyla/" + this.lang + "/" + this.word)
     .done(function(data) {
          this.translation = data[0].la;
          console.log("after done",data[0].la);
     })
     .fail(function() {
         console.log('Oh no, something went wrong!');
     });
  };

}