function putCode(typeOfCode)
{
    var theCode = "";

    if(typeOfCode=="footer")
    {
        theCode = "<!-- Footer -->" + 
            "<footer id='footer' class='container'>" +
                "<div class='row 200%'>" +
                    "<div class='4u 12u(mobile)'>" +
                        "<!-- Länkar -->" +
                        "<section>" +
                            "<h2 class='major'><span>Links</span></h2>" +
                            "<ul>" +
                                "<li><a href='index.html'>Home</a></li>" +
                                "<li><a href='products.html'>Products</a></li>" +
                                "<li><a href='about.html'>About</a></li>" +
                                "<li><a href='contact.html'>Contact</a></li>" +
                                "<li><a href='customer.html'>Customer</a></li>" +
                            "</ul>" +
                        "</section>" +
                    "</div>" + 

            "<div class='4u 12u(mobile)'>" + 
                "<!-- Newsletter -->" +
                "<section>" +
                    "<h2 class='major'><span>Subscribe to our newsletter</span></h2>" +
                    "<form id='subForm'>" +
                        "<p><input type='email' name='subEmail' /></p>" +
                        "<p><input type='submit' value='Send' /></p>" +
                    "</form>" +
                "</section>" +
            "</div>" +

            "<div class='4u 12u(mobile)'>" +
                "<!-- About -->" +
                "<section class='footerStyle'>" +
                    "<h2 class='major'><span>What's this about?</span></h2>" +
                    "<p>" +
                        "ComputerStore Inc. skickar vanligtvis beställda varor inom 24 timmar (om de finns i vårt postorderlager).<br />" +
                        "Beställ härifrån eller ring 08 - 123 45 67. Alla priser är i svenska kronor inklusive moms och gäller även i butik." +
                    "</p>" +
                "</section>" +
            "</div>" +


        "</div>" +
        "<div class='row 200%'>" +
            "<div class='12u'>" +

                "<!-- Contact -->" +
                "<section>" +
                    "<h2 class='major'><span>Get in touch</span></h2>" +
                    "<ul class='contact'>" +
                        "<li><a class='icon fa-facebook' href='http://www.facebook.com' target='_blank'><span class='label'>Facebook</span></a></li>" +
                        "<li><a class='icon fa-twitter' href='http://www.twitter.com' target='_blank'><span class='label'>Twitter</span></a></li>" + 
                        "<li><a class='icon fa-instagram' href='http://www.instagram.com' target='_blank'><span class='label'>Instagram</span></a></li>" + 
                        "<li><a class='icon fa-google-plus' href='https://plus.google.com/' target='_blank'><span class='label'>Google+</span></a></li>" +
                    "</ul>" +
                "</section>" +

            "</div>" +
        "</div>" +

        "<!-- Copyright -->" +
        "<div id='copyright'>" +
            "<ul class='menu'>" +
                "<li>&copy; HP Consulting. All rights reserved</li>" +
                "<li>Design: <a href='http://html5up.net'>HTML5 UP</a></li>" +
            "</ul>" +
        "</div>" +

    "</footer>"
    }

    if(typeOfCode == "news")
    {
        theCode = "<div class='3u 12u(mobile)'>" +
                    "<div class='sidebar'>" +

                        "<!-- Sidebar -->" +
                        "<!-- Recent Posts -->" +
                        "<section>" +
                            "<h2 class='major'><span>NEWS</span></h2>" +
                            "<ul class='divided'>" +
                                "<li>" +
                                    "<article class='box post-summary'>" +
                                        "<h3><a href='#'>We're finally live</a></h3>" +
                                        "<ul class='meta'>" +
                                            "<li>Some cool info about the news in this post. Hopefully it will react as we want in the responsive testing.</li>" +
                                        "</ul>" +
                                        "<div class='icon fa-clock-o timeStamp'> <i>Yesterday</i></div>" +
                                        
                                "</article>" +
                                "</li>" +
                                "<li>" +
                                    "<article class='box post-summary'>" +
                                        "<h3><a href='#'>Just a little more tweaking</a></h3>" +
                                        "<ul class='meta'>" +
                                            "<li>90% of the job is tweaking, one wonders if this will ever be really done.</li>" +
                                        "</ul>" +
                                        "<div class='icon fa-clock-o timeStamp'> <i>Yesterday</i></div>" +
                                    "</article>" +
                                "</li>" +
                                "<li>" +
                                    "<article class='box post-summary'>" +
                                        "<h3><a href='#'>What's up?</a></h3>" +
                                        "<ul class='meta'>" +
                                            "<li>So it begins! the first update to show the teammates, hopefully it will be recieved well.</li>" +
                                        "</ul>" +
                                        "<div class='icon fa-clock-o timeStamp'> <i>Two days ago</i></div>" +
                                    "</article>" +
                                "</li>" +
                                "<li>" +
                                    "<article class='box post-summary'>" +
                                        "<h3><a href='#'>Checking temperature</a></h3>" +
                                        "<ul class='meta'>" +
                                            "<li>Homing in on the crowd.</li>" +
                                        "</ul>" +
                                        "<div class='icon fa-clock-o timeStamp'> <i>Three days ago</i></div>" +
                                    "</article>" +
                                "</li>" +
                                "<li>" +
                                    "<article class='box post-summary'>" +
                                        "<h3><a href='#'>Test</a></h3>" +
                                        "<ul class='meta'>" +
                                            "<li>A testpost to see what it looks like.</li>" +
                                        "</ul>" +
                                        "<div class='icon fa-clock-o timeStamp'> <i>Three days ago</i></div>" +
                                    "</article>" +
                                "</li>" +
                            "</ul>" +
                        "</section>" +
                        
                        "<!-- Something -->" +
                        "<section>" +
                            "<h2 class='major'><span>Gaming set</span></h2>" +
                            "<a href='#' class='image featured'><img src='images/gamer.jpg' alt='Gamingset' /></a>" +
                            "<p>" +
                                "See our gaming computer with the latest CPU, awesome graphics and more power than you'll ever use in the next few years!" +
                            "</p>" +
                        "</section>" +

                    "</div>" +
                "</div>"
    }

    if (typeOfCode == "navSearch")
    {
        theCode = "<form id='searchForm' class='navbar-form navbar-right' target='_self'>" +
                            "<div class='form-group'>" +
                                "<label class='control-label' for='search-field'><i class='glyphicon glyphicon-search'></i></label>" +
                                "<a href='customer.html#shoppingcart'><i class='fa fa-shopping-cart ourShopping' aria-hidden='true'></i></a><i class='fa fa-search' aria-hidden='true'></i> <input class='form-control search-field' type='search' name='search' id='search-field'>" +
                                "<a class='btn btn-default navbar-btn navbar-right action-button' role='button' href='#'></a>" +
                            "</div>" +
                        "</form>"
    }

    document.write(theCode);
    return theCode();
}


