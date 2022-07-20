const ProductsHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'products',
  version: '1.0.0',
  register: async (server, { ProductsService, storageService, validator }) => {
    const handler = new ProductsHandler(ProductsService, storageService, validator);
    server.route(routes(handler));
  },
};