console.log('hello');
$(() => {
$('html,body').scrollTop(0,0);



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
        $('.subject-details').fadeOut('slow');



        return;
    }

    //**select the subject of the clicked item
    const subject = $(event.currentTarget).attr('data-subject')

    //**verify if there are any items showing. If so, close them, then we can open the new one.
    if($('.triangle-click')[0]){
        $('.triangle-click').removeClass('triangle-click');
        $('.listItem-click').removeClass('listItem-click');
        $('.subject-box').slideUp(1000);
        $('.subject-details').fadeOut(1000);
        $(`.${subject}`).addClass('triangle-click');
        $(event.currentTarget).addClass('listItem-click');
        setTimeout(() => {
            showSubject(subject)
        },1100)
    }else{
        $(`.${subject}`).addClass('triangle-click');
        $(event.currentTarget).addClass('listItem-click');
        showSubject(subject)
    };

})

//=======
//Show the data for each subject.
//=======
const showSubject = (subject) => {
    //**Show the approprate content based on selection

    $(`[data-details=${subject}]`).fadeIn(1100);

    //**Show the display box
    $('.subject-box').slideDown(1000);

    //**Scroll to the display box
    $('html,body').animate({
        scrollTop: $('.subject-box').offset().top
    },1000);
    $('footer').css('top',($(window).height()-100) + 'px');
}

//=======
//Hover event for subject icons
//=======
$('.listItem').hover((event) => {
    const subject = $(event.currentTarget).attr('data-subject')

    $(event.currentTarget).css({'transform':'scale(1.1)', 'color': 'rgb(253,126,71)'});
    // $(`.${subject}`).css({'filter':'grayscale(85%)'});
},
(event) => {
    const subject = $(event.currentTarget).attr('data-subject')
    $(event.currentTarget).css({'transform':'scale(1)', 'color': '#ABB5D6'});

    // $(`.${subject}`).css({'filter':'grayscale(85%)'});
})

//=======
//Hover event for subject icons
//=======
    //**hover event is made null if screen is too small such as with a phone
$(window).on('resize',() => {
        if ($(window).width() <=768) {
        $('.project-details').css({'display':'block'});
    }else{
        $('.project-details').css({'display':'none'});
    }
})
$('.project').hover((event) => {
    const description =$(event.currentTarget).children()[2];
    $(description).slideDown('slow');
},
(event) => {
    const description =$(event.currentTarget).children()[2];
    $(description).slideUp('slow');
}
)


})
