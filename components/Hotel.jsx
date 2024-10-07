import Image from "next/image";
import Link from "next/link";

function Hotel({ e }) {
  return (
    <div className="border-2 rounded-lg h-96 w-full mb-5 p-5">
      <div className="flex">
        {/* Large Image */}
        {e?.banner && (
          <Image
            src={e.banner}
            alt="Hotel room"
            width={2000}
            height={2000}
            className="w-4/12 h-large-box mr-5"
          />
        )}

        {/* Small Images stacked */}
        <div className="flex flex-col gap-2 w-96">
          {e?.gallery?.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Gallery image of ${e.name}`}
              width={2000}
              height={2000}
              className="w-28 h-28"
            />
          ))}
        </div>

        <div className=" border ">
          <h2 className="font-bold text-xl line-clamp-1">{e?.name}</h2>
          <p className="text-justify my-5 text-l ">{e?.description}</p>

          {/* Facilities */}
          <div className="text-lg my-5">
            <span className="font-bold">Facilities:</span>
            <ul className="flex flex-wrap">
              {e?.facilities?.map((ele) => {
                return (
                  <li
                    key={ele.name}
                    className="flex items-center mr-10 mb-3"
                  >
                    <Image
                      src={ele.img}
                      alt="logo"
                      width={20}  // Adjusted size for the logo
                      height={20}
                      className="rounded-full w-7 h-7"
                    />
                    <span className="ml-2">{ele.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex items-center">
            <button className="w-40 h-10 rounded-lg bg-blue-400 text-lg shadow-lg mr-6 hover:bg-blue-600 hover:text-white">
              Price: {e?.price || 4500} {/* Default price if not available */}
            </button>
            <Link
              href={`/hotels/${e?._id}`}
              className="shadow-lg bg-gray-500 hover:bg-slate-600 p-2 rounded-xl text-white"
            >
              Show Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotel;
