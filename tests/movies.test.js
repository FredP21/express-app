const request = require("supertest");
const app = require("../app");

describe("GET /api/movies", () => {
  it("should return all movies", async () => {
    const res = await request(app).get("/api/movies");
    expect(res.headers["content-type"]).toMatch(/json/);
    expect(res.status).toEqual(200);
  });
});

describe("GET /api/movies/:id", () => {
  it("should return one movie", async () => {
    const res = await request(app).get("/api/movies/1");
    expect(res.headers["content-type"]).toMatch(/json/);
    expect(res.status).toEqual(200);
  });
  it("should return 404 page", async () => {
    const noRes = await request(app).get("/api/movies/0");
    expect(noRes.status).toEqual(404);
  });
});
