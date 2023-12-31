var app = {};
var pathname = window.location.pathname;

$(document).ready(function () {
    app = {
        vars:{
            initBreakpointDesktop: null
        },
        init: function () {
            app.checkMenu();
			app.experienceMenu();
			app.smallMenu();
            app.onLoadResize();
            app.cookies();
			app.darkMode();
        },
        //CHECK MENU
        checkMenu:function(){
                $("#top-bar2 #site_title").empty();
                $("#top-bar2 #site_title").append('<h1 class="d-block"><span class="bold">Gerador da Declaração</span><br>de Acessibilidade e Usabilidade</h1>');
                $("#small_menu #site_title_small").empty();
                $("#small_menu #site_title_small").append('<h1 class="d-block"><span class="bold">Gerador da Declaração<br class="d-sm-none d-block">de Acessibilidade e Usabilidade</span></h1>');

        },


        //IF MOBILE ADD CLASSES (ACCORDIONS)
        onLoadResize:function(){
            var width = window.innerWidth;
                if(width < 992){
                //Pre-footer
                $('#pre_footer .container .row .col-lg-4').children('.align-items-center').each(function () {
                    $(this).attr("data-toggle", "collapse");
                    $(this).attr("aria-expanded", "false");

                });
                $('#pre_footer div[data-toggle="collapse"] a').click(function (e) {
                   e.preventDefault();
                });

                //Experience Menu - HEADER
                $('#experience_menu .container #experience_links .col-12').children('.d-inline-flex').each(function () {
                    $(this).attr("data-toggle", "collapse");
                    $(this).attr("aria-expanded", "false");
                });

                $('#experience_menu div[data-toggle="collapse"] a').click(function (e) {
                    e.preventDefault();
                });

                 if(width < 767){
                    $("#experience_menu_desc").addClass("collapse");
                    $("#experience_menu #experience_menu_title").attr("data-toggle", "collapse");
                    $("#experience_menu #experience_menu_title").attr("data-target", "#experience_menu_desc");
                    
                }
                else{
                    $("#experience_menu_desc").removeClass("collapse");
                    $("#experience_menu #experience_menu_title").attr("data-toggle", "");
                    $("#experience_menu #experience_menu_title").attr("data-target", "")
                }

                

            }else{

            
                //Pre-footer
                $('#pre_footer .container .row .col-lg-4').children('.align-items-center').each(function () {
                    $(this).attr("data-toggle", "");
                    $(this).attr("aria-expanded", "");
                });

                //Experience Menu homepage
                $('#experience_menu .container #experience_links .col-12').children('.d-inline-flex').each(function () {
                    $(this).attr("data-toggle", "");
                    $(this).attr("aria-expanded", "");
                });
                $("#experience_menu #experience_menu_title").attr("data-toggle", "");
                $("#experience_menu #experience_menu_title").attr("data-target", "");
                $('#experience_menu div[data-toggle="collapse"] a').click(function (e) {
                    e.preventDefault();
                 });


            }

            $(window).on("resize", function(){
                var width = window.innerWidth;
                if(width < 992){
                    //Pre-footer
                    $('#pre_footer .container .row .col-lg-4').children('.align-items-center').each(function () {
                        $(this).attr("data-toggle", "collapse");
                        $(this).attr("aria-expanded", "false");
                    });
                    $('#pre_footer div[data-toggle="collapse"] a').click(function (e) {
                        e.preventDefault();
                     });

                    //Experience Menu - HEADER
                    $('#experience_menu .container #experience_links .col-12').children('.d-inline-flex').each(function () {
                        $(this).attr("data-toggle", "collapse");
                        $(this).attr("aria-expanded", "false");
                    });
                    
                    $('#experience_menu div[data-toggle="collapse"] a').click(function (e) {
                        e.preventDefault();
                    });

                    if(width < 767){
                        $("#experience_menu_desc").addClass("collapse");
                        $("#experience_menu #experience_menu_title").attr("data-toggle", "collapse");
                        $("#experience_menu #experience_menu_title").attr("data-target", "#experience_menu_desc");
                        
                    }
                    else{
                        $("#experience_menu_desc").removeClass("collapse");
                        $("#experience_menu #experience_menu_title").attr("data-toggle", "");
                        $("#experience_menu #experience_menu_title").attr("data-target", "")
                    }
                }
                else{
                
                    //Pre-footer
                    $('#pre_footer .container .row .col-lg-4').children('.align-items-center').each(function () {
                        $(this).attr("data-toggle", "");
                        $(this).attr("aria-expanded", "");
                    });
                    $('#pre_footer div[data-toggle=""] a').click(function (e) {
                        window.location = this.href;
                     }); 

                    //Experience Menu homepage
                    $('#experience_menu .container #experience_links .col-12').children('.d-inline-flex').each(function () {
                        $(this).attr("data-toggle", "");
                        $(this).attr("aria-expanded", "");
                    });

                    $("#experience_menu #experience_menu_title").attr("data-toggle", "");
                    $("#experience_menu #experience_menu_title").attr("data-target", "")


                }
            });
        },

        //COOKEIS
        cookies:function(){
            $( ".btn_cookies" ).click(function() {
                $("#cookies_bar").css("display", "none")
            });
        },


        //EXPERIENCE MENU - OPEN/CLOSE
        experienceMenu:function(){            
            $("#btn_experience_menu" ).click(function(event) {

                $("#experience_menu").toggle();
                if($("#experience_menu").is(":visible")){
                    $("#btn_experience_menu").attr("aria-expanded","true");
                    $("#top-bar2").hide();
                    $("#navbar").hide();
                    $("main").children("section").each(function(){
                        $(this).hide();
                    });
                    $("#pre_footer").hide();
                    $(".footer").hide();
                    $("#cookies_bar").hide();
                    $("#jump_main").hide();

                    $("#top-bar2").attr("aria-hidden","true");
                    $("main").children("section").each(function(){
                        $(this).attr("aria-hidden","true");
                    });
                    $("#pre_footer").attr("aria-hidden","true");
                    $(".footer").attr("aria-hidden","true");
                    $("#cookies_bar").attr("aria-hidden", "true");
                    $("#jump_main").attr("aria-hidden", "true");

                    $("#btn_experience_menu .icon-arrow-drop").css({'transform' : 'rotate('+ 180 +'deg)'});
                    //Disable scroll
                  $('body').css({
                        overflow: 'hidden',
                        height: '100%'
                    });
                }
                else{
                    $("#btn_experience_menu").attr("aria-expanded","false");
                    $("#top-bar2").show();
                    $("#navbar").show();
                    $("main").children("section").each(function(){
                        $(this).show();
                    });
                    $("#pre_footer").show();
                    $(".footer").show();
                    $("#cookies_bar").show();
                    $("#jump_main").show();

                    $("#top-bar2").attr("aria-hidden","false");
                    $("main").children("section").each(function(){
                        $(this).attr("aria-hidden","false");
                    });
                    $("#pre_footer").attr("aria-hidden","false");
                    $(".footer").attr("aria-hidden","false");
                    $("#cookies_bar").attr("aria-hidden", "false");
                    $("#jump_main").attr("aria-hidden", "false");
                    

                    $("#btn_experience_menu .icon-arrow-drop").css({'transform' : 'rotate('+ 360 +'deg)'});
                    //Restore scroll
                    $('body').css({
                        overflow: 'auto',
                        height: 'auto'
                    }); 
                }
            });

         
        },


        //OPEN SMALL MENU
        smallMenu:function(){
            $("#open_small_menu").click(function() {
                $("#small_menu").show();
                $("#open_small_menu").attr("aria-expanded", "true");
                $("#close_small_menu").attr("aria-expanded", "true");
                $("#top-bar2").css({'display':'none'});
                $("#top-bar").css({'display':'none'});
                $("main").children("section").each(function(){
                    $(this).hide();
                });
                $("#pre_footer").hide();
                $(".footer").hide();
                $("#cookies_bar").hide();
                $("#jump_main").hide();

                $("#top-bar2").attr("aria-hidden","true");
                $("#top-bar").attr("aria-hidden","true");
                $("main").children("section").each(function(){
                    $(this).attr("aria-hidden","true");
                });
                $("#pre_footer").attr("aria-hidden","true");
                $(".footer").attr("aria-hidden","true");
                $("#cookies_bar").attr("aria-hidden", "true");
                $("#jump_main").attr("aria-hidden", "true");
            });

            //CLOSE SMALL MENU
            $("#close_small_menu").click(function() {
                $("#small_menu").hide();
                $("#open_small_menu").attr("aria-expanded", "false");
                $("#close_small_menu").attr("aria-expanded", "false");
                $("#top-bar2").css({'display':'block'});
                $("#top-bar").css({'display':'block'});
                $("main").children("section").each(function(){
                    $(this).show();
                });
                $("#pre_footer").show();
                $(".footer").show();
                $("#cookies_bar").show();
                $("#jump_main").show();

                $("#top-bar2").attr("aria-hidden","false");
                $("#top-bar").attr("aria-hidden","false");
                $("main").children("section").each(function(){
                    $(this).attr("aria-hidden","false");
                });
                $("#pre_footer").attr("aria-hidden","false");
                $(".footer").attr("aria-hidden","false");
                $("#cookies_bar").attr("aria-hidden", "false");
                $("#jump_main").attr("aria-hidden", "false");
            });
        },        


        //BACK TO HOMEPAGE => 404 
        /*backHomePage:function(){
            var origin   = window.location.origin;
            $("#back_home").click(function(){
                window.location.replace(origin + "/acessibilidade/index.php");
            })
        },*/
		
		darkMode:function(){
            var origin = window.location.origin;
            if(sessionStorage.getItem("dark_mode") == "true"){
                $('#btn_dark_mode a').prepend("Modo Claro");
                $('#dark_mode_text_small').text("Ver Modo Claro");
                $("head").append('<link rel="stylesheet" type="text/css" href="css/dark_mode.css" />');
            }
            else{
                $('#btn_dark_mode a').prepend("Modo Escuro");
                $('#dark_mode_text_small').text("Ver Modo Escuro");
            }
            $("#btn_dark_mode").click(function(){
                var dark = '';
                if(sessionStorage.getItem("dark_mode") == "true"){
                    sessionStorage.setItem("dark_mode", false);
                    $dark = false;
                }
                else{
                    sessionStorage.setItem("dark_mode", true);
                    $dark = true;
                }
                var ajax_url = origin+'/wp-admin/admin-ajax.php';
                $.ajax({
                    url: ajax_url,
                    method: "POST",
                    dataType:"json",
                    data: {
                        dark: dark,
                        action: 'change_mode',
                    },
                    success:function(data){
                        location.reload();
                    },
                    error: function(xhr, status, error){
                      console.log(error);
                    }
                });
            });

            $("#dark_mode_small").click(function(){
                var dark = '';
                if(sessionStorage.getItem("dark_mode") == "true"){
                    sessionStorage.setItem("dark_mode", false);
                    $dark = false;
                }
                else{
                    sessionStorage.setItem("dark_mode", true);
                    $dark = true;
                }
                var ajax_url = origin+'/wp-admin/admin-ajax.php';
                $.ajax({
                    url: ajax_url,
                    method: "POST",
                    dataType:"json",
                    data: {
                        dark: dark,
                        action: 'change_mode',
                    },
                    success:function(data){
                        location.reload();
                    },
                    error: function(xhr, status, error){
                      console.log(error);
                    }
                });
            });
        },

    }

})














