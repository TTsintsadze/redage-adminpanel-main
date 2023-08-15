import ApexCharts from 'apexcharts'
import PerfectScrollbar from 'perfect-scrollbar'


import jQ from 'jquery'

export const createScrollBar = () => {
    
    "use strict";
    const submenu_animation_speed = 200;

    const sidebar = function() {
        var select_sub_menus = jQ('.accordion-menu li:not(.open) ul'),
            active_page_sub_menu_link = jQ('.accordion-menu li.active-page > a');
        
        // Hide all sub-menus
        select_sub_menus.hide();
        
        const container = document.querySelector('.page-sidebar');
        const ps = new PerfectScrollbar(container);

        
        // Accordion
        jQ('.accordion-menu li a').on('click', function(e) {
            var sub_menu = jQ(this).next('ul'),
                parent_list_el = jQ(this).parent('li'),
                active_list_element = jQ('.accordion-menu > li.open'),
                show_sub_menu = function() {
                    sub_menu.slideDown(submenu_animation_speed);
                    parent_list_el.addClass('open');
                    ps.update();
                },
                hide_sub_menu = function() {
                    sub_menu.slideUp(submenu_animation_speed);
                    parent_list_el.removeClass('open');
                    ps.update();
                },
                hide_active_menu = function() {
                    jQ('.accordion-menu > li.open > ul').slideUp(submenu_animation_speed);
                    active_list_element.removeClass('open');
                    ps.update();
                };
            
            if(sub_menu.length) {
                console.log(sub_menu.length);
                
                if(!parent_list_el.hasClass('open')) {
                    if(active_list_element.length) {
                        hide_active_menu();
                    };
                    show_sub_menu();
                } else {
                    hide_sub_menu();
                };
                
                return false;
                
            };
            // e.preventDefault();
            // return false;
        });
        
        console.log(jQ('.active-page > ul'))
        //if(jQ('.active-page > ul').length) {
            console.log(".active-page > ul")
            active_page_sub_menu_link.click();
        //};


    };

    function toggleSidebar() {
        jQ('body').toggleClass("sidebar-hidden");
    };

    jQ('#sidebar-toggle').on('click', function() {
        toggleSidebar();
    });
    


    sidebar();

}

export const onLoad = () => {
    setTimeout(function() {
    jQ('body').addClass('no-loader')}, 1000)
}