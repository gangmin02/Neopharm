$(document).ready(function () {
/* 비주얼 */
let bg = $('.fade'); // 슬라이드 요소 선택
let slideIndex = 0;

// 초기 슬라이드 보이기
bg.hide(); // 모든 슬라이드를 숨김
bg.eq(slideIndex).addClass('on'); // 첫 번째 슬라이드 표시
bg.eq(slideIndex).css('opacity', 1); // 첫 번째 슬라이드의 투명도 설정
bg.eq(slideIndex).css('display', 'block'); // 첫 번째 슬라이드 표시

function changeSlides() {
    // 현재 슬라이드를 숨김
    bg.eq(slideIndex).removeClass('on'); // 현재 슬라이드에서 on 클래스 제거
    bg.eq(slideIndex).css('opacity', 0); // 현재 슬라이드의 투명도를 0으로 설정

    // 인덱스를 업데이트 후 다음 슬라이드를 보임
    slideIndex = (slideIndex + 1) % bg.length; // 슬라이드 인덱스 업데이트

    // 다음 슬라이드에 on 클래스 추가 및 표시
    bg.eq(slideIndex).css('display', 'block'); // 다음 슬라이드 표시
    bg.eq(slideIndex).css('opacity', 1); // 다음 슬라이드의 투명도를 설정
    bg.eq(slideIndex).addClass('on'); // 다음 슬라이드에 on 클래스 추가

    // 이전 슬라이드를 display: none으로 설정
    setTimeout(() => {
        bg.eq((slideIndex - 1 + bg.length) % bg.length).css('display', 'none'); // 이전 슬라이드를 display: none으로 설정
    }, 1000); // 투명도가 0이 되는 시간과 일치하도록 설정
}

// 3초마다 슬라이드 변경
setInterval(changeSlides, 3000); // 슬라이드를 무한히 반복

  var currentIndex = 0;
  var slides = $(".slide");
  var indicators = $(".indicator");
  var slideCount = slides.length;

  function showSlide(index) {
      slides.removeClass("active");
      indicators.removeClass("active");
      slides.eq(index).addClass("active");
      indicators.eq(index).addClass("active");
      $(".slide").css("transform", "translateX(" + -index * 100 + "%)");
  }

  function nextSlide() {
      currentIndex++;
      if (currentIndex >= slideCount) {
          currentIndex = 0; // 마지막 슬라이드 후 첫 슬라이드로 돌아감
      }
      showSlide(currentIndex);
  }

  indicators.on("click", function () {
      currentIndex = $(this).data("slide");
      showSlide(currentIndex);
  });

  setInterval(nextSlide, 3000); // 3초마다 슬라이드 변경
});
