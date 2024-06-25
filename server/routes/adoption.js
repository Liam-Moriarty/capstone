import express from "express";

import { getAdoption, sendAdoption } from "../controller/adoption.js";

const router = express();

router.get("/adoption", getAdoption);

router.post("/createAdoption", sendAdoption);

export default router;
