// individual style, comment out above, and uncomment here and add styles
import styled, { css } from 'styled-components';

export default styled.div(() => {
  return css`
    margin: 0px 0;

    .slick-slide {
      outline: none;
      width: 1530px;
      height: 50vh;
      background: #345677;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
    }
  `;
});
