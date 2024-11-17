import React from 'react'
// import { Card } from 'react-bootstrap';
import './css/LatestNewsScroll.css'

const LatestNewsScroll = () => {
  const items = [
    'Item 1 jkhkjh bjjkhjk jkhjhjk njhhn mnlhjn nllkln kkjl klnkl',
    'Item 2 jkhjkhsadbad m,n,mn,m',
    'Item 3 ',
    'Item 4 sadkljaskljdsa',
    'Item 5 sadhjsahdjkhasdj',
    'Item 6 sadhjsahdjkhasdj',
    'Item 7 sadhjsahdjkhasdj',
    'Item 8 sadhjsahdjkhasdj',
    'Item 9 sadhjsahdjkhasdj',
    'Item 10 sadhjsahdjkhasdj',
    'Item 11 sadhjsahdjkhasdj bhghjgfgh hjfghg ghghfghfgh',
    'Item 12 sadhjsahdjkhasdj bhghjgfgh hjfghg ghghfghfgh',
    'Item 13 sadhjsahdjkhasdj bhghjgfgh hjfghg ghghfghfgh',
    'Item 14 sadhjsahdjkhasdj bhghjgfgh hjfghg ghghfghfgh',
    'Item 15 sadhjsahdjkhasdj bhghjgfgh hjfghg ghghfghfgh'
];
  return (
    <div className='news-card'>
            {/* <Card.Body> */}
                <div style={{alignItems:'center', fontSize:'30px'}}>News</div>
                <div className="scrolling-news">
                    {items.map((item, index) => (
                        <div key={index} className="scrolling-item" >
                            {item}
                        </div>
                    ))}
                </div>
            {/* </Card.Body> */}
        </div>
  )
}

export default LatestNewsScroll