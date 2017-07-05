var express = require('express');
var app = express();
var cfenv = require('cfenv');
var bodyParser = require('body-parser');
var Conversation = require('watson-developer-cloud/conversation/v1');
var urlencodedParser = bodyParser.urlencoded({ 'extended': false })
var prompt = require('prompt-sync')();
var readlineSync = require('readline-sync');

var conversation = new Conversation({
  username: '43aa283f-6724-4c7a-87ca-66e89ccf6dfb', // replace with username from service key
  password: 'DMjjbGuXdNeq', // replace with password from service key
  path: { workspace_id: '234e6479-013f-4ca0-8402-bdc90b7f31df' }, // replace with workspace ID
  version_date: '2016-07-11'
});
var context = {};
// Get our API routes
// var api = require('./client/app');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use('/client', express.static(__dirname + '/client'));
app.use('/controllers', express.static(__dirname + '/client/controllers'));
app.use('/css', express.static(__dirname + '/client/css'));
app.use('/angular', express.static(__dirname + '/client/bower_components/angular'));
app.use('/angular-route', express.static(__dirname + '/client/bower_components/angular-route'));
app.use('/jquery', express.static(__dirname + '/client/bower_components/jquery'));
app.use('/bootstrap', express.static(__dirname + '/client/bower_components/bootstrap'));
// app.use('/answer', api)

app.get('*', function(req, res){
  res.sendFile(__dirname + '/client/index.html')
})

app.get('/api/answer', function(req, res){
  console.log('entered request')
    msg={
      message:req.body
    };
    // Start conversation with empty message.
    console.log(msg.message)
    conversation.message({'input': msg , 'context':context}, function(err, response){
      if (err) {
        console.log('error:', err)
      }
      else {
        console.log(JSON.stringify(response.output.text[0]))
        var context = response.context;
        res.json(response.output.text[0])
      }
    });
})

app.post('/api/answer', function(req, res){
    msg={
      message:req.query.message
    };
    // Start conversation with empty message.
    console.log(msg.message)
    conversation.message({'input': msg , 'context':context}, function(err, response){
      if (err) {
        console.log(msg)
        console.log('error:', err)
      }
      else {
        response.output.text[0].replace(/"/g, '')
        console.log(JSON.stringify(response.output.text[0]))
        var context = response.context;
        res.send(JSON.stringify(response.output.text[0]))
      }
    });
})
// app.post('/api/message', function(req,res){
//   var payload = {
//     context: req.body.context || {},
//     input: req.body.input || {}
//   };
//
//   //send user message to watson
//   conversation.message(payload, function(err, data) {
//     if (err) {
//       return res.status(err.code || 500).json(err);
//     }
//     return res.json(updateMessage(payload, data));
//   });
// });
// function updateMessage(input, response) {
//   var responseText = null;
//   if (!response.output) {
//     response.output = {};
//   } else {
//     return response;
//   }
//   // if (response.intents && response.intents[0]) {
//   //   var intent = response.intents[0];
//   //   // Depending on the confidence of the response the app can return different messages.
//   //   // The confidence will vary depending on how well the system is trained. The service will always try to assign
//   //   // a class/intent to the input. If the confidence is low, then it suggests the service is unsure of the
//   //   // user's intent . In these cases it is usually best to return a disambiguation message
//   //   // ('I did not understand your intent, please rephrase your question', etc..)
//   //   if (intent.confidence >= 0.75) {
//   //     responseText = 'I understood your intent was ' + intent.intent;
//   //   } else if (intent.confidence >= 0.5) {
//   //     responseText = 'I think your intent was ' + intent.intent;
//   //   } else {
//   //     responseText = 'I did not understand your intent';
//   //   }
//   // }
//   response.output.text = responseText;
//   return response;
// }

//
// Process the conversation response.
// function processResponse(res, err) {
//   if (err) {
//     console.error(err); // something went wrong
//     return;
//   }
//   // If an intent was detected, log it out to the console.
//   if (response.intents.length > 0) {
//     console.log('Detected intent: #' + response.intents[0].intent);
//   }
//
//   // Display the output from dialog, if any.
//   if (response.output.text.length != 0) {
//       console.log('answer about to be sent back to http request handler')
//       console.log(response.output.text[0]);
//       return(response.output.text[0]);
//   }
//
//   // Prompt for the next round of input.
//   // If your node is using cmd change readlineSync to prompt
//   // var newMessageFromUser = readlineSync.question('>> ');
//   conversation.message({
//       input: { text: res },
//       context : response.context,
//     }, processResponse)
//
// }

var server = app.listen(3000, function(){
  var host = server.address().address
  var port = server.address().port

  console.log('Serving running at http://localhost:%s',port)
})
