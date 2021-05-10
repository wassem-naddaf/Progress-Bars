document.getElementById("finish-btn").addEventListener("click", finishProgress);
function finishProgress() {
    var bars = document.getElementsByClassName('progress-bar');
    var values = document.getElementsByClassName('progress-val');
    for (let i = 0; i < bars.length; i++) {
        bars[i].setAttribute('aria-valuenow', 100);
        bars[i].style.width = values[i].innerHTML = '100%';
    }
}