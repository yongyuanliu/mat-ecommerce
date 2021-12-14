import React from 'react';
import "./index.css";
import { Product } from '../../controller/product';
import Ripples from "../ripple";

const star = <i className="ng-star-inserted"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" /></svg></i>;
const starHalfFill = <i className="ng-star-inserted"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" /></svg></i>;
const starFill = <i className="ng-star-inserted"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg></i>;

const MAX_STAR = 5;

function getIconStar(rating = "0.00") {
    //0 分，直接返回 5 个非 fill 的星星
    if (Object.is(parseFloat(rating), 0)) {
        return Array(MAX_STAR).fill(star);
    }
    //1 分以内
    if (parseFloat(rating) <= 1) {
        let floatNumber = parseFloat(rating.slice(rating.indexOf("\."), rating.length + 1));
        let lastStar = Math.round(floatNumber) === 1 ? starHalfFill : star;
        return Array(MAX_STAR).fill(star).fill(lastStar, 0, 1);
    }
    //满分
    if (parseFloat(rating) >= MAX_STAR) {
        return Array(MAX_STAR).fill(starFill);
    }

    let floatSplitLength = rating.indexOf("\.");
    let fillStarLength = parseFloat(rating.slice(0, floatSplitLength));
    let floatNumber = parseFloat(rating.slice(floatSplitLength, rating.length + 1));
    // 经过 4舍5入 等于 1 半颗星，不是那就普通星星;
    let lastStar = Math.round(floatNumber) === 1 ? starHalfFill : star;
    return Array(MAX_STAR).fill(star).fill(starFill, 0, fillStarLength).fill(lastStar, fillStarLength, fillStarLength + 1);
}


interface ProductCardProps {
    product: Product;
}

class ProductCard extends React.PureComponent<ProductCardProps> {
    constructor(props: ProductCardProps) {
        super(props);
    }
    render() {
        const data = this.props.product;
        return (
            <article className="mat-card">
                <header className="card-header"><h2 className="card-title">{data.title}</h2></header>
                <img className="card-image" src={data.image}></img>
                <div className="card-content">
                    <div className="card-description">{data.description}</div>
                    <div className="card-price">¥{data.price}</div>
                    <div className="card-addtional">
                        <p className="set-text-helper-content">{data.helper}</p>
                    </div>
                </div>
                <div className="card-actions">
                    <div className="set-rating-stars">
                        <div className="set-stars-wrapper">
                            <div className="set-icon-container">{getIconStar(data.rating)}</div>
                            <div className="set-rating-stars-value">{data.rating}</div>
                        </div>
                    </div>
                    <button className="mat-stroked-button mat-primary">
                        <Ripples>
                            <span className="mat-button-wrapper">
                                <i className="favorite">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                                    </svg>
                                </i>
                                <span className="ng-star-inserted">添加到购物车</span>
                            </span>
                        </Ripples>
                    </button>
                </div>
            </article>
        )
    }
}

export default ProductCard;