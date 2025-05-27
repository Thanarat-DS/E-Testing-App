import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, H2 } from '@adminjs/design-system'

const SwitchViewQuestionAction = () => {
  const navigate = useNavigate()

  const handleRedirect = () => {
    navigate('/admin/pages/grouped-questions')
  }

  return (
    <Box variant="grey">
      <H2>Grouped Questions View</H2>
      <Button variant="primary" mt="lg" onClick={handleRedirect}>
        ไปยังหน้า Grouped Questions
      </Button>
    </Box>
  )
}

export default SwitchViewQuestionAction
