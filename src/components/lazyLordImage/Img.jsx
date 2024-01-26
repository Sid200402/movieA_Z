import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Img = ({ src, className }) => {

    // Check if src is a valid string before rendering the LazyLoadImage
    if (typeof src !== "string" || !src.trim()) {
        // Return null or any other fallback content if src is invalid
        return null;
    }

    return (
        <LazyLoadImage
            className={className || ""}
            alt="image"
            effect="blur"
            src={src}
        />
    );
};

export default Img;