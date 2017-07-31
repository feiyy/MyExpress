var path = require('path');

module.exports = {
    
    entry: './public/javascripts/src/testrxjs.js',
    
    output: {
        path: __dirname,
        //filename: 'public/javascripts/[name].js'
        filename: 'public/javascripts/lib/bundle.js'
    },
   
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                /*exclude: path.resolve(__dirname, 'node_modules'), //编译时，不需要编译哪些文件*/
                /*include: path.resolve(__dirname, 'src'),//在config中查看 编译时，需要包含哪些文件*/
                query: {
                   presets: ['es2015']
                }
            }
        ]
    }
};


