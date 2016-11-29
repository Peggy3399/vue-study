## webpack

webpack是近期最火的一款模块加载器兼打包工具，它能把各种资源，例如JS（含JSX）、coffee、样式（含less/sass）、图片等都作为模块来使用和处理。
我们可以直接使用 require(XXX) 的形式来引入各模块，即使它们可能需要经过编译（比如JSX和sass），但我们无须在上面花费太多心思，因为 webpack 有着各种健全的加载器（loader）在默默处理这些事情，这块我们后续会提到。

> 安装

    $ npm install webpack -g
当然如果常规项目还是把依赖写入 package.json 包去更人性化：

    $ npm init
    $ npm install webpack --save-dev

> 配置

每个项目下都必须配置有一个 webpack.config.js ，它的作用如同常规的 gulpfile.js ，就是一个配置项，告诉 webpack 它需要做什么。

示例：

    var webpack = require('webpack');
    var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
     
    module.exports = {
        plugins: [commonsPlugin],
        entry: {
            index : './src/js/page/index.js'
        },
        output: {
            path: 'dist/js/page',
            filename: '[name].js'
        },
        module: {
            loaders: [
                { test: /\.css$/, loader: 'style-loader!css-loader' },
                { test: /\.js$/, loader: 'jsx-loader?harmony' },
                { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
                { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
            ]
        },
        resolve: {
            root: 'E:/github/flux-example/src', //绝对路径
            extensions: ['', '.js', '.json', '.scss'],
            alias: {
                AppStore : 'js/stores/AppStores.js',
                ActionType : 'js/actions/ActionType.js',
                AppAction : 'js/actions/AppAction.js'
            }
        }
    };

* plugins: 这里定义了需要使用的插件，比如commonsPlugin在打包多个入口文件时会提取出公用的部分，生成common.js
* entry：指定打包的入口文件，每有一个键值对，就是一个入口文件
* output：配置打包结果，path定义了输出的文件夹，filename则定义了打包结果文件的名称，filename里面的[name]会由entry中的键（这里是entry1和entry2）替换
* resolve：定义了解析模块路径时的配置，常用的就是extensions，可以用来指定模块的后缀，这样在引入模块时就不需要写后缀了，会自动补全
* module：定义了对模块的处理逻辑，这里可以用loaders定义了一系列的加载器，以及一些正则。当需要加载的文件匹配test的正则时，就会调用后面的loader对文件进行处理，这正是webpack强大的原因。比如这里定义了凡是.js结尾的文件都是用babel-loader做处理，而.jsx结尾的文件会先经过jsx-loader处理，然后经过babel-loader处理。当然这些loader也需要通过npm install安装

> 运行

直接在项目的根目录下运行:

    $ webpack

也可以添加运行，为了方便出错时能查阅更详尽的信息（比如 webpack 寻找模块的过程），从而更好定位到问题。

    $ webpack --display-error-details

如果不想要每修改模块一次都打包的话，可以使用webpack-dev-server。它将在 localhost:8080 启动一个 express 静态资源 web 服务器，并且会以监听模式自动运行 webpack。

    # 安装
    $ npm install webpack-dev-server -g

    # 运行
    webpack-dev-server --progress --colors
