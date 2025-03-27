import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10, // 10 virtual users
  duration: '10s', // Duration for 10 seconds
};

export default function () {
  const res = http.get('https://test-api.k6.io/public/crocodiles/');

  // Check if the response status is 200 (OK)
  check(res, {
    'is status 200': (r) => r.status === 200,
  });

  // Add sleep to simulate a user waiting between requests
  sleep(1);
}
