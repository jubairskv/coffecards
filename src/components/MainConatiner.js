import React, { useEffect, useState } from "react";
import bg from "../../src/assets/bg-cafe.jpg";

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
          className="w-100%  h-96 sm:w-[100%] sm:h-96 lg:w-[100%] lg:h-72 xl:w-[100%] xl:h-60  "
          src={bg}
          alt="bg_img"
        />
        <div className=" absolute top-[10%] left-[5%] sm:shrink-0">
          <div className="w-[500px] h-[45rem] xss:w-[250px] x:w-[300px] xs:w-[420px] sm:w-[560px] md:w-[700px] lg:w-[60rem] xl:w-[75rem] 2xl:w-[95rem]  text-center rounded-xl text-white p-20 bg-custom-black">
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
              <div className="pt-20">
                <img src={datas.image} alt="api-data" className="rounded-xl" />
                <p>{datas.popular ? "Popular" : ""}</p>
                <h3>{datas.name}</h3>
                <p>Price: {datas.price}</p>
                <p>
                  Rating: {datas.rating} ({datas.votes} Votes)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
