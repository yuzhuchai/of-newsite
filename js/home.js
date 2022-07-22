    let courseWidth
    let courseHeight

    let socialCard3Width

    let careerWidth
    let careerHeight

    let advisorWidth
    let advisorHeight

    let socialCardWidth

	$(window).on("load",function(){
		$(".main_area").width($(window).width())
        courseWidth = $('.course').width();
        courseHeight = courseWidth * 480/474 + 50
        $('.course').height(courseHeight)

        careerWidth = $('.career').width();
        careerHeight = careerWidth * 364/360 + 20
        $('.career').height(careerHeight)



        contentWidth = $('#contentContainer').width();
        console.log(contentWidth)

        if(contentWidth < 767){  
            $('#xiaoyuzhou').attr('src', 'http://cdn0.ofcourse.io/9b9ad25ba1404d5e9df0b84c20636274_1628b576636c4731e3d446d523a7c16d?imageView2')
            $('#wechat').attr('src', 'http://cdn0.ofcourse.io/9b9ad25ba1404d5e9df0b84c20636274_f01e58d658c36e7394c00efd7fdeba19?imageView2')
        }
	})


    $( window ).resize(function() {
        courseWidth = $('.course').width();
        // console.log(courseWidth , "<-onresize")
                // courseWidth = $('.course').width();
        courseHeight = courseWidth * 480/474 + 50
        $('.course').height(courseHeight)

        socialCard3Width = $('.socialCard3').width();
        $('.socialCard3').height(socialCard3Width)

        careerWidth = $('.career').width();
        careerHeight = careerWidth * 364/360 
        $('.career').height(careerHeight)

        let screenWidth = screen.width;

        contentWidth = $('#contentContainer').width();
        console.log(contentWidth)

        if(contentWidth < 767){  
            console.log('this is reactive')
            $('#xiaoyuzhou').attr('src', 'http://cdn0.ofcourse.io/9b9ad25ba1404d5e9df0b84c20636274_1628b576636c4731e3d446d523a7c16d?imageView2')
            $('#wechat').attr('src', 'http://cdn0.ofcourse.io/9b9ad25ba1404d5e9df0b84c20636274_f01e58d658c36e7394c00efd7fdeba19?imageView2')
        } else {
            $('#xiaoyuzhou').attr('src', 'http://cdn0.ofcourse.io/9b9ad25ba1404d5e9df0b84c20636274_1c7d5b13aace3ddf7d0d740566301e9a?imageView2')
            $('#wechat').attr('src', 'http://cdn0.ofcourse.io/9b9ad25ba1404d5e9df0b84c20636274_d3cec76a07e0a0c6b13c7c23559167d3?imageView2')
        }
    });


    
// this is loading the header shadow with sections, on uploading to the site 

    $('.sections').scroll(function(){
        $("#header").css({"box-shadow":"0px 4px 10px rgba(0,0,0,0.05)"})
        if($('.sections').scrollTop() == 0){
            $("#header").css({"box-shadow":"0px 0px 0px rgba(0,0,0,0.09)"})
        }
    })

// this is loading the header shadow with sections, on loacal testing 
    $( window ).scroll(function(){
        $("#header").css({"box-shadow":"0px 4px 10px rgba(0,0,0,0.05)"})
        if($(window).scrollTop() == 0){
            $("#header").css({"box-shadow":"0px 0px 0px rgba(0,0,0,0.09)"})
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

        let dropDownDisplay = false; 
        $('.mobileLan').on('click',function(){
            if(!dropDownDisplay){
                $('#lanDropDown').show()
                dropDownDisplay = true;
            } 
        })

        $('#contentContainer').on('click', function(){
            if(dropDownDisplay){
                $('#lanDropDown').hide()
                dropDownDisplay = false;
            }
        })

        $('#cnMobile').on('click', function(){
            $('.cn').show();
            $('.eng').hide();
            lan = 'CN'
            $('#cnMobile').css('text-decoration','underline')
            $('#enMobile').css('text-decoration','none')

        })

        $('#enMobile').on('click', function(){
            $('.cn').hide();
            $('.eng').show();
            lan = 'EN'
            $('#enMobile').css('text-decoration','underline')
            $('#cnMobile').css('text-decoration','none')
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

        $('#wechatSocial').hover(function(){
            $('#dimImg').css({'filter':'brightness(50%)'}) 
            $('#showWechatCode').show();
        }, function(){
            $('#dimImg').css({'filter':'none'}) 
            $('#showWechatCode').hide();
        })


        $('#login').click(function(){
            $('#loginPopupBg').show()
        })
        
        $('.closeTab').click(function(){
            $('#loginPopupBg').hide()
        })


        // $(window).scroll(function(){
        //     // console.log("hi")
        //     $("#header").css({"box-shadow":"0px 4px 20px rgba(0,0,0,0.09)"})
        // })


        $('#videoContainer').click(function () {
            if($('#videoContainer').children('#aboutVideo').get(0).paused){        
                $('#videoContainer').children(".playButton").fadeOut();
            } else{
                // $('#videoContainer').children(".playButton").fadeIn();
            }
        });




        function submitSearch(e){
            // e.preventDefault();
            if(e.key == 'Enter'){

                console.log('this is submitted')
            }
        }


    

