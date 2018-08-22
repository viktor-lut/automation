# WebDriver I/O from scratch
## 1. Prerequisites
#### 1.1. Node.js:
Install the latest Node.js from
https://nodejs.org/en/
#### 1.2. Git:
Install the latest Git from 
https://git-scm.com/
## 2. Creating project
#### 2.1. Create project folder:
Open terminal and navigate to desired folder where you're going to store all of your projects. For example `projects` folder:
````
cd projects/
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
#### 2.3. Install webDriver I/O and Selenium:
````
 npm i --save-dev webdriverio selenium-standalone
````