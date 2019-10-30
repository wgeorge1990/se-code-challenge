import React from "react";
import { Image } from "semantic-ui-react";

export default (props) => (
        <Image
            className="latestImage"
            src={props.comic.img}
            title={props.comic.title}
            alt={props.comic.alt}
        />
)