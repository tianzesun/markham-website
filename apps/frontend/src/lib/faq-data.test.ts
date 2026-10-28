// Run with `pnpm test` (Node's built-in test runner; Node 22.18+ strips the types)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { faqDatabase, findFaq } from './faq-data.ts';

// Questions residents actually ask, and the official page that should answer each
const expectedSources: Array<[string, string]> = [
  ['When is garbage day?', 'recycling-garbage/curbside-collection'],
  ['Garbage pickup', 'recycling-garbage/curbside-collection'],
  ['Can I park on the street overnight?', 'overnight-parking-request'],
  ['Overnight parking', 'overnight-parking-request'],
  ['what goes in the blue bin', 'recycling-garbage/curbside-collection'],
  ['Green bin', 'recycling-garbage/green-bin'],
  ['Can I put plastic bags in the green bin?', 'recycling-garbage/green-bin'],
  ['Backyard fireworks', '/fireworks'],
  ['Tree permit', 'tree-permit-application'],
  ['Do I need a permit to cut down a tree?', 'tree-permit-application'],
  ['How tall can my fence be?', 'fences-swimming-pools'],
  ['How do I pay my property tax?', 'property-taxes'],
  ['How do I pay a parking ticket?', 'administrative-monetary-penalty-system'],
  ['How do I dispute a parking ticket?', 'administrative-monetary-penalty-system'],
  ['Where do I take old batteries?', 'recycling-depots-drop-centres'],
  ['How do I get rid of an old fridge?', 'recycling-garbage/curbside-collection'],
  ['How do I license my dog?', 'animal-services'],
  ['Where can my dog run off leash?', 'off-leash-dog-parks'],
  ['What are the noise bylaw hours?', 'bylaw/noise'],
  ['When is yard waste collected?', 'recycling-garbage/curbside-collection'],
  ['When are pools open?', 'sports-recreation-programs/swimming'],
  ['Where can I cool off in a heat wave?', 'heat-warnings-markham'],
  ['When does the library open?', 'markhampubliclibrary.ca'],
  ['When will my street be plowed?', 'winter-road-services'],
  ['Why is my water bill so high?', 'rates-meters-billing-fees'],
  ['Where can I skate?', 'public-skating-lessons-hockey'],
  ['How do I speak at a council meeting?', 'council-and-committee-meetings'],
  ['My basement flooded, what do I do?', 'basement-flooding'],
  ['Summer camp for kids', 'sports-recreation-programs/camps'],
  ['Do I need a permit for a deck?', 'decks-construction-permits'],
  ['Do I need a permit for a shed?', 'decks-construction-permits'],
  ['How do I report a power outage?', 'alectrautilities.com'],
  ['What is the police non-emergency number?', 'yrp.ca'],
  ['How do I take the bus?', 'yrt.ca'],
];

for (const [question, sourcePart] of expectedSources) {
  test(`"${question}" is answered from ${sourcePart}`, () => {
    const { source } = findFaq(question);
    assert.ok(source?.includes(sourcePart), `got ${source ?? 'the fallback answer'}`);
  });
}

test('off-topic questions get the fallback, not a guess', () => {
  for (const question of ['What is the capital of France?', 'tell me a joke', 'Who won the hockey game?']) {
    assert.equal(findFaq(question).source, undefined, question);
  }
});

test('every FAQ question finds its own answer', () => {
  const misses = faqDatabase.filter(entry => findFaq(entry.question).answer !== entry.answer);
  assert.deepEqual(misses.map(entry => entry.question), []);
});

test('every entry links to an official https source', () => {
  const official = ['www.markham.ca', 'www.markhampubliclibrary.ca', 'www.yrt.ca', 'www.yrp.ca', 'alectrautilities.com'];
  for (const entry of faqDatabase) {
    const url = new URL(entry.source);
    assert.equal(url.protocol, 'https:', entry.question);
    assert.ok(official.includes(url.hostname), `${entry.question}: ${url.hostname}`);
  }
});

test('questions are unique', () => {
  const questions = faqDatabase.map(entry => entry.question);
  assert.equal(new Set(questions).size, questions.length);
});
