import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';
import styles from './RelatedRecipes.module.scss';
import Image from 'src/core/atoms/Image';
import { RelatedRecipesProps } from './RelatedRecipesType.ts';

const RelatedRecipes = (props: RelatedRecipesProps): JSX.Element => {
  return (
    <div className="">
      <div className="row">
        <div className="col">
          <div className="RelatedRecipese_Title">
            <h2>Related Recipes</h2>
          </div>
          <div className={`RelatedRecipese_cardContainer  d-flex ${styles.cardbody}`}>
            {props.fields.items.map((item, index) => (
              <div key={index} className={`card ${styles.card} rounded-0`}>
                <span className="d-none">
                  {
                    // (item.fields.Image?.value?.src =
                    //   '/-' + item.fields.Image.value?.src?.split('/-').pop())
                  }
                </span>
                <Image
                  field={item.fields.Image}
                  className="card-img-top rounded-0"
                  loading="lazy"
                />
                <div className="card-body">
                  <Link
                    className={`card-text text-decoration-none ${styles.title}`}
                    href={item.fields.Link.value}
                  >
                    {item.fields.Title.value}
                  </Link>
                </div>
                <div className={`d-flex justify-content-end ${styles.surround} mt-5 `}>
                  <i className="bi bi-calendar"></i>
                  <i className="bi bi-heart"></i>
                  <i className="bi bi-share"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedRecipes;
