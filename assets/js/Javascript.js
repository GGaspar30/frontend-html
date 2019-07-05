$( document ).ready(function(){
    $('.dropbtn').on('click', function (event) {
        event.preventDefault();
        $(this).parent().find('.dropdown-content').first().toggle(300);
        $(this).parent().siblings().find('.dropdown-content').hide(200);

    });
console.log('iniciou');
});
