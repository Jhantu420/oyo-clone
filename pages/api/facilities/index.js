import connectDB from "@/db";
import Hotel from "@/models/hotel-model";

async function Index(req, res) {
  await connectDB(); // Ensure the DB is connected

  if (req.method === "GET") {
    try {
      const facilities = await Hotel.find({}).distinct('facilities.name');
      return res.status(200).json({ msg: "Well done",  facilities});
    } catch (error) {
      return res
        .status(500)
        .json({ msg: "Server error", error: error.message });
    }
  } else {
    return res.status(405).json({ msg: "Method not allowed" });
  }
}

export default Index;
