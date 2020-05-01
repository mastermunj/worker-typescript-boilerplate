import { Greeter } from './greeter';

export async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const name = url.searchParams.get('name') || 'Human';
  const greeter = new Greeter(name);
  return new Response(greeter.greet(), {
    headers: { 'content-type': 'text/plain' },
  });
}
