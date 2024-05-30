import {gql} from "@apollo/client";
export const GET_CASES = gql(`
query GetCases {
  cases {
    id
    title
    metaTitle
    metaDescription
    metaKeywords
    category {
      Actived
      id
      showTitle
      sorting
      title
    }
    sorting
    oldprices
    price
    pricePlus10
    pricePlus20
    pricePlus30
    tankImage
    mainImage
    updatedAt
    createdAt
    Actived
  }
}`);