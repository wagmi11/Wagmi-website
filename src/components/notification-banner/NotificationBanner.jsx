import React from "react";

const NotificationBanner = () => {
  return (
    <div className="bg-dark text-white py-3 flex justify-center items-center fixed left-0 w-full z-50 bottom-0 top-auto md:top-0 md:bottom-auto">
      <div className="container w-full max-w-4xl mx-auto px-6 flex justify-between items-center flex-col md:flex-row">
        <p className="m-0 text-center mb-2">Binary prediction dapp is now live on ton blockchain mainnet</p>{" "}
        <a
          href="https://t.me/wagmi11predictbot/predict"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="primary-btn light small">Predict & Win Now</button>
        </a>
      </div>
    </div>
  );
};

export default NotificationBanner;
