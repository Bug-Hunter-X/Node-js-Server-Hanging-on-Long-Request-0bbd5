const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running task using setImmediate to yield control to the event loop
  const start = Date.now();
  let iterations = 0;
  function processRequest(){
    if(Date.now() - start < 5000){
      iterations++
      setImmediate(processRequest);
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Hello World! Completed after ${iterations} iterations`);
    }
  }
  setImmediate(processRequest);

});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});