const postDomainObject = require("../models/Post")
const postService = require("../services/post-service")
const categoryService = require("../services/category-service")
const tagService = require("../services/tag-service")

module.exports = {
    async addPost(req, res) {
        const title = req.body.title;
        const body = req.body.body;
        const author = req.body.author;
        const publishDate = req.body.publishDate;
        const category = req.body.category;
        const tag = req.body.tag;

        const newPost = new postDomainObject(title, body, author, publishDate, category, tag)
        await postService.save(newPost)
        res.redirect("/allposts")
    },

    async renderAll(req, res) {
        res.render("/allposts" , {posts: await postService.findAll()})
    },

    async renderSingle (req,res) {
        const post = Number(req.params.id);
        postService.findById()
            res.render("post/single", {post});

    }
}