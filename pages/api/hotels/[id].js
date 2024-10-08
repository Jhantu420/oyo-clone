import connectDB from "@/db";
import Hotel from "@/models/hotel-model";

async function Index(req, res) {
  await connectDB(); // Ensure the DB is connected

  if (req.method === "GET") {
    if(req.query.id){
        const hotel = await Hotel.findById(req.query.id)
        res.status(200).json({ msg: "Good", hotel });
    }
}
}

export default Index;
