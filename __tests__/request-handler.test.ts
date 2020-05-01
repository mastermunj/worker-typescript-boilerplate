import makeServiceWorkerEnv from 'service-worker-mock';
import { handleRequest } from '../src/request-handler';

describe('Request Handler', () => {
  beforeEach(() => {
    Object.assign(global, makeServiceWorkerEnv());
    jest.resetModules();
  });

  test('Test with name', async () => {
    const name = 'Jim';
    const request = new Request(`https://example.com?name=${name}`);
    const response = await handleRequest(request);
    const responseText = await response.text();
    expect(responseText).toBe(`Hello ${name}!`);
  });

  test('Test without name', async () => {
    const request = new Request(`https://example.com`);
    const response = await handleRequest(request);
    const responseText = await response.text();
    const headers: string[] = [];
    response.headers.forEach((value, key) => {
      headers.push(`${key}: ${value}`);
    });
    expect(responseText).toBe(`Hello Human!`);
  });

  test('Test headers', async () => {
    const request = new Request(`https://example.com`);
    const response = await handleRequest(request);
    expect(response.headers.get('content-type')).toBe('text/plain');
  });
});
