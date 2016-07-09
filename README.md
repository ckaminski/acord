# acord
A Cordova project using Aurelia and Bootstrap

Important files
  - config.js -> this stores config data for the app.  Imported by sources in www/src
  - www/jspm_packages -> this is a symlink to jspm_packages in the root dir.  This may or may not be temporary.
  
Building: 
  - npm install 
  - jspm install -y
  - cordova platform add browser
  - cordova build
  - cordova run browser 
  
  
