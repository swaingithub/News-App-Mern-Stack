class NewsController {
    constructor(newsModel) {
        this.newsModel = newsModel;
    }

    async getAllNews(req, res) {
        try {
            const news = await this.newsModel.find();
            res.status(200).json(news);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getNewsById(req, res) {
        try {
            const news = await this.newsModel.findById(req.params.id);
            if (!news) {
                return res.status(404).json({ message: 'News not found' });
            }
            res.status(200).json(news);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createNews(req, res) {
        const news = new this.newsModel(req.body);
        try {
            const savedNews = await news.save();
            res.status(201).json(savedNews);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async updateNews(req, res) {
        try {
            const updatedNews = await this.newsModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedNews) {
                return res.status(404).json({ message: 'News not found' });
            }
            res.status(200).json(updatedNews);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteNews(req, res) {
        try {
            const deletedNews = await this.newsModel.findByIdAndDelete(req.params.id);
            if (!deletedNews) {
                return res.status(404).json({ message: 'News not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default NewsController;