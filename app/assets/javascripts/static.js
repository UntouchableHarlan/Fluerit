$(document).ready(function() {
  $("#flirt").on('click', function(event) {
    event.preventDefault();
    $.ajax({
      url: '/search',
      method: 'GET',
      success: function(response) {
        console.log(response);
        var pic = response.giphy.hash.embed_url;
        console.log(pic.split("http://")[1]);
        $("#quote").html(response.quote.quote);
        $("#giphy").attr('src', "https://" + pic.split("http://")[1]);
        console.log("got something");
      }
    })
  });
})
