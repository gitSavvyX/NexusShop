import dbConnect from '../../lib/dbConnect';
import Product from '../../models/Product';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const products = await Product.find({});
      res.status(200).json({ success: true, data: products });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else if (req.method === 'POST') {
    try {
      const product = await Product.create(req.body);
      res.status(201).json({ success: true, data: product });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
}
