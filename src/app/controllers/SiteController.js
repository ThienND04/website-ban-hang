const Product = require("../../models/Product");

class SiteController {
    async home(req, res) {
        try {
            const products = await Product.find({});
            res.render('home', {
                products: products.map(product => product.toObject()),
            });
        }
        catch (err) {
            res.status(500).send('Lỗi lấy sản phẩm: ' + err.message);
        }
        
    }
}

module.exports = new SiteController;