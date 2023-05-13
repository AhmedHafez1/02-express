const { products } = require('../data');

const getProducts = (req, res) => {
  res.status(200).json(products);
};

const createProduct = (req, res) => {
  const { product } = req.body;

  if (!product) {
    return res.status(400).json('No product sent');
  }

  const newProduct = { ...product, id: products.length + 1 };
  products.push(newProduct);

  res.json({ success: true, product: newProduct });
};

const updateProduct = (req, res) => {
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
};

const deleteProduct = (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return res
      .status(400)
      .json({ success: false, msg: 'No Product with id : ' + id });
  }

  const filteredProducts = products.filter((p) => p.id !== Number(id));
  res.json({ success: true, products: filteredProducts });
};

module.exports = { getProducts, createProduct, updateProduct, deleteProduct };
