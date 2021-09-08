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
      .expect(404)
      .then(response => {
        expect(response.body.messageStatus).toBe("NOT FOUND!");
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
        urlGithub: "https://github.com/KenethSandoval/Angualar-AdminPro",
        tags: ["Angular", "Node js"],
      })
      .expect(201)
      .then(response => {
        expect(response.body.messageStatus).toBe("CREATED!");
      });
  });

  test("POST /project should return 400 for missing data", async () => {
    await supertest(app)
      .post("/project")
      .expect(400)
      .then(response => {
        console.log(response.body);
        expect(response.body.msg).toBe("Missing data");
      });
  });
});
