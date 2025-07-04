import { describe, expect, it } from 'vitest'
import { reducer } from './use-toast'

interface Toast {
  id: string
  open?: boolean
  title?: string
}

describe('use-toast reducer', () => {
  it('adds a toast', () => {
    const state = { toasts: [] as Toast[] }
    const action = { type: 'ADD_TOAST' as const, toast: { id: '1', title: 'Hello' } }
    const result = reducer(state, action)
    expect(result.toasts.length).toBe(1)
    expect(result.toasts[0]).toMatchObject({ id: '1', title: 'Hello' })
  })

  it('updates a toast', () => {
    const state = { toasts: [{ id: '1', title: 'Old', open: true }] as Toast[] }
    const action = { type: 'UPDATE_TOAST' as const, toast: { id: '1', title: 'New' } }
    const result = reducer(state, action)
    expect(result.toasts[0].title).toBe('New')
  })

  it('dismisses a toast', () => {
    const state = { toasts: [{ id: '1', open: true }] as Toast[] }
    const action = { type: 'DISMISS_TOAST' as const, toastId: '1' }
    const result = reducer(state, action)
    expect(result.toasts[0].open).toBe(false)
  })

  it('removes a toast', () => {
    const state = { toasts: [{ id: '1' }, { id: '2' }] as Toast[] }
    const removeOne = reducer(state, { type: 'REMOVE_TOAST' as const, toastId: '1' })
    expect(removeOne.toasts.map(t => t.id)).toEqual(['2'])

    const removeAll = reducer(state, { type: 'REMOVE_TOAST' as const })
    expect(removeAll.toasts.length).toBe(0)
  })
})
