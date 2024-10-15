"use client";
import WrapperPage from "@/components/shared/WrapperPage";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import React from "react";
//import SliderCaptcha from "rc-slider-captcha";
//import createPuzzle from "create-puzzle";
const Photos = () => {
  // const offsetXRef = useRef(0);
  return (
    <WrapperPage className="gap-4">
      <motion.div
        key="title-home"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-2"
      >
        <p className="text-custom-40-bold text-t-primary">Những tấm ảnh</p>
        <p className="text-custom-sm-regular text-t-secondary tracking-wide">
          Vài bức hình vu vơ, thơ thẩn những suy nghĩ...
        </p>
      </motion.div>
      <Separator />
      {/* <SliderCaptcha
        request={() =>
          createPuzzle("https://loremflickr.com/g/320/240/paris,girl/all").then(
            (res) => {
              offsetXRef.current = res.x;

              return {
                bgUrl: res.bgUrl,
                puzzleUrl: res.puzzleUrl,
              };
            }
          )
        }
        onVerify={async (data) => {
          console.log("data", data, "offsetXRef", offsetXRef.current);
          if (
            data.x >= offsetXRef.current - 5 &&
            data.x < offsetXRef.current + 5
          ) {
            return Promise.resolve();
          }
          return Promise.reject();
        }}
        tipText={{
          default: "Drag to complete the puzzle",
          loading: "Loading...",
          moving: "Drag right to the puzzle",
          verifying: "Verifying",
          error: "Failed",
        }}
        // bgSize={{
        //   width: 360,
        // }}
        loadingBoxProps={{
          text: "loading",
        }}
      /> */}
    </WrapperPage>
  );
};

export default Photos;
