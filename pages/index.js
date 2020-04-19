import Link from 'next/link';
import Head from 'next/head';

import { useState } from 'react';
import CHANNELS from '../data/channels';

const Index = (props) => {
  const countries = ["france", "cameroon"]
  const [channels, setChannels] = useState(CHANNELS);

  const style = {
    img: {
      width: "250px",
      height: "auto",
    }
  }

  let countriesJSX = [];
  countries.forEach((elmt, index) => (
    countriesJSX.push(
      <option value={elmt} key={index}>
        {elmt}
      </option>)  
  ))

  let channelsJSX = [];
  channels.forEach((elmt, index) => channelsJSX.push(
    <Link href={`/channel/${elmt.name}`}>
      <a key={index} className="card">
        <div style={{width: "100%", height: "100%"}} className="box-center">
          <img src={elmt.picture} alt={elmt.name} style={style.img} />
        </div>
      </a>
    </Link>
  ));
  
  return (
    <div>
      <Head>
        <title>Tv App | Home</title>
      </Head>
      <div>
        <label htmlFor="countries" className="title">Choose your country</label><br />
        <select id="countries" className="select"
          onClick={ (e) => setChannels(CHANNELS.filter(channel => channel.country == e.target.value)) } 
        >
          {countriesJSX}
        </select>
      </div>

      <div>
        {channelsJSX}
      </div>
    </div>
  )
}

export default Index;