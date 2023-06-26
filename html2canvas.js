// Define the function 
// to screenshot the div
function scrolldiv() {
    var elem = document.getElementById("output");
    elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function takeshot() {
    let div =
        document.getElementById("screenshot");

    // Use the html2canvas
    // function to take a screenshot
    // and append it
    // to the output div
    html2canvas(div).then(
        function (canvas) {
            document
                .getElementById('output')
                .appendChild(canvas);
        })
    scrolldiv();
}