$.extend($.validator.messages, {
    required: "这是必填字段",
    remote: "请修正此字段",
    email: "请输入有效的电子邮件地址",
    url: "请输入有效的网址",
    date: "请输入有效的日期",
    dateISO: "请输入有效的日期 (YYYY-MM-DD)",
    number: "请输入有效的数字",
    digits: "只能输入数字",
    creditcard: "请输入有效的信用卡号码",
    equalTo: "你的输入不相同",
    extension: "请输入有效的后缀",
    maxlength: $.validator.format("最多可以输入 {0} 个字符"),
    minlength: $.validator.format("最少要输入 {0} 个字符"),
    rangelength: $.validator.format("请输入长度在 {0} 到 {1} 之间"),
    range: $.validator.format("请输入范围在 {0} 到 {1} 之间的数值"),
    max: $.validator.format("请输入不大于 {0} 的数值"),
    min: $.validator.format("请输入不小于 {0} 的数值")
});

$(function() {
    $("input.label_better").label_better({
        position: "top",
        animationTime: 500,
        easing: "ease-in-out",
        offset: 20,
        hidePlaceholderOnFocus: true
    });



    // $('#checked').keyup(function() {
    //     if ($(this).val() == $('#password').val()) {
    //         $('.check').html('');
    //     } else {
    //         $('.check').html('密码不一致').css('color', 'red');
    //     }
    // })




    $('#myform').validate({
        errorClass: 'error',
        // submitHandler: function(form) {
        //     $.ajax({
        //         type: "method",
        //         url: "url",
        //         data: "data",
        //         dataType: "dataType",
        //         success: function(response) {

        //         }
        //     });
        // },
        rules: {
            username: {
                required: true,
                rangelength: [11, 11]
            },
            password: {
                required: true,
                rangelength: [6, 16]
            },
            checked: {
                required: true,
                equalTo: "#password"
            }
        }
    });
    $('#username').keyup(function() {
        var reg = /^[0-9]{11}$/g;
        $.ajax({
            type: "get",
            url: "../php/zhuce.php",
            data: {
                'username': $(this).val(),
            },
            dataType: "json",
            success: function(response) {
                if (reg.test($('#username').val())) {
                    if (response.reslut) {
                        $('.messeg').html(response.messeg).css('color', 'red')


                    } else {
                        $('.messeg').html(response.messeg).css('color', 'green')

                    }
                } else {
                    $('.messeg').html('')
                }
            }
        });
    })

})