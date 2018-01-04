# fis3-preprocessor-cssnext
fis3插件 postcss  cssnext  

fis3 preprocessor阶段的插件，解决postcss 后 node-sass soceurmap 丢失的问题


### 用法
```javascript
fis.match('css/postcss.scss',{
    rExt: '.css', // from .scss to .css
    parser: fis.plugin('node-sass',{
        sourceMap:true,
        outFile:'css'
    }),
    preprocessor:fis.plugin('cssnext',{
        //配置
         sourceMap: true,    // 默认
        Browserslist:[
        "> 1%", "last 2 versions", "Firefox ESR", "Opera 12.1"   //默认
        ]
    })
})
```

###
暂时就这两个参数，其他的用到再加吧。。。。