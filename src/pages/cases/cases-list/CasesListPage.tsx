import styles from "./styles.module.scss";
import {CaseCard} from "../../../entities/case-card";
import React, {useEffect, useState} from "react";
import {LiveDrop} from "../../../widgets/livedrop";
import {DataCategoryType} from "../../../shared/types";
import {testCategoriesData} from "../../../shared/testData";
import {useQuery} from "@apollo/client";
import {GET_CASES} from "../../../shared/queries";

export const CasesListPage = () => {
    const { loading, error, data } = useQuery(GET_CASES);
    const [testData, setTestData] = useState<DataCategoryType[]>([])
    useEffect(() => {
        if (!loading && data) {
            console.log(data)
        }
        setTestData(testCategoriesData)
    }, [data, loading]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <div className="container">
            <LiveDrop/>
            <section className={styles.section}>
                {testData && testData.map((category) => (
                    <div key={category.id} className={styles.categoryItem}>
                        <div className={styles.categoryTitle}>
                            {category.title}
                        </div>
                        <div className={styles.caseList}>
                            {category.cases && category.cases.map((item, i) => (
                                <CaseCard key={i} data={item}/>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};