const User = require("../models/Users.model");
const Role = require("../models/Roles.model");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");

module.exports.userController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (e) {
      console.log(e);
    }
  },

  deleteUsers: async (req, res) => {
    try {
      const user = await User.findByIdAndRemove(req.params.id);
      res.status(200).json("Пользователь удален");
    } catch (error) {
      res.status(401).json({ error: "Ошибка при удалении" });
    }
  },

  createRoles: async (req, res) => {
    try {
      const { value } = req.body;
      const role = await Role.create({ value });
      res.json(role);
    } catch (error) {
      console.log(error);
    }
  },

  registerUser: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(401).json({ error: "Ошибка при регистрации" });
      }
      const { usersName, email, nickName, password } = req.body;

      const candidate = await User.findOne({ email });

      if (candidate) {
        return res.status(401).json({
          error: `Этот адрес электронной почты ${email} уже существует`,
        });
      }

      const hash = await bcrypt.hash(
        password,
        Number(process.env.BCRYPT_ROUNDS)
      );
      const userRole = await Role.findOne({ value: "USER" });
      const user = await User.create({
        usersName,
        email,
        nickName,
        password: hash,
        roles: [userRole.value],
      });
      await user.save();
      res.json({ error: "Пользователь успешно зарегистрирован" });
    } catch (error) {
      console.log(error);
      res.status(401).json({ error: "Ошибка регистрации" });
    }
  },

  loginUser: async (req, res) => {
    try {
      const { nickName, email, password } = req.body;

      if ((!!email && !!nickName) || (!email && !nickName)) {
        return res.status(401).json({
          error: "Следует указать адрес электронной почты, либо логин.",
        });
      }
      const candidate = await User.findOne(email ? { email } : { nickName });

      if (!candidate) {
        return res
          .status(401)
          .json({ error: "Учетные данные недействительны!" });
      }
      const valid = await bcrypt.compare(password, candidate.password);

      if (!valid) {
        return res.status(401).json({ error: "Неверный пароль" });
      }

      //   const basket = await Basket.findOne({ userId: candidate._id });
      //   if (basket === null) {
      //     await Basket.create({ userId: candidate._id });
      //   }
      //   console.log("basket", basket);

      const payload = {
        id: candidate._id,
        nickName: candidate.nickName,
        email: candidate.email,
        roles: candidate.roles,
        // basket: basket._id,
      };
      const token = await jsonwebtoken.sign(
        payload,
        process.env.SECRET_JWT_KEY,
        {
          expiresIn: "24h",
        }
      );
      res.json(token);
    } catch (error) {
      console.log(error);
    }
  },
};
