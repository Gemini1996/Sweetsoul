$(function () {
    var current_img = 0
    var $circle = $(".slider-nav span")
    $circle.eq(0).addClass('current')
    var timer = null
    // 克隆第一张图片
    $('.navigator li').first().clone().appendTo('.navigator')
    // next效果
    function nextfunc(){
        if(current_img<2){
            current_img++
            $(".inner").animate({"left":(-current_img*100)+'%'},400)
        }
        else {
            current_img = 0
            $(".inner").animate({"left":(-3*100)+'%'},400,function () {
                $(".inner").css("left",0)
            })
        }
        $circle.eq(current_img).addClass('current').siblings().removeClass('current')
    }
    // prev按钮
    $('.prev').click(function () {
        if(current_img>0) {
            current_img--
            $(".inner").animate({"left":-current_img*100+"%"},400)
        }
        else {
            current_img = 2
            $(".inner").css({"left":-300+"%"},400).animate({"left":-current_img*100+"%"},400)
        }
        $circle.eq(current_img).addClass('current').siblings().removeClass('current')
    })
    // next按钮
    $('.next').click(nextfunc)
    // 圆点按钮
    $circle.click(function () {
        current_img = $(this).index()
        $circle.eq(current_img).addClass('current').siblings().removeClass('current')
        $(".inner").animate({"left":-current_img*100+"%"},400)
    })
    // 自动轮播
    timer = setInterval(nextfunc,2000)
    $('.banner').mouseenter(function () {
        clearInterval(timer)
    }).mouseleave(function () {
        clearInterval(timer)
        timer = setInterval(nextfunc,2000)
    })
})