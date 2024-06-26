import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';


export const updateUser = async (req, res) => {
  if (req.user.id !== req.params.userId) {
    return res.status(403).json({ message: 'Forbidden' });
  }
  try {
    if (req.body.password) {
      if (req.body.password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters long' });
      }
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(req.user.id,
      {
        $set: {
          password: req.body.password,
          avatar: req.body.avatar
        }
      },
      { new: true }
    );

    const { password, ...rest } = updatedUser._doc;

    res.status(200).json(rest);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}


export const deleteUser = async (req, res) => {
  if (req.user.id !== req.params.id) {
    return res.status(403).json({ message: 'Forbidden' });
  }
  try {
    await User.findByIdAndDelete(req.params.id);
    res.clearCookie('nextestate_token');
    res.status(200).json({});
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
