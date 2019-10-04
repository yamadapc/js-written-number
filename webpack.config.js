const path = require("path");
const PROD = process.env.NODE_ENV === "production";

module.exports = {
  mode: PROD ? "production" : "development",
  entry: "./lib/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: PROD ? "written-number.min.js" : "written-number.js",
    library: "writtenNumber",
    libraryTarget: "umd"
  }
};
