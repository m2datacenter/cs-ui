import styled, { css } from 'styled-components';

export const Label = styled.label`
  background-color: inherit;

  ${(props) => (props.error
    ? css`color: ${props.theme.input.assistiveText.errorColor};`
    : css`color: ${props.theme.label.color};`)}

  font-size: ${(props) => props.theme.label.size};

  ${(props) => ['outlined', 'filled'].includes(props.variant) && css`
    left: 5px;
  `}

  position: absolute;
  transform-origin: 0 0;
  transition: all 0.2s ease;
`;

export const Container = styled.div`
  ${(props) => (props.variant === 'filled'
    ? css`background-color: ${props.theme.palette.default.light};`
    : css`background-color: inherit;`)};

  ${(props) => (props.error
    ? css`border-color: ${props.theme.input.assistiveText.errorColor};`
    : css`border-color: ${props.theme.input.border.color};`)};

  ${(props) => (props.variant === 'outlined'
    ? css`border-radius: 5px 5px 5px 5px`
    : css`border-radius: 5px 5px 0px 0px`)};

  border-style: solid;

  ${(props) => (props.variant === 'outlined'
    ? css`border-width: 1px 1px 1px 1px`
    : css`border-width: 0px 0px 1px 0px`)};

  display: flex;

  ${(props) => props.variant === 'filled' && css`
    height: 37px;
  `}

  ${(props) => props.multiline && css`
    height: 75px;
  `}

  ${(props) => props.margin && css`margin-bottom: 10px;`}
  ${(props) => props.extraMargin && css`margin-bottom: 30px;`}

  padding: 3px 0px;
  position: relative;
  width: 100%;

  &:hover {
    ${(props) => (props.error
    ? css`border-color: ${props.theme.input.assistiveText.errorColor};`
    : css`border-color: ${props.theme.input.border.hoverColor};`)}

    ${Label} {
      font-weight: 500;
    }
  }
`;

const baseCSS = css`
  background-color: transparent;
  border: none;

  ${(props) => (props.error
    ? css`color: ${props.theme.input.assistiveText.errorColor};`
    : css`color: inherit;`)};

  ${(props) => css`font-size: ${props.theme.input.size}`};

  outline: none;
  transition: all 0.15s ease;
  width: 100%;
  -webkit-appearance: none;

  ${(props) => props.variant === 'filled' && css`
    position: absolute;
    bottom: 0px;
    padding-left: 5px;
  `}

  ${(props) => props.variant === 'outlined' && css`
    padding-left: 5px;
  `}

  &:not(:placeholder-shown) {
    + label {
      ${(props) => props.variant === 'filled' && css`
        transform: translateY(-1px) scale(0.75);
      `}

      ${(props) => props.variant === 'outlined' && css`
        transform: translateY(-19px) scale(0.75);
      `}

      ${(props) => props.variant === 'standard' && css`
        transform: translateY(-13px) scale(0.75);
      `}
    }
  }

  &:focus {
    + label {
      ${(props) => (props.error
    ? css`color: ${props.theme.input.assistiveText.errorColor};`
    : css`color: ${props.theme.input.border.focusColor};`)};


      ${(props) => props.variant === 'filled' && css`
        transform: translateY(-1px) scale(0.75);
      `}

      ${(props) => props.variant === 'outlined' && css`
        transform: translateY(-19px) scale(0.75);
      `}

      ${(props) => props.variant === 'standard' && css`
        transform: translateY(-13px) scale(0.75);
      `}

      + span {
        ${(props) => (props.variant === 'outlined'
    ? css`transform: scaleX(0)`
    : css`transform: scaleX(1)`)}
      }
    }
  }
`;

export const Input = styled.input`
  ${baseCSS}
`;

export const TextArea = styled.textarea.attrs({
  rows: 3,
})`
  ${baseCSS}
  overflow: hidden;
  resize: none;
`;

export const SpanBorder = styled.span`
  ${(props) => (props.error
    ? css`background-color: ${props.theme.input.assistiveText.errorColor};`
    : css`background-color: ${props.theme.input.border.focusColor};`)};

  bottom: -1px;
  height: 2px;
  left: 0;
  position: absolute;
  transition: all 0.15s ease;
  transform-origin: 0 0;
  transform: scaleX(0);
  width: 100%;
`;

export const AssistiveText = styled.div`
  bottom: -18px;

  ${(props) => (props.error
    ? css`color: ${props.theme.input.assistiveText.errorColor};`
    : css`color: ${props.theme.input.assistiveText.infoColor};`)};

  ${(props) => css`font-size: ${props.theme.input.assistiveText.size};`};

  ${(prop) => (['outlined', 'filled'].includes(prop.variant)
    ? css`left: 10px;`
    : css`left:0px;`)};

  position: absolute;
`;
