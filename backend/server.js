import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Hello World API
app.get('/api/hello', (req, res) => {
  res.json({ 
    message: 'Hello World from independent backend!',
    server: 'Express on ' + process.platform,
    timestamp: new Date().toISOString()
  });
});

// POST example
app.post('/api/data', (req, res) => {
  const data = req.body;
  res.json({ 
    message: 'Data received',
    received: data,
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
