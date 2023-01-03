const router = require("express").Router();
const { User } = require("../../models");

router.get("/", async (req, res) => {
  res.render(
    "login" /* , {
    loggedIn: req.session.loggedIn,
  } */
  );
});

router.post("/", async (req, res) => {
  try {
    const newUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      location: req.body.location,
    });
    /* req.session.save(() => {
      req.session.loggedIn = true; */
    res.status(200).json(newUserData);
    /*  const userLogin = await User.findOne({
      where: { username: req.body.username },
    });

    if (!userLogin) {
      res
        .status(400)
        .json({
          message: "Username or password is incorrect. Please try again",
        });
      return;
    }

    const passwordCheck = await userLogin.checkPassword(req.body.passwordCheck);
    if (!passwordCheck) {
      res
        .status(400)
        .json({
          message: "Username or password is incorrect. Please try again",
        });
      return;
    }
    res.session.save(() => {
      req.session.loggedIn = true
      res.status(200).json({ message: `${userLogin} is now logged in` });
    }) */
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
