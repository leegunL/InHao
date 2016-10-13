var Index = {

    dom: {},

    init: function() {
        this.initDom();
        this.bindEvent();
    },

    initDom: function() {
        var dom = this.dom;

        dom.smallPic = $('#picList li');  // 九宫格里的小图片
        dom.bigPic = $('#showImg');    // 大图片

        dom.bigImg = $('#showImg img');

        dom.show = $('#show');  // 弹出来的大的div
        dom.mark = $('#mark');  // 蒙层

        dom.prevBtn = $('#prev');  // 上一页
        dom.nextBtn = $('#next');  // 下一页
    },

    bindEvent: function() {
        var dom = this.dom;

        // 小图片点击
        dom.smallPic.click(function() {
            var index = $(this).index();  //索引

            for (var i = 0; i < 5; i++) {
                var url = 'img/show/' + index + '/' + (i+1) + '.jpg';
                dom.bigImg.eq(i).attr('src', url);
            }

            dom.show.fadeIn(800);
        });

        // 点击蒙层的时候fadeOut()
        dom.mark.click(function() {
            dom.show.fadeOut(800);
        })

        // 下一页
        dom.nextBtn.click(function() {

            dom.bigPic.find('li:last').animate({'left': '650px'}, 600, function() {
                $(this).animate({'left': 0}, 600);
                dom.bigPic.prepend($(this));
            })

             dom.bigPic.animate({'left': '40%'}, 600, function() {
                 $(this).animate({'left': '50%'}, 600);
            });
        })

        // 上一页
        dom.prevBtn.click(function() {

            dom.bigPic.find('li:first').animate({'left': '-650px'}, 600, function() {
                $(this).animate({'left': 0}, 600);
                dom.bigPic.append($(this));
            })

            dom.bigPic.animate({'left': '60%'}, 600, function() {
                $(this).animate({'left': '50%'}, 600);
            })
        })


    }

}

$(function() {
    Index.init();
})