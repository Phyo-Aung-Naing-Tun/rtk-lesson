import React from "react";
import { Loader } from "@mantine/core";

const Loadering = () => {
  return (
    <div className=" h-screen w-full flex justify-center items-center">
      <Loader color="grape" variant="bars" />
    </div>
  );
};

export default Loadering;
