// jest.config.js
// Sync object
module.exports = {
    verbose: true,
  };
  
  // Or async function
  module.exports = async () => {
    return {
      verbose: true,
    };
  };

  {
    "jest": {
      "moduleFileExtensions": [
        "js",
        "json",
        // tell Jest to handle `*.vue` files
        "vue"
      ],
      "transform": {
        // process `*.vue` files with `vue-jest`
        ".*\\.(vue)$": "vue-jest"
      }
    }
  }