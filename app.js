console.log('hello');
$(() => {
$('html,body').scrollTop(0,0);


$('body').css({'background-color':'red'});
//=======
//Control the front-page rotation of subject icons when clicked.
//=======
$('.listItem').on('click',(event) => {
    //**verify if the item is currently active. If it is, close it.
    if($(event.currentTarget).hasClass('listItem-click')){
        $('.triangle-click').removeClass('triangle-click');
        $('.listItem-click').removeClass('listItem-click');
        $('.subject-box').slideUp(1000);
        $('html,body').animate({
            scrollTop: (0,0)},1000);

        return;
    }

    //**verify if there are any items showing. If so, close them, then we can open the new one.
    if($('.triangle-click')[0]){
        $('.triangle-click').removeClass('triangle-click');
        $('.listItem-click').removeClass('listItem-click');
    };

    //**open the new item with css animation on icon.
    const subject = $(event.currentTarget).attr('data-subject')
    // console.log(subject);
    $(`.${subject}`).addClass('triangle-click');
    $(event.currentTarget).addClass('listItem-click');
    //*******
    //Animate the scroll to the info bar
    //*******
    $('.subject-box').slideDown(1000);
    $('html,body').animate({
        scrollTop: $('.subject-box').offset().top
    },1000);




})




})
