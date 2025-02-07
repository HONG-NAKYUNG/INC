$(function(){
    // $(".menu > ul > li").click(function () {
    //     var thisIndex = $(this).index();
    //     if($(this).hasClass('active')){ 클릭한 li가 active
    //       $("ul.submenu").eq(thisIndex).css("display", "none");
    //       $("ul.main > li").eq(thisIndex).removeClass("active");
    //     }else{
    //       $("ul.submenu").eq(thisIndex).css("display", "block");
    //       $("ul.main > li").eq(thisIndex).addClass("active");
    //     }
    //     return false;
    //   });
    // $(".menu > ul > li").click(function () {
    //   var thisIndex = $(this).index();
    //   if($(this).hasClass('active')){
    //     $(this).find("ul.submenu").css("display", "none");
    //     $(this).removeClass("active");
    //   }else{
    //     $(this).find("ul.submenu").css("display", "block");
    //     $(this).addClass("active");
    //   }
    //   return false;
    // });

    $(".menu > ul > li").click(function () {
      $(this).toggleClass('active');
      return false;
    });
});
