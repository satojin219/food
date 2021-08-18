const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const TerserPlugin=require('terser-webpack-plugin');
const OptimizeCssPlugin=require('optimize-css-assets-webpack-plugin');


module.exports={
  mode: 'development',
  entry: './src/js/index.js',
  output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
  experiments: {
    topLevelAwait: true
  },
 module:{
   rules: [
     {
       test:/\.js$/,
       exclude:/node_modules/,
       use:[
         'babel-loader'
       ]
     },
     {
       test:/\.scss$/,
       use:[
         'style-loader',
         MiniCssExtractPlugin.loader,
         'css-loader',
         'postcss-loader',
         'sass-loader'
        ]
      }
    ]
  },
 

    plugins:[
      new MiniCssExtractPlugin({
        filename: 'style.css'
      }),
      new HtmlWebpackPlugin({
        template:'./src/index.html',
        inject:'body',
        minify:{
          collapseWhitespace: true,
          keepClosingSlash: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true
        }
      })
    ],
    optimization:{
      minimizer:[
       new TerserPlugin(),
       new OptimizeCssPlugin()
      ]
    }
  
}