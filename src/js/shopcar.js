$(function() {
    //没有登录就跳转登录页
    if (!cookie.get('login')) {
        location.href = "index.html";
    }
    $('#login').html(cookie.get('username'));
    $('#login').click(function() {
        cookie.remove('login')
    })
    var shop = cookie.get('shop');
    if (shop) {
        shop = JSON.parse(shop);
        //从cookie取id从后台取得数据
        var idList = shop.map(elm => elm.id).join();
        $.ajax({
            type: "get",
            url: "../php/shop.php",
            data: {
                'idList': idList
            },
            dataType: "json",
            success: function(response) {
                response.forEach(function(elm, i) {
                    var arr = shop.filter((val, i) => {
                        return val.id === elm.id;
                    });
                    if (elm.pic.length > 30) {
                        var pic = JSON.parse(elm.pic)
                        var str = `  
                                <div class="itembox clear">
                                <div class="col col-check "> <input type="checkbox" class="check1" checked></div>
                                <div class="col col-img"><img src="${pic[0].src}" alt=""></div>
                                <div class="col col-name name1">${elm.title}</div>
                                <div class="col col-price price1">${elm.price}</div>
                                <div class="col col-num">
                                <a href="javascript:;" class="pre"><i class="iconfont">&#xe637;</i></a>
                                <input type="number" name="text" class="text" value="${arr[0].num}" min="1" max="${elm.num}" >
                                <a href="javascript:;" class="next"><i class="iconfont">&#xe635;</i></a>
                                </div>
                                <div class="col col-total total1"><span class="total2">${parseInt(elm.price)*arr[0].num}</span>元</div>
                                <a href="javascript:;" data-index=${arr[0].id} class="col col-action iconfont del">&#xe632;</a>
                                </div>`
                        $('.list-body').append(str)
                    } else {
                        var str = `  
                                    <div class="itembox clear">
                                    <div class="col col-check"> <input type="checkbox"  class="check1" checked></div>
                                    <div class="col col-img"><img src="${elm.pic}" alt=""></div>
                                    <div class="col col-name name1">${elm.title}</div>
                                    <div class="col col-price price1">${elm.price}</div>
                                    <div class="col col-num">
                                    <a href="javascript:;" class="pre"><i class="iconfont">&#xe637;</i></a>
                                    <input type="number" name="text" class="text" value="${arr[0].num}" min="1" max="${elm.num}" >
                                    <a href="javascript:;" class="next"><i class="iconfont">&#xe635;</i></a>
                                    </div>
                                    <div class="col col-total total1"><span class="total2">${parseInt(elm.price)*arr[0].num}</span>元</div>
                                    <a href="javascript:;" data-index=${arr[0].id} class="col col-action iconfont del">&#xe632;</a>
                                    </div>`
                        $('.list-body').append(str)

                    }
                });
                //计算总价
                function cal() {
                    var totalp = $('.total2');
                    var toto = 0;
                    for (var j = 0; j < totalp.length; j++) {
                        toto += $(totalp[j]).html() * 1
                    }
                    $('.total-price>em').html(toto);
                }
                cal()
                    //加减数量后价格的变化
                $('.text').on('blur', function() {
                    var isCheck = $(this).parent().siblings('.col-check').children('.check1').prop('checked');
                    var val = $(this).val();
                    if (val <= 0) {
                        val = 1;
                        $(this).val(1)
                    }
                    var pri = parseInt($(this).parent().siblings('.price1').html());
                    var totalp = val * pri;
                    var total = $(this).parent().siblings('.total1').children('.total2');
                    //增减量
                    var addp = totalp - total.html();

                    total.html(totalp)
                    save()
                    if (isCheck) {
                        $('.total-price>em').html(function(i, oldattr) {
                            return oldattr * 1 + addp

                        });
                        save()
                    }
                })



                //全选框
                var fir = $('.list-head input[type="checkbox"]');
                var els = $('.list-body .check1');
                fir.on('click', function() {
                    var isCheck = $(this).prop('checked');
                    //全选框的选择状态来改变总价格
                    if (isCheck) {
                        cal()
                        save()
                    } else {
                        $('.total-price>em').html(0);
                        save()
                    }
                    els.prop('checked', isCheck);
                })
                els.on('click', function() {
                    var islength = els.length;
                    var checkLength = $('.list-body .check1:checked').length;
                    isCheck = checkLength === islength;
                    fir.prop('checked', isCheck)
                    var issCheck = $(this).prop('checked');
                    //单选框的选择状态来改变总价格
                    var pri = parseInt($(this).parent().siblings().children('.total2').html());
                    if (issCheck) {
                        //选选中总价格加上点击的价格
                        $('.total-price>em').html(function(i, oldattr) {
                            // console.log(oldattr, pri)
                            return oldattr * 1 + pri
                        });
                        save()
                    } else {
                        //取消选中总价格减去点击的价格
                        $('.total-price>em').html(function(i, oldattr) {
                            // console.log(oldattr, pri)
                            return oldattr * 1 - pri
                        });
                        save()
                    }
                })

                //删除商品
                $('.del').on('click', function() {
                    var idex = $(this).attr('data-index');
                    var arr1 = shop.filter((val, i) => {
                        return val.id !== idex;
                    });
                    arr1 = JSON.stringify(arr1)
                    cookie.set('shop', arr1)
                    $(this).parent().empty();
                    location.reload();
                })

                function save() {
                    localStorage.setItem('main', $('.list-body').html())
                }

            }

        });
    }

})