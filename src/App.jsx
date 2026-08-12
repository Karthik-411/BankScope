import React from "react";
import Page1 from "./components/page1/Page1";

const App = () => {
  const user = [
    {
      img: "https://plus.unsplash.com/premium_photo-1661765873819-2dd94bd32016?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Satisfied",
      content:
        "Already banked and happy with their current provider — but open to better rates, faster support, and smarter tools if the switch is effortless.",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1686244745117-ab2d23749209?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Underserved",
      content:
        "Have a bank account but feel overlooked — limited access to credit, personalized advice, or products that actually fit their financial situation.",
    },
    {
      img: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Expert",
      content:
        "Financially savvy users who actively manage investments, credit, and multiple accounts — they want advanced tools, not hand-holding.",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1688821130440-6486c8c9e6cb?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Underbanked",
      content:
        "Minimal or no access to traditional banking — rely on cash or alternative services, and need low-barrier entry points like no-fee accounts.",
    },
  ];
  return (
    <div>
      <Page1 user={user} />
    </div>
  );
};

export default App;
