var path = "/users/download/index.tml";

function isHtml(isHtmlpath) {
  var html = false;
  var search = ".html";
  var slice = isHtmlpath.slice(-5);

  if (slice == search) {
    html = true;
  }
  return html;
}

console.log(isHtml(path));