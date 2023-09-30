import {
  useEmbedRef,
  LiveboardEmbed,
} from '@thoughtspot/visual-embed-sdk/react';
import { authStatus } from '../auth/trustedAuth';
import { useState } from 'react';

interface LiveboardProps {
  id: string;
}

authStatus();

const ids = [
  '9bd202f5-d431-44bf-9a07-b4f7be372125',
  'bea79810-145f-4ad0-a02c-4177a6e7d861',
  '74852035-9624-4fac-b352-200fa8506b14',
  '9beaacbf-e65b-4416-b110-238d109c3531',
];

const Liveboard = (props: LiveboardProps) => {
  console.log(props);
  const embedRef = useEmbedRef();
  return (
    <LiveboardEmbed
      frameParams={{
        height: 1200,
      }}
      ref={embedRef}
      liveboardId={props.id}
    />
  );
};

export default function TabSwitch() {
  const [id, setId] = useState<string>('bea79810-145f-4ad0-a02c-4177a6e7d861');

  const selectId = () => {
    const randNum = Math.floor(Math.random() * 4);
    setId(ids[randNum]);
  };

  console.log('ID:', id);

  return (
    <>
      <button onClick={selectId}>Change the liveboard</button>
      <hr />
      <Liveboard id={id} />
    </>
  );
}
