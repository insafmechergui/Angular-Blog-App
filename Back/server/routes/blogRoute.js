var app = require('express').Router();
const Blog = require("../../model/blog");
const { options } = require('./userRoute');

//add new blog
app.post(('/newBlog'), (req, res) => {
    const newBlog = new Blog(req.body)
    newBlog.save()
        .then(() => res.json('Blog added ! '))
        .catch(err => res.status(400).json('Error: ' + err))
})
//display 1 blog
app.get(('/blog/:id'), (req, res) => {
    Blog.findById(req.params.id)
        .then((blog) => res.json(blog))
        .catch(err => res.status(400).json('Error: ' + err))
})
//display all blogs
app.get(('/blog'), (req, res) => {
    Blog.find()
        .sort({ date: -1 })
        .then((blog) => {
            res.json(blog)
        })

        .catch(err => res.status(400).json('Error: ' + err))
})
//display all blogs by category

//update 1 blog
app.post(('/updateBlog/:id'), (req, res) => {
    Blog.findById(req.params.id)

        .then((blog) => {
            blog.title = req.body.title;
            blog.text = req.body.text;
            blog.category = req.body.category;
            blog.save()
                .then(() => res.json('Blog updated!'))
                .catch(err => res.status(400).json('Error: ' + err))

        })
        .catch(err => res.status(400).json('Error: ' + err))
})
//delete 1 blog
app.delete(('/deleteBlog/:id'), (req, res) => {
    Blog.findByIdAndDelete(req.params.id)

        .then(() => res.json('blog deleted.'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = app