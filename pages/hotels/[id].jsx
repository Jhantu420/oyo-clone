import Image from "next/image";

function SingleHotel() {
  return (
    <>
      <div className="w-8/12 mx-auto my-5">
        <Image
          src={
            "https://th.bing.com/th/id/R.25b86c23a77f0e94d5e909cc1b3bceff?rik=Djcc7WwfZAnIjA&riu=http%3a%2f%2fcache.marriott.com%2fmarriottassets%2fmarriott%2fSTFCT%2fstfct-guestroom-0045-hor-clsc.jpg%3finterpolation%3dprogressive-bilinear%26&ehk=Qfi1Qy2RPsgQGGJQ%2bDLh1pnflcQlURsqEc584MAYrZI%3d&risl=&pid=ImgRaw&r=0"
          }
          alt="Hotel room"
          width={2000}
          height={2000}
          className=" h-96 my-5 "
        />
        <div>
          <h3 className="text-3xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            mollitia perferendis sed eligendi consequuntur?
          </h3>
          <p className="text-l my-5 text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
            consequatur hic facilis laboriosam nihil totam libero natus neque
            recusandae dignissimos consequuntur facere nisi veniam nemo
            assumenda molestiae laborum, voluptate doloremque!. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Recusandae optio,
            incidunt vel earum, eveniet praesentium delectus minima hic
            quisquam, nemo blanditiis quidem atque dignissimos? Architecto quod
            perferendis commodi magnam hic?
          </p>
          <button className="w-40 h-10 rounded-lg bg-blue-400 text-lg shadow-lg mr-6  hover:bg-blue-600  hover:text-white">
            Price: 4500
          </button>
          <p className="text-2xl font-bold my-5">Facilities</p>
          <ul className="flex justify-between text-lg">
            <li>Swimming Pool</li>
            <li>Wifi</li>
            <li>AC</li>
            <li>Garden</li>
            <li>Music</li>
          </ul>
          <button className="w-40 h-10 rounded-lg bg-red-400 text-lg shadow-lg mr-6  hover:bg-red-600 hover:text-white my-5">
            Book Now
          </button>
        </div>
      </div>
    </>
  );
}

export default SingleHotel;
