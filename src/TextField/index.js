import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Label,
  Input,
  TextArea,
  SpanBorder,
  AssistiveText,
} from './styles';

function TextField({
  multiline, variant, label, helperText, margin, error, ...rest
}) {
  return (
    <Container
      multiline={multiline}
      variant={variant}
      margin={margin}
      extraMargin={helperText.length > 0}
      error={error}
    >
      {
        multiline
          ? (
            <TextArea
              multiline={multiline}
              variant={variant}
              error={error}
              {...rest}
              placeholder="&nbsp;"
              autoComplete="off"
            />
          )
          : (
            <Input
              variant={variant}
              error={error}
              {...rest}
              placeholder="&nbsp;"
              autoComplete="off"
            />
          )
      }

      <Label multiline={multiline} variant={variant} error={error}>{label}</Label>

      <SpanBorder variant={variant} error={error} />

      {
        helperText.length > 0 && (
        <AssistiveText
          multiline={multiline}
          variant={variant}
          error={error}
        >
          {helperText}
        </AssistiveText>
        )
      }
    </Container>
  );
}

TextField.defaultProps = {
  error: false,
  multiline: false,
  variant: 'standard',
  helperText: '',
  margin: false,
};

TextField.propTypes = {
  error: PropTypes.bool,
  multiline: PropTypes.bool,
  variant: PropTypes.string,
  label: PropTypes.string.isRequired,
  helperText: PropTypes.string,
  margin: PropTypes.bool,
};

export default TextField;
