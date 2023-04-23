

import React, { ReactNode } from "react";

type ScrollProps = {
  children: ReactNode;
};

const Scroll = ({ children }: ScrollProps) => {
  return (
    <div style={{ overflowY: 'scroll', overflow: '', height: '100px' }}>
      {children}
    </div>
  );
};

export default Scroll;