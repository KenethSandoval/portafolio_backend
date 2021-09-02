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

describe("Suite it for project", () => {
  it("GET /project should return 404 for void data", async () => {
    await supertest(app)
      .get("/project")
      .expect(404)
      .then(response => {
        //expect(Array.isArray(response.body)).toBeTruthy();
        //expect(response.body.length).toEqual(0);
        expect(response.body.message).toBe("Void");
      });
  });

  it("POST /project should return 201 for new project", async () => {
    await supertest(app)
      .post("/project")
      .send({
        title: "Angular ADMIN PRO",
        description: "Panel de administrador de un sistema de hospital",
        imagen: "imagen.png",
        urlDemo: "https://adminpro.com",
        urlGithub: "https://github.com/KenethSandoval/Angualar-AdminPro",
        tags: ["Angular", "Node js"],
      })
      .expect(201)
      .then(response => {
        expect(response.body.message).toBe("Created");
      });
  });

  it("POST /project should return 400 for missing data", async () => {
    await supertest(app)
      .post("/project")
      .expect(400)
      .then(response => {
        expect(response.body.message).toBe("Missing data");
      });
  });
});
