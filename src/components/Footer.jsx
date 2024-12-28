import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import PropTypes from 'prop-types'

export default function Footer({
  currentPage,
  reposPerPage,
  totalRepos,
  setCurrentPage,
}) {
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
    pageNumbers.push(i)
  }

  const handlePrevious = () => {
    setCurrentPage(Math.max(1, currentPage - 1))
  }

  const handleNext = () => {
    setCurrentPage(Math.min(pageNumbers.length, currentPage + 1))
  }
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={handlePrevious}
            className='cursor-pointer'
          />
        </PaginationItem>
        {pageNumbers.map((i) => (
          <PaginationItem key={i}>
            <PaginationLink
              onClick={() => paginate(i)}
              isActive={currentPage === i}
              className='cursor-pointer'
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext onClick={handleNext} className='cursor-pointer' />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

Footer.propTypes = {
  currentPage: PropTypes.number,
  reposPerPage: PropTypes.number,
  totalRepos: PropTypes.number,
  setCurrentPage: PropTypes.func,
}
