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
    var shop1 = cookie.get('shop1');
    var toto = 0;
    var toto1 = 0;
    if (shop) {
        shop = JSON.parse(shop);
        //从cookie取得总价格
        var arr = shop.map(function(val, i) {
            return val
        });
        for (var i = 0; i < arr.length; i++) {
            toto += parseInt(arr[i].price) * parseInt(arr[i].num)
        }
        //从cookie取id发个后太取得数据
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
                    var pic = JSON.parse(elm.pic)
                    var arr = shop.filter((val, i) => {
                        return val.id === elm.id;
                    });

                    var str = `  
                <div class="itembox clear">
                <div class="col col-check "> <input type="checkbox" class="check2" checked></div>
                <div class="col col-img"><img src="${pic[0].src}" alt=""></div>
                <div class="col col-name name1">${elm.title}</div>
                <div class="col col-price price1">${elm.price}</div>
                <div class="col col-num"><input type="number" name="number" id="number" value="${arr[0].num}" min="1" max="${elm.num}" ></div>
                <div class="col col-total total1 total3">${parseInt(elm.price)*arr[0].num}元</div>
                <a href="javascript:;" data-index=${arr[0].id} class="col col-action iconfont del">&#xe626;</a>
            </div>`
                    $('.list-body').append(str)
                });
                //删除商品
                $('.del').on('click', function() {
                        $(this).parent().empty();
                        var idex = $(this).attr('data-index');
                        var arr2 = shop.filter((val, i) => {
                            return val.id !== idex;
                        });
                        arr2 = JSON.stringify(arr2)
                        cookie.set('shop', arr2)
                        location.reload();
                        // console.log(toto + toto1)
                        // $('.total-price>em').html(toto + toto1);

                    })
                    //全选框
                var fir = $('.list-head input[type="checkbox"]');
                var els = $('.list-body .check2');
                fir.on('click', function() {
                    var isCheck = $(this).prop('checked');
                    //全选框的选择状态来改变总价格
                    if (isCheck) {
                        $('.total-price>em').html(toto + toto1);
                    } else {
                        $('.total-price>em').html(0);
                    }
                    els.prop('checked', isCheck);
                })
                els.on('click', function() {
                    var islength = els.length;
                    var checkLength = $('.list-body .check2:checked').length;
                    isCheck = checkLength === islength;
                    fir.prop('checked', isCheck)
                    var issCheck = $(this).prop('checked');
                    //单选框的选择状态来改变总价格
                    var pri = parseInt($(this).parent().parent().children('.total3').html());
                    console.log(pri)
                    if (issCheck) {
                        //选选中总价格加上点击的价格
                        $('.total-price>em').html(function(i, oldattr) {
                            // console.log(oldattr, pri)
                            return oldattr * 1 + pri

                        });
                    } else {
                        //取消选中总价格减去点击的价格
                        $('.total-price>em').html(function(i, oldattr) {
                            // console.log(oldattr, pri)
                            return oldattr * 1 - pri

                        });
                    }
                })
            }
        });
    }
    //第二张表与上面功能一样
    if (shop1) {
        shop1 = JSON.parse(shop1);
        var arr1 = shop1.map(function(val, i) {
            return val
        });
        for (var i = 0; i < arr1.length; i++) {
            toto1 += parseInt(arr1[i].price) * parseInt(arr1[i].num)
        }
        var idList = shop1.map(elm => elm.id).join();
        $.ajax({
            type: "get",
            url: "../php/shop1.php",
            data: {
                'idList': idList
            },
            dataType: "json",
            success: function(response) {
                response.forEach(function(elm, i) {
                    var arr = shop1.filter((val, i) => {
                        return val.id === elm.id;
                    });

                    var str = `  
                <div class="itembox clear">
                <div class="col col-check "> <input type="checkbox"  class="check1" checked></div>
                <div class="col col-img"><img src="${elm.pic}" alt=""></div>
                <div class="col col-name name1">${elm.title}</div>
                <div class="col col-price price1">${elm.price}</div>
                <div class="col col-num"><input type="number" name="number" id="number" value="${arr[0].num}" min="1" max="${elm.num}" ></div>
                <div class="col col-total total1 total2">${parseInt(elm.price)*arr[0].num}元</div>
                <a href="javascript:;" data-index=${arr[0].id} class="col col-action iconfont del1">&#xe626;</a>
            </div>`
                    $('.list-body').append(str)
                });

                $('.del1').on('click', function() {
                    $(this).parent().empty();
                    var idex = $(this).attr('data-index');
                    var arr1 = shop1.filter((val, i) => {
                        return val.id !== idex;
                    });
                    arr1 = JSON.stringify(arr1)
                    cookie.set('shop1', arr1);
                    location.reload();
                    // $('.total-price>em').html(toto + toto1);
                })
                var fir = $('.list-head input[type="checkbox"]');
                var elss = $('.list-body .check1');
                fir.on('click', function() {
                    var isCheck = $(this).prop('checked');
                    if (isCheck) {
                        $('.total-price>em').html(toto + toto1);
                    } else {
                        $('.total-price>em').html(0);
                    }
                    elss.prop('checked', isCheck);
                })
                elss.on('click', function() {
                    var islength = elss.length;
                    var checkLength = $('.list-body .check1:checked').length;
                    isCheck = checkLength === islength;
                    fir.prop('checked', isCheck)
                    var issCheck = $(this).prop('checked');
                    var pri = parseInt($(this).parent().parent().children('.total2').html());
                    // console.log(pri)
                    if (issCheck) {
                        $('.total-price>em').html(function(i, oldattr) {
                            // console.log(oldattr, pri)
                            return oldattr * 1 + pri

                        });
                    } else {
                        $('.total-price>em').html(function(i, oldattr) {
                            // console.log(oldattr, pri)
                            return oldattr * 1 - pri

                        });
                    }
                })
            }
        });

    }
    //页面加载成功计算出总价格
    $('.total-price>em').html(toto + toto1);

})