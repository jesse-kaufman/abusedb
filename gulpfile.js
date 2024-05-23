// NOTES: pre commit hook is created by running npm install

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const guppy = require("git-guppy")(gulp);

const gulpFilter = async () => {
  return await import("gulp-filter");
};

gulp.task("sass", function (cb) {
  gulp
    .src("src/styles/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("public/css"));
  cb();
});

gulp.task("default", function () {
  gulp.watch("src/styles/*", gulp.parallel("sass"));
});

gulp.task(
  "pre-commit",
  guppy.src("pre-commit", function (files) {
    const jshint = require("gulp-jshint");
    const stylish = require("jshint-stylish");
    const filter = gulpFilter(["*.js"], { restore: true });

    const glob = files.length
      ? files
      : ["node-only/*.js", "node-only/utils/*.js"];

    console.log(glob);
    return (
      gulp
        .src(glob)
        // .pipe(filter)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(jshint.reporter("fail"))
    );
  })
);