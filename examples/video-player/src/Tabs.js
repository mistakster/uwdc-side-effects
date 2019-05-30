import React, { Children, useState } from 'react';

const Tabs = ({ titles, children }) => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = Children.toArray(children);

  return (
    <div className="d-flex flex-column h-100">
      <div className="nav nav-pills nav-fill my-2">
        {tabs.map((tab, index) => (
          <div key={index} className="nav-item">
            <span onClick={() => setActiveTab(index)} className={`nav-link ${activeTab === index ? 'active' : 'text-primary'}`}>
              {titles[index]}
            </span>
          </div>
        ))}
      </div>
      {tabs[activeTab]}
    </div>
  );
};

export default Tabs;
