// 유니버스 지역 클릭시 해당 내용을 담은 새로운 팝업창 뜸
// window.open('경로', '팝업 이름', '옵션');

function openUniverse(url, name) {
    var option = 'top=100, left = 200, width=1500, height = 900, status=no, menubar=no, toolbar=no, resizable=yes';
    window.open(url, name, option);
}

// 유니버스 배너 안보이게 하기
$(document).ready(function () {
    $(".skew_box").mouseover(function () {
        $(this).find(".skew_overlay").hide();
        $(this).find(".rec_overlay").css("display", "flex");
        $(".skew_overlay>span, .skew_overlay>h4").hide();
    });
    $(".skew_box").mouseout(function () {
        $(".skew_overlay").css("display", "flex");
        $(".skew_overlay>span, .skew_overlay>h4").css("display", "flex");
        $(this).find(".rec_overlay").hide();
    });
});

// 챔피언 더보기 보여지게 하기
$(document).ready(function () {
    $(".unChar").mouseover(function () {
        $(this).find(".championName").css("display", "flex");
    });
    $(".unChar").mouseout(function () {
        $(this).find(".championName").hide();
    });
});

// 하단 이미지 overlay
$(document).ready(function () {
    $(".scene_item").mouseover(function () {
        $(this).find(".scene_overlay").css("display", "flex");
    });
    $(".scene_item").mouseout(function () {
        $(this).find(".scene_overlay").hide();
    });
});

// 메인 페이지 타이핑 효과
const text = "리그 오브 레전드는 5명의 강력한 챔피언으로 구성된 양 팀이 서로의 기지를 파괴하기 위해 치열한 사투를 벌이는 전략 게임입니다. 140여 명의 챔피언 중 하나를 선택해 화려한 플레이를 펼치며 적을 처치하고 포탑을 파괴해 승리를 쟁취하세요."
const content = document.querySelector(".game_text_p")

content.innerText = "";

//sleep 함수 --> 잘못쓰면 모든 작동이 다 멈춤 비동기식으로 Promise써서 해결해야함
function sleep(t) {
    return new Promise(resolve => setTimeout(resolve, t));
}

(async function () {
    while (true) {
        for (var i = 0; i < text.length; i++) {
            content.innerText = text.slice(0, i + 1);
            await sleep(100);
        }
        await sleep(2000);
        for (var i = text.length - 1; i >= 0; i--) {
            content.innerText = text.slice(0, i);
            await sleep(20);
        }
        await sleep(100);
    }
})();

// 다 멈추게 됨 sleep
// let index = 0;

// function stop(delay){
//     const start = new Date().getTime();
//     while (new Date().getTime() < start + delay);
// }

// function typing() {
//     text.textContent += content[index++];
//     if (index > content.length) {
//         text.textContent = ""
//         index = 0;
//         stop(4000);
//     }
// }

// setInterval(typing, 100);
