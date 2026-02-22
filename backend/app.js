require("dotenv").config({ path: "./.env.local" });
require("./router/passport");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const path = require("path");

function createLegacyApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.static(path.join(__dirname, "public")));
  app.use(express.urlencoded({ extended: false }));

  require("./model/Cart");
  require("./model/Favorite");
  require("./model/Order");
  require("./model/Order_Detail");
  require("./model/admin/Products");
  require("./model/Shipping_address");
  require("./model/Userinfo");
  require("./model/Transaction");
  require("./model/Contact");
  require("./model/admin/Admin");
  require("./model/admin/Categories");

  const publict = require("./router/view/_public");
  app.use("/public", publict);

  const auth = require("./router/auth/_auth");
  const admin = require("./router/auth/admin/_auth_admin");
  app.use("/auth", passport.authenticate("auth_usp", { session: false }), auth);
  app.use(
    "/admin",
    passport.authenticate("admin_auth_usp", { session: false }),
    admin
  );
  app.use(
    "/refresh/r_auth",
    passport.authenticate("authorized", { session: false }),
    async (req, res) => {
      res.status(200).json(req.user);
    }
  );
  app.use(
    "/admin_authRefreshToken/refresh_token",
    passport.authenticate("admin_authorized", { session: false }),
    async (req, res) => {
      res.status(200).json(req.user);
    }
  );

  const reset_password = require("./router/auth/password_reset");
  app.use(
    "/reset_password",
    passport.authenticate("reset_password_new", { session: false }),
    reset_password
  );

  return app;
}

module.exports = { createLegacyApp };

if (require.main === module) {
  const app = createLegacyApp();
  app.listen(process.env.DOTENV_PORT, () => {
    console.log(`successfully a port ${process.env.DOTENV_PORT}`);
  });
}
