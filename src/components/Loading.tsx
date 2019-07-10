import React, { memo } from 'react';
import { Spin } from 'antd';

const containerStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
};

export default memo(
  () => {
    return (
      <div style={containerStyle}>
        <Spin size="large" />
      </div>
    );
  },
  () => true
);
