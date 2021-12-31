const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
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

      // {
      //   test: /\.html?$/,
      //   loader: "file-loader?name=[name].[ext]",
      // },

      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
        ],
      },

      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
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
        test: /\.(woff|woff2|ttf|eot)$/i,
        loader: "url-loader",
        options: {
          name: "[name].[contenthash].[ext]",
        },
      },

      {
        test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: "base64-inline-loader?limit=1000&name=[name].[ext]",
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
      patterns: [
        // { from: "*.html", to: "" },
        {
          from: "Src/Fonts/fonts/eot/*.eot",
          to: "Fonts/fonts/eot/[name][ext]",
        },
        {
          from: "Src/Fonts/fonts/svg/*.svg",
          to: "Fonts/fonts/svg/[name][ext]",
        },
        {
          from: "Src/Fonts/fonts/ttf/*.ttf",
          to: "Fonts/fonts/ttf/[name][ext]",
        },
        {
          from: "Src/Fonts/fonts/woff/*.woff",
          to: "Fonts/fonts/woff/[name][ext]",
        },
        {
          from: "Src/Styles/index/*.css",
          to: "Styles/index/[name][ext]",
        },
        {
          from: "Src/Styles/index/*.map",
          to: "Styles/index/[name][ext]",
        },

        {
          from: "Src/Styles/*.css",
          to: "Styles/[name][ext]",
        },
        {
          from: "Src/Styles/*.map",
          to: "Styles/[name][ext]",
        },

        {
          from: "Src/Styles/panel/*.css",
          to: "Styles/panel/[name][ext]",
        },
        {
          from: "Src/Styles/panel/*.map",
          to: "Styles/panel/[name][ext]",
        },
        {
          from: "Src/Scripts/*.js",
          to: "Scripts/[name][ext]",
        },
        {
          from: "Src/Images/favicon/favicon.ico",
          to: "Images/favicon/favicon.ico",
        },
        {
          from: "Src/Images/favicon/*.png",
          to: "Images/favicon/[name][ext]",
        },
      ],
    }),

    new TerserPlugin(),

   
  ],
};
