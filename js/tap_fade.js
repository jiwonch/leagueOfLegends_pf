$(document).ready(function () {
    $(".tap_game").addClass("gold_border gold_font");

    // 게임소개 fade
    $(".tap_game").click(function () {
        $("#section4GameStart").hide();
        $("#visual").show();
        $("#section1GameInformation").show();
        $("#section2Champion").hide();
        $("#section3universe").hide();
        $(".tap_game").addClass("gold_border gold_font");
        $(".tap_start").removeClass("gold_border gold_font");
        $(".worldview").removeClass("gold_border gold_font");
        $(".tap_champion").removeClass("gold_border gold_font");
    });

    // 로고 클릭하면 게임소개 fade
    $("#logo").click(function () {
        $("#section4GameStart").hide();
        $("#visual").show();
        $("#section1GameInformation").show();
        $("#section2Champion").hide();
        $("#section3universe").hide();
        $(".tap_game").addClass("gold_border gold_font");
        $(".tap_start").removeClass("gold_border gold_font");
        $(".worldview").removeClass("gold_border gold_font");
        $(".tap_champion").removeClass("gold_border gold_font");
    });

    // 게임시작 fade
    $(".tap_start").click(function () {
        $("#section1GameInformation").hide();
        $("#visual").hide();
        $("#section4GameStart").show();
        $("#section2Champion").hide();
        $("#section3universe").hide();
        $(".tap_game").removeClass("gold_border gold_font");
        $(".tap_start").addClass("gold_border gold_font");
        $(".tap_worldview").removeClass("gold_border gold_font");
        $(".tap_champion").removeClass("gold_border gold_font");
    });

    // 세계관 유니버스 fade
    $(".tap_worldview").click(function () {
        $("#section1GameInformation").hide();
        $("#visual").hide();
        $("#section4GameStart").hide();
        $("#section2Champion").hide();
        $("#section3universe").show();
        $(".tap_game").removeClass("gold_border gold_font");
        $(".tap_start").removeClass("gold_border gold_font");
        $(".tap_worldview").addClass("gold_border gold_font");
        $(".tap_champion").removeClass("gold_border gold_font");
    });

    // 챔피언 소개 fade
    $(".tap_champion").click(function () {
        $("#section4GameStart").hide();
        $("#section1GameInformation").hide();
        $("#visual").hide();
        $("#section2Champion").show();
        $("#section3universe").hide();
        $(".tap_game").removeClass("gold_border gold_font");
        $(".tap_start").removeClass("gold_border gold_font");
        $(".tap_worldview").removeClass("gold_border gold_font");
        $(".tap_champion").addClass("gold_border gold_font");
    });
});