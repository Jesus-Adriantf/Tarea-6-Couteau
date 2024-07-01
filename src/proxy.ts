import { createProxyMiddleware } from 'http-proxy-middleware';
import { Application } from 'express';

module.exports = function (app: Application) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://people.com',
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        '^/api': '', // Esto reescribe /api/tag/news/ a /tag/news/
      },
    })
  );
};
