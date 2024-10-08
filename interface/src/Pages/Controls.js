import React, { useEffect, useContext } from "react";
import { DataContext } from "../App";
import { useNavigate } from "react-router-dom";
import background from "../assets/blur-background.svg";
import "./Controls.css";

const Controls = () => {
  const navigate = useNavigate();

  const experimentTypes = ["absent", "generate"];

  const { data, addData } = useContext(DataContext);

  useEffect(() => {
    const randomType = experimentTypes[Math.floor(Math.random() * 2)];
    console.log(randomType);
    addData(randomType);
    navigate(`/convergent-thinking/instruct${randomType}`);
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="text-white h-screen w-screen items-center justify-center space-y-8 p-14 bg-cover"
    ></div>
  );
};

export default Controls;
