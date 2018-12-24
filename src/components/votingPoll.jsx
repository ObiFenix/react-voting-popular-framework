import React from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function VotingPoll(props) {

  const popularFrameworks = [
    {
      name: "React",
      votes: 15,
    },
    {
      name: "Vue",
      votes: 12,
    },
    {
      name: "Angular",
      votes: 9,
    },
    {
      name: "Ember",
      votes: 4,
    },
  ];

  const { classes } = props;

  const frameworkVote = (nVotes) => (nVotes > 9) ?
    (<h3 className="item-votes"><span>{nVotes}</span></h3>) :
    (<h3 className="item-vote"><span>{nVotes}</span></h3>);

  return (
    <div className="wrapper">
    {
      popularFrameworks.map((framework, index) =>
        <div className="fw-grided">
          {frameworkVote(framework.votes)}
          <h3 className="item-name">{framework.name}</h3>
          <h1 className="item-like">
            <Fab color="white" aria-label="Add" className={classes.fab}>
              <AddIcon onClick={ e => alert(`You have voted for ${framework.name}`)}/>
            </Fab>
          </h1>
        </div>
      )
    }
    </div>
  );
}

VotingPoll.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(VotingPoll);
