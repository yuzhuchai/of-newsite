
let courseWidth
let courseHeight

let socialCard3Width

let careerWidth
let careerHeight

let advisorWidth
let advisorHeight


$(window).on("load",function(){
    $(".main_area").width($(window).width())
    courseWidth = $('.course').width();
    courseHeight = courseWidth * 440/474
    $('.course').height(courseHeight)

    careerWidth = $('.career').width();
    careerHeight = careerWidth * 364/360 + 20
    $('.career').height(careerHeight)



    socialCard3Width = $('.socialCard3').width();
    $('.socialCard3').height(socialCard3Width)
})


$( window ).resize(function() {
    courseWidth = $('.course').width();
    // console.log(courseWidth , "<-onresize")
            // courseWidth = $('.course').width();
    courseHeight = courseWidth * 440/474
    $('.course').height(courseHeight)

    socialCard3Width = $('.socialCard3').width();
    $('.socialCard3').height(socialCard3Width)

    careerWidth = $('.career').width();
    careerHeight = careerWidth * 364/360 
    $('.career').height(careerHeight)
});







// console.log(filter)

// this is the header box shadow on uploading 
$('.sections').scroll(function(){
    // console.log("hi")
    $("#header").css({"box-shadow":"0px 4px 10px rgba(0,0,0,0.05)"})
    if($('#contentContainer').position().top == 80){
        console.log('hit')
        $("#header").css({"box-shadow":"0px 0px 0px rgba(0,0,0,0.09)"})
    }
})

// this is the header box shadow on loacl testing s
$(window).scroll(function(){
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

 


        $('#displayCode').hover(function(){
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
