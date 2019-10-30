import React from "react";
import {Button, Image} from "semantic-ui-react";
import {Link} from "react-router-dom";

function Home(props) {
    return (
            <div>
                <Button.Group>
                    <Button className="latest">Latest</Button>
                    <Link to="/search">
                        <Button className="search">Search</Button>
                    </Link>
                </Button.Group>
                <Image src={props.latest.img}/>
            </div>
        )
}

export default Home;
