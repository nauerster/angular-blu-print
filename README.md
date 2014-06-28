#Angular-Blu-Print
Angular Blu-Print is a simple starting point to get any Angular Web App up and running in a matter of minutes. It incorporates other open-source projects including Bootstrap, jQuery, and Animate.css which are maintained via BowerJS. A GruntJS configuration has also been implemented and provides common build processes including SASS, Compass, Compile, CSSMin, HTMLHint, Concatenation, Uglify, Watch and more.

##Dependencies:
These dependencies need to be installed before trying to fire up the project.

1. [node](http://nodejs.org/): follow the link and click the button
2. [ruby](https://www.ruby-lang.org/en/installation/): you should have a mac and if you do it's already there
4. `gem install sass` && `gem install compass`
5. `npm install grunt grunt-cli bower -g` installs grunt, grunt-cli & bower globally.

##Instructions:
Follow these instructions to fire up Angular-Blu-Print after ensuring you have all dependencies listed above installed in your environment.

1. in terminal, navigate to the root directory (where Gruntfile.js is located)
	* install node modules: `npm install`
    * install bower packages: `bower install`
2. in the same directory run one of the following commands
	* `grunt serve`: runs all dev tasks
    * `grunt test`: runs all jasmine unit tests
    * `grunt build`: runs build tasks that minify & concat code and outputs the files to the `/dist` directory.
 
##Thirdparty Resources:
These are our frontend packages that are maintained with bower

* [AngularJS:](http://angularjs.org)
	* [UI Router:](https://github.com/angular-ui/ui-router)
	* [UI Bootstrap:](http://angular-ui.github.io/bootstrap)
	* [RESTangular:](https://github.com/mgonto/restangular)
* [SASS/Compass](http://sass-lang.com/)
* [Bootstrap:](http://getbootstrap.com/css/)
* [Animate.css:](http://daneden.github.io/animate.css/)
* [jQuery:](http://jquery.com/)


##Scaffold
```
angular-blu-print/
---| app/
    -----| bower_components/
    -----| font/
          ----| config.json
          ----| bluprint-icons
          ----| bluprint-fonts
    -----| js/
          ----| info/
               ----| controller.info.js
               ----| factory.info.js
               ----| directive.info.js
          ----| main/
          ----| app.js
    -----| sass/
          ----| components/
               ----| _bluprint-icons.scss
               ----| _global.sass
               ----| _media-queries.sass
               ----| _mixins.sass
               ----| _variables.sass
          ----| views/
               ----| _info.sass
               ----| _main.sass
          ----| style.sass
    -----| views/
          ----| info/
               ----| partial.info.html
          ----| main/
               ----| partial.main.html
    -----| index.html
---| node_modules/
---| bower.json (use to install third party dependencies)
---| package.json (use to install grunt dependencies)
---| Gruntfile.js (used to configure your grunt tasks)
---| README.md (used to shared helpful information about the project)
---| .gitignore (used to ignore certain files and/or directories when push to remote repo)
---| .bowerrc (used to change the install location of your bower_components)

```