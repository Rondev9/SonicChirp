import React from "react";
import { BeakerIcon } from '@heroicons/react/24/solid'

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

      <div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BeakerIcon className="h-6 w-6 text-blue-500" />
            <h2>Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">Explain Something to me</p>
            <p className="infoText">
              What is the difference between a dog and cat?
            </p>
            <p className="infoText">What is the color of the sun?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
