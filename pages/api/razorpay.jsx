// pages/api/razorpay.js
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: 'rzp_test_ve4rlwcZAPNEro',
  key_secret: 'LaXrcjv5BiGrZHybc3eUvlNP',
});

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { amount, currency, receipt, notes } = req.body;

      const orderOptions = {
        amount: amount , // Razorpay accepts amount in paisa, so multiply by 100
        currency: currency || 'INR',
        receipt: receipt || 'order_receipt',
        notes: notes || {},
      };

      const order = await razorpay.orders.create(orderOptions);

      res.status(200).json({ order });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
