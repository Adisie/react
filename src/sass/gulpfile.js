


const {src,dest,watch,series} = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildCSSs(){
    return src("./*.scss")
      .pipe(sass())
      .pipe(dest("../css"))
}


function trackChanges(){
    watch(["./*.scss"])
}


exports.default = series(buildCSSs,trackChanges)