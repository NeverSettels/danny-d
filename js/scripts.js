$(document).ready(function() {
  $('form#Danny').submit(function(event) {
    event.preventDefault()
    var age = parseInt($('input#age').val())
    var penguin = $('select#penguin').val()
    var frank = JSON.parse($('select#frank').val())
    var twin = JSON.parse($('select#twin').val())
    // frank ? console.log('yes he is') : console.log('no he isnt');
    if (penguin === 'penguin') {
      $('#wolv-container').removeClass('no-show')
    } else if (penguin === 'goat') {
      $('#mnm-container').removeClass('no-show')
    } else if (penguin === 'neither') {
      if (frank === true) {
        $('#wig-container').removeClass('no-show')
      } else {
        if (twin === true) {
          $('#cartoon-container').removeClass('no-show')
        } else {
          $('#wack-container').removeClass('no-show')
        }
      }
    }
  })
})
