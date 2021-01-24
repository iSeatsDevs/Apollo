import PropTypes from 'prop-types';

const getEffectsPropTypes = () => {
  return {
    light: PropTypes.bool,
    bold: PropTypes.bool,
    mark: PropTypes.bool,
    underline: PropTypes.bool,
    inverse: PropTypes.bool
  };
};

const getEffectsDefaults = () => {
  return {
    light: false,
    bold: false,
    mark: false,
    underline: false,
    inverse: false
  };
};

const getEnabledEffects = ({ light, bold, underline, mark, inverse }) => {
  return {
    typography__light: light || false,
    typography__bold: bold || false,
    typography__underline: underline || false,
    typography__mark: mark || false,
    typography__inverse: inverse || false
  };
};

export { getEnabledEffects, getEffectsPropTypes, getEffectsDefaults };
