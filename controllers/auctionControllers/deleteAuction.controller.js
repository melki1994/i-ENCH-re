const Auction = require("../../models/Auction");

module.exports = {
  async deleteAuction(req, res) {
    try {
      const { id } = req.params;
      const existingAuction = await Auction.findById(id);
      if (existingAuction) {
        await Auction.findByIdAndRemove(id);
        res
          .status(200)
          .json({ status: true, message: "The auction was removed" });
      } else {
        res.status(404).json({ status: false, message: "Auction Not Found" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ status: false, message: err });
    }
  },
};
