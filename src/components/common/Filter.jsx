import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { ProductTypesData } from '../../data';
import { sortProducts, filterProducts } from '../../redux/store/filterSlice';
import { constants } from "../../constants/index";
import { setTempProducts } from '../../redux/store/filterSlice';
import PropTypes from "prop-types";

const Filter = ({ products }) => {
    const dispatch = useDispatch();
    // sorting and filtering
    const [sortSelect, setSortSelect] = useState(constants.DEFAULT_SORT);
    const [filterSelect, setFilterSelect] = useState(constants.DEFAULT_FILTER);
    const sortHandler = (event) => setSortSelect(event.target.value);
    const filterHandler = (event) => setFilterSelect(event.target.value);

    useEffect(() => {
        dispatch(setTempProducts(products));
    }, [products,dispatch]);

    useEffect(() => {
        dispatch(sortProducts(sortSelect));
    }, [sortSelect,dispatch]);

    useEffect(() => {
        dispatch(filterProducts(filterSelect));
    }, [filterSelect,dispatch]);

    return (
        <FilterWrapper className = "my-5">
            <div className = "filter-grid d-flex justify-content-between align-items-center">
                <div className='filter-grid-left'>
                    <label htmlFor='sort'>Sort by: </label>
                    <select value = { sortSelect } name = "sort" id = "sort" className='sort-select' onChange = { (event) => sortHandler(event) } >
                        <option value = {constants.DEFAULT_SORT}>Default</option>
                        <option value = {constants.PRICE_LOW_TO_HIGH}>Price: Low to High</option>
                        <option value = {constants.PRICE_HIGH_TO_LOW}>Price: High to Low</option>
                        <option value = {constants.NAME_A_Z}>A - Z</option>
                        <option value = {constants.NAME_Z_A}>Z - A</option>
                    </select>
                </div>

                <div className='filter-grid-right'>
                    <select value = { filterSelect } name = "filter" id = "filter" className='filter-select' onChange = { (event) => filterHandler(event) }>
                        <optgroup label = "Product Type">
                            <option value = { constants.DEFAULT_FILTER } disabled> Choose an option</option>
                            {
                                ProductTypesData.map((item, index) => (
                                    <option key = {index} value = {item.product_type}>{item.name}</option>
                                ))
                            }
                        </optgroup>
                    </select>
                </div>
            </div>
        </FilterWrapper>
    )
}

export default Filter;

Filter.propTypes = {
    products: PropTypes.array
}

const FilterWrapper = styled.div`
    .sort-select{
        border: 1px solid rgba(0, 0, 0, 0.5);
        padding: 7px;
        border-radius: 2px;
        margin-left: 4px;
    }

    .filter-select{
        border: 1px solid rgba(0, 0, 0, 0.5);
        padding: 7px;
        border-radius: 2px;
    }

`;
