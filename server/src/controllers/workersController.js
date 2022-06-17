import Worker from "../models/Worker.js";
import { logError } from "../util/logging.js";

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
  try {
    const regex = new RegExp(`${req.body.city}`, "i");
    const workers = await Worker.find({
      occupationId: { $in: req.body.occupationIds },
      city: { $regex: regex },
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
