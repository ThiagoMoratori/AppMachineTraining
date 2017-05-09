/**
 * Created by Guru Machine on 08/05/2017.
 */
const browserSync = require('browser-sync');

browserSync.init({
   server:{
       baseDir: "./src"
   },
    files: [
        "./src/js-es5/__bundle.js",
        "./src/*.html"
    ]
});
