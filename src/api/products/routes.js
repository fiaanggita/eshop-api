const path = require('path');

const routes = (handler) => [
  {
    method: 'POST',
    path: '/products',
    handler: handler.postProduct,
    options: {
      auth: 'eshop_jwt',
    },
  },
  {
    method: 'GET',
    path: '/products',
    handler: handler.getProducts,
  },
  {
    method: 'GET',
    path: '/products/{id}',
    handler: handler.getProductById,
  },
  {
    method: 'PUT',
    path: '/products/{id}',
    handler: handler.putProductById,
    options: {
      auth: 'eshop_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/products/{id}',
    handler: handler.deleteProductById,
    options: {
      auth: 'eshop_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/products/{id}/image',
    handler: handler.putProductImageById,
    options: {
      auth: 'eshop_jwt',
      payload: {
        allow: 'multipart/form-data',
        multipart: true,
        output: 'stream',
        maxBytes: 512000,
      },
    },
  },

  {
    method: 'GET',
    path: '/products/image/{param*}',
    handler: {
      directory: {
        path: path.resolve(__dirname, 'images')
      },
    },
  }

];

module.exports = routes;