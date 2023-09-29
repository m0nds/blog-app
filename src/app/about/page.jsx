import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.unsplash.com/photo-1691580438246-a6e5cb35ca05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
          fill={true}
          className={styles.img}
          alt=""
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex placeat
            corrupti similique aliquid. Perferendis a, delectus ratione
            corrupti, enim accusamus temporibus unde corporis dolorum
            praesentium nesciunt iste! Reprehenderit cupiditate id itaque
            numquam distinctio quidem? Odio architecto, delectus eveniet placeat
            quae enim aspernatur possimus nemo reprehenderit vel omnis porro,
            rem ipsam est repudiandae exercitationem odit provident blanditiis?
            At exercitationem aut nobis iusto error. Distinctio sit fugiat
            <br/>
            <br/>
            nesciunt ducimus voluptatibus? Molestias, officiis eius tempore
            nobis, exercitationem laudantium minus illo aspernatur, modi
            molestiae necessitatibus. Distinctio sit fugiat nesciunt ducimus
            voluptatibus? Molestias, officiis eius tempore nobis,
            necessitatibus. Distinctio sit fugiat exercitationem laudantium
            minus illo aspernatur, modi molestiae necessitatibus. fugiat
            similique aliquid.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Who we do?</h1>
          <p className={styles.desc}>
            nesciunt ducimus voluptatibus? Molestias, officiis eius tempore
            nobis, exercitationem laudantium minus illo aspernatur, modi
            molestiae necessitatibus. Distinctio sit fugiat nesciunt ducimus
            voluptatibus? Molestias, officiis eius tempore nobis,
            necessitatibus. Distinctio sit fugiat exercitationem laudantium
            Creative Illustrations
            <br/>
            <br/> - Dynamics Websites 
            <br/> 
            <br/> - Fast and Handy
            <br/> 
            <br/> - Mobiles Apps
          </p>
          <Button url="/contact" text="Contact"/>
        </div>
      </div>
    </div>
  );
};

export default About;
