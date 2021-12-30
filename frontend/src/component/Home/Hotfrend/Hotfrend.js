import React, { useState } from 'react';
import './frend.css'
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hotfrend() {

    const config = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };

    const [settings, setSettings] = useState(config);

    const products = [
        {
            img: 'https://res.cloudinary.com/dwjj1ijln/image/upload/v1639833018/products/flxkel7lqqzlfctjylp9.jpg',
            title: 'Điện Thoại',

            link: 'https://trangwebsite.herokuapp.com/products/%C4%91i%E1%BB%87n%20tho%E1%BA%A1i'
        },
        {
            img: 'https://res.cloudinary.com/dwjj1ijln/image/upload/v1638545290/products/pgpnwm7wwvv81hby5mm3.jpg',
            title: 'Laptop',

            link: 'https://www8.hp.com/us/en/home.html'
        },

        {
            img: 'https://res.cloudinary.com/dwjj1ijln/image/upload/v1640166822/products/zilz1srf9ygoxicolckw.jpg',
            title: 'Máy Ảnh',

            link: 'https://www.lenovo.com/vn/vn/',
        },
        {
            img: 'https://res.cloudinary.com/dwjj1ijln/image/upload/v1640356674/products/kofqpsfnn7x90siguhkj.jpg',
            title: 'Ipad',

            link: 'https://trangwebsite.herokuapp.com/products/ipad',
        },
        {
            img: 'https://res.cloudinary.com/dwjj1ijln/image/upload/v1640166314/products/tqvnnu8psbosiefgwas6.jpg',
            title: 'Phụ Kiện',

            link: 'https://vn.msi.com/'
        },
        {
            img: 'https://res.cloudinary.com/dwjj1ijln/image/upload/v1638545290/products/pgpnwm7wwvv81hby5mm3.jpg',
            title: 'Laptop',

            link: 'https://www8.hp.com/us/en/home.html'
        }

    ]



    return (
        <div className="App">


            <Slider {...settings}>
                {products.map((x, i) => {
                    return <div key={i} className="img-card">
                        <div class="card-body">
                            <div className="card-title">{x.title}</div>

                        </div>
                        <a href={x.link}>
                            <img className="img" src={x.img} alt='kkk' />
                        </a>

                    </div>
                })}
            </Slider>
        </div>
    );
}

export default Hotfrend;