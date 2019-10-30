import React from "react";
import { Image } from "semantic-ui-react";

export default (props) => (
        <Image
            className="comicImage"
            src={props.comic.img} />
)