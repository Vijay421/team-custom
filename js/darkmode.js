window.night = true;
function switchToDark() {


    document.querySelector('.navbar__link--bottom')
        .addEventListener('click', function () {
            if (window.night) {
                window.night = false;
                document.documentElement.style.setProperty('--white-background', '#262626');
                document.documentElement.style.setProperty('--gray-title', '#fff');
                document.documentElement.style.setProperty('--white-main', '#262626');
                document.documentElement.style.setProperty('--black', '#fff');

            }

            else {
                window.night = true;
                document.documentElement.style.setProperty('--white-background', '#ffffff');
                document.documentElement.style.setProperty('--white-main', '#f7f8f9');
                document.documentElement.style.setProperty('--gray-main', '#808080');
                document.documentElement.style.setProperty('--gray-title', '#909aac');
               
            }


        });
}