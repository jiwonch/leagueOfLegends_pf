// 유니버스 지역 클릭시 해당 내용을 담은 새로운 팝업창 뜸
// window.open('경로', '팝업 이름', '옵션');

function openUniverse(url, name){
    var option = 'top=100, left = 200, width=1500, height = 900, status=no, menubar=no, toolbar=no, resizable=yes';
    window.open(url, name, option);
}