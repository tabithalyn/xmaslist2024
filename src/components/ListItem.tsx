import { BsCurrencyDollar } from "react-icons/bs";
import { ItemType } from "./Filter";
import { isInteger } from "lodash";
import { FaExternalLinkAlt } from "react-icons/fa";

const ListItem = ({ key, item } : { key: number; item: ItemType}) => {
  return (
    <>
      <div key={key} className="p-8 max-w-lg border border-gray-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 col-span-1 bg-white">
        <img src={`/public/static/assets/${item.img}`} className="shadow rounded-lg overflow-hidden border" alt={item.name} />
        <div className="mt-8 flex flex-wrap items-between">
          <h4 className="font-bold text-xl w-full h-16 flex justify-center items-center text-center bg-[#f3f3f3] rounded-xl">{item.name}</h4>
          <p className="mt-2 text-gray-700 w-3/4 uppercase text-base font-semibold flex items-center pl-2">{item.website}</p>
          {item.id !== 11 ? (
            <p className="mt-2 py-2 pr-1 text-gray-900 flex flex-wrap w-1/4 justify-center text-lg font-bold"><BsCurrencyDollar className="mt-[5px]" />
              {
                isInteger(item.price) ? item.price : item.price.toFixed(2)
              }
            </p>
          ) : null}
          <div className="mt-8 text-gray-500 w-full text-center">
          {item.id !== 11 ? ( <span>Size/Colour: </span>) : null }
            {item.size.map((s, i, arr) => (
              <div key={i} className="inline">
                {item.id !== 11 ? (
                  <p className="font-medium inline">
                    {s}{i !== arr.length - 1 ? ", " : " "}
                  </p>
                ) : (
                  <span className="font-medium block">{s}</span>
                )}
              </div>
            ))}
          </div>
          {item.notes !== "" ? (
            <p className="text-sm italic text-gray-400 w-full p-2 text-center">
              {item.notes}
            </p>
          ) : null}
          {item.id !== 11 ? (
            <div className="mt-5 w-full flex justify-center">
              <button type="button" className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-3 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900" onClick={() => window.open(item.link, '_blank')}>
                Link to Product <FaExternalLinkAlt className="ml-2" />
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
 
export default ListItem;