// 유니버스 지역 클릭시 해당 내용을 담은 새로운 팝업창 뜸
// window.open('경로', '팝업 이름', '옵션');

function openUniverse(url, name){
    var option = 'top=100, left = 200, width=1500, height = 900, status=no, menubar=no, toolbar=no, resizable=yes';
    window.open(url, name, option);
}

// 유니버스 배너 안보이게 하기
$(document).ready(function(){
    $(".skew_box").mouseover(function(){
        $(this).find(".skew_overlay").hide();
        $(this).find(".rec_overlay").css("display","flex");
        $(".skew_overlay>span, .skew_overlay>h4").hide();
    });
    $(".skew_box").mouseout(function(){
        $(".skew_overlay").css("display","flex");
        $(".skew_overlay>span, .skew_overlay>h4").css("display","flex");
        $(this).find(".rec_overlay").hide();
    });
});

// 챔피언 더보기 보여지게 하기
$(document).ready(function(){
    $(".unChar").mouseover(function(){
        $(this).find(".championName").css("display","flex");
    });
    $(".unChar").mouseout(function(){
        $(this).find(".championName").hide();
    });
});