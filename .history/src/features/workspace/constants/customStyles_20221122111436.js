export const customStyles = {
  control: (styles) => ({
    ...styles,
    width: '100%',
    maxWidth: '14rem',
    minWidth: '12rem',
    color: 'ye',
    fontSize: '0.8rem',
    height:"10px",
    backgroundColor: '#1A2023',
    cursor: 'pointer',
    borderColor:"#1A2023",
    borderRight: '1px outset rgba(0, 0, 0, 0.38)',
    ':hover': {
      borderRight: '1px solid #000000',
      boxShadow: 'none',
    },
  }),
  option: (styles) => {
    return {
      ...styles,
      color: 'white',
      fontSize: '0.8rem',
      lineHeight: '1.75rem',
      width: '100%',
      background: '#1A2023',
      ':hover': {
        backgroundColor: '#1A2023',
        color: 'yellow',
        cursor: 'pointer',
      },
    };
  },
  menu: (styles) => {
    return {
      ...styles,
      backgroundColor: '#1A2023',
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
