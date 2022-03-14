import React from 'react'
import Listing from '../components/Listing'
import Navbar from '../components/Navbar'

function ProblemStatement() {

  const data = [
    {
      name: "Songdew",
      icon: "data:image/png;base64,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",
      desctiption: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia eos nihil nulla tempore nam veritatis, reprehenderit cupiditate quas. Ducimus, quo."
    },
    {
      name: "Google",
      icon: "data:image/png;base64,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",
      desctiption: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia eos nihil nulla tempore nam veritatis, reprehenderit cupiditate quas. Ducimus, quo."
    },
    {
      name: "Microsoft",
      icon: "data:image/png;base64,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",
      desctiption: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia eos nihil nulla tempore nam veritatis, reprehenderit cupiditate quas. Ducimus, quo."
    },
    {
      name: "GeeksForGeeks",
      icon: "data:image/png;base64,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",
      desctiption: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia eos nihil nulla tempore nam veritatis, reprehenderit cupiditate quas. Ducimus, quo."
    },
    {
      name: "CodeNation",
      icon: "data:image/png;base64,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",
      desctiption: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia eos nihil nulla tempore nam veritatis, reprehenderit cupiditate quas. Ducimus, quo."
    },
    {
      name: "Adobe",
      icon: "data:image/png;base64,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",
      desctiption: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia eos nihil nulla tempore nam veritatis, reprehenderit cupiditate quas. Ducimus, quo."
    },
  ]

  return (
    <div>
      <Navbar />
      <Listing title="Problem Statement" data={data} />
    </div>
  )
}

export default ProblemStatement