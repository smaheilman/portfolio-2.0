const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractText = require("extract-text-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(png|svg|jpe?g|gif|pdf)$/,
        include: /assets/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/",
              esModule: false,
              // publicPath: "assets/",
            },
          },
        ],
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: () => [require("autoprefixer")],
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: "file-loader?outputPath=fonts/&publicPath=../",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
  mode: "development",
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  devServer: {
    /** "port"
     * port of dev server
     */
    port: "9500",
    /** "static"
     * This property tells Webpack what static file it should serve
     */
    static: ["./dist"],
    /** "open"
     * opens the browser after server is successfully started
     */
    // open: true,
    /** "hot"
     * enabling and disabling HMR. takes "true", "false" and "only".
     * "only" is used if enable Hot Module Replacement without page
     * refresh as a fallback in case of build failures
     */
    // hot: true,
    // /** "liveReload"
    //  * disable live reload on the browser. "hot" must be set to false for this to work
    //  */
    liveReload: true,
  },
};
