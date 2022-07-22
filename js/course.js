// this is displaying the correct course with https request quary string ---------------- 
    let courseDisplay
    
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

    let courseID = qs['courseDisplay'];




// this is the like function - to generate likes ======================================

    let viewNum 
    let fakeNum = 20456
    
    function getViewNum(){
        let currentNum = get_f_count().responseJSON.count;
        // let fakeNum = 20456
        let newNum = fakeNum + currentNum
        console.log(newNum)
        return newNum
    }

    function addViewNum(){
        let addNum = add_f_count().responseJSON.count+fakeNum; 
        $('#viewNum').text(addNum)

        return addNum
    }



// this is the share function ----------------------------------------------------------------
    function share(){
        let input = document.createElement('input')
        input.type = 'text'
        input.value = "www.baidu.com";
        document.body.appendChild(input)
        input.select()
        document.exeComand('copy')
        document.body.removeChild(input)
    }



// execute functions when window is loaded ================================================================
    $(window).on("load",function(){

    
        $(".main_area").width($(window).width())

        // this is selecting the correct course object with corresponding quary string: 
        if(courseID == 'unityAR'){
            courseDisplay = unityAR
        } else if(courseID == 'unityVR'){
            courseDisplay = unityVR
        } else if(courseID == 'ai'){
            courseDisplay = ai
            $('#courseVideo').hide();
            $('#studentWorkContainer').hide();
        } else if(courseID == 'unrealLandScape'){
            courseDisplay = unrealLandScape
            $('#commentsContainer').hide();
            // $('#studentWorkContainer').hide();
        } else if(courseID == 'tdArduino'){
            courseDisplay = tdArduino
        } else if(courseID == 'museum'){
            courseDisplay = museum
            $('#courseVideo').hide();
            $('#studentWorkContainer').hide();
            $('.teacher2').css('display','block');
            $('#mentorBottom').hide();
        } else if(courseID == 'interactiveLight'){
            courseDisplay = interactiveLight
        } else if (courseID == 'tdCommercial'){
            courseDisplay = tdCommercial
            $('#studentWorkContainer').hide();
        } else if (courseID == 'unrealVP'){
            courseDisplay = unrealVP
            $('#courseVideo').hide();
            $('#studentWorkContainer').hide();
            $('#commentsContainer').hide();
        }

        // below is displaying the correct contents:
        $('#mainPoster').css("background-image", "url(" + courseDisplay.mainPoster + ")");
        $('#fillPrice').text(courseDisplay.price)
        $('.fillCourseTitleEng').text(courseDisplay.classNameEng)
        $('.fillNav').html(courseDisplay.navigation)
        $('#column1Title').html(courseDisplay.columnName)
        $('#posterChinese').text(courseDisplay.classNameCn)
        $('#fillSlogan').html(courseDisplay.classSlogan)
        $('#fillHeader').html(courseDisplay.classHeader)
        $('#fillVideo').attr('src', courseDisplay.classVideo)
        $('#fillVideo').attr('poster', courseDisplay.videoPoster)
        $('#fillteacherVideo').attr('src', courseDisplay.mentorVideo)
        $('#fillteacherVideo2').attr('src', courseDisplay.mentorVideo2)
        $('#fillteacherVideo').attr('poster', courseDisplay.mentorPoster)
        $('#fillteacherVideo2').attr('poster', courseDisplay.mentorPoster2)
        $('#overViewContent').html(courseDisplay.classOverview)
        $('#classSeries').html(courseDisplay.classSeries)
        $('#prepClass').html(courseDisplay.prepClass)
        for(let i = 0; i < 8; i++){
            $('#fillSyllabusImg' + (i+1)).attr('src', courseDisplay.syllabus[i].img)
            $('#fillSyllabus' + (i+1)).html(courseDisplay.syllabus[i].title)
            $('#fillSyllabusDes' + (i+1)).html(courseDisplay.syllabus[i].description)
        }
        for(let i = 0; i < 10; i++){
            $('#showCaseImg' + i).attr('src', courseDisplay.showCase[i])
        }
        for(let i = 0; i < 6; i++){
            $('#teacherShowCase' + i).attr('src', courseDisplay.teacherCase[i])
        }
        let workLength = courseDisplay.studentWork.length
        for (let i = 0; i < workLength; i++){
            $('#studentWork' + i).attr('src',courseDisplay.studentWork[i]).parent().removeClass('hide')
        }
        if(courseDisplay == museum){
            $('#mentorNameEng2').text(courseDisplay.mentorNameEng2)
            $('#mentorNameCn2').text(courseDisplay.mentorNameCn2)
            let mentorTitle2 = courseDisplay.mentorTitle2[0] + "<br/>" + courseDisplay.mentorTitle2[1] + "<br/>" + courseDisplay.mentorTitle2[2]
            $('#mentorTitle2').html(mentorTitle2)
            $('#fillMentorImg2').attr('src',courseDisplay.mentorImg2)
            $('#fillCourseTitle2').html(courseDisplay.freeClassTitle2)
            $('#mentorTopLeftBottom2').html(courseDisplay.mentorText2)
        }
        $('#mentorNameEng').text(courseDisplay.mentorNameEng)
        $('#mentorNameCn').text(courseDisplay.mentorNameCn)
        let mentorTitle = courseDisplay.mentorTitle[0] + "<br/>" + courseDisplay.mentorTitle[1] + "<br/>" + courseDisplay.mentorTitle[2]
        $('#mentorTitle').html(mentorTitle)
        $('#fillMentorImg').attr('src',courseDisplay.mentorImg)
        $('#mentorTopLeftBottom').html(courseDisplay.mentorText)
        $('#fillCourseTitle').html(courseDisplay.freeClassTitle)
        $('#mobilePosterImg').attr('src',courseDisplay.mainPosterMobile)
        $('#mainCommentName').html(courseDisplay.studentReviewMain.name)
        $('#mainCommentTitle').html(courseDisplay.studentReviewMain.title)
        $('#studentCommentLeft').html(courseDisplay.studentReviewMain.review)
        for(let i = 0; i < 6; i++){
            $('.fillStudentName' + (i+1)).html(courseDisplay.studentReview[i].name)
            $('#comment' + (i+1)).html(courseDisplay.studentReview[i].review)
            $('#fillstudentTitle' + (i+1)).html(courseDisplay.studentReview[i].title)
        }
        $('#fillInstallmentPrice').text(courseDisplay.installmentValue)
        $('#fillInstallmentTime').text(courseDisplay.installmentTime)
        for(let i = 0; i < 8; i++){
            let syllabusList = courseDisplay.syllabus[i].fullSyllabus
            console.log()
            for(let j =0; j < 3; j++){
                $('.syllabusLists' + i).append("<li>" + syllabusList[j] + "</li>")
            }
        }
    })

        
 // this is toggle the menu-------------------------------------------------------------------
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


        // let filterDisplay = false;
        // $('#filterIcon').click(function(){
        //     if(!filterDisplay){
        //         $('#filterText').css({'color':'#ACACAC'})
        //         $('#filterDisplay').css({'display':'flex'})
        //         filterDisplay = true;

        //     } else {
        //         $('#filterText').css({'color':'#222222'})
        //         $('#filterDisplay').css({'display':'none'})
        //         filterDisplay = false;
        //     }
        // }) 

    

        // this is creating scrolling effects that need scrolling functions 
        $('.sections').scroll(function(){
            // this is creating the box shadow and get rid of it when scroll back to the top 
            $("#header").css({"box-shadow":"0px 4px 20px rgba(0,0,0,0.09)"})
            $("#headerMobile").css({"box-shadow":"0px 4px 20px rgba(0,0,0,0.09)"})
            if($('.sections').scrollTop() == 0){
                $("#header").css({"box-shadow":"0px 0px 0px rgba(0,0,0,0.09)"})
                $("#headerMobile").css({"box-shadow":"0px 0px 0px rgba(0,0,0,0.09)"})
            }

        // this is creatin the scrolling header on the iphone - disabled 
            // let scrollPos = $('.sections').scrollTop()
            // if(scrollPos > $('#priceContents').position().top && scrollPos < $('#syllabusContainer').position().top){
            //     $('#priceMenu').css({'color':'#FF7C32'})
            //     $('#syllabusMenu').css({'color':'black'})
            //     $('#exampleMenu').css({'color':'black'})
            //     $('#advisorMenu').css({'color':'black'})
            //     $('#featureMenu').css({'color':'black'})
            // } else if (scrollPos > $('#syllabusContainer').position().top && scrollPos < $('#showCaseContainer').position().top){
            //     $('#priceMenu').css({'color':'black'})
            //     $('#syllabusMenu').css({'color':'#FF7C32'})
            //     $('#exampleMenu').css({'color':'black'})
            //     $('#advisorMenu').css({'color':'black'})
            //     $('#featureMenu').css({'color':'black'})
            // } else if (scrollPos > $('#showCaseContainer').position().top && scrollPos < $('#mentorContainer').position().top){
            //     $('#priceMenu').css({'color':'black'})
            //     $('#syllabusMenu').css({'color':'black'})
            //     $('#exampleMenu').css({'color':'#FF7C32'})
            //     $('#advisorMenu').css({'color':'black'})
            //     $('#featureMenu').css({'color':'black'})
            // } else if(scrollPos > $('#mentorContainer').position().top && scrollPos < $('#featuresContainer').position().top){
            //     $('#priceMenu').css({'color':'black'})
            //     $('#syllabusMenu').css({'color':'black'})
            //     $('#exampleMenu').css({'color':'black'})
            //     $('#advisorMenu').css({'color':'#FF7C32'})
            //     $('#featureMenu').css({'color':'black'})
            // } else if (scrollPos > $('#featuresContainer').position().top){
            //     $('#priceMenu').css({'color':'black'})
            //     $('#syllabusMenu').css({'color':'black'})
            //     $('#exampleMenu').css({'color':'black'})
            //     $('#advisorMenu').css({'color':'black'})
            //     $('#featureMenu').css({'color':'#FF7C32'})
            // }
        })

        
    //    this is change the color of the scrolling header in the iphone verison  - disabled 
        // $('#priceMenu').on('click',function(){
        //     $('.sections').scrollTop($('#priceContents').position().top + 1);
        //     $('#priceMenu').css({'color':'#FF7C32'})
        //     $('#syllabusMenu').css({'color':'black'})
        //     $('#exampleMenu').css({'color':'black'})
        //     $('#advisorMenu').css({'color':'black'})
        //     $('#featureMenu').css({'color':'black'})
        // })

        // $('#syllabusMenu').on('click', function(){
        //         $('.sections').scrollTop($('#syllabusContainer').position().top + 1);
        //         $('#priceMenu').css({'color':'black'})
        //         $('#syllabusMenu').css({'color':'#FF7C32'})
        //         $('#exampleMenu').css({'color':'black'})
        //         $('#advisorMenu').css({'color':'black'})
        //         $('#featureMenu').css({'color':'black'})
        // })

        // $('#exampleMenu').on('click', function(){
        //     $('.sections').scrollTop($('#showCaseContainer').position().top  + 1 );
        //         $('#priceMenu').css({'color':'black'})
        //         $('#syllabusMenu').css({'color':'black'})
        //         $('#exampleMenu').css({'color':'#FF7C32'})
        //         $('#advisorMenu').css({'color':'black'})
        //         $('#featureMenu').css({'color':'black'})
        // })

        // $('#advisorMenu').on('click', function(){
        //     $('.sections').scrollTop($('#mentorContainer').position().top + 1);
        //         $('#priceMenu').css({'color':'black'})
        //         $('#syllabusMenu').css({'color':'black'})
        //         $('#exampleMenu').css({'color':'black'})
        //         $('#advisorMenu').css({'color':'#FF7C32'})
        //         $('#featureMenu').css({'color':'black'})
        // })

        // $('#featureMenu').on('click', function(){
        //     $('.sections').scrollTop($('#featuresContainer').position().top + 1);
        //         $('#priceMenu').css({'color':'black'})
        //         $('#syllabusMenu').css({'color':'black'})
        //         $('#exampleMenu').css({'color':'black'})
        //         $('#advisorMenu').css({'color':'black'})
        //         $('#featureMenu').css({'color':'#FF7C32'})
        // })




