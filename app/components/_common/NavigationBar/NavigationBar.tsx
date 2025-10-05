import { useTabs } from "@/app/hooks/TabsContext";
import { Button } from "@headlessui/react";
import { MouseEventHandler, useReducer, useState } from "react";

interface ListItem {
  id: number;
  icon: string;
  label: string;
  itemClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: number;
}

const NavigationListItems: ListItem[] = [
  {
    id: 1,
    icon: "🔧",
    label: "Experience",
  },
  {
    id: 2,
    icon: "🗂️",
    label: "Projects",
  },
  {
    id: 3,
    icon: "📄",
    label: "Certifications",
  },
  {
    id: 4,
    icon: "🏆",
    label: "Awards",
  },
  {
    id: 5,
    icon: "💬",
    label: "Recommendation",
  },
];

const NavigationButton = ({
  id,
  icon,
  label,
  itemClick,
  disabled,
}: ListItem) => {
  return (
    <Button
      onClick={itemClick}
      className={`flex px-6 py-2 rounded-full overflow-hidden flex-nowrap transition-all
      bg-white/20 backdrop-blur-md border border-white/30 shadow-lg justify-center align-middle gap-x-3 data-[closed]:opacity-0 data-[enter]:duration-500 data-[enter]:ease-out data-[leave]:duration-300 data-[leave]:ease-in ${
        id !== disabled ? "w-2 px-2 gap-x-0" : "w-100"
      } `}
    >
      <span> {icon} </span>
      <span
        className={`text-lg font-semibold text-white  overflow-hidden transition-all duration-500 ease-in-out ${
          id !== disabled ? "opacity-0" : "opacity-100"
        }`}
      >
        {" "}
        {label}{" "}
      </span>
    </Button>
  );
};

const NavigationBar = () => {
  const { activeTab, setActiveTab } = useTabs();

  console.log(activeTab);

  return (
    <div className=" flex items-center gap-4 z-10 -mb-5">
      {NavigationListItems.map((item, i) => (
        <NavigationButton
          id={item.id}
          itemClick={() => setActiveTab(item.id)}
          key={item.label + i}
          icon={item.icon}
          label={item.label}
          disabled={activeTab}
        />
      ))}
    </div>
  );
};

export default NavigationBar;
