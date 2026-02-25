import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';
import { errorMiddleware } from './middlewares/error.middleware';
import authRoutes from './modules/auth/auth.routes';
import userRoutes from './modules/users/user.routes';
import productRoutes from './modules/products/product.routes';
import quoteRoutes from './modules/quotes/quote.routes';
import categoryRoutes from './modules/categories/category.routes';
import contactRoutes from './modules/contact/contact.routes';
import newsletterRoutes from './modules/newsletter/newsletter.routes';

const app = express();

const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];

app.use(cors({
    origin: (origin, callback) => {
        console.log('CORS Request from origin:', origin);
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            console.log('CORS blocked for origin:', origin);
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.get('/health', (req, res) => res.status(200).send('OK'));
app.use(helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" }
}));
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/quotes', quoteRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/newsletter', newsletterRoutes);

// Error Middleware
app.use(errorMiddleware);

export default app;
