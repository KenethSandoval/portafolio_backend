import app from "../src/index";
import supertest from "supertest";

describe("e2e start server", () => {
  it("GET /", async () => {
    await supertest(app)
      .get("/")
      .expect(200)
      .then(response => {
        expect(response.text).toBe("Hello world");
      });
  });
});
