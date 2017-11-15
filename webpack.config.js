const path =require("path");

module.exports={
    entry:"./src/index.js",

    output:{
        filename:'bunnel.js',
        path:path.join(__dirname,"./public/js"),
    },
    module:{
        loaders: [{
            test: /\.js$/,
            loader: "babel-loader",
            query: {
                presets: ['react','es2015']
            }
        },{
            test: /\.jsx$/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        },{
            test: /\.css$/,
            loader: "style-loader!css-loader!autoprefixer-loader"
        },{
            test: /\.(jpg|png|otf)$/,
            loader: "url?limit=8192"
        },{
            test: /\.scss$/,
            loader: "style-loader!css-loader!autoprefixer-loader!sass-loader?outputStyle=expanded"
        },{
            test:/\.json$/,
            loader:'json-loader'
        }]
    }
}