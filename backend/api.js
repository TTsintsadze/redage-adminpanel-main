var YouTube = require('youtube-node');

var youTube = new YouTube();

youTube.setKey('AIzaSyD_-V434bXR-_prP8GjvwvqZbLbXdmzXeI');

youTube.search('World War z Trailer', 2, function(error, result) {
  if (error) {
    console.log(error);
  }
  else {
    console.log(JSON.stringify(result, null, 2));
  }
});