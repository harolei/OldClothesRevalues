var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'oldclothesrevalues'
    },
    port: 3000,
    db: 'mongodb://localhost/oldclothesrevalues-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'oldclothesrevalues'
    },
    port: 3000,
    db: 'mongodb://localhost/oldclothesrevalues-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'oldclothesrevalues'
    },
    port: 3000,
    db: 'mongodb://localhost/oldclothesrevalues-production'
  }
};

module.exports = config[env];
