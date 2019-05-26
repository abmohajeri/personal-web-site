var typed;

$(document).ready(function(){

    $(".email-copy-to-clipboard").click(function(){
        copyTextToClipboard();
    });



    // Can also be included with a regular script tag

    var options = {
        strings: ["Morteza@J8@gmail.com", "Morteza@Jalambadani.ir"],
        typeSpeed: 60,
        backDelay:  1000,
        backSpeed: 50,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        smartBackspace: false,


    };


    typed = new Typed(".email-value", options);

});

function copyTextToClipboard() {


    typed.loop = false;
    // $(".email-value").select();
    $(".email-value").val("Morteza@Jalambadani.ir");
    $(".email-value").select();
    /* Copy the text inside the text field */
    document.execCommand("copy");
}
