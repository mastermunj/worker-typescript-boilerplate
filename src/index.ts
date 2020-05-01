// eslint-disable-next-line
import { } from '@cloudflare/workers-types';
import { handleRequest } from './request-handler';

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});
