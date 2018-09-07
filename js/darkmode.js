window.night = true;
function switchToDark() {


    document.querySelector('.night')
        .addEventListener('click', function () {
            if (window.night) {
                window.night = false;
                document.documentElement.style.setProperty('--white-background', '#262626');
                document.documentElement.style.setProperty('--white-main', '#000');
                document.documentElement.style.setProperty('--gray-main', '#f7f8f9');
                document.documentElement.style.setProperty('--gray-title', '#fff');
                document.documentElement.style.setProperty('--gray-counter', '#262626');
                document.documentElement.style.setProperty('--dimgrey-light','#262626');
                document.documentElement.style.setProperty('--dimgrey-dark','#fff');
                document.documentElement.style.setProperty('--dimgrey',  '#fff');
                document.documentElement.style.setProperty('--shadowgrey','#88888842');
                document.documentElement.style.setProperty('--lightgrey', '#fff');
                document.documentElement.style.setProperty('--lighttextgrey', '#b8bfc5');
                document.documentElement.style.setProperty('--darkgreen', '#51c65b');
                document.documentElement.style.setProperty('--limegreen', '#47c451');
                document.documentElement.style.setProperty('--red', '#e22944');
                document.documentElement.style.setProperty('--red-fee', '#e4354e');
                document.documentElement.style.setProperty('--circle-red', '#f9f3ef');
                document.documentElement.style.setProperty('--overdue-red', '#e64960');
                document.documentElement.style.setProperty('--black', '#fff');

            }

            else {
                window.night = true;
                document.documentElement.style.setProperty('--white-background', '#ffffff');
                document.documentElement.style.setProperty('--white-main', '#f7f8f9');
                document.documentElement.style.setProperty('--gray-main', '#808080');
                document.documentElement.style.setProperty('--gray-title', '#909aac');
                document.documentElement.style.setProperty('--gray-counter', '#eceff2');
                document.documentElement.style.setProperty('--dimgrey-light','rgba(192,192,192,0.3)');
                document.documentElement.style.setProperty('--dimgrey-dark','rgba(192,192,192,0.5)');
                document.documentElement.style.setProperty('--dimgrey',  'dimgrey');
                document.documentElement.style.setProperty('--shadowgrey','#88888842');
                document.documentElement.style.setProperty('--lightgrey', 'lightgrey');
                document.documentElement.style.setProperty('--lighttextgrey', '#b8bfc5');
                document.documentElement.style.setProperty('--darkgreen', '#51c65b');
                document.documentElement.style.setProperty('--limegreen', '#47c451');
                document.documentElement.style.setProperty('--red', '#e22944');
                document.documentElement.style.setProperty('--red-fee', '#e4354e');
                document.documentElement.style.setProperty('--circle-red', '#f9f3ef');
                document.documentElement.style.setProperty('--overdue-red', '#e64960');
                document.documentElement.style.setProperty('--black', '#000000');
            }


        });
}