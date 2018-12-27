import React from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
           fab: { margin: theme.spacing.unit, },
  extendedIcon: { marginRight: theme.spacing.unit, },
});


class VotingPoll extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      popularFrameworks: [
        { name: "React",   votes: 15 },
        { name: "Vue",     votes: 12 },
        { name: "Angular", votes: 9  },
        { name: "Ember",   votes: 4  }
      ]
    };
    this.handleVotes = this.handleVotes.bind(this);
  }

  handleVotes(id) {
    const updatedFrameworks = [...this.state.popularFrameworks];
    updatedFrameworks[id].votes += 1;
    this.setState({updatedFrameworks});
  }

  frameworkVote = (nVotes) => (nVotes > 9) ?
    (<h3 className="item-votes"><span>{nVotes}</span></h3>) :
    (<h3 className="item-vote"><span>{nVotes}</span></h3>);

  render() {
    return (
      <div className="wrapper">
      {
        this.state.popularFrameworks.map((framework, index) =>
          <div className="fw-grided">
            {this.frameworkVote(framework.votes)}
            <h3 className="item-name">{framework.name}</h3>
            <h1 className="item-like">
              <Fab color="white" aria-label="Add" className={this.props.fab}>
                <AddIcon onClick={ () => this.handleVotes(index) } />
              </Fab>
            </h1>
          </div>
        )
      }
      </div>
    )
  }
}

VotingPoll.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VotingPoll);
