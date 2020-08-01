var app = require('express').Router();
const Category = require("../../model/category");

//add new category
app.post(('/newCategory'), (req, res) => {
    const newCategory = new Category(req.body)
    newCategory.save()
        .then(() => res.json('Category added ! '))
        .catch(err => res.status(400).json('Error: ' + err))
})

//display all categories
app.get(('/category'), (req, res) => {
    Category.find()
        .then((cat) => res.json(cat))
        .catch(err => res.status(400).json('Error: ' + err))
})

//update 1 category
app.post(('/updateCategory/:id'), (req, res) => {
    Category.findById(req.params.id)

        .then((category) => {

            category.name = req.body.name;
            category.save()
                .then(() => res.json('Category updated!'))
                .catch(err => res.status(400).json('Error: ' + err))

        })
        .catch(err => res.status(400).json('Error: ' + err))
})
//delete 1 category
app.delete(('/deleteCategory/:id'), (req, res) => {
    Category.findByIdAndDelete(req.params.id)

        .then(() => res.json('Category deleted.'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = app