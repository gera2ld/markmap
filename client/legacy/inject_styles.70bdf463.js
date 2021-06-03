import './web.url.4d8a464f.js';

function inject_styles (files) {
  return Promise.all(files.map(function (file) {
    return new Promise(function (fulfil, reject) {
      var href = new URL(file, import.meta.url);
      var baseURI = document.baseURI;

      if (!baseURI) {
        var baseTags = document.getElementsByTagName('base');
        baseURI = baseTags.length ? baseTags[0].href : document.URL;
      }

      var relative = ('' + href).substring(baseURI.length);
      var link = document.querySelector('link[rel=stylesheet][href="' + relative + '"]') || document.querySelector('link[rel=stylesheet][href="' + href + '"]');

      if (!link) {
        link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
      }

      if (link.sheet) {
        fulfil();
      } else {
        link.onload = function () {
          return fulfil();
        };

        link.onerror = reject;
      }
    });
  }));
}

export default inject_styles;
