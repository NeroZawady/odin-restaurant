const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "",
    clean: true,
    assetModuleFilename: "assets/[hash][ext][query]",
    // clean: {
    //   keep(asset) {
    //     return asset.includes('dist/assets');
    //   },
    // },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
    // new HtmlWebpackPlugin({
    //   filename: "menu.html",
    //   template: "./src/menu.html",
    // }),
    // new HtmlWebpackPlugin({
    //   filename: "aboutUs.html",
    //   template: "./src/aboutUs.html",
    // }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new CssMinimizerPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ]
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            // Lossless optimization with custom option
            // Feel free to experiment with options for better result for you
            plugins: [
              ["jpegtran", { progressive: true }],
            ],
          },
        },
      }),
    ],
  },
};