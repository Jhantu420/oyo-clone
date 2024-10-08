const Header2 = () => {
  const List = [
    {
      name: "Bangalore",
    },
    {
      name: "Culcutta",
    },
    {
      name: "Mumbai",
    },
    {
      name: "Delhi",
    },
    {
      name: "Hyderabad",
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap px-4 py-3 bg-gray-100 justify-between sm:px-6 md:px-10">
        {List.map((e) => {
          return (
            <span
              key={e.name}
              className="text-sm md:text-base lg:text-lg py-1 px-3 text-gray-700"
            >
              {e.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Header2;
