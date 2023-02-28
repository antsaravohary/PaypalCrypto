import React from "react";
import { CardList, LIST_CARD } from "../CryptoCard/CardList";

export const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  const [activeTab1, setActiveTab1] = React.useState(true);
  const [activeTab2, setActiveTab2] = React.useState(false);
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <div className="w-full">
          <ul
            className="flex list-none flex-wrap justify-evenly"
            role="tablist"
          >
            <li className=" text-center bg-[#191919] rounded w-[45%]">
              <span
                className={`text-xs font-bold uppercase  px-5 py-3 shadow-lg rounded block leading-normal ${activeTab1 ? "text-[#f5cb5c]" : "text-white"
                  } `}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                  setActiveTab1(true);
                  setActiveTab2(false);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Crypto monnaie
              </span>
            </li>
            <li className="  text-center bg-[#191919] rounded w-[45%]">
              <span
                className={`text-xs font-bold uppercase  px-5 py-3 shadow-lg rounded block leading-normal ${activeTab2 ? "text-[#f5cb5c]" : "text-white"
                  } `}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);

                  setActiveTab1(false);
                  setActiveTab2(true);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Crypto-fan
              </span>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white 	 mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div
                  className={openTab === 1 ? "block flex flex-wrap justify-center" : "hidden"}
                  id="link1"
                >
                  {
                    LIST_CARD.map(function (list, i) {
                      return <CardList {...list} key={i} />
                    })
                  }

                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>Crypto-fan sera bientôt opérationnelle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
