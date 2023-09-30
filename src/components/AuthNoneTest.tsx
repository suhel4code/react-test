import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { init, AuthType } from '@thoughtspot/visual-embed-sdk';
import {
  LiveboardEmbed,
  useEmbedRef,
  SearchEmbed,
} from '@thoughtspot/visual-embed-sdk/lib/src/react';

init({
  thoughtSpotHost: 'https://172.19.217.237:8443/',
  authType: AuthType.None,
});

export default function AuthNoneTest() {
  const [value, setValue] = useState<string>(
    '74852035-9624-4fac-b352-200fa8506b14'
  );

  return (
    <div style={{ margin: '20px' }}>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>Age</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={value}
            label={value}
            onChange={(event: SelectChangeEvent) => {
              setValue(event.target.value as string);
            }}
          >
            <MenuItem value={'74852035-9624-4fac-b352-200fa8506b14'}>
              Ten
            </MenuItem>
            <MenuItem value={'9bd202f5-d431-44bf-9a07-b4f7be372125'}>
              Twenty
            </MenuItem>
            <MenuItem value={'9f542e6b-6c06-4254-b546-a3b50e0125e1'}>
              Thirty
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <hr />
      {/* <SearchEmbed
        frameParams={{
          width: '100%',
          height: '100%',
        }}
      /> */}
      <LiveboardEmbed
        frameParams={{
          height: 1200,
        }}
        // ref={embedRef}
        liveboardId={value}
      />
    </div>
  );
}
