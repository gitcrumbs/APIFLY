//entry point of the application
const path = require('path')

module.exports={
    entry: ["regenerator-runtime/runtime.js",'./src/app.js' ],
    mode : 'development',  
    output:{
        path: path.join(__dirname,'public'),
        filename : 'bundle.js'
    },
    module :{
        rules :[{
            loader : 'babel-loader',
            test : /\.js$/,
            exclude: /node_modules/
        },
    {
        test:/\.css$/,
        use:[
            'style-loader',
            'css-loader'
        ]
    },{
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: ["$", "jQuery"],
        },
      },
      {
        test: require.resolve("underscore"),
        loader: "expose-loader",
        options: {
          exposes: [
            "_.map|map",
            {
              globalName: "_.reduce",
              moduleLocalName: "reduce",
            },
            {
              globalName: ["_", "filter"],
              moduleLocalName: "filter",
            },
          ],
        },
      }
],
    
    },
    devtool: 'cheap-module-source-map',
    devServer:{
        contentBase : path.join(__dirname,'public')
    }
    
};