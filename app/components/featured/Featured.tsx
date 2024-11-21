import styles from "./Featured.module.css";
import { Product } from '../../../types/products';

interface FeaturedProps {
    products: Product[];
}
  
export const Featured = ({ products }: FeaturedProps) => {
    return (
        <div className={styles.wrapper}>
            <img src={products[0].image} className={styles.featuredImg}></img>
            <h1>{products[0].title}</h1>
            <p>{products[0].subtitle}</p>
            <div className={styles.tags}>
                {products[0].tags.map((tag, index) => {
                    return <span key={index}>{tag}</span>
                })}
            </div>
        </div>
    )
}