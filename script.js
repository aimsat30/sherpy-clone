document.addEventListener("DOMContentLoaded", function () {
    var videos = document.querySelectorAll(".video-container video");
    var muteButtons = document.querySelectorAll(".mute");
    var unmuteButtons = document.querySelectorAll(".unmute");

    muteButtons.forEach(function (button, index) {
      button.addEventListener("click", function (event) {
        //   videos.forEach(function (video) {
        //     video.muted = true;
        //   });
        videos[index].muted = true;
        muteButtons[index].classList.add("d-none");
        unmuteButtons[index].classList.remove("d-none");
      });
    });

    unmuteButtons.forEach(function (button, index) {
      button.addEventListener("click", function (event) {
        videos.forEach(function (video, ind) {
          video.muted = true;
          if (
            !muteButtons[ind].classList.contains("d-none") &&
            unmuteButtons[ind].classList.contains("d-none")
          ) {
            muteButtons[ind].classList.add("d-none");
            unmuteButtons[ind].classList.remove("d-none");
          }
        });
        videos[index].muted = false;
        unmuteButtons[index].classList.add("d-none");
        muteButtons[index].classList.remove("d-none");
      });
    });
});