//  this is creaing the button effect -----------------------------------------------------------------------------------
        let orangeButton = document.querySelector(".buttonOrange");
        orangeButton.addEventListener("mousemove", (e) => {
            const { x, y } = orangeButton.getBoundingClientRect();
            orangeButton.style.setProperty("--x", e.clientX - x);
            orangeButton.style.setProperty("--y", e.clientY - y);
        });

// this is displaying the wechat code to scan ----------------------------------------------------------------------------
        $('#displayCode').hover(function(){
            $('#weChatCode').show()
        }, function(){
            $('#weChatCode').hide()
        })

        $('#showCode').hover(function(){
            $('#weChatCodeMenu').show()
        }, function(){
            $('#weChatCodeMenu').hide()
        })



// this is for changin the language ---------------------------------------------------------------------------------------
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
                $('#lanDropDown').css('display','flex')
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
            $('#cnMobile').css({
                'text-decoration':'underline',
                'order':'-1',
                'color':'#222222'
            })
            $('#enMobile').css({
                'text-decoration':'none',
                'order':'1',
                'color':'rgba(172, 172, 172, 1)'
            })
        })

        $('#enMobile').on('click', function(){
            $('.cn').hide();
            $('.eng').show();
            lan = 'EN'
            $('#enMobile').css({
                'text-decoration':'underline',
                'order':'-1',
                'color':'#222222'
            })
            $('#cnMobile').css({
                'text-decoration':'none',
                'order':'1',
                'color':'rgba(172, 172, 172, 1)'
            })
        })


