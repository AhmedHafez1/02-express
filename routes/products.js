const express = require('express');
const { products } = require('../data');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json(products);
});

router.post('/', (req, res) => {
  const { product } = req.body;

  if (!product) {
    return res.status(400).json('No product sent');
  }

  const newProduct = { ...product, id: products.length + 1 };
  products.push(newProduct);

  res.json({ success: true, product: newProduct });
});

router.put('/:id', (req, res) => {
  const { product: newProduct } = req.body;
  const { id } = req.params;

  if (!newProduct) {
    return res
      .status(400)
      .json({ success: false, msg: 'No Products Provided' });
  }

  const updatedProducts = products.map((p) => {
    if (p.id === Number(id)) {
      return newProduct;
    }
    return p;
  });

  res.json({ success: true, products: updatedProducts });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return res
      .status(400)
      .json({ success: false, msg: 'No Product with id : ' + id });
  }

  const filteredProducts = products.filter((p) => p.id !== Number(id));
  res.json({ success: true, products: filteredProducts });
});

module.exports = router;
