window.onload = function() {
    var list_zone = document.getElementById("inner_list");
    var list_a = list_zone.getElementsByTagName("a"); // 썸네일 이미지

    for (var i=0; i<list_a.length; i++) { // 썸네일 이미지 == 8개
        // 썸네일 이미지 클릭하면..
        list_a[i].onclick = function() {
            var ph = document.getElementById("photo").children[0]; // 큰 이미지!
            //썸네일이 가지고 있는 큰 이미지 href값을 전달!
            ph.src = this.href; // this === list_a
            return false; // <a>를 클릭했을 때 링크가 되지 않도록!
        }
    }

    var m_num = 0;

    // 다음 버튼 클릭시 이벤트
    var n_btn = document.getElementById("next_btn");
    n_btn.onclick = function() {
        if (m_num >= list_a.length-3) { // 썸네일 3개는 화면상에 남아있어야 함! // 끝으로
            return false; // 보이는 썸네일 3개를 제외하고 끝까지 가면 이벤트 정지
        }
        m_num++;
        list_zone.style.marginLeft = -100 * m_num + "px"; // -이동
        return false; // <a>를 클릭했을 때 링크가 되지 않도록!
    }

    // 이전 버튼 클릭시 이벤트
    var b_btn = document.getElementById("before_btn");
    b_btn.onclick = function() {
        if (m_num <= 0) { // 처음으로
            return false; // 보이는 썸네일 3개를 제외하고 끝까지 가면 이벤트 정지
        }
        m_num--;
        list_zone.style.marginLeft = -100 * m_num + "px"; // +이동
        return false; // <a>를 클릭했을 때 링크가 되지 않도록!
    }
};

