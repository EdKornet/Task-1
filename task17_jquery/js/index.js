$(document).ready(() => {
    function myClick() {
        $('.main_btn, .main_btna, ul li:nth-child(2)').on("click", () => {
            console.log("You pressed btn");
            $('.overlay').fadeIn('slow');
            $('.modal').slideDown();
        });

        $('.close').on("click", () => {
            $('.overlay').fadeOut('slow');
            $('.modal').slideUp();
        })
    }
    myClick();
});