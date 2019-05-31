$(function() {

    if (!cookie.get('login')) {
        location.href = "index.html";
    }

    $('#login').html(cookie.get('username'));
    $('#login').click(function() {
        cookie.remove('login')
    });


    //后台数据
    $.ajax({
        type: "get",
        url: "../php/xiaomi.php",
        dataType: "json",
        success: function(response) {

            response.forEach(function(elm, i) {
                var pic = JSON.parse(elm.pic)
                var li = `<li>
                            <div class="newbox">新品</div>
                            <div class="imgbox">
                                <a href="./商品详情页.html?${elm.id}">
                                    <img class="lazy" data-original="${pic[0].src}">
                                </a>
                            </div>
                            <h3 class="title">
                                <a href="./商品详情页.html?${elm.id}" style="color:#333">${elm.title}</a>
                            </h3>
                            <p class="title1">${elm.details}</p>
                            <p class="price">
                                <span>
                                    ${elm.price}
                                </span>
                                <!-- <del style="color: #b0b0b0;">1999元</del> -->
                            </p>
                        </li>`;
                $('.product1').append(li)
            })
            $("img.lazy").lazyload({
                effect: "fadeIn",
                placeholder: "../image/dongtu1.gif",
                // container: $(".main")
            });
        }
    });
    $.ajax({
        type: "get",
        url: "../php/xiaomi1.php",
        dataType: "json",
        success: function(response) {
            var li1 = '';
            for (var i = 0; i < response.length; i++) {
                var li = `<li>
                        <div class="newbox">新品</div>
                        <div class="imgbox">
                            <a href="./商品详情页家电.html?${response[i].id}">
                                <img class="lazy" data-original="${response[i].pic}">
                            </a>
                        </div>
                        <h3 class="title">
                            <a href="./商品详情页家电.html?${response[i].id}" style="color:#333">${response[i].title}</a>
                        </h3>
                        <p class="title1"></p>
                        <p class="price">
                            <span>
                                ${response[i].price}
                            </span>
                            <!-- <del style="color: #b0b0b0;">1999元</del> -->
                        </p>
                        <div class="review-wrapper">
                        <a href="javascript:;">
                        <span class="review">${response[i].details}</span>
                        <span class="author"> ${response[i].details1} </span>
                        </a>
                        </div>
                    </li>`;
                li1 += li;
            }
            $('.product2').html(li1)
            $("img.lazy").lazyload({
                effect: "fadeIn",
                placeholder: "../image/dongtu1.gif",
                // container: $(".main")
            });
        }
    });

    $.ajax({
        type: "get",
        url: "../php/xiaomi2.php",
        dataType: "json",
        success: function(response) {
            var li1 = '';
            for (var i = 0; i < response.length; i++) {
                var li = `<li class=" review-item  brick-item ">
                <div class=" figure-img">
                    <a href="javascript:;">
                        <img class="lazy" data-original="${response[i].pic}">
                    </a>
                </div>
                <p class="review">
                    <a href="javascript:;">
                    ${response[i].details}
                    </a>
                </p>
                <p class="auto">
                ${response[i].details1}
                </p>
                <div class="info">
                    <h3 class="title">
                        <a href="javascript:;">
                        ${response[i].title}
                        </a>
                    </h3>
                    <span class="sep">|</span>
                    <p class="price"> ${response[i].price}</p>
                </div>
                </li>`;
                li1 += li;
            }
            $('.product3').html(li1)
            $("img.lazy").lazyload({
                effect: "fadeIn",
                placeholder: "../image/dongtu1.gif",
                // container: $(".main")
            });
        }
    });

    $("img.lazy").lazyload({
        effect: "fadeIn",
        placeholder: "../image/dongtu1.gif",
        // container: $(".main")
    });

    //轮播图
    var nowpic = 0;
    var zindex = 0;
    var numimg = $('.banner-top img').length - 1;
    var timer = null;

    function now() {
        $($('.banner-top .side')[nowpic]).css('z-index', 50).fadeIn(500).siblings('.side').css('z-index', 0).fadeOut();
        $($('.btn')[nowpic]).addClass('active').siblings('.btn').removeClass('active');
    }
    $('.leftbtn').click(function() {
        nowpic--;
        if (nowpic < 0) {
            nowpic = numimg;
        }
        now()

    });
    $('.rightbtn').click(function() {
        nowpic++;
        if (nowpic > numimg) {
            nowpic = 0;
        }
        now();
    })
    $('.btn').click(function() {
        var idex = $('.btn').index(this)
        nowpic = idex;
        // $(this).addClass('active').siblings().removeClass('active');
        now()
    })

    function auto() {
        timer = setInterval(function() {
            nowpic++;
            if (nowpic > numimg) {
                nowpic = 0;
            }
            now();
        }, 3500)
    };
    $('.banner-top').mouseover(function() {
        clearInterval(timer)

    });
    $('.banner-top').mouseout(function() {
        auto();
    });
    auto();
    $($('.banner-top .side')[0]).siblings('.side').css('display', 'none')


})