//  <!--################################################################################################################ Script Tabs -->


// tabs https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-1/tabs.html
            /*
            *   This content is licensed according to the W3C Software License at
            *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
            */
            (function () {
              var tablist = document.querySelectorAll('[role="tablist"]')[0];
              var tabs;
              var panels;
              var delay = determineDelay();

              generateArrays();

              function generateArrays () {
                tabs = document.querySelectorAll('[role="tab"]');
                panels = document.querySelectorAll('[role="tabpanel"]');
              };

              // For easy reference
              var keys = {
                end: 35,
                home: 36,
                left: 37,
                up: 38,
                right: 39,
                down: 40,
                delete: 46
              };

              // Add or substract depending on key pressed
              var direction = {
                37: -1,
                38: -1,
                39: 1,
                40: 1
              };

              // Bind listeners
              for (i = 0; i < tabs.length; ++i) {
                addListeners(i);
              };

              function addListeners (index) {
                tabs[index].addEventListener('click', clickEventListener);
                tabs[index].addEventListener('keydown', keydownEventListener);
                tabs[index].addEventListener('keyup', keyupEventListener);

                // Build an array with all tabs (<button>s) in it
                tabs[index].index = index;
              };

              // When a tab is clicked, activateTab is fired to activate it
              function clickEventListener (event) {
                var tab = event.target;
                activateTab(tab, false);
              };

              // Handle keydown on tabs
              function keydownEventListener (event) {
                var key = event.keyCode;

                switch (key) {
                  case keys.end:
                    event.preventDefault();
                    // Activate last tab
                    activateTab(tabs[tabs.length - 1]);
                    break;
                  case keys.home:
                    event.preventDefault();
                    // Activate first tab
                    activateTab(tabs[0]);
                    break;

                  // Up and down are in keydown
                  // because we need to prevent page scroll >:)
                  case keys.up:
                  case keys.down:
                    determineOrientation(event);
                    break;
                };
              };

              // Handle keyup on tabs
              function keyupEventListener (event) {
                var key = event.keyCode;

                switch (key) {
                  case keys.left:
                  case keys.right:
                    determineOrientation(event);
                    break;
                  case keys.delete:
                    determineDeletable(event);
                    break;
                };
              };

              // When a tablistâ€™s aria-orientation is set to vertical,
              // only up and down arrow should function.
              // In all other cases only left and right arrow function.
              function determineOrientation (event) {
                var key = event.keyCode;
                var vertical = tablist.getAttribute('aria-orientation') == 'vertical';
                var proceed = false;

                if (vertical) {
                  if (key === keys.up || key === keys.down) {
                    event.preventDefault();
                    proceed = true;
                  };
                }
                else {
                  if (key === keys.left || key === keys.right) {
                    proceed = true;
                  };
                };

                if (proceed) {
                  switchTabOnArrowPress(event);
                };
              };

              // Either focus the next, previous, first, or last tab
              // depening on key pressed
              function switchTabOnArrowPress (event) {
                var pressed = event.keyCode;

                for (x = 0; x < tabs.length; x++) {
                  tabs[x].addEventListener('focus', focusEventHandler);
                };

                if (direction[pressed]) {
                  var target = event.target;
                  if (target.index !== undefined) {
                    if (tabs[target.index + direction[pressed]]) {
                      tabs[target.index + direction[pressed]].focus();
                    }
                    else if (pressed === keys.left || pressed === keys.up) {
                      focusLastTab();
                    }
                    else if (pressed === keys.right || pressed == keys.down) {
                      focusFirstTab();
                    };
                  };
                };
              };

              // Activates any given tab panel
              function activateTab (tab, setFocus) {
                setFocus = setFocus || true;
                // Deactivate all other tabs
                deactivateTabs();

                // Remove tabindex attribute
                tab.removeAttribute('tabindex');

                // Set the tab as selected
                tab.setAttribute('aria-selected', 'true');
                tab.parentElement.setAttribute('class', 'selected');

                // Get the value of aria-controls (which is an ID)
                var controls = tab.getAttribute('aria-controls');

                // Remove hidden attribute from tab panel to make it visible
                document.getElementById(controls).removeAttribute('hidden');

                // Set focus when required
                if (setFocus) {
                  tab.focus();
                };
              };

              // Deactivate all tabs and tab panels
              function deactivateTabs () {
                for (t = 0; t < tabs.length; t++) {
                  tabs[t].setAttribute('tabindex', '-1');
                  tabs[t].setAttribute('aria-selected', 'false');
                  tabs[t].parentElement.removeAttribute('class', 'selected');
                  tabs[t].removeEventListener('focus', focusEventHandler);
                };

                for (p = 0; p < panels.length; p++) {
                  panels[p].setAttribute('hidden', 'hidden');
                };
              };

              // Make a guess
              function focusFirstTab () {
                tabs[0].focus();
              };

              // Make a guess
              function focusLastTab () {
                tabs[tabs.length - 1].focus();
              };

              // Detect if a tab is deletable
              function determineDeletable (event) {
                target = event.target;

                if (target.getAttribute('data-deletable') !== null) {
                  // Delete target tab
                  deleteTab(event, target);

                  // Update arrays related to tabs widget
                  generateArrays();

                  // Activate the closest tab to the one that was just deleted
                  if (target.index - 1 < 0) {
                    activateTab(tabs[0]);
                  }
                  else {
                    activateTab(tabs[target.index - 1]);
                  };
                };
              };

              // Deletes a tab and its panel
              function deleteTab (event) {
                var target = event.target;
                var panel = document.getElementById(target.getAttribute('aria-controls'));

                target.parentElement.removeChild(target);
                panel.parentElement.removeChild(panel);
              };

              // Determine whether there should be a delay
              // when user navigates with the arrow keys
              function determineDelay () {
                var hasDelay = tablist.hasAttribute('data-delay');
                var delay = 0;

                if (hasDelay) {
                  var delayValue = tablist.getAttribute('data-delay');
                  if (delayValue) {
                    delay = delayValue;
                  }
                  else {
                    // If no value is specified, default to 300ms
                    delay = 300;
                  };
                };

                return delay;
              };

              //
              function focusEventHandler (event) {
                var target = event.target;

                setTimeout(checkTabFocus, delay, target);
              };

              // Only activate tab on focus if it still has focus after the delay
              function checkTabFocus (target) {
                focused = document.activeElement;

                if (target === focused) {
                  activateTab(target, false);
                };
              };
            }());

//  <!--################################################################################################################ Fim Script Tabs -->
