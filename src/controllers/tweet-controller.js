import TweetService from "../services/tweet-service.js";

import upload from "../config/file-upload-s3-config.js";

const singleUploader = upload.single("image");

const tweetService = new TweetService();

export const createTweet = async (req, res) => {
  try {
    singleUploader(req, res, async function (err, data) {
      if (err) {
        return res.status(500).json({ error: err });
      }
      console.log("Image URL", req.file);
      const payload = { ...req.body };
      payload.image = req.file.location;
      const tweet = await tweetService.create(payload);
      return res.status(201).json({
        success: true,
        message: "Successfully created a Tweet",
        err: {},
        data: tweet,
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      err: error,
      data: {},
    });
  }
};

export const getTweet = async (req, res) => {
  try {
    const tweet = await tweetService.get(req.params.id);
    return res.status(200).json({
      success: true,
      message: "Successfully fetched a Tweet",
      err: {},
      data: tweet,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      err: error,
      data: {},
    });
  }
};
