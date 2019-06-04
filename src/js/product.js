$(function() {

    // 用户名
    if (!cookie.get('login')) {
        location.href = "index.html";
    }
    $('#login').html(cookie.get('username'))
    $('#login').click(function() {
        cookie.remove('login')
    })

    var id = location.search.split('?')[1];
    $.ajax({
        type: "get",
        url: "../php/product.php",
        data: {
            'id': id
        },
        dataType: "json",
        success: function(response) {
            var temp = '';
            if (response.pic.length > 30) {
                var pic = JSON.parse(response.pic);
                temp = `<div class="banner-top">
                   <div class="side"><img src="${pic[0].src}" alt="1"></div>
                   <div class="side"><img src="${pic[1].src}" alt="2"></div>
                   <div class="side"><img src="${pic[2].src}" alt="3"></div>
                   <div class="side"><img src="${pic[3].src}" alt="4"></div>
                   <div class="banner-bottom">
                       <div class="btns">
                           <a href="javascript:void(0);" class="btn active">1</a>
                           <a href="javascript:void(0);" class="btn">2</a>
                           <a href="javascript:void(0);" class="btn">3</a>
                           <a href="javascript:void(0);" class="btn">4</a>
                       </div>
                       <div class="sidebtn">
                           <a href="javascript:void(0);" class="leftbtn"></a>
                           <a href="javascript:void(0);" class="rightbtn"></a>
                       </div>

                   </div>
               </div>
               <div class="cho-right">
                   <p class="name">${response.title}</p>
                   <p class="detail">${response.details}</p>
                   <p>小米自营</p>
                   <p class="cho-pic">${response.price}</p>
                   <div class="cho-price">
                       <ul>
                           <li>${response.title}<span>${response.price}</span></li>
                           <li class="total"> 总计 ：${response.price} </li>
                       </ul>
                   </div>

                   <ul class="shopcar clear">
                       <li>
                           <input type="number" name="number" id="number" value="1" min="1" max="${response.num}" >
                       </li>
                       <li>
                           <a href="javascript:void(0);" class="gobuy">加入购物车</a>
                       </li>

                   </ul>
               </div>`
            } else {
                temp = `<div class="banner-top">
                        <div class="side"><img src="${response.pic}" alt="1"></div>
                    </div>
                    <div class="cho-right">
                        <p class="name">${response.title}</p>
                        <p class="detail">${response.details}</p>
                        <p>小米自营</p>
                        <p class="cho-pic">${response.price}</p>
                        <div class="cho-price">
                            <ul>
                                <li>${response.title}<span>${response.price}</span></li>
                                <li class="total"> 总计 ：${response.price} </li>
                            </ul>
                        </div>

                        <ul class="shopcar clear">
                            <li>
                                <input type="number" name="number" id="number" value="1" min="1" max="${response.num}" >
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="gobuy">加入购物车</a>
                            </li>

                        </ul>
                    </div>`
            }
            $('.banner').append(temp);
            //加入购物车特效
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
            $($('.banner-top .side')[0]).siblings('.side').css('display', 'none');

            //加入购物车特效
            var car = $('.gobuy')
            var imgbuy = $('.banner-top').find('img').eq(0);
            car.click(function() {
                addShopCar(response.id, response.price, $('#number').val());
                if (imgbuy) {
                    var imgclone = imgbuy.clone().offset({
                        top: imgbuy.offset().top,
                        left: imgbuy.offset().left
                    }).css({
                        'opacity': 0.8,
                        'position': 'absolute',
                        'width': '400',
                        'height': '400',
                        'z-index': '100'
                    }).appendTo($('body')).animate({
                        top: $('.buy').offset().top + 20,
                        left: $('.buy').offset().left + 60,
                        width: 75,
                        height: 75
                    }, 1500);
                    setTimeout(function() {
                        $('.buy').effect('shake', {
                            times: 2
                        }, 300)
                    }, 2000)
                    imgclone.animate({
                        width: 0,
                        height: 0
                    }, 1000, function() {
                        $(this).detach()
                    })


                }
            })

            function addShopCar(id, price, num) {
                var shop = cookie.get('shop');
                var product = {
                    "id": id,
                    "price": price,
                    "num": num
                };
                if (shop) {
                    shop = JSON.parse(shop)
                    if (shop.some(elm => elm.id == id)) {
                        shop.forEach(function(elm, i) {
                            elm.id == id ? elm.num = num : null;
                        });
                    } else {
                        shop.push(product);
                    }
                    cookie.set('shop', JSON.stringify(shop), 1);
                } else {
                    shop = [];
                    shop.push(product);
                    cookie.set('shop', JSON.stringify(shop), 1);
                }
            }

        }
    });
    $('.buy').on('click', function() {
        location.href = '购物车.html';
    })
});