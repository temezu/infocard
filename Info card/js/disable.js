/* -----------------------------------------------
/* Author : Temezu  - Temezu.tk
/* GitHub : github.com/Temezu/Infocard
/* Create date: 3/26/2022 */
/* MIT License.
/* v.2.0
/* ----------------------------------------------- */

document.addEventListener("contextmenu", function (e) {
    e.preventDefault()
});

document.onkeydown = function (e) {
  if (event.keyCode == 123) {
        return false;
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
        alert("FUCK YOU!")
        return false;
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
        alert("FUCK YOU!")
        return false;
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
        alert("FUCK YOU!")
        return false;
  }

  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
        alert("source code not for you!")
        return false;
  }
};
