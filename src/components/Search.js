import React,{useState} from "react";
import ComicCard from './ComicCard';
import {Input} from 'semantic-ui-react'

const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchedForComic, setSearchedForComic] = useState(null);
    const [inputError, setInputError] = useState(null);

    const handleChange = (event) => {
        console.log(Number(event.target.value));
        if (typeof((parseInt(event.target.value)) === 'number') &&
            Number(event.target.value) >= 0 && Number(event.target.value) <= 2221) {
            setSearchValue(event.target.value);
            setInputError(null)
        } else {
            setInputError("The value must be a number between 1 and 3000")
        }
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
            {inputError ? <h1>{inputError}</h1> : null}
            {searchedForComic && searchedForComic.img ? <ComicCard comic={searchedForComic}/> : null}
        </div>
    )
};
export default Search