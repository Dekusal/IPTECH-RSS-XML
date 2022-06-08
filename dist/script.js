$(document).ready(function() {
  loadRSS('https://www.immersivetechnologies.com/news/rss/news_feed.xml', '#Newsfeed', 'Read more');   
});

function loadRSS(link, htmlContainer, linktext) {
    var url = link;
    var container = $(htmlContainer);

    feednami.load(url, function(result){
        if (result.error) {
            console.log(result.error);
        } else {
            var entries = result.feed.entries;
            for(var i = 0; i < 4; i++){
                var entry = entries[i];
                  container.append("<div class=\"col-md-3 col-sm-6 \"><div class=\"card RSS\"><img class=\"card-img-top img-fluid\" src=\"" + entry.enclosures[0].url + "\"><div class=\"card-body\"><h5><a href=\"" + entry.link + "\"  target=\"_blank\" class=\"stretched-link\">" + entry.title + "</a></h5><a href=\"" +  entry.link + "\" class=\"btn btn-primary\" target=\"_blank\">" + linktext + "</a></div></div></div>");
            }
        }
    });
}