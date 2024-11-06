function subscribeOnBodlEvents() {
    // log to verify that the function is executing
    console.log('run subscribeOnBodlEvents()');
    console.log('test')

    if (
      // window is falsy
      !window ||
      // window.bodlEvents is not defined
      typeof window.bodlEvents === 'undefined' ||
      // window.bodlEvents.banner is not defined
      typeof window.bodlEvents.banner === 'undefined' ||
      // window.bodlEvents.checkout is not defined
      typeof window.bodlEvents.checkout === 'undefined' ||
      // window.bodlEvents.cart is not defined
      typeof window.bodlEvents.cart === 'undefined' ||
      // window.bodlEvents.product is not defined
      typeof window.bodlEvents.product === 'undefined' ||
      // window.bodlEvents.consent is not defined
      typeof window.bodlEvents.consent === 'undefined'
    ) {
        // log 'not defined' to the console
        console.log('not defined');
        // and end script execution
        return;
    }

    // if window.dataLayer doesn't exist, make it an empty array
    window.dataLayer = window.dataLayer || [];

    // If window.bodlEvents.consent.loaded is available, then...
    if (typeof window.bodlEvents.consent.loaded === 'function') {
        // run the loaded function to get the payload
        window.bodlEvents.consent.loaded((payload) => {
            // log the event payload
            console.log(
              'window.bodlEvents.consent.loaded ~ payload',
              payload
            );
        });
    }

    // If window.bodlEvents.consent.updated is available, then...
    if (typeof window.bodlEvents.consent.updated === 'function') {
        // run the updated function to get the payload
        window.bodlEvents.consent.updated((payload) => {
            // log the event payload
            console.log(
              'window.bodlEvents.consent.updated ~ payload',
              payload
            );
        });
    }

    // If window.bodlEvents.product.searchPerformed is available, then...
    if (typeof window.bodlEvents.product.searchPerformed === 'function') {
        // run the searchPerformed function to get the payload
        window.bodlEvents.product.searchPerformed((payload) => {
            // log the event payload
            console.log(
              'window.bodlEvents.product.searchPerformed ~ payload',
              payload
            );
        });
    }

    // If window.bodlEvents.banner.viewed is available, then...
    if (typeof window.bodlEvents.banner.viewed === 'function') {
        // run the viewed function to get the payload
        window.bodlEvents.banner.viewed((payload) => {
            // log the event payload
            console.log(
              'window.bodlEvents.banner.viewed ~ payload',
              payload
            );
        });
    }

    // If window.bodlEvents.product.pageViewed is available, then...
    if (typeof window.bodlEvents.product.pageViewed === 'function') {
        // run the pageViewed function to get the payload
        window.bodlEvents.product.pageViewed((payload) => {
            // log the event payload
            console.log(
              'window.bodlEvents.product.pageViewed ~ payload',
              payload
            );
        });
    }

    // If window.bodlEvents.product.categoryViewed is available, then...
    if (typeof window.bodlEvents.product.categoryViewed === 'function') {
        // run the categoryViewed function to get the payload
        window.bodlEvents.product.categoryViewed((payload) => {
            // log the event payload
            console.log(
              'window.bodlEvents.product.categoryViewed ~ payload',
              payload
            );
        });
    }

    // If window.bodlEvents.cart.addItem is available, then...
    if (typeof window.bodlEvents.cart.addItem === 'function') {
        // run the addItem function to get the payload
        window.bodlEvents.cart.addItem((payload) => {
            // log the event payload
            console.log(
              'window.bodlEvents.cart.addItem ~ payload',
              payload
            );
        });
    }

    // If window.bodlEvents.cart.viewed is available, then...
    if (typeof window.bodlEvents.cart.viewed === 'function') {
        // run the viewed function to get the payload
        window.bodlEvents.cart.viewed((payload) => {
            // log the event payload
            console.log(
              'window.bodlEvents.cart.viewed ~ payload',
              payload
            );
        });
    }

    // If window.bodlEvents.cart.removeItem is available, then...
    if (typeof window.bodlEvents.cart.removeItem === 'function') {
        // run the removeItem function to get the payload
        window.bodlEvents.cart.removeItem((payload) => {
            // log the event payload
            console.log(
              'window.bodlEvents.cart.removeItem ~ payload',
              payload
            );
        });
    }

    //   If window.bodlEvents.checkout.checkoutBegin is available, then...
    if (typeof window.bodlEvents.checkout.checkoutBegin === 'function') {
        // run the checkoutBegin function to get the payload
        window.bodlEvents.checkout.checkoutBegin((payload) => {

            const gtmPayload = window.dataLayer.push({
                event: "begin_checkout",
                ecommerce: {
                    currency: payload.currency,
                    value: payload.cart_value,
                    items: payload.line_items.map((item) => {
                        return {
                            item_id: item.sku,
                            item_name: item.product_name,
                            item_brand: item.brand_name,
                            item_category: item.category_name,
                            item_variant: item.variant_id,
                            item_list_id: null,
                            item_list_name: null,
                            price: item.purchase_price,
                            quantity: item.quantity
                        };
                    })
                }
            });
            // log the event payload
            console.log(
              'window.bodlEvents.checkout.checkoutBegin ~ payload',
              payload
            );
            console.dir(gtPayload);
        });
    }

    // If window.bodlEvents.checkout.shippingDetailsProvided is available, then...
    if (typeof window.bodlEvents.checkout.shippingDetailsProvided === 'function') {
        // run the shippingDetailsProvided function to get the payload
        window.bodlEvents.checkout.shippingDetailsProvided((payload) => {
            // log the event payload
            console.log(
              'window.bodlEvents.checkout.shippingDetailsProvided ~ payload',
              payload
            );
        });
    }

    // If window.bodlEvents.checkout.paymentDetailsProvided is available, then...
    if (typeof window.bodlEvents.checkout.paymentDetailsProvided === 'function') {
        // run the paymentDetailsProvided function to get the payload
        window.bodlEvents.checkout.paymentDetailsProvided((payload) => {
            // log the event payload
            console.log(
              'window.bodlEvents.checkout.paymentDetailsProvided ~ payload',
              payload
            );
        });
    }

    // If window.bodlEvents.checkout.orderPurchased is available, then...
    if (typeof window.bodlEvents.checkout.orderPurchased === 'function') {
        // run the orderPurchase function to get the payload
        window.bodlEvents.checkout.orderPurchased((payload) => {
            // log the event payload
            console.log(
              'window.bodlEvents.checkout.orderPurchased ~ payload',
              payload
            );
        });
    }
}

// when the page window loads, run the subscribeOnBodlEvents function
window.addEventListener('load', subscribeOnBodlEvents, false);
