import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import {gql} from "@apollo/client";
import client from "../../apollo-client";
import _ from 'lodash'
import Campus from "../components/campus";

const Home: NextPage = (props:any) => {
  const {lasalleCollegeData} = props
  return (
    <div className={styles.container}>
      {
        !_.isEmpty(lasalleCollegeData?.lasalleCollege) && _.map(lasalleCollegeData?.lasalleCollege?.lciCampuses,(item:any, index:number)=>{
          return <Campus key={index} content={item} />
        })
      }
    </div>
  )
}

export async function getStaticProps() {
  const {data} = await client.query({
    query: gql`
        query lasalleCollegeData {
          lasalleCollege(id: "5vl5HzuiPl2LaZfbvLDKya") {
            lciCampuses,
            title
          }
        }
      `,
  });

  return {
    props: {
      lasalleCollegeData: data,
    },
  };
}

export default Home
