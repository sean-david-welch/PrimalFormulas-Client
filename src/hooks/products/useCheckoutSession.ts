import fetchData from '../../utils/fetchData';
import { useMutation } from '@tanstack/react-query';
import { loadStripe } from '@stripe/stripe-js';
import { STRIPE_PUBLIC_KEY } from '../../utils/config';

const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

export const useCheckoutSession = (
    product_id: string | undefined,
    quantity: number
) => {
    return useMutation(
        () => {
            console.log('Sending request with data:', { product_id, quantity });
            return fetchData({
                endpoint: `create-checkout-session/${product_id}`,
                method: 'POST',
                data: { quantity: quantity },
            });
        },
        {
            onSuccess: async data => {
                const stripe = await stripePromise;
                if (!stripe) {
                    console.log('Stripe failed to initialize.');
                    return;
                }
                const { error } = await stripe.redirectToCheckout({
                    sessionId: data.id,
                });
                if (error) {
                    console.log(error);
                }
            },
            onError: error => {
                console.log(error);
            },
        }
    );
};
