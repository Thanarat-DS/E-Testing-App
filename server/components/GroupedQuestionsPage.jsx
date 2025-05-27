import React, { useEffect, useState } from 'react'
import { ApiClient } from 'adminjs'
import { Box, H2, Table, TableRow, TableCell, Link } from '@adminjs/design-system'

const api = new ApiClient()

const GroupedQuestionsPage = () => {
  const [data, setData] = useState([])

  console.log('Hello World!');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.getPage({ pageName: 'grouped-questions' })
        console.log('✅ res:', res)
        console.log('✅ res.data:', res.data)
  
        const nested = res?.data
  
        if (Array.isArray(nested)) {
          setData(nested)
        } else if (nested?.data && Array.isArray(nested.data)) {
          setData(nested.data)
        } else {
          console.warn('Unexpected shape:', nested)
          setData([])
        }
      } catch (err) {
        console.error('🔥 API fetch error:', err)
      }
    }
  
    fetchData()
  }, [])
  

  return (
    <Box variant="grey">
      <H2>Grouped Questions by Topic</H2>
      <Table>
        <thead>
          <TableRow>
            <TableCell><strong>Topic Code</strong></TableCell>
            <TableCell><strong>Total Questions</strong></TableCell>
          </TableRow>
        </thead>
        <tbody>
          {data.map(({ topic_code, total }) => (
            <TableRow key={topic_code}>
              <TableCell>
                <Link href={`/admin/resources/ข้อสอบ?filters.topic_code=${topic_code}`}>
                  {topic_code}
                </Link>
              </TableCell>
              <TableCell>{total}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Box>
  )
}

export default GroupedQuestionsPage

