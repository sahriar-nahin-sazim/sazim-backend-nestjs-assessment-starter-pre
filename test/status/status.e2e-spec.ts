import { HttpStatus, INestApplication } from "@nestjs/common";
import request from "supertest";
import { THttpServer } from "../utils/types";
import { bootstrapTestServer } from "../utils/bootstrap";
import { getExpectedStatusStructure } from "./status.expected-structure";

describe("StatusResolver (e2e)", () => {
  let app: INestApplication;
  let httpServer: THttpServer;

  beforeAll(async () => {
    const { appInstance, httpServerInstance } = await bootstrapTestServer();

    app = appInstance;
    httpServer = httpServerInstance;
  });

  afterAll(async () => {
    await app.close();
  });

  describe("status", () => {
    it("should return OK(200) with expected structure", async () => {
      return request(httpServer)
        .post("/graphql")
        .send({
          query: `
            query {
              status {
                status
                info {
                  database {
                    status
                  }
                }
                details {
                  database {
                    status
                  }
                }
              }
            }
          `,
        })
        .expect(HttpStatus.OK)
        .expect(({ body }) => {
          expect(body.data).toEqual(getExpectedStatusStructure());
        });
    });
  });
});
