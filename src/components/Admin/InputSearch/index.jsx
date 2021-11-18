import React from 'react';
import PropTypes from 'prop-types';

InputSearch.propTypes = {
    
};

function InputSearch(props) {
    const {setKeyword} = props;
    return (
        <div className="card-options">
        <form>
            <div className="input-group">
                <input type="text" className="form-control form-control-sm" placeholder="Search something..." name="s" 
               onChange={(e) => setKeyword(e.target.value)}
                />
                <span className="input-group-btn ml-2"><button className="btn btn-icon" type="submit"><span className="fe fe-search" /></button></span>
            </div>
        </form>
    </div>
    );
}

export default InputSearch;