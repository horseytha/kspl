import app from './app';
import { env } from './config/env';
import { connectDB } from './config/db';

const PORT = env.PORT || 5000;

const startServer = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

startServer();
