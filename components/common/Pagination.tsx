import React from 'react'
import Button from './Button/Button'

type PaginationProps = {
  page: number
  setPage: (page: number) => void
  totalPages: number
}

const Pagination = ({ page, setPage, totalPages }: PaginationProps) => {
  const getPages = () => {
    const start = Math.max(1, page)
    const end = Math.min(totalPages, page + 3)

    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
  }

  return (
    <nav aria-label="Pagination">
      <ul className="flex justify-end gap-2 my-3 text-sm">
        {/* Previous */}
        <li>
          <Button
            click={() => {
              setPage(page - 1)
              getPages()
            }}
            disabled={page === 1}
          >
            Previous
          </Button>
        </li>

        {/* Page numbers */}
        {getPages().map((number, index) => (
          <li key={index}>
            <Button
              click={() => {
                setPage(number)
              }}
              className={
                number === page ? 'bg-blue-500 text-white rounded-sm' : ''
              }
            >
              {number}
            </Button>
          </li>
        ))}

        {/* Next */}
        <li>
          <Button
            click={() => {
              setPage(page + 1)
              getPages()
            }}
            disabled={page === totalPages}
            className={page === totalPages ? 'cursor-not-allowed' : ''}
          >
            Next
          </Button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
