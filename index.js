'use strict';
const postcss = require('postcss');
const cssnext = require('postcss-cssnext');


module.exports = function(content, file, settings){
    console.log('content',content);
    // postcss([cssnext({browsers:settings.Browserslist})]).process(content,{inline:false}).then(data=>{
    //     console.log(data.css);
    // })
    const map = settings.sourceMap?{inline:false}:false;
    // 源地图设置 https://github.com/postcss/postcss/blob/master/docs/source-maps.md
    return postcss([cssnext({browsers:settings.Browserslist})]).process(content,{to:file.release,map:map}).css ;
}

module.exports.defaultOptions = {
    sourceMap: true,
    Browserslist:[
        "> 1%", "last 2 versions", "Firefox ESR", "Opera 12.1" 
    ]
  };