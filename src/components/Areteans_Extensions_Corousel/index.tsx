import { Input, withConfiguration } from '@pega/cosmos-react-core';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import type { PConnFieldProps } from './PConnProps';

import StyledAreteansExtensionsCorouselWrapper from './styles';

// interface for props
interface AreteansExtensionsCorouselProps extends PConnFieldProps {
  // If any, enter additional props that only exist on TextInput here
}

// interface for StateProps object
interface StateProps {
  value: string;
  hasSuggestions: boolean;
}

// Duplicated runtime code from Constellation Design System Component

// props passed in combination of props from property panel (config.json) and run time props from Constellation
// any default values in config.pros should be set in defaultProps at bottom of this file
function AreteansExtensionsCorousel(props: AreteansExtensionsCorouselProps) {
  const {
    getPConnect,
    value,
    placeholder,
    disabled = false,
    readOnly = false,
    required = false,
    label,
    hideLabel = false,
    testId
  } = props;

  const pConn = getPConnect();
  const actions = pConn.getActionsApi();
  const stateProps = pConn.getStateProps() as StateProps;
  const propName: string = stateProps.value;

  const handleOnChange = (event: any) => {
    const { value: updatedValue } = event.target;
    actions.updateFieldValue(propName, updatedValue);
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <StyledAreteansExtensionsCorouselWrapper>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </StyledAreteansExtensionsCorouselWrapper>
  );
}

export default withConfiguration(AreteansExtensionsCorousel);
