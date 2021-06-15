import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
card: {
    maxWidth: '320px',
    width: '100%',
    height: 'max-content',
    backgroundColor: '#a0a0a0',
    color: '#fafafa',
},
disabled: {
    opacity: 0.5,
},
width: {
    maxWidth: '320px',
    width: '100%',
},
toLeft: {
    marginRight: 'auto',
},
title: {
    fontSize: 14,
},
pos: {
    marginBottom: '16px',
},
});

export default useStyles;