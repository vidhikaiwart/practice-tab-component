import Interest from "./Interest";
import Profile from "./Profile";
import Setting from "./Setting";
import { useState } from "react";

const TabForm = () => {
  const [data, setData] = useState({
    name: "chhaya",
    age: "19",
    email: "chhaya@gmail.com",
    interest: ["coding", "movie"],
    theme: "dark",
  });

  const [error, setError] = useState({});
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Name is not valid";
        }
        if (!data.age || data.age < 18) {
          err.age = "Age is not valid";
        }
        if (!data.email || data.email.length < 2) {
          err.email = "Email is not valid";
        }
        setError(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interest",
      component: Interest,
      validate: () => {
        const err = {};
        if (data.interest.length < 1) {
          err.interest = "Select at least one interest";
        }
        setError(err);
        return err.interest ? false : true;
      },
    },
    {
      name: "Setting",
      component: Setting,
      validate: () => {
        return true;
      },
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;

  const handleNextClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  };

  const handlePrevClick = () => {
    setActiveTab((prev) => prev - 1);
  };

  const handleSubmitClick = () => {
    console.log("Form submitted:", data);
  };

  return (
    <div>
      <div className="h-container">
        {tabs.map((t, index) => (
          <div
            className="h"
            key={index}
            onClick={() => setActiveTab(index)}
          >
            {t.name}
          </div>
        ))}
      </div>

      <div className="t-body">
        <ActiveTabComponent data={data} setData={setData} error={error} />
      </div>

      <div>
        {activeTab > 0 && (
          <button onClick={handlePrevClick}>Prev</button>
        )}
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNextClick}>Next</button>
        )}
        {activeTab === tabs.length - 1 && (
          <button onClick={handleSubmitClick}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default TabForm;
