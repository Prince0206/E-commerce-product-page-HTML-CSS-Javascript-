const mainImages = document.querySelectorAll(".default .main-img img");
const thumbnails = document.querySelectorAll(".default .thumb-list div");
const lightboxMainImages = document.querySelectorAll(".lightbox .main-img img");
const lightboxthumbnails = document.querySelectorAll(
  ".lightbox .thumb-list div"
);

const lightbox = document.querySelector(".lightbox");
const iconClose = document.querySelector(".icon-close");
const iconPrev = document.querySelector(".icon-prev");
const iconNext = document.querySelector(".icon-next");

let currentIndex = 0;

const changeImage = (index, mainImages, thumbnails) => {
  mainImages.forEach((img) => {
    img.classList.remove("active");
  });
  thumbnails.forEach((thumb) => {
    thumb.classList.remove("active");
  });

  mainImages[index].classList.add("active");
  thumbnails[index].classList.add("active");
  currentIndex = index
};

thumbnails.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    changeImage(index, mainImages, thumbnails);
  });
});
lightboxthumbnails.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    changeImage(index, lightboxMainImages, lightboxthumbnails);
  });
});
mainImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");
    changeImage(index, lightboxMainImages, lightboxthumbnails);
  });
});

iconPrev.addEventListener("click", () => {
  if (currentIndex <= 0) {
    changeImage(mainImages.length - 1, lightboxMainImages, lightboxthumbnails);
  } else {
    changeImage(currentIndex - 1, lightboxMainImages, lightboxthumbnails);
  }
});

iconNext.addEventListener("click", () => {
  if (currentIndex >= mainImages.length - 1) {
    changeImage(0, lightboxMainImages, lightboxthumbnails);
  } else {
    changeImage(currentIndex + 1, lightboxMainImages, lightboxthumbnails);
  }
});

iconClose.addEventListener("click", () => {
  lightbox.classList.remove("active");
});