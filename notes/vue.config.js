const autoprefixer = require("autoprefixer");
const pxtorem = require("postcss-pxtorem");
const path = require("path");
const themePath = path.resolve(__dirname, "src/assets/style/theme.less");
var webpack = require('webpack');
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  //   打包后禁止在控制台输出console.log
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new TerserPlugin({
          terserOptions: {
            ecma: undefined,
            warnings: false,
            parse: {},
            compress: {
              drop_console: true,
              drop_debugger: false,
              pure_funcs: ['console.log'] // 移除console
            }
          },
        }),
      )
    }
  },
  // devServer: {
  //   proxy: {
  //     '/api': {// '/api':匹配项
  //       target: 'http://192.168.0.109:10101',// 接口的域名
  //       // secure: false,// 如果是https接口，需要配置这个参数
  //       changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
  //       pathRewrite: {// 如果接口本身没有/api需要通过pathRewrite来重写了地址
  //         '^/api': '/'
  //       }
  //     }
  //   },
  // },

  // 关闭eslint检查
  lintOnSave: false,
  // 配置css前缀,px转rem
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          hack: `true; @import "${themePath}";`,
        },
      },
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ["*"],
          }),
        ],
      },
    },
  },

  configureWebpack: {
    externals: {
      axios: "axios", // 配置使用CDN
    },
    resolve: {
      extensions: [".js", ".vue"],
      alias: {
        "@": resolve("src"),
      },
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        jquery: "jquery",
        "window.jQuery": "jquery"
      })
    ],
  },

  // 基本路径
  publicPath: "./",
  outputDir: "notes_dist",
  assetsDir: "static",
};
