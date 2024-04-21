import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();

app.use(cors());

app.get('/fetch-content', async (req, res) => {
    const url = `https://get-qr.com/content/${req.query.path}`;
    try {
        const response = await axios.get(url);
        if (response.headers['content-type'].includes('text/html')) {
            res.send(response.data);  // Отправляем HTML напрямую клиенту
        } else {
            throw new Error('Invalid content type, expected HTML');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Не удалось загрузить данные');
    }
});




const PORT = 3001;
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
