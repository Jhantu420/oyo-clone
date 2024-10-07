import connectDB from "@/db";
import Hotel from "@/models/hotel-model";

async function Index(req, res) {
  await connectDB(); // Ensure the DB is connected

  if (req.method === "GET") {
    const { city } = req.query;

    try {
      // If city is provided, search by location, else return all hotels
      let hotels;
      if (city) {
        hotels = await Hotel.find({ locations: city });
      } else {
        hotels = await Hotel.find({}); // Fetch all hotels if no city is specified
      }

      // Return the results or a message if no hotels are found
      if (hotels.length > 0) {
        return res.status(200).json({ msg: "Good", hotels });
      } else {
        return res.status(404).json({ msg: "No hotels found for this location" });
      }
    } catch (error) {
      return res.status(500).json({ msg: "Server error", error: error.message });
    }
  } else {
    return res.status(405).json({ msg: "Method not allowed" });
  }
}

export default Index;


// import connectDB from "@/db";
// import Hotel from "@/models/hotel-model";

// async function Index(req, res) {
//   await connectDB();
// //   if (req.method === "POST") {
// //     const newHotel = new Hotel(req.body);

// //     // Save the new hotel to the database
// //     const result = await newHotel.save();

// //     // Send a success response
// //     res.status(200).json({ msg: "Hotel Added", result });
// //   }

//     if (req.method === 'GET'){
//       const hotels = await Hotel.find({location:req.query.city})
//       res.status(200).json({msg:"Good", hotels})
//     }
// }
