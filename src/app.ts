import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router){
    config.options.pushState = true;
    config.title = 'Melasi leyfaw';
    config.map([
      { route: 'koyla', moduleId: 'koyla/koyla', name:'koylaPage',  nav: true, title: 'Koyla'},
      { route: 'latay', moduleId: 'latay/latay', name:'latayPage', nav: true, title: 'Latay'}
    ]);

    this.router = router;
  }
}