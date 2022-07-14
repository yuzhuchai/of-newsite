$(window).on("load",function(){
    $(".main_area").width($(window).width())
    contentWidth = $('#contentContainer').width();
    console.log(contentWidth)

    if(contentWidth < 767){  
        $('#xiaoyuzhou').attr('src', 'http://cdn0.ofcourse.io/9b9ad25ba1404d5e9df0b84c20636274_1628b576636c4731e3d446d523a7c16d?imageView2')
        $('#wechat').attr('src', 'http://cdn0.ofcourse.io/9b9ad25ba1404d5e9df0b84c20636274_f01e58d658c36e7394c00efd7fdeba19?imageView2')
    }
})


// this is display header boxshadow on uploading 

$('.sections').scroll(function(){
    // console.log("hi")
    $("#header").css({"box-shadow":"0px 4px 10px rgba(0,0,0,0.05)"})
    if($('#contentContainer').position().top == 80){
        console.log('hit')
        $("#header").css({"box-shadow":"0px 0px 0px rgba(0,0,0,0.09)"})
    }   
})

// this is display header boxshadow on local testing 

$(window ).scroll(function(){
    // console.log("hi")
    $("#header").css({"box-shadow":"0px 4px 10px rgba(0,0,0,0.05)"})
    if($('#contentContainer').position().top == 80){
        console.log('hit')
        $("#header").css({"box-shadow":"0px 0px 0px rgba(0,0,0,0.09)"})
    }   
})




$( window ).resize(function() {


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


$('#login').click(function(){
    $('#loginPopupBg').show()
})

$('.closeTab').click(function(){
    $('#loginPopupBg').hide()
})

$('#showCode').hover(function(){
    // console.log('hovered')
    $('#weChatCodeMenu').show()
}, function(){
    $('#weChatCodeMenu').hide()
})

$('#displayCode').hover(function(){
    // console.log('hovered')
    $('#weChatCode').show()
}, function(){
    $('#weChatCode').hide()
})



let iframeLoaded = false 
$('.sections').scroll(function(){
    let scrollPos = $('.sections').scrollTop()

    console.log(scrollPos)
    if(scrollPos > $('#map').position().top - 100){
        if( !iframeLoaded ){
            console.log('display ifroma')
            $('iframe').attr('src', 'https://j.map.baidu.com/be/IatJ')
            iframeLoaded = true 
        }
    }
})



$( window ).scroll(function(){
    let scrollPos = $('.sections').scrollTop()

    console.log(scrollPos)
    if(scrollPos > $('#map').position().top - 100){
        if( !iframeLoaded ){
            console.log('display ifroma')
            $('iframe').attr('src', 'https://j.map.baidu.com/be/IatJ')
            iframeLoaded = true 
        }
    }
})
