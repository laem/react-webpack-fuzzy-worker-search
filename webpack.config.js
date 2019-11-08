module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
  },

  entry: {
    javascript: ["react-hot-loader/patch", "./index.js"]
  },

  output: {
    filename: "index.js",
    path: __dirname + "/dist"
  }
}
