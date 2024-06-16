import { Router } from "express";
import fileRoutes from "./fileRoutes";

const router = Router();

router.use("/", fileRoutes);

export default router;
