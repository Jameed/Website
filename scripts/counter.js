document.addEventListener('DOMContentLoaded', function () {
    var labels = document.querySelectorAll('input');

    labels.forEach(function (label) {
        label.onclick = function () {
            ans = document.querySelectorAll('input[type="checkbox"]:checked').length;
            document.getElementById('output').innerHTML = "Number of credit hours selected: " + ans * 3;
        };
    });
});