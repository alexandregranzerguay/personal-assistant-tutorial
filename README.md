# Personal Assistant Tutorial
---
# Mika
Today you will learn how to create your own personal assistant using Node.js as well as three Watson APIs: Speech-to-Text, Conversation and Text-to-Speech
## Table Of Contents
[Add links to different sections]
## Requirements
+ [Bluemix account](https://console.ng.bluemix.net/registration/)
+ [CLI](https://github.com/cloudfoundry/cli#downloads)
+ [Node](https://nodejs.org/en/)
+ Git
+ Text Editor

## Installation
Clone the following repo
```sh
https://github.com/alexandregranzerguay/personal-assistant-tutorial.git
```
Checkout a branch to your name to avoid altering the source code
```sh
git checkout <branchname>
```
Install NodeJs
```sh
sudo apt-get install node
```
Install npm (server side package manager)
```sh
sudo apt-get install npm
```
Install Yarn (client side package manager)
```sh
sudo npm install -g yarn
ln -s /usr/bin/nodejs /usr/bin/node
```
Install Bower
```sh
sudo npm install -g bower
```
Install all back-end dependencies
```sh
npm install
```
Navigate to the client folder
```sh
cd client
```
Install all front-end dependencies
```sh
yarn install
```
Install Bootstrap
```sh
bower install bootstrap
```
Leave client directory
```sh
cd ..
```
## Personalizing The Source Code

## Starting Your Assistant
Install nodemon (this package will check for changes in your server.js code and restart the server automatically on saved changes instances)
```sh
sudo npm install -g nodemon
```
Run the server locally using nodemon
```sh
nodemon
```

