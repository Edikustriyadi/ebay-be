import express from "express";
import ebayService from "../services/ebay.service.js";

const router = express.Router();

export default function ebayRouter() {
  return router
    .get("/", (req, res) => {
      res.json("test");
    })
    .post("/search", async (req, res) => {
      const result = await ebayService.keywordSearch(req.body);
      res.json(result);
    });
  // .post("/search_by_image", (req, res) => {
  //   ebayService
  //     .imageSearch(req.body)
  //     .then((response) => {
  //       res.status(200).send(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       res.status(500);
  //     });
  // })
}
