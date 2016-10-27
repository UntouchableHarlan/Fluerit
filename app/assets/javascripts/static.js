var hideSpinner = function(){
  $('#spinner').hide();
  $('.container').show();
};

var showSpinner = function(){
  $("#spinner").show();
  $('.container').hide();
}

$(document).ready(function() {
  $("#flirt").on('click', function(event) {
    event.preventDefault();
    $.ajax({
      url: '/search',
      method: 'GET',
      onLoading: showSpinner(),
      success: function(response) {
        console.log(response);
        hideSpinner();
        var pic = response.giphy.hash.embed_url;
        console.log(pic.split("http://")[1]);
        $("#quote").html(response.quote.quote);
        $("#giphy").attr('src', "https://" + pic.split("http://")[1]);
        console.log("got something");
      }
    })
  });
})
