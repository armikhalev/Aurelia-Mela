export class Latay {
  private cards:any;

  constructor () {
    this.cards = [
      {
        front : "A",
        back : "Makes any word an infinitive verb",
        flip : false
      },
      {
        front : "E",
        back : "Mark of a direct object, accusative case",
        flip : false
      },
      {
        front : "I",
        back : "And",
        flip : false
      },   
      {
        front : "O",
        back : "Honorification, high style, politeness.'Omaw - please'.",
        flip : false
      },
      {
        front : "U",
        back : "Some",
        flip : false
      }
    ]
  }

  private flipCard(_card) {
    _card.flip = !_card.flip;
  }

} // End of class Latay