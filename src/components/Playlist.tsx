import React from 'react'

type Props = {}

const Playlist = (props: Props) => {
  return (
    <div>{localStorage.getItem("fav")}</div>
  )
}

export default Playlist;