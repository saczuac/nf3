import React, { useCallback, useState } from 'react'
import Link from 'next/link'
import styles from './search.module.css'

export default function Search() {
  const searchRef = React.createRef<HTMLInputElement>();
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(false)
  const [results, setResults] = useState<Array<Result>>([])

  const searchEndpoint = (query: string) => `/api/search?q=${query}`

  const onChange = useCallback((event : React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setQuery(query)
    if (query.length >= 4) {
      fetch(searchEndpoint(query))
        .then(res => res.json())
        .then(res => {
          setResults(res.results)
        })
    } else {
      setResults([])
    }
  }, [])

  const onFocus = useCallback(() => {
    setActive(true)
    window.addEventListener('click', onClick)
  }, [])

  const onClick = useCallback((event : MouseEvent)  => {
    if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
      setActive(false)
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <div
      className={styles.container}
      ref={searchRef}
    >
      <input
        className={styles.search}
        onChange={onChange}
        onFocus={onFocus}
        placeholder='CryptoPunk #9461'
        type='text'
        value={query}
      />
      { active && results.length > 0 && (
        <ul className={styles.results}>
          {results.map((result: Result) => (
            <li className={styles.result} key={result.id}>
              <Link href={result.link}>
                <a>{result.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      ) }
    </div>
  )
}
