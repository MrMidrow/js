'use strict'

$('#clickMe').on('click', (e) => {
    $('.popupForm').addClass('active')
})

$('span').click((e) => {
     $('.popupForm').removeClass('active')
})