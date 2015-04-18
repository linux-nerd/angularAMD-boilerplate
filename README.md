# Boilerplate - AngularAMD + UI Router + Bootstrap

## Installation
Download the folder, and you are good to go.

## Pretty URL
In order to achieve pretty url in angular app
* Uncomment `$locationProvider.html5Mode(true)`; from `components/common/app.js`
* Uncomment `<base href="/Project/angular/">` and set the relative path(w.r.t server) to index.html from `index.html`
* Uncomment `RewriteRule ^ /Project/angular/index.html` from `.htaccess` 

## Reference
* [angularAMD](https://github.com/marcoslin/angularAMD/ "angularAMD")
* [ui-router](https://github.com/angular-ui/ui-router/ "ui-router")
* [bootstrap](https://github.com/angular-ui/bootstrap/ "bootstrap")