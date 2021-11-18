import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import withLayout from '../../hoc/withLayouts';
import SidebarComponent from '../../components/SidebarComponent';
import HeaderComponent from '../../components/HeaderComponent';

function AdminTemplate(props) {
    const location = useLocation();
    const length = location.pathname.split('/').length;
    const arr = location.pathname.split('/');
    return (
        <>
            <div className="wrapper" >
                <SidebarComponent {...props} />
                <div className="content">
                    <div className="main__content">
                        <HeaderComponent {...props} />
                        <div className="bread-crumb">
                            <Breadcrumb>
                                <Breadcrumb.Item><Link to="/admin/dashboard">Dashboard</Link></Breadcrumb.Item>
                                <Breadcrumb.Item>
                                   
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default withLayout(AdminTemplate);