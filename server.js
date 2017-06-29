var express = require('express');
var app = express();
var cfenv = require('cfenv');
var bodyParser = require('body-parser');
var ConversationV1 = require('watson-developer-cloud/conversation/v1');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var conversation = new ConversationV1({
  username: '43aa283f-6724-4c7a-87ca-66e89ccf6dfb', // replace with username from service key
  password: 'DMjjbGuXdNeq', // replace with password from service key
  path: { workspace_id: 'WORKSPACE ID' }, // replace with workspace ID
  version_date: '2016-07-11'
});

app.use(express.static('public'));
app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.htm')
})

app.get('/answer', function(req, res){
    response={
      message:req.query.message
    };
    // Start conversation with empty message.
    conversation.message({}, processResponse);
    console.log(response)
    res.sendFile(__dirname + '/public/answer.htm')
    res.end(JSON.stringify(response))
})

// Process the conversation response.
function processResponse(err, response) {
  if (err) {
    console.error(err); // something went wrong
    return;
  }

  // Display the output from dialog, if any.
  if (response.output.text.length != 0) {
      console.log(response.output.text[0]);
  }
}

var server = app.listen(3000, function(){
  var host = server.address().address
  var port = server.address().port

  console.log('Serving running at http://%s:%s', host, port)
})
