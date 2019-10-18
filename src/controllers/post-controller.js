const postService = require("./services/post-service")
const Post = require("./models/Post.js")

module.exports = {
    async addPost(req, res) {
        const title = req.body.title;
        const body = req.body.body;
        const author = req.body.author;
        const publishDate = req.body.publishDate;
        const genre = req.body.genre;
        const tag = req.body.tag;
        await postService.save(new Post (title, body, author, publishDate, genre, tag))//???? 
    },

    async renderAll(req, res) {
        res.render("/allposts" , {posts: await postService.findAll()})
    }
}