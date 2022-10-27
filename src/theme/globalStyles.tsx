import { useTheme } from '@mui/material/styles';
import { GlobalStyles as GlobalThemeStyles } from '@mui/material';

const GlobalStyles = () => {
  const theme = useTheme();

  return (
    <GlobalThemeStyles
      styles={{
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },
        '*::-webkit-scrollbar': {
          width: 5,
          height: 5,
        },
        '*::-webkit-scrollbar-track': {
          boxShadow: 'inset 0 0 5px #C8FACD',
          borderRadius: 10,
        },
        '*::-webkit-scrollbar-thumb': {
          background: theme.palette.primary.main,
          borderRadius: 10,
        },
        '*::-webkit-scrollbar-thumb:hover': {
          background: theme.palette.primary.main,
        },
        html: {
          width: '100%',
          height: '100%',
          WebkitOverflowScrolling: 'touch',
        },
        body: {
          width: '100%',
          height: '100%',
          lineHeight: 1,
        },
        '#root': {
          width: '100%',
          height: '100%',
        },
        input: {
          '&[type=number]': {
            MozAppearance: 'textfield',
            '&::-webkit-outer-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
            '&::-webkit-inner-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
          },
        },
        textarea: {
          '&::-webkit-input-placeholder': {
            color: theme.palette.text.disabled,
          },
          '&::-moz-placeholder': {
            opacity: 1,
            color: theme.palette.text.disabled,
          },
          '&:-ms-input-placeholder': {
            color: theme.palette.text.disabled,
          },
          '&::placeholder': {
            color: theme.palette.text.disabled,
          },
        },

        img: { display: 'block', maxWidth: '100%' },

        // Lazy Load Img
        '.blur-up': {
          WebkitFilter: 'blur(5px)',
          filter: 'blur(5px)',
          transition: 'filter 400ms, -webkit-filter 400ms',
        },
        '.blur-up.lazyloaded ': {
          WebkitFilter: 'blur(0)',
          filter: 'blur(0)',
        },
        'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,font,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td':
          {
            margin: 0,
            padding: 0,
            border: 0,
            outline: 0,
            fontSize: '100%',
            verticalAlign: 'baseline',
            background: 'transparent',
          },
        'ol,ul ': {
          listStyle: 'none',
        },
        'blockquote,q': {
          quotes: 'none',
        },
        'blockquote:before,blockquote:after,q:before,q:after': {
          content: '""',
        },
        ':focus': {
          outline: 0,
        },
        ins: {
          textDecoration: 'none',
        },
        del: {
          textDecoration: 'line-through',
        },
        table: {
          borderCollapse: 'collapse',
          borderSpacing: 0,
        },
        iframe: {
          display: 'none',
        },
      }}
    />
  );
};

export default GlobalStyles;
