const db = require('./index.js')
module.exports = {
    Create: function(req, res, next) {
        db.create_product([req.body.name, req.body.description, req.body.price, req.body.imageurl], function(err, newProduct) {
            if (err) return next(err)
            return res.status(200).json(newProduct);
        })
    },
    GetOne: function(req, res, next) {
      db.read_product(req.params.id, function(err, oneProduct) {
          if (err) return next(err)
          return res.status(200).json(oneProduct);
      })
    },
    GetAll: function(req, res, next) {
      db.read_products([], function(err, allProducts) {
          if (err) return next(err)
          return res.status(200).json(allProducts);
      })
    },
    Update: function(req, res, next) {
      db.update_product(req.body.id, req.body.description, function(err, updatedProduct) {
          if (err) return next(err)
          return res.status(200).json(updatedProduct);
      })
    },
    Delete: function(req, res, next) {
      db.delete_product(req.params.id, function(err, deletedProduct) {
          if (err) return next(err)
          return res.status(200).json(deletedProduct);
      })
    }
}
