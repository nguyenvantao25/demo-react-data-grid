import { css } from '@linaria/core';

import Test from './Test';

export const Route = createFileRoute({
  component: Animation
});

const rangeClassname = css`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;






function Animation() {


  return (
    <>
      {/* <div className={rangeClassname} /> */}

      <Test
      />

    </>
  );
}
