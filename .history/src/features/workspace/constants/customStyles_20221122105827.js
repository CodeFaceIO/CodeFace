export const customStyles = {
  control: (styles) => ({
    ...styles,
    width: '100%',
    maxWidth: '14rem',
    minWidth: '12rem',
    color: 'yellow',
    fontSize: '0.8rem',
    height:"10px",
    backgroundColor: '#1A2023',
    cursor: 'pointer',
    border: '1px solid rgba(0, 0, 0, 0.38)',
    ':hover': {
      border: '1px solid #000000',
      boxShadow: 'none',
    },
  }),
  option: (styles) => {
    return {
      ...styles,
      color: 'yellow',
      fontSize: '0.8rem',
      lineHeight: '1.75rem',
      width: '100%',
      background: '#fff',
      ':hover': {
        backgroundColor: 'rgb(243 244 246)',
        color: 'yellow',
        cursor: 'pointer',
      },
    };
  },
  menu: (styles) => {
    return {
      ...styles,
      backgroundColor: '#fff',
      maxWidth: '14rem',
      border: '2px solid #000000',
    };
  },

  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: 'yellow',
      fontSize: '0.8rem',
      lineHeight: '1.75rem',
    };
  },
};
