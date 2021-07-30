const router = require("express").Router();
const controllers = require("../../controllers");
const { auth, restrictTo } = require("../../middlewares/auth");
const {
  uploadAuctionImages,
  customAuctionImages,
} = require("../../middlewares/upload");

router.post(
  "/createAuction",
  auth,
  restrictTo("admin"),
  uploadAuctionImages,
  customAuctionImages,
  controllers.auctionControllers.create.createAuction
);

router.get("/getAuctions", controllers.auctionControllers.get.getAuctionList);

router.delete(
  "/deleteAuction/:id",
  auth,
  restrictTo("admin"),
  controllers.auctionControllers.delete.deleteAuction
);

router.put(
  "/updateAuction/:id",
  auth,
  restrictTo("admin"),
  uploadAuctionImages,
  customAuctionImages,
  controllers.auctionControllers.update.updateAuction
);

module.exports = router;
