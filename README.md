# Node.js Server Hanging on Long Request

This repository demonstrates a common issue in Node.js where a server hangs due to a long-running request that blocks the event loop.  The example uses a simple `while` loop to simulate a long task, but this could represent any operation that takes significant time to complete.

The solution demonstrates proper event loop management to prevent the server from freezing.