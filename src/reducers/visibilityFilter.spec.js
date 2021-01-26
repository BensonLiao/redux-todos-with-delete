import visibilityFilter from './visibilityFilter'
import {VisibilityFilters} from '../actions'

describe('visibility filter reducer', () => {
  it('should handle initial state', () => {
    expect(
      visibilityFilter(undefined, {})
    ).toEqual(VisibilityFilters.SHOW_ALL)
  })

  it(`should handle SET_VISIBILITY_FILTER to ${VisibilityFilters.SHOW_ACTIVE}`, () => {
    expect(
      visibilityFilter(undefined, {
        type: 'SET_VISIBILITY_FILTER',
        filter: VisibilityFilters.SHOW_ACTIVE
      })
    ).toEqual(VisibilityFilters.SHOW_ACTIVE)
  })

  it(`should handle SET_VISIBILITY_FILTER to ${VisibilityFilters.SHOW_COMPLETED}`, () => {
    expect(
      visibilityFilter(undefined, {
        type: 'SET_VISIBILITY_FILTER',
        filter: VisibilityFilters.SHOW_COMPLETED
      })
    ).toEqual(VisibilityFilters.SHOW_COMPLETED)
  })
})
