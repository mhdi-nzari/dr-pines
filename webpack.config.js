const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  // Optimized Output Module
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },

  // exclude node_moudule

  target: "node", // use require() & use NodeJs CommonJS style
  // externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  externalsPresets: {
    node: true, // in order to ignore built-in modules like path, fs, etc.
  },

  mode: "development",
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader']          
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "Images/",
        },
      },
      {
        test: /\.(jsx|js|tsx|ts)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(woff|woff2|ttf|svg|eot)$/i,
        use: ["url-loader"],
      },
      // Exposes jQuery for use outside Webpack build
      {
        test: /[\/\\]node_modules[\/\\]bluebird[\/\\].+\.js$/,
        loader: "expose-loader",
        options: {
          exposes: {
            globalName: "Promise",
            override: true,
          },
        },
      },
    ],
  },
  plugins: [


    [
      "postcss-preset-env",
      {
        // Options
      },
    ],
    // plugin for owl-carusel error

    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),

    new CleanWebpackPlugin({
      verbose: true,
      cleanStaleWebpackAssets: true,
    }),

    new CopyPlugin({
      patterns: [{ from: "Src/Images", to: "Images" }],
    }),

    new TerserPlugin(),
  ]
};
