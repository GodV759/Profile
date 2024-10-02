/* eslint-disable @next/next/no-img-element */
"use client";
import clsx from "clsx";
import React, { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import ClientOnly from "../shared/ClienOnly";
const TrackPlayer = () => {
  const [isPlay, setIsPlay] = useState(false);
  return (
    <div className="flex w-full xs:flex-col md:flex-row gap-6 border items-center p-5 border-solid h-max border-border rounded-lg">
      <img
        src={"https://i.scdn.co/image/ab67616d0000b2737b588bf0555bde606f8b27c7"}
        width={200}
        height={200}
        alt=""
        className={clsx("rounded-full", { ["rotating-image"]: isPlay })}
      />
      <div className="w-full flex flex-col">
        <p className="text-custom-3xl-bold text-t-primary">BAND4BAND</p>
        <p className="text-custom-xl-semi-bold text-t-secondary">
          Central Cee(feat. Lil Baby)
        </p>
        <ClientOnly>
          <AudioPlayer
            //  autoPlay
            src="/tracks/BAND4BAND.mp3"
            style={{
              boxShadow: "none",
              paddingLeft: 0,
              paddingRight: 0,
              marginTop: 30,
              backgroundColor: "inherit",
            }}
            onPlay={() => setIsPlay(true)}
            onPause={() => setIsPlay(false)}
            customAdditionalControls={[<div key="1" className="hidden"></div>]}
            customVolumeControls={[<div key="1" className="hidden"></div>]}
          />
        </ClientOnly>
      </div>
    </div>
  );
};

export default TrackPlayer;
