import { useState } from "react";
import Filter from "./Filter";
import Hero from "./Hero";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const MenuLayout = ({ data }) => {
  // tag filter state
  const [filterTag, setFilterTag] = useState("all");
  // meal type filter state
  const [filterMealType, setFilterMealType] = useState("all");

  // get array of all tags
  let tagNames = data.map((tag) => {
    return tag.tags;
  });
  // remove any duplicate names for filter
  tagNames = [...new Set(tagNames.flat())];

  // get array of all meal types
  let mealTypes = data.map((type) => {
    return type.mealType;
  });
  mealTypes = [...new Set(mealTypes.flat())];

  // filter logic. If filterItem state = "all" show all.

  let filteredMenu = data.filter((val) => {
    if (filterTag == "all" && filterMealType == "all") {
      return val;
    } else if (filterTag == "all" && val.mealType.includes(filterMealType)) {
      return val;
    } else if (filterMealType == "all" && val.tags.includes(filterTag)) {
      return val;
    } else if (
      filterTag != "all" &&
      filterMealType != "all" &&
      val.tags.includes(filterTag) &&
      val.mealType.includes(filterMealType)
    ) {
      return val;
    }
  });

  return (
    <>
      <Navbar />
      <Hero />
      <div className="container-menu">
        <div className="text-center">
          <h3 className="text-32">NUTRITION IS ON THE MENU</h3>
          <p className="text-center">
            Our meals are designed by nutritionists and crafted by local chefs.
            Free of gluten, refined sugars or dairy* and responsibly sourced.
          </p>
        </div>
        <div className="d-flex mb-24 justify-center">
          <div className="mr-16">
            <Filter
              value={filterTag}
              setFilter={setFilterTag}
              data={tagNames}
              title="dietary preferences"
            />
          </div>
          <div>
            <Filter
              value={filterMealType}
              setFilter={setFilterMealType}
              data={mealTypes}
              title="Meal Types"
            />
          </div>
        </div>
      </div>
      <MenuCard menuData={filteredMenu} />
    </>
  );
};

export default MenuLayout;
