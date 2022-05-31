import Worker /* , { validateUser } */ from "../models/Worker.js";
import { logError } from "../util/logging.js";
//import validationErrorMessage from "../util/validationErrorMessage.js";

export const createWorker = async (req, res) => {
  const worker = new Worker(req.body);
  try {
    const savedWorker = await worker.save();
    res.status(200).json({ success: true, result: savedWorker });
  } catch (error) {
    logError(error);
    res.status(500).json({
      success: false,
      msg: "Unable to create worker, try again later",
    });
  }
};

export const loginWorker = async (req, res) => {
  const worker = new Worker(req.body);
  try {
    const savedWorker = await worker.save();
    res.status(200).json({ success: true, result: savedWorker });
  } catch (error) {
    logError(error);
    res.status(500).json({
      success: false,
      msg: "Unable to login, try again later",
    });
  }
};

/* 

      const errorList = validateUser(user);

    if (errorList.length > 0) {
      res
        .status(400)
        .json({ success: false, msg: validationErrorMessage(errorList) });
    } else {
      const newUser = await User.create(user);

      res.status(201).json({ success: true, user: newUser });
    } 
    
  } catch (error) {
    logError(error);
    res.status(500).json({
      success: false,
      msg: "Unable to create worker, try again later",
    });
  }
};

*/
