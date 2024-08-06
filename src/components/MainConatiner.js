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
  return (
    <div>
      <div>
        <img
          className="w-100%  h-96 sm:w-[100%] sm:h-96 lg:w-[100%] lg:h-72 xl:w-[100%] xl:h-60  "
          src={bg}
          alt="bg_img"
        />
        <div className=" absolute top-[10%] left-[5%]">
          <div className="w-[95rem] h-[45rem] text-center rounded-xl text-white p-20 bg-custom-black">
            BOX
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
