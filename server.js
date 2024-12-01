const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para servir archivos estáticos
app.use(express.static('public'));

// Middleware para parsear JSON
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Datos de ejemplo
let pets = [
  { id: 1, name: 'Max', type: 'Perro', age: 3 },
  { id: 2, name: 'Luna', type: 'Gato', age: 2 },
  { id: 3, name: 'Rocky', type: 'Perro', age: 5 }
];

// GET todos los pets
app.get('/api/pets', (req, res) => {
  res.json(pets);
});

// GET un pet por ID
app.get('/api/pets/:id', (req, res) => {
  const pet = pets.find(p => p.id === parseInt(req.params.id));
  if (!pet) return res.status(404).send('Mascota no encontrada');
  res.json(pet);
});

// POST nuevo pet
app.post('/api/pets', (req, res) => {
  const pet = {
    id: pets.length + 1,
    name: req.body.name,
    type: req.body.type,
    age: req.body.age
  };
  pets.push(pet);
  res.status(201).json(pet);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});