module.exports = function () {
  var src = 'src/';
  var app = src + 'app/';

  var config = {
    appJS: app + '**/*.js',
    index: src + 'index.html',
    src: src
  };

  return config;
};
