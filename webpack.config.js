// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
// 通过解构的方式拿到 webpack 内置的 DefinePlugin 插件，你也可以通过 require('webpack').DefinePlugin 直接获取到该插件
const { DefinePlugin } = require("webpack");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = "style-loader";

const config = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    open: false,
    host: "localhost"
  },
  plugins: [
    new DefinePlugin({
      BASE_URL: "'./'",
      __VUE_OPTIONS_API__: true, // 这个标志是用来对 Vue2 做适配的
      __VUE_PROD_DEVTOOLS__: false // 这个标志是用来设置在生产环境下要不要对 devtools
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html")
    }),
    // 请确保引入这个插件！
    new VueLoaderPlugin()

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.(ts)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.(js|jsx|tsx)$/i,
        exclude: ["/node_modules/"],
        loader: "babel-loader"
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "sass-loader"]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset"
      }

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
    alias: {
      "@": path.resolve(__dirname, "src"),
      // 默认的工具链中都会使用仅含运行时的版本，如果需要使用template/html中的模板。
      // 浏览器内的模板编译，需要使用esm版本
      vue$: "vue/dist/vue.esm-bundler.js"
    }
  },
  devtool: "eval-source-map"
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";

    config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
  } else {
    config.mode = "development";
  }
  return config;
};
