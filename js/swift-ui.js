'use strict';
/* Accordions: */
(function ($) {

    $('details').on('click', () => {
        $('summary').css('outline', 'none');
    });

    $.fn.swiftCollapsibleAccordion = function() {
        $(this).each(function(){
            let sw_accordion_collpase = $(this).data('accordion_collapse');
            if (sw_accordion_collpase == true) {
                let sw_accordion_collapse_detail = $(this).children('details');
                sw_accordion_collapse_detail.each(function(){
                    let nextDetails  = $(this).siblings('details');
                    $(this).on('click', () => {
                        nextDetails.removeAttr('open'); 
                    })
                })
            }
        })
    }
    $('.sw_accordion').swiftCollapsibleAccordion();

    /* Dropdowns: */
    $.fn.swiftDropdown = function() {
        $(this).each(function(){
           let sw_dropdown_toggler = $(this).children('.sw_dropdown_toggler');
            sw_dropdown_toggler.on('click', () => {
                $(this).toggleClass('active');
                $(this).children('.sw_dropdown-content').toggleClass('sw-ds-block');
            });
            $('.sw_dropdown_trigger').each(function(){
                $(window).on('click', (event) => {
                    if (!event.target.matches('.sw_dropdown_trigger')) {
                        let dropdowns = $('.sw_dropdown-content'); 
                        dropdowns.each(function() {
                         if (dropdowns.hasClass('sw-ds-block')) {
                             dropdowns.removeClass('sw-ds-block');
                           }
                        }); 
                     }
                });
            }); 
            let dropdownContent = $(this).children('.sw_dropdown-content.sw_dropdown-dynamic');
            let dynamicClick = dropdownContent.children('.sw_dropdown-list.dyn');
            
            dynamicClick.on('click', () => {
                let currentText = $(dynamicClick).html();
                console.log(currentText);
                $(dynamicClick).parent().parent().children('.sw_dropdown_toggler').children('.sw_dropdown_trigger').html(currentText);
                console.log($(this).parent().parent().children('.sw_dropdown_toggler').children('.sw_dropdown_trigger'));
            });
        });
    }
    $('.sw_dropdown').swiftDropdown();

    /* Forms: */

    $.fn.swiftToggleSwitch = function() {
        $(this).each(function(){ 
            
            $(this).children('.sw_form_toggle').after('<span class="slider"></span>');
            let sw_toggle_shape = $(this).data('slider');
            if(sw_toggle_shape == 'round') {
                $(this).children('.slider').addClass('round');

            } else {

            }
        });
    }

    $('.sw_form_toggle-widget').swiftToggleSwitch();


    // Add lang attr to html tag:

    $('.sw_form_file').on('change', function(){
        let swFile = $(this).val().split('\\').pop();
        $(this).siblings('.sw_form_file-label').html(swFile).addClass('font_xd-1');
      });

      // Swift Inline Form Input Width
    $.fn.swiftInlineForm = function() {
        $(this).each(function(){
        let inlineFormWidth = $(this).attr('data-form_width');
        $(this).children('input, .sw_form_file-widget, textarea, select').css('width', inlineFormWidth+'%');
        });
    }
    $('.sw_form_inline').swiftInlineForm();


    $.fn.swiftFloatForm = function() {
        $(this).each(function(){
            $(this).on('focus', () => {
                let parentFloat = $(this).parent().parent();
                parentFloat.addClass('focus');
            });

            $(this).on('blur', () => {
                let parentFloat = $(this).parent().parent();
                parentFloat.removeClass('focus');
            });

        });
    }

    $('.sw_form_float input').swiftFloatForm();



    // Focus effect:

   /* $('.sw_form-input').on('focus', function() {
        let inputFocus = $(this).data('focus');
        if(inputFocus) {
            $(this).css('border-color', ''+inputFocus.split('-').pop() + '!important');
        }
    });*/


    $.fn.swiftModal = function() {
        let dataModal = $(this).attr('data-modal');
        $(this).on('click', (event) => {

            $(dataModal).show();
            $('.sw_modal-close').on('click', () => {
                $(dataModal).hide();
            });
        });

        $(window).on('click', (event) => {
            if (!event.target.matches('.sw_modal-open')) {
                $(dataModal).each(function() {
                 if ($(dataModal).show()) {
                    $(dataModal).hide();
                   }
                }); 
             }
        });
    }

    $('.sw_modal-open').swiftModal();

    $.fn.swiftMobile = function() {
        $(this).each(function() {
            $(this).on('click', () => {
                let mobileNav = $(this).parent().parent();
                let menu = $(this).parent().parent().children('.sw_navbar-minimize');

                if ($(this).parent().data('toggle') == 'toggle') {
                    $(this).toggleClass('hamburger-icon-close');
                }

                if ($(this).parent().data('mobile') == 'vertical') {

                   let vmenu = $(this).parent().data('menu')
                   //mobileNav.after('<div class="sw_navbar-vmobile" id="' + vmenu +'">'+ menu.html() +'</div>');
                   
                    $(vmenu).toggleClass('toggle-bar');
                    console.log($(vmenu));

                    if ($(this).parent().data('position') == 'right') {
                        $(vmenu).addClass('sw_p-right');
                    }
                    
                } else {
                    mobileNav.toggleClass('default-mobile')
                    menu.css('display', 'block !important');
                }


            })
        })
    }

    let mobileMenu = $('.sw_navbar-hamburger.default-hamburger').children('.hamburger-icon');
    //mobileMenu.html(' &#9776;')
    
    mobileMenu.swiftMobile()


    $.fn.swiftCancel = function() {
        $(this).each(function() {
            if ($(this).data('close') == 'cancel') {
                $(this).on('click', function() {
                    $(this).parent().hide();
                })
            }
        })
    }

    $('.sw_cancel').swiftCancel();

    /* Progress Bar */

    $.fn.swiftProgressbar = function(){
        $(this).each(function(){
        let progressBar = $(this).attr('data-value-max');
        let activeProgress = $(this).attr('data-value');
        let progressColor = $(this).attr('data-progress-color');
        $(this).css('width', progressBar+'%');
        $(this).children('.sw_progressbar').css('width', activeProgress+'%');
        $(this).children('.sw-progress-container').css('background', progressColor);

        });
    }

    $('.sw_progressbar-widget').swiftProgressbar();


    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
          $('.sw_scroller').fadeIn();
        } else {
          $('.sw_scroller').fadeOut();
        }
      });
      

      $('.sw_scroller').click(function () {
        $('body, html').animate({
          scrollTop: 0
        }, 1500);
        return false;
      });

      /* Tabbed Panel */
      $('.sw_tab-widget .sw_tab_nav-link').each(function() {
        $(this).on('click', (event) => {

            let swiftTabID = $(this).attr('href');
            let swiftTab = $(swiftTabID);
            //var swiftTabAttrID = $(swiftTabID).attr('id');

            var currentTab = $(this).parent().parent().parent().children('.sw_tab_nav').children().children('.current');
            var activeTabLink = currentTab.parent().parent().parent().children('.sw-nav-tab').children().children('.active');
            //console.log(activeTabLink);

            if(swiftTab.hasClass('current') == false) {
            event.preventDefault();
            currentTab.removeClass('current');
            swiftTab.addClass('current');
            }

            if($(this).hasClass('active') == false) {
            activeTabLink.removeClass('active');
            $(this).addClass('active');
            }
        });
      })

      
      /* Swift UI Widget */
      $('.sw_widget-close').each(function(){
        $(this).on('click', () => {
            $(this).parent().parent().remove();
        });
      });

})(jQuery);