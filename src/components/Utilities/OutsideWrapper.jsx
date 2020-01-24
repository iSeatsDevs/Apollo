import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const OutsideWrapper = ({ children, onOutside }) => {
  const useOutsideAlerter = ref => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onOutside();
      }
    }

    useEffect(() => {
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    });
  };

  const wrapperRef = useRef(null);

  useOutsideAlerter(wrapperRef);

  return (
    <div ref={wrapperRef} style={{ display: 'inline-block' }}>
      {children}
    </div>
  );
};

OutsideWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  onOutside: PropTypes.func.isRequired,
};

export default OutsideWrapper;
