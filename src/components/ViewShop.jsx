import React, { useState } from 'react';
import NavBar from './NavBar';

const ViewShop = () => {
    const [data, setData] = useState([
        {"id":101,"title":"frock","price":650,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW_TaI93n2hM9EhiBOw-dxMYME4p3atTi4cQ&s","count":1},
        {"id":103,"title":"frock","price":600,"image":"https://5.imimg.com/data5/SELLER/Default/2022/6/JO/TJ/OW/12897161/glitter-semi-sheer-mesh-party-dress.jpg","count":2},
        {"id":105,"title":"churidhar","price":550,"image":"https://www.ethnicplus.in/media/catalog/product/cache/1d5df636cf8c8988ea2d2c570bb7c21d/k/h/khf-5012_9_.jpg","count":1},
        {"id":107,"title":"gown","price":2000,"image":"https://images-cdn.ubuy.co.in/633e7dc7998f5670e20c8176-long-sleeve-wedding-dresses-beach-a-line.jpg","count":3},
        {"id":110,"title":"frock","price":990,"image":"https://images-cdn.ubuy.co.in/634eb14f71afaf2da20d86fc-puffy-sleeves-tulle-prom-dress-princess.jpg","count":1},
        {"id":113,"title":"churidhar","price":850,"image":"https://www.ethnicplus.in/media/catalog/product/cache/1d5df636cf8c8988ea2d2c570bb7c21d/4/7/4751_full_pic_4.jpg","count":2},
    ]);

    return (
        <div>
            <NavBar />
            <div className="container">
                <h1><center>VIEW CART</center></h1>
                <div className="row">
                    {data.map(item => (
                        <div key={item.id} className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <div className="card">
                                <img src={item.image} height="350px" className="card-img-top" alt={item.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">Rs {item.price}</p>
                                    <a href="#" className="btn btn-primary">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ViewShop;
