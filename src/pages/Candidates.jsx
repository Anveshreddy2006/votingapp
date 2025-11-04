import React from 'react'
import { useSelector } from 'react-redux'
import { candidates as dummyCandidates } from '../data'
import { useParams } from 'react-router-dom'
import { Candidate } from '../components/Candidate.jsx'
import ConfirmVote from '../components/ConfirmVote.jsx'


const Candidates = () => {

  const { id } = useParams()

  const voteCandidateModalShowing = useSelector(state => state.ui.voteCandidateModalShowing)
  //get candidates that are belong to ths election

  const candidates = dummyCandidates.filter(candidate => candidate.election === id);

  return (
    <>
      <section className="candidates">
        <header className="candidates__header">
          <h1>Vote your candidate</h1>
          <p>These are the candidates for the selected election.Please vote once and wisely, because you won't
            be allowed to in this election again.</p>
        </header>
        <div className="container candidates__container">
          {
            candidates.map(candidate => <Candidate key={candidate.id} {...candidate} />)
          }
        </div>

      </section>
      {voteCandidateModalShowing && <ConfirmVote />}
    </>
  )
}

export default Candidates
