const multer = require("multer");
const sharp = require("sharp");

// store image to disk
const multerstorage = multer.memoryStorage();
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(console.log("Not an image!"), false);
  }
};

const upload = multer({
  storage: multerstorage,
  fileFilter: multerFilter,
});

exports.uploadAuctionImages = upload.fields([
  { name: "imageCover", maxCount: 1 },
  { name: "images", maxCount: 20 },
]);

exports.customAuctionImages = async (req, res, next) => {
  if (!req.files.imageCover || !req.files.images) return next();
  // 1-cover Image
  req.body.imageCover = `auctionCover-${req.params.id}-${new Date()
    .toISOString()
    .slice(0, 19)
    .replace("T", " ")
    .replace(/:/g, "-")}.jpeg`;
  await sharp(req.files.imageCover[0].buffer)
    .resize(2000, 1333)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`uploads/${req.body.imageCover}`);

  //  2- Images
  req.body.images = [];

  await Promise.all(
    req.files.images.map(async (file, i) => {
      const filename = `auctionBody-${req.params.id}-${new Date()
        .toISOString()
        .slice(0, 19)
        .replace("T", " ")
        .replace(/:/g, "-")}-${i + 1}.jpeg`;

      await sharp(req.files.imageCover[0].buffer)
        .resize(2000, 1333)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`uploads/${filename}`);

      req.body.images.push(filename);
    })
  );
  console.log();
  next();
};
