/*************************************************************

You should implement your request handler function in this file.

requestHandler is already getting passed to http.createServer()
in basic-server.js, but it won't work as is.

You'll have to figure out a way to export this function from
this file and include it in basic-server.js so that it actually works.

*Hint* Check out the node module documentation at http://nodejs.org/api/modules.html.

**************************************************************/

var requestHandler = function(request, response) {
  // Request and Response come from node's http module.
  //
  // They include information about both the incoming request, such as
  // headers and URL, and about the outgoing response, such as its status
  // and content.
  //
  // Documentation for both request and response can be found in the HTTP section at
  // http://nodejs.org/documentation/api/

  // Do some basic logging.
  //
  // Adding more logging to your server can be an easy way to get passive
  // debugging help, but you should always be careful about leaving stray
  // console.logs in your code.
  console.log("Serving request type " + request.method + " for url " + request.url);

  // The outgoing status.

// response.statusCode = 200;
console.log(response.statusCode);
  // See the note below about CORS headers.
  var headers = defaultCorsHeaders;

if(request.method === 'GET'){
  console.log('This is statusCode before if', response.statusCode);
  response.statusCode = 200;
  console.log('This is statusCode after if', response.statusCode);

}  

// response(response.url, function(GET, response, body){
  

//   return statusCode;
// })
  // Tell the client we are sending them plain text.
  //
  // You will need to change this if you are sending something
  // other than plain text, like JSON or HTML.
  headers['Content-Type'] = "text/JSON";

  // .writeHead() writes to the request line and headers of the response,
  // which includes the status and all headers.
  console.log('What is response?', response);
  console.log('What is request?', request);
  console.log('This is what statusCode is', response.statusCode);
 response.writeHead(response.statusCode, headers);
  
  // if(request.method === 'GET'){
  // response.writeHead('/log', statusCode)
    
  // }
  // Make sure to always call response.end() - Node may not send
  // anything back to the client until you do. The string you pass to
  // response.end() will be the body of the response - i.e. what shows
  // up in the browser.
  //
  // Calling .end "flushes" the response's internal buffer, forcing
  // node to actually send all the data over to the client.
  response.end("Hello, World!");
};


//Process the type of request

//based on request send a response with a status code of 200




// These headers will allow Cross-Origin Resource Sharing (CORS).
// This code allows this server to talk to websites that
// are on different domains, for instance, your chat client.
//
// Your chat client is running from a url like file://your/chat/client/index.html,
// which is considered a different domain.
//
// Another way to get around this restriction is to serve you chat
// client from this domain by setting up static file serving.
var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};
exports.requestHandler = requestHandler;



    // OK: 200,
    // created: 201,
    // accepted: 202,
    // badRequest: 400,
    // unauth: 401,
    // forbidden: 403,
    // notFound: 404,
    // requestTimeout: 408








