import React, { useEffect, useState } from "react";
// import { Link } from "gatsby";
import { PrismicTypes } from '../components';
// import Layout from '../components/layout';
import Header from '../components/header'
import '../components/utils/app.css';
import '../common.css';
import '../colors.css';
import '../fonts.css';
import '../z-index.css';
// import HeroHomepage from '../components/hero-homepage'

export default function HomePage() {

  const [contentLoaded, setContentLoaded] = useState(false);
  // Client-side Runtime Data Fetching
  const [myData, setmyData] = useState({})

  useEffect(() => {
    // get data from API
    fetch(`https://ra9qbnj3ah.execute-api.eu-west-2.amazonaws.com/fin/marketing/docs/home-page`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setmyData(resultData.data)
        console.log('resultData.data---', resultData.data)
        console.log('resultData.data.components[0].component', resultData.data.components[0].component)
      })
  }, [])
  useEffect(() => {
    myData && myData.components && myData.components.length > 0 && setContentLoaded(true);
  }, [myData]);


  return (
    <React.Fragment>
    
      <Header />

      <main className="page page-homepage">
      {myData && myData.components && contentLoaded && (
        <div>
          {myData.components && myData.components.map(({ component }, index) => {
            const PrismicComponent = PrismicTypes[component.type];
            return (
              PrismicComponent && (
                <PrismicComponent
                  type={component.type}
                  data={component.data}
                  key={component.type + index.toString()}
                />
              )
            );
          })}
        </div>
      )}


    </main>
    </React.Fragment>

  )
}