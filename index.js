const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors())

const categories = require('./data/categories.json');
const news = require('./data/news.json')

app.get('/', (req, res) => {
    res.send('News API running');
})

app.get('/category/:cateId', (req, res) => {
    const id = req.params.cateId;
    if (id === '08') {
        res.send(news)
    }
    else {
        const selectedCategory = news.filter(n => n.category_id === id);
        res.send(selectedCategory)
    }
})

app.get('/news', (req, res) => {
    res.send(news)
})

app.get('/news/:newsId', (req, res) => {
    const id = req.params.newsId;
    const selectedItems = news.find(n => n._id === id);
    res.send(selectedItems)
})

app.get('/news-categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log('server is running on', port)
})