

const {src,dest,watch,series} = require("gulp");
const sass = require("gulp-sass")(require("sass"));


function styleBuilder(){
    return src('./**/*.scss')
      .pipe(sass())
      .pipe(dest('../css'))
}

function trackChanges(){
    watch('./**/*.scss',styleBuilder);
}

exports.default = series(styleBuilder,trackChanges)