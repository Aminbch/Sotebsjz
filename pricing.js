const stripe = Stripe('pk_test_REPLACE_WITH_YOUR_STRIPE_PUBLISHABLE_KEY'); // ← change me

document.querySelectorAll('.choose').forEach(btn=>{
  btn.addEventListener('click', async ()=>{
    const plan = btn.closest('.plan');
    const price = plan.dataset.price; // in cents
    const product = plan.dataset.product;

    const {error} = await stripe.redirectToCheckout({
      mode:'subscription',
      lineItems:[{price:price,quantity:1}],
      successUrl: window.location.origin + '/success.html',
      cancelUrl: window.location.origin + '/pricing.html'
    });

    if(error) alert(error.message);
  });
});
