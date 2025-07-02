import { useEffect, useState } from "react";
import StickyBottomNav from "../components/stickyNavv";
// import BottomNav from "./stickyNav";


const transactions = [
  {
    date: "Processing",
    description: "CHECKARD 01/11GOOGLE *TEMPORARY HOLD.CO/ HELPPAY# NS",
    amount: "-$1.60",
    balance: "$8,765.43",
    type: "debit",
  },
  {
    date: "Processing",
    description: "MTA*METROCARD 01/10 PURCHASE NEW YORK NY",
    amount: "-$20.00",
    balance: "$8,767.03",
    type: "debit",
  },
  {
    date: "Jan 10, 2022",
    description: "Zelle Transfer Conf# c1vt2zz; JANE, CHUNG",
    amount: "$1,500.00",
    balance: "$8,787.03",
    type: "credit",
  },
  {
    date: "Jan 10, 2022",
    description: "THE TORONTO-DOMI DES: PAYMENT ID: 123458910 PMT INFO: DEP",
    amount: "$285.00",
    balance: "$7,267.03",
    type: "credit",
  },
];

const TransactionHistory = () => {

  const [userAmount, setUserAmount] = useState<number>(0);


    useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserAmount(user.amount || 0);
      ;
    }
  }, []);



  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-8 p-4">
      <div className="text-center">
        <h2 className="text-lg font-semibold">ADV PLUS BANKING - 1234</h2>
       
      <div className="flex gap-2 justify-center">
  {" "}
  <p className="text-2xl font-bold"> {new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(userAmount)}</p>
 
</div>
        <p className="text-sm text-gray-500">Available balance</p>
      </div>

      <div className="mt-6">
        <h3 className="text-gray-600 font-semibold text-sm mb-2">RECENT TRANSACTIONS</h3>
        <div className="space-y-4">
          {transactions.map((tx, index) => (
            <div key={index} className="border-b pb-2">
              <p className="text-xs text-gray-500">{tx.date}</p>
              <p className="text-sm font-medium text-gray-800">{tx.description}</p>
              <div className="flex justify-between items-center mt-1">
                <span className={`font-semibold ${tx.type === "debit" ? "text-red-500" : "text-blue-600"}`}>
                  {tx.amount}
                </span>
                <span className="text-xs text-gray-400">
  {new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(userAmount)}
</span>
   </div>
            </div>
          ))}
        </div>
      </div>
      {/* <BottomNav/> */}
      <StickyBottomNav/>
    </div>
  );
};

export default TransactionHistory;
