export const checkout = `
    <div id="root">
        <header class="heading"></header>
        <nav class="navigation"></nav>
    </div>
    <main>
        <form action="thankyou.html" class="checkout-form">
            <fieldset class="contact-form">
                <legend>Contact Info</legend>
                <label class="top" for="fname">First name* <input type="text" name="fname" id="fname" required></label>
                <label class="top" for="email">Email* <input type="email" name="email" id="email" placeholder="example@gmail.com" required></label>
                <label class="top" for="phone">Phone-number* <input type="tel" name="phone" id="phone" required></label>
            </fieldset>
            <fieldset class="payment-form">
                <legend>Payment Info</legend>
                <label class="top" for="cc-number">Card number<input id="cc-number" name="cc-number" autocomplete="cc-number" inputmode="numeric" maxlength="50" pattern="[\d ]{10,30}" required></label>
                <label class="top" for="cc-name">Name on card<input id="cc-name" name="cc-name" autocomplete="cc-name" maxlength="50" pattern="[\p{L} \-\.]+" required></label>
                <label id="cc-exp-csc" for="cc-exp">Expiry date<input id="cc-exp" name="cc-exp" autocomplete="cc-exp" placeholder="MM/YY" maxlength="5" required></label>
                <label for="cc-csc">Security code<input id="cc-csc" name="cc-csc" inputmode="numeric" maxlength="3" required></label>
            </fieldset>
            <input type="submit" value="PAY"></input>
        </form>
    </main>`;
