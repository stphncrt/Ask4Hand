import Worker from "../models/Worker.js";
import { logError } from "../util/logging.js";
import { distanceMatrix } from "../api/distanceMatrix.js";

export const getWorkersBySearch = async (req, res) => {
  try {
    const workers = await Worker.find({
      occupationId: { $in: req.body.occupationIds },
    }).sort({ hourlyRate: 1 });
    res.status(200).json({
      success: true,
      result: workers,
    });
  } catch (error) {
    logError(error);
    res.status(500).json({
      success: false,
      msg: "Could not to get workers, try again later",
    });
  }
};

export const getWorkersByFilter = async (req, res) => {
  const regex = new RegExp(`${req.body.city}`, "i");
  try {
    const workers = await Worker.find({
      occupationId: { $in: req.body.occupationIds },
      city: { $regex: regex },
    }).sort({ hourlyRate: 1 });
    res.status(200).json({
      success: true,
      result: workers,
    });
    const distance = await distanceMatrix();
    console.log(distance);
  } catch (error) {
    logError(error);
    res.status(500).json({
      success: false,
      msg: "Could not to get workers, try again later",
    });
  }
};
