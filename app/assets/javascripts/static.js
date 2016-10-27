$(document).ready(function() {
  $("#flirt").on('click', function(event) {
    event.preventDefault();
    $.ajax({
      url: '/search',
      method: 'GET',
      success: function(response) {
        console.log(response);
        console.log(response.giphy.hash.embed_url);
        $("#quote").html(response.quote.quote);
        $("#giphy").attr('src', response.giphy.hash.embed_url);
        console.log("got something");
      }
    })
  });
})
