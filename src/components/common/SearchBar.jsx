import { useState, useRef } from 'react';
import styled from 'styled-components';
import { BsSearch} from "react-icons/bs";
import { fetchAsyncSearchedProducts } from '../../redux/actions/searchActions';
import { useDispatch } from 'react-redux';

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    const handleSearchTerm = (event) => {
        console.log(event.target.value);
        const searchTerm = event.target.value.trimStart();
        setSearchInput(searchTerm);
    }

    const handleSearchClick = () => {
        if(searchInput.length > 0){
            dispatch(fetchAsyncSearchedProducts(searchInput));
            inputRef.current.value = "";
        }
    }

    const onKeyUp = (event) => {
        if(event.keyCode === 13){
            if(searchInput.length > 0){
                dispatch(fetchAsyncSearchedProducts(searchInput));
                setSearchInput("");
                inputRef.current.value = "";
            }
        }
    }

    return (
        <SearchBarWrapper className = "d-flex align-items-stretch">
            <div className = "input-group d-grid">
                <span className='input-group-icon d-flex align-items-center justify-content-center op-08'>
                    <BsSearch />
                </span>
                <input 
                    type = "text" 
                    className='form-control fs-15 op-08' 
                    placeholder='Search here ...' 
                    onChange = { (event) => handleSearchTerm(event) }
                    onKeyUp = { onKeyUp }
                    ref = { inputRef }
                />
            </div>
            <button type = "button" className = "btn btn-pink text-white px-3 ms-2 fs-15 fw-5" onClick={ handleSearchClick}><span className='btn-text'>Search</span><BsSearch className = "d-none btn-icon" /></button>
        </SearchBarWrapper>
    )
}

export default SearchBar;

const SearchBarWrapper = styled.div`
    .input-group{
        grid-template-columns: 40px auto;
        align-items: stretch;
        background-color: rgba(0, 0, 0, 0.05);
        padding: 12px 0;
        border-radius: 3px;
        border: 1px solid rgba(0, 0, 0, 0.05);
        min-width: 240px;

        input{
            background: transparent;
        }
    }

    .btn{
        background-color: var(--clr-pink);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 3px;

        &:hover{
            transition: var(--transition-default);
        }

    }

    @media screen and (max-width: 678px){
        .input-group{
            padding: 10px 0;
            min-width: 200px;
        }

        .btn{
            padding: 0 12px;
            display: none;
            &-icon{ display: block; }
            &-text{ display: none; }
        }

        .input-group{
            display: none;
        }
    }
`;
