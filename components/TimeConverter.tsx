'use client'

import { useState } from 'react'

export default function TimeConverter() {
  const [timestamp, setTimestamp] = useState('')
  const [result, setResult] = useState('')

  const handleConvert = () => {
    const ts = parseInt(timestamp, 10)
    if (isNaN(ts)) {
      setResult('请输入有效的整数')
      return
    }
    const date = new Date(ts * 1000) // time_t 是秒，JS Date 是毫秒
    setResult(date.toLocaleString())
  }

  return (
    <div className="space-y-2 rounded-md border bg-gray-50 p-4">
      <input
        type="text"
        value={timestamp}
        onChange={(e) => setTimestamp(e.target.value)}
        placeholder="输入 32 位整数 time_t"
        className="w-full rounded border p-2"
      />
      <button
        onClick={handleConvert}
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        转换
      </button>
      <div className="mt-2 font-mono">{result}</div>
    </div>
  )
}
