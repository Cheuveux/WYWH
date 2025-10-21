import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Sert les fichiers Vite buildés
app.use(express.static(path.resolve(__dirname, '../dist')));

// Catch-all pour le routing du frontend
app.get(/.*/, (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 OKK lesgow on http://localhost:${PORT} 🚀`);
});