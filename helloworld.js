var http = require("http")

http.createServer(function (request, response) {

   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/html'})

   // Send the response body as "Hello World"
   response.write('<html><head><title>Company Portal</title></head>')
   response.end('<body><h1>The Company Portal</h1><h2>Greetings to all Customers</h2></body></html>\n')
}).listen(3333)

// Console will print the message
console.log('Server running')