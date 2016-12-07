function putCode(typeOfCode)
{
    var theCode = "";

    if(typeOfCode=="footer")
    {
        theCode = "Footercode";
    }

    if(typeOfCode == "news")
    {
        theCode = "newscode";
    }

    document.write(theCode);
    return theCode();
}


/*
<!-- Footer -->
    <footer id="footer" class="container">
        <div class="row 200%">
            <div class="4u 12u(mobile)">
                <!-- Länkar -->
                <section>
                    <h2 class="major"><span>Links</span></h2>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="products.html">Products</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="customer.html">Customer</a></li>
                    </ul>
                </section>
            </div>

            <div class="4u 12u(mobile)">
                <!-- Newsletter -->
                <section>
                    <h2 class="major"><span>Subscribe to our newsletter</span></h2>
                    <form id="subForm">
                        <p><input type="email" name="subEmail" /></p>
                        <p><input type="submit" value="Send" /></p>
                    </form>
                </section>
            </div>

            <div class="4u 12u(mobile)">
                <!-- About -->
                <section class="footerStyle">
                    <h2 class="major"><span>What's this about?</span></h2>
                    <p>
                        ComputerStore Inc. skickar vanligtvis beställda varor inom 24 timmar (om de finns i vårt postorderlager).<br />
                        Beställ härifrån eller ring 08 - 123 45 67. Alla priser är i svenska kronor inklusive moms och gäller även i butik.
                    </p>
                </section>
            </div>


        </div>
        <div class="row 200%">
            <div class="12u">

                <!-- Contact -->
                <section>
                    <h2 class="major"><span>Get in touch</span></h2>
                    <ul class="contact">
                        <li><a class="icon fa-facebook" href="http://www.facebook.com" target="_blank"><span class="label">Facebook</span></a></li>
                        <li><a class="icon fa-twitter" href="http://www.twitter.com" target="_blank"><span class="label">Twitter</span></a></li>
                        <li><a class="icon fa-instagram" href="http://www.instagram.com" target="_blank"><span class="label">Instagram</span></a></li>                       
                        <li><a class="icon fa-google-plus" href="https://plus.google.com/" target="_blank"><span class="label">Google+</span></a></li>
                    </ul>
                </section>

            </div>
        </div>

        <!-- Copyright -->
        <div id="copyright">
            <ul class="menu">
                <li>&copy; HP Consulting. All rights reserved</li>
                <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
        </div>

    </footer>
    */