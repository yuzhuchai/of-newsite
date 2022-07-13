
    let courseWidth
    let courseHeight

    let socialCard3Width

    let careerWidth
    let careerHeight

    let advisorWidth
    let advisorHeight


	$(window).on("load",function(){
		$(".main_area").width($(window).width())
        // courseWidth = $('.course').width();
        // courseHeight = courseWidth * 480/474
        // $('.course').height(courseHeight)

        careerWidth = $('.career').width();
        careerHeight = careerWidth * 364/360 + 20
        $('.career').height(careerHeight)



        socialCard3Width = $('.socialCard3').width();
        $('.socialCard3').height(socialCard3Width)
	})


    $( window ).resize(function() {
        // courseWidth = $('.course').width();
        // courseHeight = courseWidth * 480/474
        // $('.course').height(courseHeight)

        socialCard3Width = $('.socialCard3').width();
        $('.socialCard3').height(socialCard3Width)

        careerWidth = $('.career').width();
        careerHeight = careerWidth * 364/360 
        $('.career').height(careerHeight)
    });




    let qs = (function(a) {
        if (a == "") return {};
        var b = {};
        for (var i = 0; i < a.length; ++i)
        {
            var p=a[i].split('=', 2);
            if (p.length == 1)
                b[p[0]] = "";
            else
                b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }
        return b;
    })(window.location.search.substr(1).split('&'));

    let filter = qs['filter'];




    // console.log(filter)

    $('.sections').scroll(function(){
        // console.log("hi")
        $("#header").css({"box-shadow":"0px 4px 10px rgba(0,0,0,0.05)"})
        if($('#contentContainer').position().top == 80){
            console.log('hit')
            $("#header").css({"box-shadow":"0px 0px 0px rgba(0,0,0,0.09)"})
        }   
    })


    $('#hiddenLen').click(function(){
        console.log('this is clickedd')
        let lanText = $('#lanText').text()
        let hiddenLan = $('#hiddenLen').text()
        console.log(lanText, hiddenLan)
        if(lanText == 'Cn'){
            $('#lanText').text('Eng')
            $('#hiddenLen').text('Cn')
            $('.cn').hide();
            $('.eng').show();
            lan = "Eng"
        } else {
            $('#lanText').text('Cn')
            $('#hiddenLen').text('Eng')
            $('.cn').show();
            $('.eng').hide();
            lan = "Cn"
        }
    })

        let displayMenu = false;

        $("#menuIconContainer").click(function() {
            if(!displayMenu){
                $("#menuPopUp").slideDown()
                displayMenu = true;
            } else {
                $("#menuPopUp").slideUp()
                displayMenu = false;
            }
        })

        let filterDisplay = false;
        $('#filterContainer').click(function(){
            // console.log('clicked')
            if(!filterDisplay){
                $('#filterText').css({'color':'#ACACAC'})
                $('#filterDisplay').css({'display':'flex'})
                // $('#filterImg').attr('src',"http://cdn0.ofcourse.io/9b9ad25ba1404d5e9df0b84c20636274_0bd902bde4c7f20be91c20be6eb96c8e?imageView2")
                $('#filterImg').hide();
                $('.closeFilterTab').show();
                filterDisplay = true;

            } else {
                $('#filterText').css({'color':'#222222'})
                $('#filterDisplay').css({'display':'none'})
                $('.closeFilterTab').hide();
                $('#filterImg').show();
                // $('#filterImg').attr('src',"http://cdn0.ofcourse.io/8657289f999a42ff903c31f6036a2294_02fe3b72fa38f7f553bdd3bd7b835b96?imageView2")
                filterDisplay = false;
            }
        }) 


        if(filter == 'newest'){
            $('.is-animated').removeClass('is-animated').fadeOut().promise().done(function() {
              $('.newestCourse').addClass('is-animated').fadeIn();
              $('.empty').addClass('is-animated').fadeIn();
            });
            $('.buttonList').css({
                'color':'black',
                'background-color':'white'
            })
            $('#newest').css({
                'color':'white',
                'background-color':'black'
            })
        } else if(filter == 'td'){
            $('.buttonList').css({
                'color':'black',
                'background-color':'white'
            })
            $('#td').css({
                'color':'white',
                'background-color':'black'
            })
            $('.course').hide();
            $('.tdCourse').show();
        } else if(filter == 'unity'){
            $('.buttonList').css({
                'color':'black',
                'background-color':'white'
            })
            $('#unity').css({
                'color':'white',
                'background-color':'black'
            })
            $('.course').hide();
            $('.unityCourse').show();
            $('.empty').show();
        } else if(filter == 'unreal'){
            $('.buttonList').css({
                'color':'black',
                'background-color':'white'
            })
            $('#unreal').css({
                'color':'white',
                'background-color':'black'
            })
            $('.course').hide();
            $('.unrealCourse').show();
            $('.empty').show();
        } else if(filter == 'processing'){
            $('.buttonList').css({
                'color':'black',
                'background-color':'white'
            })
            $('#processing').css({
                'color':'white',
                'background-color':'black'
            })
            $('.course').hide();
            $('.processingCourse').show();
        } else if (filter == 'js'){
            $('.buttonList').css({
                'color':'black',
                'background-color':'white'
            })
            $('.course').hide();
            $('.jsCourse').show();
            $('.empty').show();

        } else if (filter == 'p5'){
            $('.buttonList').css({
                'color':'black',
                'background-color':'white'
            })
            $('.course').hide();
            $('.p5Course').show();
            $('.empty').show();
        } else if (filter == 'metaverse'){
            $('.buttonList').css({
                'color':'black',
                'background-color':'white'
            })
            $('#metaverse').css({
                'color':'white',
                'background-color':'black'
            })
            $('.course').hide( );
            $('.metaverseCourse').show();
        } else if (filter =='ar'){
            $('.course').hide();
            $('.arCourse').show();
            $('.empty').show();
        } else if (filter=='vr'){
            $('.course').hide();
            $('.vrCourse').show();
            $('.empty').show();
        } else if (filter == 'ai'){
            $('.buttonList').css({
                'color':'black',
                'background-color':'white'
            })
            $('#ai').css({
                'color':'white',
                'background-color':'black'
            })
            $('.course').hide();
            $('.aiCourse').show();
            $('.empty').show();
        } else if (filter == 'xr') {
            $('.buttonList').css({
                'color':'black',
                'background-color':'white'
            })
            $('#xr').css({
                'color':'white',
                'background-color':'black'
            })
            $('.course').hide();
            $('.xrCourse').show();
            $('.empty').show();
        } else if (filter == 'nft'){
            $('.buttonList').css({
                'color':'black',
                'background-color':'white'
            })
            $('#nft').css({
                'color':'white',
                'background-color':'black'
            })
            $('.course').hide();
            $('.nftCourse').show();
            $('.empty').show();
        } else if (filter == 'ux'){
            $('.course').hide( );
            $('.uxCourse').show( );
            $('.empty').show();
        }









        $('.buttonList').click(function(){
            $('.clickFilter').css({'color':'#222222','background-color':'white'})
            $('.buttonList').css({
                'color':'black',
                'background-color':'white'
            })
            $(this).css({'color':'white'});
            $(this).css({'background-color':'black'});
            $('#filterFiller').text('COURSE LIST')
        })

        $('.clickFilter').click(function(){
            let name = $(this).text();
            $('.clickFilter').css({'color':'#222222','background-color':'white'})
            $(this).css({
                'color':'white' ,
                'background-color': '#222222'
            })
            $('#filterFiller').text(name)
            $('.buttonList').css({
                'color':'black',
                'background-color':'white'
            })
        })

        // click event
        $('.all').click(function(){
            $('.is-animated').removeClass('is-animated').fadeOut().promise().done(function() {
              $('.course').addClass('is-animated').fadeIn();
            });
            // $('.course').show().addClass('is-animated');/
            // $('.course').addClass('is-animated');
        })

        $('.recommand').click(function(){
             $('.is-animated').removeClass('is-animated').fadeOut().promise().done(function() {
              $('.recommandCourse').addClass('is-animated').fadeIn();
            });
            // $('.course').hide();
            // $('.coruse').hide().removeClass('is-animated')
            // $('.recommandCourse').show().addClass("is-animated")
            // show( );
        })

        $('.unity').click(function(){
            $('.is-animated').removeClass('is-animated').fadeOut().promise().done(function() {
              $('.unityCourse').addClass('is-animated').fadeIn();
              $('.empty').addClass('is-animated').fadeIn();
            });
            // $('.course').hide( );
            // $('.unityCourse').show( );
            // $('.empty').show();
        })

        $('.unreal').click(function(){
            $('.is-animated').removeClass('is-animated').fadeOut().promise().done(function() {
              $('.unrealCourse').addClass('is-animated').fadeIn();
            });
        })

        $('.td').click(function(){
            $('.is-animated').removeClass('is-animated').fadeOut().promise().done(function() {
              $('.tdCourse').addClass('is-animated').fadeIn();
            });
        })

        $('.arduino').click(function(){
            $('.is-animated').removeClass('is-animated').fadeOut().promise().done(function() {
              $('.arduinoCourse').addClass('is-animated').fadeIn();
            });
        })

        $('.processing').click(function(){
            $('.is-animated').removeClass('is-animated').fadeOut().promise().done(function() {
              $('.processingCourse').addClass('is-animated').fadeIn();
            });
        })

        $('.ml5').click(function(){
            $('.is-animated').removeClass('is-animated').fadeOut().promise().done(function() {
              $('.ml5Course').addClass('is-animated').fadeIn();
              $('.empty').addClass('is-animated').fadeIn();

            });
        })

        $('.js').click(function(){
            $('.is-animated').removeClass('is-animated').fadeOut().promise().done(function() {
              $('.jsCourse').addClass('is-animated').fadeIn();
              $('.empty').addClass('is-animated').fadeIn();

            });
        })

        $('.shader').click(function(){
            $('.is-animated').removeClass('is-animated').fadeOut().promise().done(function() {
              $('.shaderCourse').addClass('is-animated').fadeIn();
            });
        })

        $('.ai').click(function(){
            $('.is-animated').removeClass('is-animated').fadeOut().promise().done(function() {
              $('.aiCourse').addClass('is-animated').fadeIn();
              $('.empty').addClass('is-animated').fadeIn();

            });
        })
        $('.xr').click(function(){
            $('.is-animated').removeClass('is-animated').fadeOut().promise().done(function() {
              $('.xrCourse').addClass('is-animated').fadeIn();
              $('.empty').addClass('is-animated').fadeIn();

            });
        })
        $('.nft').click(function(){
            $('.is-animated').removeClass('is-animated').fadeOut().promise().done(function() {
              $('.nftCourse').addClass('is-animated').fadeIn();
              $('.empty').addClass('is-animated').fadeIn();
            });
        })
        $('.p5').click(function(){
            $('.is-animated').removeClass('is-animated').fadeOut().promise().done(function() {
              $('.p5Course').addClass('is-animated').fadeIn();
              $('.empty').addClass('is-animated').fadeIn();

            });
        })
        $('.metaverse').click(function(){
            $('.is-animated').removeClass('is-animated').fadeOut().promise().done(function() {
              $('.metaverseCourse').addClass('is-animated').fadeIn();
            });
        })
        $('.museum').click(function(){
            $('.is-animated').removeClass('is-animated').fadeOut().promise().done(function() {
              $('.museumCourse').addClass('is-animated').fadeIn();
            });
        })
        $('.light').click(function(){
            $('.is-animated').removeClass('is-animated').fadeOut().promise().done(function() {
              $('.lightCourse').addClass('is-animated').fadeIn();
            });
        })

        $('.highTech').click(function(){
            $('.is-animated').removeClass('is-animated').fadeOut().promise().done(function() {
              $('.highTechCourse').addClass('is-animated').fadeIn();
              $('.empty').addClass('is-animated').fadeIn();

            });
        })

        $('.exhibition').click(function(){
            $('.is-animated').removeClass('is-animated').fadeOut().promise().done(function() {
              $('.exhibitionCourse').addClass('is-animated').fadeIn();
              $('.empty').addClass('is-animated').fadeIn();

            });
        })

        $('.brand').click(function(){
            $('.is-animated').removeClass('is-animated').fadeOut().promise().done(function() {
              $('.brandCourse').addClass('is-animated').fadeIn();
            });
        })

        $('.stage').click(function(){
            $('.is-animated').removeClass('is-animated').fadeOut().promise().done(function() {
              $('.stageCourse').addClass('is-animated').fadeIn();
            });
        })

        $('.avs').click(function(){
            $('.is-animated').removeClass('is-animated').fadeOut().promise().done(function() {
              $('.avsCourse').addClass('is-animated').fadeIn();
            });
        })

        $('.interactive').click(function(){
            $('.is-animated').removeClass('is-animated').fadeOut().promise().done(function() {
              $('.interactiveCourse').addClass('is-animated').fadeIn();
              $('.empty').addClass('is-animated').fadeIn();

            });
        })

        $('.game').click(function(){
            $('.is-animated').removeClass('is-animated').fadeOut().promise().done(function() {
              $('.gameCourse').addClass('is-animated').fadeIn();
            });
        })

        $('.ar').click(function(){
            $('.is-animated').removeClass('is-animated').fadeOut().promise().done(function() {
              $('.arCourse').addClass('is-animated').fadeIn();
            });
        })

        $('.vr').click(function(){
            $('.is-animated').removeClass('is-animated').fadeOut().promise().done(function() {
              $('.vrCourse').addClass('is-animated').fadeIn();
            });
        })

        $('.immersive').click(function(){
            $('.is-animated').removeClass('is-animated').fadeOut().promise().done(function() {
              $('.immersiveCourse').addClass('is-animated').fadeIn();
            });
        })

        $('.dh').click(function(){
            $('.is-animated').removeClass('is-animated').fadeOut().promise().done(function() {
              $('.dhCourse').addClass('is-animated').fadeIn();
            });
        })

        

        // ar vr immersive dh

        $('.newest').click(function(){
            $('.is-animated').removeClass('is-animated').fadeOut().promise().done(function() {
              $('.newestCourse').addClass('is-animated').fadeIn();
            });
        })

  
        $('.high').click(function(){
            $('.is-animated').removeClass('is-animated').fadeOut().promise().done(function() {
              $('.highCourse').addClass('is-animated').fadeIn();
              $('.empty').addClass('is-animated').fadeIn();

            });
        })

        $('.popular').click(function(){
             $('.is-animated').removeClass('is-animated').fadeOut().promise().done(function() {
              $('.popularCourse').addClass('is-animated').fadeIn();
            });
        })


 


        $('#displayCode').hover(function(){
            // console.log('hovered')
            $('#weChatCode').show()
        }, function(){
            $('#weChatCode').hide()
        })



        $('#showCode').hover(function(){
            // console.log('hovered')
            $('#weChatCodeMenu').show()
        }, function(){
            $('#weChatCodeMenu').hide()
        })

        let lan = 'CN'
        $("#color_mode").on("change", function () {
            console.log('this is clickedd')
            if(lan == 'CN'){
                $('.cn').hide();
                $('.eng').show();
                lan = "EN"
            } else {
                $('.cn').show();
                $('.eng').hide();
                lan = "CN"
            }
        })

        $('.mobileLan').on('click',function(){
            if(lan == 'CN'){
                $('#mobileCn').hide()
                $('#mobileEn').show()
                $('.cn').hide();
                $('.eng').show();
                lan = 'EN'
            } else {
                $('#mobileCn').show()
                $('#mobileEn').hide()
                $('.cn').show();
                $('.eng').hide();
                lan = 'CN'
            }

        })

        $('#login').click(function(){
            $('#loginPopupBg').show()
        })
        
        $('.closeTab').click(function(){
            $('#loginPopupBg').hide()
        })

