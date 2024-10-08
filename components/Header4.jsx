import Image from "next/image";

function Header4() {
  return (
    <>
      <div className="flex flex-col md:flex-row my-14 border-2 rounded border-gray-300 px-5 py-4 items-center">
        {/* Image Section */}
        <Image
          src={"/fire.jpg"}
          alt="fire"
          width={200}
          height={200}
          className="w-20 h-20 md:w-32 md:h-32 rounded-full mb-4 md:mb-0 md:mr-4"
        />

        {/* Text Section */}
        <div className="flex-grow text-lg md:text-xl text-center md:text-left">
          <p className="font-bold">Get access to exclusive deals</p>
          <p>Get access to exclusive deals</p>
        </div>

        {/* Input and Button Section */}
        <div className="flex flex-col md:flex-row ml-0 md:ml-auto mt-4 md:mt-0 items-center">
          <input
            type="email"
            placeholder="abc@gmail.com"
            className="border border-gray-300 p-2 rounded mr-0 md:mr-2 w-full md:w-80 h-12 md:h-14"
          />
          <button className="bg-red-500 text-white px-4 py-2 rounded w-full md:w-40 h-12 md:h-14 mt-2 md:mt-0">
            Notify
          </button>
        </div>
      </div>
    </>
  );
}

export default Header4;
