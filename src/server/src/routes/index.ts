import { Router } from "express";
import domainRouter from "./domain";

const router = Router();

const routes: { path: string; route: Router }[] = [
  { path: "/domain", route: domainRouter },
  // { path: "/domain2", route: domain2Router },
];

routes.forEach(({ path, route }) => router.use(path, route));

export default router;
