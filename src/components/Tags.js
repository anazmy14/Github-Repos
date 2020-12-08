import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    backgroundColor: 'transparent',
    border : 'none',
    boxShadow : 'none',
    margin : '30px' 
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function ChipsArray({languages, deleteLanguage  }) {
    const classes = useStyles();
    const [chipData, setChipData] = React.useState([]);

    useEffect(()=>{
        let tags = languages.map( l =>  createTag(l) )
        setChipData(tags)
    }, [languages])

    function createTag(language){
        return {
            key : language,
            label : language
        }
    } 

  
    const handleDelete = (chipToDelete) => () => {
      setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
      deleteLanguage(chipToDelete.label)
    };

    if (!languages.length) return null
  
    return (
      <Paper component="ul" className={classes.root}>
        {chipData.map((data) => {
          let icon;
  
          if (data.label === 'React') {
            icon = <TagFacesIcon />;
          }
  
          return (
            <>
            <li key={data.key}>
              <Chip 
                icon={icon}
                label={data.label}
                onDelete={data.label === 'React' ? undefined : handleDelete(data)}
                className={classes.chip}
              />
            </li>

            </>
            
          );
        })}
      </Paper>
    );
  }
