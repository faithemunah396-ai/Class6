import Image from "next/image";
import styles from "./page.module.css";

import Gallery from "@/shared/Components/stickerGallery"
import DisplayUi from "@/shared/Components/stickerDisplay/index";

export default function Home() {
  return (
    <div>
    Welcome to my App!
    <DisplayUi></DisplayUi>
    <Gallery></Gallery>
    </div>
  );
}
