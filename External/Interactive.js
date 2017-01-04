/* To give the webpage some fluidity */
var Links = document.getElementsByTagName("a");

for (var i=0; i<Links.length; i++) {
    if (!Links[i].href) {
        Links[i].href = "#";
    }
}