window.night = true;
function switchToDark() {


    document.querySelector('.navbar__link--bottom')
        .addEventListener('click', function () {
            if (window.night) {
                window.night = false;
                document.documentElement.style.setProperty('--white-background', '#262626');
                document.documentElement.style.setProperty('--gray-title', '#fff');
                document.documentElement.style.setProperty('--white-main', '#262626');


            }

            else {
                window.night = true;
                document.documentElement.style.setProperty('--white-background', '#fff');
            }


        });
}