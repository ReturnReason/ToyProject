document.addEventListener('DOMContentLoaded', () => {
  //DOMContentLoaded : DOM이 모두 로딩 되었을 때 이벤트
  let lazyImages = Array.from(document.querySelectorAll('.lazy'));
  let active = false;

  const lazyLoad = function () {
    if (active === false) {
      active = true;

      // 스크롤 이벤트 발생시 200ms 후 저화질 이미지 리스트 확인
      setTimeout(() => {
        lazyImages = lazyImages
          .map((lazyImage) => {
            if (
              lazyImage.getBoundingClientRect().top <= window.innerHeight &&
              window.getComputedStyle(lazyImage).display !== 'none'
            ) {
              console.log(lazyImage.getBoundingClientRect().top);
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.classList.remove('lazy');
              return null;
            } else {
              return lazyImage;
            }
          })
          .filter((image) => image);
        if (!lazyImages.length) {
          document.removeEventListener('scroll', lazyLoad);
        } else {
          active = false;
        }
      }, 200);
    }
  };

  document.addEventListener('scroll', lazyLoad);
});
