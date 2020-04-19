import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

import Iframe from 'react-iframe';
import CHANNELS from '../../data/channels';

const Post = (props) => {
  const router = useRouter();
  const { name } = router.query;

  let channel = CHANNELS.filter(elmt => elmt.name === name);

  return (
    <div>
       <Head>
        <title>Tv App | {channel.length === 0 ? 'Channel not found' : channel[0].name} </title>
      </Head>

      <Link href="/">
        <a>Back to home</a>
      </Link>
      <br />

      <div>
        {channel.length === 0 ? <span>Channel not found</span> : <h3>{channel[0].name}</h3>}
      </div>

      <div className="box-center">
        {channel.length === 0 ? '' : <Iframe className="player" url={channel[0].code} />}
      </div>
    </div>
  )
}

export default Post;
