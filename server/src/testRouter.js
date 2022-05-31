/* import express from "express";
import mongoose from "mongoose";
import Worker, { validateUser } from "./models/Worker.js";

import { logError } from "./util/logging.js";
import validationErrorMessage from "./util/validationErrorMessage.js";

const testRouter = express.Router();

testRouter.post("/seed", async (req, res) => {
  if (!process.env.MONGODB_URL.includes("cypressDatabase")) {
    const msg =
      "The database you are trying to seed is not the cypress database! Did you forget to change your .env variable?";
    logError(msg);

    res.status(400).json({
      sucess: false,
      msg,
    });
  } else {
    await emptyDatabase();

    const data = {
      workers: [
        {
          name: "Rob",
          email: "rob@hackyourfuture.net",
        },
      ],
    };

    // Validate users to the database
    data.workers.forEach((worker) => {
      const errorList = validateUser(worker);

      if (errorList.length > 0) {
        const err = new Error(
          `Invalid user in seed data. Errors: ${validationErrorMessage(
            errorList
          )}. User attempting to be inserted: ${JSON.stringify(worker)}`
        );

        logError(err);
        throw err;
      }
    });

    // Add users to the database
    await Worker.create(data.workers);

    // Fetch to add to the return
    const finalWorkers = await Worker.find();

    res.status(201).json({
      success: true,
      data: {
        workers: finalWorkers,
      },
    });
  }
});

const emptyDatabase = async () => {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany({});
  }
};

export default testRouter;
 */
