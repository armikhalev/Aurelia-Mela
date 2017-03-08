import {HttpClient} from 'aurelia-fetch-client';

export class Koyla {
  
  private translation: string = 'translation';
  private lang: string = 'english';
  private langToTranslate: string = 'mela';
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
          if (this.langToTranslate === 'english' ){
            this.translation = data[0].word;
          }
          else {
            this.translation = data[0].la;
          }
        });
  };

  private changeLanguage():void {
      this.lang = this.lang === "english" ? "mela" : "english";
      this.langToTranslate = this.langToTranslate === "mela" ? "english" : "mela";
  }
}