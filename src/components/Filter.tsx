import { useState, useEffect } from "react";
import { items } from "../data";
import ListItem from "./ListItem";

export type ItemType = {
  id: number;
  name: string;
  img: string;
  price: number;
  size: string[];
  website: string;
  link: string;
  notes: string;
}

const Filter = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([""]);
  const [filteredItems, setFilteredItems] = useState<ItemType[]>(items);

  const filters = ["Shein", "Amazon", "Sephora", "American Eagle", "Old Navy", "Walmart", "Ardene", "Other"];

  const handleFilterButtonClick = (selectedCategory:string) => {
    if (selectedFilters.includes(selectedCategory)) {
      const filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  }

  useEffect(() => {
    const filterItems = () => {
      if (selectedFilters.length > 0) {
        const tempItems = selectedFilters.map((selectedCategory) => {
          const temp = items.filter((item) => item.website === selectedCategory);
          return temp;
        });
        setFilteredItems(tempItems.flat());
      } else {
        setFilteredItems([...items]);
      }
    }
    filterItems();
  }, [selectedFilters]);

  return (
    <div>
      <div>
        <p className="w-full flex flex-wrap justify-center gap-x-5 gap-y-2">
          {filters.map((category, id) => (
            <button
              key={id}
              onClick={() => handleFilterButtonClick(category)}
              className={`${selectedFilters?.includes(category) ? "inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900" : "inline-flex items-center rounded-md border border-gray-100 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-900 shadow-sm hover:bg-gray-300"}`}
            >
              {category}
            </button>
          ))}
          {
            selectedFilters.length > 1 ? (
              <button className="inline-flex items-center rounded-md border border-gray-100 bg-black px-3 py-2 text-sm font-medium leading-4 text-gray-100 shadow-sm hover:bg-gray-900" onClick={() => setSelectedFilters([""])}>CLEAR FILTERS</button>
            ) : null
          }
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-10">
        {
          filteredItems &&
            filteredItems.map((item, id) => (
              <ListItem key={id} item={item} />
            ))
        }
        {
          filteredItems.length < 1 &&
            items.map((item, id) => (
              <ListItem key={id} item={item} />
            ))
        }
      </div>
    </div>
  );
}
 
export default Filter;