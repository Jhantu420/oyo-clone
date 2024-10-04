import Image from "next/image";
import Link from "next/link";

function Hotel() {
  return (
    <>
      <div className="border-2 border-red-500 rounded-lg h-96 w-full mb-5 p-5">
        <div className="flex">
          {/* Large Image */}
          <Image
            src={
              "https://th.bing.com/th/id/R.25b86c23a77f0e94d5e909cc1b3bceff?rik=Djcc7WwfZAnIjA&riu=http%3a%2f%2fcache.marriott.com%2fmarriottassets%2fmarriott%2fSTFCT%2fstfct-guestroom-0045-hor-clsc.jpg%3finterpolation%3dprogressive-bilinear%26&ehk=Qfi1Qy2RPsgQGGJQ%2bDLh1pnflcQlURsqEc584MAYrZI%3d&risl=&pid=ImgRaw&r=0"
            }
            alt="Hotel room"
            width={200}
            height={200}
            className="w-96 h-large-box mr-5"
          />

          {/* Small Images stacked */}
          <div className="flex flex-col gap-2 w-96 ">
            <Image
              src={
                "https://th.bing.com/th/id/R.25b86c23a77f0e94d5e909cc1b3bceff?rik=Djcc7WwfZAnIjA&riu=http%3a%2f%2fcache.marriott.com%2fmarriottassets%2fmarriott%2fSTFCT%2fstfct-guestroom-0045-hor-clsc.jpg%3finterpolation%3dprogressive-bilinear%26&ehk=Qfi1Qy2RPsgQGGJQ%2bDLh1pnflcQlURsqEc584MAYrZI%3d&risl=&pid=ImgRaw&r=0"
              }
              alt="Hotel room"
              width={100}
              height={100}
              className="w-28 h-28"
            />
            <Image
              src={
                "https://th.bing.com/th/id/R.25b86c23a77f0e94d5e909cc1b3bceff?rik=Djcc7WwfZAnIjA&riu=http%3a%2f%2fcache.marriott.com%2fmarriottassets%2fmarriott%2fSTFCT%2fstfct-guestroom-0045-hor-clsc.jpg%3finterpolation%3dprogressive-bilinear%26&ehk=Qfi1Qy2RPsgQGGJQ%2bDLh1pnflcQlURsqEc584MAYrZI%3d&risl=&pid=ImgRaw&r=0"
              }
              alt="Hotel room"
              width={100}
              height={100}
              className="w-28 h-28"
            />
            <Image
              src={
                "https://th.bing.com/th/id/R.25b86c23a77f0e94d5e909cc1b3bceff?rik=Djcc7WwfZAnIjA&riu=http%3a%2f%2fcache.marriott.com%2fmarriottassets%2fmarriott%2fSTFCT%2fstfct-guestroom-0045-hor-clsc.jpg%3finterpolation%3dprogressive-bilinear%26&ehk=Qfi1Qy2RPsgQGGJQ%2bDLh1pnflcQlURsqEc584MAYrZI%3d&risl=&pid=ImgRaw&r=0"
              }
              alt="Hotel room"
              width={100}
              height={100}
              className="w-28 h-28"
            />
          </div>
          <div className="ml-10">
            <h2 className="font-bold text-xl line-clamp-1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellat, asperiores.
            </h2>
            <p className="text-justify my-5 text-l ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              nostrum et est dicta! Voluptatem consequuntur dolor culpa
              reprehenderit saepe nam laboriosam blanditiis dolores labore.
              Nesciunt vero asperiores voluptates ratione. Voluptates!
            </p>
            <p className="text-lg my-5">
              <span className="font-bold">Facilities</span>
              <span>Free wifi, Pet care, Swimming Pool, Beaches, Resort</span>
            </p>
            <div className="flex items-center">
              <button className="w-40 h-10 rounded-lg bg-blue-400 text-lg shadow-lg mr-6  hover:bg-blue-600  hover:text-white">
                Price: 4500
              </button>
              <Link href={'/hotels/2'} className="shadow-lg bg-gray-500 hover:bg-slate-600 p-2 rounded-xl text-white">Show Details</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hotel;
