# WebDriver I/O from scratch
## 1. Prerequisites
#### 1.1. Node.js:
Install the latest Node.js **Recommended For Most Users** from
https://nodejs.org/en/
#### 1.2. Git:
Install the latest Git from 
https://git-scm.com/
#### 1.3. Install Java:
https://www.java.com/en/download/

===

for Windows:
#### 1.4. Node Version Manager (nvm-windows):
Install the nvm-windows from
https://github.com/coreybutler/nvm-windows/releases
#### 1.5. Install all the required tools and configurations using Microsoft's windows-build-tools:
Open Command Prompt and run the following script:
````
npm install --global --production windows-build-tools
````

## 2. Creating project
#### 2.1. Create project folder:
Open terminal and navigate to desired folder where you're going to store all of your projects. For example `projects` folder:
````
cd projects
````
Create a folder for automation project. For example, `automation-webdriverio`:
````
mkdir automation-webdriverio
````
And navigate to the created folder:
````
cd automation-webdriverio
````
#### 2.2. Initialize your project:
````
 npm init
````
Click 'Enter' for every item to accept default values or specify whatever you like.
This action creates `package.json` file.

## 3. Modules installation and configuration
#### 3.1. Install webDriver I/O:
````
 npm i --save-dev webdriverio
````
#### 3.2. Install Selenium:
````
 npm i --save-dev wdio-selenium-standalone-service
````
#### 3.3. Create WebDriver I/O configuration:
MacOS:
````
 ./node_modules/.bin/wdio config
````
Windows:
````
 .\node_modules\.bin\wdio config
````
Click `Enter` for the following items:
````
Where do you want to execute your tests?:
On my local machine
````
````
Which framework do you want to use?:
mocha
````
Type `Y` and click `Enter` for the following:
````
Shall I install the framework adapter for you? (Y/n):
Y
````
Type `./test/**/*.js` and click `Enter` for the following:
````
Where are your test specs located?
./test/**/*.js
````
Just click `Enter` for the following items:
````
Which reporter do you want to use?
dot
````
````
Do you want to add a service to your test setup?
selenium-standalone
````
````
Level of logging verbosity
silent
````
````
In which directory should screenshots gets saved if a command fails? (./errorShots/)
````
Type `https://artsenius.github.io` and click `Enter` for the following:
````
What is the base url?
https://artsenius.github.io
````
Wait till the end of the installation process.

## 4. Creating the first test
#### 4.1. Create `test` folder and open it:
````
mkdir test
cd test
````

#### 4.2. Create `test.js` file and open it:
MacOS:
````
touch test.js
open test.js
````
Windows:
````
copy NUL test.js
test.js
````
#### 4.3. Add the first test:
````
const assert = require('assert');

describe('Page opening', function () {
  it('get title', function(){
    browser.url('/Bug-Tracker'); //open baseUrl + string passed in .url() function
    let title = browser.getTitle(); //get page title and assign it to the "title" variable
    browser.pause(5000); //just pause to visually see that something is happening on the page
    console.log(title); //log "title" variable
    assert.equal(title, 'Bug Tracker', 'Title is incorrect'); //compare that "title" variable equals to "Bug Tracker" and error-message if not
  })
});
````

## 5. WebDriver I/O initial configuration
#### 5.1. Add a script for running WebDriver I/O tests:
Open `package.json` and modify `test` script:
````
"test": "wdio wdio.conf.js"
````
Now you can start your tests using `npm test` script.

## 6. Install additional reporters
#### 6.1. Spec reporter:
````
npm install wdio-spec-reporter --save-dev
````
#### 6.2. Allure reporter:
````
npm install wdio-allure-reporter --save-dev
````

## 7. `wdio.conf.js` configuration
#### 7.1. Configure browser:
````
maxInstances: 1,
browserName: 'chrome'
````
#### 7.2. Configure reporters:
uncomment `// services: [],`
and then replace by:
````
services: ['selenium-standalone'],
````
#### 7.3. Configure services:
uncomment `// reporters: ['dot'],`
and then replace by:
````
reporters: ['dot', 'spec', 'allure'],
  reporterOptions: {
    allure: {
      outputDir: 'allure-results'
    }
  },
````

## 8. Running the first test
#### 8.1. Run the first test:
````
npm test
````
Wait until test is finished. 
You should see the message that 1 test passed.


## TODO:
GIT
.gitignore