// this is for toggling the log in card -----------------------------------------------------------------------------------
        $('#login').click(function(){
            $('#loginPopupBg').show()
            $('#loginHeader').text('微信扫码登录')
            $('#loginText').text('请打开微信扫描二维码登陆')
            $('.loginImgreplace').attr('src','http://cdn0.ofcourse.io/9b9ad25ba1404d5e9df0b84c20636274_d0df37497ebafdf8a7a9fc4a6071ad8b?imageView2')
        })


// this is for toggling the card for checking out ------------------------------------------------------------------------------------
        let cardShow = false 

        $('#consultantImgBg').click(function(){
            console.log('clicked')
            // if(cardShow){
                $('#loginPopupBg').hide()
                $('#consultantImgBg').hide();
            // }
            cardShow = false
        })
        
        $('.closeTab').click(function(){
            $('#loginPopupBg').hide()
        })


        $('.closeTabShop').click(function(){
            $('#consultantImgBg').hide();
        })

        $('#buttonTop').click(function(){
            cardShow = true
            $('#consultantImgBg').css('display','flex')
            $('#buyImg').hide()
            $('#consultImg').show();
            if(lan == 'CN'){
                $('#fillConsultText').text("立即免费咨询")
            } else {
                $('#fillConsultText').text('Get Free Consultation')
            }
        })

        $('#buttonBottom').click(function(){
            console.log('buttom Bottom is clicked')
            cardShow = true
            $('#consultantImgBg').css('display','flex')
            $('#buyImg').show()
            $('#consultImg').hide();
            if(lan == 'CN'){
                $('#fillBuyText').text('立即报名')
            } else {
                $('#fillBuyText').text('Apply Now')
            }
        })

        $('#buttonTopMobile').click(function(){
            cardShow = true
            $('#consultantImgBg').css('display','flex')
            $('#buyImg').hide()
            $('#consultImg').show();
            if(lan == 'CN'){
                $('#fillConsultText').text("立即免费咨询")
            } else {
                $('#fillConsultText').text('Get Free Consultation')
            }
        })

        $('#buttonBottomMobile').click(function(){
            console.log('buttom Bottom is clicked')
            cardShow = true
            $('#consultantImgBg').css('display','flex')
            $('#buyImg').show()
            $('#consultImg').hide();
            if(lan == 'CN'){
                $('#fillBuyText').text('立即报名')
            } else {
                $('#fillBuyText').text('Apply Now')
            }
        })


        $('#requirements').click(function(){
            cardShow = true
            $('#consultantImgBg').css('display','flex')
            $('#buyImg').hide()
            $('#consultImg').show();
            if(lan == 'CN'){
                $('#fillConsultText').text('了解学习要求')
            } else {
                $('#fillConsultText').text('Learn More')
            }
        })

        $('#getSyllabus').click(function(){
            cardShow = true
            $('#consultantImgBg').css('display','flex')
            $('#buyImg').hide()
            $('#consultImg').show();
            if(lan == 'CN'){
                $('#fillConsultText').text('免费领取大纲')
            } else {
                $('#fillConsultText').text('Get Syllabus')
            }
        })

        $('#getShowCase').click(function(){
            cardShow = true
            $('#consultantImgBg').css('display','flex')
            $('#buyImg').hide()
            $('#consultImg').show();
            if(lan == 'CN'){
                $('#fillConsultText').text('更多免费案例')
            } else {
                $('#fillConsultText').text('Get Free Examples')
            }
        })

        $('#getTeacherShowCase').click(function(){
            cardShow = true
            $('#consultantImgBg').css('display','flex')
            $('#buyImg').hide()
            $('#consultImg').show();
            if(lan == 'CN'){
                $('#fillConsultText').text('欣赏导师作品')
            } else {
                $('#fillConsultText').text('Get Instructor Portfolio')
            }
        })
        
        $('#getDiscountCode').click(function(){
            cardShow = true
            $('#consultantImgBg').css('display','flex')
            $('#buyImg').hide()
            $('#consultImg').show();
            if(lan == 'CN'){
                $('#fillConsultText').text('立即享受优惠')
            } else {
                $('#fillConsultText').text('Get Discount Now')
            }
        })

        $('#getStudentWork').click(function(){
            cardShow = true
            $('#consultantImgBg').css('display','flex')
            $('#buyImg').hide()
            $('#consultImg').show();
            if(lan == 'CN'){
                $('#fillConsultText').text('获得学员作品')
            } else {
                $('#fillConsultText').text('Get Student Work')
            }
        })

        $('#applyNowButton').click(function(){
            cardShow = true
            $('#consultantImgBg').css('display','flex')
            $('#buyImg').show()
            $('#consultImg').hide();
            if(lan == 'CN'){
                $('#fillBuyText').text('抢占席位')
            } else {
                $('#fillBuyText').text('Sign Up Now')
            }
        })

        $('#mentorBottom').click(function(){
            cardShow = true
            $('#consultantImgBg').css('display','flex')
            $('#buyImg').hide()
            $('#consultImg').show();
            if(lan == 'CN'){
                $('#fillConsultText').text('免费领取公开课')
            } else {
                $('#fillConsultText').text('Get Free Public Class')
            }
        })

        $('#mentorBottom2').click(function(){
            cardShow = true
            $('#consultantImgBg').css('display','flex')
            $('#buyImg').hide()
            $('#consultImg').show();
            if(lan == 'CN'){
                $('#fillConsultText').text('免费领取公开课')
            } else {
                $('#fillConsultText').text('Get Free Public Class')
            }
        })


