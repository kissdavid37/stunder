import React,{useState,useEffect} from 'react'
import TinderCard from "react-tinder-card";
import "./TinderCards.css"




function TinderCards() {
     //ugyanaz mint const people=[]
    //people.push('y','x');
    const [people,setPeople]=useState([
        // {
        //     name:'David',
        //     url:'https://www.wall-street.ro/image_thumbs/thumbs/ced/ced4b19c4816f098355b484eeffcc526-1063x560-00-86.jpg?v=1590673289'
        // },
        // {
        //     name: 'Nagy Árpád',
        //     url:'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg'
        // },
    ]);

    //connect to database
    // useEffect(() => {
    //  const unsubscribe = database.collection('people').onSnapshot(snapshot=>(
    //       setPeople(snapshot.docs.map(doc=>doc.data())) //csak akkor fut le amikor a komponens betöltődik,máskor nem
    //     )); //a people tömbbe belerakja a people nevű collection adatait

    //     return () =>{
    //         unsubscribe();
    //     }
    // }, [/*people*/]); //.map azt jelenti,hogy végigmegy mindegyik dokumentumon a collectionből
     

    

    return (
        <div>
            <h2>Tinder cards</h2>
            <div className="tinderCards__cardContainer">
            {people.map(person=>(
                <TinderCard className='swipe' key={person.name} preventSwipe={['up','down']}>
                    <div className='card' style={{backgroundImage:`url(${person.url})`}}>
                        
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards
