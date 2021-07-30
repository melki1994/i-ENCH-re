const services = require("../../services");
const seller = require("..");
module.exports = {
  async createRequest(req, res) {
    try {
      let {
        _id,
        firstName,
        lastName,
        companyName,
        email,
        phoneNumber,
        fullAdress,
        website,
        offerDescription,
      } = req.body;

      const newAuction =
        await services.sellerServices.createRequest.createRequest(
          firstName,
          lastName,
          companyName,
          email,
          phoneNumber,
          fullAdress,
          website,
          offerDescription
        );

      res.status(201).json({
        status: true,
        message: "A new partnership Request has been created",
        data: newAuction,
      });
    } catch (err) {
      res.status(500).json({ status: false, message: err });
    }
  },
};
