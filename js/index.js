var typed;

$(document).ready(function(){

    $(".email-copy-to-clipboard").click(function(){
        copyTextToClipboard();
    });

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


    let links = {
        'fa-github' : 'https://github.com/Morteza-j8' ,
        'fa-instagram' : 'https://www.instagram.com/mortezajalambadani/' ,
        'fa-google' : 'mailto:Morteza.j8@gmail.com' ,
        'fa-linkedin' : 'https://www.linkedin.com/in/morteza-jalambadani-341126b9/' ,
        'fa-telegram' : 'https://t.me/morteza_jalambadani' ,
        'fa-stack-overflow' : 'https://stackoverflow.com/users/5919568/morteza-jalambadani?tab=profile' ,

    };

    for( let lnk in links){
        $('.' + lnk ).click(function(){
            openUrlInNewTab(links[lnk]);
        });
    }

});

function openUrlInNewTab(url) {
    window.open(url, '_blank');
}

function copyTextToClipboard() {
    typed.loop = false;
    // $(".email-value").select();
    $(".email-value").val("Morteza@Jalambadani.ir");
    $(".email-value").select();
    /* Copy the text inside the text field */
    document.execCommand("copy");
}
