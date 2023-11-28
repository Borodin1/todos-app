//styles
import styles from "./Header.module.css";

//assets
import { NotePencil } from '../../assets/svg/NotePencil'

export const Header = () => {
    return (
        <div>
            <div className={styles['header-title']}>
                <h1>TO-DO NOW</h1>
            </div>
            <div className={styles['header-image']}>
                <div className={styles['header-solid']}></div>
                <NotePencil />
                <div className={styles['header-solid']}></div>
            </div>
        </div>
    );
};
