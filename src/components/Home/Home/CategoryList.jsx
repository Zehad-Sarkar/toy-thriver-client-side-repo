import React from "react";
import "react-tabs/style/react-tabs.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import TeddyBear from "./CategoryTabs/TeddyBear/TeddyBear";
import Dinosaur from "./CategoryTabs/Dinosaur/Dinosaur";
import Cat from "./CategoryTabs/Cat/Cat";

const CategoryList = () => {
  return (
    <div className="">
      <h2 className="p-4 mb-3 text-6xl font-extrabold text-center rounded-md text-rose-600 bg-slate-300">
        Shop By Category
      </h2>
      <Tabs>
        <TabList>
          <Tab>Teddy Bear</Tab>
          <Tab>Dinosaur</Tab>
          <Tab>Cat</Tab>
        </TabList>

        <TabPanel>
          <div className="flex gap-2">
            <TeddyBear></TeddyBear>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex gap-2">
            <Dinosaur></Dinosaur>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex gap-2">
            <Cat></Cat>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CategoryList;
