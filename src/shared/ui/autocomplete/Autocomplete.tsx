import React, { useEffect, useRef, useState } from 'react'

interface AutocompleteProps {
  suggestions: string[]
}

export const Autocomplete: React.FC<AutocompleteProps> = ({ suggestions }) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [cursorPosition, setCursorPosition] = useState<{
    x: number
    y: number
  }>({ x: 0, y: 0 })

  const inputRef = useRef<HTMLInputElement | null>(null)
  const tooltipRef = useRef<HTMLDivElement | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)

    // Фильтруем подсказки на основе введенного текста
    const filtered = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase()),
    )
    setFilteredSuggestions(filtered)
    setShowSuggestions(true)
  }

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      setCursorPosition({ x: event.clientX, y: event.clientY })
    }

    function handleInputFocus() {
      if (tooltipRef.current) {
        tooltipRef.current.style.display = 'block'
      }
    }

    function handleInputBlur() {
      if (tooltipRef.current) {
        tooltipRef.current.style.display = 'none'
      }
    }

    // Attach event listeners
    document.addEventListener('mousemove', handleMouseMove)
    if (inputRef.current) {
      inputRef.current.addEventListener('focus', handleInputFocus)
      inputRef.current.addEventListener('blur', handleInputBlur)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setInputValue(value)

      // Фильтруем подсказки на основе введенного текста
      const filtered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase()),
      )
      setFilteredSuggestions(filtered)
      setShowSuggestions(true)
    }
  }, [])

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion)
    setFilteredSuggestions([])
    setShowSuggestions(false)
  }

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        ref={inputRef}
      />
      <div ref={tooltipRef} className="tooltip">
        <p>{suggestions[0]}</p>
      </div>
      {/* {showSuggestions && filteredSuggestions.length > 0 && (
        <ul>
          {filteredSuggestions.map((suggestion, index) => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <li
              key={index}
              ref={tooltipRef}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )} */}
    </div>
  )
}
