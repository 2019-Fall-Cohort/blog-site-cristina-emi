const postDomainObject = require("./models/Post.js")
const postService = require("./services/post-service")
const categoryService = require("./services/category-service")
const tagService = require("./services/tag-service")

module.exports = {
    async addPost(req, res) {
        const title = req.body.title;
        const body = req.body.body;
        const author = req.body.author;
        const publishDate = req.body.publishDate;
        const category = req.body.category;
        const tag = req.body.tag;
        await postService.save(new postDomainObject (title, body, author, publishDate, category, tag))//???? 
    },

    async renderAll(req, res) {
        res.render("/allposts/" , {posts: await postService.findAll()})
    },

    async renderSingle (req,res) {
        const post = Number(req.params.id);
        postService.find

    }
}