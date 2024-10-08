import connectDB from "@/db";
import Hotel from "@/models/hotel-model";

async function Index(req, res) {
  await connectDB(); // Ensure the DB is connected

  if (req.method === "GET") {
    try {
      const key = req.query.val;
      // Ensure `key` is an array for the $in query
      const facilitiesKey = Array.isArray(key) ? key : [key];

      // Query the database for hotels where facilities match the `key`
      const hotels = await Hotel.find({
        "facilities.name": { $in: facilitiesKey },
      });

      // Return the hotels data in the response
      return res.status(200).json({ msg: "Well done", hotels });
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
