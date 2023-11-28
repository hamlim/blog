import type { Manifest } from './types';

export async function fetchManifest(): Promise<Manifest> {
  return fetch(`http://${process.env.VERCEL_URL}/feed.json`).then((r) => r.json());
}
