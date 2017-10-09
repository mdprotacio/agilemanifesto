import React, { Component } from 'react';
import styles from './styles.scss';

export class component extends Component {
  render() {
    return (
      <div className={styles.principles}>
        <h1>Principles behind the Agile Manifesto</h1>

        <p>We follow these principles:</p>

        <p>
          Our highest priority is to satisfy the customer through early and
          continuous delivery of valuable software.
        </p>

        <p>
          Welcome changing requirements, even late in development. Agile
          processes harness change for the customer&apos;s competitive
          advantage.
        </p>

        <p>
          Deliver working software frequently, from a couple of weeks to a
          couple of months, with a preference to the shorter timescale.
        </p>

        <p>
          Business people and developers must work together daily throughout the
          project.
        </p>

        <p>
          Build projects around motivated individuals. Give them the environment
          and support they need, and trust them to get the job done.
        </p>

        <p>
          The most efficient and effective method of conveying information to
          and within a development team is face-to-face conversation.
        </p>

        <p>Working software is the primary measure of progress.</p>

        <p>
          Agile processes promote sustainable development. The sponsors,
          developers, and users should be able to maintain a constant pace
          indefinitely.
        </p>

        <p>
          Continuous attention to technical excellence and good design enhances
          agility.
        </p>

        <p>
          Simplicity--the art of maximizing the amount of work not done--is
          essential.
        </p>

        <p>
          The best architectures, requirements, and designs emerge from
          self-organizing teams.
        </p>

        <p>
          At regular intervals, the team reflects on how to become more
          effective, then tunes and adjusts its behavior accordingly.
        </p>
      </div>
    );
  }
}
component.displayName = 'Principles';
