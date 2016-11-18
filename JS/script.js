


$(document).ready(function(){
  var searchQ = '';
  var html = '';

  $('#search').on('click',  function () {
    var searchTerm =  $('#searchQuery').val();
    html = 'https://crossorigin.me/https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchTerm  + '&limit=10&namespace=0&format=json';
    console.log(html);
    $.ajax({
      type: 'GET',
      url: html,
      async: false,
      dataType: 'json',
      success: function(data) {
        $('#output').html('');
        console.log(data[1]);
        for (var i = 0; i < data[1].length; i++) {
        $('#output').prepend('<a href='+ data[3][i] +' target="/_blank"><li><h3><u>' + data[1][i] + '</u></h3><p><em>' + data[2][i] + '</em></p></li></a>');
         console.log(data[1][i]);
      }

        },

      error: function(errorMessage){
        alert('Error');
      }
    });
  });
  $('#searchQuery').keypress(function(e){
    if(e.which == 13){
      $('#search').click();
    }
  });
});
