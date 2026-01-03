import { describe, it, expect } from 'vitest';
import { getCurrentMatches, testCricketApiConnection } from './cricketApi';

describe('Cricket API Integration', () => {
  it('should connect to Cricket API successfully', async () => {
    const isConnected = await testCricketApiConnection();
    expect(isConnected).toBe(true);
  }, 15000); // 15 second timeout for API call

  it('should fetch current matches', async () => {
    const matches = await getCurrentMatches();
    expect(Array.isArray(matches)).toBe(true);
    // API might return empty array if no matches are currently scheduled
    console.log(`✓ Cricket API returned ${matches.length} matches`);
  }, 15000);

  it('should have valid match structure if matches exist', async () => {
    const matches = await getCurrentMatches();
    if (matches.length > 0) {
      const firstMatch = matches[0];
      expect(firstMatch).toHaveProperty('id');
      expect(firstMatch).toHaveProperty('name');
      expect(firstMatch).toHaveProperty('status');
      expect(firstMatch).toHaveProperty('teams');
      console.log(`✓ Sample match: ${firstMatch.name}`);
    } else {
      console.log('⚠️  No matches currently available from API');
    }
  }, 15000);
});
