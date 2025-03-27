import Rating from '@mui/material/Rating';
import { TfiFullscreen } from "react-icons/tfi";
import Button from "@mui/material/Button";
import { IoMdHeartEmpty } from "react-icons/io";
import { useContext } from 'react';
import { MyContext } from '../../App';
import { Link } from 'react-router-dom';

const ProductItem = (props) => {
    const { setIsOpenProductModal } = useContext(MyContext);
    
    return (
        <>
            <div className={`productItem ${props.itemView}`}><Link to="/product/1">
                <div className="imgWrapper">
                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg" className="w-100" alt='Product Image'/>
                    <span className="badge badge-primary">-50%</span>
                    <div className="actions">
                        <Button onClick={() => setIsOpenProductModal(true)}><TfiFullscreen /></Button>
                        <Button><IoMdHeartEmpty style={{ fontSize: '20px' }} /></Button>
                    </div>
                </div>
                <div className="info">
                    <h4>All Natural Italian-Style Chicken Meatballs</h4>
                    <span className="text-success d-block">In Stock</span>
                    <Rating className="mt-1 mb-1" name="read-only" value={4.5} readOnly size="small" precision={0.5} />
                    <div className="d-flex">
                        <span className="oldPrice">₹1000</span>
                        <span className="netPrice text-danger ml-2">₹500</span>
                    </div>
                </div></Link>
            </div>
        </>
    );
};

export default ProductItem;
