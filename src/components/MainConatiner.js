import React, { useEffect, useState } from "react";
import bg from "../../src/assets/bg-cafe.jpg";
import svg from "../assets/Star.svg";
import star from "../assets/Star_fill.svg";

const MainContainer = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    ApiData();
  }, []);
  const ApiData = async () => {
    const data = await fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    );
    const json = await data.json();
    setData(json);
    console.log(json);
  };

  let datas = data[0];

  if (!datas) return "null";

  return (
    <div>
      <div>
        <img
          className="w-100% h-96 sm:w-[100%] sm:h-96 lg:w-[100%] lg:h-72 xl:w-[100%] xl:h-60  "
          src={bg}
          alt="bg_img"
        />
        <div className=" absolute top-[10%] left-[5%] sm:shrink-0">
          <div className="w-[500px] h-[65rem] xss:w-[250px] x:w-[300px] xs:w-[420px] sm:w-[560px] md:w-[700px] lg:w-[60rem] xl:w-[75rem] 2xl:w-[95rem]  text-center rounded-xl text-white p-20 bg-custom-black">
            <div className=" flex flex-col justify-center items-center">
              <div className="font-sans font-bold text-4xl text-wrap">
                Our Collections
              </div>
              <p className="font-sans font-medium text-lg text-wrap text-text-gray pt-5  max-w-[550px]">
                Introducing our Coffee Collection,a selection of unique coffees
                from different roast types and origins, expertly roasted in
                small batches and shipped fresh weekly.
              </p>
              <div className="pt-5 font-sans font-medium  text-nowrap">
                <label className=" p-3 bg-color-gray rounded-lg">
                  All Products
                </label>
                <label className="pl-8">Available Now</label>
              </div>
              <div className=" grid grid-cols-3 gap-12 p-4">
                {data.map((item) => (
                  <div className="pt-20">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt="api-data"
                        className="rounded-xl"
                      />
                      <p className="absolute top-0 left-0 text-black bg-yellow-300 pl-2 pr-2 p-1 m-2 font-sans font-semibold text-sm rounded-3xl">
                        {item.popular ? "Popular" : ''}
                      </p>
                    </div>
                    <div className="flex justify-between pt-3">
                      <h3 className="font-sans text-lg font-bold">
                        {item.name}
                      </h3>
                      <p className="bg-color-green rounded-md font-sans text-md text-black font-semibold p-1">
                        {item.price}
                      </p>
                    </div>
                    <div className="flex pt-2">
                      <img
                        src={star}
                        alt="Rating Icon"
                        className=" w-6 h-6 mr-2"
                      />
                      <p className="flex font-sans text-md font-medium">
                        {item.rating}
                      </p>
                      <p className="flex font-sans text-md font-semibold pl-2 text-color-gray">
                        ({item.votes} Votes)
                      </p>
                      <h3 className="font-sans font-semibold text-sm text-color-red">
                        {item.available ? "" : "Sold out"}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
