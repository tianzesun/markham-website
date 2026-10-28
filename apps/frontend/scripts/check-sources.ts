// Checks that every FAQ source page still loads. Run with `pnpm check-sources`.
// Exits non-zero (failing the scheduled GitHub workflow) if any page is missing or erroring.
import { faqDatabase } from '../src/lib/faq-data.ts';

const TIMEOUT_MS = 20000;
const RETRIES = 2;

const check = async (url: string): Promise<{ ok: boolean; detail: string }> => {
  let lastDetail = '';
  for (let attempt = 0; attempt <= RETRIES; attempt++) {
    try {
      const response = await fetch(url, {
        redirect: 'follow',
        signal: AbortSignal.timeout(TIMEOUT_MS),
        headers: { 'User-Agent': 'HeyMarkham source-link check (+https://heymarkham.vercel.app)' },
      });
      // A redirect to a different page usually means the content moved
      const moved = response.url.replace(/\/$/, '') !== url.replace(/\/$/, '');
      if (response.ok) return { ok: true, detail: moved ? `${response.status}, now at ${response.url}` : `${response.status}` };
      lastDetail = `HTTP ${response.status}`;
      if (response.status < 500) break; // 404 and friends won't fix themselves on retry
    } catch (error) {
      lastDetail = error instanceof Error ? error.message : String(error);
    }
  }
  return { ok: false, detail: lastDetail };
};

const sources = [...new Set(faqDatabase.map(entry => entry.source))];
const results = await Promise.all(sources.map(async url => ({ url, ...(await check(url)) })));

for (const { url, ok, detail } of results) console.log(`${ok ? 'ok  ' : 'FAIL'}  ${detail.padEnd(10)}  ${url}`);

const failures = results.filter(result => !result.ok);
const moved = results.filter(result => result.ok && result.detail.includes('now at'));
console.log(`\n${sources.length} source pages checked: ${failures.length} failing, ${moved.length} redirected.`);
if (failures.length > 0) {
  console.log('\nFix or replace the failing sources in src/lib/faq-data.ts, and re-check those answers against the new page.');
  process.exit(1);
}
