const btnDarkMode = document.querySelector('.dark-mode-btn');



//use browser theme
if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
    btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
}



//Use local storage
if(localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
}
else if (localStorage.getItem('darkMode') === 'light'){
    btnDarkMode.classList.remove('dark-mode-btn--active');
    document.body.classList.remove('dark');
}



//use browser theme change
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e)=>{
    const newColorScheme = e.matches ? 'dark' : 'light';

    if(newColorScheme === 'dark'){
        btnDarkMode.classList.add('dark-mode-btn--active');
        document.body.classList.add('dark');
        localStorage.setItem('darkMode', 'dark');
    }else{
        btnDarkMode.classList.remove('dark-mode-btn--active');
        document.body.classList.remove('dark');
        localStorage.setItem('darkMode', 'light');
    }
})


//Turn on dark mode
btnDarkMode.addEventListener('click',()=>{
    btnDarkMode.classList.toggle('dark-mode-btn--active');
    const isDark = document.body.classList.toggle('dark');


    if (isDark){
        localStorage.setItem('darkMode', 'dark');
    } else{
        localStorage.setItem('darkMode', 'light');
    }


})