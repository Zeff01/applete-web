"use client";
import { useEffect } from "react";
const appScheme = "applete://app";
const androidStoreUrl =
  "https://play.google.com/store/apps/details?id=com.applete.app&hl=ph-en";
const iosStoreUrl = "https://apps.apple.com/ph/app/appleteapp/id6648766155";
const appRedirect = (isOpenUrl?: boolean) => {
  const url = window.location.href;
  const extractedPath = url.split("share/")[1];
  const userAgent = navigator.userAgent;
  const isAndroid = /android/i.test(userAgent);
  const isIOS = /iPad|iPhone|iPod/.test(userAgent);

  let storeUrl = "";
  if (isAndroid) storeUrl = androidStoreUrl;
  if (isIOS) storeUrl = iosStoreUrl;
  window.location.href = appScheme + "/" + extractedPath;

  if (isOpenUrl) {
    setTimeout(() => {
      if (!storeUrl) return;
      window.location.href = storeUrl;
    }, 2000);
  }
};
const Share = () => {
  useEffect(() => {
    appRedirect();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div>
        <img src="/applete-logo.png" width={300} />
      </div>
      <div className="flex items-center space-x-3">
        <h1 className="text-2xl font-semibold">Redirecting</h1>
        <svg
          className="w-6 h-6 text-blue-600 animate-spin"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          ></path>
        </svg>
      </div>
      <p className="text-lg text-gray-600 mb-4">
        If nothing happens, click the button below.
      </p>
      <button
        onClick={() => {
          appRedirect(true);
        }}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Open App
      </button>
      {/* <p className="text-sm text-gray-500 mt-4">
        Or visit our
        <a href="https://yourwebsite.com" className="text-blue-500 underline">
          website
        </a>
        .
      </p> */}
    </div>
  );
};

export default Share;
