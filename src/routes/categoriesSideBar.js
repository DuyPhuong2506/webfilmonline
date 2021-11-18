import React from 'react';
const renderIcon = (icon) => {
    return (
        icon
    )
}

const categoriesSideBar = [
    {
        name: 'Dashboard',
        url: '/admin/dashboard',
        icon: renderIcon(<i className="fa fa-qrcode" />)
    },
    {
        name: 'List Film',
        url: '/admin/film',
        icon: renderIcon(<i className="fa fa-list" />)
    },
    {
        name: 'Kind OF Film',
        url: '/admin/kindoffilm',
        icon: renderIcon(<i className="fa fa-list" />)
    },
    {
        name: 'Type Film',
        url: '/admin/typefilm',
        icon: renderIcon(<i className="fa fa-list" />)
    },
    {
        name: 'Config',
        url: '/admin/config',
        icon: renderIcon(<i className="fab fa-product-hunt" />),
        // children: [
        //     {
        //         name: 'Product',
        //         url: '/admin/product'
        //     },
        //     {
        //         name: 'Product Variant',
        //         url: '/admin/variant'
        //     },
        //     {
        //         name: 'Product Sku',
        //         url: '/admin/sku'
        //     }
        // ]
    },
    {
        name: 'User',
        url: '/admin/user',
        icon: renderIcon(<i className="fa fa-user" />)
    },
    {
        name: 'Setting',
        url: '/admin/setting',
        icon: renderIcon(<i className="fa fa-cog" />)
    },
]

export default categoriesSideBar;