import http from 'k6/http';        // Import K6's HTTP module
import { check } from 'k6';         // Import K6's check module
import { sleep } from 'k6';         // Import K6's sleep function

export const options = {
  stages: [
    { duration: '30s', target: 20 },   // Ramp up to 20 VUs (Virtual Users) over 30 seconds
    { duration: '1m', target: 20 },    // Stay at 20 VUs for 1 minute
    { duration: '30s', target: 0 },    // Ramp down to 0 VUs over 30 seconds
  ],
};

export default function () {
  // This function will be executed by each Virtual User (VU)
  
  // Use the URL of the API
  let response = http.get('https://jsonplaceholder.typicode.com/posts');  // Example API endpoint
  
  // Check if the response status is 200 (OK)
  check(response, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(1);  // Sleep for 1 second between requests
}
