const Product = require('../../models/Product');

class ProductController {
    // [GET] /products/create
    create(req, res) {
        res.render('products/create')
    }

    // [POST] /products/store
    store(req, res) {
        const formData = req.body;
        const product = new Product(formData);
        product.save()
            .then(() => {
                console.log('Product created successfully');
                res.redirect('/');
            })
            .catch(err => {
                console.error(err);
                res.status(500).send('Internal Server Error');
            });
    }

    // [GET] /products/:id/edit
    edit(req, res) {
        const id = req.params.id;
        Product.findById(id)
            .then(product => {
                if (!product) {
                    return res.status(404).send('Product not found');
                }
                res.render('products/edit', {product: product.toObject()});
            })
            .catch(err => {
                console.error(err);
                res.status(500).send('Internal Server Error');
            });
    }
}

module.exports = new ProductController;