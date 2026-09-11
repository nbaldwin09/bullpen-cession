import { loadHeadlines } from "../sports.mjs";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }
  if (req.method !== "POST" && req.method !== "GET") {
    res.status(405).end();
    return;
  }
  const q = req.query || {};
  const body = req.method === "GET" ? q : typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  res.setHeader("content-type", "application/json");
  res.status(200).json(await loadHeadlines());
}
