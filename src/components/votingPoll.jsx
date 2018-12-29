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
      listOfPopularFrameworks: [
        { name: "React",   votes: 15 },
        { name: "Vue",     votes: 12 },
        { name: "Angular", votes: 9  },
        { name: "Ember",   votes: 4  }
      ]
    };
    this.handleVotes = this.handleVotes.bind(this);
  }

  handleVotes(id) {
    const updatedList = [...this.state.listOfPopularFrameworks];
    updatedList[id].votes += 1;
    this.setState({updatedList});
  }

  styleCounter = (nVotes) => {
    if (nVotes > 99) return <h2 className="item-votes _3dig"><span>{nVotes}</span></h2>;
    if (nVotes < 10) return <h2 className="item-votes _1dig"><span>{nVotes}</span></h2>;
    return (<h2 className="item-votes _2dig"><span>{nVotes}</span></h2>);
  }

  render() {
    return (
      <div className="wrapper">
      {
        this.state.listOfPopularFrameworks.map((framework, index) =>
          <div className="flexed">
            {this.styleCounter(framework.votes)}
            <h2 className="item-name">{framework.name}</h2>
            <h1 className="item-like">
              <Fab color="white" aria-label="Add" className={this.props.fab}>
                <AddIcon className="counter" onClick={ () => this.handleVotes(index) } />
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
