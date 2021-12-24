import React, { useState } from 'react';
import './css.css'
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slides() {

    const config = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    const [settings, setSettings] = useState(config);

    const products = [
        {
            img: 'https://res.cloudinary.com/tuan-cloudinary/image/upload/v1608268385/famous-brands/msi_zjnihe.webp',
            title: 'MSI',
            text: 'Bé rồng đỏ siêu cute, gaming',
            link: 'https://vn.msi.com/'
        },
        {
            img: 'https://res.cloudinary.com/tuan-cloudinary/image/upload/v1608268384/famous-brands/hp_cdxdv8.webp',
            title: 'HP',
            text: 'Laptop siêu cấp vip pro',
            link: 'https://www8.hp.com/us/en/home.html'
        },

        {
            img: 'https://res.cloudinary.com/tuan-cloudinary/image/upload/v1608268384/famous-brands/lenovo_trmmkt.webp',
            title: 'LENOVO',
            text: 'Siêu ưu đãi cùng với LENOVO',
            link: 'https://www.lenovo.com/vn/vn/',
        },
        {
            img: 'https://res.cloudinary.com/tuan-cloudinary/image/upload/v1608268384/famous-brands/lg_yijaob.webp',
            title: 'LG',
            text: 'Sản phẩm siêu chất lượng',
            link: 'https://www.lg.com/vn',
        },
        {
            img: 'https://res.cloudinary.com/tuan-cloudinary/image/upload/v1608268385/famous-brands/msi_zjnihe.webp',
            title: 'MSI',
            text: 'Bé rồng đỏ siêu cute, gaming',
            link: 'https://vn.msi.com/'
        },
        {
            img: 'https://res.cloudinary.com/tuan-cloudinary/image/upload/v1608268384/famous-brands/hp_cdxdv8.webp',
            title: 'HP',
            link: 'https://www8.hp.com/us/en/home.html',
            text: 'Laptop siêu cấp vip pro'
        },

        {
            img: 'https://res.cloudinary.com/tuan-cloudinary/image/upload/v1608268384/famous-brands/lenovo_trmmkt.webp',
            title: 'LENOVO',
            link: 'https://www.lenovo.com/vn/vn/',
            text: 'Siêu ưu đãi cùng với LENOVO'
        },
        {
            img: 'https://res.cloudinary.com/tuan-cloudinary/image/upload/v1608268384/famous-brands/lg_yijaob.webp',
            title: 'LG',
            link: 'https://www.lg.com/vn',
            text: 'Sản phẩm siêu chất lượng'
        },
    ]



    return (
        <div className="App">


            <Slider {...settings}>
                {products.map((x, i) => {
                    return <div key={i} className="img-card">
                        <a href={x.link}>
                            <img className="img" src={x.img} alt='kkk' />
                        </a>
                        <div class="card-body">
                            <div className="card-title">{x.title}</div>
                            <div className="card-text">{x.text}</div>
                        </div>
                    </div>
                })}
            </Slider>
        </div>
    );
}

export default Slides;