$(document).ready(function () {
    var numItems = $('.card').length;
    var perPage = 6;

    $('.card:gt(' + (perPage - 1) + ')').hide();
    var totalPages = Math.ceil(numItems / perPage);
    for (var i = 1; i <= totalPages; i++) {
        $('.pagination').append('<li class="page-item"><a class="page-link" href="#">' + i + '</a></li>');
    }
    $('.pagination a').click(function (e) {
        e.preventDefault();
        var currentPage = $(this).text();
        var startIndex = (currentPage - 1) * perPage;
        var endIndex = startIndex + perPage;
        $('.card').hide();
        $('.card').slice(startIndex, endIndex).show();
        $('.pagination a').removeClass('active');
        $(this).addClass('active');
    });
    $('.pagination a:first').trigger('click');


    var delay = 3000;
    function reloadCardContent(searchKeyword) {
        $.ajax({
            url: 'tenyaco-test',
            data: { searchKeyword: searchKeyword },
            success: function (response) {
                $('#card-box').html(response);
            },
            error: function () {
                $('#card-box').html('<p>بعد از 3 ثانیه دیتای جدید نمایش داده میشود</p>');
                $('.pagination').hide()
            }
        });
    }
    var timer;
    $('#search').on('input', function () {
        clearTimeout(timer);
        var searchKeyword = $(this).val();
        timer = setTimeout(function () {
            reloadCardContent(searchKeyword);
        }, delay);
    });
});
