const authController = require('../app/http/controllers/authController');
const cartController = require('../app/http/controllers/cartController');
const homeController = require('../app/http/controllers/homeController');
const categoriesController = require('../app/http/controllers/categoriesController');
function initRoutes(app, axios) {

    app.get('/', homeController(axios).index);
    app.get('/login', authController().login);
    app.get('/cart', cartController().index);
    app.get('/categories/:category', categoriesController().index)
    app.post('/update-cart', cartController().update)

    app.get('/checkout', (req, res) => {
        res.render('checkout');
    });
}

module.exports = initRoutes