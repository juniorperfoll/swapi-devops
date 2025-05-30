const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/personagem/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
    const personagem = response.data;

    res.json({
      nome: personagem.name,
      altura: personagem.height + " cm",
      naves: personagem.starships.length > 0 ? personagem.starships : ["Nenhuma nave encontrada"]
    });
  } catch (err) {
    res.status(500).json({ erro: "Erro ao buscar personagem" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
