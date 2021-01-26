import React from 'react'
import PropTypes from 'prop-types'
import {Button} from '@material-ui/core'

const FilterButton = ({ active, children, onClick }) => (
    <Button
      variant="outlined"
      color="primary"
      onClick={onClick}
      disabled={active}
    >
      {children}
    </Button>
)

FilterButton.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default FilterButton
