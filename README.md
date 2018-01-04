# fis3-preprocessor-cssnext
fis3插件 postcss  cssnext  

```javascript
fis.match('css/postcss.scss',{
    rExt: '.css', // from .scss to .css
    parser: fis.plugin('node-sass',{
        sourceMap:true,
        outFile:'css'
    }),
    preprocessor:fis.plugin('cssnext')
})
```