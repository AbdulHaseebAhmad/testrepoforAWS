import express from 'express';
 
const app = express();
const PORT = 5000;
// Middleware to parse JSON
app.use(express.json());

// Serve static files from the "public" directory
 
// Home route
app.get('/', (req, res) => {
  res.send('Welcome to your simple Express app using ES Modules!');
});

// Example API endpoint
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
