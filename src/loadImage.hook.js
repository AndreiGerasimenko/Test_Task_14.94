import { useState, useEffect } from "react";
import { loadImage } from "./imagesLoaderSimulator";

//Some comment

export const useLoadImage = (id) => {
  const [image, setImage] = useState(false);

  useEffect(() => {
    loadImage(id).then(setImage);
  }, [setImage, id]);

  return image;
};
