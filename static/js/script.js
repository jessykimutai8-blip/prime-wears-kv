document.addEventListener("DOMContentLoaded", function () {

    const orderForm = document.getElementById("orderForm");
    const shoeSelect = document.getElementById("shoeName");
    const quantityInput = document.getElementById("quantity");
    const totalPrice = document.getElementById("totalPrice");

    if (!orderForm || !shoeSelect || !quantityInput || !totalPrice) {
        return;
    }


    // ==============================
    // CALCULATE TOTAL
    // ==============================

    function calculateTotal() {

        const selectedOption =
            shoeSelect.options[shoeSelect.selectedIndex];

        if (
            !selectedOption ||
            !selectedOption.dataset.price
        ) {
            totalPrice.textContent = "KSh 0";
            return;
        }

        const price =
            Number(selectedOption.dataset.price);

        let quantity =
            Number(quantityInput.value);

        if (!quantity || quantity < 1) {
            quantity = 1;
        }

        const total =
            price * quantity;

        totalPrice.textContent =
            "KSh " +
            total.toLocaleString("en-KE");
    }


    // Update total when shoe changes
    shoeSelect.addEventListener(
        "change",
        calculateTotal
    );


    // Update total when quantity changes
    quantityInput.addEventListener(
        "input",
        calculateTotal
    );


    // Also update when quantity loses focus
    quantityInput.addEventListener(
        "change",
        calculateTotal
    );


    // Initial calculation
    calculateTotal();


    // ==============================
    // WHATSAPP ORDER
    // ==============================

    orderForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document
                .getElementById("customerName")
                .value
                .trim();


            const phone =
                document
                .getElementById("customerPhone")
                .value
                .trim();


            const shoe =
                shoeSelect.value;


            const size =
                document
                .getElementById("shoeSize")
                .value;


            let quantity =
                Number(quantityInput.value);


            const location =
                document
                .getElementById("location")
                .value
                .trim();


            const message =
                document
                .getElementById("message")
                .value
                .trim();


            // Validate
            if (
                !name ||
                !phone ||
                !shoe ||
                !size ||
                !quantity ||
                !location
            ) {

                alert(
                    "Please fill in all required fields."
                );

                return;
            }


            if (quantity < 1) {
                quantity = 1;
            }


            const selectedOption =
                shoeSelect.options[
                    shoeSelect.selectedIndex
                ];


            const price =
                Number(
                    selectedOption.dataset.price
                );


            const total =
                price * quantity;


            // ==============================
            // CREATE WHATSAPP MESSAGE
            // ==============================

            const whatsappMessage =

`🛍️ *NEW ORDER - PRIME WEARS KV*

━━━━━━━━━━━━━━━━━━

👤 *CUSTOMER DETAILS*

Name: ${name}
Phone: ${phone}

━━━━━━━━━━━━━━━━━━

👟 *SHOE ORDER*

Shoe: ${shoe}
Size: ${size}
Quantity: ${quantity}

Price per pair:
KSh ${price.toLocaleString("en-KE")}

*TOTAL VALUE:*
KSh ${total.toLocaleString("en-KE")}

━━━━━━━━━━━━━━━━━━

📍 *DELIVERY LOCATION*

${location}

📝 *ADDITIONAL MESSAGE*

${message || "None"}

━━━━━━━━━━━━━━━━━━

📍 PRIME WEARS KV
Kwa Vonza

Thank you for choosing
*PRIME WEARS KV* 👟`;


            // Your WhatsApp number
            const whatsappNumber =
                "254768644112";


            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodeURIComponent(
                    whatsappMessage
                );


            // Open WhatsApp
            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

});