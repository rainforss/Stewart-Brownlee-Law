import React from "react"
import gridStyles from "./grid.module.scss"

const Grid = () => {
  return (
    <div className={gridStyles.grid}>
      <div className={gridStyles.rows}>
        <div className={gridStyles.top}></div>
        <div className={gridStyles.middle}></div>
        <div className={gridStyles.bottom}></div>
      </div>
      <div className={gridStyles.cols}>
        <div className={gridStyles.left}></div>
        <div className={gridStyles.center}></div>
        <div className={gridStyles.right}></div>
      </div>
    </div>
  )
}

export default Grid
