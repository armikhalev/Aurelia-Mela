# Aurelia-Mela
Creating an app for melasi.pythonanywhere.com using aurelia.js and TypeScript.

The point of this project was to compare the outcome in size and time spent on a project with the following conditions:
- first project is created without use of any framework, only a bit of jQuery to handle Ajax call and DOM manipulation. MVC design pattern was used as the basis. You can look at the repositary with this project at https://github.com/armikhalev/melasi_frontend .
- Second project (this) was utilizing Aurelia framework.

Outcome:
  - non-frameworky project not minified needed to run the app files are 145.5 kB. Time spent about 20 hours.
  - Aurelia project needed to run the app files are 701Kb Minified by the cli in production mode. Time spent about 8 hours not including configuration and learning of the basics.
  Aurelia project uses Bootstrap for styling which is 37kB minified.  
  Notice that Aurelia project is reusing some of the styles and approaches from the non-frameworky project.
