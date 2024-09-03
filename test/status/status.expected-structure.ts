export const getExpectedStatusStructure = () =>
  expect.objectContaining({
    status: expect.objectContaining({
      status: "ok",
      info: expect.objectContaining({
        database: expect.objectContaining({
          status: "up",
        }),
      }),
      details: expect.objectContaining({
        database: expect.objectContaining({
          status: "up",
        }),
      }),
    }),
  });
