import app from "../../src/index";
import supertest from "supertest";

/*beforeEach(done => {
  console.log('Conexion a mongo');
  done();
});

afterEach(done => {
  console.log('Cerrar conexion a mongo');
  done();
});*/

describe("Suteste it for project", () => {
  test("GET /project should return 200 for all data", async () => {
    await supertest(app)
      .get("/project")
      .expect(200)
      .then(response => {
        expect(Array.isArray(response.body.data)).toBeTruthy();
        expect(response.body.data.length).toEqual(response.body.data.length);
        expect(response.body.message).toBe("OK");
      });
  });

  test("POST /project should return 201 for new project", async () => {
    await supertest(app)
      .post("/project")
      .send({
        title: "Angular ADMIN PRO",
        description: "Panel de administrador de un sistema de hosptestal",
        imagen: "imagen.png",
        urlDemo: "https://adminpro.com",
        urlGtesthub: "https://github.com/KenethSandoval/Angualar-AdminPro",
        tags: ["Angular", "Node js"],
      })
      .expect(201)
      .then(response => {
        expect(response.body.message).toBe("Created");
      });
  });

  test("POST /project should return 400 for missing data", async () => {
    await supertest(app)
      .post("/project")
      .expect(400)
      .then(response => {
        expect(response.body.message).toBe("Missing data");
      });
  });
});
