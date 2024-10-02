import Image from "next/image";

function Header4() {
  return (
    <>
      <div className="flex my-14 border-2 rounded border-gray-300 px-5 py-2 items-center">
        <Image
          src={"/fire.jpg"}
          alt="fire"
          width={200}
          height={200}
          className="w-32 h-32 rounded-full mr-4"
        />
        <div className="flex-grow text-xl">
          <p className="font-bold">Get access to exclusive deals</p>
          <p>Get access to exclusive deals</p>
        </div>
        <div className="flex ml-auto">
          <input
            type="email"
            placeholder="abc@gmail.com"
            className="border border-gray-300 p-2 rounded mr-2 w-80 h-14"
          />
          <button className="bg-red-500 text-white px-4 py-2 rounded w-40 h-14">
            Notify
          </button>
        </div>
      </div>
    </>
  );
}

export default Header4;
