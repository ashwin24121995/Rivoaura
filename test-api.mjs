import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.CRICKET_API_KEY;
console.log('✓ API Key exists:', !!API_KEY);
console.log('✓ API Key length:', API_KEY?.length);

try {
  const response = await fetch(`https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}&offset=0`);
  const data = await response.json();
  
  console.log('\n📊 API Response Status:', response.status);
  console.log('📊 API Response:', JSON.stringify(data, null, 2));
  
  if (data.data && Array.isArray(data.data)) {
    console.log(`\n✅ Successfully fetched ${data.data.length} matches`);
  } else {
    console.log('\n⚠️  No matches data in response');
  }
} catch (error) {
  console.error('\n❌ Error:', error.message);
}
