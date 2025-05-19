import { useState } from "react";
import TabButtonList from "./components/TabButtonList";
import TabContent from "./components/TabContent";

export default function TabNavigation() {
    const [activeTab, setActiveTab] = useState("home");

    const handleTabClick = (e) => {
        setActiveTab(e.target.id);
    };
    return (
        <>
            <TabButtonList activeTab={activeTab} onTabChange={handleTabClick} />
            <TabContent activeTab={activeTab} />
        </>
    );
}