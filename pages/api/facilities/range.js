import connectDB from "@/db";
import Hotel from "@/models/hotel-model";

async function Index(req, res) {
  await connectDB(); // Ensure the DB is connected

  if (req.method === "GET") {
    try {

      // Query the database for hotels where the price is less than or equal to the provided price
      const hotels = await Hotel.find({
        price: { $lte:req.query.price },
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
