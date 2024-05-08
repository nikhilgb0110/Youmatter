const { Router } = require("express");
const { connectWithChatBot, clearChat } = require("../controllers/chat.js");
const { doAnalysis, getAnalysis } = require("../controllers/analysis.js");
const { userMiddleware } = require("../middlewares/genUserId.js");
const { signup, login, isUser, logout, signinwithGoogle } = require("../controllers/user.js");

const router = Router();
router.route("/cron").get((req, res) => {
  res.status(200).json({ message: "hello" });
});
router.route("/chat").get(userMiddleware, connectWithChatBot);
router.route("/clearchat").post(userMiddleware, clearChat);
router.route("/analysis").get(userMiddleware, doAnalysis);
router.route("/fetchanalysis").get(userMiddleware, getAnalysis);
router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/isUser").get(isUser);
router.route("/logout").get(logout);
router.route("/signinwithgoogle").post(signinwithGoogle)

module.exports = router;
