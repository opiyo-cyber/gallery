const request = require('supertest');

// Ensure the app does not attempt a real DB connection
process.env.NODE_ENV = 'test';
process.env.MONGO_URI = 'mongodb://example.com/';

// Mock the Image model used by routes to avoid DB access
jest.mock('../models/images', () => ({
  find: jest.fn((query, cb) => cb(null, [])),
}));

const app = require('../server');

describe('GET /', () => {
  it('responds with 200 and shows milestones', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toContain('MILESTONE 2');
    expect(res.text).toContain('MILESTONE 3');
  });
});
