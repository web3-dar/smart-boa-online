import React, { useEffect, useState } from "react";
import { FaEnvelope, FaShoppingCart, FaSignOutAlt, FaBars } from "react-icons/fa";
import {  TbZzz, TbWorld } from "react-icons/tb";
import { FaMoneyBillWave } from "react-icons/fa6";
import StickyBottomNav from "../components/stickyNavv";
import { Link } from "react-router-dom";
// import BottomNav from "./stickyNav";

const TransferOptions: React.FC = () => {
 const [userName, setUserName] = useState<string>("");
const [userAmount, setUserAmount] = useState<number>(0);
 
      useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      const user = JSON.parse(storedUser);
     
      setUserName(user.firstName || "");
      setUserAmount(user.amount || 0);
    }
  }, []);


  



  return (
    <div className="max-w-sm mx-auto p-4 bg-white min-h-screen space-y-4 font-sans">
      {/* Top Menu */}
      <div className="flex justify-between items-center text-xs text-gray-600">
        <div className="flex items-center space-x-1">
          <FaBars />
          <span>Menu</span>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1">
            <FaEnvelope />
            <span>Inbox</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaShoppingCart />
            <span>Products</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaSignOutAlt />
            <span>Log Out</span>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="bg-gray-100 rounded-full px-4 py-2 text-sm flex items-center">
        <input
          type="text"
          placeholder={`Hi, ${userName}. How can I help?`}
          className="bg-transparent w-full outline-none"
        />
        <div className="text-red-600 text-lg font-bold">☰</div>
      </div>


      <div className="flex gap-2">
  Available balance:{" "}
  <p className="text-2xl font-bold"> {new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(userAmount)}</p>
 
</div>


      {/* 4 Options */}
      <div className="grid grid-cols-2 gap-3 bg-white p-2 rounded-lg shadow">
        {/* Transfer */}
      <Link to={'/send'}>  <div className="flex flex-col items-center justify-center border p-4 rounded-lg cursor-pointer relative">
          
         
          <p className="text-blue-600 font-medium mt-4">Transfer</p>
          <p className="text-xs text-gray-500 text-center">between my accounts</p>
        </div> </Link>

        {/* Zelle */}
           <Link to={'/zelle'}> 
        <div className="flex flex-col items-center justify-center border p-4 rounded-lg cursor-pointer">
          <TbZzz className="text-purple-600 text-2xl" />
          <p className="text-purple-600 font-medium">Zelle®</p>
          <p className="text-xs text-gray-500 text-center">send or receive</p>
        </div>
        </Link>

        {/* Pay Bills */}

           <Link to={'/billpay'}> 
        <div className="flex flex-col items-center justify-center border p-4 rounded-lg cursor-pointer">
          <FaMoneyBillWave className="text-blue-600 text-2xl" />
          <p className="text-blue-600 font-medium">Pay Bills</p>
          <p className="text-xs text-gray-500 text-center">pay now or schedule</p>
        </div>
        </Link>

        {/* Wire */}
        <div className="flex flex-col items-center justify-center border p-4 rounded-lg cursor-pointer">
          <TbWorld className="text-blue-600 text-2xl" />
          <p className="text-blue-600 font-medium">Wire</p>
          <p className="text-xs text-gray-500 text-center">U.S. or international</p>
        </div>
      </div>
      <StickyBottomNav/>
      {/* <BottomNav/> */}
    </div>
  );
};

export default TransferOptions;
