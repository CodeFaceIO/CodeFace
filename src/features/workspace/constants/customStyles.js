export const customStyles = {
  control: (styles) => ({
    ...styles,
    width: '100%',
    maxWidth: '14rem',
    minWidth: '12rem',
    color: '#e2b461',
    fontSize: '0.8rem',
    height:"10px",
    backgroundColor: '#1c1f26',
    cursor: 'pointer',
    borderColor:"#1c1f26",
    borderRight: '1px outset rgba(0, 0, 0, 0.38)',
    ':hover': {
      borderRight: '1px solid #000000',
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
      background: '#1A2023',
      ':hover': {
        backgroundColor: '#1c1f26',
        color: '#e2b461',
        cursor: 'pointer',
      },
    };
  },
  menu: (styles) => {
    return {
      ...styles,
      backgroundColor: '#1c1f26',
      maxWidth: '14rem',
      border: '2px solid #000000',
    };
  },

  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: '#e2b461',
      fontSize: '0.8rem',
      lineHeight: '1.75rem',
    };
  },
};
