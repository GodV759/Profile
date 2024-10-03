"use client";
import WrapperPage from "@/components/shared/WrapperPage";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import React from "react";

const Photos = () => {
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
    </WrapperPage>
  );
};

export default Photos;
