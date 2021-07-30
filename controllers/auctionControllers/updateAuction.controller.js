const Auction = require("../../models/Auction");

module.exports = {
  async updateAuction(req, res) {
    try {
      let auction = req.body;
      let { id } = req.params;
      let updatedAuction = await Auction.findByIdAndUpdate(
        id,
        {
          $set: { ...auction },
        },
        { new: true }
      );
      res.status(200).json({
        status: true,
        message: " Auction updated successfully",
        data: updatedAuction,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ status: false, err });
    }
  },
};
