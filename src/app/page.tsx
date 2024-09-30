"use client";
import FacebookIcon from "@/components/shared/icons/FacebookIcon";
import InstagramIcon from "@/components/shared/icons/InstagramIcon";
import XIcon from "@/components/shared/icons/XIcon";
import VoxelDogLoader from "@/components/shared/voxel-dog-loader";
import WrapperPage from "@/components/shared/WrapperPage";
import { Separator } from "@/components/ui/separator";
import { item, wrap } from "@/lib/utils";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const LazyVoxelDog = dynamic(() => import("../components/shared/voxel-dog"), {
  ssr: false,
  loading: () => <VoxelDogLoader />,
});

export default function Home() {
  return (
    <WrapperPage className="gap-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-2"
      >
        <p className="text-custom-40-bold text-t-primary">Nguyễn Doanh</p>
        <p className="text-custom-sm-regular text-t-secondary tracking-wide">
          Frontend Developer / FPS Player
        </p>
      </motion.div>
      <Separator />
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-t-secondary text-custom-sm-regular text-justify"
      >
        Xin chào, mình là Doanh (haladie), Frontend Web Developer. Hiện tại mình
        đã có 1.5 năm kinh nghiệm làm việc với nhiều dự án khác nhau và đây là
        dự án cá nhân của mình. Mục tiêu tiếp theo của mình là Fullstack
        Developer và xa hơn là Cloud.
      </motion.p>
      <Separator className="w-[200px]" />
      <motion.ul
        variants={wrap}
        className="flex gap-3 items-center"
        initial="hidden"
        animate="visible"
      >
        <motion.li variants={item}>
          <FacebookIcon />
        </motion.li>
        <motion.li variants={item}>
          <InstagramIcon />
        </motion.li>
        <motion.li variants={item}>
          <XIcon />
        </motion.li>
      </motion.ul>
      <Separator className="w-[150px]" />
      <LazyVoxelDog />
    </WrapperPage>
  );
}
