console.log('Testing tRPC endpoint...');

const controller = new AbortController();
const timeout = setTimeout(() => controller.abort(), 10000); // 10 second timeout

try {
  const response = await fetch('http://localhost:3000/api/trpc/matches.getCurrent', {
    signal: controller.signal
  });
  
  clearTimeout(timeout);
  
  console.log('Status:', response.status);
  const data = await response.json();
  console.log('Response:', JSON.stringify(data, null, 2));
} catch (error) {
  clearTimeout(timeout);
  console.error('Error:', error.message);
  if (error.name === 'AbortError') {
    console.error('Request timed out after 10 seconds');
  }
}
