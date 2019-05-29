import React, { Children, useState } from 'react';
import './Tabs.css';

const Tabs = ({ titles, children }) => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = Children.toArray(children);

  return (
    <div className="Tabs">
      <div className="TabsSelector">
        {tabs.map((tab, index) => (
          <button key={index} onClick={() => setActiveTab(index)}>
            {titles[index]}
          </button>
        ))}
      </div>
      <div className="TabsContent">
        {tabs[activeTab]}
      </div>
    </div>
  );
};

export default Tabs;
