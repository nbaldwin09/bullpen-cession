import { randomUUID } from "node:crypto";
import { findEq, insertTable } from "../sb.mjs";

function orgFromEmail(email) {
  const [user, domain] = email.split("@");
  if (!domain) return user || "desk";
  if (["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "icloud.com", "aol.com", "proton.me"].includes(domain)) return user;
  return domain.replace(/\.(com|io|net|org|co|ai)$/i, "");
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "content-type, x-desk-key");
  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }
  if (req.method === "GET") {
    const key = String(req.query.key || "");
    const row = key ? await findEq("desks", "key", key) : null;
    if (!row) {
      res.status(404).json({ error: "Desk not found." });
      return;
    }
    res.status(200).json(row);
    return;
  }
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }
  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  const email = String(body.email || "").trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    res.status(400).json({ error: "Need a real email." });
    return;
  }
  let row = await findEq("desks", "email", email);
  if (!row) {
    row = {
      id: "desk-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 8),
      email,
      key: "bc_" + randomUUID().replaceAll("-", ""),
      org: orgFromEmail(email),
      created_at: new Date().toISOString(),
    };
    await insertTable("desks", row);
    row = (await findEq("desks", "email", email)) || row;
  }
  res.status(200).json(row);
}
