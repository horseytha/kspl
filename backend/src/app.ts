import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { errorMiddleware } from './middlewares/error.middleware';
import authRoutes from './modules/auth/auth.routes';
import userRoutes from './modules/users/user.routes';
import productRoutes from './modules/products/product.routes';
import quoteRoutes from './modules/quotes/quote.routes';
import contactRoutes from './modules/contact/contact.routes';
import newsletterRoutes from './modules/newsletter/newsletter.routes';

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" }
}));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/quotes', quoteRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/newsletter', newsletterRoutes);

// Error Middleware
app.use(errorMiddleware);

export default app;
