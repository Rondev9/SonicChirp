import React from "react";
import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center text-white">
      <h1 className="text-5xl font-bold mb-20">Sonic Chirp</h1>

      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8" />
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

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8" />
            <h2>Capabilities</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">Change the Sonic model according to your needs</p>
            <p className="infoText">
             Messages are used for training the model and are stored for 30 days
            </p>
            <p className="infoText">Hot Toast notifications when Sonic is thinking!</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">May occasionally generate incorrect information</p>
            <p className="infoText">
              May occasionally produce harmful instructions or biased content
            </p>
            <p className="infoText">Limited knowledge of world and event after Feb. 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
