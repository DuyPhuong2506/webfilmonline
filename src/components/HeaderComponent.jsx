import React from 'react';
import InfoComponent from './Header/InfoComponent';
import SeachComponent from './Header/SeachComponent';

export default function HeaderComponent(props) {
    return (
        <div className="headerad">
            <div className="row align-items-center" style={{ padding: "0 10px" }}>
                <div className="header__left col-12 col-md-6 col-lg-3 d-none d-md-block">
                    <SeachComponent />
                </div>
                <div className="header__right col-12 col-md-6 col-lg-9">
                    <InfoComponent />
                </div>
            </div>
            <div className="form-hidden" id="form-hidden">
                <input type="text" className="form-control" placeholder="Seach" />
            </div>
        </div>
    )
}
