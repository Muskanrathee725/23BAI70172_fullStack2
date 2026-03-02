import { memo } from 'react'

const CounterDisplay = ({ count, goal }) => {
  return (
    <div className="mb-5">
      <h2 className="mb-2 text-lg font-semibold text-slate-100">
        {count} / {goal} glasses completed
      </h2>
      {count >= goal && <p className="m-0 font-semibold text-emerald-400">Goal Reached</p>}
    </div>
  )
}

export default memo(CounterDisplay)
