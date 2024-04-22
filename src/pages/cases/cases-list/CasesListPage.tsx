import styles from "./styles.module.scss";
import {CaseCard} from "../../../entities/case-card";
import React from "react";
import {LiveDropItem} from "../../../entities/livedrop-item";
// import { useQuery, gql } from '@apollo/client';

// const GET_LOCATIONS = gql`
// query GetCases {
//   cases {
//     Actived
//     id
//     mainImage
//     oldprices
//     price
//     sorting
//     category {
//       id
//       Actived
//       showTitle
//       sorting
//       title
//     }
//     tankImage
//     title
//   }
// }`;
export const CasesListPage = () => {
    // const { loading, error, data } = useQuery(GET_LOCATIONS);
    //
    // useEffect(() => {
    //     if (!loading && data) {
    //         console.log(data)
    //     }
    // }, [data, loading]);
    //
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error : {error.message}</p>;

    return (
        <React.Fragment>
            <div className={styles.livedropWrapper}>
                <div className={styles.livedrop}>
                    {Array.from({length: 20}, (_, i) => (
                        <LiveDropItem key={i}/>
                    ))}
                </div>
            </div>
            <div className="container">
                <section className={styles.section}>
                    <div className={styles.categoryItem}>
                        <div className={styles.categoryTitle}>
                            Категория
                        </div>
                        <div className={styles.caseList}>
                            {Array.from({length: 8}, (_, i) => (
                                <CaseCard key={i}/>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    );
};