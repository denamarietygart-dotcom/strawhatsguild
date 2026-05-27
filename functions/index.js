const { onRequest } = require("firebase-functions/v2/https");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const { getAuth } = require("firebase-admin/auth");
const express = require("express");
const cors = require("cors");

initializeApp();

const db = getFirestore();
const auth = getAuth();
const app = express();

app.use(cors({ origin: ["https://thestrawhatsguild.com", "http://localhost:5000"] }));
app.use(express.json());

// Middleware: verify Firebase Auth token
async function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.split("Bearer ")[1] : null;
  if (!token) return res.status(401).json({ error: "Unauthorized" });
  try {
    req.user = await auth.verifyIdToken(token);
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
}

// GET /api/members — fetch all guild members (auth required)
app.get("/members", verifyToken, async (req, res) => {
  try {
    const snapshot = await db.collection("members").orderBy("joinedAt", "desc").get();
    const members = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(members);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/members — add a new guild member (auth required)
app.post("/members", verifyToken, async (req, res) => {
  try {
    const { name, rank, role } = req.body;
    if (!name || !rank) return res.status(400).json({ error: "name and rank are required" });
    const doc = await db.collection("members").add({
      name,
      rank,
      role: role || "Member",
      joinedAt: new Date().toISOString(),
      addedBy: req.user.uid
    });
    res.status(201).json({ id: doc.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/health — public health check
app.get("/health", (req, res) => {
  res.json({ status: "ok", project: "thestrawhatsguild" });
});

exports.api = onRequest({ region: "us-central1" }, app);
