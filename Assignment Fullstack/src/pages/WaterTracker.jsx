import { useCallback, useEffect, useMemo, useState } from 'react'
import CounterDisplay from '../components/CounterDisplay'

const WaterTracker = () => {
  const [count, setCount] = useState(0)
  const [goal, setGoal] = useState(() => {
    const savedGoal = localStorage.getItem('waterGoal')
    return savedGoal ? Number(savedGoal) : 8
  })
  const [tip, setTip] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [clicks, setClicks] = useState(0)

  useEffect(() => {
    const savedCount = localStorage.getItem('waterCount')
    if (savedCount !== null) {
      setCount(Number(savedCount))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('waterCount', String(count))
  }, [count])

  useEffect(() => {
    let active = true

    const fetchTip = async () => {
      try {
        setLoading(true)
        setError('')
        const response = await fetch('https://api.adviceslip.com/advice')
        if (!response.ok) {
          throw new Error('Failed to fetch tip')
        }
        const data = await response.json()
        if (active) {
          setTip(data?.slip?.advice ?? '')
        }
      } catch {
        if (active) {
          setError("Could not fetch today's health tip.")
        }
      } finally {
        if (active) {
          setLoading(false)
        }
      }
    }

    fetchTip()
    return () => {
      active = false
    }
  }, [])

  const addWater = useCallback(() => setCount((prev) => prev + 1), [])
  const removeWater = useCallback(() => setCount((prev) => (prev > 0 ? prev - 1 : 0)), [])
  const resetWater = useCallback(() => setCount(0), [])
  const saveGoal = useCallback(() => {
    localStorage.setItem('waterGoal', String(goal))
  }, [goal])
  const handleGoalChange = useCallback((event) => {
    const next = Number(event.target.value)
    setGoal(Number.isNaN(next) ? 0 : Math.max(0, next))
  }, [])

  const trackerTitle = useMemo(() => 'Daily Water Tracker', [])

  return (
    <div className="mx-auto mt-80 w-full max-w-2xl px-6">
      <div className="rounded-2xl border border-gray-300 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/30 backdrop-blur">
        <h1 className="mb-5 text-2xl font-semibold tracking-tight text-slate-100">{trackerTitle}</h1>
        <CounterDisplay count={count} goal={goal} />

        <div className="mb-4 flex flex-wrap gap-3">
          <button
            onClick={addWater}
            className="rounded-lg bg-gray-500 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            +
          </button>
          <button
            onClick={removeWater}
            className="rounded-lg bg-slate-700 px-4 py-2 font-semibold text-slate-100 transition hover:bg-slate-600"
          >
            -
          </button>
          <button
            onClick={resetWater}
            className="rounded-lg bg-rose-500 px-4 py-2 font-semibold text-white transition hover:bg-rose-400"
          >
            Reset
          </button>
        </div>

        <div className="mb-4 flex flex-wrap items-center gap-3">
          <label htmlFor="goal-input" className="text-sm font-medium text-slate-300">
            Daily goal:
          </label>
          <input
            id="goal-input"
            type="number"
            min="0"
            value={goal}
            onChange={handleGoalChange}
            className="w-20 rounded-md border border-slate-600 bg-slate-800 px-2 py-1 text-slate-100 outline-none focus:border-cyan-400"
          />
          <button
            onClick={saveGoal}
            className="rounded-lg border border-slate-600 bg-slate-800 px-3 py-1.5 font-medium text-slate-100 transition hover:bg-slate-700"
          >
            Save Goal
          </button>
        </div>

        <button
          onClick={() => setClicks((prev) => prev + 1)}
          className="mb-4 rounded-lg border border-white bg-grey px-3 py-1.5 text-sm font-medium text-amber-300 transition hover:bg-amber-500/20"
        >
          Unrelated button ({clicks})
        </button>

        <div className="rounded-xl border border-slate-700 bg-slate-800/70 p-4 text-left">
          {loading && <p className="text-slate-300">Loading today's health tip...</p>}
          {!loading && error && <p className="text-rose-400">{error}</p>}
          {!loading && !error && (
            <p className="text-slate-200">
              <span className="font-semibold text-cyan-300">Today's Health Tip:</span> {tip}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default WaterTracker

