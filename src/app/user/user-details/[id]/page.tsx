

import React from 'react'

const singleUserPage = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      single user page {params.id}
    </div>
  )
}

export default singleUserPage
