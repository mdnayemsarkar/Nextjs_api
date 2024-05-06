"use client";
import React from "react";
import axios from "axios";
import { useState } from "react";
const Card = () => {
//   const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/home-api");
      console.log( response.data);
    //   setError(null);
    } catch (error) {
      console.error("Error fetching data:", error);
    //   setError("Error fetching data");
    }
  };

  return (
    <>
      {/* <div className="flex justify-center items-center min-w-96">
        <div className="px-24 py-12 will-change-contents shadow-2xl border bg-red-300 shadow-blue-50 rounded-xl mt-11">
          <div className="mb-14 flex gap-3">
            <div className="bg-[#EA2027] w-2 "> </div>
            <div className="bg-[#1B1464] w-2 "> </div>
            <div>
              <p className="text-4xl  font-extrabold">Afarmer</p>
              <p className="text-xs text-gray-400">
                Finding the right apartment
              </p>
            </div>
          </div>
          <div className="py-8">
            {" "}
            <p className="text-3xl mb-3 font-semibold">
              Christmas special
            </p>{" "}
            <p className="text-6xl font-bold">25% off</p>
          </div>
          <div>
            <div className="">
              {" "}
              <button
                type="submit"
                onClick={fetchData}
                className="mb-7 border rounded-md bg-[#EA2027] h-12 w-80 mt-3 text-white font-medium"
              >
                <p className="text-center pl-5">UPGRADE YOUR ROOM</p>
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Card;
