import Broadcast from "../models/broadcast.model.js";

export const createBroadcast = async (req, res) => {
  try {
    const { subject, message, document, senderId, senderName } = req.body;

    if (!subject || !message || !senderId || !senderName) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newBroadcast = new Broadcast({
      subject,
      message,
      document,
      senderId,
      senderName
    });

    await newBroadcast.save();
    res.status(201).json(newBroadcast);

  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export const getBroadcasts = async (req, res) => {
  try {
    const broadcasts = await Broadcast.find().sort({ createdAt: -1 });
    res.status(200).json(broadcasts);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
