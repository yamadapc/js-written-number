const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

const PROD = process.env.NODE_ENV === "production";

module.exports = {
  mode: PROD ? "production" : "development",
  entry: "./lib/standalone.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: PROD
      ? "written-number.standalone.min.js"
      : "written-number.standalone.js",
    library: "writtenNumber",
    libraryTarget: "umd"
  },
  plugins: [
    new CopyPlugin([
      {
        from: path.resolve(__dirname, "lib/i18n"),
        to: path.resolve(__dirname, "dist/i18n")
      }
    ])
  ]
};
