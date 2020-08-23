import React from "react"
import paginationStyles from "./pagination.module.scss"

const Pagination = ({ totalItems, itemsPerPage, currentPage, choosePage }) => {
  const maxPageNumber = Math.ceil(totalItems / itemsPerPage)
  const allPageNumbers = []
  for (var i = 1; i <= maxPageNumber; i++) {
    allPageNumbers.push(i)
  }
  return (
    <div className={paginationStyles.wrap}>
      {allPageNumbers.map(num => (
        <div
          key={num}
          name={num}
          className={paginationStyles.pageNumber}
          style={num === currentPage ? { color: "rgb(65, 128, 65)" } : {}}
          onClick={choosePage}
        >
          <span>{num}</span>
          <div className={paginationStyles.underlineOutter}>
            <div className={paginationStyles.underlineInner}>
              <div
                className={paginationStyles.front}
                style={
                  num === currentPage
                    ? { backgroundColor: "rgb(65, 128, 65)" }
                    : {}
                }
              ></div>
              <div className={paginationStyles.back}></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Pagination
