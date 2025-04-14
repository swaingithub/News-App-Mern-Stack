const express = require('express');
const NewsController = require('../controllers/newsController');

const router = express.Router();
const newsController = new NewsController();

const setNewsRoutes = (app) => {
    router.get('/news', newsController.getAllNews);
    router.get('/news/:id', newsController.getNewsById);
    router.post('/news', newsController.createNews);
    router.put('/news/:id', newsController.updateNews);
    router.delete('/news/:id', newsController.deleteNews);

    app.use('/api', router);
};

module.exports = setNewsRoutes;