import React,{useState} from "react";
import ComicCard from './ComicCard';
import {Input} from 'semantic-ui-react'

export default () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchedForComic, setSearchedForComic] = useState(null);

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    };

    const search = () => {
        fetch(`https://xkcd.now.sh/?comic=${searchValue}`)
            .then(res => res.json())
            .then(data => setSearchedForComic(data))
            .catch(err => console.error("Error with request...", err.message))
    };

    return (
        <div>
            <div className="ui left action input" >
                <Input
                    className="searchInput"
                    focus
                    placeholder='Search...'
                    value={searchValue}
                    onChange={ handleChange }/>
                <button
                    className="searchSubmit ui blue icon right labeled button "
                    onClick={ search } >
                    Search
                </button>
            </div>
            {searchedForComic && searchedForComic.img ? <ComicCard comic={searchedForComic}/> : null}
        </div>
    )
}