"use client";
import WrapperPage from "@/components/shared/WrapperPage";
import { Separator } from "@/components/ui/separator";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <WrapperPage
      className="gap-4"
      //keyAnim="About"
    >
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2"
        >
          <p className="text-custom-40-bold text-t-primary">Về bản thân</p>
          <p className="text-custom-sm-regular text-t-secondary tracking-wide">
            Giới thiệu nho nhỏ, ước mơ to to...
          </p>
        </motion.div>
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/avatar.gif"
            alt=""
            width={220}
            height={220}
            className="rounded-full object-cover h-[220px]"
          />
          <blockquote className="text-custom-base-regular italic text-center">
            &quot;Mình đã từng nghĩ không khí là miễn phí cho đến khi mua gói
            bim bim&quot;
          </blockquote>
        </div>
        <Separator />
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-t-secondary text-custom-sm-regular text-justify"
        >
          Xin chào, mình là Doanh (haladie), Frontend Web Developer. Hiện tại
          mình đã có 1.5 năm kinh nghiệm làm việc với nhiều dự án khác nhau và
          đây là dự án cá nhân của mình. Mục tiêu tiếp theo của mình là
          Fullstack Developer và xa hơn là Cloud. <br />
          Mình thích mày mò những thứ về giao diện (dù mình không phải designer
          hehe!). Đó có thể là những animation, visualizer, UI library,... vì
          mình phải chiều người dùng nhất có thể mà. Mình còn có ý định tìm hiểu
          sâu hơn về hệ thống nữa vì mình thích logic. <br />
          Sở thích của mình không nhiều. Mình thích chơi game vì nó cho mình cảm
          nhận được sự hồi hộp, gay cấn và đòi hỏi cả những sự tính toán. Mình
          còn ham tập tạ vì cơ thể khỏe mạnh mà không vận động thì phí lắm á.
          Mình thích những ngày mưa se lạnh, bật list nhạc yêu thích rồi làm một
          việc nào đó, thích cực! (nóng thì thôi, xin được bật điều hòa 🙃)
        </motion.p>
        <motion.p
          // whileHover={{ color: "var(--t-primary)" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-t-secondary text-custom-base-medium italic"
        >
          Theo dõi mình để biết nhiều hơn về mình nhé...
        </motion.p>
      </AnimatePresence>
    </WrapperPage>
  );
};

export default About;
