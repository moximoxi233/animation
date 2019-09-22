$(function () {
    //初始化fullpage组件
    $('.container').fullpage({
        //    设置背景色===配置参数
        sectionsColor:["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        //设置屏幕内容对其方式
        verticalCentered:false,
        //设置指示器
        navigation:true,
    //    监听某一屏 回调
        afterLoad:function (Link,index) {
            //    index 序号1开始 当前屏序号
            $('.section').eq(index-1).addClass('now')
            // $('.section').siblings(index-1).removeClass('now')
        },
    //    点击更多跳转下一页
        afterRender:function () {
            $(".more").on('click',function () {
                $.fn.fullpage.moveSectionDown()
            });
            //    当第四屏的购物车动画结束之后执行
            $('.screen04 .car').on('transitionend',function () {
                $('.screen04 .address').show().find('img:last').fadeIn(500);
                $('.screen04 .text').addClass('show')
            });
        //    第八屏功能
            $('.screen08').on('mousemove',function (e) {
                $('.screen08 .hand').css({
                    left:e.clientX-270,
                    top:e.clientY-30
                })
            }).find('.again').on('click',function () {
                $('.now,.leaved,.show').removeClass('now').removeClass('leaved').removeClass('show')
                $('.content [style]').removeAttr('style');

                //    跳到第一页
                $.fn.fullpage.moveTo(1)
            });
        },
    //    离开某一个屏幕切换
        onLeave:function (index,nextindex,direction) {
            if(index==2&&nextindex==3){
                $('.section').eq(index-1).addClass('leaved')
            }
            else if(index==3&&nextindex==4){
                $('.section').eq(index-1).addClass('leaved')
            }
            else if(index==5&&nextindex==6){
                $('.section').eq(index-1).addClass('leaved').removeClass('now')
                $('.screen06').addClass('show')
            }
            else if(index==6&&nextindex==7){
                $('.screen07 .star img').each(function (i,item) {
                    $(this).delay(i*250).fadeIn(500);
                })
            }
        },



    })
})