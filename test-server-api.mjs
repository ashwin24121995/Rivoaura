import dotenv from 'dotenv';
dotenv.config();

console.log('Testing server/cricketApi.ts directly...\n');

try {
  const { getCurrentMatches } = await import('./server/cricketApi.js');
  console.log('✓ Module imported successfully');
  
  console.log('Calling getCurrentMatches()...');
  const matches = await getCurrentMatches();
  
  console.log(`\n✅ Got ${matches.length} matches`);
  if (matches.length > 0) {
    console.log('First match:', matches[0].name);
  }
} catch (error) {
  console.error('\n❌ Error:', error.message);
  console.error(error.stack);
}
