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
                    $(this).on('click', function() {
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
            dropdownContent.children('.sw_dropdown-list.dyn').on('click', function(){
                let currentText = $(this).html();
                $(this).parent().parent().children('.sw_dropdown_toggler').children('.sw_dropdown_trigger').html(currentText);
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
            $(this).on('focus', function() {
                let parentFloat = $(this).parent().parent();
                parentFloat.addClass('focus');
            });

            $(this).on('blur', function() {
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


    $.fn.swiftModal = function(){
        $(this).click(function(event){
          let dataModal = $(this).attr('data-modal');
          $(dataModal).show();
          $('.sw_modal-close').click(function(){
            $(dataModal).hide();
          });
        });
      
        $('.sw_modal').click(function(event){
            
            event.stopPropagation();
          });
       
      }

      

    $('.sw_modal-open').swiftModal();

})(jQuery);