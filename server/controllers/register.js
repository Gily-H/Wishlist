import Register from "../models/registerModel.js";

const saveNewUser = async (req, res) => {
	const userNameReg = req.body.username;
	const emailReg = req.body.email;
	const passwordReg = req.body.password; // requires hashing implementation

	const userExists = await Register.findOne({ username: userNameReg });
	if (userExists) return res.status(400).send("Username already exists");

	const newRegister = new Register({
		username: userNameReg,
		email: emailReg,
		password: passwordReg,
	});

	newRegister
		.save()
		.then(() => res.send("New user registered"))
		.catch((err) => res.status(400).json("Error: " + err));
};

export default { saveNewUser };
