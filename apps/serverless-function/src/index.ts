import { HttpFunction } from "@google-cloud/functions-framework";
import { createDbClient } from "@repo/db";

const handler: HttpFunction = (__, res) => {
  const db = createDbClient(process.env.DATABASE_URL || "");
  const result = db.query.testTable.findFirst();

  res.send(result);
};

export { handler };
