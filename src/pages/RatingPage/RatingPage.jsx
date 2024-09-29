import { useParams } from 'react-router-dom';
import styles from './test.module.css';

export const RatingPage = () => {
  const { id } = useParams();

  console.log(id);

  return (
    <div className={styles.container}>
      <div className={styles.ratingBox}>
        <div className={styles.ratingItem}>1</div>
        <div>1000-1000</div>
      </div>
    </div>
  );
};
