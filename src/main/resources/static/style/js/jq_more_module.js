$(document).ready(function() {

    $('.more:eq(0)').click(function(e) {
        e.preventDefault();
        $('.text-wrapper:eq(0)').animate(
            {
                opacity: 'toggle',
                height: 'toggle'
            }, 1000
        );
        document.querySelectorAll('.more')[0].style.display = 'none';
    });

    $('.close_button_for_text:eq(0)').click(function() {
        $('.text-wrapper:eq(0)').animate(
            {
                opacity: 'toggle',
                height: 'toggle'
            }, 1000
        );
        document.querySelectorAll('.more')[0].style.display = 'block';
    });

    $('.more:eq(1)').click(function(e) {
        e.preventDefault();
        $('.text-wrapper:eq(1)').animate(
            {
                display: 'flex',
                opacity: 'toggle',
                height: 'toggle'
            }, 1000
        );
    });

    $('.close_button_for_text:eq(1)').click(function() {
        $('.text-wrapper:eq(1)').animate(
            {
                opacity: 'toggle',
                height: 'toggle'
            }, 1000
        );
    });

    $('.more:eq(2)').click(function(e) {
        e.preventDefault();
        $('.text-wrapper:eq(2)').animate(
            {
                display: 'flex',
                opacity: 'toggle',
                height: 'toggle'
            }, 1000
        );
    });

    $('.close_button_for_text:eq(2)').click(function() {
        $('.text-wrapper:eq(2)').animate(
            {
                opacity: 'toggle',
                height: 'toggle'
            }, 1000
        );
    });
});