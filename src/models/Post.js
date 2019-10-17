class Post {
  constructor(title, body, author, publishDate, genre, tag) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.publishDate = publishDate;
    this.genre = genre;
    this.tag = tag;
  }
}

module.exports = Post;