// this is the displaying full syllabus content ---------------------------------------------------------------------------------
        $('.syllabus').hover(function(){
            $(this).find('.overlay').first().addClass('transition')
        },function(){
            $(this).find('.overlay').first().removeClass('transition')
        })

        let overlayDisplay 
        $(window).on("load",function(){
            console.log(screen.width)
            if(screen.width < 1366){
                $('.syllabus').find('.overlay').addClass('transition')
                overlayDisplay = true
            }

            $('.syllabus').on('click', function(){
                console.log('clicksyllabus',overlayDisplay)
                if(overlayDisplay){
                    $(this).find('.overlay').first().removeClass('transition')
                    overlayDisplay = false
                } else {
                    $(this).find('.overlay').first().addClass('transition')
                    overlayDisplay = true
                    console.log('this is clicked, overlaydisplay')
                }
            })
        })
        
// this is playing video with play button there is a bug---------------------------------------------------------------------------------------
        $('#courseVideo').click(function () {
            if($('#courseVideo').children('#fillVideo').get(0).paused){        
                $('#courseVideo').children(".playButton").fadeOut();
            } 
        });


        $('#mentorVideo').click(function () {
            console.log('clicked ')
            if($('#mentorVideo').children('#fillteacherVideo').get(0).paused){        
                $('#mentorVideo').children(".playButton").fadeOut();
            } 
        });
        

