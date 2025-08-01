import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cookieParser());
app.use(
    cors({
        origin: process.env.CORS_ORIGIN || '*',
        credentials: true
    })
);

app.use(express.json({limit: '16kb'}));
app.use(express.urlencoded({extended: true, limit: '16kb'}));
app.use(express.static('public'));


import healthCheckRoutes from './routes/healthcheck.routes.js';
import userRoutes from './routes/user.routes.js';
import tweetRouter from "./routes/tweet.routes.js"
import subscriptionRouter from "./routes/subscription.routes.js"
import videoRouter from "./routes/video.routes.js"
import commentRouter from "./routes/comment.routes.js"
import likeRouter from "./routes/like.routes.js"
import playlistRouter from "./routes/playlist.routes.js"
import dashboardRouter from "./routes/dashboard.routes.js"

app.use('/api/v1/healthcheck', healthCheckRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/tweets', tweetRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);
app.use('/api/v1/videos', videoRouter);
app.use('/api/v1/comments', commentRouter);
app.use('/api/v1/likes', likeRouter);
app.use('/api/v1/playlists', playlistRouter);
app.use('/api/v1/dashboard', dashboardRouter);

export default app;