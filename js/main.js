$('.tit .btn').click(function (e) {
        e.preventDefault
        //$('.nav').fadeIn();
        //$('.nav').slideDown();
        $('.nav').slideToggle(); //슬라이드 업다운 두기능이 다 있는거
        $('.tit .btn').toggleClass("open")
        if ($('.tit .btn').hasClass('open')) {
            //A.attr(B) ==> A요소안에 있는 속성B를 가져와라
            //A.attr(B,C) ==> A요소안에 있는 속성B를 C로 바꿔라
            $('.tit .btn').find('i').attr("class", "fas fa-angle-up")
        } else {
            $('.tit .btn').find('i').attr("class", "fas fa-angle-down")

        }
    })

    //이미지슬라이드
$('.slider').slick({
    dots: true,
});


lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgThumbnail]
});