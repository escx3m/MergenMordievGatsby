import { useEffect, useState } from "react"
import axios from "axios"

export default function useBookSearch(tagId, query, pageNumber, setBooks) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setBooks([])
  }, [tagId, query])

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel
    const tag = tagId === -1 ? null : tagId
    axios({
      method: "GET",
      url: "/api/books",
      params: { tagId: tag, query, pageNumber },
      cancelToken: new axios.CancelToken(c => (cancel = c)),
    })
      .then(res => {
        const { data } = res.data
        const nextBooks = data
          .reduce((acc, { id }) => {
            if (!acc.includes(id)) acc.push(id)
            return acc
          }, [])
          .map(id => {
            const tags = data
              .filter(item => item.id === id)
              .map(({ tagTitle, tagId }) => ({
                tagTitle,
                tagId,
              }))
            const book = data.find(item => item.id === id)
            return { book, tags }
          })
        setBooks(prevBooks => {
          return [...prevBooks, ...nextBooks]
        })
        setHasMore(nextBooks.length > 0)
        setLoading(false)
      })
      .catch(e => {
        if (axios.isCancel(e)) return
        setError(true)
      })
    return () => cancel()
  }, [tagId, query, pageNumber])

  return { loading, error, hasMore }
}
