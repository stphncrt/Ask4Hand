import Worker from "../models/Worker.js";
import { logError } from "../util/logging.js";
import { distanceMatrix } from "../api/distanceMatrix.js";

export const getWorkers = async (req, res) => {
  const regex = new RegExp(`${req.body.city}`, "i");
  let filteredWorkers;
  try {
    const workers = await Worker.find({
      occupationId: { $in: req.body.occupationIds },
    }).sort({ hourlyRate: 1 });

    if (req.body.city) {
      const workersWithDistance = await Promise.all(
        workers.map(async (worker) => {
          const distance = await distanceMatrix(regex, worker.city);
          const newWorker = await { ...worker, distance };

          return await newWorker;
        })
      );
      filteredWorkers = workersWithDistance
        .filter((worker) => {
          if (worker._doc.workRange >= worker.distance) {
            return worker;
          }
        })
        .map((worker) => {
          const workerWithDistance = worker._doc;
          return { ...workerWithDistance, distance: worker.distance };
        });
    } else {
      filteredWorkers = workers;
    }

    res.status(200).json({
      success: true,
      result: filteredWorkers,
    });
  } catch (error) {
    logError(error);
    res.status(500).json({
      success: false,
      msg: "Could not to get workers, try again later",
    });
  }
};
