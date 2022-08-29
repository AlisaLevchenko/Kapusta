import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import categoriesExpens from '../../utils/categoriesExpens.json';
import categoriesIncome from '../../utils/categoriesIncome.json';
import icon from '../../images/icon.svg';
import s from '../CategoryList/CategoryList.module.scss';

export default function ReportsCategoryList({
  categories,

  transType,
  setCurCategory,
}) {
  const [categoriesArr, setCategoriesArr] = useState([]);

  const getTransleteCategories = () => {
    const categoriesOptions =
      transType === 'expenses' ? categoriesExpens : categoriesIncome;
    return categoriesOptions.map(el => ({
      ...el,
      data: categories[transType + 'Data'][el.ru] || { total: 0 },
    }));
  };

  useEffect(() => {
    if (Object.keys(categories).length) {
      setCategoriesArr(
        getTransleteCategories(categories).filter(el => el.data.total)
      );
      console.log(categoriesArr);
    }
    // eslint-disable-next-line
  }, [categories]);

  return (
    <div className={s.categoryListContainer}>
      <ul className={s.categoryList}>
        {categoriesArr.length
          ? categoriesArr.map((el, id) => (
              <li
                key={id}
                onClick={() => setCurCategory(el)}
                className={s.categoryListItem}
              >
                <p className={s.priceItem}>{el.data.total.toFixed(2)} </p>
                <div className={s.borderForIconRelative}>
                  <div
                    className={`${s['borderForIcon' + el.icon]} 
                   ${s.borderForHover}
                   `}
                  ></div>
                  <svg className={s.iconFill} width={56} height={56}>
                    <use href={`${icon}#icon-${el.icon}`} />
                  </svg>
                </div>
                <p className={s.discriptionItem}>{el.en}</p>
              </li>
            ))
          : "You don't have oprrations on this period"}
      </ul>
    </div>
  );
}
