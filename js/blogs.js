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
    careerWidth = $('.career').width()

    socialCard3Width = $('.socialCard3').width();
    $('.socialCard3').height(socialCard3Width)
})


$( window ).resize(function() {
    courseWidth = $('.course').width();
    socialCard3Width = $('.socialCard3').width();
    $('.socialCard3').height(socialCard3Width)

    careerWidth = $('.career').width();
    careerHeight = careerWidth * 364/360 
    $('.career').height(careerHeight)
});







// console.log(filter)

// this is the header boxshadow on uploading 

$('.sections').scroll(function(){
    // console.log("hi")
    $("#header").css({"box-shadow":"0px 4px 10px rgba(0,0,0,0.05)"})
    if($('#contentContainer').position().top == 80){
        // console.log('hit')
        $("#header").css({"box-shadow":"0px 0px 0px rgba(0,0,0,0.09)"})
    }   
})

// this is the header boxshadow on local testing 
$( window ).scroll(function(){
    // console.log("hi")
    $("#header").css({"box-shadow":"0px 4px 10px rgba(0,0,0,0.05)"})
    if($('#contentContainer').position().top == 80){
        // console.log('hit')
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


        $('#login').click(function(){
            $('#loginPopupBg').show()
        })
        
        $('.closeTab').click(function(){
            $('#loginPopupBg').hide()
        })

        $('#displayCode').hover(function(){
            // console.log('hovered')
            $('#weChatCode').show()
        }, function(){
            $('#weChatCode').hide()
        })


        // this is the filter functions

        $('.buttonList').click(function(){
            $('.clickFilter').css({'color':'#222222','background-color':'white'})
            $('.buttonList').css({
                'color':'black',
                'background-color':'white'
            })
            $(this).css({'color':'white'});
            $(this).css({'background-color':'black'});
            // $('#filterFiller').text('COURSE LIST')
        })



        $('.metaverse').click(function(){
            $('.is-animated').removeClass('is-animated').fadeOut().promise().done(function() {
              $('.metaverseBlog').addClass('is-animated').fadeIn();
            });
        })

        $('.nft').click(function(){
            $('.is-animated').removeClass('is-animated').fadeOut().promise().done(function() {
              $('.nftBlog').addClass('is-animated').fadeIn();
            });
        })

        $('.installation').click(function(){
            $('.is-animated').removeClass('is-animated').fadeOut().promise().done(function() {
              $('.installationBlog').addClass('is-animated').fadeIn();
            });
        })

        $('.all').click(function(){
            $('.is-animated').removeClass('is-animated').fadeOut().promise().done(function() {
              $('.allBlog').addClass('is-animated').fadeIn();
            });
        })

        $('.newest').click(function(){
            $('.is-animated').removeClass('is-animated').fadeOut().promise().done(function() {
              $('.newBlog').addClass('is-animated').fadeIn();
            });
        })

        $('.recommand').click(function(){
            $('.is-animated').removeClass('is-animated').fadeOut().promise().done(function() {
              $('.recommandBlog').addClass('is-animated').fadeIn();
            });
        })

