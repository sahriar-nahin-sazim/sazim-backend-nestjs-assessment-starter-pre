import { PrismaService } from "@/prisma/prisma.service";
import { HttpStatus, INestApplication } from "@nestjs/common";
import request from "supertest";
import { THttpServer } from "../utils/types";
import { bootstrapTestServer } from "../utils/bootstrap";
import { STATUS_MESSAGE } from "@/status/status.constants";

describe("StatusResolver (e2e)", () => {
  let app: INestApplication;
  let dbService: PrismaService;
  let httpServer: THttpServer;

  beforeAll(async () => {
    const { appInstance, dbServiceInstance, httpServerInstance } = await bootstrapTestServer();

    app = appInstance;
    dbService = dbServiceInstance;
    httpServer = httpServerInstance;
  });

  afterAll(async () => {
    await app.close();
  });

  beforeEach(async () => {
    await dbService.clearDB();
  });

  describe("status", () => {
    it("should return OK(200) with welcome message", async () => {
      return request(httpServer)
        .post("/graphql")
        .send({ query: "{ status }" })
        .expect(HttpStatus.OK)
        .expect(({ body }) => {
          expect(body.data.status).toEqual(STATUS_MESSAGE);
        });
    });
  });
});
