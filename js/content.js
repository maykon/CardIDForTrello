(function(){
  const TRELLO_CARD = /trello\.com\/\w+\/\w+\/([0-9]+)/i;
  var url = location.href;
  var matches = url.match(TRELLO_CARD);
  var bCardShow = (matches && matches.length > 1);
  if (bCardShow) {
    var cardID = matches[1];
    var trello_cardid = "<h2 class='trello-cardID'>#" + cardID + "</h2>";
    var card = $('.window h2.window-title-text');
    card.before(trello_cardid);
  }
})();
