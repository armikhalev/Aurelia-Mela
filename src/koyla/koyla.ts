import {HttpClient} from 'aurelia-fetch-client';

export class Koyla {
  
  private translation: string = 'translation';
  private lang: string = 'english';
  private word: string;
  private http = new HttpClient();

  constructor(){ 
    this.http.configure(config => {
        config
        .useStandardConfiguration()
        .withBaseUrl('http://0.0.0.0:8000/koyla/')
    });
  };

  private submitWord():void{

    this.http.fetch(this.lang + "/" + this.word)
        .then(response => response.json())
        .then(data => {
            this.translation = data[0].la;
            console.log("after done",data[0].la);
        });
  };
}