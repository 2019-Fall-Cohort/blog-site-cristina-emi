class Post {
  constructor(title, body, author, publishDate, category, tag) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.publishDate = publishDate;
    this.category = category;
    this.tag = tag;
  }
}

module.exports = Post;