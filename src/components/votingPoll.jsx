import React from 'react';


export default (props) => {

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
          <h1 className="item-like"><span>+</span></h1>
        </div>
      )
    }
    </div>
  );
}
